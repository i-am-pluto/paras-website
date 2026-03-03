# CLAUDE.md — Paras Website (Retail Edge)

This file provides context for AI assistants working on this codebase.

## Project Overview

**Retail Edge** is a single-page marketing website for a Canadian retail consulting business. It helps consumer brands get their products listed on Canadian store shelves. The site is a static React SPA with no backend.

- **Live contact email:** `team@retailedge.ca`
- **Contact form provider:** Web3Forms (API key in `src/config.js`)
- **Social:** LinkedIn (URL in `src/config.js`)

---

## Technology Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 6 | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first styling (via Vite plugin) |
| Framer Motion | 11 | Animations |
| Web3Forms | — | Serverless contact form submissions |

---

## Repository Structure

```
paras-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # One file per page section
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Problems.jsx
│   │   ├── Services.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Industries.jsx
│   │   ├── Process.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              # Root component — section order lives here
│   ├── config.js            # Email, API keys, social links
│   ├── index.css            # Global styles + Tailwind theme variables
│   └── main.jsx             # React DOM entry point
├── index.html               # HTML shell (fonts, OG tags, root div)
├── vite.config.js           # Vite + React + Tailwind plugins
└── package.json
```

---

## Development Workflows

### Start dev server
```bash
npm run dev
```
Opens at `http://localhost:5173` with hot module replacement.

### Production build
```bash
npm run build
```
Outputs to `dist/` (gitignored). The site is fully static and can be hosted on any static host (Vercel, Netlify, GitHub Pages, etc.).

### Preview production build locally
```bash
npm run preview
```

### Install dependencies
```bash
npm install
```

---

## Architecture & Conventions

### Single-page layout
`App.jsx` renders all section components in order. Navigation uses anchor links (`#services`, `#contact`, etc.) — there is no client-side router.

### Component pattern
Each section is a self-contained component in `src/components/`. Components:
- Accept no props (all data is hardcoded inside)
- Use Framer Motion `whileInView` for scroll-triggered animations
- Use Tailwind utility classes for all styling
- Use custom CSS variables for brand colors (defined in `index.css`)

### Styling conventions
- Tailwind CSS 4 is configured via `@tailwindcss/vite` (no `tailwind.config.js` file needed)
- Custom brand tokens are defined as CSS variables in `src/index.css` under `@theme`:
  - `--color-accent: #00c96e` — primary green
  - `--color-accent-dark: #009a54` — dark green hover state
  - `--color-ink: #111111` — main body text
  - `--color-ink-muted: #374151` — secondary/muted text
  - `--color-bg: #ffffff` — page background
  - `--color-surface: #f0fdf8` — light green tinted surfaces
  - `--color-border: #e2e8f0` — borders and dividers
- Typography: `font-display` → Playfair Display (headlines), `font-sans` → Plus Jakarta Sans (body)
- Fonts are loaded from Google Fonts in `index.html`

### Animation conventions
- Use `motion.*` from `framer-motion` for all animated elements
- `whileInView` with `viewport={{ once: true }}` for entrance animations
- `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}` is the standard fade-up pattern
- Stagger children with `staggerChildren` in `transition` on parent containers

### Configuration (`src/config.js`)
All environment-specific values live here:
- `EMAIL` — contact email address
- `WEB3FORMS_KEY` — API key for the contact form service
- `LINKEDIN_URL` — LinkedIn profile URL

Do not hardcode these values in components.

### Contact form
`Contact.jsx` uses Web3Forms (`https://api.web3forms.com/submit`) for serverless email delivery. No backend is needed. The API key is stored in `src/config.js`.

---

## No Testing or CI/CD

There are currently **no tests** and **no CI/CD pipelines** configured. Vite provides type checking via the browser console during development. Before shipping changes:
1. Run `npm run build` and verify it succeeds with no errors.
2. Run `npm run preview` and manually test all sections and the contact form.

---

## Git Workflow

> **This is a demo project. Always commit and push directly to `main`. Do not create feature branches or pull requests.**

- Always work on and push to: `main`
- Push with: `git push -u origin main`
- Never create `claude/*` branches or open PRs for this repo

---

## Key Files Quick Reference

| File | What to change |
|---|---|
| `src/config.js` | Email, API keys, social URLs |
| `src/index.css` | Brand colors, fonts, global resets |
| `src/App.jsx` | Section order on the page |
| `index.html` | Page title, OG metadata, font imports |
| `src/components/Nav.jsx` | Navigation links, CTA button |
| `src/components/Contact.jsx` | Contact form fields and submission logic |
| `src/components/Hero.jsx` | Main headline and hero CTAs |

---

## Assets

- `public/favicon.svg` — Site favicon
- Industry card images are loaded from Unsplash URLs hardcoded in `Industries.jsx`
- `GTA_Retail_Growth_Partners_Enhanced_Plan.pdf` — Internal business plan document (not served to users)
