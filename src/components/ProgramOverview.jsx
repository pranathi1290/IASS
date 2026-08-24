import { Compass, LineChart, Rocket, Users } from 'lucide-react'

const pillars = [
  {
    number: '01',
    title: 'Validate Your Idea',
    description: 'Turn a strong hunch into a clear opportunity that real customers want solved.',
    icon: Compass,
    accent: 'text-orange-400',
    iconBackground: 'bg-orange-400/10',
  },
  {
    number: '02',
    title: 'Build Your MVP',
    description: 'Ship the smallest useful version of your product and learn by putting it in hands.',
    icon: Rocket,
    accent: 'text-indigo-400',
    iconBackground: 'bg-indigo-400/10',
  },
  {
    number: '03',
    title: 'Acquire First Users',
    description: 'Build an early community, find your growth channel, and create momentum that compounds.',
    icon: Users,
    accent: 'text-orange-400',
    iconBackground: 'bg-orange-400/10',
  },
  {
    number: '04',
    title: 'Pitch to Investors',
    description: 'Shape your story, sharpen your numbers, and make a confident case for what comes next.',
    icon: LineChart,
    accent: 'text-indigo-400',
    iconBackground: 'bg-indigo-400/10',
  },
]

function ProgramOverview() {
  return (
    <section id="program" className="bg-zinc-950 px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 border-b border-zinc-800 pb-8 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-orange-400">The program</p>
            <h2 className="max-w-xl text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">From first spark to real traction.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-zinc-500">Everything you need to make the next six weeks count.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ number, title, description, icon: Icon, accent, iconBackground }) => (
            <article
              key={title}
              className="group flex min-h-72 flex-col rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900 sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span className={`grid size-12 place-items-center rounded-xl ${iconBackground} ${accent} transition duration-300 group-hover:scale-105`}>
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold tracking-[0.18em] text-zinc-600">{number}</span>
              </div>
              <div className="mt-auto pt-12">
                <h3 className="text-xl font-bold tracking-[-0.02em] text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500 transition-colors group-hover:text-zinc-400">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramOverview