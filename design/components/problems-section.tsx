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
    <section id="problems" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="こんなお悩みは？"
        title="デザインを“外に頼む”のは、意外と大変"
        description="デザインの外注や内製化には、こんなつまずきがよく見られます。"
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
          >
            <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-secondary text-accent">
              <item.icon className="size-5" aria-hidden />
            </span>
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
