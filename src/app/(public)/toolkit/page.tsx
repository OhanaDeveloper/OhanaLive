import ResourcesHero from '@/components/resources/ResourcesHero'
import AccountSignupPromo from '@/components/resources/AccountSignupPromo'
import ResourcesCTA from '@/components/resources/ResourcesCTA'
import MeetingCTA from '@/components/shared/MeetingCTA'
import SectionWrapper from '@/components/ui/SectionWrapper'
import WorksheetExplorerClient from '@/features/resources/components/WorksheetExplorerClient'

export default function ResourcesPage() {
  return (
    <div className="relative">
      <ResourcesHero />
      <AccountSignupPromo />

      <SectionWrapper>
        <WorksheetExplorerClient />
      </SectionWrapper>

      <ResourcesCTA />

      <SectionWrapper>
        <div className="text-center">
          <MeetingCTA variant="hero" />
        </div>
      </SectionWrapper>
    </div>
  )
}
