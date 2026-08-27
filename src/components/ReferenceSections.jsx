import { ArrowUpRight, Bot, CalendarDays, MessagesSquare, Palette, ShoppingBag, Sparkles, Users, Workflow, Wrench } from 'lucide-react'

const press = [
  { name: 'The Tribune', focus: 'National press' },
  { name: 'Zee News', focus: 'Broadcast' },
  { name: 'YourStory', focus: 'Startup media' },
  { name: 'Inc42', focus: 'Tech coverage' },
  { name: 'The Economic Times', focus: 'Business' },
]

const communityPillars = [
  {
    title: 'Community',
    description: 'Builders who stay in the mess with you — long after Demo Day.',
    icon: Users,
  },
  {
    title: 'Events',
    description: 'Pitch nights, office hours, and rooms that open doors.',
    icon: CalendarDays,
  },
  {
    title: 'Builders',
    description: 'Find collaborators, early customers, and future co-founders.',
    icon: MessagesSquare,
  },
  {
    title: 'Workshops',
    description: 'Hands-on sessions that move your product forward every week.',
    icon: Workflow,
  },
]

const tools = [
  { name: 'ChatGPT', category: 'AI', description: 'Research, writing, and rapid prototyping.', icon: Bot },
  { name: 'Claude', category: 'AI', description: 'Deep reasoning for product and strategy.', icon: Sparkles },
  { name: 'Gamma', category: 'Design', description: 'Pitch decks and visuals in minutes.', icon: Palette },
  { name: 'Lovable', category: 'Build', description: 'Ship interfaces without slowing down.', icon: Wrench },
  { name: 'Shopify', category: 'Commerce', description: 'Launch and sell to your first users.', icon: ShoppingBag },
  { name: 'Meta', category: 'Growth', description: 'Reach early adopters at scale.', icon: Sparkles },
]
const alumni = [
  { name: 'Loopspace', founder: 'Aarav Mehta', type: 'Consumer SaaS', description: 'A simpler way for ambitious teams to stay in sync.' },
  { name: 'Nourish AI', founder: 'Diya Shah', type: 'Health Tech', description: 'Personalized nutrition guidance for everyday Indian life.' },
  { name: 'Pactful', founder: 'Rohan Iyer', type: 'B2B SaaS', description: 'Modern workflows for teams making high-trust decisions.' },
  { name: 'Mitti Labs', founder: 'Ananya Rao', type: 'Climate Tech', description: 'Practical tools that make sustainable choices easier to scale.' },
]

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function ReferenceSections() {
  return (
    <>
      <section className="relative overflow-hidden border-y border-zinc-200 bg-white px-6 py-16 text-zinc-950 sm:px-10 sm:py-20 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(204,0,0,0.06),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <p className="inline-flex items-center rounded-full border border-brand/15 bg-brand-soft px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
              Founders are paying attention
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-[-0.04em] text-zinc-950 sm:text-4xl">
              Featured across India&apos;s most watched startup stages.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {press.map(({ name, focus }) => (
              <article
                key={name}
                className="group flex min-h-28 flex-col justify-between rounded-[1.25rem] border border-zinc-200 bg-zinc-50 px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-brand/25 hover:bg-white hover:shadow-[0_18px_40px_rgba(204,0,0,0.08)] sm:min-h-32 sm:px-5"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400 transition group-hover:text-brand">
                  {focus}
                </p>
                <p className="text-sm font-extrabold tracking-[-0.02em] text-zinc-700 transition group-hover:text-zinc-950 sm:text-base">
                  {name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="relative overflow-hidden bg-zinc-50 px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-0 size-72 rounded-full bg-brand/[0.06] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-10 size-80 rounded-full bg-brand/[0.07] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-end gap-8 border-b border-zinc-200 pb-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="mb-5 inline-flex items-center rounded-full border border-brand/15 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand shadow-sm">
                Beyond the classroom
              </p>
              <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.0] tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-[3.5rem]">
                Your next co-founder might be
                <span className="mt-1 block text-brand">in the room.</span>
              </h2>
            </div>
            <div className="max-w-md lg:justify-self-end">
              <p className="text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                Join a living community of builders across India. Share the messy middle, find collaborators, meet early customers, and make connections that keep working long after Demo Day.
              </p>
            </div>
          </div>

          <article className="mt-12 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_24px_60px_rgba(15,15,15,0.06)]">
            <div className="border-b border-zinc-100 bg-brand px-6 py-7 text-white sm:px-8 sm:py-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/15">
                    <Users size={22} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">One room. Four ways in.</p>
                    <h3 className="mt-1 text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">Everything beyond the classroom.</h3>
                  </div>
                </div>
                <a
                  href="#apply"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Join the community
                  <ArrowUpRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2">
              {communityPillars.map(({ title, description, icon: Icon }, index) => (
                <div
                  key={title}
                  className={`group flex gap-4 p-6 sm:p-7 ${
                    index < 2 ? 'border-b border-zinc-100' : ''
                  } ${index % 2 === 0 ? 'sm:border-r sm:border-zinc-100' : ''}`}
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon size={19} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-lg font-bold tracking-[-0.02em] text-zinc-950">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="tools" className="relative overflow-hidden bg-zinc-50 px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-24 size-72 rounded-full bg-brand/[0.06] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 bottom-10 size-80 rounded-full bg-brand/[0.07] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
            <aside className="lg:sticky lg:top-28">
              <p className="mb-5 inline-flex items-center rounded-full border border-brand/15 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand shadow-sm">
                Build faster
              </p>
              <h2 className="text-4xl font-extrabold leading-[1.0] tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-[3.35rem]">
                Modern tools.
                <span className="mt-1 block text-brand">More time for the work that matters.</span>
              </h2>
              <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                Learn how to use the latest AI, design, and commerce tools to move from rough idea to working product with less friction.
              </p>

              <ul className="mt-8 space-y-3 border-t border-zinc-200 pt-8">
                {['AI & research', 'Design & decks', 'Build & ship', 'Commerce & growth'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-zinc-700">
                    <span className="size-1.5 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#program"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand transition hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                See how we teach them
                <ArrowUpRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </a>
            </aside>

            <div className="space-y-3">
              {tools.map(({ name, category, description, icon: Icon }, index) => (
                <article
                  key={name}
                  className="group flex gap-5 rounded-[1.5rem] border border-zinc-200 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[0_20px_48px_rgba(204,0,0,0.10)] sm:p-6"
                >
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <span className="grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand transition duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(204,0,0,0.25)]">
                      <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.16em] text-zinc-300">0{index + 1}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-xl font-bold tracking-[-0.02em] text-zinc-950">{name}</h3>
                      <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500 transition group-hover:bg-brand-soft group-hover:text-brand">
                        {category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2.2}
                    aria-hidden="true"
                    className="mt-1 hidden shrink-0 text-zinc-300 transition duration-300 group-hover:text-brand sm:block"
                  />
                </article>
              ))}

              <div className="rounded-[1.5rem] bg-zinc-950 px-6 py-6 text-white sm:px-7 sm:py-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">Hands-on from week one</p>
                <p className="mt-2 text-lg font-bold tracking-[-0.02em] sm:text-xl">
                  You won&apos;t just hear about these tools — you&apos;ll use them to build your MVP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="alumni" className="relative overflow-hidden bg-white px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(204,0,0,0.07),transparent_60%)]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 inline-flex items-center rounded-full border border-brand/15 bg-brand-soft px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
              Built at IASS
            </p>
            <h2 className="text-4xl font-extrabold leading-[1.0] tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-[3.75rem]">
              Backed by
              <span className="mt-1 block text-brand">the world.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              Meet founders who turned focused weeks of work into companies with a future.
            </p>
          </div>

          <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-3 divide-x divide-zinc-200 rounded-[1.25rem] border border-zinc-200 bg-zinc-50">
            <div className="px-4 py-5 text-center sm:px-6">
              <dt className="text-2xl font-extrabold tracking-tight text-zinc-950">4+</dt>
              <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">Startups</dd>
            </div>
            <div className="px-4 py-5 text-center sm:px-6">
              <dt className="text-2xl font-extrabold tracking-tight text-brand">6 wks</dt>
              <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">To launch</dd>
            </div>
            <div className="px-4 py-5 text-center sm:px-6">
              <dt className="text-2xl font-extrabold tracking-tight text-zinc-950">Demo</dt>
              <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">Day ready</dd>
            </div>
          </dl>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {alumni.map(({ name, founder, type, description }, index) => (
              <article
                key={name}
                className="group relative min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-zinc-950 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(204,0,0,0.22)]"
              >
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(155deg,#141414_0%,#222_42%,#0d0d0d_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(204,0,0,0.42),transparent_46%)] transition duration-500 group-hover:bg-[radial-gradient(circle_at_18%_18%,rgba(204,0,0,0.55),transparent_50%)]" />
                  <div className="absolute -right-6 -top-8 text-[6.5rem] font-extrabold leading-none tracking-[-0.08em] text-white/[0.06]">
                    {getInitials(name)}
                  </div>
                </div>

                <div className="relative flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                      {type}
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.16em] text-white/35">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-4 h-0.5 w-10 bg-brand transition duration-300 group-hover:w-16" />
                    <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-white">{name}</h3>
                    <p className="mt-2 text-sm font-semibold text-brand">by {founder}</p>
                    <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[1.75rem] border border-zinc-200 bg-zinc-50 px-6 py-6 sm:mt-12 sm:flex-row sm:px-8 sm:py-7">
            <p className="max-w-lg text-center text-base font-bold leading-7 text-zinc-800 sm:text-left sm:text-lg">
              Your startup could be next. Six weeks from idea to something the world can see.
            </p>
            <a
              href="#apply"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(204,0,0,0.22)] transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Build yours at IASS
              <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/70">Ready when you are</p>
            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] sm:text-6xl">Turn your idea into a startup.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">Bring the idea. We&apos;ll bring the room, the rhythm, and the people who help you make it real.</p>
          </div>
          <a href="#apply" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Apply to IASS
            <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  )
}

export default ReferenceSections
