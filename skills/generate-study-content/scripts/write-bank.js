#!/usr/bin/env node
// write-bank.js — Step 8 (final write), the only script permitted to touch
// the on-disk content pack. Supports three modes:
//   new            — create a brand-new content pack directory
//   append-to-bank — add items to an existing bank's file + questionCount
//   add-bank       — add a new bank entry + its items to an existing pack
// Everything here is deterministic; item content/order/ids must already be
// finalized (validated + reviewed + assigned) before this runs (plan §4
// step 7 pre-write checkpoint happens in the calling workflow, not here).
'use strict';

const fs = require('fs');
const path = require('path');
const { parseArgs, printResult, fail } = require('./lib/cli');
const { readJson, writeJson, serializeQuestion, serializeFlashcard } = require('./lib/format');

const args = parseArgs(process.argv.slice(2));
const configPath = args.config;
if (!configPath) fail('missing --config argument (path to JSON write-bank config)');

let cfg;
try {
  cfg = readJson(configPath);
} catch (err) {
  fail(`could not read --config: ${err.message}`);
}

const { targetDir, mode, outputMode = 'both', bank, items = [], flashcards = [] } = cfg;
if (!targetDir) fail('config missing "targetDir"');
if (!['new', 'append-to-bank', 'add-bank'].includes(mode)) fail('config "mode" must be new|append-to-bank|add-bank');
if (mode !== 'new' && !bank) fail('config missing "bank" (required for append-to-bank/add-bank)');
if ((mode === 'new' || mode === 'add-bank') && !bank) fail('config missing "bank" (required for new/add-bank)');

const questionsFileName = cfg.questionsFileName || 'ALL-QUESTIONS.md';
const flashcardsFileName = cfg.flashcardsFileName || 'ALL-FLASHCARDS.md';
const metadataPath = path.join(targetDir, 'metadata.json');
const questionsPath = path.join(targetDir, questionsFileName);
const flashcardsPath = path.join(targetDir, flashcardsFileName);

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function buildQuestionsHeader(packMeta) {
  const lines = [];
  lines.push(`# ${packMeta.examTitle || packMeta.examCode || 'Study Content'} — Question Bank`);
  lines.push('');
  if (packMeta.description) {
    lines.push(`> ${packMeta.description}`);
    lines.push('');
  }
  return lines.join('\n');
}

function buildFlashcardsHeader(packMeta) {
  const lines = [];
  lines.push(`# ${packMeta.examTitle || packMeta.examCode || 'Study Content'} — Flashcards`);
  lines.push('');
  lines.push('**GENERATED FILE.**');
  lines.push('');
  return lines.join('\n');
}

const changes = { mode, targetDir, filesWritten: [] };

if (mode === 'new') {
  ensureDir(targetDir);
  if (fs.existsSync(metadataPath)) fail(`metadata.json already exists at ${targetDir} — refusing to overwrite in "new" mode`);

  const packMeta = cfg.packMeta || {};
  const contentPack = { format: 'markdown' };
  if (outputMode !== 'questions') contentPack.flashcardsFile = flashcardsFileName;
  if (outputMode !== 'flashcards') contentPack.questionsFile = questionsFileName;
  const metadata = {
    examCode: packMeta.examCode || null,
    examTitle: packMeta.examTitle || null,
    description: packMeta.description || null,
    totalFlashcards: outputMode !== 'questions' ? flashcards.length : 0,
    totalQuestions: outputMode !== 'flashcards' ? items.length : 0,
    topics: packMeta.topics || [],
    difficulties: ['Easy', 'Medium', 'Hard', 'Unknown'],
    banks: [{ ...bank, questionCount: items.length }],
    contentPack,
    lastUpdated: new Date().toISOString(),
    version: '1.0',
  };
  writeJson(metadataPath, metadata);
  changes.filesWritten.push(metadataPath);

  if (outputMode !== 'flashcards') {
    const body = [buildQuestionsHeader(packMeta), items.map(serializeQuestion).join('\n\n')].join('\n');
    fs.writeFileSync(questionsPath, body.trim() + '\n', 'utf8');
    changes.filesWritten.push(questionsPath);
  }
  if (outputMode !== 'questions') {
    const body = [buildFlashcardsHeader(packMeta), flashcards.map(serializeFlashcard).join('\n\n')].join('\n');
    fs.writeFileSync(flashcardsPath, body.trim() + '\n', 'utf8');
    changes.filesWritten.push(flashcardsPath);
  }
} else {
  // append-to-bank | add-bank
  if (!fs.existsSync(metadataPath)) fail(`metadata.json not found at ${targetDir} — cannot append to a pack that does not exist`);
  const metadata = readJson(metadataPath);

  if (mode === 'append-to-bank') {
    const existingBank = (metadata.banks || []).find((b) => b.id === bank.id);
    if (!existingBank) fail(`mode is "append-to-bank" but no bank with id "${bank.id}" exists in metadata.json — use "add-bank" instead`);
    existingBank.questionCount = (existingBank.questionCount || 0) + (outputMode !== 'flashcards' ? items.length : 0);
  } else {
    if ((metadata.banks || []).some((b) => b.id === bank.id)) fail(`mode is "add-bank" but bank id "${bank.id}" already exists — use "append-to-bank" instead`);
    metadata.banks = metadata.banks || [];
    metadata.banks.push({ ...bank, questionCount: outputMode !== 'flashcards' ? items.length : 0 });
  }

  metadata.totalQuestions = (metadata.totalQuestions || 0) + (outputMode !== 'flashcards' ? items.length : 0);
  metadata.totalFlashcards = (metadata.totalFlashcards || 0) + (outputMode !== 'questions' ? flashcards.length : 0);
  metadata.lastUpdated = new Date().toISOString();
  writeJson(metadataPath, metadata);
  changes.filesWritten.push(metadataPath);

  if (outputMode !== 'flashcards' && items.length) {
    if (!fs.existsSync(questionsPath)) fail(`questions file not found at ${questionsPath}`);
    const existing = fs.readFileSync(questionsPath, 'utf8').replace(/\s+$/, '');
    const appended = [existing, items.map(serializeQuestion).join('\n\n')].join('\n\n');
    fs.writeFileSync(questionsPath, appended.trim() + '\n', 'utf8');
    changes.filesWritten.push(questionsPath);
  }
  if (outputMode !== 'questions' && flashcards.length) {
    if (!fs.existsSync(flashcardsPath)) fail(`flashcards file not found at ${flashcardsPath}`);
    const existing = fs.readFileSync(flashcardsPath, 'utf8').replace(/\s+$/, '');
    const appended = [existing, flashcards.map(serializeFlashcard).join('\n\n')].join('\n\n');
    fs.writeFileSync(flashcardsPath, appended.trim() + '\n', 'utf8');
    changes.filesWritten.push(flashcardsPath);
  }
}

printResult({ ok: true, ...changes });
