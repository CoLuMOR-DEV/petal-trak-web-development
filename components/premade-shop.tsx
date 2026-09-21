'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, Minus, Plus, ShoppingBag } from 'lucide-react'

const ADDITIONAL_STEM_PRICE = 80

type ColorOption = {
  name: string
  swatch: string
  ring?: boolean
}

const COLORS: ColorOption[] = [
  { name: 'Pastel Pink', swatch: '#F0D9DD' },
  { name: 'Pink', swatch: '#F4A6B0' },
  { name: 'Violet', swatch: '#C6B6E2' },
  { name: 'White', swatch: '#FFFFFF', ring: true },
  { name: 'Yellow', swatch: '#F5EFC0' },
  { name: 'Sage Green', swatch: '#A8D5C0' },
  { name: 'Emerald', swatch: '#0F8A6A' },
  { name: 'Brown', swatch: '#9A6B4F' },
]

type Product = {
  id: string
  name: string
  image: string
  blurb: string
  basePrice: number
}

const PRODUCTS: Product[] = [
  {
    id: 'rose',
    name: 'Rose',
    image: '/images/rose.jpg',
    blurb: 'A classic satin rose, hand-shaped petal by petal. Sold as a single stem — build your own bunch.',
    basePrice: 150,
  },
  {
    id: 'dahlia',
    name: 'Dahlia',
    image: '/images/dahlia.jpg',
    blurb: 'Layered satin dahlia with a soft, full bloom. Sold as a single stem — add more for a fuller bouquet.',
    basePrice: 150,
  },
]

const peso = (value: number) =>
  new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(value)

function ProductCard({ product }: { product: Product }) {
  const [color, setColor] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const total = product.basePrice + (quantity - 1) * ADDITIONAL_STEM_PRICE

  const handleAdd = () => {
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2000)
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative aspect-square w-full overflow-hidden bg-petal-blush/30">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={`Handmade satin ${product.name} bouquet by LYPetal`}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-petal-coral-deep shadow-sm">
          1 pc stem
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-display text-2xl font-semibold text-foreground">{product.name}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.blurb}</p>

        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground/60">
            Color
            {color ? (
              <span className="ml-2 font-semibold normal-case tracking-normal text-petal-coral-deep">
                {color}
              </span>
            ) : (
              <span className="ml-2 font-normal normal-case tracking-normal text-muted-foreground">
                Choose one
              </span>
            )}
          </p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {COLORS.map((option) => {
              const selected = color === option.name
              return (
                <button
                  key={option.name}
                  type="button"
                  onClick={() => setColor(option.name)}
                  aria-label={option.name}
                  aria-pressed={selected}
                  title={option.name}
                  className={`relative h-8 w-8 rounded-full transition-all duration-200 hover:scale-110 ${
                    option.ring ? 'ring-1 ring-inset ring-black/10' : ''
                  } ${
                    selected
                      ? 'outline outline-2 outline-offset-2 outline-petal-coral-deep'
                      : 'outline outline-1 outline-offset-2 outline-transparent'
                  }`}
                  style={{ backgroundColor: option.swatch }}
                >
                  {selected && (
                    <Check
                      className="absolute inset-0 m-auto h-4 w-4"
                      style={{ color: option.ring || option.name === 'Yellow' ? '#3f3f46' : '#fff' }}
                      strokeWidth={3}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground/60">Quantity</p>
          <div className="mt-3 flex items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-border bg-background">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
                className="grid h-10 w-10 place-items-center rounded-full text-foreground transition-colors hover:text-petal-coral-deep disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-lg font-semibold tabular-nums text-foreground">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                aria-label="Increase quantity"
                className="grid h-10 w-10 place-items-center rounded-full text-foreground transition-colors hover:text-petal-coral-deep"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <span className="text-sm text-muted-foreground">
              {quantity > 1 ? `+${peso(ADDITIONAL_STEM_PRICE)} per extra stem` : `${peso(product.basePrice)} base`}
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-end justify-between border-t border-border/60 pt-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-foreground/60">Total</p>
            <p className="font-display text-3xl font-semibold text-foreground">{peso(total)}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          disabled={!color}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
        >
          {added ? (
            <>
              <Check className="h-5 w-5" />
              Added to order
            </>
          ) : (
            <>
              <ShoppingBag className="h-5 w-5" />
              {color ? 'Add to Order' : 'Choose a color'}
            </>
          )}
        </button>
      </div>
    </article>
  )
}

export function PremadeShop() {
  return (
    <div className="mx-auto grid max-w-4xl gap-8 px-5 pb-24 sm:grid-cols-2">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
