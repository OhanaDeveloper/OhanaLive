"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Clock, Radio } from "lucide-react"
import { MEETING_INFO } from "@/lib/meetings"
import { getMeetingStatus, type MeetingStatusInfo } from "@/lib/meetingTime"

interface MeetingStatusProps {
  compact?: boolean
  className?: string
}

export default function MeetingStatus({ compact = false, className = "" }: MeetingStatusProps) {
  const [status, setStatus] = useState<MeetingStatusInfo | null>(null)

  useEffect(() => {
    const update = () => setStatus(getMeetingStatus())
    update()
    const timer = setInterval(update, 60000)
    return () => clearInterval(timer)
  }, [])

  if (!status) {
    return (
      <div className={`rounded-xl bg-dark-900/60 p-4 ${className}`}>
        <div className="h-5 w-56 max-w-full animate-pulse rounded bg-dark-700" />
      </div>
    )
  }

  const message = status.isLive
    ? "Meeting is live. Join anytime."
    : status.state === "starting-soon"
      ? `Tonight's meeting starts in ${status.countdownLabel}.`
      : `Next meeting tonight at ${status.localStartLabel}.`

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl ${
        status.isLive ? "bg-teal/10 shadow-lg shadow-teal/10" : "bg-dark-900/70"
      } backdrop-blur-sm ${compact ? "px-4 py-3" : "px-5 py-4"} ${className}`}
    >
      <div className="flex items-center justify-center gap-3 text-left">
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dark-950/80">
          {status.isLive && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal/30" />
          )}
          {status.isLive ? (
            <Radio className="relative h-4 w-4 text-teal" aria-hidden="true" />
          ) : (
            <Clock className="h-4 w-4 text-teal" aria-hidden="true" />
          )}
        </span>
        <div>
          <p className={`font-semibold ${status.isLive ? "text-teal" : "text-gray-100"}`}>
            {message}
          </p>
          <p className="mt-0.5 text-xs text-gray-400">
            {status.localStartLabel} - {status.localEndLabel} your time · {MEETING_INFO.label}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

