import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const experts = [
  { name: 'Ayush Gupta', role: 'Senior Manager - EY', tag: 'Consulting' },
  { name: 'Sahiba Bali', role: 'Marketer & Startup Mentor', tag: 'Growth' },
  { name: 'Aditya Arora', role: 'CEO, Faad Capital', tag: 'Investing' },
  { name: 'Shrey Kapoor', role: 'Associate Director - Deloitte', tag: 'Strategy' },
  { name: 'Drishti Singhal', role: 'Head - D2C Business, Perfora', tag: 'D2C' },
  { name: 'Ravi Bhandari', role: 'Founder - RB Venture', tag: 'Venture' },
  { name: 'Nikhil Agarwal', role: 'Founder & Group CEO - Grip Invest', tag: 'Fintech' },
  { name: 'Devansh Jain', role: 'Founder & CEO, Culture Circle', tag: 'Consumer' },
]

function getSavedExperts() {
  try {
    const savedExperts = JSON.parse(localStorage.getItem('ascend-admin-experts'))
    return Array.isArray(savedExperts) && savedExperts.length > 0 ? savedExperts : experts
  } catch {
    return experts
  }
}

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function ExpertCard({ expert }) {
  return (
    <article className="group relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-zinc-950">
      {expert.image ? (
        <img
          src={expert.image}
          alt={`${expert.name}, ${expert.role}`}
          className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(160deg,#1a1a1a_0%,#2a2a2a_45%,#111_100%)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(204,0,0,0.35),transparent_48%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-extrabold tracking-[-0.06em] text-white/10 transition duration-500 group-hover:text-white/18 sm:text-7xl">
              {getInitials(expert.name)}
            </span>
          </div>
        </div>
      )}

      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

      <div className="absolute left-4 top-4">
        <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
          {expert.tag || 'Mentor'}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div className="mb-3 h-0.5 w-8 origin-left scale-x-100 bg-brand transition duration-300 group-hover:w-12" />
        <h3 className="text-xl font-bold tracking-[-0.02em] text-white">{expert.name}</h3>
        <p className="mt-1.5 text-sm leading-5 text-white/65">{expert.role}</p>
      </div>
    </article>
  )
}

function IndustryExperts() {
  const [savedExperts] = useState(getSavedExperts)

  return (
    <section id="experts" className="relative overflow-hidden bg-zinc-50 px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 size-80 rounded-full bg-brand/[0.06] blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-brand/15 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand shadow-sm">
            The people in your corner
          </p>
          <h2 className="text-4xl font-extrabold leading-[1.0] tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-[3.6rem]">
            Learn from
            <span className="mt-1 block text-brand">industry experts.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Entrepreneurs, VCs, startup leaders, CXOs, and investors — in the room with you every week.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12">
          {['Founders', 'VCs', 'CXOs', 'Operators', 'Investors'].map((label) => (
            <span
              key={label}
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-bold tracking-wide text-zinc-600"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {savedExperts.map((expert) => (
            <ExpertCard key={expert.id || expert.name} expert={expert} />
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] bg-zinc-950 px-6 py-7 text-white sm:mt-12 sm:px-8 sm:py-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">Mentorship that compounds</p>
              <p className="mt-3 text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">
                Build beside people who have already shipped, scaled, and raised.
              </p>
            </div>
            <a
              href="#apply"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Apply to the cohort
              <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryExperts
