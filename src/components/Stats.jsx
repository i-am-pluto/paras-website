import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const startedRef = useRef(false)

  const start = () => {
    if (startedRef.current) return
    startedRef.current = true
    const startTime = performance.now()
    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  return [count, start]
}

const highlights = [
  {
    prefix: '',
    value: 5,
    suffix: '',
    label: 'Core Services',
    detail: 'Strategy · Pitch · Listing · Execution · Growth',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    prefix: '$',
    value: 130,
    suffix: 'B+',
    label: 'Canadian Grocery Market',
    detail: "Canada's largest retail sector — and we know every door in it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    prefix: '',
    value: 1,
    suffix: '',
    label: 'Free Intro Call',
    detail: 'No pitch decks needed. Just tell us about your brand.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.92z" />
      </svg>
    ),
  },
]

export default function Stats() {
  const sectionRef = useRef(null)
  const [hovered, setHovered] = useState(null)

  const [c1, start1] = useCountUp(highlights[0].value)
  const [c2, start2] = useCountUp(highlights[1].value)
  const [c3, start3] = useCountUp(highlights[2].value)

  const counts = [c1, c2, c3]
  const starters = [start1, start2, start3]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          starters.forEach((s) => s())
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-ink border-y border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex flex-col items-center text-center px-8 py-12 gap-3 cursor-default group"
            >
              {/* Icon */}
              <div className="text-accent/50 group-hover:text-accent transition-colors duration-300 mb-1">
                {h.icon}
              </div>

              {/* Number */}
              <span
                className="font-display font-black text-6xl lg:text-7xl text-white leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {h.prefix}
                {counts[i]}
                <span className="text-accent">{h.suffix}</span>
              </span>

              {/* Label */}
              <span className="font-sans font-semibold text-sm text-white/60 uppercase tracking-wider">
                {h.label}
              </span>

              {/* Detail reveal on hover */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.p
                    key="detail"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.22 }}
                    className="font-sans text-xs text-white/40 leading-relaxed max-w-[200px] mt-1"
                  >
                    {h.detail}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
