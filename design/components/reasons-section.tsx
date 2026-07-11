import { Sparkles, Lightbulb, HeartHandshake } from 'lucide-react'

import { Reveal } from '@/components/reveal'

const reasons = [
  {
    label: 'AI × Pro',
    icon: Sparkles,
    title: 'AI×プロの制作体制',
    description:
      'AIで制作プロセスを効率化し、仕上げはプロのデザイナーが担当。スピードと品質の両立を目指した体制で、定額でも量に対応できます。',
  },
  {
    label: '+α Proposal',
    icon: Lightbulb,
    title: '言われた通り、で終わらせない',
    description:
      'ご依頼の背景や目的をふまえて、代案やサイズ展開など「＋α」のご提案を心がけます。丸投げに近い依頼でも形にします。',
  },
  {
    label: 'No Hesitation',
    icon: HeartHandshake,
    title: '定額だから、気軽に相談できる',
    description:
      '追加費用を気にせず相談できるのが定額制の良さ。「これも頼めますか？」から始まる小さな相談を歓迎します。',
  },
]

export function ReasonsSection() {
  return (
    <section className="relative bg-brand-paper py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.2] mix-blend-multiply" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Reveal className="flex flex-col items-start gap-5 lg:sticky lg:top-24 lg:self-start">
            <span className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
              <span className="h-px w-6 bg-brand-vermillion" aria-hidden />
              Difference
            </span>
            <p className="font-display text-3xl leading-snug font-bold text-brand-ink">
              他の定額サービスと
              <br />
              <span className="text-brand-vermillion italic">ここが違う!!</span>
            </p>
          </Reveal>

          <div className="flex flex-col divide-y divide-brand-ink/10 border-t border-brand-ink/10">
            {reasons.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 120}
                className="flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:gap-8"
              >
                <span className="font-display text-5xl leading-none font-bold text-brand-ink/[0.08] sm:w-20 sm:shrink-0 sm:text-6xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <item.icon className="size-4 text-brand-vermillion" aria-hidden />
                    <h3 className="font-display text-lg font-bold text-brand-ink sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <span className="hidden shrink-0 font-mono text-[11px] tracking-widest text-muted-foreground/50 sm:block">
                  {item.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
