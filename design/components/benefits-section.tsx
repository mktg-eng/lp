import { CalendarCheck, Layers, UserRoundCheck, PencilRuler } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const benefits = [
  {
    icon: CalendarCheck,
    title: '定額だから、気軽に頼める',
    description:
      '月額が決まっているので、依頼のたびの見積もりや社内稟議は不要。思いついたタイミングでチャットに送るだけです。',
  },
  {
    icon: Layers,
    title: '窓口ひとつ、品質もひとつ',
    description:
      '同じチームが継続して担当するため、テイストや品質が揃います。ブランドの一貫性を保ちやすくなります。',
  },
  {
    icon: UserRoundCheck,
    title: '雇うより、身軽に',
    description:
      '採用や教育のコストをかけずに、デザインの制作体制を持てます。依頼量の波には月単位のプラン変更で対応できます。',
  },
  {
    icon: PencilRuler,
    title: '小さな修正も、遠慮なく',
    description:
      'バナーのサイズ展開や文言の差し替えなど、細かな依頼も定額の範囲内。「これくらいで頼んでいいのかな」という遠慮は不要です。',
  },
]

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative border-y border-border bg-muted/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="導入後の変化"
          title="「頼みたいとき、すぐ頼める」が当たり前になる"
          description="定額の制作体制が整うと、デザインまわりの動き方はこう変わります。"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-xl border border-border bg-background p-6 sm:p-7"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
      </div>
    </section>
  )
}
