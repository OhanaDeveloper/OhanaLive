'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const HeroScene = dynamic(
  () => import('@/features/resources/components/HeroScene'),
  { ssr: false }
)

export default function ResourcesHero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
      {/* 3D scene */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(0)' }}>
        <HeroScene />
      </div>

      {/* Deep gradient — scene bleeds through bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, #0a0a0a 100%)',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-20 pb-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-teal/70 text-xs font-mono tracking-widest uppercase mb-4"
        >
          Free Resources
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-6xl font-bold text-gray-100 mb-5"
          style={{ textShadow: '0 0 60px rgba(20,184,166,0.15)' }}
        >
          Recovery{' '}
          <span
            className="text-teal"
            style={{ textShadow: '0 0 40px rgba(20,184,166,0.4)' }}
          >
            Toolkit
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          108 evidence-based worksheets — CBT, DBT, ACT, mindfulness, trauma-informed,
          and more. Built for people doing the real work.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26 }}
          className="flex justify-center gap-10 mt-10"
        >
          {[
            { number: '108', label: 'Worksheets' },
            { number: '14', label: 'Categories' },
            { number: '11', label: 'Frameworks' },
            { number: '100%', label: 'Free' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.35 + i * 0.07, type: 'spring', stiffness: 280, damping: 20 }}
                className="text-2xl md:text-3xl font-bold text-teal"
                style={{ textShadow: '0 0 24px rgba(20,184,166,0.35)' }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
