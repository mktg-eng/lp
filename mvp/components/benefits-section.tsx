import { Building2, TrendingDown, ShieldCheck, Network } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const items = [
  {
    icon: Building2,
    title: '大企業との取引実績',
    description:
      '実績のある企業として、お客様と提携システム会社の間に立ち、信頼の土台をご提供します。（具体的な社名・実績は確認のうえ掲載予定）',
  },
  {
    icon: TrendingDown,
    title: 'AI活用のコスト圧縮実績',
    description:
      '自社の別事業（英訳受託）では、本来◯◯◯万円規模の作業をAI活用で約◯◯万円に圧縮した参考事例があります。※別事業での実績であり、本サービスの成果を保証するものではありません。',
  },
  {
    icon: ShieldCheck,
    title: 'NDA・所有権はお客様',
    description:
      'ヒアリングはNDA締結のうえで実施します。開発したMVPの所有権はお客様に帰属します。',
  },
  {
    icon: Network,
    title: '提携システム会社ネットワーク',
    description:
      '複数の提携システム会社と連携し、案件に応じて相見積もりを手配します。（提携社数は確認のうえ掲載予定）',
  },
]

export function BenefitsSection() {
  return (
    <section id="results" className="relative border-y border-border bg-muted/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="実績・信頼"
          title="間に立つのは、実績のある企業です"
          description="お客様とシステム会社の間に信頼できる第三者として立つことで、安心して相見積もりを進められます。"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-xl border border-border bg-background p-6 sm:p-7"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <item.icon className="size-5.5" aria-hidden />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          ※ 社名・数値はプレースホルダーです。掲載内容は確認のうえ確定します。誇張した表現は行いません。
        </p>
      </div>
    </section>
  )
}
