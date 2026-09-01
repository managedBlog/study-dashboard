// Study Dashboard App
// Vanilla JS, IndexedDB storage, fair random cycling

const DB_NAME = 'StudyDashboard';
const DB_VERSION = 1;
const STORE_NAMES = {
    exams: 'exams',
    flashcards: 'flashcards',
    questions: 'questions',
    progress: 'progress',
    sessions: 'sessions'
};

let db = null;
let currentExam = null;
let currentSession = null;

// ============================================================================
// TEXT RENDERING HELPERS
// ============================================================================

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttribute(str) {
    return escapeHtml(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Converts markdown-style [label](url) links and bare http(s) URLs in plain text into
// clickable <a> tags, so rationale/explanation text with reference links (e.g. Microsoft
// Learn pages) can be opened directly. Escapes HTML first for safety, then swaps links in
// via placeholder tokens so the bare-URL pass never re-matches text already inside an
// <a> tag produced by the markdown-link pass.
function linkifyText(text) {
    let escaped = escapeHtml(text);
    const placeholders = [];
    
    // Markdown-style [label](url) links
    escaped = escaped.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (match, label, url) => {
        const token = `@@LINK${placeholders.length}@@`;
        placeholders.push(`<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`);
        return token;
    });
    
    // Bare URLs (trim trailing punctuation like a period or closing paren that's likely
    // sentence punctuation rather than part of the URL)
    escaped = escaped.replace(/https?:\/\/[^\s<)]+/g, (match) => {
        const trimmedUrl = match.replace(/[.,;:)]+$/, '');
        const trailing = match.slice(trimmedUrl.length);
        const token = `@@LINK${placeholders.length}@@`;
        placeholders.push(`<a href="${trimmedUrl}" target="_blank" rel="noopener noreferrer">${trimmedUrl}</a>${trailing}`);
        return token;
    });
    
    placeholders.forEach((html, i) => {
        escaped = escaped.replace(`@@LINK${i}@@`, html);
    });

    return escaped;
}

function hasLinks(text) {
    return /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|https?:\/\/\S+/.test(text);
}

function trimSourceUrl(url) {
    return url.replace(/[.,;:)]+$/, '');
}

function extractSourceLinks(text) {
    const source = text || '';
    const links = [];
    const markdownRanges = [];
    const seen = new Set();
    let match;
    
    const addLink = (url) => {
        const cleanUrl = trimSourceUrl(url);
        if (!seen.has(cleanUrl)) {
            seen.add(cleanUrl);
            links.push(cleanUrl);
        }
    };
    
    const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    while ((match = markdownLinkRegex.exec(source)) !== null) {
        markdownRanges.push([match.index, match.index + match[0].length]);
        addLink(match[2]);
    }
    
    const bareUrlRegex = /https?:\/\/[^\s<)]+/g;
    while ((match = bareUrlRegex.exec(source)) !== null) {
        const insideMarkdown = markdownRanges.some(([start, end]) => match.index >= start && match.index < end);
        if (!insideMarkdown) {
            addLink(match[0]);
        }
    }
    
    return links;
}

function getSourceLabel(url) {
    try {
        const parsed = new URL(url);
        const hostname = parsed.hostname.toLowerCase().replace(/^www\./, '');

        if (hostname === 'learn.microsoft.com') return 'Microsoft Learn';
        if (hostname === 'youtube.com' || hostname === 'youtu.be' || hostname.endsWith('.youtube.com')) return 'YouTube';
        if (hostname === 'github.com') return 'GitHub';
        if (hostname === 'docs.github.com') return 'GitHub Docs';

        return hostname;
    } catch {
        return 'Source';
    }
}

function displayFlashcardTextWithoutLinks(text) {
    return (text || '')
        .replace(/\[SRC:[^\]]+\]/gi, '')
        .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '')
        .replace(/https?:\/\/\S+/g, '')
        .replace(/\b(Sources?|References?)\s*:\s*/gi, '')
        .replace(/\(\s*\)/g, '')
        .replace(/\s+([.,;:!?])/g, '$1')
        .replace(/([.,;:!?])\1+/g, '$1')
        .replace(/\s{2,}/g, ' ')
        .trim();
}

function renderFlashcardLinks(card) {
    const linksPanel = document.getElementById('flashcardLinks');
    if (!linksPanel) return;

    const links = extractSourceLinks(card?.a || '');

    if (!currentSession.showingAnswer || links.length === 0) {
        linksPanel.innerHTML = '';
        linksPanel.style.display = 'none';
        return;
    }

    linksPanel.innerHTML = links
        .map((url) => {
            const label = getSourceLabel(url);
            return `<p class="source-link">Source: <a href="${escapeAttribute(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></p>`;
        })
        .join('');
    linksPanel.style.display = 'block';
}

// ============================================================================
// DATABASE INITIALIZATION
// ============================================================================

async function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            db = request.result;
            resolve();
        };
        
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            
            // Exams: {id, code, title, metadata}
            if (!db.objectStoreNames.contains(STORE_NAMES.exams)) {
                db.createObjectStore(STORE_NAMES.exams, { keyPath: 'id' });
            }
            
            // Flashcards: {id, examId, q, a, topics}
            if (!db.objectStoreNames.contains(STORE_NAMES.flashcards)) {
                db.createObjectStore(STORE_NAMES.flashcards, { keyPath: 'id' });
            }
            
            // Questions: {id, examId, text, options, answer, explanation, difficulty, topics}
            if (!db.objectStoreNames.contains(STORE_NAMES.questions)) {
                db.createObjectStore(STORE_NAMES.questions, { keyPath: 'id' });
            }
            
            // Progress: {id, examId, mode, seenIds, cycle, lastUpdated}
            if (!db.objectStoreNames.contains(STORE_NAMES.progress)) {
                db.createObjectStore(STORE_NAMES.progress, { keyPath: 'id' });
            }
            
            // Sessions: {id, examId, mode, date, score, topicScores, cardCount}
            if (!db.objectStoreNames.contains(STORE_NAMES.sessions)) {
                db.createObjectStore(STORE_NAMES.sessions, { keyPath: 'id' });
            }
        };
    });
}

