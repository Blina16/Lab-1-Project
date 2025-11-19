import Navbar from './Navbar'
import AuthForm from './AuthForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* Doodle-style wallpaper background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,#0f172a_0.7px,transparent_0)] bg-[length:26px_26px] opacity-5" />

      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-12 md:pt-16 relative z-0">
        {/* Hero */}
        <section className="text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-600 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Fun tutoring for kids 6–14
          </p>
          <h1 className="mb-8 mt-2 max-w-3xl mx-auto text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Colorful lessons. Confident kids.
          </h1>
          <p className="mb-12 max-w-2xl mx-auto text-sm text-slate-700 md:text-base">
            Tutor4Kids connects your child with friendly, expert tutors for maths, reading,
            science and more — in short, focused sessions that feel like play.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-300/40 hover:brightness-110 transition-all"
            >
              Join our newsletter
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
        </section>

        {/* Subjects */}
        <section id="subjects" className="mt-18 scroll-mt-24">
          <div className="mb-6 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Subjects we cover</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base md:mx-0 mx-auto">
              Build strong foundations in core school subjects with lessons designed for kids.
            </p>
          </div>
          <div className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-sky-100 bg-white/90 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">Maths</p>
              <p className="mt-1 font-semibold text-slate-900">From basics to problem solving</p>
              <p className="mt-2 text-xs text-slate-600">Numbers, fractions, times tables and word problems made visual and fun.</p>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-white/90 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-600">Reading & Writing</p>
              <p className="mt-1 font-semibold text-slate-900">Confident readers and storytellers</p>
              <p className="mt-2 text-xs text-slate-600">Phonics, comprehension and writing skills for stories, reports and exams.</p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Science</p>
              <p className="mt-1 font-semibold text-slate-900">Curious kids, big ideas</p>
              <p className="mt-2 text-xs text-slate-600">Experiments, diagrams and real-world examples in biology, physics and chemistry.</p>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-white/90 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">Languages</p>
              <p className="mt-1 font-semibold text-slate-900">English + other languages</p>
              <p className="mt-2 text-xs text-slate-600">Vocabulary, speaking and listening practice through games and conversations.</p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mt-20 scroll-mt-24">
          <div className="mb-6 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">How Tutor4Kids works</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base md:mx-0 mx-auto">
              Simple steps from first hello to happy homework time.
            </p>
          </div>
          <ol className="grid gap-4 text-sm text-slate-700 md:grid-cols-4">
            <li className="flex flex-col items-start rounded-2xl border border-sky-100 bg-white/90 p-4 shadow-sm">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">1</span>
              <p className="font-semibold text-slate-900">Tell us about your child</p>
              <p className="mt-1 text-xs text-slate-600">Share age, subjects and goals in our quick form.</p>
            </li>
            <li className="flex flex-col items-start rounded-2xl border border-emerald-100 bg-white/90 p-4 shadow-sm">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">2</span>
              <p className="font-semibold text-slate-900">Match with a tutor</p>
              <p className="mt-1 text-xs text-slate-600">We pair you with a friendly tutor who fits your child’s style.</p>
            </li>
            <li className="flex flex-col items-start rounded-2xl border border-rose-100 bg-white/90 p-4 shadow-sm">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">3</span>
              <p className="font-semibold text-slate-900">Join your first lesson</p>
              <p className="mt-1 text-xs text-slate-600">Log in from home for an interactive, colorful online session.</p>
            </li>
            <li className="flex flex-col items-start rounded-2xl border border-amber-100 bg-white/90 p-4 shadow-sm">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">4</span>
              <p className="font-semibold text-slate-900">Track progress</p>
              <p className="mt-1 text-xs text-slate-600">Receive friendly updates and adjust the plan as your child grows.</p>
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-18 scroll-mt-24">
          <div className="mb-6 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Frequently asked questions</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base md:mx-0 mx-auto">
              Answers to some of the things parents usually ask about Tutor4Kids.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-700 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
              <p className="font-semibold text-slate-900">What ages do you teach?</p>
              <p className="mt-1 text-xs text-slate-600">
                Tutor4Kids is designed for children roughly ages 6–14 (primary and early secondary).
                If you’re unsure, send us a message and well let you know if its a good fit.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
              <p className="font-semibold text-slate-900">How long is each session?</p>
              <p className="mt-1 text-xs text-slate-600">
                A standard lesson is about 40 minutes. For younger kids we sometimes use shorter blocks
                with small breaks to keep focus high.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
              <p className="font-semibold text-slate-900">Do you give homework?</p>
              <p className="mt-1 text-xs text-slate-600">
                We can provide short, simple practice tasks after sessions. Theyre always optional
                and designed to take no more than 10–15 minutes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
              <p className="font-semibold text-slate-900">Can I pause or change my plan?</p>
              <p className="mt-1 text-xs text-slate-600">
                Yes. You can pause for holidays or adjust how many weekly sessions you book with
                a quick message to our team.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mt-20 scroll-mt-24 border-t border-slate-200/70 pt-10">
          <div className="mb-6 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Simple plans for busy families</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base md:mx-0 mx-auto">
              Pick the number of weekly sessions that fits your child.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-sky-100 bg-white/90 p-5 text-sm shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">Starter</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">1× week</p>
              <p className="mt-2 text-xs text-slate-600">Perfect to boost confidence in a single subject.</p>
              <ul className="mt-4 space-y-1 text-xs text-slate-700">
                <li>• 1 × 40 min live session</li>
                <li>• Session summary for parents</li>
                <li>• Flexible rescheduling</li>
              </ul>
            </div>
            <div className="flex flex-col rounded-2xl border border-violet-200 bg-gradient-to-b from-violet-50 to-white p-5 text-sm shadow-md">
              <p className="inline-flex w-fit rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-700">Most popular</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-violet-600">Standard</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">2× week</p>
              <p className="mt-2 text-xs text-slate-600">Great for steady progress across one or two subjects.</p>
              <ul className="mt-4 space-y-1 text-xs text-slate-700">
                <li>• 2 × 40 min live sessions</li>
                <li>• Simple practice tasks between lessons</li>
                <li>• Monthly progress check-in</li>
              </ul>
            </div>
            <div className="flex flex-col rounded-2xl border border-emerald-100 bg-white/90 p-5 text-sm shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Premium</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">3× week</p>
              <p className="mt-2 text-xs text-slate-600">Ideal for exam prep or extra support in multiple subjects.</p>
              <ul className="mt-4 space-y-1 text-xs text-slate-700">
                <li>• 3 × 40 min live sessions</li>
                <li>• Custom study plan</li>
                <li>• Priority scheduling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Auth (login / signup) */}
        <section id="auth" className="mt-18 scroll-mt-24">
          <div className="mb-6 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Get started with Tutor4Kids</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base md:mx-0 mx-auto">
              Create an account or log in to manage your childs sessions, track progress and update your plan.
            </p>
          </div>
          <AuthForm />
        </section>

        {/* Contact / newsletter form */}
        <section id="contact" className="mt-22 scroll-mt-24 border-t border-slate-200/70 pt-10">
          <div className="mb-6 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Join the Tutor4Kids newsletter</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base md:mx-0 mx-auto">
              Get kid-friendly study tips, free printable activities and updates about new tutoring spots.
            </p>
          </div>
          <div className="mx-auto max-w-md rounded-2xl border border-sky-100 bg-white/90 p-5 text-left shadow-sm">
            <form className="space-y-4 text-sm">
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">Email address</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
              <button
                type="button"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:brightness-110 transition-all"
              >
                Join newsletter
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-white/90">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-slate-500">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-400 via-emerald-400 to-amber-300 text-[11px] font-semibold text-white">
                T4
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-700">Tutor4Kids</span>
                <span className="text-[10px] text-slate-400">Fun, friendly learning for kids 6–14</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <a href="#faq" className="hover:text-slate-700 transition-colors">
                FAQ
              </a>
              <a href="#pricing" className="hover:text-slate-700 transition-colors">
                Plans
              </a>
              <a href="#contact" className="hover:text-slate-700 transition-colors">
                Contact
              </a>
              <span className="hidden h-3 w-px bg-slate-200 md:inline-block" />
              <a href="#" className="hover:text-slate-700 transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-slate-700 transition-colors">
                Facebook
              </a>
            </div>
          </div>

          <div className="mt-3 text-[10px] text-slate-400">
            © {new Date().getFullYear()} Tutor4Kids. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
