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

Copy lives in two files:

- **`src/content/site.ts`**: name, intro, projects, skills and contact links.
- **`src/content/terminal.ts`**: the hero's `perf.log` numbers, profile card, about blocks, and the experience timeline (each entry styled as a git commit). The profile photo is `public/fateh.jpg`.

The components in `src/components/terminal/` only handle layout.

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
    layout.tsx       # fonts (IBM Plex via next/font), metadata
    page.tsx         # homepage: renders <TerminalPage />
    globals.css      # base styles
    v2/page.tsx      # old preview address, redirects to /
  components/terminal/
    TerminalPage.tsx # page sections
    EditorWindow.tsx # hero perf.log typing animation
    DotNav.tsx       # side dot navigation
    terminal.css     # all portfolio styles
  content/
    site.ts          # shared copy
    terminal.ts      # terminal-style copy
public/
  fateh.jpg          # profile photo
  resume.pdf         # add yours here
```
