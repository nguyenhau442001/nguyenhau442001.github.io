# nguyenhau442001.github.io

Personal portfolio for Nguyen Ngoc Hau — React + Vite, deployed to GitHub Pages
via GitHub Actions on every push to `main`.

Live: https://nguyenhau442001.github.io/

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site
and publishes it. One-time setup: **Settings → Pages → Source → GitHub Actions**.

This repo is named `nguyenhau442001.github.io` (a GitHub Pages *user* page served
at the root), so `base` in `vite.config.js` is `'/'`.

## Editing content

Source content is in `src/components/`, generated from `Nguyen_Ngoc_Hau_CV.md`:

| File | Section |
|---|---|
| `Hero.jsx` | Name, headline, radar graphic |
| `About.jsx` | Bio + quick-facts sidebar |
| `Skills.jsx` | Skill groups |
| `Experience.jsx` | Work history |
| `Project.jsx` | Self-directed project |
| `Education.jsx` | Degree, thesis, awards, mentoring |
| `Footer.jsx` | Contact details |

Colors, fonts, and spacing are CSS variables in the `:root` block of
`src/index.css`.
