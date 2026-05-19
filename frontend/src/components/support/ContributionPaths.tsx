"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Coffee,
  HandHelping,
  Wrench,
  Boxes,
  Network,
  Mail,
} from "lucide-react"
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics"

type Path = {
  icon: typeof Coffee
  title: string
  description: string
  action: { label: string; href: string; external?: boolean; eventName?: AnalyticsEventName }
}

const paths: Path[] = [
  {
    icon: Coffee,
    title: "Donate",
    description:
      "If you want to help cover what it takes to keep the nightly room open, Ko-fi is the easiest way. One-time or recurring.",
    action: {
      label: "Open Ko-fi",
      href: "https://ko-fi.com/ohanarecovery",
      external: true,
      eventName: "support_link_click",
    },
  },
  {
    icon: HandHelping,
    title: "Volunteer",
    description:
      "Hold a meeting. Help host. Welcome people who come in for the first time. The room runs on people who show up.",
    action: { label: "Tell us you're in", href: "/forms/volunteer" },
  },
  {
    icon: Wrench,
    title: "Lend a skill",
    description:
      "Writing, design, dev, video, moderation, accessibility, community work. If you do something useful, we'll find where it fits.",
    action: { label: "Send a note", href: "/forms/contact" },
  },
  {
    icon: Boxes,
    title: "Supplies & resources",
    description:
      "Worksheets, art, gift cards for members who need them, books for the toolkit, anything tangible the community can use.",
    action: { label: "Send a note", href: "/forms/contact" },
  },
  {
    icon: Network,
    title: "Partnership",
    description:
      "Treatment centers, sober living, recovery orgs, podcasts, anything aligned with peer-led, free, late-night support. Reach out.",
    action: { label: "Start a conversation", href: "/forms/contact" },
  },
  {
    icon: Mail,
    title: "Spread the word",
    description:
      "Most people find us because someone told them. Share the site with anyone who might need a room at 2 AM.",
    action: { label: "Share /story", href: "/story" },
  },
]

function PathCard({ path, index }: { path: Path; index: number }) {
  const Icon = path.icon

  const action = path.action.external ? (
    <a
      href={path.action.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (path.action.eventName) {
          trackEvent(path.action.eventName, { surface: path.title })
        }
      }}
      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal-light"
    >
      {path.action.label}
      <span aria-hidden="true">→</span>
    </a>
  ) : (
    <Link
      href={path.action.href}
      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal-light"
    >
      {path.action.label}
      <span aria-hidden="true">→</span>
    </Link>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      className="group flex h-full flex-col border-b border-dark-700 py-8 transition-colors hover:border-teal/40 md:border-b-0 md:border-l md:pl-8 md:pr-4 md:py-6"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal/25 bg-teal/10 text-teal transition-colors group-hover:border-teal/50">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h2 className="text-2xl font-bold text-gray-100 transition-colors group-hover:text-teal">
        {path.title}
      </h2>
      <p className="mt-3 flex-1 text-base leading-relaxed text-gray-400">
        {path.description}
      </p>
      {action}
    </motion.div>
  )
}

export default function ContributionPaths() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <span className="mb-3 block text-sm font-mono uppercase tracking-widest text-teal/80">
            Ways to be part of it
          </span>
          <h2 className="text-3xl font-bold text-gray-100 md:text-4xl">
            Money is one way. There are others.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
            Pick what fits. Each of these matters as much as the next one. Nothing on
            this page is more important than another.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3 md:gap-x-0">
          {paths.map((path, index) => (
            <PathCard key={path.title} path={path} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center text-sm text-gray-500"
        >
          Looking for another recovery room tonight instead?{" "}
          <Link href="/recovery-network" className="text-teal hover:underline">
            Open the Recovery Network
          </Link>
          .
        </motion.p>
      </div>
    </section>
  )
}
