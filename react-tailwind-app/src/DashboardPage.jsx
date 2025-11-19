function DashboardPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Parent dashboard
          </p>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            Welcome back to Tutor4Kids
          </h1>
          <p className="mt-3 max-w-xl text-sm text-slate-600">
            Here you could see upcoming sessions, recent notes from tutors and your childs progress.
          </p>
        </header>

        <section className="grid gap-4 text-sm text-slate-700 md:grid-cols-3">
          <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">Next session</p>
            <p className="mt-2 text-sm text-slate-900">No sessions scheduled yet.</p>
            <p className="mt-1 text-xs text-slate-500">Once you book, well show the date and tutor here.</p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Progress</p>
            <p className="mt-2 text-sm text-slate-900">Getting started</p>
            <p className="mt-1 text-xs text-slate-500">After a few lessons youll see strengths and focus areas.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
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
