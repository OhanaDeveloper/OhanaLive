"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"

const techStack = [
  { name: "Next.js 16", icon: "▲", color: "#000000", description: "App Router & Server Components" },
  { name: "React 19", icon: "⚛️", color: "#61DAFB", description: "Latest React with Compiler" },
  { name: "TypeScript", icon: "TS", color: "#3178C6", description: "Full Type Safety" },
  { name: "Tailwind CSS", icon: "🎨", color: "#06B6D4", description: "Utility-First Styling" },
  { name: "Framer Motion", icon: "🎬", color: "#FF0055", description: "Production Animations" },
  { name: "Three.js", icon: "🌐", color: "#049EF4", description: "3D WebGL Graphics" },
]

function TechCard({ tech, index }: { tech: typeof techStack[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer"
    >
      <motion.div
        animate={{
          boxShadow: isHovered
            ? `0 20px 40px -20px ${tech.color}40`
            : "0 0 0 transparent",
        }}
        className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full hover:border-gray-700 transition-colors"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Floating icon */}
        <motion.div
          style={{ transform: "translateZ(40px)" }}
          animate={{ y: isHovered ? -5 : 0 }}
          className="text-4xl mb-4"
        >
          {tech.icon}
        </motion.div>

        <motion.h3
          style={{ transform: "translateZ(30px)" }}
          className="text-lg font-bold text-gray-100 mb-1"
        >
          {tech.name}
        </motion.h3>

        <motion.p
          style={{ transform: "translateZ(20px)" }}
          className="text-gray-500 text-sm"
        >
          {tech.description}
        </motion.p>

        {/* Shine effect */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.1 : 0,
            background: `linear-gradient(135deg, transparent 40%, ${tech.color} 50%, transparent 60%)`,
          }}
          className="absolute inset-0 rounded-xl"
        />
      </motion.div>
    </motion.div>
  )
}

export default function TechShowcase() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Animated code background */}
      <div className="absolute inset-0 opacity-5 font-mono text-xs text-accent overflow-hidden">
        <motion.div
          animate={{ y: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="whitespace-pre leading-relaxed"
        >
          {`const ohana = {
  mission: "connection",
  hours: "11pm-3am",
  welcome: true,
};

function Recovery() {
  const [hope, setHope] = useState(true);
  const community = useContext(OhanaContext);

  useEffect(() => {
    community.join();
    return () => community.support();
  }, []);

  return <Connection hope={hope} />;
}

export default function Life() {
  return (
    <Recovery>
      <YouAreNotAlone />
    </Recovery>
  );
}`.repeat(5)}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent/80 text-sm font-mono tracking-widest uppercase mb-4 block">
            Built With
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Modern Tech Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Crafted with cutting-edge tools and best practices.
            Because our community deserves the best.
          </p>
        </motion.div>

        {/* 3D Tilting cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {techStack.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>

        {/* Fun developer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-6 py-3"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👨‍💻
            </motion.span>
            <span className="text-gray-400 text-sm">
              Made with <span className="text-red-400">♥</span> and way too much coffee
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
