# Project To-Do

**Last Updated:** 2026-04-02  

---

## Completed This Session

### Crew Page
- [x] Real member photos uploaded (Joey, Randal, Jonni, Anne) — transparent PNG variants
- [x] CrewGrid rebuilt for transparent PNGs — floating against teal gradient cards
- [x] Member order set: Joey, Randal, Jonni, Anne
- [x] Grid updated to 4-column desktop / 2-column tablet / 1-column mobile
- [x] "Malama" removed sitewide — replaced with "Crew" throughout all UI

### Video
- [x] YouTube replaced with Vimeo (`player.vimeo.com/video/1179537268`)
- [x] Clean player params: no branding, no tracking
- [x] Caption updated to "Ohana Recovery"

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

## Still Pending

### Crew Page Copy
- [ ] Roles for Joey, Randal, Jonni, Anne (currently "Crew Host" for all)
- [ ] Personal quotes for each member (front of card) — drafts ready, need member approval
- [ ] Back-of-card content: decide on replacement for "Why Recovery Work?" and "Fun Fact" labels
- [ ] Once copy is approved, final swap in `src/components/crew/CrewGrid.tsx`

### Give Page
- [ ] Decide when to make `/give` publicly visible (add back to nav/footer when ready)
- [ ] Confirm Ko-fi account `ko-fi.com/ohanarecovery` is active and linked correctly

### Vimeo
- [ ] Set video privacy on Vimeo to "Only on sites I specify" and add `ohanarecovery.org`

### Backend Wiring
- [ ] Admin dashboard pages fetch placeholder data — needs real API calls
- [ ] Contact, volunteer, and story forms submit to no endpoint — needs Django views
- [ ] Social features (messaging, friendships, posts) built in backend but not active in frontend

### Future
- [ ] Mobile testing — verify all new pages on actual devices
- [ ] Accessibility audit on dashboard and give page
- [ ] SEO: Open Graph tags for `/give`, `/dashboard`, `/crew`
