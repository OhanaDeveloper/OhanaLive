// Crew roster data.
//
// Add or remove members by editing the `crew` array below. The roster
// component handles 1, 4, or 20+ members without structural changes — the
// layout adapts via CSS grid.
//
// `bio` is optional. When null, the card renders the name and role only
// (no placeholder copy is shown to visitors).

export type CrewMember = {
  /** Stable id for keying; can be a slug. */
  id: string
  /** First name or chosen handle. */
  name: string
  /** Role inside Ohana. e.g. "Founder", "Host", "Toolkit Lead". */
  role: string
  /** Path to the profile image in /public. */
  image: string
  /** Short bio sentence or two. Leave null until provided. */
  bio: string | null
  /** Flag the founder so the layout can give them a hero treatment when alone. */
  isFounder?: boolean
}

export const crew: CrewMember[] = [
  {
    id: "daniel",
    name: "Daniel",
    role: "Founder",
    image: "/OhanaProfile_Daniel.webp",
    // TODO: founder bio
    bio: null,
    isFounder: true,
  },
]

/** Honest, one-line description of the roster state, surfaced at the top of /crew. */
export const rosterStateLine =
  "Ohana is rebuilding. Founder-led right now, with room for more people who want to help hold the room open."
