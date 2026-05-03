# Ohana Live Site Status

**Report Date:** May 2, 2026  
**Repository:** `OhanaLive`  
**Current Layout:** Full-stack repo with `frontend/` for Next.js and `backend/` for Django  
**Primary Domains:** `ohanarecovery.org` frontend, Railway-hosted backend API  

---

## Executive Summary

Ohana Live is a recovery community platform with a Next.js frontend and Django REST backend. The application provides public recovery content, a nightly meeting experience, recovery worksheets, authentication flows, a member dashboard, admin dashboard screens, donation CTAs, and a Claude-powered anonymous peer support chat endpoint.

The repo was recently reorganized so the frontend now lives in `frontend/`, matching the existing `backend/` directory. Root-level convenience scripts still allow frontend development commands from the repository root.

The frontend production build passes from the root command. Linting runs but currently fails because of pre-existing lint issues across the app. Backend verification could not run in the current shell because Django is not installed or the Python virtual environment was not active.

---

## Current Architecture

### Frontend

| Area | Status |
|---|---|
| Framework | Next.js 16 App Router |
| Runtime UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| 3D / visual effects | Three.js / React Three Fiber |
| PDF generation | `@react-pdf/renderer` |
| Analytics | Vercel Analytics and Speed Insights |
| Location | `frontend/` |

### Backend

| Area | Status |
|---|---|
| Framework | Django 5 |
| API layer | Django REST Framework |
| Auth | SimpleJWT, allauth, OAuth toolkit |
| Database | PostgreSQL in production, local fallback configured |
| Server | Gunicorn |
| Location | `backend/` |

### Infrastructure

| Service | Role |
|---|---|
| Vercel | Frontend deployment |
| Railway | Backend deployment |
| Railway PostgreSQL | Production database |
| Ko-fi | Donation destination |
| Vimeo | Founder intro video hosting |

---

## Recent Project Structure Change

The application now uses a clearer full-stack folder layout:

```text
OhanaLive/
|-- frontend/        # Next.js app
|-- backend/         # Django app
|-- _documentation/  # Project docs and progress notes
|-- README.md
|-- TODO.md
|-- package.json     # Root convenience scripts
`-- .gitignore
```

Root scripts now proxy to the frontend package:

```bash
npm run dev
npm run build
npm run lint
```

The frontend package and lockfile are now inside `frontend/`.

---

## Verification Snapshot

| Check | Result | Notes |
|---|---|---|
| `npm run build` from repo root | Passed | Next.js production build completed successfully |
| `npm run dev` from repo root | Passed | Dev server started; used port `3001` because `3000` was occupied |
| `curl http://localhost:3001` | Passed | Returned `200 OK` and rendered app HTML |
| `npm run lint` | Failing | Existing lint errors unrelated to folder migration |
| `python3 manage.py check` | Blocked | Django package unavailable in current shell / venv not active |

---

## Feature Status

### Public Site

| Feature | Status | Notes |
|---|---|---|
| Home page | Built | Includes hero, meeting section, feature content, donation CTA |
| Story page | Built | Used as a visual quality benchmark in docs |
| Crew page | Built with placeholders | Real photos are present; copy still needs approval and replacement |
| Toolkit page | Built | Resource explorer and worksheets are present |
| Support page | Built | Recovery network directory exists |
| Give page | Built | Accessible at `/give`; not in primary nav |
| Contact form page | UI only | Simulates success; no backend submission |
| Volunteer form page | UI only | Simulates success; no backend submission |
| Story form page | UI only | Simulates success; no backend submission |

### Member Experience

| Feature | Status | Notes |
|---|---|---|
| Authentication pages | Built | Login, signup, forgot password, reset password |
| Member dashboard | Built | Protected page with sobriety tracker, countdown, profile card, quick links |
| Sobriety tracking | Partially wired | Frontend calls API helpers; backend models exist |
| Announcements feed | Partially wired | Dashboard uses API helper, admin management remains incomplete |

