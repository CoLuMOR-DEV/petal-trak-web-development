import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Customize Your Own',
  description: 'Design a one-of-a-kind handmade satin flower arrangement with LYPetal.',
}

export default function CustomizePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteNav />

      <main className="flex-1">
        <section className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center">
          <span className="inline-flex h-16 w-16 animate-float items-center justify-center rounded-3xl bg-petal-aqua">
            <Heart className="h-8 w-8 text-foreground/70" />
          </span>
          <p className="mt-6 font-medium uppercase tracking-widest text-petal-coral-deep">
            Customize Your Own
          </p>
          <h1 className="mt-3 text-balance font-display text-4xl font-semibold text-foreground md:text-5xl">
            Your dream satin arrangement, coming soon
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Soon you&apos;ll be able to pick your colors, blooms, and wrapping to design a
            one-of-a-kind satin bouquet. For now, join LYPetal and Allyson will help you craft
            something special.
          </p>
          <Link
            href="/sign-up"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95"
          >
            Join LYPetal
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
