"use client"

import { motion } from "framer-motion"

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Hawaiian ocean gradient - deep ocean to sunset */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a1a] via-[#003d3d] to-[#001a1a]" />

      {/* Enhanced parallax animated gradient waves */}
      <div className="absolute inset-0 opacity-35">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-cyan-800/20 to-teal-900/20 blur-3xl"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            backgroundSize: '200% 100%',
            willChange: 'background-position',
            transform: 'translateZ(0)', // GPU acceleration
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-700/10 to-transparent blur-2xl"
          animate={{
            backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          style={{
            backgroundSize: '200% 100%',
            willChange: 'background-position',
            transform: 'translateZ(0)', // GPU acceleration
          }}
        />
      </div>

      {/* Tropical horizon glow with soft edges */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-950/10 via-orange-900/5 to-transparent blur-sm" />

      {/* Enhanced soft light rays with parallax */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-cyan-400/[0.03] to-transparent blur-sm"
        animate={{
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          willChange: 'opacity',
          transform: 'translateZ(0)', // GPU acceleration
        }}
      />

      {/* Subtle star-like specks (bioluminescence feel) - CSS only for performance */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(153, 246, 228, 0.4) 1px, transparent 1px),
                           radial-gradient(circle at 60% 70%, rgba(153, 246, 228, 0.3) 1.5px, transparent 1.5px),
                           radial-gradient(circle at 40% 50%, rgba(153, 246, 228, 0.5) 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, rgba(153, 246, 228, 0.4) 2px, transparent 2px),
                           radial-gradient(circle at 15% 80%, rgba(153, 246, 228, 0.3) 1px, transparent 1px),
                           radial-gradient(circle at 90% 60%, rgba(153, 246, 228, 0.4) 1.5px, transparent 1.5px)`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  )
}