### Admin Experience

| Feature | Status | Notes |
|---|---|---|
| Admin dashboard shell | Built | Stats are simulated |
| Meetings page | Partially wired | Fetches recovery meetings directly from local API URL |
| Sign-up requests page | UI only | Empty state and simulated approve/decline actions |
| Announcements page | UI only | Create/pin/archive actions are TODOs |
| Contacts page | UI only | Empty state; needs real API wiring |

### Backend

| App | Status | Notes |
|---|---|---|
| `users` | Built | Auth, profile, sobriety models and endpoints |
| `recovery` | Built | Meetings, sign-ups, contacts, announcements |
| `social` | Backend built | Routes are active at `/api/social/`; frontend integration not present |
| `security` | Built | Login history, reports, activity logs |
| `journal` | Stubbed | No meaningful functionality yet |
| `community` | Stubbed | No meaningful functionality yet |
| `resources` | Stubbed | Frontend resources exist; backend app is not active |
| `messaging` | Stubbed | Not routed |

---

## Application File Tree

Generated/build/dependency folders are intentionally excluded: `.git/`, `frontend/.next/`, `frontend/node_modules/`, and other transient caches.

```text
OhanaLive/
|-- .gitignore
|-- .nixpacksignore
|-- .nvmrc
|-- README.md
|-- TODO.md
|-- Site Status_5_2_2026.md
|-- package.json
|-- _documentation/
|   |-- FILE_STRUCTURE.md
|   `-- PROGRESS.md
|-- .vscode/
|   `-- settings.json
|-- backend/
|   |-- .env.example
|   |-- .gitignore
|   |-- DEPLOYMENT.md
|   |-- Procfile
|   |-- manage.py
|   |-- nixpacks.toml
|   |-- railway.toml
|   |-- requirements.txt
|   |-- runtime.txt
|   |-- ohana_backend/
|   |   |-- __init__.py
|   |   |-- asgi.py
|   |   |-- exceptions.py
|   |   |-- settings.py
|   |   |-- urls.py
|   |   `-- wsgi.py
|   |-- users/
|   |   |-- __init__.py
|   |   |-- adapters.py
|   |   |-- admin.py
|   |   |-- apps.py
|   |   |-- models.py
|   |   |-- serializers.py
|   |   |-- tests.py
|   |   |-- urls.py
|   |   |-- views.py
|   |   `-- migrations/
|   |       |-- 0001_initial.py
|   |       `-- __init__.py
|   |-- recovery/
|   |   |-- __init__.py
|   |   |-- admin.py
|   |   |-- apps.py
|   |   |-- models.py
|   |   |-- serializers.py
|   |   |-- tests.py
|   |   |-- urls.py
|   |   |-- views.py
|   |   `-- migrations/
|   |       |-- 0001_initial.py
|   |       `-- __init__.py
|   |-- social/
|   |   |-- __init__.py
|   |   |-- admin.py
|   |   |-- apps.py
|   |   |-- models.py
|   |   |-- serializers.py
|   |   |-- tests.py
|   |   |-- urls.py
|   |   |-- views.py
|   |   `-- migrations/
|   |       |-- 0001_initial.py
|   |       `-- __init__.py
|   |-- security/
|   |   |-- __init__.py
|   |   |-- admin.py
|   |   |-- apps.py
|   |   |-- middleware.py
|   |   |-- models.py
|   |   |-- tests.py
|   |   |-- views.py
|   |   `-- migrations/
|   |       |-- 0001_initial.py
|   |       |-- 0002_initial.py
|   |       `-- __init__.py
|   |-- community/
|   |   |-- __init__.py
|   |   |-- admin.py
|   |   |-- apps.py
|   |   |-- models.py
|   |   |-- tests.py
|   |   |-- views.py
|   |   `-- migrations/
|   |       `-- __init__.py
|   |-- journal/
|   |   |-- __init__.py
|   |   |-- admin.py
|   |   |-- apps.py
|   |   |-- models.py
|   |   |-- tests.py
|   |   |-- views.py
|   |   `-- migrations/
|   |       `-- __init__.py
|   |-- messaging/
|   |   |-- __init__.py
|   |   |-- admin.py
|   |   |-- apps.py
|   |   |-- models.py
|   |   |-- tests.py
|   |   |-- views.py
|   |   `-- migrations/
|   |       `-- __init__.py
|   `-- resources/
|       |-- __init__.py
|       |-- admin.py
|       |-- apps.py
|       |-- models.py
|       |-- tests.py
|       |-- views.py
|       `-- migrations/
|           `-- __init__.py
`-- frontend/
    |-- .env.local
    |-- .nvmrc
    |-- .prettierrc.json
    |-- eslint.config.mjs
    |-- next-env.d.ts
    |-- next.config.ts
    |-- package-lock.json
    |-- package.json
    |-- postcss.config.mjs
    |-- tailwind.config.ts
    |-- tsconfig.json
    |-- public/
    |   |-- OhanaProfile_Anne.png
    |   |-- OhanaProfile_Anne2.png
    |   |-- OhanaProfile_Daniel.png
    |   |-- OhanaProfile_Joey.png
    |   |-- OhanaProfile_Joey2.png
    |   |-- OhanaProfile_Jonni.png
    |   |-- OhanaProfile_Jonni2.png
    |   |-- lotus-logo-youtube.png
    |   `-- lotus-logo.png
    `-- src/
        |-- app/
        |   |-- globals.css
        |   |-- icon.tsx
        |   |-- apple-icon.tsx
        |   |-- layout.tsx
        |   |-- loading.tsx
        |   |-- page.tsx
        |   |-- api/
        |   |   `-- chat/
        |   |       `-- route.ts
        |   |-- (auth)/
        |   |   |-- forgot-password/
        |   |   |   `-- page.tsx
        |   |   |-- login/
        |   |   |   `-- page.tsx
        |   |   |-- reset-password/
        |   |   |   `-- page.tsx
        |   |   `-- signup/
        |   |       `-- page.tsx
        |   |-- (member)/
        |   |   `-- dashboard/
        |   |       `-- page.tsx
        |   |-- (public)/
        |   |   |-- crew/
        |   |   |   `-- page.tsx
        |   |   |-- give/
        |   |   |   `-- page.tsx
        |   |   |-- story/
        |   |   |   `-- page.tsx
        |   |   |-- support/
        |   |   |   `-- page.tsx
        |   |   `-- toolkit/
        |   |       `-- page.tsx
        |   |-- admin/
        |   |   |-- page.tsx
        |   |   |-- announcements/
        |   |   |   `-- page.tsx
        |   |   |-- contacts/
        |   |   |   `-- page.tsx
        |   |   |-- meetings/
        |   |   |   `-- page.tsx
        |   |   `-- signups/
        |   |       `-- page.tsx
        |   `-- forms/
        |       |-- contact/
        |       |   `-- page.tsx
        |       |-- story/
        |       |   `-- page.tsx
        |       `-- volunteer/
        |           `-- page.tsx
        |-- components/
        |   |-- about/
        |   |   |-- AboutHero.tsx
        |   |   |-- InteractiveSkills.tsx
        |   |   |-- MissionStatement.tsx
        |   |   |-- PromiseHoldSpace.tsx
        |   |   |-- PromiseStruggling.tsx
        |   |   |-- TechShowcase.tsx
        |   |   `-- VideoIntro.tsx
        |   |-- chat/
        |   |   |-- ChatInput.tsx
        |   |   |-- ChatMessage.tsx
        |   |   |-- ChatWidget.tsx
        |   |   `-- ChatWindow.tsx
        |   |-- crew/
        |   |   |-- CrewGrid.tsx
        |   |   `-- CrewHero.tsx
        |   |-- forms/
        |   |   |-- ContactForm.tsx
        |   |   |-- StoryForm.tsx
        |   |   `-- VolunteerForm.tsx
        |   |-- give/
        |   |   |-- GiveHero.tsx
        |   |   `-- GivingTiers.tsx
        |   |-- home/
        |   |   |-- DonationCTA.tsx
        |   |   |-- FeaturesSection.tsx
        |   |   |-- HomeHero.tsx
        |   |   `-- MeetingSection.tsx
        |   |-- layout/
        |   |   |-- AuthButtons.tsx
        |   |   |-- Background.tsx
        |   |   |-- ClientLayout.tsx
        |   |   |-- Footer.tsx
        |   |   |-- MobileNav.tsx
        |   |   |-- Navigation.tsx
        |   |   `-- SettingsMenu.tsx
        |   |-- resources/
        |   |   |-- AccountSignupPromo.tsx
        |   |   |-- ResourcesCTA.tsx
        |   |   |-- ResourcesHero.tsx
        |   |   |-- WorksheetCard.tsx
        |   |   |-- WorksheetGrid.tsx
        |   |   |-- WorksheetModal.tsx
        |   |   `-- WorksheetPDF.tsx
        |   |-- shared/
        |   |   |-- FloatingDonateButton.tsx
        |   |   |-- MeetingCTA.tsx
        |   |   |-- ShareStoryCTA.tsx
        |   |   `-- VolunteerCTA.tsx
        |   |-- story/
        |   |   |-- StoryCTA.tsx
        |   |   |-- StoryHero.tsx
        |   |   |-- StoryQuotes.tsx
        |   |   |-- StoryTimeline.tsx
        |   |   `-- StoryValues.tsx
        |   `-- ui/
        |       |-- ADAComplianceModal.tsx
        |       |-- AccessibilityToggle.tsx
        |       |-- AnimatedCard.tsx
        |       |-- LotusBreath.tsx
        |       |-- RotatingLogo.tsx
        |       `-- SectionWrapper.tsx
        |-- contexts/
        |   `-- AuthContext.tsx
        |-- features/
        |   `-- resources/
        |       |-- components/
        |       |   |-- CategoryOrbit.tsx
        |       |   |-- HeroScene.tsx
        |       |   |-- SearchCommand.tsx
        |       |   |-- TherapyBadge.tsx
        |       |   |-- WorksheetCard.tsx
        |       |   |-- WorksheetExplorer.tsx
        |       |   |-- WorksheetExplorerClient.tsx
        |       |   |-- WorksheetField.tsx
        |       |   `-- WorksheetViewer.tsx
        |       |-- data/
        |       |   |-- categories.ts
        |       |   |-- types.ts
        |       |   `-- worksheets/
        |       |       |-- cognitive-restructuring.ts
        |       |       |-- coping-skills.ts
        |       |       |-- daily-practice.ts
        |       |       |-- emotional-regulation.ts
        |       |       |-- gratitude.ts
        |       |       |-- identity-values.ts
        |       |       |-- index.ts
        |       |       |-- life-skills.ts
        |       |       |-- mindfulness.ts
        |       |       |-- physical-wellness.ts
        |       |       |-- relapse-prevention.ts
        |       |       |-- relationships.ts
        |       |       |-- self-reflection.ts
        |       |       |-- trauma-processing.ts
        |       |       `-- triggers-urges.ts
        |       `-- hooks/
        |           |-- useWorksheetProgress.ts
        |           `-- useWorksheetSearch.ts
        |-- lib/
        |   |-- api.ts
        |   |-- meetings.ts
        |   |-- worksheetStorage.ts
        |   `-- worksheets.ts
        `-- providers/
            `-- ReCaptchaProvider.tsx
```

