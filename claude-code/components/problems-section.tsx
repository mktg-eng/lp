import { Gauge, SlidersHorizontal, Users, Compass } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const problems = [
  {
    icon: Gauge,
    title: '効果が実感できない',
    description:
      'ツールは入れたものの、開発スピードや品質の変化を感じられず、活用が止まってしまっている。',
  },
  {
    icon: SlidersHorizontal,
    title: '設定が難しい',
    description:
      'MCP連携・権限管理・サブエージェントの設計など、最適な構成をどう組めばよいか分からない。',
  },
  {
    icon: Users,
    title: '属人化している',
    description:
      '一部のメンバーだけが使いこなし、チーム全体のナレッジや運用ルールとして広がっていない。',
  },
  {
    icon: Compass,
    title: '何から始めるか不明',
    description:
      '導入の進め方や対象業務の選び方が分からず、最初の一歩を踏み出せないままになっている。',
  },
]

export function ProblemsSection() {
  return (
    <section id="problems" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="こんな状態では？"
        title="導入したのに、活かしきれていない"
        description="Claude Code をはじめとするAI開発ツールには、こんなつまずきがよく見られます。"
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-accent/40"
          >
            <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-secondary/60 text-accent">
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
