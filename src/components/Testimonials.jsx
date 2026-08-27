import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Aarav Mehta',
    startup: 'Loopspace',
    quote: 'IASS gave us the confidence to stop guessing. We launched our MVP in four weeks and had our first 100 users before Demo Day.',
    initials: 'AM',
    photoColor: 'from-rose-200 to-brand',
  },
  {
    name: 'Diya Shah',
    startup: 'Nourish AI',
    quote: 'The customer conversations changed everything. We came in with an idea and left with a product people were actively asking to use.',
    initials: 'DS',
    photoColor: 'from-red-200 to-brand-dark',
  },
  {
    name: 'Rohan Iyer',
    startup: 'Pactful',
    quote: 'The room is full of people who understand the messy middle. Every week brought sharper thinking, better questions, and real momentum.',
    initials: 'RI',
    photoColor: 'from-rose-100 to-red-500',
  },
]

function getSavedTestimonials() {
  try {
    const savedTestimonials = JSON.parse(localStorage.getItem('ascend-admin-testimonials'))
    return Array.isArray(savedTestimonials) && savedTestimonials.length > 0 ? savedTestimonials : testimonials
  } catch {
    return testimonials
  }
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [savedTestimonials] = useState(getSavedTestimonials)

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + savedTestimonials.length) % savedTestimonials.length)
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % savedTestimonials.length)
  }

  return (
    <section id="testimonials" className="bg-zinc-50 px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12" aria-label="Founder testimonials">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-zinc-200 pb-8 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand">From the cohort</p>
            <h2 className="max-w-xl text-3xl font-extrabold tracking-[-0.04em] text-zinc-950 sm:text-5xl">They came to build. They left with momentum.</h2>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={showPrevious} aria-label="Previous testimonial" className="grid size-11 place-items-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button type="button" onClick={showNext} aria-label="Next testimonial" className="grid size-11 place-items-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(15,15,15,0.06)]" aria-live="polite">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {savedTestimonials.map(({ name, startup, quote, initials, photoColor, image }) => (
              <article key={name} className="grid min-w-full gap-8 p-7 sm:p-10 lg:grid-cols-[180px_1fr] lg:items-center lg:gap-14 lg:p-14">
                <div className={`flex aspect-[4/5] w-32 items-end justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${photoColor || 'from-rose-200 to-brand'} text-3xl font-extrabold tracking-[-0.06em] text-white shadow-lg shadow-brand/10 sm:w-40`} aria-label={`Photo placeholder for ${name}`} role="img">
                  {image ? <img src={image} alt={name} className="size-full object-cover" /> : initials || name.slice(0, 2).toUpperCase()}
                </div>
                <div className="max-w-3xl">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <Quote size={30} className="text-brand" fill="currentColor" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Founder story</span>
                  </div>
                  <blockquote className="text-2xl font-bold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-4xl sm:leading-[1.12]">“{quote}”</blockquote>
                  <footer className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <cite className="font-bold not-italic text-brand">{name}</cite>
                    <span className="text-zinc-300">/</span>
                    <span className="text-zinc-500">Founder, {startup}</span>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Choose a testimonial">
          {savedTestimonials.map(({ name }, index) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Show testimonial from ${name}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${activeIndex === index ? 'w-8 bg-brand' : 'w-2 bg-zinc-300 hover:bg-zinc-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
