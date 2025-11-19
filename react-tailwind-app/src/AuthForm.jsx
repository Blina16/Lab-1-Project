import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthForm() {
  const [mode, setMode] = useState('login')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    // Here you would normally call your auth API.
    // For now we just redirect to the dashboard page.
    navigate('/dashboard')
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-sky-100 bg-white/95 p-5 text-left shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-900">{mode === 'login' ? 'Log in' : 'Sign up'} to Tutor4Kids</div>
        <div className="inline-flex rounded-full bg-slate-100 p-1 text-[11px] font-semibold text-slate-600">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`px-2 py-1 rounded-full ${mode === 'login' ? 'bg-white text-slate-900 shadow-sm' : ''}`}>
            Log in
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`px-2 py-1 rounded-full ${mode === 'signup' ? 'bg-white text-slate-900 shadow-sm' : ''}`}>
            Sign up
          </button>
        </div>
      </div>

      <form className="space-y-3 text-sm" onSubmit={handleSubmit}>
        {mode === 'signup' ? (
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Parent or guardian name</label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2"
              placeholder="Jane Doe"
            />
          </div>
        ) : (
          // Spacer to keep login / signup heights similar
          <div className="h-0" aria-hidden="true" />
        )}
        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-700">Who is using Tutor4Kids?</label>
          <select
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 focus:border-sky-400 focus:ring-2"
            defaultValue="parent"
          >
            <option value="parent">Parent / guardian</option>
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-700">Email address</label>
          <input
            type="email"
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-700">Password</label>
          <input
            type="password"
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2"
            placeholder="••••••••"
          />
        </div>
        {mode === 'signup' ? (
          <p className="text-[11px] text-slate-500">
            By signing up you agree to occasional emails about your childs progress and new learning resources.
          </p>
        ) : (
          <p className="text-[11px] text-slate-500">
            Use the same email you signed up with so we can find your family or tutor account.
          </p>
        )}
        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:brightness-110 transition-all"
        >
          {mode === 'login' ? 'Log in' : 'Create account'}
        </button>
      </form>
    </div>
  )
}

export default AuthForm