// ============================================================================
// FILE PARSING
// ============================================================================

function parseFlashcardsMarkdown(content) {
    const cards = [];
    const lines = content.split('\n');
    
    let currentCard = null;
    const regex = /^\*\*(\d+)\.\s+(.+?)\*\*$/;
    
    for (const line of lines) {
        const match = line.match(regex);
        if (match) {
            // Save previous card
            if (currentCard) {
                currentCard.answer = currentCard.answer.trim();
                cards.push(currentCard);
            }
            
            currentCard = {
                number: parseInt(match[1]),
                question: match[2].trim(),
                answer: ''
            };
        } else if (currentCard && line.trim() && !line.startsWith('#')) {
            // Build answer
            currentCard.answer += (currentCard.answer ? ' ' : '') + line.trim();
        }
    }
    
    if (currentCard) {
        currentCard.answer = currentCard.answer.trim();
        cards.push(currentCard);
    }
    
    return cards;
}

// Bank 1 - "Corpus Question Pool": ### Q#### header, *Topic · Difficulty* line,
// > blockquote scenario (+ optional bold follow-up question line), - **A.** options,
// **Answer: X**, then free-text explanation.
function parseBank1Questions(content) {
    const questions = [];
    const lines = content.split('\n');
    
    let current = null;
    let inOptions = false;
    const qRegex = /^###\s+Q(\d+)\s+-\s+(.+)$/;
    const topicRegex = /^\*(.+?)\s·\s(.+?)\*$/;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Question header
        const qMatch = line.match(qRegex);
        if (qMatch) {
            if (current) questions.push(current);
            current = {
                number: parseInt(qMatch[1]),
                title: qMatch[2].trim(),
                topic: '',
                difficulty: '',
                text: '',
                options: [],
                answer: '',
                explanation: ''
            };
            inOptions = false;
            continue;
        }
        
        if (!current) continue;
        
        // Topic and difficulty
        const topicMatch = line.match(topicRegex);
        if (topicMatch && current.topic === '') {
            current.topic = topicMatch[1].trim();
            current.difficulty = topicMatch[2].trim();
            continue;
        }
        
        // Question text (in blockquote)
        if (line.startsWith('> ')) {
            current.text += (current.text ? ' ' : '') + line.substring(2).trim();
            continue;
        }
        
        // Options
        if (line.match(/^-\s+\*\*[A-D]\.\*\*/)) {
            inOptions = true;
            const optMatch = line.match(/^-\s+\*\*([A-D])\.\*\*\s+(.+)$/);
            if (optMatch) {
                current.options.push({
                    letter: optMatch[1],
                    text: optMatch[2].trim()
                });
            }
            continue;
        }
        
        // Answer
        if (line.match(/^\*\*Answer:\s+[A-D]\*\*/)) {
            const ansMatch = line.match(/^\*\*Answer:\s+([A-D])\*\*/);
            if (ansMatch) current.answer = ansMatch[1];
            continue;
        }
        
        // Follow-up question line, entirely bold (e.g. "**Why will this not work?**").
        // Appears after the scenario blockquote and before the options list - without this,
        // the scenario setup shows with no actual question attached to it.
        if (!inOptions && line.match(/^\*\*(.+)\*\*$/)) {
            const boldMatch = line.match(/^\*\*(.+)\*\*$/);
            current.text += (current.text ? ' ' : '') + boldMatch[1].trim();
            continue;
        }
        
        // Explanation
        if (line.trim() && !line.startsWith('#') && !line.startsWith('*') && 
            !line.startsWith('-') && !line.startsWith('>') && inOptions && current.answer) {
            current.explanation += (current.explanation ? ' ' : '') + line.trim();
        }
    }
    
    if (current) questions.push(current);
    
    return questions;
}

