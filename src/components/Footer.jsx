import { ArrowUpRight, BriefcaseBusiness, Camera, Check, Mail, Send, Share2 } from 'lucide-react'
import { useState } from 'react'

const quickLinks = [
  { label: 'Program', href: '#program' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Apply', href: '#apply' },
  { label: 'Contact', href: '#footer' },
]

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com', icon: Share2 },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: BriefcaseBusiness },
  { label: 'Instagram', href: 'https://instagram.com', icon: Camera },
]

function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
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
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-brand/50 focus:bg-white/10 focus:ring-2 focus:ring-brand/20'

  return (
    <footer id="footer" className="relative overflow-hidden bg-zinc-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 size-80 rounded-full bg-brand/[0.12] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-16 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_auto_minmax(0,1.25fr)] lg:gap-12 xl:gap-16">
          <div>
            <a href="/" className="inline-flex items-center">
              <img
                src="/iass-logo-white.png"
                alt="Indo American Startup School"
                className="h-11 w-auto max-w-[200px] object-contain"
              />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
              A six-week on-campus sprint for founders in India — build your MVP, find your first users, and pitch with confidence.
            </p>

            <a
              href="mailto:hello@iass.co"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <Mail size={15} aria-hidden="true" />
              hello@iass.co
            </a>

            <div className="mt-6 flex gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-brand/40 hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  <Icon size={16} strokeWidth={1.9} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation" className="lg:px-2">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">Explore</p>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    {label}
                    <ArrowUpRight size={13} className="text-white/25 transition group-hover:text-brand" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">Contact us</p>
            <p className="mt-1 text-sm text-white/50">Questions about the cohort? Send us a note.</p>

            {submitted ? (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-brand/20 bg-brand/10 px-4 py-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Message sent.</p>
                  <p className="mt-1 text-xs leading-5 text-white/55">We&apos;ll get back to you as soon as we can.</p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs font-bold text-brand transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="sr-only">Your name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="sr-only">Email address</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    placeholder="Email address"
                    className={inputClass}
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="sr-only">How can we help?</span>
                  <textarea
                    required
                    rows="3"
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    placeholder="How can we help?"
                    className={`${inputClass} resize-none leading-6`}
                  />
                </label>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(204,0,0,0.28)] transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:cursor-wait disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                    {!isSubmitting && <Send size={14} strokeWidth={2.4} aria-hidden="true" />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">© 2026 Indo American Startup School. Built for the bold.</p>
          <p className="text-xs font-semibold text-white/35">
            Bengaluru · 6 weeks · Free for selected founders
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
