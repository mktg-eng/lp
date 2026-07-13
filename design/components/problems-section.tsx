import { FileClock, Shuffle, Wallet, MessageCircleQuestion } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const problems = [
  {
    icon: FileClock,
    title: '都度の見積もりが面倒',
    description:
      '依頼のたびに見積もり・発注・請求のやり取りが発生。頼む前の段階で時間と手間を取られてしまう。',
  },
  {
    icon: Shuffle,
    title: '品質がバラバラ',
    description:
      '毎回違う制作会社やフリーランスに頼んでいると、テイストや品質が揃わず、ブランドの印象がぶれてしまう。',
  },
  {
    icon: Wallet,
    title: '採用は固定費が重い',
    description:
      'デザイナーを雇うには採用・教育・給与の負担が大きい。依頼量には月ごとの波があるのに、コストは一定のまま。',
  },
  {
    icon: MessageCircleQuestion,
    title: 'ちょい修正の頼み先がない',
    description:
      '「文字を差し替えたい」「サイズ違いがほしい」。そんな小さな修正を、気軽に頼める相手が見つからない。',
  },
]

export function ProblemsSection() {
  return (
    <section id="problems" className="bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="こんなお悩みは？"
            title="デザインを“外に頼む”のは、意外と大変"
            description="デザインの外注や内製化には、こんなつまずきがよく見られます。"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-sm border border-brand-ink/12 bg-brand-paper p-6 shadow-[0_1px_2px_rgba(36,31,26,0.04),0_16px_40px_-20px_rgba(36,31,26,0.35)] transition-transform duration-300 hover:-translate-y-1">
                <span
                  className="pointer-events-none absolute -top-4 -right-2 select-none font-display text-7xl leading-none font-bold text-brand-ink/[0.05]"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <item.icon className="relative size-5 text-brand-vermillion" aria-hidden />
                <h3 className="relative font-display text-lg font-bold text-brand-ink">
                  {item.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
