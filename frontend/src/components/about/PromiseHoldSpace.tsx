"use client"

import { motion } from "framer-motion"
import { HeartHandshake, Map, ShieldCheck, Sparkles } from "lucide-react"

const pillars = [
  {
    icon: HeartHandshake,
    title: "Every identity",
    description: "LGBTQ+, straight, questioning, religious, nonreligious, certain, uncertain: you belong here.",
    accent: "teal",
  },
  {
    icon: Map,
    title: "Every path",
    description: "12-step, SMART, therapy, medication, harm reduction, or your own way: recovery is not one-size-fits-all.",
    accent: "gold",
  },
  {
    icon: ShieldCheck,
    title: "Every stage",
    description: "Day one, decade ten, returning after relapse, or supporting someone else: you can start from where you are.",
    accent: "purple",
  },
  {
    icon: Sparkles,
    title: "Every honest step",
    description: "Big milestones matter, and so do quiet choices: staying, telling the truth, asking for help, trying again.",
    accent: "teal",
  },
]

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const Icon = pillar.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className={`rounded-lg border p-6 transition-colors ${
        pillar.accent === "gold"
          ? "border-gold/25 bg-gradient-to-br from-gold/10 via-dark-900/70 to-transparent hover:border-gold/40"
          : pillar.accent === "purple"
            ? "border-purple/25 bg-gradient-to-br from-purple/10 via-dark-900/70 to-transparent hover:border-purple/40"
            : "border-teal/25 bg-gradient-to-br from-teal/10 via-dark-900/70 to-transparent hover:border-teal/40"
      }`}
    >
      <div
        className={`mb-5 flex h-11 w-11 items-center justify-center rounded-lg border ${
          pillar.accent === "gold"
            ? "border-gold/25 bg-gold/10 text-gold"
            : pillar.accent === "purple"
              ? "border-purple/25 bg-purple/10 text-purple"
              : "border-teal/25 bg-teal/10 text-teal"
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-bold text-gray-100">{pillar.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-400">{pillar.description}</p>
    </motion.div>
  )
}

export default function PromiseHoldSpace() {
  return (
    <section className="relative px-4 py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <span className="mb-4 block text-sm font-mono uppercase tracking-widest text-teal/80">
            Our Commitment
          </span>
          <h2 className="text-4xl font-bold text-gray-100 md:text-5xl">
            Come as you are, not as you think you should be.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            This is not a space of conditions. Whoever you are, wherever you have been,
            there is room for the truth of your life here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
