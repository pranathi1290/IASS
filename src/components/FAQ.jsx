import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const questions = [
  {
    question: 'How much does the program cost?',
    answer: 'The full six-week program is free for selected founders. We believe access to great mentorship and a strong founder community should not depend on your bank balance.',
  },
  {
    question: 'Who is eligible to apply?',
    answer: 'We welcome early-stage founders, students, and aspiring entrepreneurs in India. You can apply with an idea, an early product, or a startup that is beginning to find its first users.',
  },
  {
    question: 'Where does the program take place?',
    answer: 'IASS is an on-campus experience in Bengaluru. The exact campus details and orientation information are shared with accepted founders before the cohort begins.',
  },
  {
    question: 'How long is the program?',
    answer: 'The program runs for six focused weeks. Each week combines practical workshops, mentor sessions, customer conversations, and time to build with your cohort.',
  },
  {
    question: 'What happens after the program?',
    answer: 'You leave with a working product, early traction, a sharper pitch, and an ongoing network of founders and mentors. Selected teams may also receive introductions to investors and follow-on opportunities.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggleQuestion(index) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="bg-white px-6 py-20 text-zinc-950 sm:px-10 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-brand">Good questions</p>
          <h2 className="max-w-md text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-zinc-950 sm:text-6xl">Before you take the leap.</h2>
          <p className="mt-7 max-w-sm text-base leading-7 text-zinc-600">Everything you need to know before sending in your application.</p>
        </div>

        <div className="border-t border-zinc-200">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`

            return (
              <div key={question} className="border-b border-zinc-200">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  <span className={`text-base font-bold transition-colors sm:text-lg ${isOpen ? 'text-brand' : 'text-zinc-950'}`}>{question}</span>
                  <ChevronDown size={20} className={`shrink-0 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand' : ''}`} aria-hidden="true" />
                </button>
                <div id={answerId} className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-10 text-sm leading-6 text-zinc-600">{answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
