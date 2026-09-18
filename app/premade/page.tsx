import type { Metadata } from 'next'
import Link from 'next/link'
import { Flower2 } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Premade Bouquets',
  description: 'Browse LYPetal\u2019s ready-to-gift handmade satin flower bouquets.',
}

export default function PremadePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteNav />

      <main className="flex-1">
        <section className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center">
          <span className="inline-flex h-16 w-16 animate-float items-center justify-center rounded-3xl bg-petal-blush">
            <Flower2 className="h-8 w-8 text-foreground/70" />
          </span>
          <p className="mt-6 font-medium uppercase tracking-widest text-petal-coral-deep">
            Premade Bouquets
          </p>
          <h1 className="mt-3 text-balance font-display text-4xl font-semibold text-foreground md:text-5xl">
            Our satin collection is being arranged
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Allyson is busy stitching a gallery of ready-to-gift satin bouquets. Check back soon —
            or join LYPetal now so you&apos;re first to know when it blooms.
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
