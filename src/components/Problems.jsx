import { motion } from 'framer-motion'

const problems = [
  {
    num: '01',
    title: "You can't get a buyer meeting",
    desc: 'Cold outreach goes nowhere. No one returns calls. The category review came and went.',
  },
  {
    num: '02',
    title: "Your pitch deck isn't retailer-ready",
    desc: "Buyers want sell sheets, margins, and planogram data — not a startup deck.",
  },
  {
    num: '03',
    title: "You don't know which retailer fits",
    desc: 'Loblaws vs. Sobeys vs. Farm Boy vs. Costco — each has a completely different strategy.',
  },
  {
    num: '04',
    title: 'Distribution is a black box',
    desc: "You can't figure out which broker or distributor to work with, or why they'd take you on.",
  },
  {
    num: '05',
    title: 'Listings stall after launch',
    desc: 'You got the listing — now velocity is low, the buyer is threatening to delist, and you need help.',
  },
]

export default function Problems() {
  return (
    <section id="problems" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            The Problem
          </p>
          <h2
            className="font-display font-black text-4xl sm:text-5xl text-ink"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Sound familiar?
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`group relative bg-surface border border-border rounded-2xl p-8 cursor-default transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/5 ${
                i === 3 ? 'sm:col-start-1 lg:col-start-auto' : ''
              }`}
            >
              {/* Green left border on hover */}
              <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <span className="font-sans font-black text-3xl text-accent/50 group-hover:text-accent/80 transition-colors duration-300">
                {p.num}
              </span>
              <h3 className="font-sans font-bold text-lg text-ink mt-3 mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="font-sans text-sm text-ink-muted leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
