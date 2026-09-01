#!/usr/bin/env node
// dedup-check.js — Step 3 deterministic gate. Flags exact and near-duplicate
// question/flashcard text, both within the new candidate batch and against
// an existing bank (for append/add-bank modes). This is the CODE-owned dedup
// gate; the LLM reviewer only flags *semantic* duplicates that survive this
// pass (plan §3/§4 duplicate-detection reconciliation).
'use strict';

const { parseArgs, printResult, fail } = require('./lib/cli');
const { readJson } = require('./lib/format');

const args = parseArgs(process.argv.slice(2));
const candidatesPath = args.candidates;
const existingPath = args.existing; // optional
const threshold = parseFloat(args.threshold || '0.8');

if (!candidatesPath) fail('missing --candidates argument (path to JSON array of {id, text})');
if (!Number.isFinite(threshold) || threshold <= 0 || threshold > 1) {
  fail('--threshold must be a number in (0, 1]');
}

let candidates;
try {
  candidates = readJson(candidatesPath);
} catch (err) {
  fail(`could not read --candidates: ${err.message}`);
}

let existing = [];
if (existingPath) {
  try {
    existing = readJson(existingPath);
  } catch (err) {
    fail(`could not read --existing: ${err.message}`);
  }
}

function normalize(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

function canonicalText(item) {
  if (!item) return '';
  if (typeof item.text === 'string' && item.text.trim()) return item.text.trim();

  const parts = [];
  if (typeof item.scenario === 'string' && item.scenario.trim()) parts.push(item.scenario.trim());
  if (typeof item.prompt === 'string' && item.prompt.trim()) parts.push(item.prompt.trim());
  if (Array.isArray(item.options) && item.options.length) {
    const opts = item.options
      .map((opt) => {
        if (!opt || typeof opt.text !== 'string' || !opt.text.trim()) return '';
        const letter = typeof opt.letter === 'string' && opt.letter.trim() ? `${opt.letter.trim()}. ` : '';
        return `${letter}${opt.text.trim()}`;
      })
      .filter(Boolean);
    if (opts.length) parts.push(opts.join(' | '));
  }
  if (typeof item.answer === 'string' && item.answer.trim()) parts.push(`answer ${item.answer.trim()}`);
  if (typeof item.question === 'string' && item.question.trim()) parts.push(item.question.trim());
  if (typeof item.title === 'string' && item.title.trim()) parts.push(item.title.trim());
  if (typeof item.explanation === 'string' && item.explanation.trim()) parts.push(item.explanation.trim());
  return parts.join('\n').trim();
}

function jaccard(aTokens, bTokens) {
  const a = new Set(aTokens);
  const b = new Set(bTokens);
  if (a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  for (const t of a) if (b.has(t)) intersection++;
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

const pool = existing.map((e, index) => {
  const text = canonicalText(e);
  return {
    id: e.id || `existing_${index}`,
    tokens: normalize(text),
    exactKey: text.toLowerCase(),
  };
});
const results = [];

for (let i = 0; i < candidates.length; i++) {
  const cand = candidates[i];
  const candId = cand.id || `candidate_${i}`;
  const text = canonicalText(cand);
  const tokens = normalize(text);
  const exactKey = text.toLowerCase();
  let best = { similarity: 0, matchedId: null };

  // Check against existing pool + prior candidates in this batch.
  // pool is seeded with existing items, then each processed candidate is appended.
  for (const p of pool) {
    if (p.exactKey === exactKey && exactKey.length > 0) {
      best = { similarity: 1, matchedId: p.id, exact: true };
      break;
    }
    const sim = jaccard(tokens, p.tokens);
    if (sim > best.similarity) best = { similarity: sim, matchedId: p.id, exact: false };
  }

  let status = 'unique';
  if (best.exact) status = 'exact_duplicate';
  else if (best.similarity >= threshold) status = 'near_duplicate';

  results.push({ id: candId, status, matchedId: status === 'unique' ? null : best.matchedId, similarity: Number(best.similarity.toFixed(3)) });
  // add this candidate to the pool for subsequent within-batch checks
  pool.push({ id: candId, tokens, exactKey });
}

printResult({
  ok: true,
  threshold,
  total: results.length,
  uniqueCount: results.filter((r) => r.status === 'unique').length,
  exactDuplicateCount: results.filter((r) => r.status === 'exact_duplicate').length,
  nearDuplicateCount: results.filter((r) => r.status === 'near_duplicate').length,
  results,
});
