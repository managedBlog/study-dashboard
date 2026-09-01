#!/usr/bin/env node
// assign-ids.js — Step 3 deterministic gate. Computes the next contiguous
// block of IDs for questions (Q### form) or flashcards (plain integers),
// reading the existing bank file when in append/add-bank mode so numbering
// never collides or resets (plan §4 step 3 / §6).
'use strict';

const fs = require('fs');
const { parseArgs, printResult, fail } = require('./lib/cli');
const { parseQuestionsFile, parseFlashcardsFile } = require('./lib/format');

const args = parseArgs(process.argv.slice(2));
const type = args.type || 'question'; // question | flashcard
const mode = args.mode || 'new'; // new | append
const count = parseInt(args.count, 10);
const existingFile = args['existing-file'];
const width = args.width ? parseInt(args.width, 10) : null;

if (!count || count < 1) fail('missing/invalid --count');
if (mode === 'append' && !existingFile) fail('--existing-file is required when --mode append');

let startFrom = 1;
let resolvedWidth = width || (type === 'question' ? 3 : 0);

if (mode === 'append') {
  let content;
  try {
    content = fs.readFileSync(existingFile, 'utf8');
  } catch (err) {
    fail(`could not read --existing-file: ${err.message}`);
  }
  if (type === 'question') {
    const { maxId, idWidth } = parseQuestionsFile(content);
    startFrom = maxId + 1;
    resolvedWidth = width || idWidth;
  } else {
    const { maxNum } = parseFlashcardsFile(content);
    startFrom = maxNum + 1;
  }
}

const ids = [];
for (let i = 0; i < count; i++) {
  const n = startFrom + i;
  if (type === 'question') {
    ids.push(`Q${String(n).padStart(resolvedWidth, '0')}`);
  } else {
    ids.push(n);
  }
}

printResult({ ok: true, type, mode, startFrom, count, width: resolvedWidth, ids });
