"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MEETING_INFO } from "@/lib/meetings"

export default function MeetingSection() {
  const [timeLeft, setTimeLeft] = useState("")
  const [isLive, setIsLive] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const { zoomLink, startHour, endHour, timeZone } = MEETING_INFO

  useEffect(() => {
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

      setIsLoading(false)
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [startHour, endHour, timeZone])

  return (
    <section className="py-24 text-center bg-gradient-to-b from-black/80 to-dark-900/80 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto space-y-6 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-teal"
        >
          Ohana Live Meetings
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          Ohana Live meets every night from 11 PM – 3 AM (Pacific). It&apos;s a space
          for connection, raw honesty, and community. Expect candid conversation,
          practical recovery, and real people — no judgment, no preaching.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
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

            {isLoading ? (
              <div className="h-10 w-48 mx-auto bg-dark-700 rounded animate-pulse mb-6" />
            ) : (
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
            )}

            <motion.a
              href={zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`inline-block px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all shadow-lg ${
                isLive
                  ? "bg-teal hover:bg-teal-light shadow-accent/30"
                  : "bg-dark-700 hover:bg-gray-600"
              }`}
            >
              {isLive ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="inline-block w-3 h-3 bg-white rounded-full"
                  />
                  JOIN NOW
                </span>
              ) : (
                "Join Waiting Room"
              )}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}