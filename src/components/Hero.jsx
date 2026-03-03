import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-bg overflow-hidden"
    >
      {/* Grain texture */}
      <div className="grain-overlay" />

      {/* Decorative circle */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00c96e 0%, transparent 70%)',
          opacity: 0.06,
          transform: 'translate(25%, 25%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="font-sans text-sm font-bold uppercase tracking-widest text-accent mb-6"
          >
            GTA Retail Growth Partners
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-ink leading-[1.05] mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            We Get Your Brand<br />
            on{' '}
            <span className="hero-underline">Canadian Shelves.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="font-sans text-lg sm:text-xl text-ink-muted max-w-2xl leading-relaxed mb-10"
          >
            Retail Edge is GTA's boutique retail growth firm. We connect emerging
            food &amp; beverage brands with grocery buyers, distributors, and the
            shelf space they deserve.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-sans font-bold text-base px-8 py-4 rounded-full transition-colors duration-200 shadow-lg shadow-accent/20"
            >
              Get Started →
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-ink/20 hover:border-accent hover:text-accent text-ink font-sans font-bold text-base px-8 py-4 rounded-full transition-colors duration-200"
            >
              Our Services
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-6 flex items-center gap-3"
        >
          <div className="w-px h-12 bg-accent/40" />
          <span className="font-sans text-xs text-ink-muted uppercase tracking-widest">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
