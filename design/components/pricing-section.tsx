import Link from 'next/link'
import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'ひとつずつプラン',
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
      <SectionHeading
        eyebrow="料金"
        title="使い方に合わせて選べる3つのプラン"
        description="料金はご依頼の内容や量により異なります。ヒアリングのうえ、月額の目安をお見積りでご提示します。"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              'relative flex flex-col gap-6 rounded-2xl border p-7 sm:p-8',
              plan.featured
                ? 'border-accent/60 bg-card shadow-lg shadow-black/5'
                : 'border-border bg-card',
            )}
          >
            {plan.featured ? (
              <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                おすすめ
              </span>
            ) : null}

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
            </div>

            <div className="flex flex-col gap-1 border-y border-border py-5">
              <span className="text-3xl font-semibold tracking-tight">
                {plan.price}
              </span>
              <span className="text-xs text-muted-foreground">{plan.priceNote}</span>
            </div>

            <ul className="flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              variant={plan.featured ? 'default' : 'outline'}
              className="h-11 w-full"
              nativeButton={false}
              render={<Link href="#contact" />}
            >
              このプランを相談する
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        ※ 記載は目安です。実際の費用・内容はヒアリング後のお見積りでご提示します。
      </p>
    </section>
  )
}
