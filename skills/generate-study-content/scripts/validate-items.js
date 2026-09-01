#!/usr/bin/env node
// validate-items.js — Step 4 deterministic gate (schema validation, distinct
// from the LLM adversarial-accuracy review in the same step). Enforces
// structural correctness only: required fields, option/letter consistency,
// allowed enum values. Never judges factual accuracy — that is the LLM's job.
'use strict';

const { parseArgs, printResult, fail } = require('./lib/cli');
const { readJson, DIFFICULTIES, CONFIDENCE_VALUES, LETTERS } = require('./lib/format');

const args = parseArgs(process.argv.slice(2));
const itemsPath = args.items;
const type = args.type || 'question';

if (!itemsPath) fail('missing --items argument');

let items;
try {
  items = readJson(itemsPath);
} catch (err) {
  fail(`could not read --items: ${err.message}`);
}

function validateQuestion(item) {
  const errors = [];
  if (!item.title || typeof item.title !== 'string') errors.push('missing/invalid "title"');
  if (!item.bank || typeof item.bank !== 'string') errors.push('missing/invalid "bank"');
  if (!item.prompt || typeof item.prompt !== 'string') errors.push('missing/invalid "prompt"');
  if (item.difficulty && !DIFFICULTIES.includes(item.difficulty)) {
    errors.push(`"difficulty" must be one of ${DIFFICULTIES.join('|')}`);
  }
  if (item.confidence && !CONFIDENCE_VALUES.includes(item.confidence)) {
    errors.push(`"confidence" must be one of ${CONFIDENCE_VALUES.join('|')}`);
  }
  if (item.domain !== null && item.domain !== undefined && typeof item.domain !== 'string') {
    errors.push('"domain" must be a string or null');
  }
  if (item.domainInferred && !item.domain) {
    errors.push('"domainInferred" set but no "domain" provided');
  }

  if (!Array.isArray(item.options) || (item.options.length !== 3 && item.options.length !== 4)) {
    errors.push('"options" must be an array of 3 or 4 entries');
  } else {
    const expectedLetters = LETTERS.slice(0, item.options.length);
    const seenLetters = new Set();
    for (const opt of item.options) {
      if (!opt || typeof opt.letter !== 'string' || typeof opt.text !== 'string' || !opt.text.trim()) {
        errors.push('each option requires a non-empty "letter" and "text"');
        continue;
      }
      seenLetters.add(opt.letter);
    }
    for (const letter of expectedLetters) {
      if (!seenLetters.has(letter)) errors.push(`options missing expected letter "${letter}"`);
    }
  }

  if (!item.answer || typeof item.answer !== 'string') {
    errors.push('missing/invalid "answer"');
  } else if (Array.isArray(item.options)) {
    const validLetters = item.options.map((o) => o && o.letter);
    if (!validLetters.includes(item.answer)) {
      errors.push(`"answer" (${item.answer}) does not match any option letter`);
    }
  }

  if (!item.explanation || typeof item.explanation !== 'string' || !item.explanation.trim()) {
    errors.push('missing/invalid "explanation"');
  }

  if (item.source !== undefined && item.source !== null && typeof item.source !== 'string') {
    errors.push('"source" must be a string or null/omitted');
  }

  return errors;
}

function validateFlashcard(item) {
  const errors = [];
  if (!item.question || typeof item.question !== 'string' || !item.question.trim()) {
    errors.push('missing/invalid "question"');
  }
  if (!item.answer || typeof item.answer !== 'string' || !item.answer.trim()) {
    errors.push('missing/invalid "answer"');
  }
  if (item.src !== undefined && item.src !== null && typeof item.src !== 'string') {
    errors.push('"src" must be a string or null/omitted');
  }
  if (item.url !== undefined && item.url !== null && typeof item.url !== 'string') {
    errors.push('"url" must be a string or null/omitted');
  }
  return errors;
}

const validator = type === 'flashcard' ? validateFlashcard : validateQuestion;
const results = items.map((item, index) => {
  const errors = validator(item);
  return { index, id: item.id || item.number || null, ok: errors.length === 0, errors };
});

const allValid = results.every((r) => r.ok);
printResult({ ok: allValid, type, total: results.length, invalidCount: results.filter((r) => !r.ok).length, results });
process.exit(allValid ? 0 : 1);
