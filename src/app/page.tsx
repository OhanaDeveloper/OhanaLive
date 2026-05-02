import HomeHero from "@/components/home/HomeHero"
import MissionStatement from "@/components/about/MissionStatement"
import MeetingSection from "@/components/home/MeetingSection"
import PromiseStruggling from "@/components/about/PromiseStruggling"
import PromiseHoldSpace from "@/components/about/PromiseHoldSpace"
import VideoIntro from "@/components/about/VideoIntro"
import TechShowcase from "@/components/about/TechShowcase"
import VolunteerCTA from "@/components/shared/VolunteerCTA"
import MeetingCTA from "@/components/shared/MeetingCTA"
import SectionWrapper from "@/components/ui/SectionWrapper"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <MissionStatement />
      <MeetingSection />
      <PromiseStruggling />
      <PromiseHoldSpace />
      <VideoIntro />
      <TechShowcase />

      <SectionWrapper>
        <VolunteerCTA variant="card" />
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center">
          <MeetingCTA variant="hero" />
        </div>
      </SectionWrapper>
    </>
  )
}
