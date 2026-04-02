import AboutHero from "@/components/about/AboutHero"
import MissionStatement from "@/components/about/MissionStatement"
import PromiseStruggling from "@/components/about/PromiseStruggling"
import PromiseHoldSpace from "@/components/about/PromiseHoldSpace"
import VideoIntro from "@/components/about/VideoIntro"
import TechShowcase from "@/components/about/TechShowcase"
import VolunteerCTA from "@/components/shared/VolunteerCTA"
import MeetingCTA from "@/components/shared/MeetingCTA"
import SectionWrapper from "@/components/layout/SectionWrapper"

export const dynamic = 'force-static'
export const revalidate = 3600

export default function AboutPage() {
  return (
    <div className="relative">
      <AboutHero />
      <MissionStatement />
      <PromiseStruggling />
      <PromiseHoldSpace />
      <VideoIntro />
      <TechShowcase />

      {/* Secondary CTA: Join the Crew */}
      <SectionWrapper>
        <VolunteerCTA variant="card" />
      </SectionWrapper>

      {/* Primary CTA: Join Meeting */}
      <SectionWrapper>
        <div className="text-center">
          <MeetingCTA variant="hero" />
        </div>
      </SectionWrapper>
    </div>
  )
}