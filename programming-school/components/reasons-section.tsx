import { ListChecks, GitBranch, HeartHandshake } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    icon: ListChecks,
    title: '明確なレベル分けと到達目標',
    description:
      '各コースにAtCoderレーティングやPAST合格級など、具体的な到達目標を設定。今どこにいて、次に何をすべきかが常に明確です。',
  },
  {
    icon: GitBranch,
    title: 'Python基礎からC++実装まで一気通貫',
    description:
      '入門から本戦レベルまで、教材も指導方針もバラバラにならない、一貫した設計のカリキュラムで進められます。',
  },
  {
    icon: HeartHandshake,
    title: '一人で抱え込ませない伴走型',
    description:
      '生徒間での教え合いやアルゴリズムプレゼンテーションなど、長期間の学習を一人で抱え込ませない学び方を大切にしています。',
  },
]

export function ReasonsSection() {
  return (
    <section id="reason" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading eyebrow="選ばれる理由" title="長期戦を、最後まで走り切れる設計に" />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reasons.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-7"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-white">
                <item.icon className="size-5.5" aria-hidden />
              </span>
              <span className="font-mono text-sm text-primary/50">
                0{index + 1}
              </span>
            </div>
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
