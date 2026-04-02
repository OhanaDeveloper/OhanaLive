# Ohana Live — File Structure

**Last Updated:** 2026-04-02  
Excludes: `node_modules/`, `.git/`, `.next/`

---

## Root

```
OhanaLive/
├── .gitignore
├── .nixpacksignore
├── .nvmrc                          Node version pin (24)
├── .prettierrc.json
├── .vscode/
│   └── settings.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── TODO.md
│
├── _documentation/
│   ├── FILE_STRUCTURE.md           This file
│   └── PROGRESS.md                 Build status, active to-do, known issues
│
├── public/                         Static assets (served at /)
│   ├── lotus-logo.png              Animated nav logo
│   ├── lotus-logo-youtube.png
│   ├── OhanaProfile_Anne.png       Crew photo — original
│   ├── OhanaProfile_Anne2.png      Crew photo — transparent background
│   ├── OhanaProfile_Joey.png
│   ├── OhanaProfile_Joey2.png
│   ├── OhanaProfile_Jonni.png
│   ├── OhanaProfile_Jonni2.png
│   ├── OhanaProfile_Randal.png
│   └── OhanaProfile_Randal2.png
│
├── src/                            Next.js frontend source
└── backend/                        Django backend source
```

---

## src/

### src/app/ — Routes (Next.js App Router)

```
src/app/
├── globals.css                     Global styles, CSS variables, dark theme
├── layout.tsx                      Root layout — fonts, providers, analytics
├── loading.tsx                     Global loading state
├── page.tsx                        Home page (/)
├── apple-icon.tsx                  PWA apple icon
├── icon.tsx                        Favicon
│
├── (sections)/                     Public-facing pages
│   ├── about/page.tsx              Mission, promises, founder video, tech showcase
│   ├── crew/page.tsx               Crew member directory
│   ├── resources/page.tsx          Recovery worksheets and PDF downloads
│   ├── story/page.tsx              Community story and timeline
│   └── support/page.tsx            Recovery organization directory
│
├── admin/                          Admin dashboard (protected)
│   ├── page.tsx                    Dashboard overview
│   ├── announcements/page.tsx      Create and manage crew announcements
│   ├── contacts/page.tsx           Crew emergency contacts and availability
│   ├── meetings/page.tsx           View and manage nightly meetings
│   └── signups/page.tsx            Review crew hosting sign-up requests
│
├── dashboard/
│   └── page.tsx                    Member dashboard (protected, redirects if unauthed)
│
├── forms/                          Standalone form pages
│   ├── contact/page.tsx            Contact form
│   ├── story/page.tsx              Share your story submission
│   └── volunteer/page.tsx          Join the Crew application
│
├── give/
│   └── page.tsx                    Donations and fundraising page (hidden from nav)
│
├── login/page.tsx                  Login — email/password + reCAPTCHA v3
├── signup/page.tsx                 Registration + reCAPTCHA v3
├── forgot-password/page.tsx        Password reset request
└── reset-password/page.tsx         Password reset confirmation
```

---

### src/components/ — UI Components

