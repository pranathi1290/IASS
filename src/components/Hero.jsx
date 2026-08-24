function Hero() {
  return (
    <main id="home" className="relative isolate min-h-screen overflow-hidden bg-zinc-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_25%,rgba(99,102,241,0.22),transparent_30%),radial-gradient(circle_at_18%_80%,rgba(249,115,22,0.12),transparent_26%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
      />

      <section className="mx-auto flex min-h-[calc(100svh-92px)] w-full max-w-7xl items-center px-6 pb-16 pt-12 sm:px-10 lg:px-12 lg:pb-24 lg:pt-4">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.65fr)] lg:gap-24">
          <div className="max-w-3xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
              <span className="h-px w-8 bg-orange-400" />
              The founders&apos; launchpad
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.05em] text-white sm:text-7xl lg:text-[clamp(4.5rem,7vw,7rem)]">
              Where founders become <span className="text-indigo-400">unicorns.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              A 6-week on-campus program to validate your idea, build an MVP, find your first users, and pitch the investors who can help you go further.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#apply" className="inline-flex items-center justify-center rounded-full bg-orange-400 px-7 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-orange-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400">
                Apply Now <span aria-hidden="true" className="ml-3 text-lg">-&gt;</span>
              </a>
              <a href="#program" className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-bold text-zinc-200 transition hover:border-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">
                Learn More
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-80 lg:block">
            <div className="absolute right-8 top-4 size-64 rounded-full border border-indigo-400/30 bg-indigo-400/10 shadow-[0_0_100px_rgba(99,102,241,0.2)]" />
            <div className="absolute right-24 top-20 size-32 rounded-full border border-orange-300/50 bg-orange-300/20" />
            <div className="absolute bottom-8 left-4 border-l border-orange-400/70 pl-5 text-xs uppercase tracking-[0.2em] text-zinc-500">
              <span className="mb-2 block text-4xl font-black tracking-[-0.06em] text-white">06</span>
              weeks to launch
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero