# Ohana Recovery Project Management Plan

**Created:** May 2, 2026  
**Source Roadmap:** `TODO2.md`  
**Application:** Ohana Recovery / Ohana Live  
**Planning Horizon:** Immediate quick wins through long-term roadmap  

---

## Planning Summary

This plan converts `TODO2.md` into an execution-focused project management map. The roadmap is divided into four phases:

| Phase | Focus | Target Window | Delivery Goal |
|---|---:|---:|---|
| Phase 1 | High-impact quick wins | 1-2 weeks | Make the meeting CTA, safety info, and trust signals immediately visible |
| Phase 2 | Signature experience upgrades | 1-2 months | Improve homepage journey, donations, analytics, and resource discovery |
| Phase 3 | Operational and growth systems | 2-4 months | Add institutional distribution assets, SEO, onboarding, and advanced support systems |
| Phase 4 | Long-term vision | Future planning | Mobile app, partnerships, grants, and deeper accessibility work |

The most important principle: **Phase 1 must ship before Phase 2 begins.** Phase 1 directly affects distressed visitors who need fast access to a meeting, crisis resources, and trust-building context.

---

## Delivery Principles

- **Mobile-first:** All acceptance checks must include mobile viewport testing.
- **Privacy-first:** No new tracking or PII collection unless explicitly required and documented.
- **Recovery-safe copy:** Tone should be warm, direct, human, and non-clinical.
- **Primary CTA clarity:** Joining tonight's meeting is the core conversion path.
- **No hidden safety info:** Crisis resources must be visible without scrolling.
- **No placeholder trust content:** Public trust-building pages should not show "coming soon" copy.

---

## Milestone Map

### Milestone 1: First-Viewport Help Path

**Goal:** A visitor can land on the homepage and immediately understand whether a meeting is live, how to join, what to expect, and how to get crisis support.

Includes:

- 1.1 Hero "Join Tonight's Meeting" CTA
- 1.2 What-to-expect interstitial
- 1.3 Meeting status/countdown
- 1.5 Floating Join Meeting button
- 1.8 Persistent crisis resource link

**Exit Criteria:**

- Join CTA is visible without scrolling on desktop and mobile.
- All meeting CTAs route through the interstitial on first click per session.
- Meeting live/soon/later state is accurate for Pacific meeting hours and visitor local time.
- Crisis resource text is visible on every route.

### Milestone 2: Trust And Story Cleanup

**Goal:** Remove tonal distractions and strengthen social proof.

Includes:

- 1.4 Crew bios
- 1.6 Remove/collapse code snippet section
- 1.7 Anonymous community testimonials

**Exit Criteria:**

- No "coming soon" text remains on the Crew page.
- Code snippet is absent from normal homepage scroll.
- Homepage displays 3-5 anonymous testimonials in the site voice.

### Milestone 3: Guided Homepage Experience

**Goal:** Turn the homepage into a clear choice-based journey instead of a flat content stream.

Includes:

- 2.1 Choose Your Path
- 2.2 Timezone-aware meeting display
- 2.4 Featured worksheet
- 2.5 Wall of Nights counter
- 2.6 Homepage emotional pacing refactor

**Dependencies:**

- Milestone 1 complete
- 1.6 and 1.7 complete before 2.6
- Meeting start date confirmed before 2.5

**Exit Criteria:**

- Homepage follows the target narrative arc.
- Visitors can self-select support, story, or toolkit path.
- Meeting time appears in local timezone with Pacific reference.
- A featured worksheet is visible from homepage.

### Milestone 4: Sustainability And Measurement

**Goal:** Give the project a stronger donation path and analytics without adding newsletter retention.

Includes:

- 2.3 Dedicated Support Ohana page
- 2.7 Privacy-first analytics
- 2.8 Simple email capture intentionally declined

**Dependencies:**

- Donation copy/cost breakdown confirmed
- Analytics vendor selected
- Email backend/vendor selected
- Privacy policy update included with analytics

**Exit Criteria:**

- Support page exists and is linked from nav/footer.
- Analytics loads without cookies or PII tracking.
- Meeting click events are tracked.
- Email capture stores only email and supports unsubscribe.

### Milestone 5: External Growth Assets

**Goal:** Make Ohana easier to distribute, discover, and onboard into.

Includes:

- 3.1 Printable one-sheet PDF
- 3.2 SEO content optimization
- 3.3 Volunteer onboarding documentation

**Exit Criteria:**

- One-sheet PDF is downloadable, print-safe, and includes QR/crisis resources.
- Homepage copy includes target search terms naturally.
- JSON-LD organization/meeting structured data exists.
- Volunteer onboarding page or document is linked from the volunteer form.

### Milestone 6: Advanced Support And Future Planning

**Goal:** Track larger initiatives separately from immediate website execution.

Includes:

