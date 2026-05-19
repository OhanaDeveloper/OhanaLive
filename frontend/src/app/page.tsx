import HomeHero from "@/components/home/HomeHero"
import MissionStatement from "@/components/about/MissionStatement"
import PromiseStruggling from "@/components/about/PromiseStruggling"
import PromiseHoldSpace from "@/components/about/PromiseHoldSpace"
import VideoIntro from "@/components/about/VideoIntro"
import ChoosePathSection from "@/components/home/ChoosePathSection"
import FeaturedWorksheetSection from "@/components/home/FeaturedWorksheetSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import MeetingCTA from "@/components/shared/MeetingCTA"
import SectionWrapper from "@/components/ui/SectionWrapper"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ChoosePathSection />
      <MissionStatement />
      <TestimonialsSection />

      <section className="px-4 py-20 md:py-24 text-center">
        <p className="mx-auto max-w-2xl text-2xl font-light leading-relaxed text-gray-300 md:text-3xl">
          A live recovery space, kept simple and accessible.
        </p>
      </section>

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
