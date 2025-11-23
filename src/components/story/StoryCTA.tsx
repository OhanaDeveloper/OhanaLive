"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { MEETING_INFO } from "@/lib/meetings"

export default function StoryCTA() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80"
          alt="Starry night sky"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/70" />
      </div>

      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/20 flex items-center justify-center"
        >
          <span className="text-4xl">✨</span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
          Your Story Belongs Here
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you're just starting out, deep in the journey, or somewhere
          in between — there's a seat waiting for you. No prerequisites. No
          expectations. Just show up.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href={MEETING_INFO.zoomLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-3 h-3 bg-white rounded-full"
            />
            Join Tonight's Meeting
          </motion.a>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold px-8 py-4 rounded-xl transition-colors text-lg border border-gray-700"
            >
              Get in Touch
              <span>→</span>
            </Link>
          </motion.div>
        </div>

        {/* Meeting time reminder */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-gray-500 text-sm"
        >
          We meet every night from 11 PM – 3 AM Pacific
        </motion.p>
      </motion.div>
    </section>
  )
}