- 3.4 Anonymous chat widget reference entry
- 4.1 iOS app
- 4.2 Partnership cross-listings
- 4.3 Grant readiness
- 4.4 Accessibility audit

**Exit Criteria:**

- Each long-term item has a separate scoping document before development begins.
- Grant readiness prerequisites are documented and assigned.
- Accessibility audit scope is converted into a test checklist.

---

## Recommended Sprint Plan

### Sprint 1: Immediate Help And Safety

**Duration:** 3-5 working days  
**Primary Outcome:** Visitors can join or get crisis support from the first viewport.

Tasks:

- [x] 1.1 Add hero "Join Tonight's Meeting" CTA
- [x] 1.3 Add MeetingStatus component
- [x] 1.8 Add persistent crisis resource link

Implementation order:

1. Build reusable meeting time utility.
2. Build `MeetingStatus`.
3. Place status and CTA in homepage hero.
4. Add persistent crisis resource to global layout.
5. Verify mobile first viewport.

Acceptance Gate:

- Homepage first viewport contains meeting CTA, meeting state, and crisis resource on desktop/mobile.

### Sprint 2: Join Flow And Persistent CTA

**Duration:** 3-5 working days  
**Primary Outcome:** Every meeting CTA routes through reassuring context before Zoom.

Tasks:

- [x] 1.2 Add What to Expect interstitial
- [x] 1.5 Add persistent floating Join Meeting button

Implementation order:

1. Create route or modal for meeting expectations.
2. Centralize meeting join URL and join-link helper.
3. Update all join CTAs to use the helper/interstitial.
4. Add sessionStorage behavior for first-click routing.
5. Add floating button with live/off-hours state.

Acceptance Gate:

- Every meeting CTA uses the same routing behavior.
- Interstitial appears once per session before Zoom handoff.
- Floating button does not overlap mobile bottom nav or chat UI.

### Sprint 3: Trust Content Cleanup

**Duration:** 2-4 working days  
**Primary Outcome:** Remove placeholders and strengthen trust-building content.

Tasks:

- [x] 1.4 Fill crew bios
- [x] 1.6 Remove or collapse code snippet section
- [x] 1.7 Add anonymous testimonials

Implementation order:

1. Replace crew placeholders with approved copy or warm fallback copy.
2. Remove homepage code snippet from normal scroll flow.
3. Add testimonials section after promise/mission content.
4. Run visual pass on homepage and Crew page.

Acceptance Gate:

- No Crew page placeholder text remains.
- Testimonials are visible and anonymous.
- Homepage no longer has a developer-code section in normal reading flow.

### Sprint 4: Guided Homepage Path

**Duration:** 1-2 weeks  
**Primary Outcome:** Homepage becomes a guided visitor journey.

Tasks:

- [x] 2.1 Add Choose Your Path entry flow
- [x] 2.2 Add timezone-aware meeting time display
- [x] 2.4 Surface one featured worksheet
- [x] 2.5 Add Wall of Nights counter UI

Implementation order:

1. Confirm meeting start date for Wall of Nights. `Blocked pending Daniel confirmation.`
2. Create timezone display component or extend meeting status utility. `Complete.`
3. Add three path cards below hero. `Complete.`
4. Add featured worksheet section from existing worksheet data. `Complete.`
5. Add Wall of Nights counter to stats/social proof area. `Complete using 2025-05-02.`

Acceptance Gate:

- Visitor can choose support/story/toolkit path within first two homepage sections.
- Local timezone meeting time is prominent and accurate.
- Homepage exposes one concrete toolkit resource.
- Wall of Nights uses the one-year operating start date supplied on 2026-05-02.

### Sprint 5: Homepage Pacing Refactor

**Duration:** 3-5 working days  
**Primary Outcome:** Homepage has a coherent emotional arc.

Tasks:

- [x] 2.6 Homepage emotional pacing refactor

Dependencies:

- 1.6 complete
- 1.7 complete
- 2.1 complete
- 2.4 complete
- 2.5 complete

Implementation order:

1. Reorder homepage sections to target narrative arc.
2. Condense inclusivity section from 6 cards to 3-4.
3. Remove emoji-heavy headers from inclusivity cards.
4. Confirm spacing and visual hierarchy.

Acceptance Gate:

- Homepage section order matches TODO2 target flow.
- No content is lost, but redundant/flat sections are condensed.

### Sprint 6: Donation System Upgrade

**Duration:** 3-5 working days  
**Primary Outcome:** Donations feel like a transparent support path, not a footer footnote.

Tasks:

- [x] 2.3 Dedicated Support Ohana donation page

Implementation order:

1. Decide route: `/support-us`, `/donate`, or reuse `/give`. `Complete: /support-us, with /donate redirect.`
2. Add transparent cost breakdown with real numbers. `Complete.`
3. Add impact-framed donation tiers. `Complete.`
4. Route footer Ko-fi CTA through page or keep direct link plus page link. `Complete.`
5. Add nav entry if approved. `Complete.`

