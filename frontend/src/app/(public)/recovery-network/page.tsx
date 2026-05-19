"use client"

import { motion } from "framer-motion"
import { ExternalLink, Heart, Compass, Globe } from "lucide-react"
import { useState } from "react"

const recoveryOrgs = [
  {
    name: "LifeRing Secular Recovery",
    tagline: "Sobriety, Secularity, Self-Help",
    description: "A secular, nonprofit organization providing peer support for people seeking to live substance-free lives. Emphasizes personal autonomy and respect for diverse recovery paths.",
    url: "https://lifering.org",
    icon: "🔗",
    category: "Secular",
  },
  {
    name: "AA for Atheists & Agnostics",
    tagline: "Sobriety Without the Supernatural",
    description: "A worldwide network of AA meetings that don't focus on God or higher powers. Practical recovery rooted in community and personal accountability.",
    url: "https://aaagnostica.org",
    icon: "🌐",
    category: "Secular",
  },
  {
    name: "Recovery Dharma",
    tagline: "Buddhist-Informed Recovery",
    description: "A peer-led movement grounded in Buddhist practices and principles. Offers meditation, inquiry, and compassionate community for anyone seeking freedom from addiction.",
    url: "https://recoverydharma.org",
    icon: "🧘",
    category: "Buddhist",
  },
  {
    name: "Refuge Recovery",
    tagline: "Buddhist Path to Recovery",
    description: "A non-theistic, Buddhist-inspired approach emphasizing meditation, mindfulness, and ethical living. Welcomes all backgrounds and beliefs.",
    url: "https://refugerecovery.org",
    icon: "☸️",
    category: "Buddhist",
  },
  {
    name: "The Satanic Temple - Sober Faction",
    tagline: "Rational Self-Empowerment",
    description: "A secular, evidence-based recovery program rooted in TST's principles of compassion, empathy, and bodily autonomy. No supernatural beliefs required.",
    url: "https://thesatanictemple.com/pages/sober-faction",
    icon: "🕯️",
    category: "Secular",
  },
  {
    name: "SMART Recovery",
    tagline: "Science-Based Support",
    description: "A global community of mutual-support groups using evidence-based methods. Focuses on self-empowerment and self-reliance through cognitive behavioral techniques.",
    url: "https://smartrecovery.org",
    icon: "🧠",
    category: "Science-Based",
  },
  {
    name: "Celebrate Recovery",
    tagline: "Christ-Centered Recovery",
    description: "A faith-based program helping people overcome life's hurts, habits, and hang-ups. Integrates biblical principles with 12-step practices.",
    url: "https://celebraterecovery.com",
    icon: "✝️",
    category: "Faith-Based",
  },
  {
    name: "Women for Sobriety",
    tagline: "Empowerment for Women",
    description: "The first national self-help program for women's alcohol and drug addiction recovery. Focuses on emotional and spiritual growth through positive thinking.",
    url: "https://womenforsobriety.org",
    icon: "💪",
    category: "Women-Focused",
  },
]

const categories = ["All", "Secular", "Buddhist", "Science-Based", "Faith-Based", "Women-Focused"]

export default function RecoveryNetworkPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredOrgs = activeCategory === "All"
    ? recoveryOrgs
    : recoveryOrgs.filter(org => org.category === activeCategory)

  return (
    <div className="min-h-screen py-16 px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-2 mb-6"
        >
          <Compass className="w-4 h-4 text-teal" aria-hidden="true" />
          <span className="text-teal text-sm font-mono tracking-wider uppercase">Recovery Network</span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
          Find Your Path
        </h1>

        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
          Recovery isn&apos;t one-size-fits-all. Here are communities we respect, each with their own philosophy,
          approach, and heart. Find what resonates with you.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 py-2.5 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200 bg-dark-900/30"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-teal/20 border border-teal/50 rounded-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Organizations Grid */}
      <motion.div
        layout
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredOrgs.map((org, index) => (
          <motion.a
            key={org.name}
            href={org.url}
            target="_blank"
            rel="noopener noreferrer"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative bg-dark-900/50 backdrop-blur-sm rounded-2xl p-6 transition-all"
          >
            {/* Gradient glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal/0 via-teal/5 to-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              {/* Icon & Category Badge */}
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-4xl"
                  aria-hidden="true"
                >
                  {org.icon}
                </motion.div>
                <span className="text-xs font-mono text-teal/60 bg-teal/10 px-2 py-1 rounded-full">
                  {org.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <h2 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-teal transition-colors">
                {org.name}
              </h2>
              <p className="text-sm text-teal/80 font-medium mb-3">
                {org.tagline}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {org.description}
              </p>

              {/* Visit Link */}
              <div className="flex items-center gap-2 text-teal text-sm font-medium">
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span className="group-hover:underline">Visit Website</span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Footer Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="max-w-4xl mx-auto text-center mt-16 p-8 bg-dark-900/30 rounded-2xl"
      >
        <Heart className="w-8 h-8 text-teal mx-auto mb-4" aria-hidden="true" />
        <p className="text-gray-300 text-lg leading-relaxed">
          Recovery is personal. What works for one person might not work for another, and that&apos;s okay.
          We&apos;re all just trying to stay alive and find peace.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          Know of another community we should include? <a href="/forms/contact" className="text-teal hover:underline">Let us know</a>.
        </p>
      </motion.div>
    </div>
  )
}
