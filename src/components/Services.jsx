import { motion } from 'framer-motion'

const services = [
  {
    title: 'Retail Sales Strategy',
    desc: 'Channel prioritization, retailer targeting, and go-to-market roadmaps built for Canadian grocery.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M8 32L16 20L24 26L32 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="10" r="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M6 36H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: 'Buyer Introductions & Sell-In',
    desc: 'We open doors. Direct relationships with category managers at major Canadian grocery chains.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="28" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M6 32C6 26.477 9.582 22 14 22C18.418 22 22 26.477 22 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M22 32C22 26.477 25.582 22 30 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 2"/>
      </svg>
    ),
  },
  {
    title: 'Pitch & Sell Sheet Design',
    desc: 'Buyer-ready sell sheets, one-pagers, and retail pitch decks that communicate margin, velocity, and fit.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="8" y="6" width="24" height="30" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M14 14H26M14 20H26M14 26H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <circle cx="28" cy="28" r="6" fill="var(--color-accent)" opacity="0.15"/>
        <path d="M26 28L28 30L31 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Distribution & Broker Matching',
    desc: 'We identify the right broker or distributor for your product, category, and retail targets.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="6" y="22" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="24" y="22" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="15" y="8" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M11 22V18C11 17.448 11.448 17 12 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M29 22V18C29 17.448 28.552 17 28 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 18V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'In-Store Execution & Velocity',
    desc: 'Post-listing support: demos, promotional planning, and data-driven reorder strategy to keep your shelf.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M6 10H34L30 26H10L6 10Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="14" cy="32" r="2.5" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="28" cy="32" r="2.5" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M10 16H30M11 20H29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: 'Regulatory & Labeling Guidance',
    desc: "Canadian retail has strict label requirements — bilingual copy, CFIA-compliant nutrition facts, and lot codes. We flag gaps before a buyer does.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M20 6L34 12V22C34 29.18 27.84 35.26 20 37C12.16 35.26 6 29.18 6 22V12L20 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M14 20L18 24L27 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Category & Competitive Analysis',
    desc: 'Shelf mapping, pricing benchmarks, and white-space identification — so you walk into every pitch knowing exactly where your product wins.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="18" cy="18" r="11" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M26.5 26.5L34 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M13 18H23M18 13V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Services
          </p>
          <h2
            className="font-display font-black text-4xl sm:text-5xl text-ink"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Your full retail growth team.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative bg-bg border border-border rounded-2xl p-8 cursor-default overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5"
            >
              {/* Green top border on hover */}
              <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="text-accent mb-5">{s.icon}</div>
              <h3 className="font-sans font-bold text-lg text-ink mb-3">{s.title}</h3>
              <p className="font-sans text-sm text-ink-muted leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
