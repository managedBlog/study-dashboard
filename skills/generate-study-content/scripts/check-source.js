#!/usr/bin/env node
// check-source.js — Step 1 (ingest) deterministic gate.
// Verifies a source file exists, is readable, non-empty, and reports basic
// stats used by later steps. Never throws on a bad source — reports a
// structured failure so the workflow can skip-and-report per source
// (plan §4 step 1 failure-mode handling).
'use strict';

const fs = require('fs');
const { parseArgs, printResult } = require('./lib/cli');

const args = parseArgs(process.argv.slice(2));
const path = args.path;

if (!path) {
  printResult({ ok: false, error: 'missing --path argument' });
  process.exit(1);
}

let result;
try {
  const stat = fs.statSync(path);
  if (!stat.isFile()) {
    result = { ok: false, path, error: 'not a regular file' };
  } else if (stat.size === 0) {
    result = { ok: false, path, error: 'file is empty' };
  } else {
    // Read as text; if it looks binary (many non-printable bytes), flag it.
    const buf = fs.readFileSync(path);
    const sampleLen = Math.min(buf.length, 4096);
    let nonPrintable = 0;
    for (let i = 0; i < sampleLen; i++) {
      const b = buf[i];
      if (b === 9 || b === 10 || b === 13) continue; // tab/lf/cr
      if (b < 32 || b === 127) nonPrintable++;
    }
    const binaryLikely = sampleLen > 0 && nonPrintable / sampleLen > 0.1;
    if (binaryLikely) {
      result = {
        ok: false,
        path,
        error: 'file appears to be binary or unsupported encoding — extract text first (e.g. export PPTX/PDF notes to plain text or markdown)',
      };
    } else {
      const text = buf.toString('utf8');
      const sizeBytes = stat.size;
      const approxTokens = Math.ceil(text.length / 4);
      result = {
        ok: true,
        path,
        sizeBytes,
        charCount: text.length,
        approxTokens,
        lineCount: text.split(/\r\n|\r|\n/).length,
      };
    }
  }
} catch (err) {
  result = { ok: false, path, error: err.message };
}

printResult(result);
process.exit(result.ok ? 0 : 1);
