"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

type TimelineEvent = {
  year: string
  title: string
  description: string
  highlight?: boolean
  image: string
  imageAlt: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "The Beginning",
    title: "A Late Night Realization",
    description:
      "It started with a simple truth: the hardest hours of recovery are often the loneliest. When the world sleeps, the mind races. We knew there had to be a better way.",
    highlight: true,
    image: "https://images.unsplash.com/photo-1532978379173-523e16f371f2?w=600&q=80",
    imageAlt: "Person alone at night looking at city lights",
  },
  {
    year: "The Vision",
    title: "Building a Digital Campfire",
    description:
      "We imagined a space that felt like sitting around a fire with people who understood — no pretense, no program agenda, just human connection when it matters most.",
    image: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=600&q=80",
    imageAlt: "Warm campfire glowing in darkness",
  },
  {
    year: "First Steps",
    title: "The First Meeting",
    description:
      "Three people on a Zoom call at 1 AM. Awkward silences became honest conversations. Strangers became friends. That first meeting changed everything.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    imageAlt: "Laptop screen glowing in dark room",
  },
  {
    year: "Growing",
    title: "Word Spread Quietly",
    description:
      "No marketing, no promotions. Just people telling other people: 'There's this thing at night. You should check it out.' The community grew organically, one sleepless night at a time.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    imageAlt: "Group of friends talking together",
  },
  {
    year: "Today",
    title: "Every Night, We Show Up",
    description:
      "Now Ohana Live is a nightly gathering of souls navigating recovery together. Some nights we laugh. Some nights we cry. Every night, nobody faces it alone.",
    highlight: true,
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80",
    imageAlt: "People gathered together sharing a moment",
  },
  {
    year: "Tomorrow",
    title: "The Story Continues",
    description:
      "This isn't an ending — it's an invitation. The next chapter of Ohana Live includes you. Your story. Your voice. Your presence in the late-night hours.",
    image: "https://images.unsplash.com/photo-1464639351491-a172c2aa2911?w=600&q=80",
    imageAlt: "Sunrise over horizon representing new beginnings",
  },
]

function TimelineItem({
  event,
  index,
}: {
  event: TimelineEvent
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -50 : 50, 0, 0]
  )
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, scale }}
      className={`relative flex items-center gap-8 ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        className={`flex-1 rounded-2xl border backdrop-blur-sm overflow-hidden ${
          event.highlight
            ? "bg-accent/10 border-accent/30 shadow-lg shadow-accent/10"
            : "bg-gray-900/50 border-gray-800"
        }`}
      >
        {/* Image */}
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
          <div
            className={`absolute bottom-3 left-4 text-sm font-mono ${
              event.highlight ? "text-accent" : "text-gray-400"
            }`}
          >
            {event.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-100 mb-3">{event.title}</h3>
          <p className="text-gray-400 leading-relaxed">{event.description}</p>
        </div>
      </motion.div>

      {/* Timeline Node */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className={`w-4 h-4 rounded-full z-10 ${
            event.highlight ? "bg-accent shadow-lg shadow-accent/50" : "bg-gray-600"
          }`}
        />
        {index < timelineEvents.length - 1 && (
          <div className="w-0.5 h-32 bg-gradient-to-b from-gray-600 to-transparent" />
        )}
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1" />
    </motion.div>
  )
}

export default function StoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative py-16">
      {/* Animated center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-gradient-to-b from-accent via-accent/50 to-transparent"
        />
      </div>

      {/* Timeline events */}
      <div className="relative space-y-8 max-w-4xl mx-auto px-4">
        {timelineEvents.map((event, index) => (
          <TimelineItem key={event.title} event={event} index={index} />
        ))}
      </div>
    </div>
  )
}
