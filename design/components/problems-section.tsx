import { FileClock, Shuffle, Wallet, MessageCircleQuestion } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

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
        <SectionHeading
          kicker="ISSUE"
          eyebrow="こんなお悩みは？"
          title="デザインを“外に頼む”のは、意外と大変"
          description="デザインの外注や内製化には、こんなつまずきがよく見られます。"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-lg border-2 border-black bg-white p-6 transition-transform hover:-translate-y-1"
            >
              <span
                className="pointer-events-none absolute -top-3 -right-2 select-none font-black text-black/[0.06] text-7xl"
                aria-hidden
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="relative flex size-11 items-center justify-center rounded-md bg-black text-brand-yellow">
                <item.icon className="size-5" aria-hidden />
              </span>
              <h3 className="relative text-base font-bold">{item.title}</h3>
              <p className="relative text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
