import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
  align?: 'center' | 'left'
  /** 見出し上に大きく薄く敷く英字ラベル。スピード感のあるイタリック表示。 */
  kicker?: string
  /** ライムの明るい背景ブロック上で使う場合（テキストを反転） */
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
            'select-none text-4xl font-black tracking-tight italic uppercase sm:text-5xl',
            invert ? 'text-brand-ink/15' : 'text-foreground/10',
          )}
          aria-hidden
        >
          {kicker}
        </span>
      ) : null}
      <span
        className={cn(
          'inline-flex w-fit items-center gap-2 rounded-md px-3 py-1 font-mono text-xs font-bold tracking-[0.08em]',
          invert
            ? 'bg-brand-ink text-brand-lime'
            : 'bg-primary text-primary-foreground',
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          'text-pretty text-3xl leading-[1.25] font-black tracking-tight sm:text-4xl',
          invert ? 'text-brand-ink' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'text-pretty leading-relaxed',
            invert ? 'text-brand-ink/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