```
src/components/
├── ReCaptchaProvider.tsx           Google reCAPTCHA v3 context wrapper
│
├── about/                          About page sections
│   ├── AboutHero.tsx               Parallax hero section
│   ├── InteractiveSkills.tsx       Tech/skills showcase
│   ├── MissionStatement.tsx        Mission and values
│   ├── PromiseHoldSpace.tsx        Community promise
│   ├── PromiseStruggling.tsx       Promise for those struggling
│   ├── TechShowcase.tsx            Technology stack display
│   └── VideoIntro.tsx              Founder video embed (Vimeo)
│
├── crew/                           Crew page components
│   ├── CrewGrid.tsx                Flip-card grid — real member photos + copy
│   └── CrewHero.tsx                Crew page parallax hero
│
├── forms/                          Form components
│   ├── ContactForm.tsx
│   ├── StoryForm.tsx
│   └── VolunteerForm.tsx
│
├── give/                           Donations page components
│   ├── GiveHero.tsx                Parallax hero for /give
│   └── GivingTiers.tsx             Giving tiers, impact statements, transparency
│
├── home/                           Home page sections
│   ├── DonationCTA.tsx             Inline donation nudge after MeetingSection
│   ├── FeaturesSection.tsx         Key features showcase
│   ├── HomeHero.tsx                Landing hero with parallax
│   └── MeetingSection.tsx          Live meeting countdown and Zoom link
│
├── layout/                         Global layout components
│   ├── Background.tsx              Animated dark background
│   ├── ClientLayout.tsx            Root client wrapper — providers and layout
│   ├── Footer.tsx                  Site footer — links, Ko-fi CTA, copyright
│   ├── MobileNav.tsx               Mobile navigation drawer
│   ├── Navigation.tsx              Desktop nav bar
│   ├── RotatingLogo.tsx            Animated breathing lotus logo
│   ├── SectionWrapper.tsx          Consistent section padding wrapper
│   ├── SettingsMenu.tsx            User settings panel
│   └── Toolbar.tsx                 Top toolbar
│
├── resources/                      Resources page components
│   ├── ResourcesCTA.tsx            Call-to-action for downloads
│   ├── ResourcesHero.tsx           Resources page hero
│   ├── WorksheetCard.tsx           Individual worksheet card
│   ├── WorksheetGrid.tsx           Grid of all worksheets
│   ├── WorksheetModal.tsx          Worksheet preview modal
│   └── WorksheetPDF.tsx            In-browser PDF renderer
│
├── shared/                         Reusable cross-page components
│   ├── FloatingDonateButton.tsx    Fixed bottom-right donate button (routes to /give)
│   ├── LotusBreath.tsx             Interactive lotus breathing exercise
│   ├── MeetingCTA.tsx              Join meeting call-to-action
│   ├── ShareStoryCTA.tsx           Share your story call-to-action
│   └── VolunteerCTA.tsx            Join the Crew call-to-action
│
├── story/                          Story page components
│   ├── StoryCTA.tsx                Story page call-to-action
│   ├── StoryHero.tsx               Quality benchmark — parallax hero
│   ├── StoryQuotes.tsx             Community testimonial quotes
│   ├── StoryTimeline.tsx           Origin story timeline
│   └── StoryValues.tsx             Community values display
│
└── ui/                             Generic UI primitives
    ├── ADAComplianceModal.tsx      WCAG AAA compliance info modal
    ├── AccessibilityToggle.tsx     Accessibility settings toggle
    └── AnimatedCard.tsx            Reusable hover-animated card
```

---

### src/contexts/ and src/lib/

```
src/contexts/
└── AuthContext.tsx                 Global auth state — user, login, register, logout

src/lib/
├── api.ts                          API client — JWT auth, token refresh, all endpoints
├── meetings.ts                     Meeting schedule constants (start/end time, Zoom link)
├── worksheets.ts                   Worksheet data and helpers
└── worksheetStorage.ts             Local storage persistence for worksheets
```

---

## backend/

```
backend/
├── manage.py
├── requirements.txt
├── runtime.txt                     Python version pin
├── Procfile                        Gunicorn start command
├── nixpacks.toml                   Railway build configuration
├── railway.toml                    Railway deployment settings
├── .env.example                    Environment variable reference
├── DEPLOYMENT.md                   Full Railway deployment guide
│
├── ohana_backend/                  Django project settings
│   ├── settings.py                 Main settings — DB, JWT, CORS, email
│   ├── urls.py                     Root URL router
│   ├── exceptions.py               Custom exception handlers
│   ├── asgi.py
│   └── wsgi.py
│
├── users/                          Auth, profiles, sobriety tracking
│   ├── models.py                   CustomUser, Profile, SobrietyDate, Role
│   ├── views.py                    Register, login, me, password change
│   ├── serializers.py
│   ├── urls.py
│   ├── admin.py
│   └── migrations/
│
├── recovery/                       Meetings and crew management
│   ├── models.py                   Meeting, MeetingSignUp, Attendance, Contact, Announcement
│   ├── views.py                    Meeting CRUD, sign-up approval, announcements
│   ├── serializers.py
│   ├── urls.py
│   ├── admin.py
│   └── migrations/
│
├── social/                         Messaging and community (built, not yet active)
│   ├── models.py                   Conversation, Message, Friendship, Block, Post, Comment
│   ├── views.py
│   ├── serializers.py
│   ├── urls.py
│   ├── admin.py
│   └── migrations/
│
├── security/                       Login history, reports, activity logs
│   ├── models.py                   LoginHistory, UserReport, ActivityLog
│   ├── views.py
│   ├── middleware.py
│   ├── admin.py
│   └── migrations/
│
├── community/                      Planned — stubbed
├── journal/                        Planned — stubbed
├── messaging/                      Planned — stubbed
└── resources/                      Planned — stubbed
```
