import dynamic from 'next/dynamic'
import ResourcesHero from '@/components/resources/ResourcesHero'
import AccountSignupPromo from '@/components/resources/AccountSignupPromo'
import ResourcesCTA from '@/components/resources/ResourcesCTA'
import MeetingCTA from '@/components/shared/MeetingCTA'
import SectionWrapper from '@/components/ui/SectionWrapper'

const WorksheetExplorer = dynamic(
  () => import('@/features/resources/components/WorksheetExplorer'),
  { ssr: false }
)

export default function ResourcesPage() {
  return (
    <div className="relative">
      <ResourcesHero />
      <AccountSignupPromo />

      <SectionWrapper>
        <WorksheetExplorer />
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
