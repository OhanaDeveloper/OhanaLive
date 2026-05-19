"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, HeartHandshake, Video } from "lucide-react"
import MeetingStatus from "@/components/shared/MeetingStatus"
import { meetingLinkProps } from "@/lib/meetingLink"

const paths = [
  {
    icon: Video,
    title: "Join tonight",
    description: "Go straight to the nightly Zoom room. No interstitial, no sign-up.",
    href: "",
    external: true,
    cta: "Join the meeting",
    accent: "from-teal/20 to-teal/10",
    badge: "teal",
  },
  {
    icon: HeartHandshake,
    title: "Understand the space",
    description: "Read the story behind Ohana and what makes this peer-led recovery room different.",
    href: "/story",
    cta: "Read our story",
    accent: "from-gold/20 to-gold/10",
    badge: "gold",
  },
  {
    icon: BookOpen,
    title: "Work through something",
    description: "Use practical recovery worksheets for urges, reflection, grounding, relapse prevention, and daily care.",
    href: "/toolkit",
    cta: "Open the toolkit",
    accent: "from-purple/20 to-purple/10",
    badge: "purple",
  },
]

export default function ChoosePathSection() {
  return (
    <section className="px-4 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="mb-3 block text-sm font-mono uppercase tracking-widest text-teal/80">
              Choose Your Path
            </span>
            <h2 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Start with what you need right now.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
            No account, intake, or explanation required. Pick the doorway that fits the moment.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {paths.map((path, index) => {
            const Icon = path.icon
            const cardClass = `group flex h-full flex-col rounded-lg bg-gradient-to-br ${path.accent} p-6 transition-colors hover:bg-dark-900`
            const inner = (
              <>
                <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-lg ${
                  path.badge === "gold"
                    ? "bg-gold/10 text-gold"
                    : path.badge === "purple"
                      ? "bg-purple/10 text-purple"
                      : "bg-teal/10 text-teal"
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-100 transition-colors group-hover:text-teal">
                  {path.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
                  {path.description}
                </p>
                <div className={`mt-5 h-0.5 w-16 rounded-full ${
                  path.badge === "gold"
                    ? "bg-gold"
                    : path.badge === "purple"
                      ? "bg-purple"
                      : "bg-teal"
                }`} />
                <span className="mt-6 text-sm font-semibold text-teal">
                  {path.cta} →
                </span>
              </>
            )

            return (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                {path.external ? (
                  <a {...meetingLinkProps("choose_path")} className={cardClass}>
                    {inner}
                  </a>
                ) : (
                  <Link href={path.href} className={cardClass}>
                    {inner}
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>

        <div className="mx-auto mt-6 max-w-2xl">
          <MeetingStatus compact />
        </div>
      </div>
    </section>
  )
}
