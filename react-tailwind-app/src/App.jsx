import Navbar from './Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-rose-50 to-amber-50 text-slate-900">
      <Navbar />

      <main className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-10 text-center md:pt-16">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-600 shadow-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Fun tutoring for kids 6–14
        </p>
        <h1 className="mb-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Colorful lessons. Confident kids.
        </h1>
        <p className="mb-8 max-w-2xl text-sm text-slate-700 md:text-base">
          Tutor4Kids connects your child with friendly, expert tutors for maths, reading,
          science and more — in short, focused sessions that feel like play.
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-300/40 hover:brightness-110 transition-all"
          >
            Book a free trial
          </a>
          <a
            href="#subjects"
            className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-6 py-2.5 text-sm font-semibold text-sky-700 hover:bg-sky-50 transition-colors"
          >
            View subjects
          </a>
        </div>

        <div className="grid w-full gap-4 text-left text-xs text-slate-700 sm:grid-cols-3 md:text-sm">
          <div className="rounded-2xl border border-sky-100 bg-white/80 p-4 shadow-sm">
            <p className="font-semibold text-sky-800">Kid-friendly tutors</p>
            <p className="mt-1 text-slate-600">Patient, encouraging tutors who know how to keep kids engaged.</p>
          </div>
          <div className="rounded-2xl border border-rose-100 bg-white/80 p-4 shadow-sm">
            <p className="font-semibold text-rose-700">Short, fun sessions</p>
            <p className="mt-1 text-slate-600">25–40 minute sessions with games, colors and break times built in.</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-sm">
            <p className="font-semibold text-amber-700">Easy progress updates</p>
            <p className="mt-1 text-slate-600">Simple reports after each lesson so parents always know what’s next.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
