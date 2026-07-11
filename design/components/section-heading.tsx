import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
  align?: 'center' | 'left'
  /** Chapter-style large faint serif word rendered behind the heading */
  kicker?: string
  /** dark/ink な背景セクションで使う場合 */
  invert?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'center',
  kicker,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col gap-4',
        align === 'center'
          ? 'mx-auto max-w-2xl items-center text-center'
          : 'items-start text-left',
        className,
      )}
    >
      {kicker ? (
        <span
          className={cn(
            'pointer-events-none absolute -top-6 text-6xl leading-none font-display font-bold italic select-none sm:-top-10 sm:text-8xl',
            align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0',
            invert ? 'text-white/[0.06]' : 'text-brand-ink/[0.05]',
          )}
          aria-hidden
        >
          {kicker}
        </span>
      ) : null}
      <span
        className={cn(
          'relative inline-flex w-fit items-center gap-2.5 font-mono text-[11px] font-medium tracking-[0.28em] uppercase',
          invert ? 'text-white/60' : 'text-muted-foreground',
        )}
      >
        <span
          className={cn(
            'h-px w-6',
            invert ? 'bg-white/40' : 'bg-brand-vermillion',
          )}
          aria-hidden
        />
        {eyebrow}
      </span>
      <h2
        className={cn(
          'relative text-pretty font-display text-4xl leading-[1.2] font-bold tracking-tight sm:text-5xl',
          invert ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'relative text-pretty leading-relaxed',
            invert ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
