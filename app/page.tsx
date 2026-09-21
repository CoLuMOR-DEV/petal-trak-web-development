import Image from 'next/image'
import Link from 'next/link'
import { Flower2, Heart, Sparkles, Truck } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

const products = [
  {
    icon: Flower2,
    title: 'Signature Bouquets',
    body: 'Handmade satin blooms stitched and shaped by hand, wrapped in soft pastel paper and ready to gift.',
    tint: 'bg-petal-blush',
  },
  {
    icon: Heart,
    title: 'Custom Arrangements',
    body: 'Tell us the colors, the occasion, and the feeling — Allyson crafts your satin arrangement just for you.',
    tint: 'bg-petal-aqua',
  },
  {
    icon: Sparkles,
    title: 'Everyday Posies',
    body: 'Small, cheerful satin bundles to brighten a desk, a bedside table, or an ordinary Tuesday — forever.',
    tint: 'bg-petal-sage',
  },
  {
    icon: Truck,
    title: 'Local Delivery',
    body: 'Carefully packaged and delivered across the neighborhood, right to your door.',
    tint: 'bg-petal-yellow',
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteNav />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-petal-blush/50 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-petal-aqua/40 blur-3xl"
          />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                <Flower2 className="h-4 w-4 text-petal-coral-deep" />
                Boutique satin flower studio
              </span>
              <h1 className="mt-5 text-balance font-display text-5xl font-semibold leading-[1.05] text-foreground md:text-6xl">
                Satin blooms made with love by{' '}
                <span className="text-petal-coral-deep">LYPetal</span>
              </h1>
              <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                Handcrafted satin bouquets and custom arrangements for every little moment worth
                celebrating. Keepsake blooms that never wilt — always full of heart.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/premade"
                  className="animate-pulse-soft rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95"
                >
                  Place an Order
                </Link>
                <Link
                  href="/sign-up"
                  className="rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-petal-coral hover:shadow-sm active:translate-y-0"
                >
                  Join LYPetal
                </Link>
              </div>
            </div>

            <div className="animate-fade-up [animation-delay:150ms]">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 -rotate-3 rounded-[2rem] bg-petal-yellow/60"
                />
                <Image
                  src="/images/hero-bouquet.png"
                  alt="A soft pastel bouquet of handmade satin fabric flowers"
                  width={720}
                  height={720}
                  priority
                  className="relative aspect-square w-full rounded-[2rem] object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About LYPetal */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-medium uppercase tracking-widest text-petal-coral-deep">
              About LYPetal
            </p>
            <h2 className="mt-3 text-balance font-display text-4xl font-semibold text-foreground">
              A little studio with a big love for flowers
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              LYPetal began as a passion for turning ordinary days into something a little more
              beautiful. Every arrangement is designed and assembled by hand from delicate satin
              fabric — no two bouquets are ever quite the same, and each one lasts a lifetime. We
              believe flowers are the sweetest way to say what words sometimes cannot.
            </p>
          </Reveal>
        </section>

      {/* About Allyson */}
      <section className="bg-secondary/40 py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-14">
      <Reveal>
      <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5 md:mx-0">
      <div
      aria-hidden
      className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-petal-blush/60 blur-2xl"
      />
      <Image
      src="/images/allyson.jpg"
      alt="Portrait of Allyson, the florist behind LYPetal"
      width={640}
      height={640}
      className="relative aspect-square w-full object-cover"
      />
      </div>
      </Reveal>
      <Reveal className="text-center md:text-left">
      <p className="font-medium uppercase tracking-widest text-petal-coral-deep">
      Meet the florist
      </p>
      <h2 className="mt-3 font-display text-4xl font-semibold text-foreground">
      Hi, I&apos;m Allyson
      </h2>
      <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
      I&apos;m the hands, heart, and eye behind every LYPetal creation. What started as
      shaping scraps of satin ribbon on my kitchen table has grown into a little studio I
      pour my whole heart into. I love learning what makes each person smile and
      translating it into satin petals, color, and texture.
      </p>
      <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
      When you order from LYPetal, you&apos;re not getting something off a shelf —
      you&apos;re getting a piece of my craft, made just for your moment.
      </p>
      </Reveal>
      </div>
      </section>

        {/* About Products */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-medium uppercase tracking-widest text-petal-coral-deep">
              What we make
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-foreground">
              Flowers for every occasion
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              From ready-to-gift bouquets to fully custom designs, there&apos;s a bloom for every
              story.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <Reveal as="li" key={product.title} delay={i * 90}>
                <article className="group h-full rounded-3xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${product.tint} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <product.icon className="h-6 w-6 text-foreground/70" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {product.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 pb-4">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-petal-blush via-petal-yellow/70 to-petal-aqua/70 px-6 py-14 text-center md:px-16">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 animate-float rounded-full bg-white/30 blur-2xl"
              />
              <h2 className="text-balance font-display text-4xl font-semibold text-foreground">
                Ready for blooms that last forever?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-foreground/70">
                Browse our premade satin bouquets or design your own. Join the LYPetal family and
                let Allyson bring your bloom to life.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/premade"
                  className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95"
                >
                  Place an Order
                </Link>
                <Link
                  href="/customize"
                  className="rounded-full border border-foreground/15 bg-white/70 px-7 py-3.5 text-base font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
                >
                  Customize Your Own
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