// Bank 2 - "Per-objective sets": grouped under "# Q: <Objective>" or "# L1 Q: <Objective>"
// section headers, individual questions are bare "### N" headers with plain-text
// (non-blockquote) question text and "- **A.**" options. Answers/explanations are NOT
// inline - they live in a trailing "## ANSWER KEY" section per set, formatted as
// "### N - **LETTER. short text**" followed by explanation paragraphs. Requires a
// two-pass approach: parse questions, then back-fill from the answer key by set+number.
function parseBank2Questions(content) {
    const questions = [];
    const lines = content.split('\n');
    
    const setRegex = /^#\s+(?:L1\s+)?Q:\s+(.+)$/;
    const answerKeyHeaderRegex = /^##\s+ANSWER KEY\s*$/;
    const qRegex = /^###\s+(\d+)\s*$/;
    const optRegex = /^-\s+\*\*([A-F])\.\*\*\s+(.+)$/;
    const ansKeyEntryRegex = /^###\s+(\d+)\s+-\s+\*\*([A-F])\./;
    
    let currentSetTitle = '';
    let current = null;
    let inOptions = false;
    let mode = 'questions'; // 'questions' | 'answerkey'
    const answerKeyMap = {}; // "setTitle::number" -> { letter, explanation }
    let currentAnswerKey = null;
    
    for (const line of lines) {
        const setMatch = line.match(setRegex);
        if (setMatch) {
            if (current) questions.push(current);
            currentSetTitle = setMatch[1].trim();
            mode = 'questions';
            current = null;
            inOptions = false;
            currentAnswerKey = null;
            continue;
        }
        
        if (answerKeyHeaderRegex.test(line)) {
            if (current) questions.push(current);
            mode = 'answerkey';
            current = null;
            currentAnswerKey = null;
            continue;
        }
        
        if (mode === 'questions') {
            const qMatch = line.match(qRegex);
            if (qMatch) {
                if (current) questions.push(current);
                current = {
                    number: parseInt(qMatch[1]),
                    setTitle: currentSetTitle,
                    topic: currentSetTitle,
                    difficulty: '',
                    text: '',
                    options: [],
                    answer: '',
                    explanation: ''
                };
                inOptions = false;
                continue;
            }
            
            if (!current) continue;
            
            const optMatch = line.match(optRegex);
            if (optMatch) {
                inOptions = true;
                current.options.push({ letter: optMatch[1], text: optMatch[2].trim() });
                continue;
            }
            
            if (line.trim() === '---' || line.startsWith('#')) continue;
            
            // Question text is plain paragraph text (not blockquoted) before options begin
            if (!inOptions && line.trim()) {
                current.text += (current.text ? ' ' : '') + line.trim();
            }
        } else {
            // answerkey mode
            const ansMatch = line.match(ansKeyEntryRegex);
            if (ansMatch) {
                currentAnswerKey = `${currentSetTitle}::${parseInt(ansMatch[1])}`;
                answerKeyMap[currentAnswerKey] = { letter: ansMatch[2], explanation: '' };
                continue;
            }
            
            if (line.trim() === '---') {
                // End of this answer entry's explanation - stop attributing trailing
                // narrative text (e.g. domain-weight commentary) to the last answer.
                currentAnswerKey = null;
                continue;
            }
            
            if (currentAnswerKey && line.trim() && !line.startsWith('#')) {
                answerKeyMap[currentAnswerKey].explanation +=
                    (answerKeyMap[currentAnswerKey].explanation ? ' ' : '') + line.trim();
            }
        }
    }
    
    if (current) questions.push(current);
    
    questions.forEach(q => {
        const ans = answerKeyMap[`${q.setTitle}::${q.number}`];
        if (ans) {
            q.answer = ans.letter;
            q.explanation = ans.explanation;
        }
    });
    
    return questions;
}

// Bank 3 - "Official Module Assessments": grouped under "## Path N - <Title>" then
// "### Module: <Title>" section headers. Questions are "**N.** text" (question text can
// wrap onto following plain lines), options are "- A. text" (no bold letter, may be only
// 3 options), and the answer is an inline blockquote immediately after the options:
// "> **B** · **Confidence** · `TAG` - explanation...", possibly continued on further
// "> " lines.
function parseBank3Questions(content) {
    const questions = [];
    const lines = content.split('\n');
    
    const moduleRegex = /^###\s+Module:\s+(.+)$/;
    const qRegex = /^\*\*(\d+)\.\*\*\s+(.+)$/;
    // Options usually appear one per line ("- A. text"), but some are crammed onto a
    // single line separated by "·" ("- A. text · B. text · **C. text**") - detect either.
    const optLineRegex = /^-\s+\**[A-F]\./;
    const optSegmentRegex = /^\**([A-F])\.\**\s*(.+?)\**\s*$/;
    const ansRegex = /^>\s+\*\*([A-F])\*\*\s*(.*)$/;
    
    let currentModule = '';
    let current = null;
    let inOptions = false;
    
    for (const line of lines) {
        const modMatch = line.match(moduleRegex);
        if (modMatch) {
            currentModule = modMatch[1].trim();
            continue;
        }
        
        const qMatch = line.match(qRegex);
        if (qMatch) {
            if (current) questions.push(current);
            current = {
                number: parseInt(qMatch[1]),
                topic: currentModule,
                difficulty: '',
                text: qMatch[2].trim(),
                options: [],
                answer: '',
                explanation: ''
            };
            inOptions = false;
            continue;
        }
        
        if (!current) continue;
        
        if (optLineRegex.test(line)) {
            inOptions = true;
            const segments = line.replace(/^-\s+/, '').split(/\s*·\s*/);
            segments.forEach(seg => {
                const segMatch = seg.match(optSegmentRegex);
                if (segMatch) {
                    current.options.push({ letter: segMatch[1], text: segMatch[2].replace(/\*\*/g, '').trim() });
                }
            });
            continue;
        }
        
        const ansMatch = line.match(ansRegex);
        if (ansMatch) {
            current.answer = ansMatch[1];
            const rest = ansMatch[2].replace(/^·\s*/, '').trim();
            if (rest) current.explanation += (current.explanation ? ' ' : '') + rest;
            continue;
        }
        
        // Explanation continuation (further blockquote lines after the answer line)
        if (line.startsWith('> ') && current.answer) {
            current.explanation += (current.explanation ? ' ' : '') + line.substring(2).trim();
            continue;
        }
        
        // Question text continuation (wraps onto following plain lines before options)
        if (!inOptions && !current.answer && line.trim() && !line.startsWith('#') && !line.startsWith('>')) {
            current.text += ' ' + line.trim();
        }
    }
    
    if (current) questions.push(current);
    
    return questions;
}

