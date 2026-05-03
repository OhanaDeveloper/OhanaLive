"use client"

import { ArrowRight } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import { MEETING_INFO } from "@/lib/meetings"

export default function JoinNowButton() {
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
