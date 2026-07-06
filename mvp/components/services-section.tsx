import { Check, ShieldCheck, TrendingDown, Eye } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const pillars = [
  {
    badge: '01',
    icon: ShieldCheck,
    title: 'ノーリスク',
    description:
      'まず動くMVPを無料でお渡し。本開発費が下がらなければ、成果報酬もいただきません。',
    items: [
      'MVPの開発費は0円',
      '価格が下がらなければ報酬も0円',
      'まず動くものを見てから判断できる',
    ],
  },
  {
    badge: '02',
    icon: TrendingDown,
    title: 'コストが下がる',
    description:
      '動くMVPを材料に提携システム会社へ相見積もり。価格差（アービトラージ）から本開発費の圧縮を目指します。',
    items: [
      '相見積もりで競争原理がはたらく',
      '要件が固まり手戻りが減る',
      '削減は20〜30%が目安（想定）',
    ],
  },
  {
    badge: '03',
    icon: Eye,
    title: '不透明さの解消',
    description:
      '「言い値」ではなく、動くMVPと根拠のある見積もりで判断。納期の見通しも具体化します。',
    items: [
      '動くMVPで完成イメージを共有',
      '根拠のある見積もりで比較',
      '納期の目安も明確になる',
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="value" className="relative border-y border-border bg-muted/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="提供価値"
          title="3つの価値で、発注の不安をほどく"
          description="「先に試して、安く・正確に」を支える、サービスの3本柱です。"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-7 sm:p-8"
            >
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-base font-semibold text-primary-foreground">
                  {pillar.badge}
                </span>
                <div>
                  <div className="flex items-center gap-2 text-accent">
                    <pillar.icon className="size-4" aria-hidden />
                    <span className="font-mono text-xs">VALUE {pillar.badge}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>

              <ul className="flex flex-col gap-3 border-t border-border pt-6">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          ※ 削減率（20〜30%）はあくまで想定です。成果を保証するものではありません。
        </p>
      </div>
    </section>
  )
}
