import SectionWrapper from "@/components/layout/SectionWrapper"
import MeetingSection from "@/components/home/MeetingSection"

export default function HomePage() {
  return (
    <>
      <MeetingSection />
      <SectionWrapper
        id="home"
        title="Welcome to Ohana Live"
        subtitle="Minimalist. Responsive. Interactive."
        animation="slide"
      >
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Ohana Live is a place for connection — where technology and recovery
          meet through community, creativity, and real conversation.
        </p>
      </SectionWrapper>
    </>
  )
}
