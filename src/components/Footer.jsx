import { BriefcaseBusiness, Camera, Send } from 'lucide-react'

const quickLinks = [
  { label: 'Program', href: '#program' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Apply', href: '#apply' },
  { label: 'Contact', href: 'mailto:hello@iass.co' },
]

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com', icon: Send },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: BriefcaseBusiness },
  { label: 'Instagram', href: 'https://instagram.com', icon: Camera },
]

function Footer() {
  return (
    <footer id="footer" className="border-t border-zinc-800 bg-zinc-950 px-6 py-10 text-zinc-400 sm:px-10 sm:py-12 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
        <a href="/" className="flex w-fit items-center gap-3 text-sm font-bold tracking-[0.18em] text-white">
          <img src="/iass-logo-white.png" alt="Indo American Startup School" className="h-10 w-auto max-w-[170px] object-contain" />
        </a>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-3 md:justify-self-end">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="grid size-10 place-items-center rounded-full border border-zinc-800 text-zinc-500 transition hover:border-indigo-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
            >
              <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-zinc-900 pt-6 text-xs text-zinc-600">© 2025 IASS. Built for the bold.</p>
    </footer>
  )
}

export default Footer