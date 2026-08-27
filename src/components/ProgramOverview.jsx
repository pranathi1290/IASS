import { ArrowUpRight, Compass, LineChart, Rocket, Users } from 'lucide-react'

const pillars = [
  {
    number: '01',
    title: 'Validate Your Idea',
    description: 'Turn a strong hunch into a clear opportunity that real customers want solved.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Build Your MVP',
    description: 'Ship the smallest useful version of your product and learn by putting it in hands.',
    icon: Rocket,
  },
  {
    number: '03',
    title: 'Acquire First Users',
    description: 'Build an early community, find your growth channel, and create momentum that compounds.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Pitch to Investors',
    description: 'Shape your story, sharpen your numbers, and make a confident case for what comes next.',
    icon: LineChart,
    featured: true,
  },
]

function ProgramOverview() {
  return (
    <section id="program" className="relative overflow-hidden bg-zinc-50 px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-brand/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-brand/[0.08] blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-brand/15 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand shadow-sm">
            The program
          </p>
          <h2 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-[3.75rem]">
            From first spark to
            <span className="mt-1 block text-brand">real traction.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Four focused moves. One serious leap. Validate, build, launch, and pitch with a cohort that moves as fast as you do.
          </p>
        </div>

        <div className="relative mt-14 sm:mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-7 hidden h-[2px] overflow-hidden bg-zinc-200 lg:block"
          >
            <span className="program-rail absolute inset-y-0 left-0 w-full bg-brand" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {pillars.map(({ number, title, description, icon: Icon, featured }) => (
              <article
                key={title}
                className={`program-step group relative flex min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] border p-6 transition duration-300 sm:p-7 ${
                  featured
                    ? 'border-brand bg-brand text-white shadow-[0_28px_60px_rgba(204,0,0,0.28)]'
                    : 'border-zinc-200/80 bg-white shadow-[0_10px_40px_rgba(15,15,15,0.04)] hover:-translate-y-1.5 hover:border-brand/25 hover:shadow-[0_24px_50px_rgba(204,0,0,0.10)]'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-2 -top-6 text-[7.5rem] font-extrabold leading-none tracking-[-0.08em] ${
                    featured ? 'text-white/10' : 'text-zinc-100'
                  }`}
                >
                  {number}
                </span>

                <div className="relative flex items-center justify-between">
                  <span
                    className={`grid size-12 place-items-center rounded-full border transition duration-300 ${
                      featured
                        ? 'border-white/25 bg-white/15 text-white'
                        : 'border-brand/15 bg-brand-soft text-brand group-hover:border-brand group-hover:bg-brand group-hover:text-white'
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${featured ? 'text-white/60' : 'text-zinc-400'}`}>
                    Step {number}
                  </span>
                </div>

                <div className="relative mt-auto pt-16">
                  <h3 className={`text-[1.35rem] font-bold tracking-[-0.03em] ${featured ? 'text-white' : 'text-zinc-950'}`}>
                    {title}
                  </h3>
                  <p className={`mt-3 text-sm leading-6 ${featured ? 'text-white/80' : 'text-zinc-500'}`}>
                    {description}
                  </p>
                  {featured && (
                    <a
                      href="#apply"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-white transition hover:gap-2.5"
                    >
                      Start here
                      <ArrowUpRight size={15} strokeWidth={2.4} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-zinc-950 px-6 py-6 text-white sm:mt-10 sm:px-8 sm:py-7">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Six weeks. Full focus.</p>
              <p className="mt-2 max-w-xl text-lg font-bold tracking-[-0.02em] sm:text-xl">
                Mentorship, builders, and Demo Day — all in one sprint.
              </p>
            </div>
            <a
              href="#timeline"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-brand-soft hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              See the timeline
              <ArrowUpRight size={15} strokeWidth={2.4} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramOverview
