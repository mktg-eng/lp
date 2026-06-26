import Link from 'next/link'
import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'スポット導入',
    description: 'まずは基本の環境構築から始めたい方へ。',
    price: '要お見積り',
    featured: false,
    features: [
      '初期セットアップ',
      'MCP・権限の基本設定',
      '操作レクチャー（1回）',
      'セットアップ手順の共有',
    ],
  },
  {
    name: '導入＋エージェント設定',
    description: 'チームでの活用を本格的に進めたい方へ。',
    price: '要お見積り',
    featured: true,
    features: [
      'スポット導入の全内容',
      'サブエージェント設計・実装',
      'ワークフローのカスタマイズ',
      '運用ルールの整備支援',
      '導入後サポート（一定期間）',
    ],
  },
  {
    name: '継続サポート',
    description: '運用を続けながら改善していきたい方へ。',
    price: '要お見積り',
    featured: false,
    features: [
      '導入＋エージェント設定の全内容',
      '定期的な構成見直し',
      '追加エージェントの開発',
      'チームからの相談対応',
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="料金"
        title="ご状況に合わせた3つのプラン"
        description="料金はチーム規模や対象範囲により異なります。詳細はお見積りにて個別にご案内します。"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              'relative flex flex-col gap-6 rounded-2xl border p-7 sm:p-8',
              plan.featured
                ? 'border-accent/60 bg-card shadow-xl shadow-primary/10'
                : 'border-border bg-card/50',
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

            <div className="flex items-baseline gap-1.5 border-y border-border py-5">
              <span className="text-3xl font-semibold tracking-tight">
                {plan.price}
              </span>
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
