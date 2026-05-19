// Placeholder shell. Real content is built in §3 of the cleanup spec.
// The contribution-paths directory lives here.

import SupportHero from "@/components/support/SupportHero"
import ContributionPaths from "@/components/support/ContributionPaths"

export const metadata = {
  title: "Support Ohana Recovery",
  description:
    "Ohana stays open because people show up. Here are the ways you can be part of how it stays open.",
}

export default function SupportPage() {
  return (
    <>
      <SupportHero />
      <ContributionPaths />
    </>
  )
}
