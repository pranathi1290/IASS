import { ArrowUpRight, Code2, Lightbulb, Megaphone, Presentation, Search, Zap } from 'lucide-react'

const weeks = [
  {
    label: 'Week 1',
    title: 'Idea Validation',
    description: 'Pressure-test the problem, audience, and opportunity before you build.',
    icon: Lightbulb,
    outcome: 'Clear problem thesis',
  },
  {
    label: 'Week 2',
    title: 'Customer Discovery',
    description: 'Talk to real people and uncover the insight that makes your product matter.',
    icon: Search,
    outcome: 'Real user insight',
  },
  {
    label: 'Week 3–4',
    title: 'MVP Build',
    description: 'Turn your sharpest learning into a working product your first users can try.',
    icon: Code2,
    outcome: 'Working product',
    featured: true,
  },
  {
    label: 'Week 5',
    title: 'User Acquisition',
    description: 'Find your early adopters and build a repeatable path to bringing them in.',
    icon: Megaphone,
    outcome: 'First traction',
  },
  {
    label: 'Week 6',
    title: 'Pitch Prep & Demo Day',
    description: 'Package your progress into a compelling story and share it with the room.',
    icon: Presentation,
    outcome: 'Investor-ready pitch',
    climax: true,
  },
]

function Timeline() {
  return (
    <section id="timeline" className="relative overflow-hidden bg-zinc-50 px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-24 size-72 rounded-full bg-brand/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-10 size-80 rounded-full bg-brand/[0.07] blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 border-b border-zinc-200 pb-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand shadow-sm">
              <Zap size={12} fill="currentColor" aria-hidden="true" />
              Your launch sequence
            </p>
            <h2 className="max-w-xl text-4xl font-extrabold leading-[1.0] tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-[3.6rem]">
              Six weeks.
              <span className="mt-1 block text-brand">One serious leap.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 lg:justify-self-end">
            A focused progression that moves your idea forward every single week — from first validation to Demo Day.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
          <aside className="overflow-hidden rounded-[1.75rem] bg-zinc-950 p-7 text-white sm:p-8 lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">The sprint</p>
            <p className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
              06 weeks
              <span className="mt-1 block text-lg font-semibold tracking-normal text-white/55">from idea to pitch</span>
            </p>
            <ul className="mt-8 space-y-4 border-t border-white/10 pt-6">
              {['Validate the idea', 'Build the MVP', 'Find first users', 'Pitch with confidence'].map((item, index) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/75">
                  <span className="grid size-6 place-items-center rounded-full bg-brand/20 text-[11px] font-bold text-brand">
                    0{index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#apply"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Join the next cohort
              <ArrowUpRight size={15} strokeWidth={2.4} aria-hidden="true" />
            </a>
          </aside>

          <div className="relative">
            <div aria-hidden="true" className="absolute bottom-8 left-[1.85rem] top-8 hidden w-px bg-zinc-200 sm:block" />
            <div className="space-y-3">
              {weeks.map(({ label, title, description, icon: Icon, outcome, featured, climax }) => (
                <article
                  key={label}
                  className={`group relative overflow-hidden rounded-[1.5rem] border p-5 transition duration-300 sm:flex sm:items-start sm:gap-5 sm:p-6 ${
                    climax
                      ? 'border-brand bg-brand text-white shadow-[0_24px_50px_rgba(204,0,0,0.25)]'
                      : featured
                        ? 'border-brand/25 bg-white shadow-[0_18px_40px_rgba(204,0,0,0.08)]'
                        : 'border-zinc-200/80 bg-white/80 hover:-translate-y-0.5 hover:border-brand/20 hover:bg-white hover:shadow-[0_16px_36px_rgba(15,15,15,0.06)]'
                  }`}
                >
                  <div
                    className={`relative z-10 grid size-12 shrink-0 place-items-center rounded-full border transition duration-300 ${
                      climax
                        ? 'border-white/25 bg-white/15 text-white'
                        : featured
                          ? 'border-brand bg-brand text-white shadow-[0_0_0_6px_rgba(204,0,0,0.12)]'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-500 group-hover:border-brand/30 group-hover:bg-brand-soft group-hover:text-brand'
                    }`}
                  >
                    <Icon size={19} strokeWidth={featured || climax ? 2.2 : 1.8} aria-hidden="true" />
                  </div>

                  <div className="mt-4 min-w-0 flex-1 sm:mt-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${climax ? 'text-white/70' : featured ? 'text-brand' : 'text-zinc-400'}`}>
                        {label}{featured ? ' · Deep work' : ''}{climax ? ' · Finale' : ''}
                      </p>
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${climax ? 'bg-white/15 text-white' : 'bg-brand-soft text-brand'}`}>
                        {outcome}
                      </span>
                    </div>
                    <h3 className={`mt-2 text-xl font-bold tracking-[-0.02em] sm:text-2xl ${climax ? 'text-white' : 'text-zinc-950'}`}>
                      {title}
                    </h3>
                    <p className={`mt-2 max-w-2xl text-sm leading-6 ${climax ? 'text-white/80' : 'text-zinc-500'}`}>
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
