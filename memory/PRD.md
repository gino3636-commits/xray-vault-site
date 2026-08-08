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

## Recent changes (Jun 2026)
- Features page image swaps to real app screenshots (all shown in full via `--full`/`--duo`/`--tile` contain treatments, no cropping):
  - 01 Technique & Positioning: `technique-positioning.webp`
  - 02 OR & Fluoro Exam Guides: duo `guide-lithotripsy.webp` + `guide-cystogram.webp`
  - 03 Department Protocols & Directory: duo `protocols-list.webp` + `directory-list.jpg`
  - 04 License & CE: `license-ce-screen.jpg`
  - 05 Share & Import: duo `export-qr-menu.webp` + `export-qr-code.webp`
- Screenshots page: OR guides `--tile` (`or-exam-tile.jpg`), License `--tile` (`license-ce-tile.jpg`).
- Homepage "On the floor": `protocols-shot.jpg` via `--tall` (phone frame removed).
- Support email: xrayvaultsupport@gmail.com.
- Lenis bundled locally at `assets/js/lenis.min.js` (no CDN). Site is 100% self-contained for GitHub Pages.

## Site structure (updated Jun 2026)
- 3 pages only: `index.html` (Home), `privacy.html`, `support.html`.
- Former Features & Screenshots pages were merged into Home as in-page sections: `#features` (5 feature rows, data-testid=feature-rows) and `#screenshots` (7-phone gallery, data-testid=screens-gallery). `features.html` and `screenshots.html` deleted.
- Nav (all pages): Home, Features, Screenshots, Privacy, Support. On Home, Features/Screenshots are in-page anchors (#features/#screenshots); on Privacy/Support they point to index.html#features / index.html#screenshots. Verified via testing_agent iteration_4 (100% pass).

## Guideline 3.2 (Business) compliance rewrite (Jun 2026)
- App Store rejected the iOS app under 3.2 (looked like an internal tool for a specific org). NOTE: the mobile app source is NOT in this workspace — only the marketing website. Website was updated for consistency with a PUBLIC / personal-use positioning.
- Removed ALL "Get the app" CTAs (nav, hero, bottom CTA) and both App Store / Google Play store badges from every footer across index/privacy/support.
- Reworded org/employer framing to individual self-managed use: hero "your own radiography reference"; Features 03 label "YOUR NOTES" / heading "Protocols & Contacts You Build" (bullets: "Save your own protocol notes", "Build your own contacts list"); "On the floor" -> "Built for the floor, not the reading room."; Features intro "set up and managed entirely by you"; meta description updated; privacy contact points to Support page (no App Store reference).
- Kept: app feature/screen names (e.g. "Department Protocols" in marquee/alt/captions) and the Support FAQ safety disclaimer.
- Verified via testing_agent iteration_5 (100% frontend pass, 0 issues).

## Backlog / Future
- P2: Optionally apply device-mockup treatment to other portrait screenshots for consistency.
- P2: Add OpenGraph/social meta + favicon polish for sharing.
