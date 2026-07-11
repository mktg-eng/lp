import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
  align?: 'center' | 'left'
  /** Big faded uppercase word rendered above the title, Claude導入くん 風の英字ラベル */
  kicker?: string
  /** 濃紺の背景セクションで使う場合 */
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
        'flex flex-col gap-3',
        align === 'center'
          ? 'mx-auto max-w-2xl items-center text-center'
          : 'items-start text-left',
        className,
      )}
    >
      {kicker ? (
        <span
          className={cn(
            'select-none text-4xl font-black uppercase tracking-tight sm:text-5xl',
            invert ? 'text-white/10' : 'text-brand-navy/8',
          )}
          aria-hidden
        >
          {kicker}
        </span>
      ) : null}
      <span
        className={cn(
          'inline-flex w-fit items-center gap-2 rounded-sm px-3 py-1 font-mono text-xs font-bold tracking-[0.08em]',
          invert
            ? 'bg-brand-orange text-brand-orange-foreground'
            : 'bg-primary text-primary-foreground',
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          'text-pretty text-3xl font-black leading-[1.3] tracking-tight sm:text-4xl',
          invert ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'text-pretty leading-relaxed',
            invert ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