Acceptance Gate:

- Donation page is discoverable.
- Page explains costs, impact, and destination of funds clearly.

### Sprint 7: Measurement

**Duration:** 1-2 weeks  
**Primary Outcome:** Privacy-aware insight without newsletter collection.

Tasks:

- [x] 2.7 Privacy-first analytics integration scaffold
- [x] 2.8 Simple email capture intentionally declined

Decisions Required:

- Google Analytics 4 measurement ID provided: `G-NY5ZGB6ZCY`.
- Confirm Google Analytics dashboard access.
- Privacy policy copy added for Google Analytics and cookie disclosure.

Implementation order:

1. Select analytics vendor. `Complete: Google Analytics 4.`
2. Add analytics script to root layout. `Complete with G-NY5ZGB6ZCY and optional NEXT_PUBLIC_GA_MEASUREMENT_ID override.`
3. Track meeting clicks as custom event. `Complete.`
4. Update privacy policy. `Complete.`
5. Add homepage email capture. `Canceled by product decision.`

Acceptance Gate:

- Analytics avoids advertising personalization signals; Google Analytics may still use GA cookies and must be disclosed in privacy policy.
- No email capture, newsletter backend, or unsubscribe path is needed.

### Sprint 8: Operational Growth Assets

**Duration:** 2-3 weeks  
**Primary Outcome:** Ohana can be shared by institutions and discovered through search.

Tasks:

- [ ] 3.1 Printable one-sheet PDF
- [ ] 3.2 SEO content optimization
- [ ] 3.3 Volunteer onboarding documentation

Implementation order:

1. Draft one-sheet content and generate QR code.
2. Build printable PDF and host it.
3. Link one-sheet from Support page.
4. Add SEO terms naturally to homepage.
5. Add unique title/meta descriptions to pages.
6. Add JSON-LD structured data.
7. Create volunteer onboarding page/doc and link from volunteer form.

Acceptance Gate:

- One-sheet prints legibly in black and white.
- SEO metadata coverage is complete.
- Volunteer onboarding covers role, conduct, structure, emergencies, and contact path.

---

## Task Register

| ID | Task | Phase | Priority | Dependencies | Status |
|---|---|---:|---:|---|---|
| 1.1 | Move Join Tonight's Meeting into first viewport | 1 | P0 | None | Complete |
| 1.2 | Add What to Expect interstitial before Zoom handoff | 1 | P0 | Meeting URL helper recommended | Complete |
| 1.3 | Add meeting status/countdown indicator | 1 | P0 | Meeting time utility | Complete |
| 1.4 | Fill crew bios | 1 | P1 | Content approval or fallback copy | Complete with fallback copy |
| 1.5 | Add persistent floating Join Meeting button | 1 | P0 | 1.2, 1.3 | Complete |
| 1.6 | Remove/collapse code snippet section | 1 | P1 | None | Complete |
| 1.7 | Add anonymous community testimonials | 1 | P1 | Placeholder or real quotes | Complete with anonymous placeholder quotes |
| 1.8 | Add persistent crisis resource link | 1 | P0 | Global layout placement | Complete |
| 2.1 | Choose Your Path entry flow | 2 | P1 | 1.1, 1.3 recommended | Complete |
| 2.2 | Timezone-aware meeting time display | 2 | P1 | 1.3 utility | Complete |
| 2.3 | Dedicated Support Ohana donation page | 2 | P2 | Donation route decision | Complete |
| 2.4 | Featured worksheet on homepage | 2 | P1 | Existing worksheet data | Complete |
| 2.5 | Wall of Nights counter | 2 | P1 | Meeting start date | Complete using 2025-05-02 one-year start date |
| 2.6 | Homepage emotional pacing refactor | 2 | P1 | 1.6, 1.7, 2.1, 2.4, 2.5 | Complete |
| 2.7 | Privacy-first analytics | 2 | P2 | Live dashboard verification | GA4 installed with G-NY5ZGB6ZCY and privacy page updated |
| 2.8 | Simple email capture | 2 | P2 | Product decision | Canceled; no newsletter/email capture |
| 3.1 | Printable one-sheet PDF | 3 | P2 | QR code, final copy | Not started |
| 3.2 | SEO content optimization | 3 | P2 | Copy pass | Not started |
| 3.3 | Volunteer onboarding documentation | 3 | P2 | Protocol content | Not started |
| 3.4 | Anonymous chat widget reference | 3 | P3 | Dedicated prompt/scoping | Reference item |
| 4.1 | iOS application | 4 | Future | Product scope | Backlog |
| 4.2 | Partnership cross-listings | 4 | Future | Outreach list | Backlog |
| 4.3 | Grant readiness | 4 | Future | Fiscal/metrics readiness | Backlog |
| 4.4 | Accessibility audit | 4 | Future | Audit checklist | Backlog |