function parseUnifiedQuestions(content) {
    const questions = [];
    const lines = content.split('\n');

    const qRegex = /^###\s+Q(\d+)\s+—\s+(.+)$/;
    const metadataRegex = /^\*Bank:\s*([^·*]+?)\s*·\s*Domain:\s*([^·*]+?)\s*·\s*Difficulty:\s*([^*]+)\*$/;
    const optionRegex = /^-\s+\*\*([A-D])\.\*\*\s+(.+)$/;
    const answerRegex = /^\*\*Answer:\*\*\s*([A-D])\s*$/;
    const confidenceRegex = /^\*\*Confidence:\*\*\s*(.+)$/;
    const sourceRegex = /^\*\*Source:\*\*\s*(.+)$/;

    let current = null;
    let inOptions = false;

    const pushCurrent = () => {
        if (!current) return;
        current.text = current.text.trim();
        current.explanation = current.explanation.trim();
        questions.push(current);
    };

    for (const line of lines) {
        const qMatch = line.match(qRegex);
        if (qMatch) {
            pushCurrent();
            current = {
                number: parseInt(qMatch[1]),
                title: qMatch[2].trim(),
                topic: '',
                difficulty: '',
                text: '',
                options: [],
                answer: '',
                explanation: '',
                source: '',
                bank: ''
            };
            inOptions = false;
            continue;
        }

        if (!current) continue;

        const metadataMatch = line.match(metadataRegex);
        if (metadataMatch && !current.topic) {
            current.bank = metadataMatch[1].trim();
            current.topic = metadataMatch[2].trim();
            current.difficulty = metadataMatch[3].trim();
            continue;
        }

        const optionMatch = line.match(optionRegex);
        if (optionMatch) {
            inOptions = true;
            current.options.push({ letter: optionMatch[1], text: optionMatch[2].trim() });
            continue;
        }

        const answerMatch = line.match(answerRegex);
        if (answerMatch) {
            current.answer = answerMatch[1];
            inOptions = false;
            continue;
        }

        const confidenceMatch = line.match(confidenceRegex);
        if (confidenceMatch) {
            current.confidence = confidenceMatch[1].trim();
            continue;
        }

        const sourceMatch = line.match(sourceRegex);
        if (sourceMatch) {
            current.source = sourceMatch[1].trim();
            continue;
        }

        if (!current.answer) {
            if (line.startsWith('> ')) {
                current.text += (current.text ? ' ' : '') + line.substring(2).trim();
                continue;
            }

            if (!inOptions) {
                const promptMatch = line.match(/^\*\*(.+)\*\*$/);
                if (promptMatch) {
                    current.text += (current.text ? ' ' : '') + promptMatch[1].trim();
                    continue;
                }

                if (line.trim() && !line.startsWith('#') && !line.startsWith('*') && !line.startsWith('-')) {
                    current.text += (current.text ? ' ' : '') + line.trim();
                    continue;
                }
            }
        } else if (line.trim()) {
            if (line.startsWith('> ')) {
                current.explanation += (current.explanation ? ' ' : '') + line.substring(2).trim();
            } else if (!line.startsWith('#') && !line.startsWith('*') && !line.startsWith('-')) {
                current.explanation += (current.explanation ? ' ' : '') + line.trim();
            }
        }
    }

    pushCurrent();
    return questions;
}

// The source file may be either a unified per-question format or the legacy file that
// concatenates 3 independently-formatted banks. Detect unified first, then fall back to
// the legacy bank split/parsers.
function parseQuestionsMarkdown(content) {
    const unifiedHeaderRegex = /^###\s+Q\d{3,4}\s+—\s+.+$/m;
    const unifiedMetadataRegex = /^\*Bank:\s*[^*]+·\s*Domain:\s*[^*]+·\s*Difficulty:\s*[^*]+\*$/m;

    let parsed;

    if (unifiedHeaderRegex.test(content) && unifiedMetadataRegex.test(content)) {
        parsed = parseUnifiedQuestions(content);
        if (parsed.length === 0) {
            throw new Error('Detected unified question format, but failed to parse any question blocks.');
        }
    } else {
        const bank1Idx = content.indexOf('# BANK 1');
        const bank2Idx = content.indexOf('# BANK 2');
        const bank3Idx = content.indexOf('# BANK 3');

        const bank1Content = content.slice(Math.max(bank1Idx, 0), bank2Idx > -1 ? bank2Idx : undefined);
        const bank2Content = bank2Idx > -1 ? content.slice(bank2Idx, bank3Idx > -1 ? bank3Idx : undefined) : '';
        const bank3Content = bank3Idx > -1 ? content.slice(bank3Idx) : '';

        const bank1 = parseBank1Questions(bank1Content).map(q => ({ ...q, bank: 'Corpus Question Pool' }));
        const bank2 = bank2Content ? parseBank2Questions(bank2Content).map(q => ({ ...q, bank: 'Per-Objective Sets' })) : [];
        const bank3 = bank3Content ? parseBank3Questions(bank3Content).map(q => ({ ...q, bank: 'Official Module Assessments' })) : [];

        parsed = [...bank1, ...bank2, ...bank3];
    }

    // Drop anything that couldn't be matched to a scoreable answer - can't quiz on it.
    const usable = parsed.filter(
        q => q.answer && q.options.length >= 2 && q.text.trim()
    );

    return usable.map((q, i) => ({
        ...q,
        id: `q_${i}`,
        topics: q.topic ? [q.topic] : []
    }));
}


