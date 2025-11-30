import MeetingSection from "@/components/home/MeetingSection"
import FeaturesSection from "@/components/home/FeaturesSection"
import CollapsibleSection from "@/components/ui/CollapsibleSection"

export default function HomePage() {
  return (
    <>
      <MeetingSection />

      <CollapsibleSection title="Welcome to Ohana Live" subtitle="Minimalist. Responsive. Interactive." defaultOpen={false}>
        <div className="text-center py-8">
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Ohana Live is a place for connection — where technology and recovery
            meet through community, creativity, and real conversation.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="What Makes Us Different" defaultOpen={false}>
        <FeaturesSection />
      </CollapsibleSection>
    </>
  )
}
