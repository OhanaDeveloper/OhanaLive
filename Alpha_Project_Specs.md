# Alpha Project Specs — Ohana Recovery

> **Read this first.** This is the canonical source of truth for AI coding agents working in the OhanaLive repository. If anything in another markdown file in this repo contradicts this document, this document wins. The other markdown files are historical and will be pruned.
>
> **Audience.** Future Claude Code sessions, future contributors, future you.
>
> **Last revised.** 2026-05-18.

---

## 0. Founder context — read this before writing any code

Ohana Recovery is built and operated by **Daniel Minton** (also operating as Modern Opossum / software alchemy).

Daniel is the founder, operator, systems architect, recovery community builder, creative director, technical strategist, and product owner. Not a client. Not a stakeholder. Not "the user." When this doc says "Daniel," treat that as the product authority.

This project comes from **lived recovery experience plus working software engineering experience**. Every design and copy decision should pass this filter:

> Would a person in active recovery, awake and struggling at 2 AM, find this useful, honest, and unembarrassing?

If the answer is no, the decision is wrong, regardless of how clean the code is.

Treat the project as:

- a founder-built recovery access system
  - a late-night peer-support infrastructure
  - a trust-and-safety surface
  - a community operating system
  - a technical portfolio artifact

Do **not** treat it as:

- a generic nonprofit brochure
  - a donation funnel
  - a wellness app
  - a committee-approved corporate site
  - a template-based recovery resource page

---

## 1. Identity at a glance

| | |
|---|---|
| Product name | Ohana Recovery |
| Live site | https://ohanarecovery.org |
| Repository | https://github.com/OhanaDeveloper/OhanaLive |
| Default branch | `main` |
| Frontend host | Vercel |
| Backend host | Railway |
| Database | Railway-managed PostgreSQL |
| Status | Founder-led, rebuilding, in active development |

---

## 2. Architecture

Split frontend/backend monorepo with a thin root `package.json` that delegates frontend scripts.

### 2.1 Stack

**Frontend (`frontend/`):**

- Next.js 16 (App Router, Turbopack dev)
  - React 19
  - TypeScript 5
  - Tailwind CSS 4
  - Framer Motion 12
  - Three.js / React Three Fiber / Drei (used selectively for desktop atmosphere)
  - Zustand 5 (client state)
  - TanStack Query 5 (server state)
  - Lucide React (icons)
  - `@react-pdf/renderer` (in-browser worksheet PDF generation)
  - `@anthropic-ai/sdk` (anonymous peer support chat backend)
  - Vercel Analytics + Speed Insights (built-in)
  - Google Analytics 4 (gated on `NEXT_PUBLIC_GA_MEASUREMENT_ID`)

**Backend (`backend/`):**

- Django 5
  - Django REST Framework
  - PostgreSQL via `DATABASE_URL`
  - SimpleJWT (60 min access, 7 day refresh)
  - django-allauth + dj-rest-auth (with custom adapter)
  - Gunicorn (production WSGI)
  - WhiteNoise (static files)

### 2.2 Directory map (verified 2026-05-18)

