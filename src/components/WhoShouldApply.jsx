import { ArrowUpRight, Check } from 'lucide-react'

const criteria = [
  {
    title: 'Early-stage builder',
    detail: 'You are working on an idea or an early-stage startup.',
  },
  {
    title: 'Full commitment',
    detail: 'You can commit to the full six-week, on-campus program.',
  },
  {
    title: 'Customer-first',
    detail: 'You are ready to speak with customers and act on what you learn.',
  },
  {
    title: 'Ship over plan',
    detail: 'You want to build and launch, not just keep planning.',
  },
  {
    title: 'India-focused',
    detail: 'You are based in India or building for the Indian market.',
  },
]

function WhoShouldApply() {
  return (
    <section id="who-should-apply" className="relative overflow-hidden bg-white px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_100%_40%,rgba(204,0,0,0.07),transparent_55%)]"
      />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
        <div className="relative">
          <p className="mb-5 inline-flex items-center rounded-full border border-brand/15 bg-brand-soft px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
            Is this you?
          </p>
          <h2 className="max-w-lg text-4xl font-extrabold leading-[1.0] tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-[3.6rem]">
            Built for the ones who can&apos;t stop <span className="text-brand">building.</span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            IASS is for early-stage founders, students, and aspiring entrepreneurs in India who are ready to turn a promising idea into something people use.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(204,0,0,0.22)] transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Apply if this is you
              <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <a
              href="#program"
              className="text-sm font-bold text-zinc-700 transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Explore the program
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-zinc-200 pt-8">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-400">Cohort</dt>
              <dd className="mt-1.5 text-lg font-extrabold tracking-tight">On campus</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-400">Length</dt>
              <dd className="mt-1.5 text-lg font-extrabold tracking-tight">6 weeks</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-400">Cost</dt>
              <dd className="mt-1.5 text-lg font-extrabold tracking-tight text-brand">Free</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-brand/5 sm:-inset-4" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/80 bg-white shadow-[0_24px_60px_rgba(15,15,15,0.06)]">
            <div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-950 px-6 py-5 text-white sm:px-8">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">Founder fit</p>
                <h3 className="mt-1 text-lg font-bold tracking-[-0.02em]">You&apos;re a strong fit if...</h3>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                05 checks
              </span>
            </div>

            <ul className="divide-y divide-zinc-100">
              {criteria.map(({ title, detail }, index) => (
                <li key={title} className="group flex items-start gap-4 px-6 py-5 transition-colors hover:bg-brand-soft/60 sm:px-8">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-brand text-white shadow-[0_8px_20px_rgba(204,0,0,0.25)] transition duration-300 group-hover:scale-105">
                    <Check size={15} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] font-bold tracking-[0.16em] text-zinc-300">0{index + 1}</span>
                      <h4 className="text-base font-bold tracking-[-0.02em] text-zinc-950">{title}</h4>
                    </div>
                    <p className="mt-1.5 text-sm leading-6 text-zinc-500">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoShouldApply
