import { AuthProvider, useAuth } from '@/hooks/useAuth';
import logoUrl from '@/assets/logo.png';

function SignInGate() {
  const { isAuthenticated, isLoading, login, error } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-gray-600">Loading…</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-xl font-semibold">Sign in</h1>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="button"
          onClick={login}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Sign in with UiPath
        </button>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="rounded-2xl bg-white px-12 py-10 text-center shadow-lg">
        <img
          src={logoUrl}
          alt="Logo"
          className="mx-auto mb-6 h-32 w-32 rounded-xl object-contain"
        />
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Hello, World!</h1>
        <p className="mt-3 text-base text-slate-500">Welcome to your UiPath Coded Web App.</p>
      </div>
    </main>
  );
}

export function App() {
  return (
    <AuthProvider>
      <SignInGate />
    </AuthProvider>
  );
}