```text
OhanaLive/
├── frontend/
│   ├── src/
│   │   ├── app/                     Next.js App Router (route groups: (auth), (member), (public))
│   │   │   ├── (auth)/              login, signup, forgot-password, reset-password
│   │   │   ├── (member)/dashboard/  protected member dashboard
│   │   │   ├── (public)/            crew, story, support, toolkit, recovery-network
│   │   │   ├── admin/               admin dashboard (UI partially wired)
│   │   │   ├── forms/               contact, story, volunteer (UI-only)
│   │   │   ├── meeting/             "What to expect" interstitial + fallback
│   │   │   ├── api/chat/            anonymous peer support chat endpoint
│   │   │   └── privacy/             privacy policy
│   │   ├── components/
│   │   │   ├── about/               mission, promise, video intro
│   │   │   ├── analytics/           GoogleAnalytics
│   │   │   ├── chat/                ChatWidget + dependencies (peer support)
│   │   │   ├── crew/                CrewHero, CrewRoster
│   │   │   ├── forms/
│   │   │   ├── home/                ChoosePathSection, TestimonialsSection, FeaturedWorksheetSection, HomeHero
│   │   │   ├── layout/              ClientLayout, Navigation, MobileNav, Footer, SettingsMenu
│   │   │   ├── resources/           toolkit hero + supporting UI
│   │   │   ├── shared/              MeetingCTA, MeetingStatus, JoinNowButton, FloatingJoinMeetingButton, CrisisResourceWidget
│   │   │   ├── story/
│   │   │   ├── support/             SupportHero, ContributionPaths   (new 2026-05-18)
│   │   │   └── ui/                  LotusBreath, RotatingLogo, SectionWrapper, accessibility primitives
│   │   ├── contexts/                AuthContext
│   │   ├── data/                    crew.ts (canonical roster, founder-led)   (new 2026-05-18)
│   │   ├── features/
│   │   │   └── resources/           worksheet data + Explorer (108 worksheets)
│   │   ├── lib/                     api.ts, meetings.ts (env-driven), meetingTime.ts, analytics.ts, worksheetStorage.ts
│   │   └── providers/               ReCaptchaProvider
│   ├── public/                      lotus logo + crew portraits
│   ├── next.config.ts               redirects (/give|/donate|/support-us → /support; /resources → /toolkit)
│   ├── .env.example                 documented env vars
│   └── package.json
│
├── backend/
│   ├── ohana_backend/               Django settings + URL routing
│   ├── users/                       CustomUser, Profile, SobrietyDate, Role
│   ├── recovery/                    Meeting, MeetingSignUp, MeetingAttendance, MalamaContact, Announcement
│   ├── social/                      Conversation, Message, Friendship, Block, Post, Comment (built, URL router commented out)
│   ├── security/                    LoginHistory, UserReport, ActivityLog
│   ├── journal/                     stubbed
│   ├── community/                   stubbed
│   ├── messaging/                   stubbed (not routed)
│   ├── resources/                   stubbed (frontend resources live in frontend/features/)
│   ├── DEPLOYMENT.md                operational Railway deploy guide (KEEP)
│   ├── manage.py
│   ├── nixpacks.toml + railway.toml
│   └── requirements.txt + runtime.txt
│
├── audit/                           audit + verification artifacts (kept for traceability)
├── package.json                     root convenience scripts
└── Alpha_Project_Specs.md           ← this file
```

If a future agent finds a directory or file mentioned here that does not exist, **trust the filesystem and update this doc**, not the other way around.

---

## 3. Scripts

Run from the **repo root** unless noted. The root scripts proxy into `frontend/`.

```bash
npm install              # delegates to frontend/
npm run dev              # Next.js dev — defaults to :3000 (pass PORT=3001 if occupied)
npm run build            # Next.js production build
npm run start            # Next.js production server
npm run lint             # ESLint via next lint (currently has pre-existing failures, see §16)

# Backend (run from backend/ with a venv active)
cd backend
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver       # → :8000
python manage.py collectstatic
```

There is also `npm run dev:backend` which shells `cd backend && python3 manage.py runserver` from the root. It assumes you've already created and activated a Python venv — it does not bootstrap Python for you.

---

## 4. Environment variables

### Frontend (`frontend/.env.local`, mirrored in `frontend/.env.example`)

| Variable | Purpose | Required? |
|---|---|---|
| `NEXT_PUBLIC_MEETING_ZOOM_URL` | Canonical Zoom URL for "Join Tonight's Meeting". When unset, falls back to a hardcoded literal in `frontend/src/lib/meetings.ts`. When set to empty string, the site renders the crisis fallback. | Strongly recommended in production |
| `NEXT_PUBLIC_API_URL` | Django backend base URL. When unset, dynamic meeting/host fetches are skipped and the frontend operates against the env-fallback Zoom URL only. | Recommended |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID. When unset, the GA script is not injected. | Optional |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v3 site key for login/register. | Optional in dev, required for auth flows |

