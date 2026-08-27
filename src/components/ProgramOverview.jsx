import { Compass, LineChart, Rocket, Users } from 'lucide-react'

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
  },
]

function ProgramOverview() {
  return (
    <section id="program" className="bg-zinc-50 px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 border-b border-zinc-200 pb-8 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand">The program</p>
            <h2 className="max-w-xl text-3xl font-extrabold tracking-[-0.04em] text-zinc-950 sm:text-5xl">From first spark to real traction.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-zinc-500">Everything you need to make the next six weeks count.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ number, title, description, icon: Icon }) => (
            <article
              key={title}
              className="group flex min-h-72 flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_18px_40px_rgba(204,0,0,0.08)] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold tracking-[0.18em] text-zinc-300">{number}</span>
              </div>
              <div className="mt-auto pt-12">
                <h3 className="text-xl font-bold tracking-[-0.02em] text-zinc-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500 transition-colors group-hover:text-zinc-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramOverview
