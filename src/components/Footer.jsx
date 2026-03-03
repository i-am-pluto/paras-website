import { CONFIG } from '../config'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white border-t-2 border-accent">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1: Logo + tagline */}
          <div>
            <p className="font-sans font-bold text-xl tracking-tight mb-3">
              RETAIL EDGE <span className="text-accent">•</span>
            </p>
            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xs">
              GTA Retail Growth Partners. We connect emerging food &amp; beverage brands
              with Canadian shelf space.
            </p>
          </div>

          {/* Col 2: Quick nav */}
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/55 mb-5">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: LinkedIn */}
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/55 mb-5">
              Connect
            </p>
            <a
              href={CONFIG.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-accent hover:text-white text-white/70 font-sans font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <div className="mt-6">
              <a
                href={`mailto:${CONFIG.email}`}
                className="font-sans text-sm text-accent hover:text-white transition-colors duration-200"
              >
                {CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/50">
            © 2025 Retail Edge | GTA Retail Growth Partners
          </p>
          <p className="font-sans text-xs text-white/50">
            Toronto, Ontario, Canada
          </p>
        </div>
      </div>
    </footer>
  )
}
