# Moti Sadot Consulting Site

This file is read automatically by AI assistants (Claude Code, Cowork) at the start of every session in this repo. It is the single source of truth for project context, decisions, and conventions.

## What this is

A personal-brand consulting website for **מוטי שדות / Moti Sadot** (motisdt@gmail.com, 052-552-3021). Solo strategic business consultant for SMBs and management teams, working in a methodology called **7BRICKS** (שיווק, מכירות, תפעול, אנשים, פיננסים, ניהול ומנהיגות, צמיחה).

**English name spelling:** "Sadot" (not "Shadot"). Confirmed by Moti.

**Goal:** establish Moti as a solo consultant, generate discovery calls and paid mapping sessions. Two audiences: SMB owners and investor referrers.

## Live deployment

- **URL:** https://gainifyconsulting.com (will migrate to moti-sadot.com once Namecheap is back online)
- **Registrar:** Namecheap
- **Host:** Netlify (auto-deploys from `main` branch via netlify.toml)
- **Repo:** https://github.com/MotiEY/gainifyconsulting

## Tech stack

- **Framework:** Astro 6 (with new Content Layer API, glob loader)
- **Language:** TypeScript (strict)
- **Styling:** Scoped CSS in `.astro` components + global tokens in `src/styles/global.css`
- **Fonts:** Google Fonts (Frank Ruhl Libre + Assistant)
- **Build output:** `dist/` folder (auto-published by Netlify)

## Design system (LOCKED — do not relitigate)

**Palette: "Warm Authority"**
- Cream `#F0EAE0` (main background)
- Bronze `#7A6445` (accent, links, brand)
- Warm dark `#181410` (dark sections, body text)
- Cream-2: slightly softer cream for accent sections

Note: do NOT use bronze for body text on dark backgrounds. Contrast is too low. Use cream at 60-75% opacity instead.

**Fonts**
- Headings, logos, editorial moments: **Frank Ruhl Libre** (serif), weights 300/400/700/900
- Body, nav, UI: **Assistant** (sans-serif), weights 300/400/500/600
- Hebrew RTL throughout (`<html lang="he" dir="rtl">`)

**Mobile-first**
- Base styles target 375px (iPhone)
- Tablet breakpoint: `@media (min-width: 768px)`
- Desktop breakpoint: `@media (min-width: 1280px)`
- Touch targets minimum 44x44px
- Body font minimum 16px on mobile
- Hamburger nav below 768px (Desktop nav hidden)
- No horizontal scroll at any breakpoint

## Page structure (homepage, top to bottom)

1. **Hero** — editorial 2-column with animated SVG network diagram (7 nodes through bronze pulsing pivot)
2. **Proof Strip** — three credibility numbers (1 / 7 / 26)
3. **Outcomes** ("מה מקבלים בתהליך") — 3 outcome blocks (01–03)
4. **Approach** ("איך אני עובד") — 2-paragraph methodology
5. **About** ("על מוטי") — bio + sculptural "26" numeral background + photo placeholder
6. **7 Bricks grid** — 8-cell grid (7 named bricks + summary), watermark numbers always visible
7. **Pull Quote** — single sentence on cream-2: *"להפסיק להיות הכבאי של העסק. להתחיל לנווט אותו."*
8. **Testimonials** — HIDDEN via `.hidden-section { display: none }` until 2+ real testimonials are added
9. **Fit** ("למי זה מתאים") — 3 fit blocks + filter line
10. **Diagnostic CTA** — dark section (`#181410`) for paid mapping session
11. **Final CTA** — on cream-2, softer closer with tel/mailto buttons

Plus: Header (transparent, blur on scroll), Footer (dark warm bg).

## Diagnostic offer mechanic (CRITICAL — sales logic)

The first mapping session is **paid (₪500 internally), but the price is NOT shown on the site**.

Copy in DiagnosticCTA section says: *"ההשקעה בפגישה סמלית. אם נחליט להמשיך לעבודה משותפת, היא תזוכה במלואה כחלק מהליווי."*

The credit-back mechanic is the trust signal. Do NOT add the line "הסיכון על הצד שלי, לא על שלך" (rejected as too salesy).

Session duration: **שעתיים** (two hours), not one. Was originally "שעה" in the design but corrected to "שעתיים" per Moti.

## Content management

