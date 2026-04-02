# Tonight's To-Do

**Date:** 2026-04-02  
**Session Goal:** Four feature additions — Mālama real data, video migration, donations page, member dashboard

---

## Pre-Build (You Do These)

- [ ] Gather Mālama crew photos — **600×600px, square crop, face-centered, WebP or JPG**
- [ ] Upload founder's video to Vimeo — get the embed URL when done

---

## 1. Mālama Real Data — `src/components/crew/CrewGrid.tsx`
*Blocked until photos + copy are ready. ~30 min once assets arrive.*

- [ ] Replace placeholder `crewMembers` array with real names, roles, bios
- [ ] Swap Unsplash URLs for real hosted photo URLs
- [ ] Write "why recovery" back-of-card copy for each member (150–200 chars)
- [ ] Write fun fact for each member (optional, keep or remove the field)
- [ ] Confirm final member count — adjust grid columns if fewer than 5 members

---

## 2. Vimeo Migration — `src/components/about/VideoIntro.tsx`
*Blocked until Vimeo URL is ready. ~15 min once uploaded.*

- [ ] Swap YouTube embed URL for Vimeo embed URL
- [ ] Set Vimeo privacy to "Only on sites I specify" → `ohanarecovery.org`
- [ ] Remove YouTube-specific iframe params (`accelerometer`, `gyroscope`, etc.)
- [ ] Add Vimeo params: `?title=0&byline=0&portrait=0&dnt=1` (clean player, no tracking)
- [ ] Test autoplay behavior and caption copy below video

---

## 3. Donations & Fundraising Page ✅ COMPLETE
- `src/app/give/page.tsx` — hero + 4 giving tiers + transparency + Ko-fi CTAs
- `src/components/give/GiveHero.tsx` — StoryHero-quality parallax hero
- `src/components/give/GivingTiers.tsx` — tiers, impact statements, transparency breakdown
- `src/components/home/DonationCTA.tsx` — inline CTA after MeetingSection on home
- Footer updated: ~$200/month, Give link added to Navigate column
- Navigation: Give added to navItems
- FloatingDonateButton: routes to `/give`, updated tooltip copy
- `api.ts`: added `getAnnouncements()`, `restartSobrietyDate()`, `deleteSobrietyDate()`

---

## 4. Member Dashboard ✅ COMPLETE
- `src/app/dashboard/page.tsx` — protected, redirects to `/login` if unauthenticated
- Time-of-day greeting (morning / afternoon / evening / welcome back)
- Sobriety tracker: add dates, animated counter (Framer Motion useMotionValue), inline restart confirmation
- Meeting countdown widget with live detection + Zoom link
- Announcements feed from `/api/recovery/announcements/` with empty state
- Profile card with avatar/initials fallback, edit link
- Quick links grid: Resources, Crew, Story, Recovery Network
- Staggered entrance animations on all sections
- Navigation: logged-in username now links to `/dashboard`

---

## Definition of Done

- [ ] All four features merged to `main`
- [ ] No placeholder data remaining on crew page
- [ ] YouTube removed from codebase entirely
- [ ] `/give` page live with real Ko-fi links
- [ ] `/dashboard` protected, interactive, and animated
- [ ] `_documentation/PROGRESS.md` updated with new status
