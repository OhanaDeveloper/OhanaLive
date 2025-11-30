import StoryHero from "@/components/story/StoryHero"
import StoryTimeline from "@/components/story/StoryTimeline"
import StoryQuotes from "@/components/story/StoryQuotes"
import StoryValues from "@/components/story/StoryValues"
import StoryCTA from "@/components/story/StoryCTA"
import CollapsibleSection from "@/components/ui/CollapsibleSection"

export const dynamic = 'force-static'
export const revalidate = 3600

export default function StoryPage() {
  return (
    <div className="relative">
      <StoryHero />

      <CollapsibleSection title="Our Journey" defaultOpen={false}>
        <StoryTimeline />
      </CollapsibleSection>

      <CollapsibleSection title="Voices From Our Community" defaultOpen={false}>
        <StoryQuotes />
      </CollapsibleSection>

      <CollapsibleSection title="Our Core Values" defaultOpen={false}>
        <StoryValues />
      </CollapsibleSection>

      <CollapsibleSection title="Join Our Story" defaultOpen={false}>
        <StoryCTA />
      </CollapsibleSection>
    </div>
  )
}
