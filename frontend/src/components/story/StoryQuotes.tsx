"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

const quotes = [
  {
    text: "I thought I was the only one awake at 2 AM fighting my demons. Turns out, I had a whole family I didn't know about.",
    author: "Community Member",
  },
  {
    text: "No judgment. No steps to follow. Just people being real with each other. That's what saved me.",
    author: "Anonymous",
  },
  {
    text: "The hardest part of recovery is the silence. Ohana filled that silence with voices that understood.",
    author: "Community Member",
  },
  {
    text: "I joined just to listen. Three months later, I shared my story for the first time. That night changed my life.",
    author: "Anonymous",
  },
  {
    text: "Recovery isn't a destination. It's showing up, night after night, even when you don't want to.",
    author: "Community Member",
  },
]

export default function StoryQuotes() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Mountain silhouette at dusk"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/80 to-dark-950" />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal/80 text-sm font-mono tracking-widest uppercase">
            Voices from the Community
          </span>
        </motion.div>

        {/* Quote carousel */}
        <div className="relative h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute text-center px-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl text-teal/30 mb-4"
              >
                &ldquo;
              </motion.div>
              <p className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed mb-6">
                {quotes[currentIndex].text}
              </p>
              <p className="text-gray-500 text-sm">
                {quotes[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-teal w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
