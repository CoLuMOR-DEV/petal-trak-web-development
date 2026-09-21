'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { createCustomer, type SignUpState } from '@/app/actions/customers'
import { signUp } from '@/lib/auth-client'

const initialState: SignUpState = { status: 'idle' }

function Field({ id, label, type = 'text', autoComplete, placeholder, error, ...rest }: { id: string; label: string; type?: string; autoComplete?: string; placeholder?: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <input id={id} name={id} type={type} autoComplete={autoComplete} placeholder={placeholder} aria-invalid={error ? true : undefined} aria-describedby={error ? `${id}-error` : undefined} className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-foreground shadow-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus:border-petal-coral focus:ring-2 focus:ring-petal-coral/40 aria-[invalid=true]:border-destructive" {...rest} />
      {error ? <p id={`${id}-error`} className="mt-1.5 text-sm text-destructive">{error}</p> : null}
    </div>
  )
}

export function SignUpForm() {
  const router = useRouter()
  const [state, setState] = useState(initialState)
  const [pending, setPending] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const password = String(formData.get('password') ?? '')
    if (password.length < 8) {
      setState({ status: 'error', message: 'Please fix the highlighted fields.', errors: { password: 'Password must be at least 8 characters.' } as SignUpState['errors'] })
      return
    }
    setPending(true)
    setState(initialState)
    const result = await signUp.email({
      email: String(formData.get('email') ?? '').trim().toLowerCase(),
      password,
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
    })
    if (result.error) {
      setPending(false)
      setState({ status: 'error', message: 'We could not create your account. Please check your details and try again.' })
      return
    }
    const profile = await createCustomer(initialState, formData)
    setPending(false)
    if (profile.status === 'error') {
      setState(profile)
      return
    }
    setState({ status: 'success', message: `Welcome to LYPetal, ${formData.get('firstName')}! Your account has been created.` })
    router.refresh()
  }

  if (state.status === 'success') return <div className="animate-fade-up rounded-3xl border border-border/70 bg-card p-8 text-center shadow-sm"><span className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-petal-sage"><CheckCircle2 className="size-8 text-foreground/70" /></span><h2 className="mt-5 font-display text-2xl font-semibold">You&apos;re all set!</h2><p className="mt-3 leading-relaxed text-muted-foreground">{state.message}</p><button type="button" onClick={() => router.push('/premade')} className="mt-6 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground">Browse satin bouquets</button></div>

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8">
      {state.status === 'error' && state.message ? <p role="alert" className="mb-6 rounded-2xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{state.message}</p> : null}
      <div className="grid gap-5 sm:grid-cols-2"><Field id="firstName" label="First name" autoComplete="given-name" placeholder="Rose" error={state.errors?.firstName} required /><Field id="lastName" label="Last name" autoComplete="family-name" placeholder="Bloom" error={state.errors?.lastName} required /></div>
      <div className="mt-5"><Field id="email" label="Email" type="email" autoComplete="email" placeholder="rose@example.com" error={state.errors?.email} required /></div>
      <div className="mt-5"><Field id="password" label="Password" type="password" autoComplete="new-password" placeholder="At least 8 characters" error={(state.errors as Record<string, string> | undefined)?.password} minLength={8} required /></div>
      <div className="mt-5"><Field id="phone" label="Phone number" type="tel" autoComplete="tel" placeholder="(555) 123-4567" error={state.errors?.phone} required /></div>
      <div className="mt-5"><Field id="address" label="Delivery address" autoComplete="street-address" placeholder="123 Petal Lane, Springtown" error={state.errors?.address} required /></div>
      <button type="submit" disabled={pending} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70">{pending ? <><Loader2 className="size-5 animate-spin" /> Creating your account…</> : 'Join LYPetal'}</button>
      <p className="mt-4 text-center text-sm text-muted-foreground">We&apos;ll only use your details to prepare and deliver your satin blooms.</p>
    </form>
  )
}
