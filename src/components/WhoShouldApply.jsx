import { Check } from 'lucide-react'

const criteria = [
  'You are working on an idea or an early-stage startup.',
  'You can commit to the full six-week, on-campus program.',
  'You are ready to speak with customers and act on what you learn.',
  'You want to build and launch, not just keep planning.',
  'You are based in India or building for the Indian market.',
]

function WhoShouldApply() {
  return (
    <section id="who-should-apply" className="bg-zinc-950 px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-orange-400">Is this you?</p>
          <h2 className="max-w-lg text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl">Built for the ones who can&apos;t stop building.</h2>
          <p className="mt-7 max-w-md text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
            IASS is for early-stage founders, students, and aspiring entrepreneurs in India who are ready to turn a promising idea into something people use.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
          <div className="mb-7 flex items-center justify-between border-b border-zinc-800 pb-5">
            <h3 className="text-lg font-bold text-white">You&apos;re a strong fit if...</h3>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">05 checks</span>
          </div>
          <ul className="space-y-1">
            {criteria.map((criterion) => (
              <li key={criterion} className="group flex items-start gap-4 rounded-xl px-3 py-4 transition-colors hover:bg-zinc-800/70">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-indigo-400/15 text-indigo-300 transition-colors group-hover:bg-orange-400 group-hover:text-zinc-950">
                  <Check size={15} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-sm leading-6 text-zinc-400 transition-colors group-hover:text-zinc-200">{criterion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhoShouldApply