import { Menu, X } from 'lucide-react'
import { useState } from 'react'
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
  { href: '#program', label: 'Programs' },
  { href: '#testimonials', label: 'Pitch Day' },
  { href: '#footer', label: 'Contact Us' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="bg-white text-zinc-950">
      <nav className="sticky top-0 z-50 border-b border-zinc-200/80 border-t-2 border-t-brand bg-white/90 px-6 backdrop-blur-md sm:px-10 lg:px-12">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6">
          <a href="#home" className="flex shrink-0 items-center" onClick={closeMenu}>
            <img src="/iass-logo.png" alt="Indo American Startup School" className="h-10 w-auto max-w-[180px] object-contain sm:h-11" />
          </a>

          <ul className="hidden items-center gap-8 text-sm font-semibold text-zinc-600 lg:flex">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <a href={href} className="whitespace-nowrap transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Apply Now
            </a>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-brand hover:text-brand lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-zinc-100 py-4 lg:hidden">
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
      <Hero />
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
