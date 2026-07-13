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

const maxFeatureCount = Math.max(...plans.map((plan) => plan.features.length))

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        kicker="Pricing"
        eyebrow="料金"
        title="ご状況に合わせた3つのプラン"
        description="料金はターゲットや量産・配信の範囲により異なります。詳細はお見積りにて個別にご案内します。"
      />

      {/* 初期構築→月額運用→成果連動オプションという成長パスであることを示すステップレール */}
      <div className="mt-12 hidden items-center gap-2 lg:flex">
        {plans.map((plan, index) => (
          <div key={plan.name} className="flex flex-1 items-center gap-2">
            <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] text-muted-foreground/70 uppercase">
              <span
                className={cn(
                  'flex size-5 items-center justify-center rounded-full border font-mono text-[10px]',
                  plan.featured
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border text-muted-foreground',
                )}
              >
                {index + 1}
              </span>
              Stage {index + 1}
            </span>
            {index < plans.length - 1 ? (
              <span className="h-px flex-1 bg-border" aria-hidden />
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-6 lg:mt-4 lg:grid-cols-3">
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

            {/* 収録項目数から算出したスコープメーター（実際の features 配列の長さに基づく実データ） */}
            <div className="-mt-3 flex items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-brand-gradient"
                  style={{
                    width: `${(plan.features.length / maxFeatureCount) * 100}%`,
                  }}
                  aria-hidden
                />
              </div>
              <span className="font-mono text-[10px] whitespace-nowrap text-muted-foreground">
                {plan.features.length}項目収録
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
