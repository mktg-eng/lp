import { Coins, UserMinus, HelpCircle, Repeat2 } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const problems = [
  {
    icon: Coins,
    title: '広告費が高い',
    description:
      'リスティングやSNS広告の単価は上がり続け、費用をかけても見合うリードが取れているか分からない。',
  },
  {
    icon: UserMinus,
    title: '営業の手が足りない',
    description:
      '新規開拓に割ける人員が限られ、リスト作成からアプローチまで手が回らず後回しになっている。',
  },
  {
    icon: HelpCircle,
    title: '何が刺さるか分からない',
    description:
      'どの訴求・どのターゲットが反応するのか手探りで、施策の良し悪しを数字で判断できていない。',
  },
  {
    icon: Repeat2,
    title: '施策が再現できない',
    description:
      'たまに当たっても担当者の勘や経験に依存し、成功した型をチームで再現・量産できていない。',
  },
]

export function ProblemsSection() {
  return (
    <section id="problems" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="こんな課題はありませんか？"
        title="新規リードが、思うように増えない"
        description="営業・広告のリソースが限られるBtoB企業では、新規開拓にこんなつまずきがよく見られます。"
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
