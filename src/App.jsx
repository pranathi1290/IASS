import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Ecosystem from './components/Ecosystem'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ApplyForm from './components/ApplyForm'
import IndustryExperts from './components/IndustryExperts'
import ProgramOverview from './components/ProgramOverview'
import ReferenceSections from './components/ReferenceSections'
import Timeline from './components/Timeline'
import Testimonials from './components/Testimonials'
import WhoShouldApply from './components/WhoShouldApply'

const navLinks = [
  { href: '#who-should-apply', label: 'About' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#program', label: 'Program' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#experts', label: 'Mentors' },
  { href: '#testimonials', label: 'Pitch Day' },
  { href: '#footer', label: 'Contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="bg-white text-zinc-950">
      <header className="sticky top-0 z-50">
        <p className="bg-brand px-4 py-2 text-center text-[11px] font-semibold tracking-[0.12em] text-white uppercase sm:px-10 sm:text-xs sm:tracking-[0.14em]">
          <span className="sm:hidden">Applications open · Hyderabad</span>
          <span className="hidden sm:inline">Applications open · 6-week on-campus cohort · Hyderabad</span>
        </p>

        <nav className="border-b border-zinc-200/80 bg-white/95 px-6 backdrop-blur-md sm:px-10 lg:px-12">
          <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
            <a href="#home" className="relative z-10 flex shrink-0 items-center" onClick={closeMenu}>
              <img src="/iass-logo.png" alt="Indo American Startup School" className="h-9 w-auto max-w-[168px] object-contain sm:h-10" />
            </a>

            <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:flex">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="relative py-1 text-[13px] font-semibold tracking-wide text-zinc-600 after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:bg-brand after:transition after:duration-200 hover:text-zinc-950 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="relative z-10 flex items-center gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-[13px] font-bold text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:px-5"
              >
                Apply
                <span className="hidden sm:inline">Now</span>
                <ArrowUpRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </a>
              <button
                type="button"
                className="grid size-10 place-items-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-brand hover:text-brand xl:hidden"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-zinc-100 py-4 xl:hidden">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="block rounded-xl px-3 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-brand-soft hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      <Hero />
      <Ecosystem />
      <ProgramOverview />
      <WhoShouldApply />
      <Timeline />
      <IndustryExperts />
      <ReferenceSections />
      <Testimonials />
      <FAQ />
      <ApplyForm />
      <Footer />
    </div>
  )
}

export default App
