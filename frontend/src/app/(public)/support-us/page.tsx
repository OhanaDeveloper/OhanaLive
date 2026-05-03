import GiveHero from "@/components/give/GiveHero"
import GivingTiers from "@/components/give/GivingTiers"

export const metadata = {
  title: "Support Ohana Recovery",
  description:
    "Help keep Ohana Recovery free, ad-free, and available every night. See the cost breakdown and support through Ko-fi.",
}

export default function SupportUsPage() {
  return (
    <>
      <GiveHero />
      <GivingTiers />
    </>
  )
}
