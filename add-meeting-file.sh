#!/bin/bash
echo "🚀 Adding MeetingSection component and updating Home page..."

# Ensure the home component directory exists
mkdir -p src/components/home

# Create MeetingSection.tsx
cat > src/components/home/MeetingSection.tsx << 'EOF'
"use client"

import { useEffect, useState } from "react"

const MEETING_START_HOUR = 23 // 11 PM Pacific
const MEETING_END_HOUR = 3   // 3 AM Pacific (next day)
const ZOOM_LINK = "https://zoom.us/j/XXXXXXXXXX" // replace with your actual meeting link

export default function MeetingSection() {
  const [timeLeft, setTimeLeft] = useState("")
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const pacificNow = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
      )

      let meetingStart = new Date(pacificNow)
      meetingStart.setHours(MEETING_START_HOUR, 0, 0, 0)

      let meetingEnd = new Date(pacificNow)
      if (MEETING_END_HOUR < MEETING_START_HOUR) {
        meetingEnd.setDate(meetingEnd.getDate() + 1)
      }
      meetingEnd.setHours(MEETING_END_HOUR, 0, 0, 0)

      if (pacificNow >= meetingStart && pacificNow <= meetingEnd) {
        setIsLive(true)
        setTimeLeft("Now Live!")
      } else {
        setIsLive(false)
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
  }, [])

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
            href={ZOOM_LINK}
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
EOF

# Overwrite src/app/page.tsx with updated content
cat > src/app/page.tsx << 'EOF'
import SectionWrapper from "@/components/layout/SectionWrapper"
import MeetingSection from "@/components/home/MeetingSection"

export default function HomePage() {
  return (
    <>
      <MeetingSection />
      <SectionWrapper
        id="home"
        title="Welcome to Ohana Live"
        subtitle="Minimalist. Responsive. Interactive."
        animation="slide"
      >
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Ohana Live is a place for connection — where technology and recovery
          meet through community, creativity, and real conversation.
        </p>
      </SectionWrapper>
    </>
  )
}
EOF

echo "✅ MeetingSection component added and Home page updated successfully!"
echo "💡 Run 'npm run dev' to verify the countdown and live meeting functionality."
