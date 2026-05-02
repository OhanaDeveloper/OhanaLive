# Ohana Live — Project Progress

**Last Updated:** 2026-05-02  
**Stack:** Next.js 16 / React 19 / TypeScript / Tailwind CSS 4 / Framer Motion · Django 5 / PostgreSQL  
**Deploys:** Vercel (frontend) · Railway (backend + DB)

---

## Current Status

| Area | Status |
|---|---|
| Frontend — public pages | Complete |
| Authentication (register, login, password reset) | Complete |
| Admin dashboard | UI complete, fetching placeholder data |
| Mālama crew page | UI complete, using placeholder member data |
| Recovery resources (worksheets + PDF) | Complete |
| Forms (contact, volunteer, story) | UI complete, not wired to backend |
| Social features (messaging, friendships, posts) | Backend models + API built, not active |
| Member dashboard | Complete — `/dashboard`, protected, interactive |
| Donation / fundraising page | Complete — `/give` with tiers, transparency, Ko-fi CTAs |
| Founder's intro video | YouTube embed on About page (needs replacement — Vimeo pending) |
| Anonymous peer support chat | Complete — Claude-powered, streaming, globally mounted |

---

## What's Been Built

### Frontend Pages
- `/` Home — hero, meeting countdown, features
- `/about` — mission, promises, founder video embed, tech showcase
- `/story` — recovery stories, timeline, quotes (quality benchmark)
- `/crew` — Mālama team flip-card grid (placeholder data)
- `/resources` — worksheet grid with in-browser PDF preview and download
- `/support` — filterable recovery organization directory (secular, faith, science-based, women-focused)
- `/login`, `/signup`, `/forgot-password`, `/reset-password` — full auth flow with reCAPTCHA v3
- `/admin` + sub-pages — dashboard for meetings, sign-ups, announcements, contacts
- `/forms/contact`, `/forms/volunteer`, `/forms/story` — submission forms (UI only)

### Backend (Django + DRF)
- **users app** — CustomUser (email auth, UUID, public handle), Profile, SobrietyDate with restart history, Role-based access
- **recovery app** — Meeting scheduling, Mālama sign-up workflow, attendance tracking, announcements, crew contacts
- **social app** — Conversations, messages, friendships, blocks, posts, likes, comments (built, URL router commented out)
- **security app** — Login history with device fingerprinting + geolocation, user reports, activity logs
- **journal / community / resources apps** — stubbed, empty

### Anonymous Peer Support Chat
- Floating widget mounted globally via `ClientLayout.tsx` (dynamic import, no SSR)
- Claude Haiku 4.5 via Anthropic SDK — streaming plain-text over `ReadableStream`
- System prompt tuned for peer tone: short responses, no therapist-speak, crisis escalation to 741741
- No logs, no accounts, no session persistence — chat clears on widget close
- Input capped at 40 messages (20 exchanges) and 4,000 chars/message
- `src/app/api/chat/route.ts` · `src/components/chat/`

### Infrastructure
- JWT authentication with 60-min access / 7-day refresh tokens
- reCAPTCHA v3 on login and register
- Vercel Analytics + Speed Insights
- ADA/WCAG AAA compliance features and accessibility toggle
- Swagger UI at `/api/docs/`

---

## Active To-Do (Next Sessions)

### 1. Mālama Section — Real Team Data  ← NEXT
- Replace placeholder crew members in `src/components/crew/CrewGrid.tsx`
- Needs: real names, roles, photos, bios, "why recovery" copy
- Layout is done (flip cards, 3-column grid) — this is a data swap

### 2. Founder's Video — Migrate Away from YouTube
- Current: YouTube embed in `src/components/about/VideoIntro.tsx`
- Decision pending: Vimeo (recommended) vs. Cloudflare Stream vs. Bunny.net
- Do not host video files in the repository

### 3. Member Dashboard ✅ COMPLETE
- `/dashboard` — protected, redirects to `/login` if unauthenticated
- Animated greeting with time-of-day logic
- Sobriety tracker — add dates, animated day counter, restart with confirmation
- Meeting countdown widget with live detection + Zoom link
- Announcements feed from `/api/recovery/announcements/`
- Profile card with edit link
- Quick links grid (Resources, Crew, Story, Support)

### 4. Donations & Fundraising Page ✅ COMPLETE
- `/give` — full page with hero, 4 giving tiers, transparency breakdown
- Inline `DonationCTA` after `MeetingSection` on home page
- Footer updated: `~$200/month`, added Give link to Navigate column
- Nav updated: Give link added
- Floating button now routes to `/give` with updated tooltip copy
- `api.ts` extended: `getAnnouncements()`, `restartSobrietyDate()`, `deleteSobrietyDate()`

---

## Key Design Decisions

- **Story page** (`/story`) is the visual quality benchmark — all new pages should match its animation level
- **Tighter spacing** preferred: use `py-12`/`py-16`, avoid `py-24`/`py-32`, never `min-h-screen` on sections
- **CSS over DOM nodes** for visual effects (radial-gradient backgrounds instead of animated arrays)
- **GPU acceleration** on all animated elements: `willChange: 'transform, opacity'` + `transform: translateZ(0)`
- **No metadata exports** from `"use client"` components (Next.js 16 hard error)

---

## Known Issues

- Admin dashboard pages fetch hardcoded placeholder data — needs real API wiring
- Social features (messaging, etc.) built in backend but URL router commented out, no frontend integration
- Form submissions (contact, volunteer, story) hit no backend endpoint — need Django views wired up
- Crew page uses Unsplash placeholder images and Lorem ipsum bios

---

## Color Reference

```
teal:       #14b8a6   (brand primary)
teal-light: #5eead4   (hover states)
purple:     #a855f7   (accent)
dark-950:   #0a0a0a   (deepest bg)
dark-900:   #171717   (card bg)
dark-800:   #262626   (borders)
```

---

## Running Locally

```bash
# Frontend
npm install && npm run dev        # → localhost:3000

# Backend
cd backend
source venv/bin/activate
python manage.py runserver        # → localhost:8000
```
