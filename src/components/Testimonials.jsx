import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Aarav Mehta',
    startup: 'Loopspace',
    quote: 'IASS gave us the confidence to stop guessing. We launched our MVP in four weeks and had our first 100 users before Demo Day.',
    initials: 'AM',
    photoColor: 'from-brand-dark via-brand to-rose-500',
  },
  {
    name: 'Diya Shah',
    startup: 'Nourish AI',
    quote: 'The customer conversations changed everything. We came in with an idea and left with a product people were actively asking to use.',
    initials: 'DS',
    photoColor: 'from-zinc-900 via-brand-dark to-brand',
  },
  {
    name: 'Rohan Iyer',
    startup: 'Pactful',
    quote: 'The room is full of people who understand the messy middle. Every week brought sharper thinking, better questions, and real momentum.',
    initials: 'RI',
    photoColor: 'from-rose-700 via-brand to-red-400',
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

function getInitials(name, fallback) {
  if (fallback) return fallback
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [savedTestimonials] = useState(getSavedTestimonials)
  const total = savedTestimonials.length
  const active = savedTestimonials[activeIndex]
  const initials = getInitials(active.name, active.initials)
  const photoColor = active.photoColor || 'from-brand-dark via-brand to-rose-500'
  const progress = total > 1 ? ((activeIndex + 1) / total) * 100 : 100

  const goTo = useCallback(
    (index) => {
      if (index === activeIndex || isAnimating) return
      setIsAnimating(true)
      setActiveIndex(index)
      window.setTimeout(() => setIsAnimating(false), 400)
    },
    [activeIndex, isAnimating],
  )

  function showPrevious() {
    goTo((activeIndex - 1 + total) % total)
  }

  function showNext() {
    goTo((activeIndex + 1) % total)
  }

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'ArrowLeft') goTo((activeIndex - 1 + total) % total)
      if (event.key === 'ArrowRight') goTo((activeIndex + 1) % total)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex, goTo, total])

  return (
    <section id="testimonials" className="relative overflow-hidden bg-zinc-50 px-6 py-14 text-zinc-950 sm:px-10 sm:py-20 lg:px-12" aria-label="Founder testimonials">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(204,0,0,0.07),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full border border-brand/15 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand shadow-sm">
            From the cohort
          </p>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-zinc-950 sm:text-4xl lg:text-[2.75rem]">
            They came to build.{' '}
            <span className="text-brand">They left with momentum.</span>
          </h2>
          {total > 1 && (
            <p className="mt-3 text-sm font-semibold text-zinc-500">
              {total} founder stories · swipe or use arrows to explore
            </p>
          )}
        </div>

        <div className="relative mt-10">
          <article
            className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_28px_80px_rgba(15,15,15,0.10)]"
            aria-live="polite"
          >
            <div className="grid lg:grid-cols-[minmax(0,17.5rem)_1fr]">
              <div
                className={`relative min-h-[16rem] overflow-hidden bg-gradient-to-br ${photoColor} transition-opacity duration-300 lg:min-h-[22rem] ${isAnimating ? 'opacity-80' : 'opacity-100'}`}
              >
                {active.image ? (
                  <>
                    <img src={active.image} alt="" className="absolute inset-0 size-full object-cover" />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                  </>
                ) : (
                  <>
                    <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_50%)]" />
                    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[5.5rem] font-extrabold tracking-[-0.08em] text-white/20 sm:text-[6.5rem]">
                        {initials}
                      </span>
                    </div>
                  </>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16 lg:p-7 lg:pt-20">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">Founder</p>
                  <cite className="mt-1 block text-xl font-extrabold not-italic tracking-[-0.03em] text-white">
                    {active.name}
                  </cite>
                  <p className="mt-1 text-sm font-semibold text-white/70">{active.startup}</p>
                </div>
              </div>

              <div className="relative flex flex-col bg-zinc-950 p-6 sm:p-8 lg:p-10">
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(155deg,#101010_0%,#181818_50%,#0a0a0a_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(204,0,0,0.22),transparent_45%)]" />
                </div>

                <div className={`relative flex flex-1 flex-col transition-all duration-300 ${isAnimating ? 'translate-y-1 opacity-0' : 'translate-y-0 opacity-100'}`}>
                  <Quote
                    size={44}
                    className="text-brand/35"
                    fill="currentColor"
                    strokeWidth={0}
                    aria-hidden="true"
                  />

                  <blockquote className="mt-4 flex-1 text-xl font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-2xl sm:leading-[1.22] lg:text-[1.65rem] lg:leading-[1.28]">
                    {active.quote}
                  </blockquote>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                      Story {String(activeIndex + 1).padStart(2, '0')} of {String(total).padStart(2, '0')}
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={showPrevious}
                        disabled={total <= 1}
                        aria-label="Previous founder story"
                        className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-brand hover:bg-brand disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                      >
                        <ArrowLeft size={17} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={showNext}
                        disabled={total <= 1}
                        aria-label="Next founder story"
                        className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-brand hover:bg-brand disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                      >
                        <ArrowRight size={17} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {total > 1 && (
              <div className="border-t border-zinc-100 bg-white px-6 py-4 sm:px-8">
                <div className="flex items-center gap-4">
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-zinc-100">
                    <div
                      className="h-full rounded-full bg-brand transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                      role="progressbar"
                      aria-valuenow={activeIndex + 1}
                      aria-valuemin={1}
                      aria-valuemax={total}
                      aria-label={`Story ${activeIndex + 1} of ${total}`}
                    />
                  </div>
                  <span className="shrink-0 text-[11px] font-bold tabular-nums tracking-[0.12em] text-zinc-400">
                    {activeIndex + 1}/{total}
                  </span>
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
