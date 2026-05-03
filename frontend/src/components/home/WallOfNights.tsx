"use client"

import { CalendarCheck, Moon, Users } from "lucide-react"
import { NIGHTLY_MEETING_START_DATE } from "@/lib/meetings"

function getNightCount() {
  const start = new Date(`${NIGHTLY_MEETING_START_DATE}T00:00:00-08:00`)
  const today = new Date()
  const msPerDay = 1000 * 60 * 60 * 24

  return Math.max(1, Math.floor((today.getTime() - start.getTime()) / msPerDay) + 1)
}

export default function WallOfNights() {
  const nightCount = getNightCount()

  const stats = [
    { icon: Moon, value: nightCount.toLocaleString(), label: "nights with a room open", accent: "teal" },
    { icon: CalendarCheck, value: "365", label: "days a year", accent: "gold" },
    { icon: Users, value: "11 PM-3 AM", label: "Pacific, every night", accent: "purple" },
  ]

  return (
    <section className="px-4 py-14 md:py-20">
      <div className="mx-auto max-w-6xl rounded-lg border border-dark-700 bg-dark-900/55 p-6 md:p-8">
        <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block text-sm font-mono uppercase tracking-widest text-teal/80">
              Wall of Nights
            </span>
            <h2 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Consistency is part of the promise.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-gray-400">
            A year of late-night availability means people can count on the room being there when the rest of the world is quiet.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
                className={`rounded-lg border bg-dark-950/45 p-5 ${
                  stat.accent === "gold"
                    ? "border-gold/30"
                    : stat.accent === "purple"
                      ? "border-purple/30"
                      : "border-teal/30"
                }`}
              >
                <Icon
                  className={`mb-4 h-5 w-5 ${
                    stat.accent === "gold"
                      ? "text-gold"
                      : stat.accent === "purple"
                        ? "text-purple"
                        : "text-teal"
                  }`}
                />
                <p className="text-3xl font-black text-gray-100">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
