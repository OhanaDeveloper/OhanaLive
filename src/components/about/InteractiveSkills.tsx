"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "Three.js", level: 70 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    icon: "🚀",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Vercel", level: 90 },
      { name: "AWS", level: 70 },
    ],
  },
  {
    id: "design",
    name: "Design",
    icon: "✨",
    skills: [
      { name: "UI/UX Design", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Animation", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "Accessibility", level: 85 },
    ],
  },
]

function SkillBar({ skill, delay }: { skill: { name: string; level: number }; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ delay }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
          className="text-teal text-sm"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ delay: delay + 0.1, duration: 0.8, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-accent to-teal-400 rounded-full"
        />
      </div>
    </motion.div>
  )
}

export default function InteractiveSkills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)
  const activeSkills = skillCategories.find((c) => c.id === activeCategory)?.skills || []

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-teal/80 text-sm font-mono tracking-widest uppercase mb-4 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">
            Click a category to explore the toolkit.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === category.id
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-teal/20 border border-teal/50 rounded-xl"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </span>
            </motion.button>
          ))}
        </div>

        {/* Skills display */}
        <motion.div
          layout
          className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-2xl p-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeSkills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              💡
            </motion.span>
            {" "}Pro tip: These bars animate every time you switch categories
          </p>
        </motion.div>
      </div>
    </section>
  )
}
