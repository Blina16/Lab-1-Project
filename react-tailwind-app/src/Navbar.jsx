import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-transparent bg-white/90 backdrop-blur shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-400 via-emerald-400 to-amber-300 text-white text-xl font-semibold shadow-sm">
            T4
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-sky-700 tracking-wide uppercase">Tutor4Kids</span>
            <span className="text-xs text-slate-500">Fun, friendly learning for ages 6–14</span>
          </div>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H15" />
            )}
          </svg>
        </button>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="#subjects" className="hover:text-sky-500 transition-colors">Subjects</a>
          <a href="#how-it-works" className="hover:text-sky-500 transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-sky-500 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-sky-500 transition-colors">FAQ</a>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:brightness-110 transition-all"
          >
            Get started
          </a>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm text-slate-700">
            <a href="#subjects" className="py-1 hover:text-sky-500 transition-colors" onClick={() => setOpen(false)}>
              Subjects
            </a>
            <a href="#how-it-works" className="py-1 hover:text-sky-500 transition-colors" onClick={() => setOpen(false)}>
              How it works
            </a>
            <a href="#pricing" className="py-1 hover:text-sky-500 transition-colors" onClick={() => setOpen(false)}>
              Pricing
            </a>
            <a href="#faq" className="py-1 hover:text-sky-500 transition-colors" onClick={() => setOpen(false)}>
              FAQ
            </a>
            <a
              href="#contact"
              className="mt-1 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:brightness-110 transition-all"
              onClick={() => setOpen(false)}
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
