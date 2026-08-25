import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'
const HAS_FORMSPREE_ENDPOINT = !FORMSPREE_ENDPOINT.includes('your-form-id')

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  startupIdea: '',
}

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
    { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Your name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com' },
    { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 98765 43210' },
  ]

  return (
    <section id="apply" className="bg-zinc-950 px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-24">
        <div className="lg:sticky lg:top-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-orange-400">Your next chapter</p>
          <h2 className="max-w-md text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl">Make your idea impossible to ignore.</h2>
          <p className="mt-7 max-w-sm text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">Tell us what you&apos;re building. The next cohort is looking for founders with a point of view and the courage to test it.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {fields.map(({ name, label, type, placeholder }) => (
              <label key={name} className={name === 'fullName' ? 'sm:col-span-2' : ''}>
                <span className="mb-2 block text-sm font-bold text-zinc-200">{label}</span>
                <input
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={updateField}
                  placeholder={placeholder}
                  aria-invalid={Boolean(errors[name])}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 aria-[invalid=true]:border-red-400"
                />
                {errors[name] && <span className="mt-2 block text-xs text-red-300">{errors[name]}</span>}
              </label>
            ))}

            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-bold text-zinc-200">Startup Idea</span>
              <textarea
                name="startupIdea"
                value={form.startupIdea}
                onChange={updateField}
                placeholder="What are you building, and who is it for?"
                rows="5"
                aria-invalid={Boolean(errors.startupIdea)}
                className="w-full resize-y rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 aria-[invalid=true]:border-red-400"
              />
              {errors.startupIdea && <span className="mt-2 block text-xs text-red-300">{errors.startupIdea}</span>}
            </label>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" disabled={status === 'submitting'} className="inline-flex items-center justify-center rounded-full bg-orange-400 px-7 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-orange-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400 disabled:cursor-wait disabled:opacity-60">
              {status === 'submitting' ? 'Sending...' : 'Submit Application'}
            </button>
            {status === 'success' && <p className="text-sm font-semibold text-indigo-300" role="status">Application received. We&apos;ll be in touch.</p>}
            {status === 'error' && <p className="max-w-xs text-sm font-semibold text-red-300" role="alert">{submitError}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default ApplyForm