import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
  align?: 'center' | 'left'
  /** バクヤスAI記事代行 風、見出し上に置く薄く大きな英字ラベル */
  kicker?: string
  /** 濃紺など暗い背景セクションで使う場合 */
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
            'select-none font-mono text-xs font-bold tracking-[0.3em] uppercase',
            invert ? 'text-brand-blue' : 'text-accent',
          )}
          aria-hidden
        >
          {kicker}
        </span>
      ) : null}
      <span
        className={cn(
          'inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 font-mono text-xs font-bold tracking-[0.08em]',
          invert
            ? 'bg-white/10 text-white'
            : 'bg-accent/10 text-accent',
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          'text-pretty text-3xl font-bold leading-[1.3] tracking-tight sm:text-4xl',
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
