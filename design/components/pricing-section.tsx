import Link from 'next/link'
import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
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
      <SectionHeading
        kicker="PLAN"
        eyebrow="料金"
        title="使い方に合わせて選べる3つのプラン"
        description="料金はご依頼の内容や量により異なります。ヒアリングのうえ、月額の目安をお見積りでご提示します。"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              'relative flex flex-col gap-6 rounded-lg border-2 border-black p-7 sm:p-8',
              plan.featured ? 'bg-brand-yellow' : 'bg-white',
            )}
          >
            {plan.featured ? (
              <span className="absolute -top-3.5 left-7 rounded-sm bg-brand-coral px-3 py-1 text-xs font-bold text-brand-coral-foreground">
                おすすめ
              </span>
            ) : null}

            <div className="flex flex-col gap-2">
              <span className="w-fit rounded-sm bg-black px-2 py-1 font-mono text-[11px] font-bold text-white">
                {plan.tag}
              </span>
              <h3 className="text-lg font-black">{plan.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
            </div>

            <div className="flex flex-col gap-1 border-y-2 border-black/10 py-5">
              <span className="text-3xl font-black tracking-tight">
                {plan.price}
              </span>
              <span className="text-xs text-muted-foreground">{plan.priceNote}</span>
            </div>

            <ul className="flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-coral/15 text-brand-coral">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className={cn(
                'h-11 w-full rounded-md',
                plan.featured
                  ? 'bg-black text-white hover:bg-black/85'
                  : 'bg-brand-coral text-brand-coral-foreground hover:bg-brand-coral/85',
              )}
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
