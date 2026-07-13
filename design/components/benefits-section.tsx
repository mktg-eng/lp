import { CalendarCheck, Layers, UserRoundCheck, PencilRuler } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

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
    <section id="benefits" className="relative bg-brand-paper">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.25] mix-blend-multiply" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="導入後の変化"
            title="「頼みたいとき、すぐ頼める」が当たり前になる"
            description="定額の制作体制が整うと、デザインまわりの動き方はこう変わります。"
          />
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-10 border-t border-brand-ink/10 sm:grid-cols-2">
          {benefits.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 100}
              className="flex flex-col gap-4 border-b border-brand-ink/10 py-8"
            >
              <div className="flex items-center justify-between">
                <item.icon className="size-5 text-brand-vermillion" aria-hidden />
                <span className="font-mono text-xs tracking-[0.1em] text-muted-foreground/60">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
