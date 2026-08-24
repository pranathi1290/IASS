const press = ['The Tribune', 'Zee News', 'YourStory', 'Inc42', 'The Economic Times']
const tools = ['ChatGPT', 'Shopify', 'Claude', 'Gamma', 'Lovable', 'Meta']
const alumni = [
  { name: 'Loopspace', founder: 'Aarav Mehta', type: 'Consumer SaaS', description: 'A simpler way for ambitious teams to stay in sync.' },
  { name: 'Nourish AI', founder: 'Diya Shah', type: 'Health Tech', description: 'Personalized nutrition guidance for everyday Indian life.' },
  { name: 'Pactful', founder: 'Rohan Iyer', type: 'B2B SaaS', description: 'Modern workflows for teams making high-trust decisions.' },
  { name: 'Mitti Labs', founder: 'Ananya Rao', type: 'Climate Tech', description: 'Practical tools that make sustainable choices easier to scale.' },
]

function PlaceholderVisual({ label, className = '' }) {
  return <div className={`grid place-items-center rounded-3xl border border-zinc-800 bg-zinc-900 text-xs font-bold uppercase tracking-[0.18em] text-zinc-700 ${className}`}>{label}</div>
}

function ReferenceSections() {
  return (
    <>
      <section className="border-y border-zinc-200 bg-white px-6 py-14 text-zinc-950 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">Founders are paying attention</p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {press.map((publication) => <div key={publication} className="grid h-16 place-items-center rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-center text-sm font-black text-zinc-400 grayscale transition hover:grayscale-0">{publication}</div>)}
          </div>
        </div>
      </section>

      <section id="community" className="bg-zinc-950 px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-orange-400">Beyond the classroom</p>
            <h2 className="max-w-lg text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl">Your next co-founder might be in the room.</h2>
            <p className="mt-7 max-w-md text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">Join a living community of builders across India. Share the messy middle, find collaborators, meet early customers, and make connections that keep working long after Demo Day.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <PlaceholderVisual label="Community" className="col-span-2 aspect-[2/1] sm:col-span-2" />
            <PlaceholderVisual label="Events" className="aspect-square" />
            <PlaceholderVisual label="Builders" className="aspect-square" />
            <PlaceholderVisual label="Workshops" className="col-span-2 aspect-[2/1] sm:col-span-2" />
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24">
          <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {tools.map((tool, index) => <PlaceholderVisual key={tool} label={tool} className={`aspect-square text-zinc-400 ${index === 1 ? 'bg-orange-100' : index === 4 ? 'bg-indigo-100' : 'bg-white'}`} />)}
          </div>
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-indigo-600">Build faster</p>
            <h2 className="max-w-lg text-4xl font-black leading-[1.02] tracking-[-0.045em] text-zinc-950 sm:text-6xl">Modern tools. More time for the work that matters.</h2>
            <p className="mt-7 max-w-md text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">Learn how to use the latest AI, design, and commerce tools to move from rough idea to working product with less friction.</p>
          </div>
        </div>
      </section>

      <section id="alumni" className="bg-zinc-950 px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-orange-400">Built at IASS</p>
            <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-6xl">Backed by the world.</h2>
            <p className="mt-6 text-base leading-7 text-zinc-500 sm:text-lg">Meet founders who turned focused weeks of work into companies with a future.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {alumni.map((founder) => (
              <article key={founder.name} className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-5 transition hover:-translate-y-1 hover:border-zinc-600">
                <PlaceholderVisual label="Founder" className="aspect-[4/3]" />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">{founder.type}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em]">{founder.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">by {founder.founder}</p>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{founder.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-400 px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-zinc-700">Ready when you are</p>
            <h2 className="max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl">Turn your idea into a startup.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-800 sm:text-lg">Bring the idea. We&apos;ll bring the room, the rhythm, and the people who help you make it real.</p>
          </div>
          <a href="#apply" className="inline-flex shrink-0 items-center justify-center rounded-full bg-zinc-950 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">Apply to IASS <span aria-hidden="true" className="ml-3 text-lg">-&gt;</span></a>
        </div>
      </section>
    </>
  )
}

export default ReferenceSections