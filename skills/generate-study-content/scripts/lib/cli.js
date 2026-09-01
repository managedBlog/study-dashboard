// Minimal CLI flag parser shared by the scripts in this skill.
// Supports: --flag value, --flag=value, and boolean --flag (no value).
'use strict';

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (!arg.startsWith('--')) continue;
    const eq = arg.indexOf('=');
    if (eq !== -1) {
      out[arg.slice(2, eq)] = arg.slice(eq + 1);
      continue;
    }
    const key = arg.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) {
      out[key] = true;
    } else {
      out[key] = next;
      i++;
    }
  }
  return out;
}

function fail(message) {
  process.stderr.write(`Error: ${message}\n`);
  process.exit(1);
}

function printResult(obj) {
  process.stdout.write(JSON.stringify(obj, null, 2) + '\n');
}

module.exports = { parseArgs, fail, printResult };
