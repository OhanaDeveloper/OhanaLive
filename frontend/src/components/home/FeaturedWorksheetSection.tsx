"use client"

import Link from "next/link"
import { ArrowRight, Clock, FileText } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import { getWorksheetById } from "@/features/resources/data/worksheets"

const FEATURED_WORKSHEET_ID = "coping-toolbox"

export default function FeaturedWorksheetSection() {
  const worksheet = getWorksheetById(FEATURED_WORKSHEET_ID)

  if (!worksheet) {
    return null
  }

  return (
    <section className="px-4 py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <span className="mb-3 block text-sm font-mono uppercase tracking-widest text-teal/80">
            Featured Worksheet
          </span>
          <h2 className="text-3xl font-bold text-gray-100 md:text-4xl">
            A practical tool for the next hard moment.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            The Toolkit has 108 recovery worksheets. Start with one simple exercise that helps you build a real plan for coping before the pressure hits.
          </p>
          <Link
            href="/toolkit"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-teal"
          >
            Explore all 108 worksheets
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-teal/10 via-dark-900/80 to-purple/10 p-6 shadow-lg shadow-black/10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gold/25 bg-gold/10 text-gold">
              <FileText className="h-6 w-6" />
            </div>
            <div className="flex items-center gap-2 rounded-full border border-purple/25 bg-purple/10 px-3 py-1.5 text-xs text-purple-100">
              <Clock className="h-3.5 w-3.5 text-teal" />
              {worksheet.estimatedMinutes} min
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-100">{worksheet.title}</h3>
          <p className="mt-2 text-sm font-medium text-gold/80">{worksheet.subtitle}</p>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">{worksheet.description}</p>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-teal/40 via-gold/50 to-purple/40" />

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/toolkit?worksheet=${worksheet.id}`}
              onClick={() => trackEvent("featured_worksheet_click", { worksheet_id: worksheet.id })}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal via-gold to-purple px-5 py-3 text-sm font-semibold text-dark-950 transition-opacity hover:opacity-95"
            >
              Try It Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/toolkit"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-gray-300 transition-colors hover:text-teal"
            >
              Open Toolkit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
