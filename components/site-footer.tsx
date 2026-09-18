import Link from 'next/link'
import { PetalMark } from '@/components/petal-mark'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <PetalMark className="h-8 w-8" />
          <div>
            <p className="font-display text-lg font-semibold text-foreground">LYPetal</p>
            <p className="text-sm text-muted-foreground">Handcrafted blooms by Allyson</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="/premade" className="transition-colors hover:text-foreground">
            Premade Flowers
          </Link>
          <Link href="/customize" className="transition-colors hover:text-foreground">
            Customize
          </Link>
          <Link href="/sign-up" className="transition-colors hover:text-foreground">
            Sign Up
          </Link>
        </nav>
      </div>
      <div className="border-t border-border/60 px-5 py-4">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          {`\u00A9 ${new Date().getFullYear()} LYPetal - Petal-Trak. Made with care.`}
        </p>
      </div>
    </footer>
  )
}
