import { BriefcaseBusiness, Camera, Send } from 'lucide-react'
import { useState } from 'react'

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
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    if (import.meta.env.PROD) {
      const response = await fetch('/api/contact-messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) return
    } else {
      const messages = JSON.parse(localStorage.getItem('ascend-admin-contact-messages') || '[]')
      localStorage.setItem('ascend-admin-contact-messages', JSON.stringify([
        ...messages,
        { ...form, id: `contact-${Date.now()}`, createdAt: new Date().toISOString() },
      ]))
    }
    setForm({ name: '', email: '', message: '' })
    setSubmitted(true)
  }

  return (
    <footer id="footer" className="border-t border-zinc-200 bg-white px-6 py-14 text-zinc-600 sm:px-10 sm:py-16 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-20">
        <a href="/" className="flex w-fit items-center">
          <img src="/iass-logo.png" alt="Indo American Startup School" className="h-11 w-auto max-w-[190px] object-contain" />
        </a>

        <div className="grid gap-10 sm:grid-cols-[auto_1fr] sm:gap-14">
        <nav aria-label="Footer navigation">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Explore</p>
          <ul className="space-y-3 text-sm font-semibold">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Contact us</p>
          <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
            <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" aria-label="Your name" className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-brand" />
            <input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="Email address" aria-label="Email address" className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-brand" />
            <textarea required rows="3" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="How can we help?" aria-label="Your message" className="resize-none rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-brand sm:col-span-2" />
            <div className="flex items-center justify-between gap-3 sm:col-span-2"><button type="submit" className="rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark">Send message</button>{submitted && <span className="text-xs font-semibold text-brand" role="status">Message sent.</span>}</div>
          </form>
        </div>
        </div>
        <div className="flex gap-3 lg:col-start-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="grid size-10 place-items-center rounded-full border border-zinc-200 text-zinc-500 transition hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-zinc-100 pt-6 text-xs text-zinc-400">© 2026 IASS. Built for the bold.</p>
    </footer>
  )
}

export default Footer
