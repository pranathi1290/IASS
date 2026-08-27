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
    <section id="program" className="relative overflow-hidden bg-white px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_100%,rgba(204,0,0,0.06),transparent_32%)]"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
          <div>
            <p className="mb-5 inline-flex items-center rounded-full border border-brand/15 bg-brand-soft px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
              The program
            </p>
            <h2 className="max-w-xl text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-zinc-950 sm:text-5xl lg:text-[3.5rem]">
              From first spark to real <span className="text-brand">traction.</span>
            </h2>
          </div>
          <div className="max-w-md lg:justify-self-end">
            <p className="text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              Everything you need to make the next six weeks count — validate, build, launch, and pitch with a cohort that moves as fast as you do.
            </p>
            <a
              href="#timeline"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand transition hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              View the 6-week timeline
              <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 sm:mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ number, title, description, icon: Icon, featured }, index) => (
              <article
                key={title}
                className={`group relative flex min-h-72 flex-col p-6 transition duration-300 sm:p-7 ${
                  featured
                    ? 'bg-brand text-white sm:col-span-2 lg:col-span-1'
                    : 'bg-transparent hover:bg-white'
                } ${index < pillars.length - 1 ? 'border-b border-zinc-200 sm:border-b-0 lg:border-r' : ''} ${
                  index % 2 === 0 && index < pillars.length - 1 ? 'sm:border-r' : ''
                } ${index < 2 ? 'sm:border-b lg:border-b-0' : ''}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`grid size-11 place-items-center rounded-2xl transition duration-300 ${
                      featured
                        ? 'bg-white/15 text-white'
                        : 'bg-white text-brand shadow-sm group-hover:bg-brand group-hover:text-white'
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className={`text-xs font-bold tracking-[0.18em] ${featured ? 'text-white/55' : 'text-zinc-300'}`}>
                    {number}
                  </span>
                </div>

                <div className="mt-auto pt-14">
                  <h3 className={`text-xl font-bold tracking-[-0.02em] ${featured ? 'text-white' : 'text-zinc-950'}`}>
                    {title}
                  </h3>
                  <p className={`mt-3 text-sm leading-6 ${featured ? 'text-white/80' : 'text-zinc-500 group-hover:text-zinc-600'}`}>
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramOverview
