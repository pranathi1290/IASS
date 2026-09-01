import { ArrowUpRight, ChevronDown } from 'lucide-react'
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
    answer: 'IASS is an on-campus experience in Hyderabad. The exact campus details and orientation information are shared with accepted founders before the cohort begins.',
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

const quickFacts = [
  { label: 'Duration', value: '6 weeks' },
  { label: 'Cost', value: 'Free' },
  { label: 'Location', value: 'Bengaluru' },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  function toggleQuestion(index) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="relative overflow-hidden bg-white px-6 py-14 text-zinc-950 sm:px-10 sm:py-20 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(204,0,0,0.05),transparent_65%)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-start lg:gap-10">
        <aside className="lg:sticky lg:top-28">
          <p className="inline-flex items-center rounded-full border border-brand/15 bg-brand-soft px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
            Good questions
          </p>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-zinc-950 sm:text-4xl lg:text-[2.65rem]">
            Before you take{' '}
            <span className="text-brand">the leap.</span>
          </h2>
          <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
            Everything you need to know before sending in your application.
          </p>

          <dl className="mt-6 grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-1 lg:gap-2.5">
            {quickFacts.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-center lg:flex lg:items-center lg:justify-between lg:px-4 lg:text-left"
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400">{label}</dt>
                <dd className="mt-0.5 text-sm font-extrabold tracking-[-0.02em] text-zinc-950 lg:mt-0">{value}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#apply"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(204,0,0,0.20)] transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            Ready to apply
            <ArrowUpRight size={15} strokeWidth={2.4} aria-hidden="true" />
          </a>
        </aside>

        <div className="space-y-3">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`

            return (
              <article
                key={question}
                className={`overflow-hidden rounded-2xl border transition duration-300 ${
                  isOpen
                    ? 'border-brand/25 bg-brand-soft/35 shadow-[0_16px_40px_rgba(204,0,0,0.08)]'
                    : 'border-zinc-200 bg-zinc-50 hover:border-zinc-300 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-start gap-4 px-5 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:px-6 sm:py-5"
                >
                  <span
                    className={`mt-0.5 shrink-0 text-[11px] font-bold tracking-[0.16em] transition ${isOpen ? 'text-brand' : 'text-zinc-300'}`}
                  >
                    0{index + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-base font-bold tracking-[-0.02em] transition sm:text-lg ${isOpen ? 'text-brand' : 'text-zinc-950'}`}
                    >
                      {question}
                    </span>
                  </span>
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full border transition duration-300 ${
                      isOpen ? 'border-brand/20 bg-brand text-white' : 'border-zinc-200 bg-white text-zinc-400'
                    }`}
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <div
                  id={answerId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-brand/10 px-5 pb-5 pt-4 text-sm leading-6 text-zinc-600 sm:px-6 sm:pl-[3.25rem] sm:pb-6 sm:pt-4 sm:text-[0.9375rem] sm:leading-7">
                      {answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