### Backend (`backend/.env`, see `backend/.env.example`)

| Variable | Purpose |
|---|---|
| `SECRET_KEY` | Django secret. Generate with `python3 -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'` |
| `DEBUG` | `False` in production |
| `DATABASE_URL` | Provided automatically by Railway PostgreSQL plugin |
| `ALLOWED_HOSTS` | `.railway.app,ohanarecovery.org` |
| `CORS_ALLOWED_ORIGINS` | `https://ohanarecovery.org,https://www.ohanarecovery.org` |
| `JWT_ACCESS_TOKEN_LIFETIME_MINUTES` / `JWT_REFRESH_TOKEN_LIFETIME_DAYS` | Auth token lifetimes |
| `ENCRYPTION_KEY` | 32-byte key for journal/message encryption (encryption not yet active) |
| `EMAIL_BACKEND` / `EMAIL_HOST` / `EMAIL_HOST_USER` / `EMAIL_HOST_PASSWORD` | Resend or Gmail SMTP for password reset emails |
| `REDIS_URL` | Optional caching/sessions |
| OAuth keys (Google, Apple, Facebook, GitHub) | Optional |

**Never add an env var without documenting it here AND in the example file.**

---

## 5. Routes

### Public (rendered)

| Route | File | Purpose |
|---|---|---|
| `/` | `frontend/src/app/page.tsx` | Home: hero, choose-your-path, mission, testimonials, single human line, promises, featured worksheet, inclusivity, video, trailing meeting CTA |
| `/story` | `(public)/story/page.tsx` | Origin story, timeline, quotes, values, CTAs |
| `/crew` | `(public)/crew/page.tsx` | Founder-led roster (data-driven, scales 1 → N) |
| `/toolkit` | `(public)/toolkit/page.tsx` | 108-worksheet explorer with PDF export |
| `/support` | `(public)/support/page.tsx` | **Canonical broad contribution surface.** Mission-framed, no dollar amounts, multiple contribution paths with equal weight |
| `/recovery-network` | `(public)/recovery-network/page.tsx` | Curated directory of other recovery orgs (LifeRing, Recovery Dharma, SMART, etc). For crisis-time alternatives. |
| `/meeting` | `app/meeting/page.tsx` | "What to expect" interstitial. Renders an inline crisis-fallback view when `NEXT_PUBLIC_MEETING_ZOOM_URL` is empty. |
| `/forms/contact` `/forms/story` `/forms/volunteer` | `app/forms/*` | UI-only forms; simulate success; backend endpoints not yet wired |
| `/privacy` | `app/privacy/page.tsx` | Privacy policy (GA cookies disclosed) |

### Auth + member

| Route | Purpose |
|---|---|
| `/login` `/signup` `/forgot-password` `/reset-password` | Auth flow with reCAPTCHA v3 |
| `/dashboard` | Protected member dashboard (sobriety tracker, announcements, profile) |

### Admin (UI partial, backend wiring incomplete)

| Route | Purpose |
|---|---|
| `/admin` | Overview (simulated stats) |
| `/admin/meetings` | Meeting management (hits `http://127.0.0.1:8000/api/recovery/meetings/` directly — needs `NEXT_PUBLIC_API_URL`) |
| `/admin/signups` `/admin/announcements` `/admin/contacts` | UI only |

### Permanent redirects (in `frontend/next.config.ts`)

| From | To |
|---|---|
| `/give` | `/support` |
| `/donate` | `/support` |
| `/support-us` | `/support` |
| `/resources` | `/toolkit` |
| `/resources/:path*` | `/toolkit/:path*` |

**`/support` is the canonical broad support surface.** Do not re-create `/give`, `/donate`, or `/support-us` as pages. Do not narrow `/support` to donations-only.

### API

