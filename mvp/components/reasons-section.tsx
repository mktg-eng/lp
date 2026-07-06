import { Zap, Layers, Scale } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    icon: Zap,
    title: 'AIでMVPを無料生成',
    description:
      '本来は100〜200万円相当（一般的な目安）になりがちなPOC（試作）を、AI活用で無料のMVPとしてご用意します。',
  },
  {
    icon: Layers,
    title: '動くもので要件が固まる',
    description:
      '「動くMVP」を起点に要件が具体化。認識のズレや手戻りが減り、結果として本開発のコストと納期にも効いてきます。',
  },
  {
    icon: Scale,
    title: '相見積もりで競争原理',
    description:
      '複数社の相見積もりにより競争原理がはたらき、言い値ではない適正な価格を引き出しやすくなります。',
  },
]

export function ReasonsSection() {
  return (
    <section id="reasons" className="mx-auto max-w-6xl px-5 pt-20 pb-12 sm:pt-24 sm:pb-16">
      <SectionHeading
        eyebrow="なぜ安く・早くなるのか"
        title="価格が下がる理由は、3つあります"
        description="「無料で作れる」「要件が固まる」「競争がはたらく」——この3つが重なって、本開発のコストと納期に効きます。"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reasons.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-7"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <item.icon className="size-5.5" aria-hidden />
              </span>
              <span className="font-mono text-sm text-muted-foreground/50">
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
