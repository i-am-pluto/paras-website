import { motion } from 'framer-motion'

const industries = [
  {
    name: 'Beverage',
    tagline: 'RTD, juice, energy & functional drinks',
    photo: 'photo-1556742049-0cfed4f6a45d',
    alt: 'Colorful beverage bottles',
  },
  {
    name: 'Snack & Confectionery',
    tagline: 'Chips, bars, candy & better-for-you snacks',
    photo: 'photo-1621939514649-280e2ee25f60',
    alt: 'Snack foods',
  },
  {
    name: 'Health Foods',
    tagline: 'Organic, natural & functional grocery',
    photo: 'photo-1490645935967-10de6ba17061',
    alt: 'Fresh healthy food',
  },
  {
    name: 'Imported & Ethnic',
    tagline: 'International brands entering Canadian retail',
    photo: 'photo-1578916171728-46686eac8d58',
    alt: 'International food products',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-surface border-t border-border">
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
            Industries
          </p>
          <h2
            className="font-display font-black text-4xl sm:text-5xl text-ink"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Built for your category.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-default"
            >
              {/* Image */}
              <img
                src={`https://images.unsplash.com/${ind.photo}?auto=format&fit=crop&w=600&q=80`}
                alt={ind.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark base overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />

              {/* Green tinted overlay on hover */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-400 mix-blend-multiply" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3
                  className="font-display font-bold italic text-white text-xl leading-tight mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {ind.name}
                </h3>
                <p className="font-sans text-xs text-white/70 leading-relaxed">{ind.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
