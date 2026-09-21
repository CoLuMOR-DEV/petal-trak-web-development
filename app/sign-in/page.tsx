'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Flower2, Loader2 } from 'lucide-react'
import { signIn } from '@/lib/auth-client'

export default function SignInPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '').trim()
    const password = String(formData.get('password') ?? '')
    setPending(true)
    setError('')
    const result = await signIn.email({ email, password })
    setPending(false)
    if (result.error) {
      setError('Incorrect email or password. Please try again.')
      return
    }
    router.push('/')
    router.refresh()
  }

  return (
    <main className="flex min-h-dvh items-center justify-center px-5 py-12">
      <div className="w-full max-w-md rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8">
        <div className="text-center">
          <span className="mx-auto inline-flex size-12 items-center justify-center rounded-2xl bg-petal-yellow">
            <Flower2 className="size-6 text-foreground/70" />
          </span>
          <h1 className="mt-5 font-display text-3xl font-semibold">Welcome back</h1>
          <p className="mt-2 text-muted-foreground">Sign in to manage your LYPetal orders.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          {error ? <p role="alert" className="rounded-2xl bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p> : null}
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Email
            <input name="email" type="email" required autoComplete="email" className="rounded-2xl border border-border bg-background px-4 py-3 outline-none focus:border-petal-coral focus:ring-2 focus:ring-petal-coral/30" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Password
            <input name="password" type="password" required autoComplete="current-password" className="rounded-2xl border border-border bg-background px-4 py-3 outline-none focus:border-petal-coral focus:ring-2 focus:ring-petal-coral/30" />
          </label>
          <button type="submit" disabled={pending} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70">
            {pending ? <><Loader2 className="size-5 animate-spin" /> Signing in…</> : 'Sign in'}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">New to LYPetal? <Link href="/sign-up" className="font-semibold text-petal-coral-deep hover:underline">Create an account</Link></p>
      </div>
    </main>
  )
}
