import Link from 'next/link'
import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: '初期構築',
    description: 'まずは“当たる型”づくりから始めたい方へ。',
    price: '要お見積り',
    featured: false,
    features: [
      'ターゲット・訴求の設計',
      'AIによるLP量産（複数パターン）',
      'フォーム営業の初期セットアップ',
      '配信ルール・運用方針の整理',
    ],
  },
  {
    name: '月額運用',
    description: '量産・配信・分析を継続して回したい方へ。',
    price: '要お見積り',
    featured: true,
    features: [
      '初期構築の全内容',
      'LPの追加量産・改善',
      'フォーム営業の配信・運用代行',
      '反応データの分析レポート',
      '当たった型の横展開支援',
    ],
  },
  {
    name: '成果連動オプション',
    description: '成果に応じた費用設計も相談したい方へ。',
    price: '要お見積り',
    featured: false,
    features: [
      '月額運用との組み合わせ',
      '成果指標（リード等）の設計',
      '成果に連動した費用プラン',
      '目標に向けた優先施策の提案',
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        kicker="Pricing"
        eyebrow="料金"
        title="ご状況に合わせた3つのプラン"
        description="料金はターゲットや量産・配信の範囲により異なります。詳細はお見積りにて個別にご案内します。"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              'relative flex flex-col gap-6 rounded-2xl border p-7 sm:p-8',
              plan.featured
                ? 'border-primary/60 bg-card shadow-2xl shadow-primary/10'
                : 'border-border bg-card',
            )}
          >
            {plan.featured ? (
              <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 font-mono text-xs font-bold text-primary-foreground">
                おすすめ
              </span>
            ) : null}

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
            </div>

            <div className="flex items-baseline gap-1.5 border-y border-border py-5">
              <span className="font-mono text-3xl font-black tracking-tight">
                {plan.price}
              </span>
            </div>

            <ul className="flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
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
