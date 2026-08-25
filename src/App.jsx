import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ApplyForm from './components/ApplyForm'
import IndustryExperts from './components/IndustryExperts'
import ProgramOverview from './components/ProgramOverview'
import ReferenceSections from './components/ReferenceSections'
import Timeline from './components/Timeline'
import Testimonials from './components/Testimonials'
import WhoShouldApply from './components/WhoShouldApply'

function App() {
  return (
    <div>
      <nav className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 px-6 text-white backdrop-blur-md sm:px-10 lg:px-12">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6">
          <a href="#home" className="flex shrink-0 items-center gap-3 text-sm font-bold tracking-[0.18em] text-white">
            <img src="/iass-logo-white.png" alt="Indo American Startup School" className="h-9 w-auto max-w-[148px] object-contain" />
          </a>
          <ul className="flex min-w-0 items-center gap-6 overflow-x-auto text-sm font-semibold text-zinc-400 [scrollbar-width:none] sm:gap-10 [&::-webkit-scrollbar]:hidden">
            <li><a href="#who-should-apply" className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">About</a></li>
            <li><a href="#program" className="flex items-center gap-1 whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">Programs <span aria-hidden="true" className="text-xs">⌄</span></a></li>
            <li><a href="#testimonials" className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">Pitch Day</a></li>
            <li><a href="#footer" className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">Contact Us</a></li>
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
