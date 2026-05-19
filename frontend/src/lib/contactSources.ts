// Maps the ?source=<slug> query param that contact form entry points carry
// into the short human label we want to show in the email subject + body.
//
// Add a new entry when you add a new entry point. Unknown values fall back
// to "Direct" so the email is never blank.

export const CONTACT_SOURCES = {
  "support-skill": "Support · Lend a skill",
  "support-supplies": "Support · Supplies & resources",
  "support-partnership": "Support · Partnership",
  "toolkit-cta": "Toolkit · Get in touch",
  "story-cta": "Story · Get in touch",
  "recovery-network": "Recovery Network · Suggest a community",
  crew: "Crew",
  privacy: "Privacy",
} as const

export type ContactSource = keyof typeof CONTACT_SOURCES

export function contactSourceLabel(source: string | null | undefined): string {
  if (!source) return "Direct"
  return (CONTACT_SOURCES as Record<string, string>)[source] ?? "Direct"
}
