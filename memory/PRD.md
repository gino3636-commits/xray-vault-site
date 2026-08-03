# X-Ray Vault — Marketing Website (PRD)

## Original Problem Statement
Build a static marketing website (HTML/CSS/JS only, no backend) for the "X-Ray Vault" radiography app. Requirements: feature highlights, screenshots, privacy policy, support/contact page. Must be GitHub Pages compatible for publishing.

## Constraints (DO NOT VIOLATE)
- Pure HTML/CSS/vanilla JS only. NO React, Next.js, Node, or Python backend for the site.
- Must remain fully static (GitHub Pages compatible). No forms/backends.
- Light/clinical theme. Brand primary color palette (#0B3B60 / #1A6CA8 family) extracted from the app's AAB.

## Tech Stack
- HTML5 + CSS3 + Vanilla JS
- Lenis (CDN) for smooth scrolling
- Preview served as static site via `serve`

## Architecture
```
/app/
├── index.html, features.html, screenshots.html, privacy.html, support.html
├── README.md, .nojekyll, serve.json
└── assets/{css/styles.css, js/main.js, img/*}
```

## Implemented (as of Jun 2026)
- 5 static pages, responsive, light clinical theme with real app branding.
- Real app screenshots mapped to feature cards.
- Privacy policy uses exact user-provided text.
- Removed contact form + Help Center / Privacy & Security nav items (kept static).
- Homepage "On the floor" section: replaced tablet image with the "Department Protocols" phone screenshot (`assets/img/protocols-shot.jpg`) presented inside a subtle phone/device mockup frame (`.phone-mock`, `.showrow__media--phone` in styles.css). Frame aspect 4/5 to fit the ~0.85 ratio screenshot without side-cropping. Verified via isolated-section screenshot.

## Recent changes (Jun 2026)
- OR & Fluoro Guides section (screenshots.html): now uses the "OR Exam Guide" tile (`assets/img/or-exam-tile.jpg`), full-image `--tile` treatment.
- License & CE section (screenshots.html): uses "License/Education" tile (`assets/img/license-ce-tile.jpg`), `--tile` treatment.
- Homepage "On the floor": phone-frame removed; shows `protocols-shot.jpg` full via `--tall` treatment (clean border + shadow, no dark device frame).
- Support email updated to xrayvaultsupport@gmail.com (support.html).
- Lenis smooth-scroll now bundled locally at `assets/js/lenis.min.js`; all 5 pages reference it (removed unpkg CDN). Site is now 100% self-contained for GitHub Pages.

## Backlog / Future
- P2: Optionally apply device-mockup treatment to other portrait screenshots for consistency.
- P2: Add OpenGraph/social meta + favicon polish for sharing.