| Route | Backend |
|---|---|
| `/api/chat` | Next.js route — anonymous Claude-powered peer support chat (Haiku, streaming) |
| `/api/auth/*` | Django auth (register, login, refresh, password reset) |
| `/api/users/*` | Profile, sobriety dates, privacy settings |
| `/api/recovery/*` | Meetings (`/tonight/`, `/upcoming/`, `/calendar/`), sign-ups, announcements, Malama contacts |
| `/api/social/*` | Built but URL router currently commented out in `backend/ohana_backend/urls.py` |
| `/api/docs/` | Swagger UI |
| `/api/schema/` | OpenAPI schema |

---

## 6. Feature status

### Active and live

- Public marketing pages (home, story, crew, toolkit, support, recovery-network, meeting, privacy)
  - Authentication (register, login, password reset, JWT refresh, reCAPTCHA v3)
  - Member dashboard (protected, sobriety tracker with restart history, announcements feed, profile card)
  - Recovery worksheets (108 worksheets, in-browser PDF generation, category filter, search)
  - Recovery network directory at `/recovery-network`
  - Anonymous peer support chat (globally mounted floating widget, Claude Haiku 4.5, streaming, no persistence)
  - Meeting status / countdown (timezone-aware, three states)
  - Centralized meeting URL with env override + crisis fallback
  - Persistent crisis resource widget (right-edge expandable)
  - Floating "Join Meeting" button (state-aware, lives globally)
  - Google Analytics 4 (gated on env var, GA cookies disclosed in privacy policy)
  - Vercel Analytics + Speed Insights

### Built but not active

- Social features in backend (`Conversation`, `Message`, `Friendship`, `Block`, `Post`, `Comment`) — URL router commented out, no frontend integration. **Do not expose** until moderation, privacy, and trust-and-safety policies are written.
  - Admin sign-up approval, announcement management, contact management — UI exists, API calls not wired.
  - Form submissions for `/forms/contact`, `/forms/story`, `/forms/volunteer` — UI simulates success, Django endpoints not yet created.

### Planned but not authorized

These appear in older planning docs (TODO2.md). They are **not** authorized work items unless Daniel re-approves:

- Printable one-sheet PDF for institutional distribution
  - SEO content optimization with JSON-LD organization schema
  - Volunteer onboarding documentation page
  - iOS application
  - Partnership cross-listings (treatment centers, SMART, Recovery Dharma, podcasts)
  - Grant readiness (fiscal structure, bookkeeping, impact metrics)
  - Full accessibility audit beyond current WCAG efforts

### Explicitly declined

- Email capture / newsletter — declined 2026-05-02. No collection unless an operational form (contact/story/volunteer/auth) requires it.

---

## 7. Design doctrine

### 7.1 Visual direction

- Black / graphite foundation. The base body is `bg-black`; cards historically used `bg-dark-900` / `bg-dark-950`.
  - Teal as the primary accent. Gold as secondary. Purple as tertiary, used sparingly.
  - Selective magenta is **off** unless specifically introduced for a deliberate moment.
  - High-contrast, large typography, restrained glow. Depth without clutter.
  - The lotus is the central motif. Koi are an aspirational large-scale motion element (asset gap — see §7.4).
  - **No rectangular or oval containers as the dominant visual chrome.** Rounded rectangles dominate the codebase today and are the single biggest visual misalignment (per the 2026-05-18 audit). Future refactors should move toward an organic shape language (custom SVG curves, full circles for portraits, no card frames at rest).
  - The site should feel **hand-built**, not theme-generated.

### 7.2 Mobile / desktop doctrine

**Mobile is a focused poem. Desktop is a long-form essay.** Same emotional beats, different device affordances.

**Tier 0 — shared foundation (both platforms identical):**

- Typography, copy, structure, hierarchy, palette, accessibility rules, semantic content, critical user paths.

**Tier 1 — mobile-specific:**

- Fewer elements per viewport
  - Larger tap targets (≥44 px)
  - No hover-dependent content
  - Low animation budget (≤2 motion systems per page)
  - Fast first meaningful paint
  - Obvious Join / Support path
  - No vanity counters
  - Press states replace hover states (subtle scale + tint on tap)

