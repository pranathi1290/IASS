import { Check, Send } from 'lucide-react'
import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'
const HAS_FORMSPREE_ENDPOINT = !FORMSPREE_ENDPOINT.includes('your-form-id')

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  startupIdea: '',
}

const highlights = [
  'Six weeks, fully on campus in Bengaluru',
  'Free for selected founders',
  'Build your MVP with mentors and peers',
]

function ApplyForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  function validateForm() {
    const nextErrors = {}
    const requiredFields = [
      ['fullName', 'Full name is required.'],
      ['email', 'Email is required.'],
      ['phone', 'Phone is required.'],
      ['startupIdea', 'Tell us about your startup idea.'],
    ]

    requiredFields.forEach(([field, message]) => {
      if (!form[field].trim()) nextErrors[field] = message
    })

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    return nextErrors
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('idle')
      return
    }

    setStatus('submitting')
    setSubmitError('')

    try {
      if (import.meta.env.PROD) {
        const response = await fetch('/api/applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!response.ok) {
          const result = await response.json().catch(() => ({}))
          throw new Error(result.error || 'Application submission failed')
        }
      } else {
        const applications = JSON.parse(localStorage.getItem('ascend-admin-applications') || '[]')
        localStorage.setItem('ascend-admin-applications', JSON.stringify([
          ...applications,
          { id: `application-${Date.now()}`, name: form.fullName, email: form.email, phone: form.phone, idea: form.startupIdea, status: 'New' },
        ]))
      }

      if (HAS_FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        })

        if (!response.ok) throw new Error('Submission failed')
      }

      setForm(initialForm)
      setErrors({})
      setStatus('success')
    } catch (error) {
      setSubmitError(error.message || 'Please try again.')
      setStatus('error')
    }
  }

  const fields = [
    { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Your name', span: 'sm:col-span-2' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', span: '' },
    { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 98765 43210', span: '' },
  ]

  const inputClass =
    'w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/15 aria-[invalid=true]:border-brand aria-[invalid=true]:bg-brand-soft/30'

  return (
    <section id="apply" className="relative overflow-hidden bg-zinc-50 px-6 py-14 text-zinc-950 sm:px-10 sm:py-20 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-20 size-80 rounded-full bg-brand/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-10 size-72 rounded-full bg-brand/[0.05] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,19rem)_1fr] lg:items-start lg:gap-8">
        <aside className="relative overflow-hidden rounded-[1.75rem] bg-zinc-950 p-6 text-white sm:p-7 lg:sticky lg:top-28">
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(155deg,#101010_0%,#181818_50%,#0a0a0a_100%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(204,0,0,0.38),transparent_48%)]" />
          </div>

          <div className="relative">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70 backdrop-blur-sm">
              Your next chapter
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[2rem]">
              Make your idea{' '}
              <span className="text-brand">impossible to ignore.</span>
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/60 sm:text-[0.9375rem] sm:leading-7">
              Tell us what you&apos;re building. The next cohort is looking for founders with a point of view and the courage to test it.
            </p>

            <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/75">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand/20 text-brand">
                    <Check size={11} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-white/35">
              Takes about 2 minutes
            </p>
          </div>
        </aside>

        <div className="overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-[0_24px_70px_rgba(15,15,15,0.08)]">
          {status === 'success' ? (
            <div className="flex min-h-[24rem] flex-col items-center justify-center px-6 py-14 text-center sm:px-10">
              <span className="grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand">
                <Check size={28} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-zinc-950">Application received.</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
                Thanks for applying. We review every submission carefully and will be in touch if you&apos;re a fit for the next cohort.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm font-bold text-brand transition hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 lg:p-9">
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-zinc-100 pb-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">Application</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-600">All fields are required.</p>
                </div>
                <span className="hidden rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400 sm:inline-flex">
                  Cohort open
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map(({ name, label, type, placeholder, span }) => (
                  <label key={name} className={`block ${span}`}>
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">{label}</span>
                    <input
                      name={name}
                      type={type}
                      value={form[name]}
                      onChange={updateField}
                      placeholder={placeholder}
                      aria-invalid={Boolean(errors[name])}
                      className={inputClass}
                    />
                    {errors[name] && (
                      <span className="mt-2 block text-xs font-semibold text-brand">{errors[name]}</span>
                    )}
                  </label>
                ))}

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Startup Idea</span>
                  <textarea
                    name="startupIdea"
                    value={form.startupIdea}
                    onChange={updateField}
                    placeholder="What are you building, and who is it for?"
                    rows="5"
                    aria-invalid={Boolean(errors.startupIdea)}
                    className={`${inputClass} resize-y leading-6`}
                  />
                  {errors.startupIdea && (
                    <span className="mt-2 block text-xs font-semibold text-brand">{errors.startupIdea}</span>
                  )}
                </label>
              </div>

              <div className="mt-7 flex flex-col gap-4 border-t border-zinc-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(204,0,0,0.22)] transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:cursor-wait disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Submit application
                      <Send size={15} strokeWidth={2.4} aria-hidden="true" />
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-sm font-semibold text-brand" role="alert">
                    {submitError}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ApplyForm
