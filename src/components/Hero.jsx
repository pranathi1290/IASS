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
    <main id="home" className="relative isolate overflow-hidden bg-white text-zinc-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_100%_0%,rgba(204,0,0,0.09),transparent_34%)]"
      />

      <section className="mx-auto w-full max-w-7xl px-6 pb-10 pt-12 sm:px-10 sm:pt-16 lg:px-12 lg:pt-20 lg:pb-6">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand-soft px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
              The founders&apos; launchpad
            </p>
            <h1 className="text-5xl font-extrabold leading-[0.96] tracking-[-0.055em] text-zinc-950 sm:text-6xl lg:text-[clamp(4.4rem,6.4vw,6.35rem)]">
              Where founders
              <br />
              become <span className="text-brand">unicorns.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              A 6-week on-campus program to validate your idea, build an MVP, find your first users, and pitch the investors who can help you go further.
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(204,0,0,0.22)] transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Apply Now
                <ArrowUpRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </a>
              <a
                href="#program"
                className="inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-bold text-zinc-900 transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                See the program
                <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </a>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm font-medium text-zinc-500">
              <MapPin size={15} className="text-brand" aria-hidden="true" />
              Live on campus in Bengaluru
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-[2.25rem] bg-brand-soft p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-white px-6 py-8 sm:px-8 sm:py-10">
                <img
                  src="/iass-shield.png"
                  alt="Indo American Startup School shield"
                  className="mx-auto h-auto w-[58%] max-w-[220px] object-contain"
                />
                <p className="mt-6 text-center text-3xl font-extrabold tracking-[-0.06em] text-zinc-950 sm:text-4xl">06 weeks</p>
                <p className="mt-1 text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">to launch</p>

                <div className="mt-8 grid grid-cols-2 gap-2.5">
                  {launchSteps.map(({ number, title }) => (
                    <div key={title} className="rounded-2xl border border-zinc-100 bg-zinc-50 px-3.5 py-3">
                      <p className="text-[10px] font-bold tracking-[0.16em] text-brand">{number}</p>
                      <p className="mt-1 text-sm font-bold text-zinc-900">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-zinc-200 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {stats.map(({ value, label }) => (
            <div key={value} className="px-6 py-7 sm:px-8">
              <dt className="text-xl font-extrabold tracking-[-0.03em] text-zinc-950 sm:text-2xl">{value}</dt>
              <dd className="mt-1 text-sm text-zinc-500">{label}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  )
}

export default Hero
