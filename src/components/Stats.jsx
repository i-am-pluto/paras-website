import { motion } from 'framer-motion'

const pillars = [
  {
    step: '01',
    tag: 'Where to play',
    title: 'Retail Strategy',
    desc: 'We map your category, margin stack, and product stage to identify the right retailers — before a single email goes out.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 32L16 20L24 26L32 10" />
        <circle cx="32" cy="10" r="3" />
        <path d="M6 36H34" strokeWidth="2" opacity="0.3" />
      </svg>
    ),
  },
  {
    step: '02',
    tag: 'How to get in',
    title: 'Buyer Access',
    desc: "We know the buyer landscape at Canada's major chains — who to call, what they need to see, and how to get a real meeting booked.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="6" />
        <circle cx="28" cy="14" r="6" />
        <path d="M6 32C6 26.477 9.582 22 14 22C18.418 22 22 26.477 22 32" />
        <path d="M22 32C22 26.477 25.582 22 30 22" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    step: '03',
    tag: 'How to stay',
    title: 'Growth Support',
    desc: 'Getting listed is the beginning. We stay with you through in-store demos, reorder strategy, and ongoing velocity growth.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L34 12V22C34 29.18 27.84 35.26 20 37C12.16 35.26 6 29.18 6 22V12L20 6Z" />
        <path d="M14 20L18 24L27 15" />
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <section className="bg-ink border-y border-white/10 py-20 overflow-hidden relative">
      {/* Subtle green glow at bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 110%, #00c96e0a 0%, transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent mb-12 text-center"
        >
          How We Work
        </motion.p>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative flex flex-col px-8 py-10 gap-5 cursor-default"
            >
              {/* Top accent bar slides in on hover */}
              <div className="absolute top-0 left-8 right-8 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Step number + icon row */}
              <div className="flex items-start justify-between">
                <span
                  className="font-display font-black text-6xl text-white/8 group-hover:text-white/14 transition-colors duration-300 leading-none select-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {p.step}
                </span>
                <div className="text-accent/45 group-hover:text-accent transition-colors duration-300 mt-1">
                  {p.icon}
                </div>
              </div>

              {/* Tag */}
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent/45 group-hover:text-accent transition-colors duration-300">
                {p.tag}
              </span>

              {/* Title */}
              <h3
                className="font-display font-black text-2xl text-white leading-snug"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {p.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-white/45 leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
