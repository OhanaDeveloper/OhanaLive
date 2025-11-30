import ResourcesHero from "@/components/resources/ResourcesHero"
import WorksheetGrid from "@/components/resources/WorksheetGrid"
import MyWorksheetsSection from "@/components/resources/MyWorksheetsSection"
import ResourcesCTA from "@/components/resources/ResourcesCTA"
import CollapsibleSection from "@/components/ui/CollapsibleSection"

export default function ResourcesPage() {
  return (
    <div className="relative">
      <ResourcesHero />

      <CollapsibleSection title="My Progress" defaultOpen={false}>
        <MyWorksheetsSection />
      </CollapsibleSection>

      <CollapsibleSection title="All Worksheets" defaultOpen={false}>
        <WorksheetGrid />
      </CollapsibleSection>

      <CollapsibleSection title="Need Help?" defaultOpen={false}>
        <ResourcesCTA />
      </CollapsibleSection>
    </div>
  )
}
