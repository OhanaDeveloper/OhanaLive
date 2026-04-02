import GiveHero from "@/components/give/GiveHero"
import GivingTiers from "@/components/give/GivingTiers"

export const metadata = {
  title: "Support Ohana Recovery: Fund the ʻOhana",
  description:
    "Every night of meetings costs about $7. Community-funded, no ads, free always. Choose how you want to help.",
}

export default function GivePage() {
  return (
    <>
      <GiveHero />
      <GivingTiers />
    </>
  )
}
