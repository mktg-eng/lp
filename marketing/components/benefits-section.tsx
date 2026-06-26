import { Lightbulb, LayoutTemplate, Send, Layers } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: Lightbulb,
    title: '当たる訴求を設計',
    label: 'コピーできるアイディア',
    description:
      'ターゲットと刺さりそうな切り口を整理し、再現・量産できる「型」として訴求を設計します。',
  },
  {
    icon: LayoutTemplate,
    title: 'AIでLPを量産',
    label: 'v0 → Vercel',
    description:
      'AIでLP・オファーを高速に生成し、そのまま公開。複数パターンを短期間で立ち上げます。',
  },
  {
    icon: Send,
    title: 'フォーム営業で検証・実行',
    label: 'フォーム営業',
    description:
      '問い合わせフォーム経由でターゲット企業へアプローチし、どの型が反応するかを実データで検証します。',
  },
  {
    icon: Layers,
    title: '当たった型を横展開',
    label: 'コピー＆スケール',
    description:
      '反応の良かった訴求・LPを他のターゲットや事業へ展開し、当たりを面で増やしていきます。',
  },
]

export function BenefitsSection() {
  return (
    <section id="solution" className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="解決＝コピーできる集客"
          title="“当たり”を、型にして量産する"
          description="一度きりの当たりで終わらせず、再現できる仕組みに変える。4つのステップで新規リードを回します。"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {steps.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-xl border border-border bg-background/60 p-6 sm:p-7"
            >
              <div className="flex shrink-0 flex-col items-center gap-2">
                <span className="flex size-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <item.icon className="size-5.5" aria-hidden />
                </span>
                <span className="font-mono text-xs text-muted-foreground/50">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="rounded-full border border-border bg-card/60 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                    {item.label}
                  </span>
                </div>
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