**Tier 2 — desktop atmosphere:**

- Cursor parallax
  - Layered background motion
  - Hover atmospherics
  - Subtle glow effects
  - Palm fronds leaning toward cursor (in `HomeHero`)
  - Lotus responding subtly to pointer position
  - Ambient ocean / koi layer
  - Depth-of-field

**Tier 3 — desktop polish:**

- Keyboard nav refinements
  - Strong focus states beyond a11y minimum
  - Optional scroll-snap sections
  - Cinematic type scale (genuinely larger, not just wider)
  - Animated section transitions
  - Richer hover/press variants

**Universal rules:**

- Respect `prefers-reduced-motion` everywhere.
  - Mobile never pays the JS cost of desktop atmosphere — gate Tier 2 effects behind a media-query dynamic import.
  - At-rest visual state is the same on both platforms. Borders, fills, and accents should appear on **interaction**, not at rest, unless they communicate status (live now, current page, error).

### 7.3 Motion vocabulary

The codebase currently has roughly three competing motion systems per page (drifting orb gradients, parallax fade, section-specific Framer animations). Consolidate toward **one signature motion per page** (the OHANA letter pop on home is the strongest example) and let the rest be still.

### 7.4 The cinematic asset gap

The code knows how to move things. The things being moved are gradient blobs and SVG palms. Reaching the aspirational Awwwards/Thorgal bar requires **produced assets** — koi Lottie / illustrated 3D, custom video loops without watermarks, an illustrated or 3D lotus.

Future asset work should be commissioned with one specific section in mind (recommended first target: the seam between `TestimonialsSection` and `PromiseStruggling`, where a single koi-scale motion element would land hardest). Asset cost is paid once; the same source can power Tier 2 desktop full-fidelity and a Tier 1 mobile static frame.

This is out of scope for code work until commissioned.

---

## 8. Voice and tone

**Yes:**

- direct
  - calm
  - human
  - technically credible
  - recovery-informed
  - emotionally honest
  - warm without being soft
  - polished without sounding fake
  - practical without being cold

**No:**

