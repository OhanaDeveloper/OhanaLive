"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function VideoIntro() {
  const [videoUrl] = useState<string>("https://www.youtube.com/embed/Q0yAWu1_CjE")

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video rounded-2xl overflow-hidden border-2 border-teal/30 bg-dark-900/50 backdrop-blur-sm shadow-2xl shadow-teal/10"
        >
          {videoUrl ? (
            // YouTube embed will go here
            <iframe
              src={videoUrl}
              title="Ohana Live Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            // Placeholder for when no video is set
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-teal/20 to-purple/20 border-2 border-teal/50 flex items-center justify-center mb-6"
              >
                <svg
                  className="w-10 h-10 text-teal"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold text-gray-200 mb-3"
              >
                A Personal Message
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 max-w-md"
              >
                Video introduction coming soon...
              </motion.p>

              {/* Animated pulse effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-teal/5 to-purple/5 rounded-2xl"
              />
            </div>
          )}
        </motion.div>

        {/* Optional Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-400 text-sm mt-4 italic"
        >
          Hear directly from the heart of Ohana Live
        </motion.p>
      </div>
    </section>
  )
}
