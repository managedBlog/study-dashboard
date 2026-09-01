---
name: generate-study-content
description: Generate flashcards and/or quiz questions from one or more source materials (MS Learn docs/URLs, PowerPoint decks, plain text/markdown, video transcripts), sized and scaled to the user's request, with a mandatory adversarial accuracy review before anything is written. Use when the user asks to "make flashcards from X", "generate a quiz from this deck", "turn this Learn module into questions", "add questions to the study bank from Y", or similar. Produces output in the same unified markdown + metadata.json format already used by the study-dashboard app, so no app changes are needed to consume it.
---

# Generate Study Content

**Design reference:** `Study Agent/generation-skill-plan.md` (build-ready, reviewed by an
adversarial pass and a rubber-duck pass; both raw reviews saved alongside it). This
SKILL.md is the executable form of that plan. If anything here is ambiguous, the plan
document and its decision log are the tie-breaker.

**Format reference:** `Study Agent/Flash Cards/AB-620 Unified Template/` — the exact
unified question/flashcard markdown format and `metadata.json` schema this skill produces.
Do not invent a new format; match that folder's structure exactly.

**Deterministic scripts (all pure Node.js, no dependencies):** `scripts/` in this skill
folder. Every step marked **[Code]** below MUST be executed by running the corresponding
script with `node`, never approximated by model reasoning. Every step marked **[LLM]** is
your job as the assistant — reasoning, drafting, or reviewing.

```
scripts/
  check-source.js     [Code] verify a source file is readable/non-empty/text
  chunk-source.js     [Code] split a source into structurally-anchored chunks
  dedup-check.js      [Code] exact + near-duplicate detection (the ONLY dedup gate)
  assign-ids.js       [Code] compute next Q### ids / flashcard numbers
  validate-items.js   [Code] schema validation (structure, not accuracy)
  write-bank.js       [Code] the only script permitted to write pack files
  lib/format.js       shared serialization/parsing helpers (library, not a CLI)
```

Every script prints a single JSON object to stdout and exits non-zero on failure — read
its output before deciding the next action. Run them with `node scripts/<name>.js --help`-
style flags as documented in each file's header comment.

## Inputs to collect from the user (plan §2)

Ask only for what's missing; don't re-ask for things already stated in the request.

| Param | Values | Default if unstated |
|---|---|---|
| `sources[]` | file path(s), URL(s), pasted text | required — ask if missing |
| `size` | `small`/`medium`/`large` tier, an exact count, or "match [named exam]" | ask once, offer tiers |
| `depth` | `basic`/`intermediate`/`technical`/`certification` tier, or "match [named exam]" | ask once, offer tiers |
| `output_mode` | `questions`, `flashcards`, `both` | `both` |
| `output_location` | a path, or ask the user | default to `Flash Cards/<derived-name>/`; **in a headless/non-interactive host, never block on this — use the default silently** |
| `target_bank` | `new` or `append` | ask if ambiguous from context |
| `taxonomy` / `domain_rubric` | a rubric description, or omitted | omitted unless the user names an exam/rubric or explicitly asks for domain tagging |
| `assessment_mode` | `auto` (default), `assessment-first`, `assessment-only`, `exclude-assessment` | `auto`; see workflow step 1 for detection and precedence |

If the user names a specific exam/certification, offer `exam_mode` (calibrates size/depth
to that rubric) as a yes/no, separate from the taxonomy question.

## Workflow

### 1. Ingest — [Code] then [LLM]

For each source in `sources[]`:
1. If it's a local file: run `node scripts/check-source.js --path <file>`. If `ok:false`,
   record the failure and skip this source — do not abort the run unless **every** source
   fails (in which case stop and tell the user nothing could be read).
2. If it's a URL or pasted text, read/fetch it directly (no script needed) and write it to
   a temp `.md`/`.txt` file so the same chunking step applies uniformly.
3. Run `node scripts/chunk-source.js --path <file>`. This chunks by structure (headings,
   `Slide N`, `Page N`, or transcript timestamps) — **not** by token count — falling back
   to a char-budget split only when a source has zero structural markers at all. Each
   chunk carries an `anchor` string — this becomes the per-item source anchor in step 3.
4. **Assessment-first handling (upfront):** before any general drafting, classify chunks as
   assessment chunks when anchor/text indicates module/unit assessments or knowledge checks
   (keywords such as "assessment", "knowledge check", "check your knowledge", "quiz").
   - `assessment-first` (and `auto` when assessment chunks exist): process these chunks
     first so module-assessment questions are generated and reviewed before the broader
     explanatory content.
   - `assessment-only`: process only assessment chunks.
   - `exclude-assessment`: skip assessment chunks entirely.
   - If chunk classification is ambiguous, prefer `assessment-first` and report which chunks
     were treated as assessment-derived in the run summary.

