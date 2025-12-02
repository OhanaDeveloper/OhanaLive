import StoryHero from "@/components/story/StoryHero"
import StoryTimeline from "@/components/story/StoryTimeline"
import StoryQuotes from "@/components/story/StoryQuotes"
import StoryValues from "@/components/story/StoryValues"
import StoryCTA from "@/components/story/StoryCTA"
import ShareStoryCTA from "@/components/shared/ShareStoryCTA"
import MeetingCTA from "@/components/shared/MeetingCTA"
import SectionWrapper from "@/components/layout/SectionWrapper"

export const dynamic = 'force-static'
export const revalidate = 3600

export default function StoryPage() {
  return (
    <div className="relative">
      <StoryHero />
      <StoryTimeline />
      <StoryQuotes />
      <StoryValues />
      <StoryCTA />

      {/* Secondary CTA: Share Your Story */}
      <SectionWrapper>
        <ShareStoryCTA variant="card" />
      </SectionWrapper>

      {/* Primary CTA: Join Meeting */}
      <SectionWrapper>
        <div className="text-center">
          <MeetingCTA variant="hero" />
        </div>
      </SectionWrapper>
    </div>
  )
}
