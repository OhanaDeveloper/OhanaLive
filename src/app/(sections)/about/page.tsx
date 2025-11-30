import AboutHero from "@/components/about/AboutHero"
import MissionStatement from "@/components/about/MissionStatement"
import PromiseStruggling from "@/components/about/PromiseStruggling"
import PromiseHoldSpace from "@/components/about/PromiseHoldSpace"
import TechShowcase from "@/components/about/TechShowcase"
import CollapsibleSection from "@/components/ui/CollapsibleSection"

export const dynamic = 'force-static'
export const revalidate = 3600

export default function AboutPage() {
  return (
    <div className="relative">
      <AboutHero />

      <CollapsibleSection title="Our Mission" defaultOpen={false}>
        <MissionStatement />
      </CollapsibleSection>

      <CollapsibleSection title="For Those Struggling" defaultOpen={false}>
        <PromiseStruggling />
      </CollapsibleSection>

      <CollapsibleSection title="Our Promise" defaultOpen={false}>
        <PromiseHoldSpace />
      </CollapsibleSection>

      <CollapsibleSection title="Built With Purpose" defaultOpen={false}>
        <TechShowcase />
      </CollapsibleSection>
    </div>
  )
}