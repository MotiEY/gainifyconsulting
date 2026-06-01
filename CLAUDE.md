# Moti Sadot Consulting Site

This file is read automatically by AI assistants (Claude Code, Cowork) at the start of every session in this repo. It is the single source of truth for project context, decisions, and conventions.

## CRITICAL: Keep this file current

**Whenever you complete a task, make a significant change, or learn something about the project, you MUST update this file in the same commit that introduces the change.**

Specifically:
- Finished a pending item from "What's pending"? Move it to "What's been done" with a date.
- Discovered a new issue or constraint? Add it to "Known issues".
- Made a design decision Moti approved? Document it in the relevant section.
- Replaced a placeholder with real content (photo, Calendly URL, testimonial)? Update the placeholder note.
- Changed conventions, palette, fonts, or stack? Update those sections.

When in doubt: assume the next AI session has zero memory of this conversation. What would it need to know? Write that down here.

A `feat:` or `fix:` commit that touches code but does NOT update this file when relevant is incomplete. Treat the update as part of the work, not as overhead.

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

1. **Hero** — editorial 2-column with photo on left, copy on right. Primary CTA: "לתיאום שיחת התאמה" (15-min compatibility call). Secondary: "איך אני עובד" → Approach. No explanatory subline (intentionally removed — keep it confident, not process-heavy).
2. **Proof Strip** — three credibility moments, each with NUMBER + headline + detail (3-line treatment, not single label). Content: 26 שנות ניהול בכיר / לקוחות · תקציבים · אנשים. 8 שנים בארה"ב / עסקים גלובליים בליגה העולמית. 7 הלבנים של כל עסק / שיטת 7BRICKS. Each row tells a unique story; do not flatten to single-line labels or generic phrases (Moti specifically rejected the previous bland version on 2026-05-14).
3. **Outcomes** ("מה מקבלים בתהליך") — 3 outcome blocks (01–03)
4. **Approach** ("איך אני עובד") — 2-paragraph methodology
5. **About** ("על מוטי") — bio + sculptural "26" numeral background + real photo. Opens with "26 שנות ניהול בסביבות מורכבות, מהן 8 שנים בארה"ב" (US experience integrated, not as a separate factoid).
6. **7 Bricks grid** — 8-cell grid (7 named bricks + summary), watermark numbers always visible
7. **AIBlock — Editorial Note** ("AI אינו לבנה שמינית. הוא השכבה שיכולה להפוך את שבע הלבנים ליעילות יותר.") — INTENTIONALLY NOT a full section. Compact "editorial note" treatment with a small bronze lightbulb SVG icon, centered, narrow max-width, thin rules top/bottom. **Placement: AFTER 7 Bricks**, so AI is framed as a meta-layer enhancing the methodology, not as a separate brick. Do NOT convert back to a full-section design and do NOT move before SevenBricks; that would over-emphasize AI and conflict with the brand positioning.
8. **Pull Quote** — single sentence on cream-2: *"להפסיק להיות הכבאי של העסק. להתחיל לנווט אותו."*
9. **Testimonials** — HIDDEN via `.hidden-section { display: none }` until 2+ real testimonials are added
10. **Fit** ("למי זה מתאים") — 3 fit blocks + filter line
11. **Diagnostic CTA** — dark section (`#181410`) for paid mapping session. Tagged "אחרי שיחת ההתאמה" (was: "צעד ראשון"). Primary button routes to 15-min call first.
12. **FAQ** — 4-question accordion (`<details>`): free vs paid, AI agents question, who it's not for, what happens after diagnostic
13. **Final CTA** — on cream-2, soft closer. Primary button to 15-min Calendly URL.

**NOT in the homepage (intentionally removed/never added):**
- HowToStart "4-step process" section — proposed by GPT, briefly added, then removed by Moti's decision. **Reason: exposing a 4-step process makes the personal consulting feel like a productized service. Moti is a senior personal consultant; the process is explained in the compatibility call, not on the homepage. Do NOT re-add unless Moti explicitly asks for it.**
- The HowToStart.astro component file may still exist in src/components/ as dead code (not imported by index.astro). Can be safely deleted.

Plus: Header (transparent, blur on scroll), Footer (dark warm bg).

## Sales funnel (CRITICAL — strategic decision May 2026)

**New 4-step funnel** (replaces the original "diagnostic-first" funnel):

1. **15-min compatibility call** (free) — entry point for all CTAs across the site. Calendly URL: `SITE.calendlyUrl15min` (currently placeholder).
2. **Diagnostic mapping** (paid, ₪500, 2 hours) — second step, after the compatibility call confirmed there's a basis to continue. Calendly URL: `SITE.calendlyUrlDiagnostic` (currently placeholder, not actually linked yet).
3. **Engagement proposal with alternatives** — presented after diagnostic, usually two engagement options (focused short or monthly ongoing).
4. **Monthly engagement** — ongoing structured work on management, processes, numbers, people, growth, and AI tools where relevant.

