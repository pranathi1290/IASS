import { useState } from 'react'

const experts = [
  {
    name: 'Ayush Gupta',
    role: 'Senior Manager - EY',
  },
  {
    name: 'Sahiba Bali',
    role: 'Marketer & Startup Mentor',
  },
  {
    name: 'Aditya Arora',
    role: 'CEO, Faad Capital',
  },
  {
    name: 'Shrey Kapoor',
    role: 'Associate Director - Deloitte',
  },
  {
    name: 'Drishti Singhal',
    role: 'Head - D2C Business, Perfora',
  },
  {
    name: 'Ravi Bhandari',
    role: 'Founder - RB Venture',
  },
  {
    name: 'Nikhil Agarwal',
    role: 'Founder & Group CEO - Grip Invest',
  },
  {
    name: 'Devansh Jain',
    role: 'Founder & CEO, Culture Circle',
  },
]

function getSavedExperts() {
  try {
    const savedExperts = JSON.parse(localStorage.getItem('ascend-admin-experts'))
    return Array.isArray(savedExperts) && savedExperts.length > 0 ? savedExperts : experts
  } catch {
    return experts
  }
}

function ExpertCard({ expert }) {
  return (
    <article className="group relative h-80 min-w-[250px] overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-800 sm:min-w-[280px] md:min-w-0">
      {expert.image ? <img src={expert.image} alt={`${expert.name}, ${expert.role}`} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" /> : <div aria-hidden="true" className="absolute inset-0 bg-zinc-300" />}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-xl font-bold tracking-[-0.02em] text-white">{expert.name}</h3>
        <p className="mt-1 text-sm text-zinc-300">{expert.role}</p>
      </div>
    </article>
  )
}

function IndustryExperts() {
  const [savedExperts] = useState(getSavedExperts)

  return (
    <section id="experts" className="overflow-hidden bg-zinc-100 px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-orange-600">The people in your corner</p>
          <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.05em] text-zinc-950 sm:text-6xl">Learn from <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">industry experts.</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">Get mentored by successful entrepreneurs, VCs, startup leaders, CXOs, and investors who have built what you&apos;re building.</p>
        </div>

        <div className="mt-14 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {savedExperts.map((expert) => <ExpertCard key={expert.id || expert.name} expert={expert} />)}
        </div>
      </div>
    </section>
  )
}

export default IndustryExperts