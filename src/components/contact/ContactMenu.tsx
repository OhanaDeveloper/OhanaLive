"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MEETING_INFO } from "@/lib/meetings"

type ContactOption = {
  id: string
  icon: string
  title: string
  description: string
  content: ReactNode
  urgent?: boolean
}

const contactOptions: ContactOption[] = [
  {
    id: "crisis",
    icon: "🆘",
    title: "I Need Support Now",
    description: "Immediate resources and someone to talk to",
    urgent: true,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          If you&apos;re in crisis, please reach out to these resources:
        </p>
        <div className="space-y-3">
          <a
            href="tel:988"
            className="block bg-red-900/30 border border-red-700/50 rounded-lg p-4 hover:bg-red-900/50 transition-colors"
          >
            <div className="font-bold text-red-400">988 Suicide & Crisis Lifeline</div>
            <div className="text-gray-400 text-sm">Call or text 988 — available 24/7</div>
          </a>
          <a
            href="sms:741741&body=HELLO"
            className="block bg-orange-900/30 border border-orange-700/50 rounded-lg p-4 hover:bg-orange-900/50 transition-colors"
          >
            <div className="font-bold text-orange-400">Crisis Text Line</div>
            <div className="text-gray-400 text-sm">Text HOME to 741741</div>
          </a>
          <a
            href="https://www.samhsa.gov/find-help/national-helpline"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 hover:bg-blue-900/50 transition-colors"
          >
            <div className="font-bold text-blue-400">SAMHSA National Helpline</div>
            <div className="text-gray-400 text-sm">1-800-662-4357 — Free, confidential, 24/7</div>
          </a>
        </div>
        <p className="text-gray-400 text-sm mt-4">
          You can also join our nightly meeting (11 PM - 3 AM Pacific) to connect with our community.
        </p>
      </div>
    ),
  },
  {
    id: "meeting",
    icon: "🌙",
    title: "Join a Meeting",
    description: "Connect with our late-night recovery community",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          Ohana Live meets every night from <span className="text-teal font-semibold">11 PM to 3 AM Pacific</span>.
        </p>
        <div className="bg-dark-800/50 rounded-lg p-4 border border-dark-700">
          <div className="text-sm text-gray-400 mb-2">Meeting Details</div>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li>• No sign-up or registration required</li>
            <li>• Camera and mic optional</li>
            <li>• Newcomers always welcome</li>
            <li>• What&apos;s shared here, stays here</li>
          </ul>
        </div>
        <a
          href={MEETING_INFO.zoomLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-teal hover:bg-teal-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <span>Join Zoom Meeting</span>
          <span>→</span>
        </a>
      </div>
    ),
  },
  {
    id: "question",
    icon: "❓",
    title: "I Have a Question",
    description: "Learn more about Ohana Live and how it works",
    content: (
      <div className="space-y-4">
        <div className="space-y-3">
          <details className="group bg-dark-800/30 rounded-lg border border-dark-700">
            <summary className="cursor-pointer p-4 font-medium text-gray-200 hover:text-teal transition-colors">
              What happens in the meetings?
            </summary>
            <div className="px-4 pb-4 text-gray-400 text-sm">
              Our meetings are casual, supportive conversations about recovery and life.
              We share experiences, offer support, and build genuine connections.
              No pressure to speak — you can just listen if that&apos;s more comfortable.
            </div>
          </details>
          <details className="group bg-dark-800/30 rounded-lg border border-dark-700">
            <summary className="cursor-pointer p-4 font-medium text-gray-200 hover:text-teal transition-colors">
              Is this a 12-step program?
            </summary>
            <div className="px-4 pb-4 text-gray-400 text-sm">
              We&apos;re not affiliated with any specific program. Ohana Live is a community
              space that welcomes people from all recovery paths — 12-step, SMART Recovery,
              therapy, medication-assisted treatment, or your own approach.
            </div>
          </details>
          <details className="group bg-dark-800/30 rounded-lg border border-dark-700">
            <summary className="cursor-pointer p-4 font-medium text-gray-200 hover:text-teal transition-colors">
              Why late night?
            </summary>
            <div className="px-4 pb-4 text-gray-400 text-sm">
              Late nights can be the hardest part of recovery — when most meetings are
              closed and isolation hits hardest. We&apos;re here during those difficult hours
              because that&apos;s when connection matters most.
            </div>
          </details>
          <details className="group bg-dark-800/30 rounded-lg border border-dark-700">
            <summary className="cursor-pointer p-4 font-medium text-gray-200 hover:text-teal transition-colors">
              Is it anonymous?
            </summary>
            <div className="px-4 pb-4 text-gray-400 text-sm">
              You can use any name you want on Zoom. Camera and microphone are optional.
              We respect everyone&apos;s privacy and ask that what&apos;s shared in meetings stays
              in meetings.
            </div>
          </details>
        </div>
      </div>
    ),
  },
  {
    id: "collaborate",
    icon: "🤝",
    title: "Get Involved",
    description: "Volunteer, collaborate, or support our mission",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          Ohana Live is built by and for our community. There are many ways to contribute:
        </p>
        <div className="grid gap-3">
          <div className="bg-dark-800/30 rounded-lg p-4 border border-dark-700">
            <div className="font-medium text-gray-200 mb-1">Join as a Regular</div>
            <div className="text-gray-400 text-sm">
              Show up, share your experience, and be part of the community.
            </div>
          </div>
          <div className="bg-dark-800/30 rounded-lg p-4 border border-dark-700">
            <div className="font-medium text-gray-200 mb-1">Help Moderate</div>
            <div className="text-gray-400 text-sm">
              Support meeting facilitation and help maintain a safe space.
            </div>
          </div>
          <div className="bg-dark-800/30 rounded-lg p-4 border border-dark-700">
            <div className="font-medium text-gray-200 mb-1">Technical Skills</div>
            <div className="text-gray-400 text-sm">
              We&apos;re always looking for developers, designers, and creators.
            </div>
          </div>
        </div>
        <a
          href="mailto:dev@ohanarecovery.org?subject=Getting%20Involved%20with%20Ohana%20Live"
          className="inline-flex items-center gap-2 bg-dark-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <span>Email Us</span>
          <span>→</span>
        </a>
      </div>
    ),
  },
  {
    id: "general",
    icon: "✉️",
    title: "General Contact",
    description: "Reach out for anything else",
    content: (
      <div className="space-y-4">
        <p className="text-gray-300">
          For general inquiries, partnerships, or anything else:
        </p>
        <div className="bg-dark-800/50 rounded-lg p-6 border border-dark-700 text-center">
          <div className="text-gray-400 text-sm mb-2">Email us at</div>
          <a
            href="mailto:dev@ohanarecovery.org"
            className="text-xl text-teal hover:text-teal-light font-medium transition-colors"
          >
            dev@ohanarecovery.org
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          We typically respond within 24-48 hours.
        </p>
      </div>
    ),
  },
]

