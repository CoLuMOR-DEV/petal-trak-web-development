import type { Metadata } from 'next'
import { Flower2 } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PremadeShop } from '@/components/premade-shop'

export const metadata: Metadata = {
  title: 'Premade Flowers',
  description: 'Browse LYPetal\u2019s ready-to-gift handmade satin flower stems — Rose and Dahlia.',
}

export default function PremadePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteNav />

      <main className="flex-1">
        <section className="mx-auto flex max-w-2xl flex-col items-center px-5 pb-12 pt-20 text-center">
          <span className="inline-flex h-16 w-16 animate-float items-center justify-center rounded-3xl bg-petal-blush">
            <Flower2 className="h-8 w-8 text-foreground/70" />
          </span>
          <p className="mt-6 font-medium uppercase tracking-widest text-petal-coral-deep">
            Premade Flowers
          </p>
          <h1 className="mt-3 text-balance font-display text-4xl font-semibold text-foreground md:text-5xl">
            Ready-to-gift satin blooms
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Each flower is handmade from satin and sold as a single 1&nbsp;pc stem. Pick your color
            and quantity — every extra stem adds &#8369;80 so you can build the perfect bunch.
          </p>
        </section>

        <PremadeShop />
      </main>

      <SiteFooter />
    </div>
  )
}
