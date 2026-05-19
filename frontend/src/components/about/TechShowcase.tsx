"use client"

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import type { MouseEvent } from "react"
import { useRef, useState, useEffect } from "react"

const techStack = [
  { name: "Next.js 16", icon: "▲", color: "#000000", description: "App Router & Server Components" },
  { name: "React 19", icon: "⚛️", color: "#61DAFB", description: "Latest React with Compiler" },
  { name: "TypeScript", icon: "TS", color: "#3178C6", description: "Full Type Safety" },
  { name: "Tailwind CSS", icon: "🎨", color: "#06B6D4", description: "Utility-First Styling" },
  { name: "Framer Motion", icon: "🎬", color: "#FF0055", description: "Production Animations" },
  { name: "Three.js", icon: "🎲", color: "#049EF4", description: "3D Graphics & WebGL" },
  { name: "Django", icon: "🐍", color: "#092E20", description: "Python Backend Framework" },
  { name: "Vercel", icon: "▲", color: "#000000", description: "Edge Network Deployment" },
  { name: "Railway", icon: "🚂", color: "#0B0D0E", description: "Backend Infrastructure" },
]

function TechCard({ tech, index }: { tech: typeof techStack[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  // Enhanced parallax by ~20%: 7deg → 8.5deg
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8.5deg", "-8.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8.5deg", "8.5deg"])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
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
        className="bg-dark-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 h-full hover:bg-dark-900 transition-colors"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Floating icon with enhanced parallax */}
        <motion.div
          style={{ transform: "translateZ(50px)" }}
          animate={{ y: isHovered ? -6 : 0 }}
          className="text-4xl mb-4"
        >
          {tech.icon}
        </motion.div>

        <motion.h3
          style={{ transform: "translateZ(38px)" }}
          className="text-lg font-bold text-gray-100 mb-1"
        >
          {tech.name}
        </motion.h3>

        <motion.p
          style={{ transform: "translateZ(25px)" }}
          className="text-gray-500 text-sm"
        >
          {tech.description}
        </motion.p>

        {/* Shine effect with softer edges */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.1 : 0,
            background: `linear-gradient(135deg, transparent 40%, ${tech.color} 50%, transparent 60%)`,
          }}
          className="absolute inset-0 rounded-2xl md:rounded-3xl"
        />
      </motion.div>
    </motion.div>
  )
}

