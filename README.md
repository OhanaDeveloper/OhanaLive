# Ohana Live

A recovery community platform connecting people through technology, conversation, and shared experience. Nightly meetings run 11 PM – 3 AM Pacific, hosted by trained Mālama crew members.

> *ʻOhana means family. Nobody gets left behind.*

---

## Tech Stack

### Frontend
| | |
|---|---|
| **Next.js 16** | React framework with App Router |
| **React 19** | Server and client components |
| **TypeScript 5** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling |
| **Framer Motion 12** | Animations and transitions |
| **Three.js / R3F** | 3D interactive elements |
| **Zustand 5** | Client state management |
| **TanStack Query 5** | Server state and data fetching |
| **@react-pdf/renderer** | In-browser PDF generation for worksheets |

### Backend
| | |
|---|---|
| **Django 5.0** | Web framework |
| **Django REST Framework 3.14** | API layer |
| **PostgreSQL** | Primary database |
| **SimpleJWT** | JWT authentication |
| **Gunicorn** | Production WSGI server |

### Infrastructure
- **Frontend:** Vercel (`https://ohanarecovery.org`)
- **Backend:** Railway (`https://ohanalive-backend-production.up.railway.app`)
- **Database:** Railway-managed PostgreSQL

---

## Project Structure

```
OhanaLive/
├── frontend/                     # Next.js frontend
│   ├── src/
│   │   ├── app/                  # App Router routes
│   │   ├── components/           # Shared and page-level UI components
│   │   ├── contexts/             # React context providers
│   │   ├── features/             # Domain feature modules
│   │   ├── lib/                  # API client, constants, storage helpers
│   │   └── providers/            # App providers
│   ├── public/                   # Static frontend assets
│   ├── package.json
│   └── next.config.ts
│
├── backend/                      # Django backend
│   ├── users/                    # Auth, profiles, sobriety tracking
│   ├── recovery/                 # Meetings, Mālama crew, announcements
│   ├── social/                   # Messaging, friendships, posts (built, not yet active)
│   ├── security/                 # Login history, reports, activity logs
│   ├── journal/                  # (Planned)
│   ├── community/                # (Planned)
│   └── ohana_backend/            # Django settings and URL routing
│
├── package.json                  # Root convenience scripts
└── _documentation/               # Dev session notes, architecture decisions
```

---

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
# → http://localhost:3000
```

From the repository root, the same frontend commands are also available through convenience scripts:

```bash
npm run dev
npm run build
npm run lint
```

**Environment variables** — create `frontend/.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_RECAPTCHA_KEY=your_recaptcha_v3_site_key
```

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate       # Windows: venv\Scripts\activate
pip install -r requirements.txt

cp .env.example .env            # Fill in values

python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
# → http://localhost:8000
```

**API docs** available at `http://localhost:8000/api/docs/` (Swagger UI) once running.

---

## Features

### Live & Functional
- **Nightly Meeting System** — Scheduled meetings with Mālama host assignment, sign-up workflow, and anonymous attendance tracking
- **Authentication** — Register, login, password reset via email; JWT with auto-refresh; reCAPTCHA v3 protection
- **User Profiles** — Public handles for pseudonymity, bio, avatar, privacy visibility settings
- **Sobriety Tracking** — Log sobriety dates per substance, restart counter with full history
- **Admin Dashboard** — Manage meetings, review Mālama sign-up requests, post announcements, track crew contacts
- **Recovery Resources** — Downloadable worksheets with in-browser PDF generation and preview
- **Recovery Network Directory** — Curated list of secular, faith-based, and specialized recovery organizations
- **Accessibility** — WCAG AAA compliant; accessibility toggle with multiple display modes; ADA compliance modal
- **Floating Donate Button** — Ko-fi integration (`ko-fi.com/ohanarecovery`); appears after 20 seconds

### Built, Not Yet Active
- **Social features** — Direct messaging, group chats, friendship requests, community posts, comments, likes (backend models and API complete; commented out of URL router pending frontend integration)

### Planned
- Live journal with encryption
- Community groups
- Member-facing dashboard
- Resources directory (backend app stubbed)

---

## Backend Data Models

**Users app:** `CustomUser` (email-based auth, UUID primary key) · `Profile` · `SobrietyDate` · `Role` (user / guide / moderator / admin)

**Recovery app:** `Meeting` · `MeetingSignUp` · `MeetingAttendance` · `MalamaContact` · `Announcement`

**Social app:** `Conversation` · `Message` · `Friendship` · `Block` · `Post` · `PostLike` · `Comment`

**Security app:** `LoginHistory` (IP, device fingerprint, geolocation) · `UserReport` · `ActivityLog`

---

## Key API Endpoints

```
POST   /api/auth/register/
POST   /api/auth/login/
POST   /api/auth/token/refresh/
POST   /api/auth/password-reset/
POST   /api/auth/password-reset/confirm/

GET    /api/users/me/
PATCH  /api/users/me/
PATCH  /api/users/me/profile/
POST   /api/users/me/change_password/
GET    /api/users/me/privacy/

GET    /api/sobriety-dates/
POST   /api/sobriety-dates/
POST   /api/sobriety-dates/{id}/restart/

GET    /api/recovery/meetings/
GET    /api/recovery/meeting-signups/
POST   /api/recovery/meeting-signups/{id}/approve/
GET    /api/recovery/announcements/
GET    /api/recovery/malama-contacts/
```

Full API schema: `GET /api/schema/` · Swagger UI: `/api/docs/`

---

## Deployment

See [`backend/DEPLOYMENT.md`](backend/DEPLOYMENT.md) for the full Railway deployment guide.

**Frontend** — Vercel should use `frontend/` as the project root.

**Backend environment variables required:**
```
SECRET_KEY
DEBUG=False
DATABASE_URL          # Auto-provided by Railway
ALLOWED_HOSTS
CORS_ALLOWED_ORIGINS
EMAIL_BACKEND / EMAIL_HOST / EMAIL_HOST_USER / EMAIL_HOST_PASSWORD
```

---

## License

Private — All Rights Reserved
