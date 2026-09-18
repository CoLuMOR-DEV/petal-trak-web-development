import { cn } from '@/lib/utils'

export function PetalMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn('h-8 w-8', className)}
      role="img"
      aria-label="LYPetal flower mark"
    >
      <g transform="translate(24 24)">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-11"
            rx="6.5"
            ry="11"
            transform={`rotate(${angle})`}
            fill={i % 2 === 0 ? 'var(--color-petal-coral)' : 'var(--color-petal-blush)'}
            opacity="0.92"
          />
        ))}
        <circle cx="0" cy="0" r="6" fill="var(--color-petal-yellow)" />
      </g>
    </svg>
  )
}
