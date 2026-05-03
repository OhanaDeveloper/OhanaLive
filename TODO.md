# Project To-Do

**Last Updated:** 2026-05-02  

---

## Completed This Session

### Project Structure
- [x] Next.js frontend moved into `frontend/`
- [x] Django backend remains in `backend/`
- [x] Root `package.json` added with convenience scripts for frontend dev/build/lint
- [x] README and project structure docs updated for the new layout
- [x] Frontend production build verified from repository root

### Crew Page
- [x] Real member photos uploaded (Joey, Daniel, Jonni, Anne) — transparent PNG variants
- [x] CrewGrid rebuilt for transparent PNGs — floating against teal gradient cards
- [x] Member order set: Joey, Daniel, Jonni, Anne
- [x] Grid updated to 4-column desktop / 2-column tablet / 1-column mobile
- [x] Public-facing Crew page copy uses "Crew"

### Video
- [x] YouTube replaced with Vimeo (`player.vimeo.com/video/1179537268`)
- [x] Clean player params: no branding, no tracking
- [x] Visible caption references Ohana Recovery

### Donations
- [x] `/give` page built — hero, 4 tiers, transparency breakdown, Ko-fi CTAs
- [x] Inline `DonationCTA` added after MeetingSection on home page
- [x] Floating donate button routes to `/give`
- [x] Give page hidden from public nav and footer (page still accessible at `/give`)

### Member Dashboard
- [x] `/dashboard` — protected route, redirects to `/login` if unauthenticated
- [x] Time-of-day greeting, sobriety tracker with animated counter
- [x] Meeting countdown widget, announcements feed, profile card, quick links

### Codebase Hygiene
- [x] Em dashes removed from all 17 files sitewide
- [x] README rewritten to accurately reflect full stack
- [x] Stale documentation replaced with `PROGRESS.md` and `TODO.md`
- [x] Lotus logo restored after accidental deletion
- [x] Next.js upgraded 16.0.1 to 16.2.2 (resolved Vercel deployment issue)
- [x] Git user set to OhanaDeveloper / dev@ohanarecovery.org
- [x] Claude/Anthropic attribution stripped from all commit history

---

## Remaining Tasks

### Priority 1 — Content Needed

### Crew Page Copy
- [ ] Replace placeholder roles for Joey, Daniel, Jonni, Anne. Current value is `"Crew Host"` for all.
- [ ] Replace placeholder bios: `"Bio coming soon."`
- [ ] Add approved personal quotes or short front-card copy for each member.
- [ ] Decide whether to keep or replace the back-card labels `"Why Recovery Work?"` and `"Fun Fact"`.
- [ ] Add approved back-card copy in `frontend/src/components/crew/CrewGrid.tsx`.

### Priority 2 — Product / External Decisions

### Give Page
- [ ] Decide whether `/give` should be added to the primary desktop/mobile navigation.
- [ ] Confirm Ko-fi account `ko-fi.com/ohanarecovery` is active and linked correctly.

### Vimeo
- [ ] Set video privacy on Vimeo to "Only on sites I specify" and add `ohanarecovery.org`.
- [ ] Confirm the Vimeo embed still loads after privacy restrictions are applied.

### Priority 3 — Backend Wiring

### Backend Wiring
- [ ] Replace simulated admin dashboard stats with real API calls.
- [ ] Wire admin sign-up approval/decline actions to the recovery API.
- [ ] Wire admin announcements create/pin/archive actions to the recovery API.
- [ ] Wire admin contacts page to the recovery contacts API.
- [ ] Add Django endpoints for contact, volunteer, and story form submissions.
- [ ] Update frontend contact, volunteer, and story forms to submit to those endpoints.
- [ ] Decide whether social features should be exposed in the frontend; backend routes are currently active at `/api/social/`.

### Priority 4 — QA / Polish

- [ ] Mobile testing — verify all new pages on actual devices
- [ ] Accessibility audit on dashboard and give page
- [ ] SEO: add explicit Open Graph metadata for `/give`, `/dashboard`, and `/crew`
- [ ] Clean up remaining internal/public terminology drift around `Mālama`, `Malama`, `malama`, and `Crew`.
- [ ] Fix existing lint errors so `npm run lint` can pass.
