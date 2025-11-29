import ResourcesHero from "@/components/resources/ResourcesHero"
import WorksheetGrid from "@/components/resources/WorksheetGrid"
import MyWorksheetsSection from "@/components/resources/MyWorksheetsSection"
import ResourcesCTA from "@/components/resources/ResourcesCTA"

export default function ResourcesPage() {
  return (
    <div className="relative">
      <ResourcesHero />
      <MyWorksheetsSection />
      <WorksheetGrid />
      <ResourcesCTA />
    </div>
  )
}
