'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PetalMark } from '@/components/petal-mark'

const links = [
  { href: '/', label: 'Home' },
  { href: '/premade', label: 'Premade Flowers' },
  { href: '/customize', label: 'Customize' },
  { href: '/sign-up', label: 'Sign Up' },
]

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
          onClick={() => setOpen(false)}
        >
          <PetalMark className="h-9 w-9 animate-float" />
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            LYPetal
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground',
                    active && 'text-foreground',
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-petal-coral transition-transform duration-300 group-hover:scale-x-100',
                      active && 'scale-x-100',
                    )}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        <Link
          href="/premade"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95 md:inline-block"
        >
          Place Order
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-6 w-6">
            <Menu
              className={cn(
                'absolute inset-0 transition-all duration-300',
                open ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100',
              )}
            />
            <X
              className={cn(
                'absolute inset-0 transition-all duration-300',
                open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0',
              )}
            />
          </span>
        </button>
      </nav>

      <div
        className={cn(
          'grid overflow-hidden transition-all duration-300 ease-out md:hidden',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <ul className="min-h-0 flex-col gap-1 px-5 pb-4">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                    active
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
          <li>
            <Link
              href="/premade"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Place Order
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
