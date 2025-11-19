import AuthForm from './AuthForm'

function AuthPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-10">
        <div className="mb-6 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Get started
          </p>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            Log in or create your Tutor4Kids account
          </h1>
          <p className="mt-3 max-w-xl text-sm text-slate-600">
            Manage your childs sessions, see progress updates and adjust your tutoring plan any time.
          </p>
        </div>
        <AuthForm />
      </main>
    </div>
  )
}

export default AuthPage
