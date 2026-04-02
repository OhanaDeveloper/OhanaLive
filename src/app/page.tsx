import MeetingSection from "@/components/home/MeetingSection"
import FeaturesSection from "@/components/home/FeaturesSection"
import HomeHero from "@/components/home/HomeHero"
import DonationCTA from "@/components/home/DonationCTA"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <MeetingSection />
      <DonationCTA />
      <FeaturesSection />
    </>
  )
}