- Blog posts: `src/content/blog/*.md` with frontmatter (title, description, date, author, draft, heroImage)
- Testimonials: `src/content/testimonials/*.md` with frontmatter (name, role, company, quote, photo)
- Config in `src/content.config.ts` (uses Astro 6 new Content Layer API with `glob` loader, NOT `type: "content"`)
- Adding a new blog post = creating a .md file. Adding a testimonial = creating a .md file. No CMS needed.

## Voice and copy conventions

- Tone: calm, direct, professional, not academic, not hypey
- Person: first-person ("אני", "אני עוזר", "המטרה שלי")
- NO marketing-speak, NO buzzwords, NO acronym-heavy framing
- Specific over abstract ("שעתיים ממוקדות" not "פגישה מעמיקה")
- Hebrew throughout, never English mixed in unless quoting a methodology name (7BRICKS)

## Project rules

**No em-dashes (—).** Hard rule. Use comma, period, parenthesis, or rephrase. Applies to all user-facing copy AND code comments.

**Mobile-first CSS.** When writing new CSS, base styles target 375px. Use `@media (min-width)` to scale up. Never write desktop-first.

**RTL everywhere.** Use logical properties (`inset-inline-start`, `padding-inline`, etc.) instead of left/right. Test with browser DevTools at 375px and 1280px.

**Preserve the canonical design.** The reference is in `_design-reference/moti-sadot.html` (read-only, do not modify). The Astro components should match it 1:1 unless explicitly approved otherwise by Moti.

## What's been done (May 2026)

- ✅ Migrated old React/Vite Gainify AI Studio project to Astro
- ✅ Built all 10 homepage sections matching the canonical design
- ✅ Mobile-first responsive, Hebrew RTL
- ✅ Content Collections (blog + testimonials) with Astro 6 Content Layer API
- ✅ Welcome blog post in Moti's authentic voice
- ✅ SVG favicon "7" (echoing 7BRICKS methodology, on dark warm bg)
- ✅ Old "Gainify Consulting AI Transformation" code archived to `archive-gainify-ai` branch
- ✅ Auto-deploy via Netlify from `main` branch

## What's pending (not yet done)

**Content placeholders to replace:**
- About section: photo placeholder (circle with bronze background). Needs real photo.
- DiagnosticCTA + FinalCTA: Calendly button uses `href={SITE.calendlyUrl}` which is `#calendly-placeholder`. Replace `SITE.calendlyUrl` in `src/config.ts` once Calendly account exists.
- Testimonials section: still wrapped in `.hidden-section`. Needs 2+ real testimonials before unhiding. When ready: also wire Testimonials.astro to read from the testimonials content collection (currently it does not).

**Technical polish to add:**
- Print stylesheet `@media print { .reveal { opacity: 1 !important; transform: none !important; } }` so PDF prints show all content (currently reveal-on-scroll animations cause invisible content in print).
- Open Graph image (og:image, 1200x630) for LinkedIn/WhatsApp link previews.
- Sitemap generation (`@astrojs/sitemap` integration).
- Better structured data (Schema.org Person + ConsultingService).

**Infrastructure pending:**
- Migrate domain to `moti-sadot.com` (Namecheap purchase pending, then DNS reconfiguration, then update Netlify, then redirect old domain).
- Set up Google Workspace for `moti@moti-sadot.com` ($6/mo, Business Starter).

## Known issues

- `.claude/settings.local.json` keeps showing as modified in git status. It's Claude Code's local session state. Should probably add to `.gitignore`.
- The README.md is outdated (still references the old Google AI Studio project). Needs rewrite to match this Astro project.

## Working with this codebase

**Local dev:**
```
npm install
npm run dev
# opens http://localhost:4321
```

**Production build:**
```
npm run build
# outputs to dist/
```

**Deploy:**
- Push to `main` branch → Netlify detects → auto-builds → live within 60-90 seconds.
- Build command: `npm run build` (set in netlify.toml).

**Branches:**
- `main` — current production
- `archive-gainify-ai` — preserved old React/Vite Gainify AI Studio code, frozen

**Commit messages:** Conventional Commits format. Prefix with `feat:`, `fix:`, `content:`, `chore:`, `style:`. Use Hebrew when describing content changes that touched copy, English otherwise.

## When you start a new session, please

1. Read this file first.
2. Run `git status` and `git log --oneline -5` to see current state.
3. Confirm context with Moti in plain language before making changes.
4. Ask before doing `git push` (this triggers a live deploy).
5. For new sections or large refactors, work in stages and check in with Moti between stages.
6. Respect the design lock: matches `_design-reference/moti-sadot.html` 1:1 unless explicitly told otherwise.
