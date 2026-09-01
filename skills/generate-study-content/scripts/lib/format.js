// Shared serialization/parsing helpers for the unified study-content format.
// Pure Node.js stdlib only — no external dependencies.
'use strict';

const fs = require('fs');

const DIFFICULTIES = ['Easy', 'Medium', 'Hard', 'Unknown'];
const CONFIDENCE_VALUES = ['Certain', 'Derived', 'Judgment'];
const LETTERS = ['A', 'B', 'C', 'D'];

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function writeJson(path, obj) {
  fs.writeFileSync(path, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

function normalizeNewlines(text) {
  return String(text || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}

// ---- Question block serialization (matches AB-620 Unified Template format) ----
// ### Q<id> — <Title>
// *Bank: <bankId> · Domain: <CODE>[ (inferred)] · Difficulty: <Easy|Medium|Hard|Unknown>*
//
// > <scenario>            (optional)
//
// **<prompt>**
//
// - **A.** <option>       (3 or 4 options)
// ...
//
// **Answer:** <Letter>
// **Confidence:** <Certain|Derived|Judgment>   (optional)
//
// <explanation, may be multi-line>
//
// **Source:** <citation>  (optional)

function serializeQuestion(item) {
  const lines = [];
  lines.push(`### ${item.id} — ${item.title}`);
  const domainPart = item.domain
    ? `Domain: ${item.domain}${item.domainInferred ? ' (inferred)' : ''}`
    : 'Domain: (none)';
  lines.push(`*Bank: ${item.bank} · ${domainPart} · Difficulty: ${item.difficulty || 'Unknown'}*`);
  lines.push('');
  if (item.scenario) {
    lines.push(`> ${item.scenario}`);
    lines.push('');
  }
  lines.push(`**${item.prompt}**`);
  lines.push('');
  for (const opt of item.options) {
    const text = opt.bold ? `**${opt.text}**` : opt.text;
    lines.push(`- **${opt.letter}.** ${text}`);
  }
  lines.push('');
  lines.push(`**Answer:** ${item.answer}`);
  if (item.confidence) {
    lines.push(`**Confidence:** ${item.confidence}`);
  }
  lines.push('');
  lines.push(normalizeNewlines(item.explanation).trim());
  if (item.source) {
    lines.push('');
    lines.push(`**Source:** ${item.source}`);
  }
  return lines.join('\n');
}

// Parses an existing unified-format questions file into an array of question
// objects (same shape produced by drafting), plus the max numeric id seen and
// its zero-padded width — used by assign-ids.js for append/add-bank modes.
function parseQuestionsFile(content) {
  const text = normalizeNewlines(content);
  const blocks = text.split(/\n(?=### Q\d+)/g).filter((b) => /^### Q\d+/.test(b.trim()));
  const items = [];
  let maxId = 0;
  let idWidth = 3;

  for (const block of blocks) {
    const headerMatch = block.match(/^### (Q(\d+)) — (.+)$/m);
    if (!headerMatch) continue;
    const id = headerMatch[1];
    const num = parseInt(headerMatch[2], 10);
    idWidth = Math.max(idWidth, headerMatch[2].length);
    if (num > maxId) maxId = num;
    const title = headerMatch[3].trim();

    const metaMatch = block.match(/^\*Bank: (\S+) · Domain: (.+?) · Difficulty: (\w+)\*$/m);
    let bank = null, domain = null, domainInferred = false, difficulty = 'Unknown';
    if (metaMatch) {
      bank = metaMatch[1];
      difficulty = metaMatch[3];
      const domainRaw = metaMatch[2].trim();
      if (domainRaw !== '(none)') {
        domainInferred = /\(inferred\)/.test(domainRaw);
        domain = domainRaw.replace(/\s*\(inferred\)\s*/, '').trim();
      }
    }

    items.push({ id, num, title, bank, domain, domainInferred, difficulty, raw: block.trim() });
  }

  return { items, maxId, idWidth };
}

function serializeFlashcard(card) {
  const lines = [];
  lines.push(`**${card.number}. ${card.question}**`);
  lines.push('');
  let answerLine = `${card.answer}`;
  const suffixParts = [];
  if (card.src) suffixParts.push(`[SRC: ${card.src}]`);
  if (card.url) suffixParts.push(card.url);
  if (suffixParts.length) answerLine += ` ${suffixParts.join(' | ')}`;
  lines.push(answerLine);
  return lines.join('\n');
}

function parseFlashcardsFile(content) {
  const text = normalizeNewlines(content);
  const matches = [...text.matchAll(/\*\*(\d+)\.\s/g)];
  let maxNum = 0;
  for (const m of matches) {
    const n = parseInt(m[1], 10);
    if (n > maxNum) maxNum = n;
  }
  return { maxNum };
}

module.exports = {
  DIFFICULTIES,
  CONFIDENCE_VALUES,
  LETTERS,
  readJson,
  writeJson,
  normalizeNewlines,
  serializeQuestion,
  parseQuestionsFile,
  serializeFlashcard,
  parseFlashcardsFile,
};
