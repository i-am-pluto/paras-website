# Retail Edge Website

A one-page marketing website for **Retail Edge**, a Canadian retail consulting business that helps consumer brands get their products listed on Canadian store shelves.

---

## Getting Started

Install dependencies (first time only):
```bash
npm install
```

Start the site locally:
```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Making Changes

All content is in `src/components/`. Each file controls one section of the page:

| File | Section |
|---|---|
| `src/components/Hero.jsx` | Top headline and buttons |
| `src/components/Nav.jsx` | Navigation menu |
| `src/components/Services.jsx` | Services list |
| `src/components/Contact.jsx` | Contact form |
| `src/components/Footer.jsx` | Page footer |

To update the contact email, API keys, or LinkedIn link — edit `src/config.js`.

---

## Deploying Changes

1. Create a feature branch and make your changes
2. Commit and push the branch
3. Open a Pull Request to merge into `main`

The site is hosted as a static site. Any merge to `main` will trigger a new deployment.

---

## Contact

Questions? Email [team@retailedge.ca](mailto:team@retailedge.ca)
