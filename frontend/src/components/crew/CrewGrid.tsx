"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

type CrewMember = {
  name: string
  role: string
  image: string
  bio: string
  whyRecovery: string
  funFact: string
}

// ─── CREW DATA: replace fallback copy with approved member bios when ready ──
const crewMembers: CrewMember[] = [
  {
    name: "Joey",
    role: "Crew Host",
    image: "/OhanaProfile_Joey2.png",
    bio: "Shows up with steady presence so nobody has to sit through the hard hours alone.",
    whyRecovery: "Because someone staying present can change the whole night for a person who is barely holding on.",
    funFact: "Brings calm, practical care to the room when the night feels loud.",
  },
  {
    name: "Daniel",
    role: "Crew Host",
    image: "/OhanaProfile_Daniel.png",
    bio: "Helps hold the door open for anyone looking for honest recovery support after dark.",
    whyRecovery: "Because recovery is easier to believe in when another person is willing to sit with you in it.",
    funFact: "Keeps the focus on simple, human connection over polished answers.",
  },
  {
    name: "Jonni",
    role: "Crew Host",
    image: "/OhanaProfile_Jonni2.png",
    bio: "Creates space for people to be quiet, honest, messy, hopeful, or anything in between.",
    whyRecovery: "Because people deserve a place where they do not have to perform being okay before they are welcomed.",
    funFact: "Makes room for both silence and truth, which is often exactly what someone needs.",
  },
  {
    name: "Anne",
    role: "Crew Host",
    image: "/OhanaProfile_Anne2.png",
    bio: "Shows up with warmth and consistency for people finding their way through recovery.",
    whyRecovery: "Because being met with kindness at the right moment can help someone make it to morning.",
    funFact: "Believes small acts of care matter, especially when nobody else sees them.",
  },
]

// ─── Card ─────────────────────────────────────────────────────────────────────

function CrewCard({ member, index }: { member: CrewMember; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="perspective-1000"
    >
      <motion.div
        className="relative h-[520px] cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        {/* ── Front ── */}
        <motion.div
          className={`absolute inset-0 ${isFlipped ? "pointer-events-none" : ""}`}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-full rounded-2xl overflow-hidden border border-dark-700 hover:border-teal/30 transition-colors group"
            style={{ background: "linear-gradient(160deg, rgba(20,184,166,0.12) 0%, #1a1a1a 55%, #0a0a0a 100%)" }}
          >
            {/* Transparent PNG, floats against the gradient */}
            <div className="relative h-72">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                style={{ willChange: "transform" }}
              />
              {/* Fade into card body */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0f1f1e]/80 to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="px-6 pt-2 pb-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-0.5">{member.name}</h3>
              <p className="text-teal text-sm font-medium mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {member.bio}
              </p>
            </div>

            {/* Tap indicator */}
            <div className="absolute bottom-4 right-5 text-gray-600 text-xs flex items-center gap-1">
              <span>Tap to learn more</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* ── Back ── */}
        <motion.div
          className={`absolute inset-0 ${!isFlipped ? "pointer-events-none" : ""}`}
          initial={{ rotateY: -180 }}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-full bg-gradient-to-b from-dark-800 to-dark-900 border border-teal/30 rounded-2xl p-6 flex flex-col gap-5">
            <h3 className="text-xl font-bold text-teal">{member.name}</h3>

            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                Why Recovery Work?
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">{member.whyRecovery}</p>
            </div>

            <div className="mt-auto">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                Fun Fact
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed italic">{member.funFact}</p>
            </div>

            {/* Tap indicator */}
            <div className="absolute bottom-4 right-5 text-gray-600 text-xs flex items-center gap-1">
              <motion.span
                animate={{ x: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ←
              </motion.span>
              <span>Tap to go back</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// ─── Grid ─────────────────────────────────────────────────────────────────────

export default function CrewGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-lg max-w-2xl mx-auto mb-12"
        >
          These are the people who show up night after night, not because they have to,
          but because they remember what it felt like to need someone there.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {crewMembers.map((member, index) => (
            <CrewCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-dark-900/60 border border-dark-700 rounded-2xl p-8 max-w-xl">
            <h3 className="text-2xl font-bold text-gray-100 mb-3">
              Want to Join the Crew?
            </h3>
            <p className="text-gray-400 mb-6">
              We&apos;re always looking for people who show up. If you feel the call,
              we&apos;d love to hear from you.
            </p>
            <Link
              href="/forms/volunteer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal to-purple text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-teal/20 transition-all"
            >
              <span>Join the Crew</span>
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
