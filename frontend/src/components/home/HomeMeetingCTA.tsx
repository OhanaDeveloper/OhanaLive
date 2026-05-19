"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Video } from "lucide-react"
import { meetingLinkProps } from "@/lib/meetingLink"
import { getMeetingStatus, type MeetingStatusInfo } from "@/lib/meetingTime"

interface Props {
  className?: string
}

export default function HomeMeetingCTA({ className = "" }: Props) {
  const [status, setStatus] = useState<MeetingStatusInfo | null>(null)

  useEffect(() => {
    const update = () => setStatus(getMeetingStatus())
    update()
    const timer = setInterval(update, 60000)
    return () => clearInterval(timer)
  }, [])

  if (!status) {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        <div className="h-14 w-72 max-w-full animate-pulse rounded-xl bg-dark-800/60" />
        <div className="h-3 w-44 animate-pulse rounded bg-dark-800/60" />
      </div>
    )
  }

  if (status.isLive) {
    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <span className="inline-flex items-center gap-2 rounded-full bg-teal/15 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-teal">
          <span className="ohana-live-dot h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
          Live now
        </span>

        <a
          {...meetingLinkProps("home_hero_live")}
          className="ohana-live-breathe group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-teal to-teal-dark px-8 py-4 md:px-10 md:py-5 text-base md:text-xl font-black text-dark-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <span className="ohana-live-halo absolute inset-0 rounded-2xl" aria-hidden="true" />
          <Video className="relative h-5 w-5" aria-hidden="true" />
          <span className="relative">Join the Zoom room</span>
          <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </a>

        <p className="text-sm text-gray-400">
          Open until {status.localEndLabel} · come as you are
        </p>
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <a
        {...meetingLinkProps("home_hero")}
        className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-teal via-gold to-purple px-7 py-4 md:px-9 md:py-5 text-base md:text-xl font-black text-dark-950 shadow-xl shadow-teal/30 transition-shadow hover:shadow-teal/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <Video className="h-5 w-5" aria-hidden="true" />
        Join Tonight&apos;s Meeting
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
      <p className="text-sm text-gray-400">
        Next: {status.localStartLabel} · Free · Anonymous
      </p>
    </div>
  )
}
