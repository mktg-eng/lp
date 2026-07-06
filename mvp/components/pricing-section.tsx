import Link from 'next/link'
import { Check, CircleDollarSign, AlertTriangle, ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'

const patterns: {
  icon: typeof CircleDollarSign
  badge: string
  title: string
  price: string
  featured: boolean
  tone: 'accent' | 'primary' | 'muted'
  description: string
  link?: { href: string; label: string }
}[] = [
  {
    icon: CircleDollarSign,
    badge: 'CASE 01',
    title: '本開発費が下がった',
    price: '差額の30%',
    featured: true,
    tone: 'accent' as const,
    description:
      '相見積もりで本開発費が下がった場合のみ、その差額の30%を成果報酬として頂戴します。',
  },
  {
    icon: Check,
    badge: 'CASE 02',
    title: '下がらなかった',
    price: '0円',
    featured: false,
    tone: 'primary' as const,
    description:
      '相見積もりで価格が下がらなければ、成果報酬はいただきません。費用は発生しません。',
  },
  {
    icon: AlertTriangle,
    badge: 'CASE 03',
    title: '提携網を経由せず本開発／中止',
    price: '規模に応じた実費',
    featured: false,
    tone: 'muted' as const,
    description:
      '提携システム会社を経由せずに本開発する、または途中で中止する場合は、MVPの規模（S/M/L）と時点に応じた実費のみを頂戴します。',
    link: { href: '#cancellation', label: '実費の一覧表を見る' },
  },
]

export function PricingSection() {
  return (
    <section className="relative border-b border-border bg-muted/60">
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {patterns.map((p) => (
            <div
              key={p.title}
              className={cn(
                'relative flex flex-col gap-5 rounded-2xl border p-7 sm:p-8',
                p.featured
                  ? 'border-accent/60 bg-background shadow-lg shadow-black/5'
                  : 'border-border bg-background',
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    'flex size-11 items-center justify-center rounded-xl',
                    p.tone === 'accent' && 'bg-accent/15 text-accent',
                    p.tone === 'primary' && 'bg-primary/15 text-primary',
                    p.tone === 'muted' && 'border border-border bg-secondary text-muted-foreground',
                  )}
                >
                  <p.icon className="size-5" aria-hidden />
                </span>
                <span className="font-mono text-xs text-muted-foreground/60">
                  {p.badge}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p
                  className={cn(
                    'text-2xl font-semibold tracking-tight',
                    p.tone === 'accent' ? 'text-accent' : 'text-foreground',
                  )}
                >
                  {p.price}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              {p.link ? (
                <Link
                  href={p.link.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-foreground"
                >
                  {p.link.label}
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          ※ 記載は目安です。対象範囲や条件の詳細は、NDA締結のうえヒアリング後にご案内します。
        </p>
      </div>
    </section>
  )
}
