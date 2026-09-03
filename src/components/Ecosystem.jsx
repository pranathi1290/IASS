import { Building2, CreditCard, Globe, HandCoins, Lightbulb, Rocket, TrendingUp, Users } from 'lucide-react'

const flowSteps = ['Idea', 'GTM', 'Business Setup', 'Investment', 'Cross-Border Payments', 'Growth']

const pillars = [
  { title: 'India ↔ USA', description: 'Cross-border opportunities', icon: Globe },
  { title: 'Startup Ideas & Innovation', description: 'Turn ideas into impact', icon: Lightbulb },
  { title: 'Go-To-Market Strategy', description: 'Reach. Engage. Grow.', icon: TrendingUp },
  { title: 'Investment & Fundraising', description: 'Fuel your next stage', icon: HandCoins },
  { title: 'Business Setup', description: 'Structure for success', icon: Building2 },
  { title: 'Cross-Border Payments', description: 'Seamless. Secure. Global.', icon: CreditCard },
  { title: 'Founder & Investor Network', description: 'Connect. Collaborate. Create.', icon: Users },
  { title: 'Scaling Across Borders', description: 'From local to global', icon: Rocket },
]

function Ecosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-white px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-brand/[0.07] blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-brand/15 bg-brand-soft px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
            One ecosystem
          </p>
          <h2 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-[3.75rem]">
            A new-age platform for founders,
            <span className="mt-1 block text-brand">entrepreneurs, and startup owners.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Looking to build and scale across India &amp; the USA. We&apos;re bringing the knowledge, network, experts and opportunities founders need — all under one ecosystem.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-x-auto sm:mt-12">
          <div className="flex min-w-max items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand via-zinc-900 to-zinc-950 px-6 py-3.5 text-white sm:gap-3 sm:px-8">
            {flowSteps.map((step, index) => (
              <span key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs font-bold whitespace-nowrap sm:text-sm">{step}</span>
                {index < flowSteps.length - 1 && <span aria-hidden="true">→</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {pillars.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group flex flex-col items-center gap-3 rounded-[1.5rem] border border-zinc-200/80 bg-white p-6 text-center shadow-[0_10px_40px_rgba(15,15,15,0.04)] transition duration-300 hover:-translate-y-1.5 hover:border-brand/25 hover:shadow-[0_24px_50px_rgba(204,0,0,0.10)]"
            >
              <span className="grid size-14 place-items-center rounded-full border border-brand/15 bg-brand-soft text-brand transition duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <Icon size={24} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold tracking-[-0.02em] text-zinc-950">{title}</h3>
              <p className="text-sm leading-6 text-zinc-500">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] bg-zinc-950 px-6 py-8 text-center text-white sm:mt-14 sm:px-10 sm:py-10">
          <p className="text-lg font-bold tracking-[-0.02em] sm:text-2xl">
            This is more than a startup school.
          </p>
          <p className="mt-2 text-lg font-bold tracking-[-0.02em] text-brand sm:text-2xl">
            It&apos;s a bridge between two of the world&apos;s most dynamic startup ecosystems.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-6 sm:flex-row sm:gap-10">
            <span className="text-sm font-semibold text-white/80">🇮🇳 Build in India.</span>
            <span className="text-sm font-semibold text-white/80">🌐 Think Global.</span>
            <span className="text-sm font-semibold text-white/80">🇺🇸 Scale in America.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ecosystem
