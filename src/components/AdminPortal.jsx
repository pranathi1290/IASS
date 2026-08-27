import { useEffect, useState } from 'react'
import { BriefcaseBusiness, ChevronRight, FileText, ImagePlus, LayoutDashboard, LogOut, Plus, Search, Trash2, Users } from 'lucide-react'

const storageKeys = {
  applications: 'ascend-admin-applications',
  testimonials: 'ascend-admin-testimonials',
  experts: 'ascend-admin-experts',
  contactMessages: 'ascend-admin-contact-messages',
}

const defaultApplications = [
  { id: 'application-1', name: 'Aarav Mehta', email: 'aarav@example.com', phone: '+91 98765 43210', idea: 'A collaboration platform for distributed teams.', status: 'New' },
  { id: 'application-2', name: 'Diya Shah', email: 'diya@example.com', phone: '+91 98111 22004', idea: 'Personalized nutrition for busy Indian families.', status: 'Reviewing' },
]

const defaultTestimonials = [
  { id: 'testimonial-1', name: 'Aarav Mehta', startup: 'Loopspace', quote: 'IASS gave us the confidence to stop guessing.', image: '' },
]

const defaultExperts = [
  { id: 'expert-1', name: 'Ayush Gupta', role: 'Senior Manager - EY', image: '' },
]

function readRecords(key, fallback) {
  try {
    const records = JSON.parse(localStorage.getItem(key))
    return Array.isArray(records) ? records : fallback
  } catch {
    return fallback
  }
}

