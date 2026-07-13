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
        kicker="Problems"
        eyebrow="こんな課題はありませんか？"
        title="新規リードが、思うように増えない"
        description="営業・広告のリソースが限られるBtoB企業では、新規開拓にこんなつまずきがよく見られます。"
      />

      <div className="mt-12 flex flex-col rounded-xl border border-border bg-card">
        {problems.map((item, index) => (
          <div
            key={item.title}
            className="group relative flex gap-5 border-b border-border px-5 py-6 last:border-b-0 sm:gap-6 sm:px-7"
          >
            <div className="flex flex-col items-center">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                <item.icon className="size-5" aria-hidden />
              </span>
              {index < problems.length - 1 ? (
                <span
                  className="mt-2 w-px flex-1 bg-border"
                  aria-hidden
                />
              ) : null}
            </div>
            <div className="flex flex-1 flex-col gap-1.5 pb-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground/60 uppercase">
                  Issue 0{index + 1}
                </span>
                <h3 className="text-base font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:max-w-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
