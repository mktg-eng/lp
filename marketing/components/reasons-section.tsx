import { Zap, LineChart, Workflow } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    icon: Zap,
    title: '低コストで量産できる',
    description:
      'AI×テンプレートでLP・オファーを高速に生成。広告や制作に大きく投資する前に、複数の型を低コストで試せます。',
  },
  {
    icon: LineChart,
    title: '“当たり”を数字で見極める',
    description:
      '感覚ではなく、配信と反応のデータで判断。どの訴求・ターゲットが効くのかを可視化し、勝ち筋に集中します。',
  },
  {
    icon: Workflow,
    title: '実行まで代行する',
    description:
      '設計や提案で終わらせず、LP量産からフォーム営業の配信・運用までを代行。手が足りないチームでも回せます。',
  },
]

export function ReasonsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        kicker="Why Us"
        eyebrow="選ばれる理由"
        title="量産・分析・実行を、まとめて任せられる"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reasons.map((item, index) => (
          <div
            key={item.title}
            className="relative flex flex-col gap-5 overflow-hidden rounded-xl border border-border bg-card p-7"
          >
            <span
              className="pointer-events-none absolute -top-4 -right-2 font-mono text-6xl font-black text-primary/[0.08] italic select-none"
              aria-hidden
            >
              0{index + 1}
            </span>
            <span className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-primary">
              <item.icon className="size-5.5" aria-hidden />
            </span>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
