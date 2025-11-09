"use client"

import { useEffect, useState } from "react"
import { MEETING_INFO } from "@/lib/meetings"

export default function MeetingSection() {
  const [timeLeft, setTimeLeft] = useState("")
  const [isLive, setIsLive] = useState(false)

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
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [startHour, endHour, timeZone])

  return (
      <section className="py-24 text-center bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-accent">Ohana Live Meetings</h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Ohana Live meets every night from 11 PM – 3 AM (Pacific). It’s a space
            for connection, raw honesty, and community. Expect candid conversation,
            practical recovery, and real people — no judgment, no preaching.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isLive ? "Meeting in Progress" : "Next Meeting Starts In"}
            </h2>

            <p className="text-3xl font-mono text-accent mb-6">{timeLeft}</p>

            <a
                href={zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-lg font-semibold text-white transition ${
                    isLive
                        ? "bg-accent hover:bg-accent-light animate-pulse"
                        : "bg-gray-700 hover:bg-gray-600"
                }`}
            >
              {isLive ? "JOIN NOW" : "Join Waiting Room"}
            </a>
          </div>
        </div>
      </section>
  )
}