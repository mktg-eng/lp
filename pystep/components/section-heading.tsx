import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
  align?: 'center' | 'left'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center'
          ? 'items-center text-center mx-auto max-w-2xl'
          : 'items-start text-left',
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}
