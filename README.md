# Ohana Live

A founder-led recovery community platform. Nightly online meetings run 11 PM – 3 AM Pacific. The site provides a join path, recovery worksheets, a directory of other recovery networks, anonymous peer support chat, and the supporting authentication / member dashboard.

> *ʻOhana means family. Nobody gets left behind.*

> **For AI coding agents and detailed project context, read [`Alpha_Project_Specs.md`](Alpha_Project_Specs.md) first.** This README is a human-facing quickstart.

---

## Tech stack

### Frontend
| | |
|---|---|
| **Next.js 16** | App Router, Turbopack dev |
| **React 19** | Server + client components |
| **TypeScript 5** | |
| **Tailwind CSS 4** | |
| **Framer Motion 12** | Animations and transitions |
| **Three.js / R3F** | Desktop atmospheric layer (selective use) |
| **Zustand 5** | Client state |
| **TanStack Query 5** | Server state |
| **@react-pdf/renderer** | In-browser worksheet PDF generation |
| **@anthropic-ai/sdk** | Anonymous peer support chat (Haiku, streaming) |

### Backend
| | |
|---|---|
| **Django 5** | |
| **Django REST Framework** | API layer |
| **PostgreSQL** | Primary database |
| **SimpleJWT** | JWT auth (60 min access, 7 day refresh) |
| **Gunicorn** | Production WSGI |
| **WhiteNoise** | Static files |

### Infrastructure
- **Frontend:** Vercel (`https://ohanarecovery.org`)
- **Backend:** Railway (`https://ohanalive-backend-production.up.railway.app`)
- **Database:** Railway-managed PostgreSQL

---

## Project structure

```text
OhanaLive/
├── frontend/                 Next.js frontend
│   ├── src/
│   │   ├── app/              App Router routes
│   │   ├── components/       Shared and page-level UI components
│   │   ├── contexts/         React context providers
│   │   ├── data/             Canonical data (e.g. crew roster)
│   │   ├── features/         Domain feature modules (worksheets)
│   │   ├── lib/              API client, meeting config, analytics, storage
│   │   └── providers/        App providers
│   ├── public/               Static frontend assets
│   ├── next.config.ts        Redirects live here
│   └── package.json
│
├── backend/                  Django backend
│   ├── ohana_backend/        Django settings + URL routing
│   ├── users/                Auth, profiles, sobriety
│   ├── recovery/             Meetings, sign-ups, announcements
│   ├── social/               Built; URL router currently disabled
│   ├── security/             Login history, reports, activity logs
│   └── DEPLOYMENT.md         Railway operational guide
│
├── audit/                    Audit + verification artifacts
├── Alpha_Project_Specs.md    Canonical AI-agent context
├── package.json              Root convenience scripts
└── README.md                 This file
```

---

## Getting started

### Frontend

```bash
cd frontend
npm install
npm run dev
# → http://localhost:3000  (set PORT=3001 if 3000 is taken)
```

From the repo root, the same commands proxy through:

```bash
npm run dev
npm run build
npm run lint
```

**Environment variables** — create `frontend/.env.local` from `frontend/.env.example`:

```bash
NEXT_PUBLIC_MEETING_ZOOM_URL=<current Zoom meeting URL>
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX        # optional
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<reCAPTCHA v3 site key>  # required for auth

# Server-only (Vercel project env vars in production)
RESEND_API_KEY=re_xxx                              # required for /api/forms/* to send
OHANA_FORMS_FROM_ADDRESS=<verified Resend sender>  # optional; defaults to noreply@ohanarecovery.org
OHANA_FORMS_TO_ADDRESS=daniel@ohanarecovery.org    # optional; this is the default
```

Setting `NEXT_PUBLIC_MEETING_ZOOM_URL` to an empty string disables direct join CTAs sitewide and routes visitors to `/recovery-network` (988, Crisis Text Line, curated directory of other recovery orgs).

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip install -r requirements.txt

cp .env.example .env               # Fill in values
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
# → http://localhost:8000
```

Swagger UI at `http://localhost:8000/api/docs/` once running.