async function loadFilesFromInput(files) {
    let metadata = null;
    let flashcardsContent = '';
    let questionsContent = '';
    
    for (const file of files) {
        const rawContent = await file.text();
        // Normalize CRLF/CR to LF so line-anchored regexes ($ / ^) match reliably
        // regardless of the source file's line-ending style (Windows-authored .md files use CRLF).
        const content = rawContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        if (file.name === 'metadata.json') {
            metadata = JSON.parse(content);
        } else if (file.name.includes('FLASHCARDS')) {
            flashcardsContent = content;
        } else if (file.name.includes('QUESTIONS')) {
            questionsContent = content;
        }
    }
    
    if (!metadata) {
        throw new Error('metadata.json is required');
    }
    
    if (!flashcardsContent || !questionsContent) {
        throw new Error('Both flashcards and questions files are required');
    }
    
    const flashcards = parseFlashcardsMarkdown(flashcardsContent);
    const questions = parseQuestionsMarkdown(questionsContent);
    
    // Fail loudly instead of silently storing an empty, unusable exam.
    // (A parse regression here previously caused "Start" to hang forever with no error.)
    if (flashcards.length === 0 || questions.length === 0) {
        throw new Error(
            `Parsing failed: found ${flashcards.length} flashcards and ${questions.length} questions. ` +
            `Check that the .md files match the expected format.`
        );
    }
    
    // Store in DB
    const examId = `exam_${metadata.examCode}`;
    const exam = {
        id: examId,
        code: metadata.examCode,
        title: metadata.examTitle,
        metadata
    };
    
    const tx = db.transaction(
        [STORE_NAMES.exams, STORE_NAMES.flashcards, STORE_NAMES.questions],
        'readwrite'
    );
    
    await new Promise((resolve, reject) => {
        const flashcardStore = tx.objectStore(STORE_NAMES.flashcards);
        const questionStore = tx.objectStore(STORE_NAMES.questions);
        let clearedStores = 0;

        const writeReplacementContent = () => {
            tx.objectStore(STORE_NAMES.exams).put(exam);

            flashcards.forEach((card, i) => {
                flashcardStore.put({
                    id: `fc_${examId}_${i}`,
                    examId,
                    q: card.question,
                    a: card.answer
                });
            });

            questions.forEach((q) => {
                questionStore.put({
                    // Question IDs such as q_0 repeat across packs. Scope the IndexedDB
                    // key to the exam so one import cannot overwrite another pack.
                    id: `${examId}_${q.id}`,
                    examId,
                    text: q.text,
                    options: q.options,
                    answer: q.answer,
                    explanation: q.explanation,
                    difficulty: q.difficulty,
                    topics: q.topics
                });
            });
        };

        // Delete and replace in one transaction so a failed import rolls back to
        // the previously working pack instead of leaving it empty.
        for (const store of [flashcardStore, questionStore]) {
            const cursorRequest = store.openCursor();
            cursorRequest.onerror = () => reject(cursorRequest.error);
            cursorRequest.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    if (cursor.value.examId === examId) {
                        cursor.delete();
                    }
                    cursor.continue();
                    return;
                }

                clearedStores++;
                if (clearedStores === 2) {
                    writeReplacementContent();
                }
            };
        }

        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error);
    });
    
    currentExam = exam;
    return { exam, flashcardCount: flashcards.length, questionCount: questions.length };
}

// ============================================================================
// FAIR RANDOM CYCLING ALGORITHM
// ============================================================================

async function getProgressTracker(examId, mode) {
    const id = `${examId}_${mode}`;
    return new Promise((resolve, reject) => {
        const request = db.transaction([STORE_NAMES.progress]).objectStore(STORE_NAMES.progress).get(id);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            resolve(request.result || { id, examId, mode, seenIds: [], cycle: 0 });
        };
    });
}

async function saveProgressTracker(tracker) {
    return new Promise((resolve, reject) => {
        const request = db.transaction([STORE_NAMES.progress], 'readwrite')
            .objectStore(STORE_NAMES.progress)
            .put({ ...tracker, lastUpdated: new Date().toISOString() });
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve();
    });
}

async function selectRandomItems(examId, mode, count, allItemIds) {
    const tracker = await getProgressTracker(examId, mode);
    
    // Build unseen pool
    const seenSet = new Set(tracker.seenIds);
    const unseenPool = allItemIds.filter(id => !seenSet.has(id));
    
    let selected = [];
    
    // Case 1: Enough unseen items
    if (unseenPool.length >= count) {
        selected = shuffleArray(unseenPool).slice(0, count);
        tracker.seenIds.push(...selected);
    } else {
        // Case 2: Not enough unseen → use all unseen, reset, continue from full pool
        selected = unseenPool;
        tracker.cycle++;
        const remaining = count - selected.length;
        const selectedSet = new Set(selected);
        const refillPool = shuffleArray(allItemIds.filter(id => !selectedSet.has(id)));
        const refill = refillPool.slice(0, remaining);
        selected = selected.concat(refill);
        tracker.seenIds = refill;
    }
    
    await saveProgressTracker(tracker);
    
    return selected;
}

function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getPrimaryTopic(question) {
    if (Array.isArray(question?.topics) && question.topics.length > 0 && question.topics[0]) {
        return String(question.topics[0]).trim();
    }
    return 'General';
}

async function populateQuizTopicFilter() {
    const topicSelect = document.getElementById('quizTopicFilter');
    if (!topicSelect) return;

    topicSelect.innerHTML = '';
    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'All topics';
    topicSelect.appendChild(allOption);

    if (!currentExam?.id) return;

    const allQuestions = await new Promise((resolve, reject) => {
        const tx = db.transaction([STORE_NAMES.questions]);
        const request = tx.objectStore(STORE_NAMES.questions).getAll();
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });

    const topics = [...new Set(allQuestions
        .filter((q) => q.examId === currentExam.id)
        .map((q) => getPrimaryTopic(q))
        .filter(Boolean))]
        .sort((a, b) => a.localeCompare(b));

    topics.forEach((topic) => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicSelect.appendChild(option);
    });
}

// ============================================================================
// UI HANDLERS
// ============================================================================

