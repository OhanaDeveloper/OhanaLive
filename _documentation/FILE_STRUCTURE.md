# Ohana Live — File Structure

**Last Updated:** 2026-05-02  
Excludes: `node_modules/`, `.git/`, `.next/`

---

## Root

```
OhanaLive/
├── package.json                    Root convenience scripts
├── README.md
├── TODO.md
├── .gitignore
├── .nvmrc                          Node version pin for repo-level scripts
├── .nixpacksignore                 Railway helper: ignore non-backend files
├── .vscode/
├── _documentation/                 Project notes and structure docs
├── frontend/                       Next.js frontend app
└── backend/                        Django backend app
```

---

## frontend/

```
frontend/
├── package.json                    Frontend dependencies and scripts
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── .env.local                      Local frontend env vars
├── public/                         Static assets served by Next.js
└── src/
    ├── app/                        Next.js App Router routes
    ├── components/                 Shared and page-level React components
    ├── contexts/                   React context state
    ├── features/                   Domain feature modules
    ├── lib/                        API client, constants, storage helpers
    └── providers/                  App-level providers
```

### frontend/src/app/

```
frontend/src/app/
├── layout.tsx
├── page.tsx                        Home page
├── loading.tsx
├── globals.css
├── api/chat/route.ts               Anonymous peer support chat endpoint
├── (auth)/                         Login, signup, password reset
├── (member)/dashboard/             Member dashboard
├── (public)/                       Crew, give, story, support, toolkit
├── admin/                          Admin dashboard pages
└── forms/                          Contact, story, volunteer forms
```

### frontend/src/components/

```
frontend/src/components/
├── about/
├── chat/
├── crew/
├── forms/
├── give/
├── home/
├── layout/
├── resources/
├── shared/
├── story/
└── ui/
```

---

## backend/

```
backend/
├── manage.py
├── requirements.txt
├── runtime.txt
├── Procfile
├── nixpacks.toml
├── railway.toml
├── .env.example
├── DEPLOYMENT.md
├── ohana_backend/                  Django settings and URL routing
├── users/                          Auth, profiles, sobriety tracking
├── recovery/                       Meetings, crew signups, announcements
├── social/                         Messaging, friendships, posts
├── security/                       Login history, reports, activity logs
├── journal/
├── community/
├── messaging/
└── resources/
```