---

## Public routes

| Route | Purpose |
|---|---|
| `/` | Home |
| `/story` | Origin story + values |
| `/crew` | Founder-led roster (data-driven; scales 1 → N members) |
| `/toolkit` | 108-worksheet explorer |
| `/support` | Canonical broad contribution surface (donations, volunteering, supplies, partnerships, technical help) |
| `/recovery-network` | Curated directory of other recovery orgs; also serves as the crisis fallback when the Zoom URL is unset |
| `/forms/contact` `/forms/story` `/forms/volunteer` | Form pages; submissions emailed via Resend to `daniel@ohanarecovery.org`. Contact form supports `?source=<slug>` to tag the submitter's entry point (see `frontend/src/lib/contactSources.ts`) |
| `/privacy` | Privacy policy |
| `/dashboard` | Protected member dashboard |
| `/admin` and sub-pages | Admin dashboard (partial wiring) |

Permanent redirects: `/give`, `/donate`, `/support-us` → `/support`; `/resources` → `/toolkit`. Configured in `frontend/next.config.ts`.

---

## Key API endpoints

```
POST   /api/auth/register/
POST   /api/auth/login/
POST   /api/auth/token/refresh/
POST   /api/auth/password-reset/
POST   /api/auth/password-reset/confirm/

GET    /api/users/me/
PATCH  /api/users/me/
PATCH  /api/users/me/profile/
GET    /api/sobriety-dates/
POST   /api/sobriety-dates/{id}/restart/

GET    /api/recovery/meetings/
GET    /api/recovery/meetings/tonight/
GET    /api/recovery/meeting-signups/
GET    /api/recovery/announcements/
GET    /api/recovery/malama-contacts/

POST   /api/chat                    (Next.js route — anonymous peer support chat)
POST   /api/forms/contact           (Next.js route — emails contact submissions via Resend)
POST   /api/forms/volunteer         (Next.js route — emails volunteer applications via Resend)
POST   /api/forms/story             (Next.js route — emails story submissions via Resend)
```

Full schema at `GET /api/schema/`. Swagger UI at `/api/docs/`.

---

## Feature status (high-level)

**Active:** public marketing pages · authentication · member dashboard · 108-worksheet toolkit · recovery network directory · anonymous peer support chat · timezone-aware meeting status · env-driven Zoom URL with `/recovery-network` fallback · persistent crisis widget · contact / volunteer / story form submissions wired to Resend (delivering to `daniel@ohanarecovery.org`, with per-source tagging on the contact form).

**Built, not yet active:** social features (backend models complete, URL router disabled, no frontend integration) · admin actions (UI exists, API wiring incomplete).

**Planned, not authorized:** printable one-sheet PDF · SEO/JSON-LD work · volunteer onboarding doc · iOS app · partnerships · grant readiness.

For the full feature list, design doctrine, and "do not assume" rules, see [`Alpha_Project_Specs.md`](Alpha_Project_Specs.md).

---

## Deployment

See [`backend/DEPLOYMENT.md`](backend/DEPLOYMENT.md) for the Railway backend deployment guide.

**Frontend** — Vercel builds from the repo root via `vercel.json` (`npm ci` + `npm run build`, which proxy through the workspace into `frontend/`). Output directory: `frontend/.next`. Required Vercel env vars before promoting to production:

- `NEXT_PUBLIC_MEETING_ZOOM_URL`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- `RESEND_API_KEY` (otherwise `/api/forms/*` returns 500). The sender domain must be verified in Resend; `OHANA_FORMS_FROM_ADDRESS` defaults to `noreply@ohanarecovery.org`.

**Backend required environment variables:**

```
SECRET_KEY
DEBUG=False
DATABASE_URL                  # Auto-provided by Railway
ALLOWED_HOSTS
CORS_ALLOWED_ORIGINS
EMAIL_BACKEND / EMAIL_HOST / EMAIL_HOST_USER / EMAIL_HOST_PASSWORD
```

---

## License

Private — All Rights Reserved
