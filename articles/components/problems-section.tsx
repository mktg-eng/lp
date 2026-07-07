import { PenLine, Wallet, Bot, MousePointerClick } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const problems = [
  {
    icon: PenLine,
    title: '内製が続かない',
    description:
      '担当者が兼務で、記事づくりはいつも後回し。更新が数ヶ月止まったまま、というケースは珍しくありません。',
  },
  {
    icon: Wallet,
    title: '外注は高くて遅い',
    description:
      'ライター外注は1本ごとの費用がかさみ、納品までの時間も読みにくい。本数を増やしたくても増やせない。',
  },
  {
    icon: Bot,
    title: 'AI任せは品質が不安',
    description:
      '生成AIの記事をそのまま公開するのは、事実誤りや内容の薄さが心配。結局チェックの手間が残ってしまう。',
  },
  {
    icon: MousePointerClick,
    title: '書いてもCVにつながらない',
    description:
      'アクセスは多少あるのに、問い合わせや購入に結びつかない。記事から先の導線が設計されていない。',
  },
]

export function ProblemsSection() {
  return (
    <section id="problems" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="こんなお悩みは？"
        title="記事づくり、こんな壁に当たっていませんか"
        description="オウンドメディアやコラムの運用では、こうしたつまずきがよく見られます。"
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