document.getElementById('loadFileBtn').addEventListener('click', () => {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', async (e) => {
    try {
        const { exam, flashcardCount, questionCount } = await loadFilesFromInput(e.target.files);
        await populateQuizTopicFilter();
        await updateFlashcardCountHint();
        await updateQuizCountHint();
        
        // Show status (actual parsed counts, not the static metadata.json numbers)
        const info = document.getElementById('contentInfo');
        info.innerHTML = `
            <strong>${exam.title}</strong><br>
            Flashcards: ${flashcardCount}<br>
            Questions: ${questionCount}
        `;
        
        document.getElementById('fileStatus').style.display = 'block';
        document.getElementById('modeButtons').style.display = 'flex';
        
        e.target.value = ''; // Reset input
    } catch (err) {
        alert('Error loading files: ' + err.message);
    }
});

document.getElementById('flashcardModeBtn').addEventListener('click', () => {
    document.getElementById('modeScreen').style.display = 'none';
    document.getElementById('flashcardScreen').style.display = 'block';
    updateFlashcardCountHint().catch((err) => {
        console.warn('Could not update flashcard count hint:', err);
    });
});

document.getElementById('quizModeBtn').addEventListener('click', () => {
    document.getElementById('modeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    populateQuizTopicFilter().then(updateQuizCountHint).catch((err) => {
        console.warn('Could not populate topic filter:', err);
    });
});

document.getElementById('quizDifficultyFilter').addEventListener('change', () => {
    updateQuizCountHint().catch((err) => console.warn('Could not update quiz count hint:', err));
});

document.getElementById('quizTopicFilter').addEventListener('change', () => {
    updateQuizCountHint().catch((err) => console.warn('Could not update quiz count hint:', err));
});

async function getAllFlashcardsForExam() {
    if (!currentExam?.id) return [];
    const allCards = await new Promise((resolve, reject) => {
        const tx = db.transaction([STORE_NAMES.flashcards]);
        const request = tx.objectStore(STORE_NAMES.flashcards).getAll();
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });
    return allCards.filter((c) => c.examId === currentExam.id);
}

async function updateFlashcardCountHint() {
    const input = document.getElementById('flashcardCount');
    const hint = document.getElementById('flashcardCountHint');
    if (!input || !hint) return;

    const cards = await getAllFlashcardsForExam();
    const total = cards.length;
    input.max = total > 0 ? String(total) : '';
    hint.textContent = total > 0 ? `${total} card(s) available.` : 'Load exam files to see available cards.';
    if (total > 0 && parseInt(input.value, 10) > total) input.value = String(total);
}

async function getAllQuestionsForExam() {
    if (!currentExam?.id) return [];
    const allQuestions = await new Promise((resolve, reject) => {
        const tx = db.transaction([STORE_NAMES.questions]);
        const request = tx.objectStore(STORE_NAMES.questions).getAll();
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });
    return allQuestions.filter((q) => q.examId === currentExam.id);
}

async function updateQuizCountHint() {
    const input = document.getElementById('quizCount');
    const hint = document.getElementById('quizCountHint');
    if (!input || !hint) return;

    const difficultyFilter = document.getElementById('quizDifficultyFilter').value;
    const topicFilter = document.getElementById('quizTopicFilter').value;
    const questions = await getAllQuestionsForExam();
    const total = questions.filter((q) => {
        if (difficultyFilter !== 'all' && (q.difficulty || 'Unknown') !== difficultyFilter) return false;
        if (topicFilter !== 'all' && getPrimaryTopic(q) !== topicFilter) return false;
        return true;
    }).length;

    input.max = total > 0 ? String(total) : '';
    hint.textContent = total > 0 ? `${total} question(s) match the current filters.` : 'Load exam files to see available questions.';
    if (total > 0 && parseInt(input.value, 10) > total) input.value = String(total);
}

document.getElementById('backFromFlashcard').addEventListener('click', () => {
    document.getElementById('flashcardScreen').style.display = 'none';
    document.getElementById('flashcardSetup').style.display = 'block';
    document.getElementById('flashcardSession').style.display = 'none';
    document.getElementById('modeScreen').style.display = 'block';
});

document.getElementById('backFromQuiz').addEventListener('click', () => {
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('quizSetup').style.display = 'block';
    document.getElementById('quizSession').style.display = 'none';
    document.getElementById('modeScreen').style.display = 'block';
});

// ============================================================================
// FLASHCARD MODE
// ============================================================================

document.getElementById('startFlashcardBtn').addEventListener('click', async () => {
    // Get all flashcard IDs
    const allCards = await new Promise((resolve, reject) => {
        const tx = db.transaction([STORE_NAMES.flashcards]);
        const request = tx.objectStore(STORE_NAMES.flashcards)
            .getAll();
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });
    
    if (allCards.length === 0) {
        alert('No flashcards are loaded. Please use "Load Exam Files" first.');
        return;
    }

    const count = Math.max(1, Math.min(allCards.length, parseInt(document.getElementById('flashcardCount').value, 10) || allCards.length));
    
    const cardIds = allCards.map(c => c.id);
    const selectedIds = await selectRandomItems(currentExam.id, 'flashcard', count, cardIds);
    
    // Load selected cards (guard against an empty selection hanging this promise forever)
    const selectedCards = selectedIds.length === 0 ? [] : await new Promise((resolve, reject) => {
        const tx = db.transaction([STORE_NAMES.flashcards]);
        const store = tx.objectStore(STORE_NAMES.flashcards);
        const results = [];
        const remaining = selectedIds.length;
        let completed = 0;
        
        selectedIds.forEach(id => {
            const req = store.get(id);
            req.onerror = () => reject(req.error);
            req.onsuccess = () => {
                results.push(req.result);
                completed++;
                if (completed === remaining) resolve(results);
            };
        });
    });
    
    startFlashcardSession(selectedCards);
});

