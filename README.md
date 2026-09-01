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

## Run locally

No build tooling is required.

1. Clone the repo.
2. Open `index.html` in a browser, or run a static server from repo root:
   - Python: `python -m http.server 8000`
   - Node: `npx serve .`
3. Load an exam pack (one `metadata.json`, one `*-ALL-FLASHCARDS.md`, one `*-ALL-QUESTIONS.md`).

## Skill included in this repo

The generation skill is included at:

- `skills/generate-study-content/SKILL.md`
- `skills/generate-study-content/scripts/*`

It produces content in the exact format this app consumes. See the skill's `SKILL.md` for workflow details and deterministic helper scripts.

## Deploy/publish

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
