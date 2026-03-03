import { useState } from 'react'
import { motion } from 'framer-motion'
import { CONFIG } from '../config'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: CONFIG.web3formsKey,
          redirect: false,
          ...form,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full font-sans text-base text-ink bg-bg border border-border rounded-xl px-5 py-3.5 placeholder:text-ink-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200'

  return (
    <section id="contact" className="py-24 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
              Get In Touch
            </p>
            <h2
              className="font-display font-black text-4xl sm:text-5xl text-ink leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to Hit the Shelves?
            </h2>
            <p className="font-sans text-base text-ink-muted leading-relaxed mb-8 max-w-md">
              Tell us about your brand, your target retailers, and where you're at. We'll
              come back with a clear assessment of what it'll take to win shelf space.
            </p>
            <a
              href={`mailto:${CONFIG.email}`}
              className="inline-flex items-center gap-2 font-sans font-bold text-accent hover:text-accent-dark transition-colors duration-200 group"
            >
              <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5h14l-7 7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M3 5v10h14V5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              {CONFIG.email}
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === 'success' ? (
              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-accent" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-sans font-bold text-xl text-ink mb-2">Message Sent!</h3>
                <p className="font-sans text-ink-muted">We'll be in touch within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Brand Inc."
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@yourbrand.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your product and which retailers you're targeting..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="font-sans text-sm text-red-500">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-sans font-bold text-base px-8 py-4 rounded-full transition-colors duration-200 shadow-lg shadow-accent/20 mt-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3"/>
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
