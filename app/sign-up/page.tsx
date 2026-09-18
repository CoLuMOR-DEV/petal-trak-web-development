import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { SignUpForm } from '@/components/sign-up-form'

export const metadata: Metadata = {
  title: 'Join LYPetal',
  description:
    'Create your LYPetal customer profile to order handmade satin flower bouquets and custom arrangements.',
}

export default function SignUpPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteNav />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-petal-blush/50 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-petal-aqua/40 blur-3xl"
          />
          <div className="mx-auto w-full max-w-xl px-5 py-16 md:py-20">
            <div className="animate-fade-up text-center">
              <p className="font-medium uppercase tracking-widest text-petal-coral-deep">
                Join the family
              </p>
              <h1 className="mt-3 text-balance font-display text-4xl font-semibold text-foreground md:text-5xl">
                Create your LYPetal profile
              </h1>
              <p className="mx-auto mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                Tell us a little about you so Allyson can craft and deliver satin blooms made just
                for your moments.
              </p>
            </div>

            <div className="mt-10 animate-fade-up [animation-delay:120ms]">
              <SignUpForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
