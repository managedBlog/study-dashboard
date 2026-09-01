# Quick Start Guide

## Step 1: Prepare Your Exam Files

You need three files for your exam:

### A. Metadata (JSON)

Create `metadata.json` with your exam information:

```json
{
  "examCode": "AB-620",
  "examTitle": "Copilot Studio Agent Developer",
  "description": "3-day intermediate certification for designing and building Copilot Studio agents",
  "totalFlashcards": 511,
  "totalQuestions": 252,
  "topics": [
    {
      "code": "ALM",
      "name": "Plan and configure agent solutions",
      "description": "Environment setup, pipelines, deployment preparation",
      "weight": 0.325,
      "source": "Microsoft Learn AB-620 Study Guide"
    },
    {
      "code": "INTEGRATION",
      "name": "Integrate and extend agents in Copilot Studio",
      "description": "Agent composition, copilot integration, extension patterns",
      "weight": 0.425,
      "source": "Microsoft Learn AB-620 Study Guide"
    },
    {
      "code": "TESTING",
      "name": "Test and manage agents",
      "description": "Testing strategies, monitoring, diagnostics, lifecycle management",
      "weight": 0.225,
      "source": "Microsoft Learn AB-620 Study Guide"
    }
  ]
}
```

**Topic weights must sum to 1.0 and should match your exam's official topic distribution.**

### B. Flashcards (Markdown)

File name: `{EXAM-CODE}-ALL-FLASHCARDS.md` (e.g., `AB-620-ALL-FLASHCARDS.md`)

Format:

```markdown
# Master Flashcard Bank

**1. What is a developer environment?**

A single-user environment. It cannot be used to run or share production apps. [Source reference]

**2. What does ALM stand for?**

Application Lifecycle Management — the process of managing code, builds, tests, and deployments.

**3. When would you use a developer environment?**

For personal development and testing only, not for production or multi-user scenarios.
```

Each flashcard is:
1. A bold-formatted question: `**N. Question text?**`
2. Followed by the answer text (one or more paragraphs)

### C. Practice Questions (Markdown)

File name: `{EXAM-CODE}-ALL-QUESTIONS.md` (e.g., `AB-620-ALL-QUESTIONS.md`)

Format:

```markdown
### Q0030 - Implement ALM
*ALM · Medium*

> A maker is told to test multi-user sharing behavior for an agent before release. They only have a developer environment available.
>
> Why will this not work?

- **A.** Developer environments do not support agents
- **B.** A developer environment is single-user and cannot run or share production apps
- **C.** Developer environments must be managed environments first
- **D.** Sharing requires a pipelines host

**Answer: B**

A developer environment is a single-user environment and cannot be used to run or share production apps. Multi-user sharing requires at least a cloud environment.

`['ALM-002']`
```

Each question is:
1. A section header: `### QN - Title` (where N is the question number)
2. Topic and difficulty: `*TOPIC · DIFFICULTY*`
3. Question text in blockquotes: `> Question...`
4. Options: `- **A.** Option text`
5. Answer: `**Answer: X**`
6. Explanation: Free text after the answer
7. Optional tag: `` `['TAG']` ``

---

## Step 2: Open the Study Dashboard

Use one of these options:

1. **Local:** Open `index.html` directly, or run a static server from repo root (`python -m http.server 8000`).
2. **Published:** Use the URL shown in **GitHub -> Settings -> Pages** for this repo.

On mobile, you can bookmark the published URL to your home screen for quick access.

---

## Step 3: Load Your Content

1. Click **"Load Exam Files"**
2. Select all three files: `metadata.json`, `AB-620-ALL-FLASHCARDS.md`, `AB-620-ALL-QUESTIONS.md`
3. The app parses and stores everything locally in your browser
4. Status shows how many items were loaded

---

## Step 4: Study

### Flashcard Mode
- Adjust card count (1 to available cards)
- Click **Start**
- Review each card, click **Reveal Answer**
- Click **Next Card** to continue
- Session ends after all cards are reviewed

### Quiz Mode  
- Adjust question count (1 to available questions after filters)
- Optional: set difficulty/topic filters before starting
- Optional: enable answer-choice shuffle for this session
- Click **Start Quiz**
- Select your answer (A-D) for each question
- Click **Submit Answer** to move to the next question
- At the end, you see:
  - Overall score (%)
  - Per-topic breakdown (which topics need more work)

---

## Step 5: Track Progress

Your progress is saved automatically in your browser. You can:

- **Return to the app** and continue from where you left off
- **Across sessions:** The app remembers which items you've seen, so you eventually review everything (not just repeating the same questions)
- **On the same device:** All progress stays local to that device
- **Export progress** (coming in a future update): Manual backup for cloud storage

---

## File Naming Rules

⚠️ **Important:** File names must match these patterns exactly:

| File Type | Pattern | Example |
|-----------|---------|---------|
| Metadata | `metadata.json` | `metadata.json` |
| Flashcards | `{EXAM-CODE}-ALL-FLASHCARDS.md` | `AB-620-ALL-FLASHCARDS.md` |
| Questions | `{EXAM-CODE}-ALL-QUESTIONS.md` | `AB-620-ALL-QUESTIONS.md` |

The app looks for "FLASHCARDS" and "QUESTIONS" in the filenames, so these keywords must be present.

---

## Common Mistakes

❌ **Mistake:** File named `AB620-flashcards.md` (missing hyphen, wrong case)  
✅ **Fix:** Use `AB-620-ALL-FLASHCARDS.md` (uppercase "ALL", "FLASHCARDS")

❌ **Mistake:** Question doesn't have exactly A-D options  
✅ **Fix:** Always use `- **A.**`, `- **B.**`, `- **C.**`, `- **D.**`

❌ **Mistake:** Answer line formatted as `Answer: B` (no bold)  
✅ **Fix:** Use `**Answer: B**` (must be bold)

❌ **Mistake:** Flashcard numbers are 0, 1, 2... (zero-indexed)  
✅ **Fix:** Start with `**1. Question**` (one-indexed)

---

## Tips for Success

1. **Short sessions:** Study for 15-30 min at a time. The app tracks progress so you can pick up where you left off.
2. **Mix modes:** Rotate between flashcards (broad review) and quizzes (focused testing).
3. **Watch trends:** After a few quiz sessions, check the per-topic breakdown. Focus on weak areas.
4. **Multiple devices:** You can load the same files on different devices (phone + laptop). Each maintains separate progress.
5. **Backup your files:** Keep a copy of `metadata.json`, flashcard, and question files somewhere safe.

---

## Troubleshooting

**Files won't load?**
- Check file names match exactly (case-sensitive, must include full pattern)
- Make sure metadata.json is included
- Try opening browser console (F12) — errors will be shown there

**Score seems wrong?**
- Check question format: options must be A-D, answer must be `**Answer: X**`
- Verify no typos in answer letters

**Progress disappeared?**
- Your browser cache was cleared. This resets all stored progress.
- Don't clear "Cookies and site data" for this site

**Questions don't show options?**
- Check markdown format: options must start with `- **A.**` 
- Make sure there are exactly 4 options (A, B, C, D)

---

## Next Steps

Once you're comfortable with the app, you can:
- **Customize topics** in metadata.json to weight your weak areas higher
- **Add more exams:** Just prepare new metadata + flashcard + question files
- **Track trends** across multiple sessions to see your improvement over time

Happy studying! 🎓
