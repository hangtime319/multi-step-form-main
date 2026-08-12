# Multi-step Form

Project: a responsive multi-step form built with React and Vite.

## Demo
- Live site: https://hangtime319.github.io/multi-step-form-main/

## Features
- Multi-step form with validation for user information
- Plan selection with monthly/yearly billing toggle
- Add-ons selection with dynamic pricing
- Summary and thank-you screen
- Fully responsive layout with sidebar step indicator

## Technologies
- React (v18/19 compatible)
- Vite (build tool)
- TailwindCSS for styling
- Playwright for end-to-end tests
- ESLint for linting
- GitHub Actions for CI and deploy to GitHub Pages

## Project structure
- `src/` — source React components and pages
- `public/` — static assets copied to build
- `dist/` — production build output
- `tests/` — Playwright E2E tests

## Build & Deploy
```bash
npm install
npm run build
# publish dist to gh-pages (example):
# git checkout --orphan gh-pages
# git --work-tree dist add --all
# git --work-tree dist commit -m "chore(gh-pages): publish site"
# git push origin HEAD:gh-pages --force
```

## Notes
- Images and background assets use relative paths to ensure correct loading on GitHub Pages (`vite.config.js` uses `base: './'`).
- If images don't appear after deploy, try clearing browser cache or force-pushing `dist` again.

---

If you want, I can add contribution instructions or license info.