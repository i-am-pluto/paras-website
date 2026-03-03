import { motion } from 'framer-motion'

const differentiators = [
  {
    num: '01',
    title: 'Canadian Retail DNA',
    desc: "We built this firm on a deep understanding of Canadian grocery — how category reviews work, what buyers look for, and how shelf space is actually won.",
  },
  {
    num: '02',
    title: 'No Guesswork',
    desc: "We don't pitch every retailer. We target the right channel for your product stage, margin profile, and category fit — before a single email goes out.",
  },
  {
    num: '03',
    title: 'We Know the Landscape',
    desc: 'We know the buyer landscape at Loblaws, Sobeys, Metro, Costco, and Farm Boy — their category priorities, review timelines, and what gets a brand listed.',
  },
  {
    num: '04',
    title: 'Full-Funnel Support',
    desc: 'From first pitch to reorder velocity — we stay with you post-listing to protect your shelf and grow sell-through.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-bg border-t border-border">
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
            Why Us
          </p>
          <h2
            className="font-display font-black text-4xl sm:text-5xl text-ink max-w-xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The retail edge, defined.
          </h2>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-border rounded-3xl overflow-hidden">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-10 lg:p-12 ${
                i % 2 === 0 ? 'border-r border-border' : ''
              } ${i < 2 ? 'border-b border-border' : ''} group hover:bg-surface transition-colors duration-300`}
            >
              <span
                className="block font-display font-black text-7xl lg:text-8xl text-accent/20 group-hover:text-accent/35 transition-colors duration-300 leading-none mb-6 select-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {d.num}
              </span>
              <h3 className="font-sans font-bold text-xl text-ink mb-4">{d.title}</h3>
              <p className="font-sans text-base text-ink-muted leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