- corporate wellness copy
  - therapy-soft filler
  - generic nonprofit fundraising
  - fake "we are a big team" positioning
  - AI-polished emotional mush
  - institutional brochure copy
  - recovery clichés ("the journey," "your truth," "you've got this")
  - savior-complex language
  - guilt-driven donation copy
  - inflated urgency
  - vanity counter framing ("X nights and counting")
  - emoji in headers
  - em dashes (the codebase had a sitewide em-dash removal pass — don't reintroduce them)
  - Claude/Anthropic attribution in commit messages

---

## 9. Founder-led framing

There is **no active crew** at the moment besides Daniel. The previous 4-person crew (Joey, Daniel, Jonni, Anne) has dispersed.

**Correct framing:**

- Founder-led
  - Rebuilding
  - Honest about the current state
  - Open to future contributors
  - Structurally ready to grow

**Architecture for this:** the `frontend/src/data/crew.ts` data file is the canonical roster. The `CrewRoster` component handles 1, 4, or 20+ members gracefully via CSS `auto-fit` grid. To add a member, add an entry to `crew.ts` — no component changes required.

**Do not:**

- Write copy as if a large aligned team exists.
  - Add placeholder bios. Use `bio: null` and let the card render without bio text rather than templated filler.
  - Imply credentialing, training, or institutional structure that doesn't exist ("trained Mālama crew", "our certified facilitators", etc).
  - Add "Join our amazing team" copy that signals organizational depth.

**Do:**

- State the rebuild state plainly in one line on `/crew`.
  - Invite genuine contributors without overselling what they're joining.
  - Use real names and roles only when authorized.

---

## 10. Support / donations

`/support` is the **canonical broad contribution surface**. It is intentionally not donation-only.

It covers:

- donations (Ko-fi, present but not centerpiece)
  - volunteering
  - supplies
  - partnerships
  - technical help (writing, design, dev, video, moderation, accessibility)
  - community support
  - media support
  - operational support

**Forbidden on `/support`:**

- Operating cost numbers ($200/month, $7/night, monthly burn)
  - "$X covers Y" tier ladders
  - Urgency / scarcity / guilt language
  - Hard-sell fundraising
  - Ko-fi as the focal point

**Permitted operating cost language** (use sparingly, never as a pitch):

> It costs about $200/month to keep this space online.

If a future agent encounters older docs (TODO2.md, PROGRESS.md) describing impact-tier framing or transparent-cost-breakdown direction, **disregard them**. That direction was explicitly superseded on 2026-05-18.

---

## 11. Meeting link safety

The Zoom URL is environment-controlled.

**Canonical location:** `frontend/src/lib/meetings.ts`, which reads `process.env.NEXT_PUBLIC_MEETING_ZOOM_URL` and falls back to a hardcoded literal so existing prod stays alive when the env var is unset.

**Helper:** `isMeetingLinkAvailable()` from the same module. Use it before rendering any join CTA.

**Fallback behavior:** when the URL is empty (env var explicitly set to `""`), the `/meeting` route renders a crisis-resources view: Call 988, Text HOME to 741741, link to `/recovery-network`. `JoinNowButton` renders "Find another room tonight" → `/recovery-network`. `FloatingJoinMeetingButton` routes to the interstitial instead of opening `about:blank`.

**Do not:**

- Hardcode the Zoom URL in new components. Always import `MEETING_INFO` or `isMeetingLinkAvailable`.
  - Open the Zoom URL in `window.open` without first checking `isMeetingLinkAvailable()`.
  - Require a code deploy to rotate the meeting URL.

**Recommended follow-on (not yet implemented):** consume `/api/recovery/meetings/tonight/` from the Django backend as the authoritative source when `NEXT_PUBLIC_API_URL` is set, falling back to `MEETING_INFO.zoomLink` only when the API is unreachable. The backend `Meeting.zoom_link` field already exists per-meeting.

---

## 12. Trust, safety, and recovery boundaries

Ohana Recovery is **peer-led support**, not a substitute for emergency care, medical advice, therapy, or professional treatment. This boundary is non-negotiable and must appear in the footer and in any feature that touches crisis content.

Future features must account for:

- Moderation (no live moderation tools exist yet — flag before launching any user-generated content surface)
  - Privacy (pseudonymous handles, no real-name requirement)
  - Crisis fallback paths (988, Crisis Text Line, `/recovery-network`)
  - Confidentiality expectations
  - Facilitator authority to moderate / remove
  - Safe handling of relapse or active-use disclosures
  - Transparent limits of peer support
  - No politics in meeting spaces
  - No replacement of emergency care, therapy, medical treatment, or crisis services

**Privacy posture:**

- No tracking beyond GA4 (cookies disclosed).
  - No PII collection unless explicitly chosen by the user.
  - No email harvesting / newsletter.
  - The peer support chat retains no logs, no session persistence, no accounts.
  - Input caps: 40 messages per session, 4,000 chars/message.

---

## 13. Documentation hygiene

There is exactly one canonical source of truth for AI agents: **this file**.

There is exactly one canonical source of truth for humans onboarding: `README.md`.

Operational docs (e.g. `backend/DEPLOYMENT.md`) may exist alongside, but they must be linked from one of the above and must not duplicate doctrine.

**Forbidden:**

- Multiple competing "master plan" markdown files.
  - New planning markdown files without explicit authorization.
  - Scattered TODO files outside of issue trackers.
  - Stale `Last Updated:` dates on documents that no longer reflect reality.

**Required when changing direction:**

- Update this file's `Last revised:` date.
  - Note the supersession in the relevant section.
  - Run the markdown audit pass (see §17) before merging direction shifts.

---

## 14. "Do not assume" rules for future AI agents

1. **Do not assume `/give`, `/donate`, or `/support-us` are routes.** They redirect to `/support`. Do not link to them.
   2. **Do not assume the site has cost tiers or dollar amounts on `/support`.** That direction was superseded.
   3. **Do not assume a multi-person crew is active.** Read `frontend/src/data/crew.ts` for ground truth.
   4. **Do not assume "Mālama crew" is preferred terminology.** Use "crew" (frontend) or "Malama" (backend internal naming — `MalamaContact`, etc.). Do not introduce "Mālama" with diacritic into new user-facing copy.
   5. **Do not assume the homepage shows a nights counter.** It was removed 2026-05-18. Don't add one back.
   6. **Do not assume `MEETING_INFO.zoomLink` is always present.** Guard with `isMeetingLinkAvailable()`.
   7. **Do not assume social features are exposed.** The backend URL router is commented out and the frontend has no integration. Do not link to a social feature.
   8. **Do not assume the admin pages work end-to-end.** UI exists for some, API wiring is incomplete. Don't ship "this works now" claims for admin without verifying the API call.
   9. **Do not assume mobile = "desktop, smaller".** They are tiered (§7.2). Build mobile-first, then add desktop atmosphere as a gated layer.
   10. **Do not assume `npm run lint` currently passes.** It has pre-existing failures. New work should not introduce additional errors but is not required to fix existing ones unless the task is explicitly lint-cleanup.
   11. **Do not assume older markdown files (`TODO.md`, `TODO2.md`, `Site Status_5_2_2026.md`, `_documentation/PROGRESS.md`, `_documentation/FILE_STRUCTURE.md`) reflect current direction.** They are historical. This file is current.
   12. **Do not commit without explicit instruction from Daniel.** Default to "stop and report" after any non-trivial change.
   13. **Do not use Claude / Anthropic attribution in commit messages.** Ever.
   14. **Do not run destructive operations** (rm -rf, git reset --hard, git push --force, db migrations on prod) without an explicit ask and a stated reason.
   15. **Do not invent organizational depth in copy.** If you don't know whether "we" or "I" is correct in a given sentence, ask.

---

## 15. Implementation priorities (as of 2026-05-18)

Priorities are subject to revision by Daniel. Treat as guidance, not contract.

### Immediate (pending Daniel's review)

- **Verification of the 2026-05-18 cleanup pass.** See `audit/cleanup-2026-05-18-verification.md`. The dev server runs cleanly; redirects work; new `/support` and `/crew` pages render. Production build not yet run.
  - **Set `NEXT_PUBLIC_MEETING_ZOOM_URL` in Vercel.** Currently the prod build relies on the in-code fallback literal.
  - **Decide on the recovery directory route.** Currently moved from `/support` to `/recovery-network` as part of the cleanup pass — flagged for Daniel's call.
  - **Decide on MobileNav "Support" tab destination.** Currently points at the new `/support` (contribution page). Crisis visitors tapping "Support" land on a help-Ohana page, which may be the wrong tone. Candidate fixes: rename the tab, repoint at `/recovery-network`, or leave it.

### Next coding pass

- **Homepage hero proof of concept** for the mobile / desktop doctrine (§7.2). Mobile: strip to essential elements. Desktop: introduce a `useDesktopAtmosphere` hook + cursor parallax + single ambient layer not present on mobile. Both: extract a `<Surface>` primitive that handles at-rest vs hover/press borders consistently.
  - **Wire forms to backend.** Contact, volunteer, story form submissions currently simulate success.

### Larger initiatives (require separate scoping)

- Asset commission: koi, ocean loop, lotus animation (§7.4)
  - Backend wiring for admin actions
  - Mobile UX pass on the right-edge fixed-element stack (FloatingJoinMeetingButton + CrisisResourceWidget + ChatWidget + MobileNav)
  - Social features → trust-and-safety policy first, then exposure
  - Printable one-sheet, SEO/JSON-LD, volunteer onboarding doc (if re-authorized)
  - iOS app (separate scope)

### Out of scope unless authorized

- Anything in the older `TODO2.md` / `TODO2_Project_Management_Plan.md` not explicitly named above.
  - Anything that reintroduces a nights counter, dollar tiers on `/support`, fake-crew framing, hardcoded Zoom URLs, or `/give`/`/donate`/`/support-us` as live pages.

---

## 16. Known issues and gotchas

- ESLint has pre-existing failures across the app. New work should not introduce additional errors but is not required to fix existing ones unless the task is explicitly lint-cleanup.
  - The four right-edge fixed elements on mobile (`FloatingJoinMeetingButton` `bottom-36`, `CrisisResourceWidget` `clamp(100px, 20vh, 180px)`, `ChatWidget`, `MobileNav` `bottom-0`) are not visually verified for overlap at 375px. Worth a manual mobile pass.
  - The 2026-05-18 cleanup pass removed the `WallOfNights` component and the `NIGHTLY_MEETING_START_DATE` export. Older docs reference both — they are gone.
  - The 2026-05-18 §16 tidying pass closed the remaining known defects: `admin/meetings` localhost URL is now env-driven, the unused `DonationCTA` / `MeetingSection` / `FeaturesSection` home components are deleted, `Footer.tsx` no longer contains the duplicated `/story` row or the dead `/terms` and `/independence` links, and `StoryCTA` "Get in Touch" now routes to `/forms/contact`.

---

## 17. Markdown audit decision log

Markdown files in this repo as of 2026-05-18 and what was done with them:

| File | Verdict | Why |
|---|---|---|
| `README.md` | **Update** | Generally accurate, but references `/give`, "trained Mālama crew", missing `NEXT_PUBLIC_MEETING_ZOOM_URL`. Trim to current reality and add the pointer to this file. |
| `Alpha_Project_Specs.md` | **Create (this file)** | Single canonical source of truth for AI agents. |
| `backend/DEPLOYMENT.md` | **Keep** | Operationally accurate Railway deploy guide. Linked from README. |
| `audit/codebase-audit-2026-05-18.md` | **Keep** | Reference document for the audit pass. Cited from this file. |
| `audit/cleanup-2026-05-18-verification.md` | **Keep until verified, then archive** | Operational doc for the pending verification. Once Daniel completes verification, can move to `audit/archive/`. |
| `Site Status_5_2_2026.md` | **Delete** | Snapshot from 2026-05-02; superseded across the board. Contains stray `/btw` typo on line 1. |
| `TODO.md` | **Delete** | Superseded by `TODO2.md`, which is itself superseded by §15 of this file. |
| `TODO2.md` | **Delete** | Authoritative roadmap from 2026-05-02; multiple completed items have been reversed (Wall of Nights, donation tiers, crew bios). Remaining unauthorized items captured in §6.3 above. |
| `TODO2_Project_Management_Plan.md` | **Delete** | Sprint plan derived from TODO2.md. Same supersession applies. |
| `_documentation/FILE_STRUCTURE.md` | **Delete** | Out-of-date directory map. `_documentation/` directory itself can be removed once empty. |
| `_documentation/PROGRESS.md` | **Delete** | Outdated progress snapshot. Mentions `/give` as live, Mālama crew as placeholder-active, YouTube embed (already migrated to Vimeo). |

All deletions go through a backup folder (`_markdown_audit_backup/`) and require Daniel's review before commit. See `audit/cleanup-2026-05-18-deletion-plan.md` for the per-file plan.

---

## 18. Glossary

| Term | Meaning in this codebase |
|---|---|
| Ohana | The product name. Hawaiian for family, in an extended sense. |
| Mālama | Hawaiian for caretaking / stewardship. Used in backend model names (`MalamaContact`) for historical reasons. Avoid in new user-facing copy. |
| Crew | Frontend-facing term for hosts / facilitators. |
| The room | The nightly Zoom meeting. |
| The toolkit | The 108-worksheet recovery resource library. |
| Surface | A proposed atomic UI primitive (not yet built) for handling at-rest vs hover/press states consistently. See §15. |
| Kōkua | Hawaiian for help / support. Used as a tag line on the `/support` page hero. |
