"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MEETING_INFO } from "@/lib/meetings"

interface TonightsMeeting {
  host?: {
    id: string
    public_handle: string
    first_name: string
    avatar_url?: string
    pronouns?: string
  }
  theme?: string
  zoom_link?: string
}

export default function MeetingSection() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState("")
  const [isLive, setIsLive] = useState(false)
  const [tonightsMeeting, setTonightsMeeting] = useState<TonightsMeeting | null>(null)
  const [loadingMeeting, setLoadingMeeting] = useState(true)

  const { zoomLink, startHour, endHour, timeZone } = MEETING_INFO

  useEffect(() => {
    setMounted(true)

    // Fetch tonight's meeting info — only when API URL is explicitly configured
    const fetchTonightsMeeting = async () => {
      const apiBase = process.env.NEXT_PUBLIC_API_URL
      if (!apiBase) {
        setLoadingMeeting(false)
        return
      }
      try {
        const response = await fetch(`${apiBase}/api/recovery/meetings/tonight/`)
        if (response.ok) {
          const data = await response.json()
          setTonightsMeeting(data)
        } else {
          setTonightsMeeting(null)
        }
      } catch {
        setTonightsMeeting(null)
      } finally {
        setLoadingMeeting(false)
      }
    }

    fetchTonightsMeeting()

    const updateCountdown = () => {
      const now = new Date()
      const pacificNow = new Date(
        now.toLocaleString("en-US", { timeZone })
      )

      // Define start and end times for today's meeting
      let meetingStart = new Date(pacificNow)
      meetingStart.setHours(startHour, 0, 0, 0)

      let meetingEnd = new Date(pacificNow)
      if (endHour < startHour) {
        meetingEnd.setDate(meetingEnd.getDate() + 1)
      }
      meetingEnd.setHours(endHour, 0, 0, 0)

      // Determine live state
      if (pacificNow >= meetingStart && pacificNow <= meetingEnd) {
        setIsLive(true)
        setTimeLeft("Now Live!")
      } else {
        setIsLive(false)
        // If already past today's meeting start, calculate next day's
        if (pacificNow > meetingStart) meetingStart.setDate(meetingStart.getDate() + 1)

        const diff = meetingStart.getTime() - pacificNow.getTime()
        const hours = Math.floor(diff / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`)
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [startHour, endHour, timeZone])

  if (!mounted) {
    return (
      <section className="py-12 text-center bg-gradient-to-b from-black/80 to-dark-900/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto space-y-4 px-4">
          <div className="h-12 w-96 mx-auto bg-dark-700 rounded-lg animate-pulse" />
          <div className="h-6 w-full max-w-2xl mx-auto bg-dark-700 rounded animate-pulse" />
          <div className="h-6 w-3/4 mx-auto bg-dark-700 rounded animate-pulse" />
          <div className="mt-8 h-64 max-w-xl mx-auto bg-dark-800 rounded-2xl animate-pulse" />
        </div>
      </section>
    )
  }

  return (
    <section id="meeting" className="py-12 text-center bg-gradient-to-b from-black/80 to-dark-900/80 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto space-y-4 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-teal"
        >
          Tonight's Meeting
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          Ohana Live meets every night from 11 PM – 3 AM (Pacific). It&apos;s a space
          for connection, raw honesty, and community. Expect candid conversation,
          practical recovery, and real people. No judgment, no preaching.
        </motion.p>

        {/* Tonight's Host Display */}
        {!loadingMeeting && tonightsMeeting?.host && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 bg-dark-800/60 backdrop-blur-md border border-teal/20 rounded-xl p-6 shadow-lg"
          >
            <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">Tonight&apos;s Host</p>
            <div className="flex items-center gap-4">
              {tonightsMeeting.host.avatar_url ? (
                <img
                  src={tonightsMeeting.host.avatar_url}
                  alt={tonightsMeeting.host.public_handle}
                  className="w-16 h-16 rounded-full border-2 border-teal/30 object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full border-2 border-teal/30 bg-dark-700 flex items-center justify-center">
                  <span className="text-2xl text-teal">
                    {tonightsMeeting.host.first_name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-teal">
                  {tonightsMeeting.host.public_handle}
                </h3>
                {tonightsMeeting.host.pronouns && (
                  <p className="text-gray-400 text-sm">({tonightsMeeting.host.pronouns})</p>
                )}
                {tonightsMeeting.theme && (
                  <p className="text-gray-300 text-sm mt-1">
                    Theme: <span className="text-white">{tonightsMeeting.theme}</span>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-dark-900/60 backdrop-blur-md border border-dark-800 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isLive ? "Meeting in Progress" : "Next Meeting Starts In"}
            </h2>

            <motion.p
              key={timeLeft}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              className={`text-4xl font-mono mb-6 ${
                isLive ? "text-teal animate-pulse" : "text-teal"
              }`}
            >
              {timeLeft}
            </motion.p>

            <motion.a
              href={tonightsMeeting?.zoom_link || zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{ willChange: "transform" }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                isLive
                  ? "bg-gradient-to-r from-teal to-teal-dark text-dark-950 shadow-teal/30 hover:shadow-teal/50"
                  : "bg-dark-800 border border-dark-700 hover:border-teal/40 text-gray-100"
              }`}
              aria-label={isLive ? "Join the live Ohana Recovery meeting on Zoom" : "Get the Ohana Recovery meeting link"}
            >
              {isLive ? (
                <>
                  <span className="relative flex h-3 w-3" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dark-950 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-dark-950" />
                  </span>
                  Join Now — We're Live
                </>
              ) : (
                "Get the Meeting Link →"
              )}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}