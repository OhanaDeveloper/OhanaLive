import CrewHero from "@/components/crew/CrewHero"
import CrewGrid from "@/components/crew/CrewGrid"
import VolunteerCTA from "@/components/shared/VolunteerCTA"
import MeetingCTA from "@/components/shared/MeetingCTA"
import SectionWrapper from "@/components/layout/SectionWrapper"

export const metadata = {
  title: "Mālama | Ohana Live",
  description: "Meet Mālama — the dedicated souls who care for and protect our recovery space every night.",
}

export const dynamic = 'force-static'
export const revalidate = 3600

export default function CrewPage() {
  return (
    <div className="relative">
      <CrewHero />
      <CrewGrid />

      {/* Primary CTA: Become Mālama */}
      <SectionWrapper>
        <VolunteerCTA variant="card" />
      </SectionWrapper>

      {/* Secondary CTA: Join Meeting */}
      <SectionWrapper>
        <div className="text-center">
          <MeetingCTA variant="hero" />
        </div>
      </SectionWrapper>
    </div>
  )
}
