import Navbar from './Navbar'

const STORAGE_KEY = 'tutor4kids_tutors'

function StudentTutorsPage() {
  let tutors = []
  if (typeof window !== 'undefined') {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        tutors = JSON.parse(raw)
      } catch {
        tutors = []
      }
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,#0f172a_0.7px,transparent_0)] bg-[length:26px_26px] opacity-5" />

      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pt-14 relative z-0">
        <header className="mb-8 text-center md:text-left">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">Our tutors</p>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Meet your Tutor4Kids team
          </h1>
          <p className="mt-3 max-w-xl text-sm text-slate-600">
            These are the tutors currently available. Your parent or guardian can book sessions with them from the
            dashboard.
          </p>
        </header>

        {tutors.length === 0 ? (
          <p className="text-sm text-slate-600">No tutors have been added yet. Please check back later.</p>
        ) : (
          <ul className="grid gap-4 text-sm text-slate-700 sm:grid-cols-2 md:grid-cols-3">
            {tutors.map((tutor) => (
              <li
                key={tutor.id}
                className="rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {tutor.firstName} {tutor.lastName}
                </p>
                <p className="mt-1 text-xs text-slate-500">Tutor4Kids tutor</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  )
}

export default StudentTutorsPage