**Why this funnel:** lowers friction at the top, qualifies prospects in a short call, then sells diagnostic. Earlier version had diagnostic as the entry CTA, but for May 2026 Moti chose the lower-friction model for broader reach.

**Diagnostic offer mechanic (unchanged):**
- The diagnostic session is **paid (₪500 internally), but the price is NOT shown on the site**.
- Copy in DiagnosticCTA section says: *"ההשקעה בפגישה סמלית. אם נחליט להמשיך לעבודה משותפת, היא תזוכה במלואה כחלק מהליווי."*
- The credit-back mechanic is the trust signal. Do NOT add the line "הסיכון על הצד שלי, לא על שלך" (rejected as too salesy).
- Session duration: **שעתיים** (two hours), not one.

**AI positioning (added May 2026):**
- AI is part of the consulting offering, **not the main service**.
- Moti is positioned as a senior business consultant who knows where AI can help, NOT as an "AI consultant".
- Key phrase: *"AI לא פותר עסק מבולגן. הוא יכול להאיץ עסק שמבין מה הוא רוצה לשפר."* (used as closing italic line in AIBlock section)
- Avoid: positioning Moti as "AI builder", "agent developer", or implying AI is a core service.

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

**Heading size hierarchy (consistent across sections):**
- Standard content sections (Outcomes, Approach, Fit, About, HowToStart, FAQ): `clamp(22px, 5vw, 32px)` on mobile, `clamp(22px, 2.4vw, 32px)` on desktop, Frank Ruhl Libre 400, line-height 1.35, letter-spacing -0.01em.
- Visual-moment sections (Diagnostic CTA, Hero): larger sizes intentionally, to feel like "the moment."
- Editorial Note (AIBlock): compact treatment, smaller body text, no big heading at all.
- Do not invent new sizes per section. Reuse the standard scale.

## What's been done (May 2026)

- ✅ Migrated old React/Vite Gainify AI Studio project to Astro
- ✅ Built all homepage sections matching the canonical design
- ✅ Mobile-first responsive, Hebrew RTL
- ✅ Content Collections (blog + testimonials) with Astro 6 Content Layer API
- ✅ Welcome blog post in Moti's authentic voice
- ✅ SVG favicon "7" (echoing 7BRICKS methodology, on dark warm bg)
- ✅ Old "Gainify Consulting AI Transformation" code archived to `archive-gainify-ai` branch
- ✅ Auto-deploy via Netlify from `main` branch
- ✅ Sales funnel restructured (May 2026): Hero CTA leads to 15-min compatibility call ("לתיאום שיחת התאמה"), not directly to paid diagnostic
- ✅ Added AIBlock as compact Editorial Note (not full section) **after SevenBricks** — frames AI as meta-layer over the 7 bricks methodology ("AI אינו לבנה שמינית. הוא השכבה שיכולה להפוך את שבע הלבנים ליעילות יותר.")
- ✅ Added FAQ section (4 questions, accordion-style) between Diagnostic and Final CTA
- ✅ DiagnosticCTA reframed as "אחרי שיחת ההתאמה" (was "צעד ראשון")
- ✅ ProofStrip updated: "1 פגישת מיפוי" replaced with "8 מתוכן בארה"ב" (US experience)
- ✅ About paragraph 1 now opens with "26 שנות ניהול בסביבות מורכבות, מהן 8 שנים בארה"ב" (US credential integrated)
- ✅ Hero subline about diagnostic process removed (intentionally; keeps CTA confident, lets the call explain the process)
- ❌ HowToStart "4-step process" section was added briefly then REMOVED per Moti's decision. See "NOT in the homepage" above.

## What's pending (not yet done)

**Content placeholders to replace:**
- About section: photo placeholder (circle with bronze background). Needs real photo. Hero section now uses `/moti-hero.jpg` (also placeholder if missing).
- All CTAs route to `SITE.calendlyUrl15min` which is **LIVE** at `https://calendly.com/motisdt/meet-with-me` (15-min compatibility call). `SITE.calendlyUrlDiagnostic` points to the same URL for now; if Moti later creates a separate event type for the paid 2-hour diagnostic, update that field.
- **Calendly UX:** CTAs use the Calendly popup widget (loaded via `assets.calendly.com/assets/external/widget.js` in BaseLayout) and the `data-calendly-popup` attribute. Clicking opens a scheduling overlay on the same page instead of a new tab. If the JS fails to load, the link falls back to opening Calendly in a new tab (`target="_blank"`).
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
