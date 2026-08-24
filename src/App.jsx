import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ApplyForm from './components/ApplyForm'
import AdminPortal from './components/AdminPortal'
import IndustryExperts from './components/IndustryExperts'
import ProgramOverview from './components/ProgramOverview'
import ReferenceSections from './components/ReferenceSections'
import Timeline from './components/Timeline'
import Testimonials from './components/Testimonials'
import WhoShouldApply from './components/WhoShouldApply'

function App() {
  if (window.location.pathname === '/admin') return <AdminPortal />

  return (
    <div>
      <nav className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 px-6 text-white backdrop-blur-md sm:px-10 lg:px-12">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6">
          <a href="#home" className="flex shrink-0 items-center gap-3 text-sm font-bold tracking-[0.18em] text-white">
            <img src="/iass-logo-white.png" alt="Indo American Startup School" className="h-9 w-auto max-w-[148px] object-contain" />
          </a>
          <ul className="flex min-w-0 items-center gap-4 overflow-x-auto text-xs font-semibold text-zinc-400 [scrollbar-width:none] sm:gap-6 sm:text-sm [&::-webkit-scrollbar]:hidden">
            <li><a href="#home" className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">Home</a></li>
            <li><a href="#program" className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">Program</a></li>
            <li><a href="#who-should-apply" className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">Who it&apos;s for</a></li>
            <li><a href="#timeline" className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">Timeline</a></li>
            <li><a href="#experts" className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">Experts</a></li>
            <li><a href="#community" className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">Community</a></li>
            <li><a href="#alumni" className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">Alumni</a></li>
            <li><a href="#testimonials" className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">Stories</a></li>
            <li><a href="#faq" className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">FAQ</a></li>
            <li><a href="#apply" className="whitespace-nowrap rounded-full bg-orange-400 px-4 py-2 font-bold text-zinc-950 transition hover:bg-orange-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400">Apply</a></li>
            <li><a href="#footer" className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">Contact</a></li>
          </ul>
        </div>
      </nav>
      <Hero />
      <ProgramOverview />
      <WhoShouldApply />
      <Timeline />
      <IndustryExperts />
      <ReferenceSections />
      <Testimonials />
      <FAQ />
      <ApplyForm />
      <Footer />
    </div>
  )
}

export default App
