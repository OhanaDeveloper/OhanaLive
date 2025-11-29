import AboutHero from "@/components/about/AboutHero"
import MissionStatement from "@/components/about/MissionStatement"
import PromiseStruggling from "@/components/about/PromiseStruggling"
import PromiseHoldSpace from "@/components/about/PromiseHoldSpace"
import TechShowcase from "@/components/about/TechShowcase"

export const dynamic = 'force-static'
export const revalidate = 3600

export default function AboutPage() {
  return (
    <div className="relative">
      <AboutHero />
      <MissionStatement />
      <PromiseStruggling />
      <PromiseHoldSpace />
      <TechShowcase />
    </div>
  )
}