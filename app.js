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

function parseQuestionsMarkdown(content) {
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
    
    return questions.map((q, i) => ({
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
        tx.objectStore(STORE_NAMES.exams).put(exam);
        
        flashcards.forEach((card, i) => {
            tx.objectStore(STORE_NAMES.flashcards).put({
                id: `fc_${examId}_${i}`,
                examId,
                q: card.question,
                a: card.answer
            });
        });
        
        questions.forEach((q) => {
            tx.objectStore(STORE_NAMES.questions).put({
                id: q.id,
                examId,
                text: q.text,
                options: q.options,
                answer: q.answer,
                explanation: q.explanation,
                difficulty: q.difficulty,
                topics: q.topics
            });
        });
        
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
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
    } else {
        // Case 2: Not enough unseen → use all unseen, reset, continue from full pool
        selected = unseenPool;
        tracker.cycle++;
        tracker.seenIds = [];
        const remaining = count - selected.length;
        const fullPoolShuffled = shuffleArray(allItemIds);
        selected = selected.concat(fullPoolShuffled.slice(0, remaining));
    }
    
    // Update tracker
    tracker.seenIds.push(...selected);
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

// ============================================================================
// UI HANDLERS
// ============================================================================

document.getElementById('loadFileBtn').addEventListener('click', () => {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', async (e) => {
    try {
        const { exam, flashcardCount, questionCount } = await loadFilesFromInput(e.target.files);
        
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
});

document.getElementById('quizModeBtn').addEventListener('click', () => {
    document.getElementById('modeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
});

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
    const count = Math.max(10, Math.min(50, parseInt(document.getElementById('flashcardCount').value) || 20));
    
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
        reviewed: 0
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
    
    document.getElementById('cardText').textContent = card.q;
    
    const face = document.getElementById('cardFace');
    face.classList.remove('flipping', 'answer-side');
    
    document.getElementById('revealControls').style.display = 'flex';
    document.getElementById('nextControls').style.display = 'none';
    document.getElementById('flashcardSummary').style.display = 'none';
}

document.getElementById('revealBtn').addEventListener('click', () => {
    const card = currentSession.cards[currentSession.current];
    const face = document.getElementById('cardFace');
    const textEl = document.getElementById('cardText');
    
    // Rotate to 90deg (edge-on, so the card visually "disappears"), swap the text
    // while it's edge-on, then rotate back to 0deg showing the new content. This
    // avoids relying on backface-visibility, which some browsers render unreliably
    // (e.g. it can silently stop hiding the back face when combined with overflow).
    face.classList.add('flipping');
    
    setTimeout(() => {
        textEl.textContent = card.a;
        face.classList.add('answer-side');
        face.classList.remove('flipping');
    }, 250);
    
    document.getElementById('revealControls').style.display = 'none';
    document.getElementById('nextControls').style.display = 'flex';
});

document.getElementById('nextCardBtn').addEventListener('click', () => {
    currentSession.current++;
    currentSession.reviewed++;
    
    if (currentSession.current >= currentSession.cards.length) {
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
    const count = Math.max(20, Math.min(50, parseInt(document.getElementById('quizCount').value) || 30));
    
    // Get all question IDs
    const allQuestions = await new Promise((resolve, reject) => {
        const tx = db.transaction([STORE_NAMES.questions]);
        const request = tx.objectStore(STORE_NAMES.questions)
            .getAll();
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });
    
    if (allQuestions.length === 0) {
        alert('No questions are loaded. Please use "Load Exam Files" first.');
        return;
    }
    
    const questionIds = allQuestions.map(q => q.id);
    const selectedIds = await selectRandomItems(currentExam.id, 'quiz', count, questionIds);
    
    // Load selected questions (guard against an empty selection hanging this promise forever)
    const selectedQuestions = selectedIds.length === 0 ? [] : await new Promise((resolve, reject) => {
        const tx = db.transaction([STORE_NAMES.questions]);
        const store = tx.objectStore(STORE_NAMES.questions);
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
    
    startQuizSession(selectedQuestions);
});

function startQuizSession(questions) {
    currentSession = {
        mode: 'quiz',
        questions: questions,
        current: 0,
        answers: {},
        score: 0
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
    
    q.options.forEach((opt) => {
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
            feedbackExplanation.textContent = q.explanation;
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
        const topic = q.topics[0] || 'General';
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
    
    // Save session
    await saveSession({
        examId: currentExam.id,
        mode: 'quiz',
        date: new Date().toISOString(),
        score: percentage,
        topicScores: topicScores,
        questionCount: total
    });
    
    document.getElementById('quizSession').style.display = 'none';
    document.getElementById('quizSummary').style.display = 'block';
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
