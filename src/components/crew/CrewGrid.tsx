"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

type CrewMember = {
  name: string
  role: string
  image: string
  bio: string
  whyRecovery: string
  funFact: string
}

const crewMembers: CrewMember[] = [
  {
    name: "Daniel",
    role: "Founder & Facilitator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Daniel started Ohana Live after years of navigating his own recovery journey. A night owl by nature, he realized that the hardest hours for most people in recovery were the ones with the fewest resources available.",
    whyRecovery: "After losing too many friends to addiction during the late-night hours when no help was available, Daniel knew he had to create a space that existed when others didn&apos;t. Recovery saved his life, and now he pays it forward every night.",
    funFact: "Can solve a Rubik&apos;s cube in under 2 minutes and has an inexplicable collection of over 200 vintage spoons.",
  },
  {
    name: "Joey",
    role: "Co-Facilitator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Joey brings warmth and humor to every meeting. With a background in peer support and a natural gift for making people feel at ease, he&apos;s often the first friendly face newcomers encounter.",
    whyRecovery: "Joey spent a decade in active addiction before finding recovery through a late-night conversation with a stranger. That moment changed everything, and now he aims to be that stranger for someone else.",
    funFact: "Once competed in a regional hot dog eating contest and came in dead last — but still talks about it like he won.",
  },
  {
    name: "Anne",
    role: "Community Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Anne is the organizational backbone of Ohana Live. She keeps the community connected, coordinates resources, and ensures everyone feels seen and heard.",
    whyRecovery: "As a mother who watched her child struggle with addiction, Anne knows recovery from a different angle. She joined Ohana to support families and remind everyone that healing happens together.",
    funFact: "Has read every Stephen King novel at least twice and insists &apos;The Stand&apos; is actually a self-help book.",
  },
  {
    name: "Randal",
    role: "Facilitator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Randal is a veteran of multiple recovery programs and brings decades of experience to his facilitation style. His calm demeanor and thoughtful questions help people dig deeper.",
    whyRecovery: "After 25 years of sobriety, Randal knows that recovery is a lifelong journey. He shows up every night because staying connected to newcomers keeps his own recovery fresh and meaningful.",
    funFact: "Builds intricate model trains in his spare time and has a fully operational miniature town in his basement named &apos;Serenity Springs.&apos;",
  },
  {
    name: "Jonni",
    role: "Facilitator & Outreach",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "Jonni handles outreach and social media while also facilitating meetings. Her energy is infectious, and she has a talent for meeting people exactly where they are.",
    whyRecovery: "Jonni found recovery young and realized how few resources existed for people her age. She&apos;s passionate about making Ohana accessible to the next generation of people seeking help.",
    funFact: "Has an encyclopedic knowledge of 90s sitcoms and can quote entire episodes of &apos;Friends&apos; from memory.",
  },
  {
    name: "Ty",
    role: "Tech & Facilitator",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    bio: "Ty keeps the technical side of Ohana running smoothly while also facilitating meetings. He built the website and manages the Zoom infrastructure that makes late-night meetings possible.",
    whyRecovery: "Ty used coding as an escape during his addiction. Now in recovery, he channels those same skills into building tools that help others. He believes technology should serve healing, not isolation.",
    funFact: "Has never lost a game of chess to another human — but was once defeated by a chess program he wrote himself.",
  },
  {
    name: "Nia",
    role: "Facilitator & Wellness Guide",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
    bio: "Nia incorporates mindfulness and holistic wellness into her facilitation approach. She often leads breathing exercises and grounding techniques during meetings.",
    whyRecovery: "Nia discovered that addiction was a symptom of deeper disconnection. Through yoga and meditation, she found tools that complemented her recovery. Now she shares these practices with the Ohana community.",
    funFact: "Can hold a headstand for over 10 minutes and once taught a yoga class to a group of skeptical bikers — who all came back the next week.",
  },
]

function CrewCard({ member, index }: { member: CrewMember; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="perspective-1000"
    >
      <motion.div
        className="relative h-[500px] cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Front of card */}
        <motion.div
          className={`absolute inset-0 backface-hidden rounded-2xl overflow-hidden ${
            isFlipped ? "pointer-events-none" : ""
          }`}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-full bg-gradient-to-b from-dark-800/50 to-dark-900/80 border border-dark-700 rounded-2xl overflow-hidden group">
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-1">{member.name}</h3>
              <p className="text-teal text-sm font-medium mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                {member.bio}
              </p>
            </div>

            {/* Tap indicator */}
            <div className="absolute bottom-4 right-4 text-gray-500 text-xs flex items-center gap-1">
              <span>Tap to learn more</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &rarr;
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className={`absolute inset-0 backface-hidden rounded-2xl overflow-hidden ${
            !isFlipped ? "pointer-events-none" : ""
          }`}
          initial={{ rotateY: -180 }}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-full bg-gradient-to-b from-dark-800 to-dark-900 border border-teal/30 rounded-2xl p-6 flex flex-col">
            <h3 className="text-xl font-bold text-teal mb-4">{member.name}</h3>

            {/* Why Recovery */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Why Recovery Work?
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {member.whyRecovery}
              </p>
            </div>

            {/* Fun Fact */}
            <div className="mt-auto">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Fun Fact
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed italic">
                {member.funFact}
              </p>
            </div>

            {/* Tap indicator */}
            <div className="absolute bottom-4 right-4 text-gray-500 text-xs flex items-center gap-1">
              <motion.span
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &larr;
              </motion.span>
              <span>Tap to go back</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function CrewGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These are the people who show up night after night, not because they have to,
            but because they remember what it was like to need someone there.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {crewMembers.map((member, index) => (
            <CrewCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Join the crew CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-dark-900/60 border border-dark-700 rounded-2xl p-8 max-w-xl">
            <h3 className="text-2xl font-bold text-gray-100 mb-3">
              Want to Join the Crew?
            </h3>
            <p className="text-gray-400 mb-6">
              We&apos;re always looking for passionate people to help facilitate meetings
              and support our community.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <span>Get Involved</span>
              <span>&rarr;</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