function PerformanceMetrics() {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    loaded: false,
  })

  useEffect(() => {
    // Get real performance metrics from the browser
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

      // Use PerformanceObserver for real Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: Math.round(entry.startTime) }))
          }
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: Math.round(entry.startTime) }))
          }
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: Math.round((entry as any).processingStart - entry.startTime) }))
          }
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: prev.cls + (entry as any).value }))
          }
        }
      })

      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (e) {
        // Fallback if some metrics aren't supported
      }

      // Get TTFB from navigation timing
      if (perfData) {
        const ttfb = Math.round(perfData.responseStart - perfData.requestStart)
        setMetrics(prev => ({ ...prev, ttfb, loaded: true }))
      }

      return () => observer.disconnect()
    }
  }, [])

  const performanceStats = [
    {
      label: "First Contentful Paint",
      value: metrics.fcp || "...",
      unit: "ms",
      icon: "⚡",
      color: "#FFD700",
      benchmark: "< 1800ms (Excellent)",
      grade: metrics.fcp < 1800 ? "A+" : metrics.fcp < 3000 ? "A" : "B"
    },
    {
      label: "Largest Contentful Paint",
      value: metrics.lcp || "...",
      unit: "ms",
      icon: "🎨",
      color: "#14b8a6",
      benchmark: "< 2500ms (Good)",
      grade: metrics.lcp < 2500 ? "A+" : metrics.lcp < 4000 ? "A" : "B"
    },
    {
      label: "Time to First Byte",
      value: metrics.ttfb || "...",
      unit: "ms",
      icon: "🚀",
      color: "#a855f7",
      benchmark: "< 800ms (Fast)",
      grade: metrics.ttfb < 800 ? "A+" : metrics.ttfb < 1800 ? "A" : "B"
    },
    {
      label: "Cumulative Layout Shift",
      value: metrics.cls ? metrics.cls.toFixed(3) : "...",
      unit: "",
      icon: "📐",
      color: "#f59e0b",
      benchmark: "< 0.1 (Good)",
      grade: metrics.cls < 0.1 ? "A+" : metrics.cls < 0.25 ? "A" : "B"
    },
  ]

  return (
    <div className="mt-12">
      {/* Performance Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal/10 to-purple/10 border border-teal/30 rounded-full px-6 py-3 mb-4">
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-2xl"
          >
            ⚡
          </motion.span>
          <span className="text-teal font-bold text-sm tracking-wider uppercase">
            Live Performance Metrics
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-100 mb-2">
          Real-Time Core Web Vitals
        </h3>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          These are actual performance measurements from your current browsing session.
          We use Vercel Edge Network and Next.js 16 optimizations for blazing-fast load times.
        </p>
      </motion.div>

      {/* Performance Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="relative group"
          >
            <div className="bg-dark-900/80 backdrop-blur-sm border border-transparent rounded-2xl p-6 hover:border-teal/30 transition-all duration-300">
              {/* Grade Badge */}
              <div className="absolute -top-3 -right-3">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="bg-gradient-to-br from-teal to-purple text-white font-bold text-xs px-3 py-1 rounded-full shadow-lg"
                >
                  {stat.grade}
                </motion.div>
              </div>

              {/* Icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="text-4xl mb-3"
              >
                {stat.icon}
              </motion.div>

              {/* Value */}
              <div className="mb-3">
                <motion.span
                  key={stat.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl font-black text-gray-100"
                >
                  {stat.value}
                </motion.span>
                <span className="text-xl text-teal ml-1">{stat.unit}</span>
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-gray-300 mb-2">
                {stat.label}
              </div>

              {/* Benchmark */}
              <div className="text-xs text-gray-500 border-t border-dark-700 pt-2 mt-2">
                {stat.benchmark}
              </div>

              {/* Glow effect */}
              <motion.div
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                className="absolute inset-0 rounded-2xl blur-xl pointer-events-none"
                style={{ backgroundColor: stat.color, opacity: 0 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Flex Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {[
          { label: "Edge Locations", value: "300+", icon: "🌍" },
          { label: "CDN Latency", value: "< 50ms", icon: "⏱️" },
          { label: "Uptime", value: "99.99%", icon: "✅" },
          { label: "Global Reach", value: "190+ Countries", icon: "🚀" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-dark-800/50 rounded-xl p-4 text-center"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-xl font-bold text-teal mb-1">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Technical Brag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-2 bg-dark-800/50 rounded-full px-6 py-3">
          <span className="text-2xl">💪</span>
          <span className="text-gray-400 text-sm">
            Powered by <span className="text-teal font-semibold">Vercel Edge Network</span> ·
            Optimized with <span className="text-purple font-semibold">Turbopack</span> ·
            Built with <span className="text-teal font-semibold">React Server Components</span>
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default function TechShowcase() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Animated code background */}
      <motion.div
        animate={{ opacity: isExpanded ? 0.05 : 0 }}
        className="absolute inset-0 font-mono text-xs text-teal overflow-hidden pointer-events-none"
      >
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
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Collapsible Header Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full text-center mb-10 bg-dark-900/50 hover:bg-dark-900/70 border-2 border-transparent hover:border-teal/30 rounded-2xl p-6 transition-all duration-300"
        >
          <div className="flex items-center justify-center gap-4">
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl"
            >
              🤓
            </motion.span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-1">
                Info for Nerds
              </h2>
              <p className="text-gray-400 text-sm">
                {isExpanded ? "Click to hide" : "Click to see our tech stack"}
              </p>
            </div>
            <motion.svg
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="w-6 h-6 text-teal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </div>
        </motion.button>

        {/* Collapsible Tech Stack Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {/* Tech Stack Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-10"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3">
                  The Stack
                </h3>
                <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                  Cutting-edge tools and frameworks that power this experience
                </p>
              </motion.div>

              {/* 3D Tilting tech cards grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12" style={{ perspective: "1000px" }}>
                {techStack.map((tech, i) => (
                  <TechCard key={tech.name} tech={tech} index={i} />
                ))}
              </div>

              {/* Elegant Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.3 }}
                className="relative my-16"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-dark-700"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-black px-6 py-2 text-gray-500 text-xs uppercase tracking-widest rounded-full">
                    Performance Metrics
                  </span>
                </div>
              </motion.div>

              {/* Real-Time Performance Metrics */}
              <PerformanceMetrics />

              {/* Fun developer note */}
              <div className="text-center mt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-dark-800/50 rounded-full px-6 py-3"
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
