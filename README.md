# Study Dashboard

Browser-based study app for flashcards + quizzes, with local IndexedDB storage and deterministic cycling so sessions eventually cover the full bank.

## What's in this repository

This repo now includes the deployable app, editable source/build copies, content packs, and the content-generation skill:

| Path | Purpose |
|---|---|
| `index.html`, `app.js`, `styles.css` | Live deploy surface (what GitHub Pages serves from repo root). |
| `app-src/` | Primary editable source copy for ongoing development. |
| `app-build/` | Staging/build copy used when preparing deployment updates. |
| `Flash Cards/` | Exam content packs (`metadata.json`, `*-ALL-FLASHCARDS.md`, `*-ALL-QUESTIONS.md`). |
| `skills/generate-study-content/` | Copilot skill to generate/append study content in the app's required format. |
| `QUICK-START.md` | Detailed end-user content formatting and usage walkthrough. |

## Core features

- Flashcard sessions with fair rotation across the full set
- Quiz sessions with score + topic breakdown
- Quiz filters: difficulty + topic
- Optional per-session shuffle of quiz answer choices
- Requested count can be any value from `1` to available items
- All data stored locally in browser IndexedDB

## Skill included in this repo

The generation skill is included at:

- `skills/generate-study-content/SKILL.md`
- `skills/generate-study-content/scripts/*`

It produces content in the exact format this app consumes.

### How the skill works

`generate-study-content` is a guarded generation pipeline:

1. Ingest source material (local files, URLs, or pasted content) and chunk by structure.
2. Draft questions and/or flashcards at requested depth and size.
3. Run deterministic duplicate checks (`dedup-check.js`).
4. Run an adversarial factual review gate before writing.
5. Assign IDs, validate schema, and write via `write-bank.js`.

Design intent: deterministic scripts do the structural checks/writes, while the model handles drafting and review judgments.

### Validated source types

This skill has been tested with the following source categories:

- **YouTube-based study content** (video transcripts or transcript-derived notes)
- **Microsoft Learn documentation** (module/unit pages and assessment-style content)
- **PowerPoint decks (`.pptx`)** used for training or customer enablement

It can also process plain text/markdown inputs and URLs that resolve to readable text content in your environment.

### Use it in Scout or CoWork

If your Scout/CoWork environment has skills enabled:

1. Open chat in the environment.
2. Invoke the skill with `/generate-study-content`.
3. Provide source(s), desired size/depth, and whether output should be questions, flashcards, or both.
4. Review the pre-write summary and approve write.

Example request:

`/generate-study-content make 30 certification-level quiz questions from this Learn module URL and append to AB-620 Unified Template`

### Run the skill locally (script path)

From repo root:

1. `cd skills\generate-study-content\scripts`
2. `node check-source.js --path <source-file>`
3. `node chunk-source.js --path <source-file>`
4. Continue with `dedup-check.js`, `assign-ids.js`, `validate-items.js`, and `write-bank.js` per `skills/generate-study-content/SKILL.md`.

The scripts are plain Node.js with no package install step.

## Deploy/publish

### Run locally (solution-agnostic)

This is a static web app. Any method that serves the repo root as static files works:

- Open `index.html` directly in a browser.
- Use any local static server (VS Code Live Server, Python `http.server`, `npx serve`, IIS/nginx/Caddy, etc.).
- Use a hosted static URL from any provider.

Load an exam pack after launch (one `metadata.json`, one `*-ALL-FLASHCARDS.md`, one `*-ALL-QUESTIONS.md`).

### GitHub Pages

1. Push `main`.
2. In GitHub: **Settings -> Pages**.
3. Set source to **Deploy from a branch**, branch **main**, folder **/** (root).
4. Save and wait for Pages to publish.

If enabled for this repo/account, the URL is typically:

- `https://seanbulger_microsoft.github.io/study-dashboard/`

Always treat the URL shown in **Settings -> Pages** as canonical.

### Other static hosts

This app is static HTML/CSS/JS, so you can publish the same root files to Netlify, Vercel static hosting, Azure Static Web Apps, or any static web server.

## Development workflow

1. Edit and test in `app-src/`.
2. Sync `app-src` updates into `app-build/` when preparing a release.
3. Copy release-ready `app-build` app files (`app.js`, `index.html`, `styles.css`) to repo root before deploy.

## Privacy

- Content and study history stay in local browser storage for that device/browser profile.
- Clearing site data resets stored progress.