---

## Dependency Map

```text
Meeting utility
|-- 1.3 MeetingStatus
|-- 2.2 Timezone display
`-- 1.5 Floating Join button

1.2 What to Expect interstitial
`-- 1.5 Floating Join button routing

1.6 Remove code snippet
1.7 Testimonials
2.1 Choose Your Path
2.4 Featured Worksheet
2.5 Wall of Nights
`-- 2.6 Homepage pacing refactor

Analytics vendor decision
|-- 2.7 Analytics integration
`-- Privacy policy update

Email backend/vendor decision
|-- 2.8 Email capture
`-- Privacy policy update

Meeting start date
`-- 2.5 Wall of Nights counter
```

---

## Acceptance Gate Checklist

Use this checklist before considering each milestone complete.

### Functional

- [ ] All primary CTAs point to the correct destination.
- [ ] Meeting join flow routes through the interstitial once per session.
- [ ] Meeting status is correct for live, starting soon, and later states.
- [ ] Form submissions either work or clearly remain out of scope.
- [ ] No broken internal links.

### Mobile

- [ ] Hero CTA visible without scrolling.
- [ ] Floating CTA does not overlap bottom nav, chat, or critical content.
- [ ] Pathway cards stack cleanly.
- [ ] Crisis resource remains visible and readable.

### Accessibility

- [ ] All interactive elements are keyboard reachable.
- [ ] Buttons and links have descriptive names.
- [ ] Color contrast is acceptable in dark mode.
- [ ] Motion is subtle and does not block use.

### Privacy And Safety

- [ ] Crisis resource visible across routes.
- [x] Google Analytics disclosed in privacy policy; no PII/custom form input tracking.
- [ ] No form inputs sent to third parties without explicit purpose.
- [x] Email capture intentionally excluded; unsubscribe path not needed.

### Content Quality

- [ ] No "coming soon" copy on public trust-building pages.
- [ ] Copy is warm, direct, and non-corporate.
- [ ] Testimonials are anonymous.
- [ ] Donation copy is transparent and not guilt-driven.

---

## Decision Log

| Decision Needed | Blocks | Options | Recommendation |
|---|---|---|---|
| Actual Zoom meeting URL source | 1.1, 1.2, 1.5 | Hardcoded constant, env var, backend setting | Centralize in frontend meeting config now; env var later if needed |
| Interstitial format | 1.2, 1.5 | Page, modal | Use a route/page for reliability and shareability |
| Crew bios | 1.4 | Real bios, fallback bios | Ship warm fallback copy now; replace with real bios later |
| Donation route | 2.3 | `/give`, `/support-us`, `/donate` | Complete: `/support-us`, with `/donate` redirect |
| Analytics vendor | 2.7 | Google Analytics, Plausible, Fathom | Complete: Google Analytics 4 because it is free and familiar |
| Email capture backend | 2.8 | Do not collect, Buttondown, Django model | Complete: do not collect newsletter emails |
| Wall of Nights start date | 2.5 | 2025-05-02 or exact first meeting date | Complete: 2025-05-02 unless exact date differs |
| Social feature exposure | Phase 3/Future | Hide, partial launch, full launch | Keep hidden until moderation/privacy policy is ready |

---

## Implementation Notes For Agents

- Start with the homepage files and shared meeting utilities.
- Prefer reusable components for meeting CTA/status/interstitial behavior.
- Keep the crisis resource in a global layout-level component so it appears on every page.
- Avoid adding heavy dependencies for Phase 1.
- Use sessionStorage only for client-side interstitial state; do not store user identity.
- Analytics vendor selected: Google Analytics 4. Installed measurement ID: `G-NY5ZGB6ZCY`; `NEXT_PUBLIC_GA_MEASUREMENT_ID` can override it per environment.
- Do not implement newsletter/email capture unless the product decision changes later.
- After each sprint, run:

```bash
npm run build
npm run lint
```

`npm run lint` currently has known existing failures; note whether new work adds or reduces errors.

---

## Current Outstanding External Inputs

- Real crew bios, quotes, roles, and back-card copy.
- Confirmed Zoom meeting URL and whether it should be stored in code or env.
- Exact first meeting date if different from the current `2025-05-02` one-year start date.
- Ko-fi account status; preferred donation route is now `/support-us`.
- Google Analytics live dashboard confirmation after deployment.
- Google Analytics live data verification after deployment.
- Volunteer onboarding protocol details.

---

## Recommended Immediate Next Action

Begin with **Sprint 1: Immediate Help And Safety**.

The first engineering task should be to centralize meeting time/link data and add the hero CTA, meeting status component, and persistent crisis resource. This has the highest user impact and unlocks the later join-flow work.
