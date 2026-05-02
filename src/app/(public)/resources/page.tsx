import ResourcesHero from "@/components/resources/ResourcesHero"
import WorksheetGrid from "@/components/resources/WorksheetGrid"
import AccountSignupPromo from "@/components/resources/AccountSignupPromo"
import ResourcesCTA from "@/components/resources/ResourcesCTA"
import MeetingCTA from "@/components/shared/MeetingCTA"
import SectionWrapper from "@/components/ui/SectionWrapper"

export default function ResourcesPage() {
  return (
    <div className="relative">
      <ResourcesHero />
      <AccountSignupPromo />
      <WorksheetGrid />
      <ResourcesCTA />

      {/* Primary CTA: Join Meeting */}
      <SectionWrapper>
        <div className="text-center">
          <MeetingCTA variant="hero" />
        </div>
      </SectionWrapper>
    </div>
  )
}
