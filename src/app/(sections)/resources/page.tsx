import ResourcesHero from "@/components/resources/ResourcesHero"
import WorksheetGrid from "@/components/resources/WorksheetGrid"
import ResourcesCTA from "@/components/resources/ResourcesCTA"

export default function ResourcesPage() {
  return (
    <div className="relative">
      <ResourcesHero />
      <WorksheetGrid />
      <ResourcesCTA />
    </div>
  )
}