function startFlashcardSession(cards) {
    currentSession = {
        mode: 'flashcard',
        cards: cards,
        current: 0,
        reviewed: 0,
        showingAnswer: false
    };
    
    document.getElementById('flashcardSetup').style.display = 'none';
    document.getElementById('flashcardSession').style.display = 'block';
    
    showFlashcard();
}

function showFlashcard() {
    const card = currentSession.cards[currentSession.current];
    const total = currentSession.cards.length;
    
    document.getElementById('flashcardProgress').textContent = `${currentSession.current + 1} / ${total}`;
    document.getElementById('flashcardProgressFill').style.width = `${((currentSession.current + 1) / total) * 100}%`;
    currentSession.reviewed = Math.max(currentSession.reviewed, currentSession.current + 1);

    currentSession.showingAnswer = false;
    document.getElementById('cardText').textContent = displayFlashcardTextWithoutLinks(card.q);
    renderFlashcardLinks(card);

    const face = document.getElementById('cardFace');
    face.classList.remove('flipping', 'answer-side');
    
    document.getElementById('prevCardBtn').disabled = currentSession.current === 0;
    document.getElementById('nextControls').style.display = 'flex';
    document.getElementById('flashcardSummary').style.display = 'none';
}

document.getElementById('flashcardCard').addEventListener('click', () => {
    const card = currentSession.cards[currentSession.current];
    const face = document.getElementById('cardFace');
    const textEl = document.getElementById('cardText');
    
    // Rotate to 90deg (edge-on, so the card visually "disappears"), swap the text
    // while it's edge-on, then rotate back to 0deg showing the new content. This
    // avoids relying on backface-visibility, which some browsers render unreliably
    // (e.g. it can silently stop hiding the back face when combined with overflow).
    // Toggling both directions (not just reveal-once) lets the user flip back and
    // forth between question and answer before advancing.
    face.classList.add('flipping');

    setTimeout(() => {
        currentSession.showingAnswer = !currentSession.showingAnswer;
        textEl.textContent = displayFlashcardTextWithoutLinks(currentSession.showingAnswer ? card.a : card.q);
        face.classList.toggle('answer-side', currentSession.showingAnswer);
        renderFlashcardLinks(card);
        face.classList.remove('flipping');
    }, 250);
});

document.getElementById('prevCardBtn').addEventListener('click', () => {
    if (currentSession.current === 0) return;
    currentSession.current--;
    showFlashcard();
});

document.getElementById('nextCardBtn').addEventListener('click', () => {
    currentSession.current++;
    
    if (currentSession.current >= currentSession.cards.length) {
        currentSession.reviewed = currentSession.cards.length;
        endFlashcardSession();
    } else {
        showFlashcard();
    }
});

function endFlashcardSession() {
    document.getElementById('cardsReviewed').textContent = currentSession.reviewed;
    document.getElementById('flashcardSession').style.display = 'none';
    document.getElementById('flashcardSummary').style.display = 'block';
}

document.getElementById('endFlashcardBtn').addEventListener('click', () => {
    document.getElementById('flashcardScreen').style.display = 'none';
    document.getElementById('flashcardSetup').style.display = 'block';
    document.getElementById('flashcardSession').style.display = 'none';
    document.getElementById('modeScreen').style.display = 'block';
});

// ============================================================================
// QUIZ MODE
// ============================================================================

document.getElementById('startQuizBtn').addEventListener('click', async () => {
    const requestedCount = Math.max(1, parseInt(document.getElementById('quizCount').value, 10) || 30);
    const difficultyFilter = document.getElementById('quizDifficultyFilter').value;
    const topicFilter = document.getElementById('quizTopicFilter').value;
    const shuffleOptions = document.getElementById('quizShuffleOptions').checked;
    
    // Get all question IDs
    const allQuestions = await new Promise((resolve, reject) => {
        const tx = db.transaction([STORE_NAMES.questions]);
        const request = tx.objectStore(STORE_NAMES.questions)
            .getAll();
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });
    
    const examQuestions = allQuestions.filter((q) => q.examId === currentExam.id);
    if (examQuestions.length === 0) {
        alert('No questions are loaded. Please use "Load Exam Files" first.');
        return;
    }

    const filteredQuestions = examQuestions.filter((q) => {
        if (difficultyFilter !== 'all' && (q.difficulty || 'Unknown') !== difficultyFilter) return false;
        if (topicFilter !== 'all' && getPrimaryTopic(q) !== topicFilter) return false;
        return true;
    });

    if (filteredQuestions.length === 0) {
        alert('No questions match the selected quiz options. Try a different filter.');
        return;
    }

    const count = Math.min(requestedCount, filteredQuestions.length);
    if (count < requestedCount) {
        alert(`Only ${count} question(s) match the selected quiz options. Starting with ${count}.`);
    }

    const questionIds = filteredQuestions.map((q) => q.id);
    const trackerMode = `quiz:${difficultyFilter}:${topicFilter}`;
    const selectedIds = await selectRandomItems(currentExam.id, trackerMode, count, questionIds);
    const questionById = new Map(filteredQuestions.map((q) => [q.id, q]));
    const selectedQuestions = selectedIds.map((id) => questionById.get(id)).filter(Boolean);

    startQuizSession(selectedQuestions, {
        requestedCount,
        shuffleOptions,
        difficultyFilter,
        topicFilter
    });
});

function startQuizSession(questions, runtimeOptions = {}) {
    currentSession = {
        mode: 'quiz',
        questions: questions,
        current: 0,
        answers: {},
        score: 0,
        runtimeOptions
    };
    
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizSession').style.display = 'block';
    
    showQuestion();
}

let quizAnswerLocked = false;

