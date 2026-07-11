import Link from 'next/link'
import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'ひとつずつプラン',
    tag: '上限なし・頼み放題',
    description: 'まずは定額の使い勝手を試したい方へ。',
    price: '要お見積り',
    priceNote: '月額・目安をお見積りでご提示',
    featured: false,
    features: [
      '依頼件数は無制限（着手は1案件ずつ）',
      'チャットでいつでも依頼OK',
      '初稿への修正対応込み',
      '月単位契約・いつでも解約可',
    ],
  },
  {
    name: '同時進行プラン',
    tag: '複数案件・同時進行',
    description: '依頼が多く、複数案件を並行して進めたい方へ。',
    price: '要お見積り',
    priceNote: '月額・目安をお見積りでご提示',
    featured: true,
    features: [
      'ひとつずつプランの全内容',
      '複数案件の同時進行（本数は目安をご提示）',
      '優先的なスケジュール調整',
      '定例ミーティング（ご希望に応じて）',
    ],
  },
  {
    name: 'スポット',
    tag: '単発・個別見積り',
    description: '単発の案件だけ頼みたい方へ。',
    price: '要お見積り',
    priceNote: '案件ごとに個別お見積り',
    featured: false,
    features: [
      '1案件からご依頼可能',
      '内容・分量に応じた個別お見積り',
      '定額プランへの切り替えも可能',
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          kicker="Plan"
          eyebrow="料金"
          title="使い方に合わせて選べる3つのプラン"
          description="料金はご依頼の内容や量により異なります。ヒアリングのうえ、月額の目安をお見積りでご提示します。"
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 100}>
            <div
              className={cn(
                'relative flex h-full flex-col gap-6 rounded-sm border bg-brand-paper p-7 shadow-[0_1px_2px_rgba(36,31,26,0.04),0_16px_40px_-20px_rgba(36,31,26,0.35)] sm:p-8',
                plan.featured ? 'border-brand-vermillion/40' : 'border-brand-ink/10',
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-7 rounded-sm bg-brand-vermillion px-3 py-1 font-mono text-[11px] font-bold tracking-wide text-brand-vermillion-foreground">
                  おすすめ
                </span>
              ) : null}

              <div className="flex flex-col gap-2">
                <span className="w-fit rounded-sm border border-brand-ink/15 px-2 py-1 font-mono text-[11px] font-medium text-muted-foreground">
                  {plan.tag}
                </span>
                <h3 className="font-display text-lg font-bold text-brand-ink">{plan.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="flex flex-col gap-1 border-y border-brand-ink/10 py-5">
                <span className="font-display text-3xl font-bold tracking-tight text-brand-ink">
                  {plan.price}
                </span>
                <span className="text-xs text-muted-foreground">{plan.priceNote}</span>
              </div>

              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-vermillion" aria-hidden />
                    <span className="leading-relaxed text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={plan.featured ? 'default' : 'outline'}
                className={cn(
                  'h-11 w-full rounded-sm',
                  plan.featured
                    ? 'bg-brand-ink text-brand-ink-foreground hover:bg-brand-ink/85'
                    : 'border-brand-ink/25 bg-transparent text-brand-ink hover:bg-brand-ink/5',
                )}
                nativeButton={false}
                render={<Link href="#contact" />}
              >
                このプランを相談する
              </Button>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        ※ 記載は目安です。実際の費用・内容はヒアリング後のお見積りでご提示します。
      </p>
    </section>
  )
}
