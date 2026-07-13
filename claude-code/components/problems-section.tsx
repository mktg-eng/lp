import { Gauge, SlidersHorizontal, Users, Compass } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

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
    <section
      id="problems"
      className="relative overflow-hidden bg-sky-panel py-20 sm:py-24"
    >
      <div
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
        aria-hidden
      />
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="こんな状態では？"
            title="導入したのに、活かしきれていない"
            description="Claude Code をはじめとするAI開発ツールには、こんなつまずきがよく見られます。"
            align="left"
          />

          <div className="relative hidden h-56 sm:block">
            <span className="absolute inset-0 rounded-full bg-brand-orange/10 blur-3xl" aria-hidden />
            <div className="relative grid h-full grid-cols-2 gap-4">
              {problems.map((item, index) => (
                <span
                  key={item.title}
                  className={cn(
                    'flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-white text-brand-orange shadow-sm',
                    index % 2 === 1 && 'mt-8',
                  )}
                >
                  <item.icon className="size-8" aria-hidden />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {problems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-brand-navy/10 bg-white/80 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-orange shadow-sm">
                <item.icon className="size-5" aria-hidden />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-brand-navy">{item.title}</h3>
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
