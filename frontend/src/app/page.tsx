import HomeHero from "@/components/home/HomeHero"
import MissionStatement from "@/components/about/MissionStatement"
import PromiseStruggling from "@/components/about/PromiseStruggling"
import PromiseHoldSpace from "@/components/about/PromiseHoldSpace"
import VideoIntro from "@/components/about/VideoIntro"
import ChoosePathSection from "@/components/home/ChoosePathSection"
import FeaturedWorksheetSection from "@/components/home/FeaturedWorksheetSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import WallOfNights from "@/components/home/WallOfNights"
import MeetingCTA from "@/components/shared/MeetingCTA"
import SectionWrapper from "@/components/ui/SectionWrapper"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ChoosePathSection />
      <MissionStatement />
      <TestimonialsSection />
      <WallOfNights />
      <PromiseStruggling />
      <FeaturedWorksheetSection />
      <PromiseHoldSpace />
      <VideoIntro />

      <SectionWrapper>
        <div className="text-center">
          <MeetingCTA variant="hero" />
        </div>
      </SectionWrapper>
    </>
  )
}
