"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "I thought I was the only one awake at 2 AM fighting this. Turns out I had a whole family I didn't know about.",
    attribution: "Night Owl",
  },
  {
    quote:
      "No one asked me to introduce myself. No one asked how many days I had. I just sat there and listened, and for the first time in months, I didn't feel alone.",
    attribution: "Community Member",
  },
  {
    quote:
      "I've been to a hundred meetings. This is the first one that felt like it was built for people like me.",
    attribution: "Community Member",
  },
  {
    quote:
      "The room was quiet, honest, and still there when everything else felt too loud.",
    attribution: "Night Owl",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal/80">
            Heard in the night
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-100 md:text-4xl">
            People come here because they need somewhere real.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.quote}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-xl border-l-4 border-teal/60 bg-dark-900/55 p-6 text-left shadow-lg shadow-black/10"
            >
              <blockquote className="text-base leading-relaxed text-gray-300 md:text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-teal">
                — {testimonial.attribution}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
