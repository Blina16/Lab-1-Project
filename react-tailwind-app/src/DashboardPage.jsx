import Navbar from './Navbar'

function DashboardPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* Doodle-style wallpaper background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,#0f172a_0.7px,transparent_0)] bg-[length:26px_26px] opacity-5" />

      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pt-14 relative z-0">
        <header className="mb-10 text-center md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
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
          <div className="rounded-2xl border border-sky-100 bg-white/95 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">Next session</p>
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
      </main>
    </div>
  )
}

export default DashboardPage
