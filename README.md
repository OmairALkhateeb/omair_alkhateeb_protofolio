# Omair Alkhateeb · Portfolio

Personal portfolio of **Omair Alkhateeb**, Flutter Developer & Mobile Team Lead.
It showcases 5 products (7 Flutter apps) with case-study pages and screen galleries,
in **English, Arabic (RTL) and German**.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

| What | Where |
|---|---|
| All text, in 3 languages | `src/i18n/dictionaries/{en,ar,de}.ts` (`en.ts` defines the shape) |
| Projects: screenshots, brand colors, tech stack, store links | `src/data/projects.ts` |
| Contact details, CV link | `src/data/profile.ts` |
| Social links and photo | `src/data/social.ts` |
| Pages | `src/app/[lang]/…` |
| Language redirect (cookie, then browser language) | `src/proxy.ts` |
| Screenshots, photo, CV | `public/` |

## Adding a project

1. Put screenshots in `public/projects/<slug>/`.
2. Add the project's structure to `src/data/projects.ts`.
3. Add its text under `projects["<slug>"]` in all three dictionaries. TypeScript reports anything missing.
