"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Video } from "lucide-react"
import { meetingLinkProps } from "@/lib/meetingLink"

export default function ResourcesCTA() {
  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal/20 flex items-center justify-center"
        >
          <span className="text-3xl">💡</span>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          Want More Support?
        </h2>

        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Worksheets are just one tool. Join us for real-time connection and
          support every night from 11 PM to 3 AM Pacific.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <a
              {...meetingLinkProps("resources_cta")}
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-light text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <Video className="w-5 h-5" />
              <span>Join a Meeting</span>
              <span>→</span>
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/forms/contact"
              className="inline-flex items-center gap-2 bg-dark-800 hover:bg-dark-700 text-gray-100 font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Suggestion box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-6 bg-dark-900/50 rounded-2xl"
        >
          <p className="text-gray-400 text-sm">
            <span className="text-teal font-medium">Have an idea for a worksheet?</span>
            <br />
            We&apos;re always looking to create new resources. Reach out and let us know
            what would help your recovery journey.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
