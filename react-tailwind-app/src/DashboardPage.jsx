import { useEffect, useState } from 'react'
import Navbar from './Navbar'

const STORAGE_KEY = 'tutor4kids_tutors'
const ROLE_STORAGE_KEY = 'tutor4kids_role'

function DashboardPage() {
  const [tutors, setTutors] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [role, setRole] = useState('parent')

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        setTutors(JSON.parse(raw))
      } catch {
        setTutors([])
      }
    }
  }, [])

  useEffect(() => {
    const storedRole = window.localStorage.getItem(ROLE_STORAGE_KEY)
    if (storedRole) setRole(storedRole)
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tutors))
  }, [tutors])

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setEditingId(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!firstName.trim() || !lastName.trim()) return

    if (editingId) {
      setTutors((prev) =>
        prev.map((tutor) =>
          tutor.id === editingId ? { ...tutor, firstName: firstName.trim(), lastName: lastName.trim() } : tutor,
        ),
      )
    } else {
      setTutors((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          createdAt: new Date().toISOString(),
        },
      ])
    }

    resetForm()
  }

  const handleEdit = (tutor) => {
    setFirstName(tutor.firstName)
    setLastName(tutor.lastName)
    setEditingId(tutor.id)
  }

  const handleDelete = (id) => {
    setTutors((prev) => prev.filter((tutor) => tutor.id !== id))
    if (editingId === id) resetForm()
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* Doodle-style wallpaper background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,#0f172a_0.7px,transparent_0)] bg-[length:26px_26px] opacity-5" />

      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pt-14 relative z-0">
        <header className="mb-10 text-center md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Parent dashboard
          </p>
          <h1 className="mb-3 max-w-3xl text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Welcome back to Tutor4Kids
          </h1>
          <p className="max-w-xl text-sm text-slate-600">
            See upcoming sessions, recent notes from tutors and how your child is progressing over time.
          </p>
        </header>

        <section className="grid gap-4 text-sm text-slate-700 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Next session</p>
            <p className="mt-2 text-sm text-slate-900">No sessions scheduled yet.</p>
            <p className="mt-1 text-xs text-slate-500">Once you book, well show the date, time and tutor here.</p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Progress</p>
            <p className="mt-2 text-sm text-slate-900">Getting started</p>
            <p className="mt-1 text-xs text-slate-500">After a few lessons youll see strengths, focus areas and tutor comments.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white/95 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">Quick actions</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-600">
              <li>• Book a new session</li>
              <li>• Update contact details</li>
              <li>• Change subjects</li>
            </ul>
          </div>
        </section>

        {/* Admin: manage tutors */}
        <section className="mt-10 grid gap-4 text-sm text-slate-700 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)]">
          <div className="rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Add / edit tutor</p>
            <p className="mt-1 text-xs text-slate-500">
              Admins can add tutors here. Students will see this list on the tutors page.
            </p>

            {role !== 'admin' ? (
              <p className="mt-3 text-xs text-rose-500">
                Youre logged in as {role || 'guest'}. Only admins can add or edit tutors.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-3 space-y-3 text-sm">
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">First name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">Last name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2"
                  placeholder="Doe"
                />
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:brightness-110 transition-all"
                >
                  {editingId ? 'Update tutor' : 'Add tutor'}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">Current tutors</p>
            {tutors.length === 0 ? (
              <p className="mt-3 text-xs text-slate-500">No tutors added yet.</p>
            ) : (
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                {tutors.map((tutor) => (
                  <li
                    key={tutor.id}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/60 px-3 py-2"
                  >
                    <span className="font-semibold text-slate-900">
                      {tutor.firstName} {tutor.lastName}
                    </span>
                    <span className="flex gap-2 text-[11px]">
                      <button
                        type="button"
                        onClick={() => handleEdit(tutor)}
                        className="text-sky-600 hover:text-sky-700"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(tutor.id)}
                        className="text-rose-500 hover:text-rose-600"
                      >
                        Delete
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default DashboardPage
