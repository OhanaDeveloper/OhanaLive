import StoryHero from "@/components/story/StoryHero"
import StoryTimeline from "@/components/story/StoryTimeline"
import StoryQuotes from "@/components/story/StoryQuotes"
import StoryValues from "@/components/story/StoryValues"
import StoryCTA from "@/components/story/StoryCTA"

export default function StoryPage() {
  return (
    <div className="relative">
      <StoryHero />
      <StoryTimeline />
      <StoryQuotes />
      <StoryValues />
      <StoryCTA />
    </div>
  )
}