### 2. Scope check — domain/taxonomy — [Code, simple branch]

- If `taxonomy`/`domain_rubric` was supplied (or `exam_mode` is on and the user confirmed
  they want domain tags), note the rubric for step 3.
- Otherwise, skip domain/taxonomy entirely for this run — do not silently invent domain
  codes.
- This is a single upfront question, asked once, never a mid-run interactive branch.

### 3. Draft generation — [LLM]

Draft items at the requested size/depth. When step 1 detected assessment chunks for this
run mode, draft assessment-derived question candidates first, then continue with non-
assessment chunks only if more items are needed. Every item MUST include:
- Inline answer + explanation.
- **A per-item source anchor** — the specific chunk `anchor` (slide/page/heading/
  timestamp) it came from, even in single-source runs. Never cite "the document" as a
  whole.
- Domain code — only if step 2 activated taxonomy/rubric classification.
- A `confidence` tag (`Certain`/`Derived`/`Judgment`) only when direct-recall vs. derived
  is meaningful (e.g. an item synthesized across multiple chunks/sources, or exam-mode
  items) — omit for simple direct-recall items.

Represent each draft item as JSON matching this shape (question item):
```json
{
  "title": "short title",
  "bank": "bankN",
  "domain": "CODE or null",
  "domainInferred": true,
  "difficulty": "Easy|Medium|Hard|Unknown",
  "scenario": "optional context blockquote, or omit",
  "prompt": "question stem",
  "options": [{"letter": "A", "text": "..."}, {"letter": "B", "text": "...", "bold": true}],
  "answer": "B",
  "confidence": "Certain|Derived|Judgment or omit",
  "explanation": "verbatim-grounded rationale",
  "source": "citation string, e.g. slide/page/timestamp/anchor, or null",
  "_sourceAnchor": "the exact chunk anchor + surrounding text used, for step 4 only — never written to disk"
}
```
Flashcard item shape: `{"question": "...", "answer": "**bold core answer.** -- optional elaboration", "src": "id or null", "url": "url or null"}`.

### 4. Adversarial review gate — [LLM, hard requirement]

This is a correctness gate, not a style check. **Do not skip or soft-pedal this step.**

