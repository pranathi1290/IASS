function Hero() {
  return (
    <main id="home" className="relative isolate overflow-hidden bg-white text-zinc-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_12%,rgba(204,0,0,0.10),transparent_32%),radial-gradient(circle_at_8%_88%,rgba(204,0,0,0.06),transparent_28%)]"
      />

      <section className="mx-auto flex min-h-[calc(100svh-4.5rem)] w-full max-w-7xl items-center px-6 pb-16 pt-12 sm:px-10 lg:px-12 lg:pb-24 lg:pt-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:gap-20">
          <div className="max-w-3xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">
              <span className="h-px w-8 bg-brand" />
              The founders&apos; launchpad
            </p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] text-zinc-950 sm:text-7xl lg:text-[clamp(4.25rem,6.6vw,6.6rem)]">
              Where founders become <span className="text-brand">unicorns.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              A 6-week on-campus program to validate your idea, build an MVP, find your first users, and pitch the investors who can help you go further.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#apply" className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(204,0,0,0.22)] transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
                Apply Now <span aria-hidden="true" className="ml-3 text-lg">-&gt;</span>
              </a>
              <a href="#program" className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-sm font-bold text-zinc-900 transition hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
                Learn More
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-zinc-200 pt-8">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">Duration</dt>
                <dd className="mt-2 text-2xl font-extrabold tracking-tight">6 weeks</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">Format</dt>
                <dd className="mt-2 text-2xl font-extrabold tracking-tight">On campus</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">Cost</dt>
                <dd className="mt-2 text-2xl font-extrabold tracking-tight">Free</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-[0_24px_80px_rgba(204,0,0,0.08)] sm:p-10">
              <div aria-hidden="true" className="absolute -right-10 -top-10 size-40 rounded-full bg-brand/10" />
              <div aria-hidden="true" className="absolute -bottom-16 -left-8 size-48 rounded-full bg-brand/10" />
              <img src="/iass-logo.png" alt="" className="relative mx-auto h-auto w-full max-w-sm object-contain" />
              <div className="relative mt-8 border-l-2 border-brand pl-5">
                <p className="text-4xl font-extrabold tracking-[-0.06em] text-zinc-950">06</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">weeks to launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