---

## Key Routes

### Public Routes

| Route | Purpose |
|---|---|
| `/` | Home page |
| `/story` | Origin story, timeline, values, CTAs |
| `/crew` | Crew profile grid and recruitment CTA |
| `/toolkit` | Recovery worksheet explorer |
| `/support` | Recovery support network directory |
| `/give` | Donation and funding page |
| `/forms/contact` | Contact form |
| `/forms/story` | Story submission form |
| `/forms/volunteer` | Crew volunteer form |

### Auth And Member Routes

| Route | Purpose |
|---|---|
| `/login` | Login |
| `/signup` | Registration |
| `/forgot-password` | Password reset request |
| `/reset-password` | Password reset confirmation |
| `/dashboard` | Protected member dashboard |

### Admin Routes

| Route | Purpose |
|---|---|
| `/admin` | Admin overview |
| `/admin/meetings` | Meeting management |
| `/admin/signups` | Crew hosting sign-up review |
| `/admin/announcements` | Announcement management |
| `/admin/contacts` | Crew contact information |

### API Routes

| Route | Purpose |
|---|---|
| `/api/chat` | Next.js route for anonymous peer support chat |
| `/api/auth/*` | Django auth endpoints |
| `/api/users/*` | Django user/profile endpoints |
| `/api/recovery/*` | Django meetings, sign-ups, announcements, contacts |
| `/api/social/*` | Django social endpoints, currently backend-only |
| `/api/docs/` | Swagger UI |
| `/api/schema/` | OpenAPI schema |