function showQuestion() {
    const q = currentSession.questions[currentSession.current];
    const total = currentSession.questions.length;
    
    quizAnswerLocked = false;
    
    document.getElementById('quizProgress').textContent = `${currentSession.current + 1} / ${total}`;
    document.getElementById('quizProgressFill').style.width = `${((currentSession.current + 1) / total) * 100}%`;
    
    document.getElementById('questionText').textContent = q.text;
    
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    const optionsForRender = currentSession.runtimeOptions?.shuffleOptions
        ? shuffleArray(q.options || [])
        : (q.options || []);

    optionsForRender.forEach((opt) => {
        const label = document.createElement('label');
        label.className = 'option';
        label.innerHTML = `
            <input type="radio" name="answer" value="${opt.letter}">
            <strong>${opt.letter}.</strong> ${opt.text}
        `;
        label.addEventListener('click', () => {
            if (quizAnswerLocked) return;
            document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
            label.classList.add('selected');
            currentSession.answers[q.id] = opt.letter;
            document.getElementById('submitAnswerBtn').disabled = false;
        });
        container.appendChild(label);
    });
    
    document.getElementById('feedbackPanel').style.display = 'none';
    document.getElementById('submitAnswerBtn').textContent = 'Submit Answer';
    document.getElementById('submitAnswerBtn').disabled = true;
}

document.getElementById('submitAnswerBtn').addEventListener('click', () => {
    const q = currentSession.questions[currentSession.current];
    
    if (!quizAnswerLocked) {
        // Phase 1: lock in the answer, reveal correctness + explanation
        quizAnswerLocked = true;
        const userAnswer = currentSession.answers[q.id];
        const isCorrect = userAnswer === q.answer;
        
        if (isCorrect) currentSession.score++;
        
        document.querySelectorAll('.option').forEach((optEl) => {
            const val = optEl.querySelector('input').value;
            optEl.classList.add('locked');
            if (val === q.answer) {
                optEl.classList.add('correct');
            } else if (val === userAnswer) {
                optEl.classList.add('incorrect');
            }
        });
        
        const feedbackResult = document.getElementById('feedbackResult');
        feedbackResult.textContent = isCorrect
            ? '✅ Correct!'
            : `❌ Incorrect — correct answer: ${q.answer}`;
        feedbackResult.className = 'feedback-result ' + (isCorrect ? 'correct' : 'incorrect');
        
        const feedbackExplanation = document.getElementById('feedbackExplanation');
        if (q.explanation) {
            feedbackExplanation.innerHTML = linkifyText(q.explanation);
            feedbackExplanation.style.display = 'block';
        } else {
            feedbackExplanation.style.display = 'none';
        }
        
        document.getElementById('feedbackPanel').style.display = 'block';
        
        const isLastQuestion = currentSession.current >= currentSession.questions.length - 1;
        document.getElementById('submitAnswerBtn').textContent = isLastQuestion ? 'View Results' : 'Next Question';
    } else {
        // Phase 2: advance to next question (or finish)
        currentSession.current++;
        
        if (currentSession.current >= currentSession.questions.length) {
            endQuizSession();
        } else {
            showQuestion();
        }
    }
});

async function endQuizSession() {
    const total = currentSession.questions.length;
    const score = currentSession.score;
    const percentage = Math.round((score / total) * 100);
    
    document.getElementById('scoreNumber').textContent = `${percentage}%`;
    
    // Topic breakdown
    const topicScores = {};
    currentSession.questions.forEach((q) => {
        const topic = getPrimaryTopic(q);
        if (!topicScores[topic]) topicScores[topic] = { correct: 0, total: 0 };
        topicScores[topic].total++;
        if (currentSession.answers[q.id] === q.answer) {
            topicScores[topic].correct++;
        }
    });
    
    const breakdown = document.getElementById('topicBreakdown');
    breakdown.innerHTML = '<h4>Topic Breakdown</h4>';
    Object.entries(topicScores).forEach(([topic, scores]) => {
        const pct = Math.round((scores.correct / scores.total) * 100);
        const row = document.createElement('div');
        row.className = 'topic-row';
        row.innerHTML = `
            <span class="topic-name">${topic}</span>
            <span class="topic-score">${pct}% (${scores.correct}/${scores.total})</span>
        `;
        breakdown.appendChild(row);
    });
    
    document.getElementById('quizSession').style.display = 'none';
    document.getElementById('quizSummary').style.display = 'block';

    // Results must remain visible even if IndexedDB session persistence fails.
    try {
        await saveSession({
            examId: currentExam.id,
            mode: 'quiz',
            date: new Date().toISOString(),
            score: percentage,
            topicScores: topicScores,
            questionCount: total,
            requestedCount: currentSession.runtimeOptions?.requestedCount || total,
            runtimeOptions: currentSession.runtimeOptions || {}
        });
    } catch (err) {
        console.error('Failed to save quiz session:', err);
    }
}

async function saveSession(session) {
    return new Promise((resolve, reject) => {
        const request = db.transaction([STORE_NAMES.sessions], 'readwrite')
            .objectStore(STORE_NAMES.sessions)
            .add({ id: Date.now().toString(), ...session });
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve();
    });
}

document.getElementById('endQuizBtn').addEventListener('click', () => {
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('quizSetup').style.display = 'block';
    document.getElementById('quizSession').style.display = 'none';
    document.getElementById('modeScreen').style.display = 'block';
});

// ============================================================================
// INITIALIZATION
// ============================================================================

async function init() {
    await initDB();
    console.log('✓ Study Dashboard ready');
}

init().catch(err => {
    console.error('Failed to initialize:', err);
    alert('Error initializing app: ' + err.message);
});