function AdminPortal() {
  const [activeView, setActiveView] = useState('overview')
  const [applications, setApplications] = useState(() => readRecords(storageKeys.applications, defaultApplications))
  const [testimonials, setTestimonials] = useState(() => readRecords(storageKeys.testimonials, defaultTestimonials))
  const [experts, setExperts] = useState(() => readRecords(storageKeys.experts, defaultExperts))
  const [contactMessages, setContactMessages] = useState(() => readRecords(storageKeys.contactMessages, []))

  useEffect(() => {
    if (!import.meta.env.PROD) return
    Promise.all([
      fetch('/api/applications').then((response) => response.json()),
      fetch('/api/contact-messages').then((response) => response.json()),
    ]).then(([remoteApplications, remoteMessages]) => {
      setApplications(remoteApplications)
      setContactMessages(remoteMessages)
    }).catch((error) => console.error('Unable to load admin data', error))
  }, [])

  function saveRecords(key, records, setter) {
    setter(records)
    localStorage.setItem(key, JSON.stringify(records))
  }

  function deleteRecord(key, records, setter, id) {
    if (import.meta.env.PROD && (key === storageKeys.applications || key === storageKeys.contactMessages)) {
      const endpoint = key === storageKeys.applications ? '/api/applications' : '/api/contact-messages'
      fetch(`${endpoint}?id=${encodeURIComponent(id)}`, { method: 'DELETE' }).catch((error) => console.error('Unable to delete record', error))
    }
    saveRecords(key, records.filter((record) => record.id !== id), setter)
  }

  const navigation = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'applications', label: 'Applications', icon: FileText, count: applications.length },
    { id: 'testimonials', label: 'Testimonials', icon: ImagePlus, count: testimonials.length },
    { id: 'experts', label: 'Industry experts', icon: BriefcaseBusiness, count: experts.length },
    { id: 'contacts', label: 'Contact messages', icon: Users, count: contactMessages.length },
  ]

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-950 lg:flex">
      <aside className="border-b border-zinc-200 bg-white px-5 py-6 text-zinc-950 lg:flex lg:min-h-screen lg:w-72 lg:shrink-0 lg:flex-col lg:border-b-0 lg:border-r lg:px-6">
        <a href="/" className="flex items-center gap-3 text-sm font-bold tracking-[0.18em]">
          <img src="/iass-logo.png" alt="Indo American Startup School" className="h-10 w-auto max-w-[170px] object-contain" /> <span className="ml-auto rounded-full bg-brand-soft px-2 py-1 text-[10px] tracking-normal text-brand">ADMIN</span>
        </a>
        <nav className="mt-10 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible" aria-label="Admin sections">
          {navigation.map(({ id, label, icon: Icon, count }) => (
            <button key={id} type="button" onClick={() => setActiveView(id)} className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${activeView === id ? 'bg-brand text-white' : 'text-zinc-500 hover:bg-brand-soft hover:text-brand'}`}>
              <Icon size={17} aria-hidden="true" />
              <span>{label}</span>
              {count !== undefined && <span className={`ml-auto rounded-full px-2 py-0.5 text-xs ${activeView === id ? 'bg-white/20' : 'bg-zinc-100 text-zinc-500'}`}>{count}</span>}
            </button>
          ))}
        </nav>
        <a href="/" className="mt-10 hidden items-center gap-3 px-4 text-sm font-semibold text-zinc-500 transition hover:text-brand lg:mt-auto lg:flex"><LogOut size={17} aria-hidden="true" /> Back to site</a>
      </aside>

      <main className="min-w-0 flex-1 px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col justify-between gap-5 border-b border-zinc-200 pb-8 sm:flex-row sm:items-end">
            <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">IASS control room</p><h1 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">{navigation.find((item) => item.id === activeView)?.label}</h1></div>
            <div className="flex items-center gap-3 text-sm text-zinc-500"><span className="size-2 rounded-full bg-emerald-500" /> Changes saved locally</div>
          </header>

          {activeView === 'overview' && <Overview applications={applications} testimonials={testimonials} experts={experts} onNavigate={setActiveView} />}
          {activeView === 'applications' && <Applications applications={applications} onDelete={(id) => deleteRecord(storageKeys.applications, applications, setApplications, id)} />}
          {activeView === 'testimonials' && <TestimonialsManager testimonials={testimonials} onSave={(records) => saveRecords(storageKeys.testimonials, records, setTestimonials)} onDelete={(id) => deleteRecord(storageKeys.testimonials, testimonials, setTestimonials, id)} />}
          {activeView === 'experts' && <ExpertsManager experts={experts} onSave={(records) => saveRecords(storageKeys.experts, records, setExperts)} onDelete={(id) => deleteRecord(storageKeys.experts, experts, setExperts, id)} />}
          {activeView === 'contacts' && <ContactMessages messages={contactMessages} onDelete={(id) => deleteRecord(storageKeys.contactMessages, contactMessages, setContactMessages, id)} />}
        </div>
      </main>
    </div>
  )
}

function Overview({ applications, testimonials, experts, onNavigate }) {
  const stats = [
    { label: 'Applications', value: applications.length, icon: FileText, view: 'applications', accent: 'text-brand bg-brand-soft' },
    { label: 'Testimonials', value: testimonials.length, icon: ImagePlus, view: 'testimonials', accent: 'text-brand bg-brand-soft' },
    { label: 'Experts', value: experts.length, icon: Users, view: 'experts', accent: 'text-zinc-700 bg-zinc-100' },
  ]

  return <div><div className="grid gap-4 sm:grid-cols-3">{stats.map(({ label, value, icon: Icon, view, accent }) => <button key={label} type="button" onClick={() => onNavigate(view)} className="group rounded-2xl border border-zinc-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className={`mb-8 grid size-11 place-items-center rounded-xl ${accent}`}><Icon size={19} aria-hidden="true" /></div><p className="text-3xl font-black">{value}</p><p className="mt-1 text-sm text-zinc-500">{label}</p><ChevronRight size={18} className="mt-5 text-zinc-300 transition group-hover:translate-x-1 group-hover:text-brand" aria-hidden="true" /></button>)}</div><div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Next best action</p><h2 className="mt-3 text-2xl font-black">Keep your founder proof fresh.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">Add new testimonials and expert profiles here. They will be ready for your public site once connected to a backend.</p><button type="button" onClick={() => onNavigate('testimonials')} className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-dark">Add a testimonial <Plus size={16} aria-hidden="true" /></button></div></div>
}

function Applications({ applications, onDelete }) {
  return <section className="rounded-2xl border border-zinc-200 bg-white shadow-sm"><div className="flex flex-col justify-between gap-4 border-b border-zinc-200 p-6 sm:flex-row sm:items-center"><div><h2 className="text-xl font-black">Applicant details</h2><p className="mt-1 text-sm text-zinc-500">Review submissions collected from the application form.</p></div><div className="flex items-center gap-2 rounded-lg bg-zinc-100 px-3 py-2 text-sm text-zinc-500"><Search size={16} aria-hidden="true" /> Search</div></div><div className="divide-y divide-zinc-100">{applications.map((application) => <article key={application.id} className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:justify-between"><div><div className="flex flex-wrap items-center gap-3"><h3 className="font-bold">{application.name}</h3><span className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand">{application.status}</span></div><p className="mt-2 text-sm text-zinc-500">{application.email} · {application.phone}</p><p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-700">{application.idea}</p></div><button type="button" onClick={() => onDelete(application.id)} aria-label={`Delete application from ${application.name}`} className="text-zinc-400 transition hover:text-red-500"><Trash2 size={18} aria-hidden="true" /></button></article>)}</div></section>
}

function ContactMessages({ messages, onDelete }) {
  return <section className="rounded-2xl border border-zinc-200 bg-white shadow-sm"><div className="border-b border-zinc-200 p-6"><h2 className="text-xl font-black">Contact messages</h2><p className="mt-1 text-sm text-zinc-500">Messages submitted through the public Contact Us form.</p></div><div className="divide-y divide-zinc-100">{messages.length === 0 && <p className="p-6 text-sm text-zinc-500">No contact messages yet.</p>}{messages.map((message) => <article key={message.id} className="flex flex-col gap-4 p-6 sm:flex-row sm:justify-between"><div><h3 className="font-bold">{message.name}</h3><a href={`mailto:${message.email}`} className="text-sm text-brand">{message.email}</a><p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-700">{message.message}</p></div><button type="button" onClick={() => onDelete(message.id)} aria-label={`Delete message from ${message.name}`} className="self-start text-zinc-400 transition hover:text-red-500"><Trash2 size={18} aria-hidden="true" /></button></article>)}</div></section>
}

function TestimonialsManager({ testimonials, onSave, onDelete }) {
  const [form, setForm] = useState({ name: '', startup: '', quote: '', image: '' })
  const [imageName, setImageName] = useState('')

  function submit(event) { event.preventDefault(); if (!form.name || !form.startup || !form.quote) return; onSave([...testimonials, { ...form, id: `testimonial-${Date.now()}` }]); setForm({ name: '', startup: '', quote: '', image: '' }); setImageName('') }
  function chooseImage(event) { const file = event.target.files?.[0]; if (!file) return; setImageName(file.name); const reader = new FileReader(); reader.onload = () => setForm((current) => ({ ...current, image: reader.result })); reader.readAsDataURL(file) }

  return <ManagerLayout title="Founder testimonials" description="Add the stories you want to feature on the public landing page." records={testimonials} onDelete={onDelete} renderRecord={(item) => <><div className="size-14 shrink-0 overflow-hidden rounded-xl bg-zinc-200">{item.image && <img src={item.image} alt="" className="size-full object-cover" />}</div><div><h3 className="font-bold">{item.name}</h3><p className="text-sm text-brand">{item.startup}</p><p className="mt-2 line-clamp-2 text-sm text-zinc-500">“{item.quote}”</p></div></>}><form onSubmit={submit} className="mb-8 grid gap-4 rounded-2xl bg-zinc-50 p-5 sm:grid-cols-2"><Field label="Founder name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} placeholder="e.g. Priya Sharma" /><Field label="Startup name" value={form.startup} onChange={(value) => setForm({ ...form, startup: value })} placeholder="e.g. Launchpad" /><label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold">Quote</span><textarea required rows="3" value={form.quote} onChange={(event) => setForm({ ...form, quote: event.target.value })} placeholder="What changed after IASS?" className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand" /></label><ImagePicker imageName={imageName} onChange={chooseImage} /><button type="submit" className="self-end rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"><Plus size={16} className="mr-2 inline" aria-hidden="true" />Add testimonial</button></form></ManagerLayout>
}

function ExpertsManager({ experts, onSave, onDelete }) {
  const [form, setForm] = useState({ name: '', role: '', image: '' })
  const [imageName, setImageName] = useState('')
  function submit(event) { event.preventDefault(); if (!form.name || !form.role) return; onSave([...experts, { ...form, id: `expert-${Date.now()}` }]); setForm({ name: '', role: '', image: '' }); setImageName('') }
  function chooseImage(event) { const file = event.target.files?.[0]; if (!file) return; setImageName(file.name); const reader = new FileReader(); reader.onload = () => setForm((current) => ({ ...current, image: reader.result })); reader.readAsDataURL(file) }

  return <ManagerLayout title="Industry experts" description="Manage the mentors and operators featured across your program story." records={experts} onDelete={onDelete} renderRecord={(item) => <><div className="size-14 shrink-0 overflow-hidden rounded-xl bg-zinc-200">{item.image && <img src={item.image} alt="" className="size-full object-cover" />}</div><div><h3 className="font-bold">{item.name}</h3><p className="text-sm text-zinc-500">{item.role}</p></div></>}><form onSubmit={submit} className="mb-8 grid gap-4 rounded-2xl bg-zinc-50 p-5 sm:grid-cols-2"><Field label="Expert name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} placeholder="e.g. Neha Kapoor" /><Field label="Role or company" value={form.role} onChange={(value) => setForm({ ...form, role: value })} placeholder="e.g. Founder, Acme" /><ImagePicker imageName={imageName} onChange={chooseImage} /><button type="submit" className="self-end rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"><Plus size={16} className="mr-2 inline" aria-hidden="true" />Add expert</button></form></ManagerLayout>
}

function ManagerLayout({ title, description, records, onDelete, renderRecord, children }) {
  return <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"><div className="mb-7"><h2 className="text-xl font-black">{title}</h2><p className="mt-1 text-sm text-zinc-500">{description}</p></div>{children}<div className="space-y-3">{records.map((record) => <article key={record.id} className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4"><div className="flex min-w-0 flex-1 items-center gap-4">{renderRecord(record)}</div><button type="button" onClick={() => onDelete(record.id)} aria-label={`Delete ${record.name}`} className="text-zinc-400 transition hover:text-red-500"><Trash2 size={18} aria-hidden="true" /></button></article>)}</div></section>
}

function Field({ label, value, onChange, placeholder }) {
  return <label><span className="mb-2 block text-sm font-bold">{label}</span><input required value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand" /></label>
}

function ImagePicker({ imageName, onChange }) {
  return <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-500 transition hover:border-brand hover:text-brand"><ImagePlus size={18} aria-hidden="true" /><span className="truncate">{imageName || 'Choose image (optional)'}</span><input type="file" accept="image/*" onChange={onChange} className="sr-only" /></label>
}

export default AdminPortal