---

## Remaining Tasks

### Priority 1: Content Needed

- Replace placeholder roles for Joey, Daniel, Jonni, and Anne. Current value is `"Crew Host"` for all.
- Replace placeholder crew bios.
- Add approved personal quotes or short front-card copy for each member.
- Decide whether to keep or replace the back-card labels `"Why Recovery Work?"` and `"Fun Fact"`.
- Add approved back-card copy in `frontend/src/components/crew/CrewGrid.tsx`.

### Priority 2: Product And External Decisions

- Decide whether `/give` should be added to the primary desktop/mobile navigation.
- Confirm Ko-fi account `ko-fi.com/ohanarecovery` is active and linked correctly.
- Set Vimeo video privacy to "Only on sites I specify" and add `ohanarecovery.org`.
- Confirm the Vimeo embed still loads after privacy restrictions are applied.

### Priority 3: Backend Wiring

- Replace simulated admin dashboard stats with real API calls.
- Wire admin sign-up approval and decline actions to the recovery API.
- Wire admin announcement create, pin, and archive actions to the recovery API.
- Wire admin contacts page to the recovery contacts API.
- Add Django endpoints for contact, volunteer, and story form submissions.
- Update frontend contact, volunteer, and story forms to submit to those endpoints.
- Decide whether social features should be exposed in the frontend; backend routes are currently active at `/api/social/`.

### Priority 4: QA And Polish

- Test all new pages on actual mobile devices.
- Run accessibility audit on dashboard and give page.
- Add explicit Open Graph metadata for `/give`, `/dashboard`, and `/crew`.
- Clean up remaining terminology drift around `Mālama`, `Malama`, `malama`, and `Crew`.
- Fix existing lint errors so `npm run lint` passes.

---

## Risks And Notes

- The frontend build passes, but lint is not currently a reliable quality gate because many existing lint errors remain.
- Admin pages are visually present but not fully functional until backend API wiring is finished.
- Public form pages currently give users a success state without sending data to the backend.
- Some terminology remains mixed between user-facing "Crew" language and backend/internal `Mālama` model/API naming.
- Vercel project settings must use `frontend/` as the project root after the repo restructure.
- Railway backend deployment should continue to use `backend/` as its root directory.

---

## Recommended Next Work Sequence

1. Finalize and enter Crew page copy.
2. Confirm Ko-fi and Vimeo external settings.
3. Wire public forms to backend endpoints.
4. Wire admin dashboard actions to recovery API endpoints.
5. Add route-specific Open Graph metadata.
6. Run mobile and accessibility QA.
7. Clean up lint errors and make `npm run lint` a passing gate.

