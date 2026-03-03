# CLAUDE.md — Paras Website (Retail Edge)

This file tells AI assistants how to work on this project. Read it before making any changes.

---

## What This Project Is

A simple one-page website for **Retail Edge**, a Canadian retail consulting business. It shows what they do and lets visitors send a message. There is no database or backend — just a website.

- **Contact email:** `team@retailedge.ca`
- **Contact form:** Handled by Web3Forms (no backend needed)
- **Social:** LinkedIn (link stored in `src/config.js`)

---

## IMPORTANT: How to Save and Publish Changes

> **This is a demo project. Always push changes directly to `main`. No exceptions.**

After making any change, always do these three steps in order:

```
1. git add .
2. git commit -m "describe what you changed"
3. git push -u origin main
```

**Never:**
- Create a new branch
- Open a pull request
- Ask someone to review before pushing

Just make the change and push it straight to `main`. That's it.

---

## What Each File Does (Plain English)

| File | What it controls |
|---|---|
| `src/config.js` | Email address, contact form key, LinkedIn link |
| `index.html` | Page title, description shown in Google search results |
| `src/components/Hero.jsx` | The big headline and buttons at the top of the page |
| `src/components/Nav.jsx` | The menu bar at the top |
| `src/components/Services.jsx` | The list of services offered |
| `src/components/Contact.jsx` | The contact form |
| `src/components/Footer.jsx` | The bottom of the page |
| `src/components/Problems.jsx` | The "problems we solve" section |
| `src/components/WhyUs.jsx` | The "why choose us" section |
| `src/components/Industries.jsx` | The industry cards with photos |
| `src/components/Process.jsx` | The 3-step process section |
| `src/components/Stats.jsx` | The "how we work" pillars section |
| `src/index.css` | Colors and fonts used across the whole site |
| `src/App.jsx` | The order sections appear on the page |

---

## Brand Colors

| Color | Value | Used for |
|---|---|---|
| Green (main) | `#00c96e` | Buttons, highlights, accents |
| Dark green | `#009a54` | Button hover state |
| Black | `#111111` | Headings and main text |
| Grey | `#374151` | Smaller / secondary text |
| White | `#ffffff` | Page background |
| Light green | `#f0fdf8` | Card and section backgrounds |

---

## Fonts

- **Headlines:** Playfair Display (elegant serif)
- **Body text:** Plus Jakarta Sans (clean sans-serif)

Both are loaded from Google Fonts in `index.html`. No installation needed.

---

## Running the Site Locally

```bash
npm install       # first time only
npm run dev       # start the site at http://localhost:5173
```

To check the site looks right before pushing:
```bash
npm run build     # make sure it builds without errors
npm run preview   # view the built version locally
```

---

## Tech Used (for reference)

- **React 19** — builds the page from components
- **Vite 6** — runs and builds the site fast
- **Tailwind CSS 4** — handles all the styling
- **Framer Motion 11** — handles animations
- **Web3Forms** — sends contact form emails without a backend

No tests or CI/CD are set up. This is intentional for a demo project.

---

## Changing Content

All text content is hardcoded directly inside each component file. To change what the site says, edit the relevant component in `src/components/`. There is no CMS or database.

To change contact details, API keys, or social links — edit `src/config.js` only. Do not hardcode these in components.
