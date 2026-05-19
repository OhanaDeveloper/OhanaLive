"use client"

import { ArrowRight, LifeBuoy } from "lucide-react"
import Link from "next/link"
import { trackEvent } from "@/lib/analytics"
import { MEETING_INFO, isMeetingLinkAvailable } from "@/lib/meetings"

export default function JoinNowButton() {
  if (!isMeetingLinkAvailable()) {
    return (
      <Link
        href="/recovery-network"
        className="inline-flex items-center justify-center gap-3 rounded-xl border border-gold/40 bg-gold/10 px-8 py-4 text-lg font-bold text-gold transition-colors hover:bg-gold/15"
      >
        <LifeBuoy className="h-5 w-5" aria-hidden="true" />
        Find another room tonight
      </Link>
    )
  }

  return (
    <a
      href={MEETING_INFO.zoomLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        window.sessionStorage.setItem("ohana-meeting-intro-seen", "true")
        trackEvent("meeting_link_click", { source: "meeting_page" })
      }}
      className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-teal to-teal-dark px-8 py-4 text-lg font-bold text-dark-950 shadow-lg shadow-teal/20 transition-shadow hover:shadow-teal/40"
    >
      Join Now
      <ArrowRight className="h-5 w-5" aria-hidden="true" />
    </a>
  )
}
