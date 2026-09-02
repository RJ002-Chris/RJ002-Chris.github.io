# rj002-chris.github.io

Personal portfolio site for Jirawat Christian Tsao. React 19, Vite, Bootstrap 5, deployed to GitHub Pages.

## Running locally

```bash
npm install
npm run dev
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build into `dist`, including the `404.html` SPA fallback |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint across `src` and the build tooling |
| `npm run verify` | Server-render every route and assert that each one renders and that every referenced asset exists |

## Structure

```
src/
  data/site.js        Name, contact details, resume path. Change these in one place.
  data/projects.js    Project records that drive the portfolio list and the generic detail page.
  components/         Layout, Navbar, Footer, ScrollToTop.
  pages/              One component per route.
public/               Static assets served from the site root.
scripts/              Build verification, not shipped to the browser.
```

## Adding a project

Add an object to `src/data/projects.js`. It will appear on the portfolio list and get a working page at `/projects/<slug>` rendered from the generic `ProjectDetail` template. No route needs to be added.

Only write a bespoke page component when a project needs a custom layout. In that case add the component to `src/pages/` and register its slug in the `customProjectPages` array in `src/App.jsx`. Static routes take precedence over the generic one.

## Deployment

`.github/workflows/deploy.yml` has two jobs.

`ci` runs on pushes to `main` and `draft` and on any pull request into `main`. It lints, builds and verifies, and publishes nothing. Use this to confirm a branch is healthy before merging.

`deploy` runs only on a push to `main`, only after `ci` passes, and publishes `dist` to GitHub Pages.

This requires Settings, Pages, Source set to **GitHub Actions** rather than a branch.

There is no per-branch preview URL. A user site has a single Pages deployment, so `draft` is verified by `ci` and by running the build locally, not by a separate deployed copy.

Because GitHub Pages has no server-side rewrite, the build writes a copy of `index.html` to `dist/404.html`. Pages serves that file for any unmatched path while leaving the URL intact, which lets React Router resolve deep links such as `/portfolio` on a cold load or refresh.
