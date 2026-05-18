"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Video } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import { MEETING_INFO, isMeetingLinkAvailable } from "@/lib/meetings"
import { getMeetingStatus, type MeetingStatusInfo } from "@/lib/meetingTime"

export default function FloatingJoinMeetingButton() {
  const [status, setStatus] = useState<MeetingStatusInfo | null>(null)

  useEffect(() => {
    const update = () => setStatus(getMeetingStatus())
    update()
    const timer = setInterval(update, 60000)
    return () => clearInterval(timer)
  }, [])

  if (!status) return null

  const isLive = status.isLive

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="fixed bottom-36 right-4 z-[55] md:bottom-28 md:right-6"
    >
      <Link
        href="/meeting"
        onClick={(event) => {
          if (!isMeetingLinkAvailable()) {
            // Let Next.js route to /meeting so the fallback page renders.
            return
          }
          const hasSeenIntro = window.sessionStorage.getItem("ohana-meeting-intro-seen") === "true"
          if (hasSeenIntro) {
            event.preventDefault()
            trackEvent("meeting_link_click", { source: "floating_button" })
            window.open(MEETING_INFO.zoomLink, "_blank", "noopener,noreferrer")
          }
        }}
        className={`group relative flex max-w-[12rem] items-center gap-2 rounded-full border px-4 py-3 text-sm font-bold shadow-xl backdrop-blur-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
          isLive
            ? "border-teal/50 bg-gradient-to-r from-teal to-teal-dark text-dark-950 shadow-teal/30"
            : "border-dark-700 bg-dark-900/85 text-gray-200 hover:border-teal/40"
        }`}
      >
        {isLive && <span className="absolute inset-0 animate-pulse rounded-full bg-teal/20" />}
        <Video className="relative h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="relative leading-tight">
          {isLive ? "Join live meeting" : `Next: ${status.localStartLabel}`}
        </span>
      </Link>
    </motion.div>
  )
}
