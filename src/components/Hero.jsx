import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'

const launchSteps = [
  { number: '01', title: 'Validate' },
  { number: '02', title: 'Build MVP' },
  { number: '03', title: 'First users' },
  { number: '04', title: 'Investor pitch' },
]

const stats = [
  { value: '6 weeks', label: 'Focused sprint' },
  { value: 'On campus', label: 'Bengaluru' },
  { value: 'Free', label: 'For selected founders' },
  { value: 'Demo Day', label: 'Pitch to investors' },
]

function Hero() {
  return (
    <main
      id="home"
      className="relative isolate flex h-[calc(100dvh-var(--site-header-height))] max-h-[calc(100dvh-var(--site-header-height))] min-h-0 flex-col overflow-hidden bg-white text-zinc-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_100%_0%,rgba(204,0,0,0.09),transparent_34%)]"
      />

      <section className="mx-auto flex w-full max-w-7xl min-h-0 flex-1 items-center px-6 py-4 sm:px-10 lg:px-12 lg:py-5">
        <div className="grid w-full items-center gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(240px,0.9fr)] lg:gap-10 xl:gap-12">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand-soft px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand sm:mb-4 sm:px-3.5 sm:py-1.5 sm:text-[11px]">
              The founders&apos; launchpad
            </p>
            <h1 className="text-[clamp(2.35rem,5.2vw,4.75rem)] font-extrabold leading-[0.96] tracking-[-0.055em] text-zinc-950">
              Where founders
              <br />
              become <span className="text-brand">unicorns.</span>
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-600 sm:mt-4 sm:text-base sm:leading-7 lg:max-w-md">
              A 6-week on-campus program to validate your idea, build an MVP, find your first users, and pitch the investors who can help you go further.
            </p>
            <div className="mt-4 flex flex-col items-stretch gap-3 sm:mt-5 sm:flex-row sm:items-center">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-[0_14px_32px_rgba(204,0,0,0.22)] transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Apply Now
                <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
              </a>
              <a
                href="#program"
                className="inline-flex items-center justify-center gap-2 px-2 py-2.5 text-sm font-bold text-zinc-900 transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                See the program
                <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
              </a>
            </div>
            <p className="mt-3 flex items-center gap-2 text-xs font-medium text-zinc-500 sm:mt-4 sm:text-sm">
              <MapPin size={14} className="text-brand" aria-hidden="true" />
              Live on campus in Bengaluru
            </p>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[19rem] lg:block lg:max-w-none lg:justify-self-end">
            <div className="rounded-[1.75rem] bg-brand-soft p-2 sm:p-3">
              <div className="relative overflow-hidden rounded-[1.35rem] bg-white px-4 py-5 sm:px-5 sm:py-6">
                <img
                  src="/iass-shield.png"
                  alt="Indo American Startup School shield"
                  className="mx-auto h-auto w-[52%] max-w-[160px] object-contain"
                />
                <p className="mt-3 text-center text-2xl font-extrabold tracking-[-0.06em] text-zinc-950 sm:mt-4 sm:text-3xl">06 weeks</p>
                <p className="mt-0.5 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">to launch</p>

                <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5">
                  {launchSteps.map(({ number, title }) => (
                    <div key={title} className="rounded-xl border border-zinc-100 bg-zinc-50 px-2.5 py-2 sm:px-3 sm:py-2.5">
                      <p className="text-[9px] font-bold tracking-[0.14em] text-brand sm:text-[10px]">{number}</p>
                      <p className="mt-0.5 text-xs font-bold text-zinc-900 sm:text-sm">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shrink-0 border-t border-zinc-200 bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-zinc-200 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {stats.map(({ value, label }) => (
            <div key={value} className="px-5 py-4 sm:px-6 sm:py-5">
              <dt className="text-lg font-extrabold tracking-[-0.03em] text-zinc-950 sm:text-xl">{value}</dt>
              <dd className="mt-0.5 text-xs text-zinc-500 sm:text-sm">{label}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  )
}

export default Hero
