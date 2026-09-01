#!/usr/bin/env node
// chunk-source.js — Step 1/2 helper. Splits normalized source text into
// chunks by STRUCTURE (headers, slide/page markers, transcript timestamps),
// per resolved decision "Chunk by structure, not token count". A char-count
// fallback only kicks in when no structural markers exist at all, purely as
// a safety net so a single giant unstructured file doesn't get handed to the
// LLM whole.
'use strict';

const fs = require('fs');
const { parseArgs, printResult, fail } = require('./lib/cli');

const args = parseArgs(process.argv.slice(2));
const path = args.path;
if (!path) fail('missing --path argument');

const FALLBACK_MAX_CHARS = parseInt(args['max-chars'] || '8000', 10);
// Small default: slides/pages are often legitimately short (a title + one
// bullet). Only merge chunks that are near-empty (e.g. a stray heading with
// no body), not merely "short".
const MIN_CHUNK_CHARS = parseInt(args['min-chars'] || '30', 10);

const BOUNDARY_PATTERNS = [
  { name: 'markdown-heading', re: /^#{1,6}\s+.+$/ },
  { name: 'slide-marker', re: /^(---\s*)?slide\s*\d+/i },
  { name: 'page-marker', re: /^\[?page\s*\d+\]?/i },
  { name: 'timestamp-marker', re: /^\[?\d{1,2}:\d{2}(:\d{2})?\]?\s*(-->|--)?/ },
];

function detectBoundary(line) {
  const trimmed = line.trim();
  if (!trimmed) return null;
  for (const p of BOUNDARY_PATTERNS) {
    if (p.re.test(trimmed)) return { type: p.name, label: trimmed.slice(0, 120) };
  }
  return null;
}

function chunkByStructure(lines) {
  const chunks = [];
  let current = null;
  for (const line of lines) {
    const boundary = detectBoundary(line);
    if (boundary) {
      if (current) chunks.push(current);
      current = { anchor: boundary.label, anchorType: boundary.type, lines: [line] };
    } else if (current) {
      current.lines.push(line);
    } else {
      // content before the first boundary — keep as an untitled leading chunk
      current = { anchor: 'Document start', anchorType: 'lead-in', lines: [line] };
    }
  }
  if (current) chunks.push(current);
  return chunks.map((c) => ({ anchor: c.anchor, anchorType: c.anchorType, text: c.lines.join('\n').trim() }));
}

function chunkByCharBudget(text) {
  const paragraphs = text.split(/\n{2,}/);
  const chunks = [];
  let bufLines = [];
  let bufLen = 0;
  let idx = 1;
  const flush = () => {
    if (bufLines.length) {
      chunks.push({ anchor: `Section ${idx}`, anchorType: 'char-budget-fallback', text: bufLines.join('\n\n').trim() });
      idx++;
      bufLines = [];
      bufLen = 0;
    }
  };
  for (const para of paragraphs) {
    if (bufLen + para.length > FALLBACK_MAX_CHARS && bufLines.length) flush();
    bufLines.push(para);
    bufLen += para.length;
  }
  flush();
  return chunks;
}

function mergeTinyChunks(chunks) {
  const merged = [];
  for (const chunk of chunks) {
    if (chunk.text.length < MIN_CHUNK_CHARS && merged.length) {
      const prev = merged[merged.length - 1];
      prev.text = `${prev.text}\n\n${chunk.text}`;
    } else {
      merged.push({ ...chunk });
    }
  }
  return merged;
}

let raw;
try {
  raw = fs.readFileSync(path, 'utf8');
} catch (err) {
  fail(`could not read ${path}: ${err.message}`);
}

const lines = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
let chunks = chunkByStructure(lines);
const structuralBoundaryCount = chunks.filter((c) => c.anchorType !== 'lead-in').length;

let method = 'structure';
if (structuralBoundaryCount === 0) {
  method = 'char-budget-fallback';
  chunks = chunkByCharBudget(raw);
}

chunks = mergeTinyChunks(chunks).filter((c) => c.text.length > 0);
chunks = chunks.map((c, i) => ({ index: i, anchor: c.anchor, anchorType: c.anchorType, text: c.text, charCount: c.text.length }));

printResult({
  ok: true,
  path,
  method,
  chunkCount: chunks.length,
  chunks,
});
