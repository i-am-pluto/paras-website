import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We audit your brand, pricing, and margins. Then we build a targeted retailer list and go-to-market timeline.',
  },
  {
    num: '02',
    title: 'Retail Sell-In',
    desc: 'We prepare your pitch materials and make warm introductions to the right buyers and distributors.',
  },
  {
    num: '03',
    title: 'Execution & Growth',
    desc: 'Post-listing, we drive velocity through demos, promotional strategy, and ongoing buyer relationship management.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Our Process
          </p>
          <h2
            className="font-display font-black text-4xl sm:text-5xl text-ink max-w-xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            How we get you listed.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex-1 flex flex-col lg:flex-row"
            >
              {/* Connector line (horizontal on desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-[calc(100%-0px)] w-full h-px"
                  style={{
                    background: 'linear-gradient(to right, var(--color-accent), var(--color-border))',
                    left: 'calc(48px + 1rem)',
                    width: 'calc(100% - 48px - 2rem)',
                  }}
                />
              )}

              {/* Vertical connector for mobile */}
              {i < steps.length - 1 && (
                <div className="lg:hidden absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-accent to-border" />
              )}

              <div className="flex lg:flex-col gap-6 p-6 lg:p-0 lg:pr-16">
                {/* Circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
                  <span className="font-sans font-black text-sm text-white">{step.num}</span>
                </div>

                {/* Content */}
                <div className="pt-1 pb-8 lg:pb-0 lg:pt-8">
                  <h3 className="font-sans font-bold text-xl text-ink mb-3">{step.title}</h3>
                  <p className="font-sans text-base text-ink-muted leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
