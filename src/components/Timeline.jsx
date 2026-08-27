import { Code2, Lightbulb, Megaphone, Presentation, Search, Zap } from 'lucide-react'

const weeks = [
  {
    label: 'Week 1',
    title: 'Idea Validation',
    description: 'Pressure-test the problem, audience, and opportunity before you build.',
    icon: Lightbulb,
  },
  {
    label: 'Week 2',
    title: 'Customer Discovery',
    description: 'Talk to real people and uncover the insight that makes your product matter.',
    icon: Search,
  },
  {
    label: 'Week 3-4',
    title: 'MVP Build',
    description: 'Turn your sharpest learning into a working product your first users can try.',
    icon: Code2,
    active: true,
  },
  {
    label: 'Week 5',
    title: 'User Acquisition',
    description: 'Find your early adopters and build a repeatable path to bringing them in.',
    icon: Megaphone,
  },
  {
    label: 'Week 6',
    title: 'Pitch Prep & Demo Day',
    description: 'Package your progress into a compelling story and share it with the room.',
    icon: Presentation,
  },
]

function Timeline() {
  return (
    <section id="timeline" className="overflow-hidden bg-zinc-50 px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">
            <Zap size={15} fill="currentColor" aria-hidden="true" />
            Your launch sequence
          </p>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-zinc-950 sm:text-5xl">Six weeks. One serious leap.</h2>
          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">A focused progression that moves your idea forward every single week.</p>
        </div>

        <div className="relative mt-14 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-visible md:pb-0">
          <div aria-hidden="true" className="absolute left-6 top-6 bottom-6 hidden w-px bg-zinc-200 md:block" />
          <div className="flex min-w-max gap-4 md:min-w-0 md:flex-col md:gap-0">
            {weeks.map(({ label, title, description, icon: Icon, active }) => (
              <article
                key={label}
                className={`relative flex w-[76vw] min-w-[260px] flex-col rounded-2xl border p-6 transition duration-300 md:w-auto md:min-w-0 md:flex-row md:rounded-none md:border-0 md:border-b md:border-zinc-200 md:bg-transparent md:px-0 md:py-8 md:first:pt-0 md:last:border-0 md:last:pb-0 ${
                  active
                    ? 'border-brand/40 bg-brand-soft md:bg-transparent'
                    : 'border-zinc-200 bg-white hover:border-zinc-300 md:hover:bg-transparent'
                }`}
              >
                <div className={`relative z-10 grid size-12 shrink-0 place-items-center rounded-full border md:mr-8 ${active ? 'border-brand bg-brand text-white shadow-[0_0_0_6px_rgba(204,0,0,0.12)]' : 'border-zinc-200 bg-white text-zinc-400'}`}>
                  <Icon size={20} strokeWidth={active ? 2.4 : 1.8} aria-hidden="true" />
                </div>
                <div className="mt-7 max-w-xl md:mt-0">
                  <p className={`text-xs font-bold uppercase tracking-[0.2em] ${active ? 'text-brand' : 'text-zinc-400'}`}>{label}{active ? ' / In progress' : ''}</p>
                  <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-zinc-950 sm:text-2xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
                </div>
                {active && <span className="absolute right-5 top-5 size-2 rounded-full bg-brand shadow-[0_0_0_5px_rgba(204,0,0,0.12)] md:right-0 md:top-10" />}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
