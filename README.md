# Fateh Sandhu — Portfolio

Personal portfolio site built with Next.js (App Router), React and TypeScript. No UI framework: styling is plain CSS in `src/app/globals.css`.

## Run it locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit the content

All copy lives in **`src/content/site.ts`**: headline, intro, the before/after timing log, experience, projects, skills and contact links. The components in `src/components/` only handle layout.

Before going live:

1. Replace the placeholder `contact` values (email, LinkedIn, GitHub). Set any of them to `""` to hide that link.
2. Add your resume as `public/resume.pdf`.

## Deploy

Live at [fatehsandhu.github.io](https://fatehsandhu.github.io/)

The site builds to static files (`output: "export"` in `next.config.ts`) and deploys to GitHub Pages through `.github/workflows/deploy.yml`. Every push to `master` rebuilds and redeploys; progress shows under the repo's **Actions** tab.

The previous 2017 site is preserved on the `archive-2017` branch.

## Structure

```
src/
  app/
    layout.tsx     # fonts (IBM Plex via next/font), metadata
    page.tsx       # renders <Portfolio />
    globals.css    # design tokens and all styles
  components/
    Portfolio.tsx  # page sections
    TimingLog.tsx  # hero before/after bars
  content/
    site.ts        # all site copy
public/
  resume.pdf       # add yours here
```
