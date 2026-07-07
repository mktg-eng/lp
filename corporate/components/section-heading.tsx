import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  en: string
  ja: string
  description?: string
  className?: string
  align?: 'center' | 'left'
}

/**
 * Algomatic風の見出し：英語の大きなライト書体タイトル＋小さな日本語ラベル。
 */
export function SectionHeading({
  en,
  ja,
  description,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center'
          ? 'mx-auto max-w-2xl items-center text-center'
          : 'items-start text-left',
        className,
      )}
    >
      <div
        className={cn(
          'flex flex-wrap items-baseline gap-x-5 gap-y-2',
          align === 'center' && 'justify-center',
        )}
      >
        <h2 className="text-5xl font-light tracking-wide sm:text-6xl">{en}</h2>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden />
          {ja}
        </span>
      </div>
      {description ? (
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}
