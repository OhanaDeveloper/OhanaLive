import Link from "next/link"

// The page is paused. The roster scaffolding (CrewHero, CrewRoster, data/crew.ts)
// stays in the codebase, dormant, until the page is brought back.
//
// TODO: Daniel — the copy below is a placeholder. Replace with your own words
// when you're ready. The structure can stay; the voice should be yours.

export const metadata = {
  title: "Paused",
  description:
    "The team page is paused while the room is being rebuilt.",
}

export default function CrewPage() {
  return (
    <section className="min-h-[calc(100vh-8rem)] px-4 py-24 md:py-32">
      <div className="mx-auto flex max-w-2xl flex-col gap-8 text-left">
        <p className="text-sm font-mono uppercase tracking-[0.3em] text-teal/70">
          This page is paused
        </p>

        <h1 className="text-3xl font-bold leading-tight text-gray-100 md:text-5xl">
          Four people helped hold this room.
          <br />
          They&apos;ve each stepped back.
        </h1>

        <div className="space-y-5 text-base leading-relaxed text-gray-400 md:text-lg">
          <p>
            Inside of three weeks, the four people who carried this with me
            chose to step away. They had their reasons. This is the part of the
            work nobody writes brochures about.
          </p>
          <p>
            The page that used to live here will be written again when there is
            more than one of us. Until then, the room stays open every night,
            because that part does not need a team to be true.
          </p>
        </div>

        <div className="mt-6 border-l-2 border-teal/40 pl-5 text-base text-gray-300">
          <p>
            If you came here because you want to help carry this — not run it,
            not rebrand it, not save it — write to me.
          </p>
          <Link
            href="/forms/contact"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal-light"
          >
            Open the contact form
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