1. **Deterministic dedup first [Code]:** write all drafted item texts (plus, if
   appending, the existing bank's item texts) to JSON files and run
   `node scripts/dedup-check.js --candidates <drafts.json> [--existing <existing.json>]`.
   Drop any `exact_duplicate` results immediately. Flag `near_duplicate` results for the
   reviewer to judge in step 2 below (a near-dup by text similarity might still be a
   legitimately distinct question).
   - **Cross-batch dedup requirement:** when assessment-derived candidates were drafted in
     more than one domain/topic batch in the same run, concatenate them into one candidate
     file and run a global dedup pass before splitting back into per-batch reviewer queues.
     Do not rely on per-batch dedup alone; it misses cross-batch duplicates.
2. **Reviewer/drafter separation [LLM, separate invocation]:** for each surviving item,
   run the review as a **genuinely separate context from the drafting reasoning** — the
   reviewer must not see the drafter's scratchpad, only the finished item + its
   `_sourceAnchor` text. In this environment, do this by dispatching a background agent
   per batch (the `task` tool, `agent_type: "general-purpose"` or `"code-review"`) with a
   prompt containing ONLY the item(s) and their source anchor text — never the drafting
   conversation. If the host has no sub-agent dispatch mechanism available, simulate
   separation by discarding your drafting context/reasoning before writing the review
   prompt, so the review is grounded only in the item + source text, not memory of why you
   wrote it that way.
3. **Verdict schema (binary, no partial credit):**
   ```json
   {"item_id": "...", "verdict": "pass|fail", "unsupported_claims": ["..."], "reason": "..."}
   ```
   `pass` requires every factual claim in the prompt/options/answer/explanation to be
   traceable to the item's source anchor. If the source doesn't clearly support a claim,
   that's an automatic `fail` — plausibility is irrelevant. **Never fabricate or guess an
   answer to force a pass; if a claim isn't in the source, it fails.**
4. **Revise/recheck loop:** on `fail`, revise the item using the specific
   `unsupported_claims`/`reason`, then re-review. Up to **3 cycles total** per item. If
   still failing after 3 cycles, drop the item and log `{prompt text, last reason}` for
   the end-of-run summary.
5. **Exact-count requests:** if the user asked for an exact count (not a tier) and items
   were dropped, draft replacement candidates from unused source chunks and run them
   through this same gate until the count is met or the source material is exhausted. If
   exhausted first, report the shortfall explicitly — never silently deliver fewer items
   without saying so.
6. **0-survivors outcome:** if every item ultimately fails, stop here. Report this to the
   user and do **not** proceed to writing — an empty/near-empty bank is never silently
   created.

### 5. Append-mode resolution — [LLM judgment] then [confirm with user]

Only relevant when `target_bank` is `append`.
1. Read the target pack's `metadata.json`. Compare the new items' topic/domain against
   existing `banks[]` entries.
2. Infer:
   - **append-to-bank** — new items clearly match an existing bank's topic/domain/source
     type → add to that bank.
   - **add-bank** — new items are a distinct topic or came from a different source type
     → create a new bank entry.
3. **Confirm the inferred choice with the user before writing anything** (per plan
   decision #14) — a short "these look like they belong in bank2 (Per-Objective Sets) —
   add them there, or create a new bank?" is enough.

### 6. ID assignment — [Code]

Once items are finalized (post-review) and the append mode (if any) is confirmed:
```
node scripts/assign-ids.js --type question --mode new|append --count <N> [--existing-file <questions.md>]
node scripts/assign-ids.js --type flashcard --mode new|append --count <N> [--existing-file <flashcards.md>]
```
Assign the returned ids/numbers onto the finalized items in order.

### 7. Schema validation — [Code]

```
node scripts/validate-items.js --items <items.json> --type question|flashcard
```
This checks structure only (required fields, option/letter/answer consistency, enum
values) — it does **not** re-check accuracy (that's step 4). If `ok:false`, fix the
offending items and re-validate before proceeding. Never write items that fail this gate.

### 8. Pre-write checkpoint — [LLM, user-facing]

Before writing anything, show the user a short summary: final counts per output type,
target location, append mode (if any), and any dropped/flagged items with their reason.
This is a lightweight confirmation, not a full preview system — wait for a go-ahead (or
proceed immediately if the user's original request already implied "just do it").

### 9. Write output — [Code]

Build a config object and run `write-bank.js` **exactly once per target** (it is the only
script permitted to touch pack files):
```
node scripts/write-bank.js --config <config.json>
```
Config shape (see `scripts/write-bank.js` header comment for full field list):
```json
{
  "targetDir": "absolute path to the pack folder",
  "mode": "new|append-to-bank|add-bank",
  "outputMode": "questions|flashcards|both",
  "packMeta": { "examCode": "...", "examTitle": "...", "description": "..." },
  "bank": { "id": "bankN", "name": "...", "sourceType": "...", "generationMethod": "...", "defaultSource": {"type": "...", "note": "..."} },
  "items": [ /* finalized, id-assigned, validated question items */ ],
  "flashcards": [ /* finalized, number-assigned, validated flashcard items */ ]
}
```
- `mode: "new"` refuses to run if `metadata.json` already exists at `targetDir` (fails
  loudly rather than overwriting).
- `mode: "append-to-bank"` requires `bank.id` to already exist in `metadata.json`.
- `mode: "add-bank"` requires `bank.id` to NOT already exist.
- Strip the `_sourceAnchor` field from items before writing — it's a working field for
  the review step only, never part of the on-disk schema.
- If `outputMode` omits one of questions/flashcards, that side's count is `0` and its
  file-name field is omitted from `metadata.json` — never write an empty placeholder file.

Report the final written file paths and counts back to the user.

## Runtime notes (plan §6)

- One skill definition for both Scout and Copilot Cowork. If a requirement conflicts
  between hosts, Scout's behavior is the reference.
- Every **[Code]** step above must be a real script invocation in both hosts — never
  approximate a deterministic step with model reasoning, even if it "seems obvious."
- In non-interactive/headless contexts (e.g. an async Cowork run), never block on
  `output_location` or append-mode confirmation indefinitely — fall back to the stated
  defaults (§ Inputs table) and clearly flag in the final summary that a default was used
  without confirmation, rather than stalling the run.

## Deferred / out of scope for v1 (plan §7)

- Word documents and PDFs as source types (v1 supports PowerPoint, MS Learn docs/URLs,
  plain text/markdown, and video transcripts only).
- A full dry-run/preview system beyond the pre-write checkpoint in step 8.
- Rate/cost controls for very large multi-source runs.
- Format-by-format ingestion detail (PPTX speaker notes, images-only slides, authenticated
  URLs, MS Learn page cleanup) — handle pragmatically per source at build/run time; if a
  source type can't be read, use the step-1 failure handling (skip + report) rather than
  guessing.
