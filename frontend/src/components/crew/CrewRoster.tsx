"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { crew, rosterStateLine, type CrewMember } from "@/data/crew"

/**
 * Renders the crew roster.
 *
 * Layout rules:
 *  - 1 member  → centered "founder portrait" treatment, extra large.
 *  - 2+ members → CSS-grid auto-fit. Same card primitive at all counts.
 *
 * The card primitive deliberately avoids rounded-rectangle containers.
 * The only shape is a circular portrait; everything else is typography
 * stacked beneath it, no frame.
 */
export default function CrewRoster() {
  const isSolo = crew.length === 1

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center text-base leading-relaxed text-gray-400 md:text-lg"
        >
          {rosterStateLine}
        </motion.p>

        {isSolo ? (
          <SoloMember member={crew[0]} />
        ) : (
          <div
            className="mx-auto grid w-full justify-center gap-x-10 gap-y-16"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
            }}
          >
            {crew.map((member, index) => (
              <RosterCard key={member.id} member={member} index={index} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="mb-5 text-lg text-gray-300">
            Want to help hold the room open?
          </p>
          <Link
            href="/forms/volunteer"
            className="inline-flex items-center gap-3 text-lg font-bold text-teal transition-colors hover:text-teal-light"
          >
            Tell us you&apos;re in
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function RosterCard({ member, index }: { member: CrewMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      className="flex flex-col items-center text-center"
    >
      <Portrait member={member} size="md" />
      <h3 className="mt-6 text-3xl font-bold text-gray-100 md:text-4xl">
        {member.name}
      </h3>
      <p className="mt-2 text-sm font-mono uppercase tracking-widest text-teal/80">
        {member.role}
      </p>
      {member.bio && (
        <p className="mt-4 max-w-xs text-base leading-relaxed text-gray-400">
          {member.bio}
        </p>
      )}
    </motion.div>
  )
}

function SoloMember({ member }: { member: CrewMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <Portrait member={member} size="lg" />
      <h2 className="mt-8 text-5xl font-black text-gray-100 md:text-7xl">
        {member.name}
      </h2>
      <p className="mt-3 text-sm font-mono uppercase tracking-[0.3em] text-teal/80 md:text-base">
        {member.role}
      </p>
      {member.bio && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
          {member.bio}
        </p>
      )}
    </motion.div>
  )
}

function Portrait({ member, size }: { member: CrewMember; size: "md" | "lg" }) {
  // Dimensions in px. The portrait is a circle, not a rectangle.
  const px = size === "lg" ? 320 : 200

  return (
    <div className="relative">
      {/* Soft teal halo behind the portrait — replaces a card frame. */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-teal/25 via-teal/8 to-transparent blur-2xl"
        aria-hidden="true"
      />
      <div
        className="relative overflow-hidden rounded-full border border-teal/25"
        style={{
          width: px,
          height: px,
          background:
            "radial-gradient(circle at 50% 35%, rgba(20,184,166,0.18) 0%, #0a0a0a 70%)",
        }}
      >
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          fill
          sizes={size === "lg" ? "320px" : "200px"}
          className="object-cover object-top"
          priority={member.isFounder}
        />
      </div>
    </div>
  )
}
