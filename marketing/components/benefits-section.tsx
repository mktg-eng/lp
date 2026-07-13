import type { CSSProperties } from 'react'
import { Lightbulb, LayoutTemplate, Send, Layers } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { SERVICE_NAME } from '@/lib/site'

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

// ステップが進むほど積み上がっていく様子を表す、装飾用の相対的な高さ（実数値ではない）
const climb = [18, 42, 68, 96]

export function BenefitsSection() {
  return (
    <section id="solution" className="relative py-6">
      <div
        className="absolute inset-0 -z-10 bg-brand-charcoal [clip-path:polygon(0_0,100%_32px,100%_calc(100%-32px),0_100%)]"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionHeading
          kicker="Solution"
          eyebrow={`解決＝${SERVICE_NAME}`}
          title="“当たり”を、型にして量産する"
          description="一度きりの当たりで終わらせず、再現できる仕組みに変える。4つのステップで新規リードを回します。"
        />

        {/* ステップが進むほど右肩上がりに積み上がっていく折れ線グラフの節目として各ステップを配置する */}
        <div className="relative mt-16">
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-40 w-full text-primary/30 md:block"
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <polyline
              points={climb
                .map(
                  (h, i) =>
                    `${(i / (climb.length - 1)) * 400},${100 - h}`,
                )
                .join(' ')}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 6"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="grid gap-5 md:grid-cols-4 md:gap-4">
            {steps.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 md:mt-[var(--climb-offset)] md:justify-end"
                style={
                  {
                    '--climb-offset': `${(100 - climb[index]) * 0.5}px`,
                  } as CSSProperties
                }
              >
                <span className="relative z-10 flex size-12 items-center justify-center rounded-full border-2 border-primary/50 bg-background text-primary shadow-sm">
                  <item.icon className="size-5.5" aria-hidden />
                </span>
                <div className="flex flex-col gap-2 rounded-xl border border-border bg-background p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground/50 tabular-nums">
                      0{index + 1}
                    </span>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                  </div>
                  <span className="w-fit rounded-full border border-border bg-card px-2.5 py-0.5 font-mono text-[11px] text-primary">
                    {item.label}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
