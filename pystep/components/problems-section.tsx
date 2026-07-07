import { HelpCircle, WalletCards, TrendingDown, MapPinOff } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const problems = [
  {
    icon: HelpCircle,
    title: '何から始めればいいかわからない',
    description:
      '競技プログラミングに興味はあるものの、教材が難しかったり情報が散らばっていて、最初の一歩が踏み出せない。',
  },
  {
    icon: TrendingDown,
    title: '独学だと続かない',
    description:
      '本やサイトで勉強しても、今どこまで進んだか見えず、モチベーションが続かずに止まってしまう。',
  },
  {
    icon: WalletCards,
    title: '教室に通うには費用が気になる',
    description:
      'プログラミング教室は月謝が高額なことが多く、本格的に始める前に気軽に試せる選択肢が少ない。',
  },
  {
    icon: MapPinOff,
    title: '近くに教室・環境がない',
    description:
      '地方在住や時間が取りづらい家庭では、通学型の教室そのものが選択肢に入らないことも多い。',
  },
]

export function ProblemsSection() {
  return (
    <section id="problems" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="こんなお悩みありませんか？"
        title="競プロを始めたいのに、一歩が踏み出せない"
        description="情報オリンピックやAtCoderに興味を持つ中高生・保護者の方から、よくこんな声を聞きます。"
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
