# X-Ray Vault — Marketing Website

A fast, fully **static** marketing site for the **X-Ray Vault** radiography app.
Built with **pure HTML + CSS** and a small amount of vanilla JavaScript (no framework, no build step) — so it drops straight onto **GitHub Pages**.

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Home — kinetic hero, feature bento, manifesto, screenshot teaser |
| `features.html` | Deep-dive feature rows |
| `screenshots.html` | App screenshots in device frames |
| `privacy.html` | Privacy Policy (template) |
| `support.html` | Support / Contact page + FAQ (visual, non-sending form) |

## Structure
```
.
├── index.html
├── features.html
├── screenshots.html
├── privacy.html
├── support.html
├── .nojekyll
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/            # all imagery (self-contained)
```

## Publish on GitHub Pages
1. Create a repo and push these files to the **root** of the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "X-Ray Vault marketing site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment**.
3. Set **Source = Deploy from a branch**, **Branch = `main`**, **Folder = `/ (root)`**, then **Save**.
4. Your site goes live at `https://<you>.github.io/<repo>/` in a minute or two.

> `.nojekyll` is included so GitHub serves the files as-is (no Jekyll processing).

## Customising
- **Screenshots:** replace the three images in `assets/img/` — `screen-vault.jpg`, `screen-viewer.jpg`, `screen-records.jpg` — with your real app captures (portrait, ~9:19.5). No code changes needed.
- **Logo / colors:** the brand mark is an inline SVG in each page's header; brand colors are CSS variables at the top of `assets/css/styles.css` (`--primary`, `--accent`).
- **Contact form:** it's visual only. To make it send, point the `<form>` at a service like [Formspree](https://formspree.io) — see the note inside `support.html`.

## Third-party
- Fonts: Cabinet Grotesk (Fontshare) + IBM Plex Sans / JetBrains Mono (Google Fonts) via CDN.
- Smooth scrolling: [Lenis](https://github.com/darkroomengineering/lenis) via CDN (progressive enhancement — site works without it).
