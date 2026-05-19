# Pre-deploy verification — 2026-05-18 cleanup pass

Companion to `codebase-audit-2026-05-18.md`. Run these checks before merging the cleanup pass.

---

## 1. Install + build

```bash
cd frontend
npm install
npm run build
```

Build is expected to pass. The cleanup pass deletes `components/give/` and `components/home/WallOfNights.tsx`; no remaining import points at either path (verified via grep before deletion).

---

## 2. Route smoke test (dev server)

```bash
npm run dev  # repo root or frontend/
```

| URL | Expected |
|---|---|
| `/` | Loads. No "365 nights" stat block in `MissionStatement`. No `WallOfNights` section. New single-line "A live recovery space, kept simple and accessible." sits between `TestimonialsSection` and `PromiseStruggling`. |
| `/support` | New mission-framed page. Hero says "Ohana stays open because people show up." Six contribution paths (Donate, Volunteer, Lend a skill, Supplies & resources, Partnership, Spread the word). No dollar amounts. No tier ladder. |
| `/recovery-network` | Existing recovery-org directory (LifeRing, Recovery Dharma, etc). Same content that used to live at `/support`. |
| `/crew` | Hero + solo-founder roster. Daniel only. Role reads "Founder". No bio text rendered. One-line framing above the portrait: "Ohana is rebuilding. Founder-led right now…" |
| `/give` | **301 → /support** |
| `/donate` | **301 → /support** |
| `/support-us` | **301 → /support** |
| `/meeting` | Existing interstitial. If `NEXT_PUBLIC_MEETING_ZOOM_URL` is unset to empty string, fallback page renders with 988 / Crisis Text Line / link to `/recovery-network`. |

---

## 3. Crew roster — 1 / 4 / 20 member verification

The roster component (`frontend/src/components/crew/CrewRoster.tsx`) is data-driven from `frontend/src/data/crew.ts`. To verify layout at higher counts before adding real members, temporarily edit `crew.ts` and reload `/crew`:

**1 member (current state).**
- `crew` array has one entry (`isFounder: true`).
- Expect: large centered portrait, name in `text-5xl md:text-7xl`, role in spaced uppercase mono below.

**4 members.**
```ts
export const crew: CrewMember[] = [
  { id: "daniel", name: "Daniel", role: "Founder",   image: "/OhanaProfile_Daniel.png", bio: null, isFounder: true },
  { id: "joey",   name: "Joey",   role: "Host",      image: "/OhanaProfile_Joey2.png",  bio: null },
  { id: "jonni",  name: "Jonni",  role: "Host",      image: "/OhanaProfile_Jonni2.png", bio: null },
  { id: "anne",   name: "Anne",   role: "Host",      image: "/OhanaProfile_Anne2.png",  bio: null },
]
```
- Expect: 4-up row on desktop (≥960px), 2x2 on tablet, single column on mobile (375px).
- All portraits the same size (`size="md"`, 200px).
- Solo-founder treatment is gone — Daniel's card looks like the others.

**20 members.**
- Duplicate the 4-member array 5 times with unique `id` values.
- Expect: 4 cols × 5 rows on desktop, no horizontal scroll at any width, equal gaps.
- Page height grows; the trailing "Want to help hold the room open?" CTA stays at the bottom.

After verification, revert `crew.ts` to the solo-founder state.

---

## 4. Meeting link verification

With `NEXT_PUBLIC_MEETING_ZOOM_URL` set:
- Hero "Join Tonight's Meeting" → `/meeting` interstitial → "Join Now" opens Zoom in a new tab.
- `FloatingJoinMeetingButton` (mounted globally) → first click routes to `/meeting`; subsequent clicks within the session open Zoom directly.
- Footer "Join Meeting (11pm PT)" → `/meeting` interstitial.

With `NEXT_PUBLIC_MEETING_ZOOM_URL=` (empty):
- Hero CTA still goes to `/meeting`, which now renders the fallback view (Call 988 / Text 741741 / Open the Recovery Network).
- `JoinNowButton` on `/meeting` renders "Find another room tonight" → `/recovery-network`.
- `FloatingJoinMeetingButton` always routes to `/meeting` (does not open `about:blank`).

---

## 5. Vercel configuration

Before promoting to production:

1. In the Vercel project settings, add:
   ```
   NEXT_PUBLIC_MEETING_ZOOM_URL=<current Zoom meeting URL>
   ```
2. After deploy, smoke-test the four redirects against the live URL:
   - `https://ohanarecovery.org/give` → `https://ohanarecovery.org/support`
   - `https://ohanarecovery.org/donate` → `https://ohanarecovery.org/support`
   - `https://ohanarecovery.org/support-us` → `https://ohanarecovery.org/support`
   - `https://ohanarecovery.org/resources` → `https://ohanarecovery.org/toolkit` (pre-existing, double-check)

---

## 6. Known scope deviations (worth Daniel's eye)

These weren't explicitly listed in `Ohana Site Cleanup — Decisions & Execution Order` but came up while executing it. Each is small enough to revert if you disagree.

1. **`/support` recovery directory was moved to `/recovery-network`.** The spec made `/support` the new contribution page, but the prior `/support` was the recovery-org directory (different audience). Moving it to `/recovery-network` was a judgment call; rename if you prefer (e.g. `/networks`, `/other-rooms`). Footer link "Recovery Network" and the Phase B meeting fallback both point at `/recovery-network`.
2. **`MobileNav` "Support" tab still points at `/support`** (the new contribution page). For a crisis visitor tapping "Support", that may be the wrong destination. Consider either renaming the tab or repointing it at `/recovery-network`. Out of scope for this pass — flagging.
3. **Trailing `MeetingCTA` and `VolunteerCTA` were removed from `/crew`.** The old page had two trailing CTA blocks after the roster; the new `CrewRoster` ends with its own "Tell us you're in" CTA, so the trailing blocks were duplicates. Easy to restore.
4. **`DonationCTA.tsx` is unused but still references the old route via a redirect.** Updated to `/support` directly so the redirect chain is short. The component itself is dead code — recommend deletion in a future cleanup pass.
5. **`Navigation` "Give" → "Support".** Renamed in the desktop nav to match the new page name. Footer's desktop Navigate column "Give" link also renamed to "Support".

---

## 7. What was NOT touched (per spec "out of scope")

- Story page
- Toolkit page
- Homepage flow beyond `WallOfNights` removal and `MissionStatement` stat block removal
- Cinematic asset work (koi, video, Lottie)
- TODO2 Phase 1 items not explicitly listed in the spec
