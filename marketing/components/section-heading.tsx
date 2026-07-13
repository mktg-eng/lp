import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
  align?: 'center' | 'left'
  /** セクションを示す小さな英字ラベル。トレンドグリフ付きのデータタグとして表示する。 */
  kicker?: string
  /** ライムの明るい背景ブロック上で使う場合（テキストを反転） */
  invert?: boolean
}

/** 右肩上がりのトレンドラインを表す小さな装飾グリフ。数値は持たない純粋な意匠。 */
function TrendGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 14"
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d="M1 11.5 L7 6 L10.5 9 L19 1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 1.5 H19 V7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
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
      <div
        className={cn(
          'flex flex-wrap items-center gap-2.5',
          align === 'center' && 'justify-center',
        )}
      >
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
        {kicker ? (
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.16em] uppercase',
              invert
                ? 'border-brand-ink/20 text-brand-ink/55'
                : 'border-border text-muted-foreground/70',
            )}
          >
            <TrendGlyph
              className={cn(
                'size-3',
                invert ? 'text-brand-ink/45' : 'text-primary',
              )}
            />
            {kicker}
          </span>
        ) : null}
      </div>
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