export default function ContactMenu() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleSelect = (id: string) => {
    setSelectedOption(selectedOption === id ? null : id)
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-3">
        {contactOptions.map((option, index) => (
          <motion.div
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <motion.button
              onClick={() => handleSelect(option.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-left p-5 rounded-xl border transition-all ${
                selectedOption === option.id
                  ? "bg-dark-800/80 border-teal/50 shadow-lg shadow-accent/10"
                  : option.urgent
                    ? "bg-red-950/30 border-red-800/30 hover:border-red-700/50"
                    : "bg-dark-900/50 border-dark-800 hover:border-dark-700"
              }`}
            >
              <div className="flex items-center gap-4">
                <motion.span
                  animate={selectedOption === option.id ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl"
                >
                  {option.icon}
                </motion.span>
                <div className="flex-1">
                  <div className={`font-semibold text-lg ${
                    option.urgent ? "text-red-400" : "text-gray-100"
                  }`}>
                    {option.title}
                  </div>
                  <div className="text-gray-400 text-sm">{option.description}</div>
                </div>
                <motion.span
                  animate={{ rotate: selectedOption === option.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500 text-xl"
                >
                  ↓
                </motion.span>
              </div>
            </motion.button>

            <AnimatePresence>
              {selectedOption === option.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-dark-900/30 border-x border-b border-dark-800 rounded-b-xl">
                    {option.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
