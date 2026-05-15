# moti-sadot.com

Personal-brand consulting website for **Moti Sadot / מוטי שדות**, solo strategic business consultant working in a methodology called 7BRICKS.

**Live:** https://gainifyconsulting.com (migrating to moti-sadot.com)

## Tech

- Astro 6 + TypeScript
- Hebrew RTL, mobile-first
- Content Collections (blog + testimonials) via Markdown
- Deployed on Netlify (auto-deploy from `main`)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Build

```bash
npm run build
```

Output is in `dist/`. Netlify publishes it automatically on push to `main`.

## Project structure

```
src/
  components/        Astro components (Hero, Footer, 7Bricks, etc.)
  content/
    blog/           Markdown blog posts
    testimonials/   Markdown testimonials
  content.config.ts Content collection schemas (Astro 6 Content Layer API)
  layouts/
    BaseLayout.astro
  pages/
    index.astro     Homepage (composes all section components)
    blog/
      index.astro   Blog list page
      [...slug].astro  Individual post template
  styles/
    global.css      Design tokens, base styles
public/
  favicon.svg
_design-reference/
  moti-sadot.html   Canonical design (do not modify)
```

## Adding a blog post

Create a new file in `src/content/blog/`, for example `src/content/blog/my-post.md`:

```markdown
---
title: "כותרת הפוסט"
description: "תקציר קצר"
date: 2026-06-01
author: "מוטי שדות"
---

תוכן הפוסט בעברית.

פסקה שנייה.
```

The post appears on `/blog` and at `/blog/my-post` after the next deploy.

## Adding a testimonial

Create a new file in `src/content/testimonials/`, for example `src/content/testimonials/cohen.md`:

```markdown
---
name: "ישראל ישראלי"
role: "מנכ\"ל"
company: "חברת דוגמה"
quote: "ציטוט קצר על העבודה."
---
```

Note: the Testimonials section on the homepage is currently hidden via `.hidden-section` and not yet wired to read from this collection. Both will need to be updated when first 2 real testimonials are ready.

## For AI assistants

See [CLAUDE.md](./CLAUDE.md) for full project context, design system, conventions, and pending work.
