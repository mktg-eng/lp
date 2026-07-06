import { Sparkles, Lightbulb, HeartHandshake } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    icon: Sparkles,
    title: 'AI×プロの制作体制',
    description:
      'AIで制作プロセスを効率化し、仕上げはプロのデザイナーが担当。スピードと品質の両立を目指した体制で、定額でも量に対応できます。',
  },
  {
    icon: Lightbulb,
    title: '言われた通り、で終わらせない',
    description:
      'ご依頼の背景や目的をふまえて、代案やサイズ展開など「＋α」のご提案を心がけます。丸投げに近い依頼でも形にします。',
  },
  {
    icon: HeartHandshake,
    title: '定額だから、気軽に相談できる',
    description:
      '追加費用を気にせず相談できるのが定額制の良さ。「これも頼めますか？」から始まる小さな相談を歓迎します。',
  },
]

export function ReasonsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="選ばれる理由"
        title="“作って終わり”にしない、定額のデザインパートナー"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reasons.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-7"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
