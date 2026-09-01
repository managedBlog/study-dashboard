# Study Dashboard

A personal, zero-cost study app for exam preparation. Load your exam content (flashcards and practice questions) from your device and study from any browser, including mobile.

## Features

- **Flashcard Mode:** Review random flashcard selections (10-50 cards per session)
- **Quiz Mode:** Take timed practice quizzes (20-50 questions per session) with per-topic scoring
- **Fair Cycling:** All content eventually gets reviewed across sessions (not just the first 20%)
- **Per-Device Storage:** Progress stored locally in your browser (IndexedDB)
- **Zero Cost:** No server, no login, no hosting fees
- **Mobile Friendly:** Works on iPhone, iPad, and all modern browsers

## How to Use

### 1. Get Your Exam Content

Prepare three files for your exam:
- `metadata.json` — Exam information and topic weights (use the sample as template)
- `{EXAM-CODE}-ALL-FLASHCARDS.md` — Your flashcard bank (one Q/A per paragraph)
- `{EXAM-CODE}-ALL-QUESTIONS.md` — Your practice questions (one question per section with A-D options)

### 2. Open the App

Visit: **[study-dashboard.github.io](https://study-dashboard.github.io)**

### 3. Load Your Content

Click **"Load Exam Files"** and select your three files from your device. The app will parse and store everything locally in your browser.

### 4. Study

Choose **Flashcard Mode** or **Quiz Mode** and start practicing.

## Data Privacy

- ✅ All content stays on YOUR device
- ✅ No data sent to servers
- ✅ No login required
- ✅ No tracking or analytics
- ✅ Progress only saved locally in your browser

**Note:** If you clear your browser storage/cache, progress will be reset.

## Supported Formats

### Flashcards (Markdown)

```markdown
# Master Flashcard Bank

**1. What is a developer environment?**

A single-user environment that cannot be used to run production apps.

**2. What does ALM stand for?**

Application Lifecycle Management...
```

### Questions (Markdown)

```markdown
### Q0030 - Implement ALM
*ALM · Medium*

> Question text goes here as a blockquote

- **A.** Option A text
- **B.** Option B text  
- **C.** Option C text
- **D.** Option D text

**Answer: B**

Explanation of why B is correct.

`['ALM-002']`
```

### Metadata (JSON)

```json
{
  "examCode": "AB-620",
  "examTitle": "Your Exam Name",
  "description": "Short description",
  "totalFlashcards": 500,
  "totalQuestions": 250,
  "topics": [
    {
      "code": "TOPIC1",
      "name": "Topic Name",
      "weight": 0.50
    }
  ]
}
```

## Fair Random Cycling

The app tracks which items you've seen across sessions. When you request N items:
1. The app selects from unseen items first (items you haven't reviewed yet)
2. Once all items are seen, it resets and continues (starting "cycle 2")
3. This ensures you eventually review ALL content, not just a favorite subset

Seen tracking persists across browser sessions — your device remembers what you've practiced.

## Storage Limits

Browser storage is typically **5-50MB** per site. For most exams this is plenty:
- 500 flashcards ≈ 1MB
- 250 questions ≈ 2MB  
- Progress data ≈ 100KB

## Browser Support

Works on all modern browsers:
- ✅ Chrome, Edge, Firefox, Safari (desktop)
- ✅ Safari (iOS/iPhone)
- ✅ Chrome (Android)

Requires JavaScript enabled.

## Troubleshooting

**Q: Files don't load**
- Check that metadata.json is included
- Verify file names match the pattern (must include "FLASHCARDS" and "QUESTIONS")

**Q: Progress disappeared after I cleared cache**
- Browser storage was deleted. Load your files again.
- Tip: Don't clear "Cookies and site data" for this site

**Q: Quiz scores seem wrong**
- Check that your questions use exactly A-B-C-D options
- Check that **Answer: X** is formatted correctly

## Development

This is a vanilla JavaScript app with no dependencies. To modify:

1. Edit `app.js` (logic), `styles.css` (design), `index.html` (structure)
2. Test locally by opening `index.html` in a browser
3. Deploy to GitHub Pages (see deployment instructions)

## License

Personal use only. Do not redistribute exam content.
