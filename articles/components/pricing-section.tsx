import Link from 'next/link'
import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'スタート',
    description: 'まずは小さく試して、進め方を確かめたい方へ。',
    price: '要お見積り',
    featured: false,
    features: [
      '月数本の記事制作（本数は目安）',
      'キーワード選定・構成案の作成',
      'AI下書き×人の編集',
      'CMS入稿・公開作業の代行',
    ],
  },
  {
    name: '量産プラン',
    description: '本数を確保して、サイトを本格的に育てたい方へ。',
    price: '要お見積り',
    featured: true,
    features: [
      'スタートの全内容',
      '月あたりの制作本数を拡大（目安）',
      '比較表・CTA設計などCVコンテンツ',
      '内部リンク設計',
      '優先的な制作スケジュール',
    ],
  },
  {
    name: '伴走プラン',
    description: '戦略から公開後の改善まで、まとめて任せたい方へ。',
    price: '要お見積り',
    featured: false,
    features: [
      '量産プランの全内容',
      '月次レポートと定例ミーティング',
      '既存記事のリライト',
      'AI検索での見え方モニタリング',
      'コンテンツ戦略の定期見直し',
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="料金"
        title="ご状況に合わせた3つのプラン"
        description="料金は本数・記事の分量・監修の有無により異なります。詳細はお見積りにて個別にご案内します。"
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
