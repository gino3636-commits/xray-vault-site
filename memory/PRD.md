# X-Ray Vault — Marketing Website (PRD)

## Original problem statement
"Using only HTML and CSS. I want a web app / website — a marketing website for my X-Ray Vault radiography app with feature highlights, screenshots, privacy policy, and a support/contact page. Compatible with GitHub; I want to publish it on GitHub."

## User choices
- Pages: Home, Features, Screenshots, Privacy Policy, Support/Contact
- Style: Clean medical/clinical (then rebranded to match the real app identity)
- Contact form: visual/static only (no backend)
- Brand assets: user uploaded the real Android **.aab**; extracted logo, app icon, brand color, app id
- Features: sensible radiography defaults

## Architecture
- 100% static site — pure HTML + custom CSS + lightweight vanilla JS. No framework, no build step → GitHub Pages ready.
- Files at repo root: `index.html`, `features.html`, `screenshots.html`, `privacy.html`, `support.html`
- `assets/css/styles.css`, `assets/js/main.js`, `assets/img/*` (all imagery self-hosted), `.nojekyll`, `README.md`
- Preview served on :3000 via `serve` (frontend `package.json` `start` = `serve /app`); `serve.json` disables preview caching.

## Brand (from uploaded .aab: com.xrayvault.app)
- Real logo lockup (`splash-logo.png`): metallic "X + vault door" with x-ray ribcage, "X-RAY" chrome + "VAULT" blue on black
- App icon: radiation trefoil (`brand-mark.png`) → used as nav mark + favicon
- Brand blue ~#1A6CA8 (accent `#1877B8`, cyan highlight `#7fc4ff`), dark hero `#0A0F12`
- Type: Cabinet Grotesk (display) + IBM Plex Sans (body) + JetBrains Mono (labels)

## Implemented (2026-06-03)
- Cinematic dark hero featuring the real logo emblem (glow + scan sweep), chrome+cyan heading, stats, CTAs
- Editorial marquee, bento feature grid (encryption, DICOM viewer, records, offline, sharing, AES stat)
- App-preview row, numbered manifesto chapters, device-frame screenshot gallery, CTA band, rich footer
- Features page: 5 alternating deep-dive rows with tick lists
- Screenshots page: 3 CSS device frames with the real app screens + clipped detail rows
- Privacy page: sticky TOC + 10 numbered legal sections (template)
- Support page: visual contact form (JS shows success, no send) + 3 channels + 5-item FAQ (native <details>)
- Motion: IntersectionObserver scroll reveals, Lenis smooth scroll (CDN, progressive enhancement), CSS marquee/float/scan
- Accessibility: semantic HTML, aria labels, prefers-reduced-motion fallback (content always visible), data-testid across interactive/info elements
- Verified: all 5 pages + all images + css/js return 200; internal links valid

## Notes / status
- **Corrected (2026-06-03, v2):** After the user shared 5 real in-app screenshots, discovered the app is a **radiographer's toolkit** (Technique & Positioning, OR & Fluoro Exam Guides, Department Protocols, Phone Directory, License/CE tracking, Share & Import) — NOT a DICOM image vault. Rewrote all copy across the 5 pages accordingly and dropped the 5 real screens into the device frames (`shot-home/or/fluoro/license/share.png`). Removed inaccurate encryption/DICOM/patient-record claims.
- Contact form is VISUAL ONLY (no email send) per user choice — documented in `support.html` and README.

## Backlog
- P2: Wire contact form to Formspree/Resend if user wants live submissions
- P2: Add OG/social share images + sitemap
- P2: Wire App Store / Google Play buttons to real listings
- P2: Real legal review of Privacy Policy copy

## Publish (GitHub Pages)
Push repo → Settings → Pages → Deploy from branch → `main` / root. `.nojekyll` included.
