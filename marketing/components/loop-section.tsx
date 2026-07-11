import { Fragment } from 'react'
import {
  Lightbulb,
  LayoutTemplate,
  Send,
  BarChart3,
  ArrowRight,
  ArrowDown,
  RefreshCw,
} from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: Lightbulb,
    title: 'アイデア設計',
    description: '当たりそうな訴求・ターゲットを「型」として設計する。',
  },
  {
    icon: LayoutTemplate,
    title: 'LP量産',
    description: 'AIでLP・オファーを高速生成し、複数パターンを公開する。',
  },
  {
    icon: Send,
    title: 'フォーム営業配信',
    description: '問い合わせフォーム経由でターゲットにアプローチを実行・配信する。',
  },
  {
    icon: BarChart3,
    title: '分析＆横展開',
    description: '反応を数値で見極め、当たった型を次のループへ展開する。',
  },
]

export function LoopSection() {
  return (
    <section id="flow" className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        kicker="Fast Loop"
        eyebrow="仕組み"
        title="止めずに回す、高速ループ"
        description="設計 → 量産 → 配信 → 分析を素早く一周させ、得られた学びを次の設計へ。回すほど“当たり”が積み上がります。"
      />

      <div className="mt-14 flex flex-col items-stretch gap-3 lg:flex-row lg:items-stretch">
        {steps.map((step, index) => (
          <Fragment key={step.title}>
            <div className="group relative flex flex-1 flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-primary">
                  <step.icon className="size-5.5" aria-hidden />
                </span>
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-primary/40 font-mono text-xs font-bold text-primary tabular-nums">
                  {index + 1}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>

            {index < steps.length - 1 ? (
              <div
                className="flex items-center justify-center text-primary/50"
                aria-hidden
              >
                <ArrowDown className="size-5 lg:hidden" />
                <ArrowRight className="hidden size-5 lg:block" />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>

      {/* ステップ4→1へ折り返す高速ループを示す曲線矢印（lg以上のみ） */}
      <svg
        className="mt-2 hidden w-full text-primary/35 lg:block"
        height="36"
        viewBox="0 0 1000 36"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M 960 4 C 960 32, 40 32, 40 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="7 7"
          markerEnd="url(#loop-arrow-head)"
        />
        <defs>
          <marker
            id="loop-arrow-head"
            markerWidth="8"
            markerHeight="8"
            refX="4"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 z" fill="currentColor" />
          </marker>
        </defs>
      </svg>

      <div className="mt-6 flex flex-col items-center gap-6">
        <div className="relative flex size-24 items-center justify-center sm:size-28">
          <div
            className="absolute inset-0 animate-spin rounded-full border-2 border-dashed border-primary/40 [animation-duration:7s]"
            aria-hidden
          />
          <div className="absolute inset-3 rounded-full border border-primary/15" aria-hidden />
          <span className="flex size-14 items-center justify-center rounded-full bg-brand-gradient text-brand-lime-foreground">
            <RefreshCw className="size-6" aria-hidden />
          </span>
        </div>

        <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-brand-soft px-4 py-2 text-sm text-foreground">
          分析で得た学びは、次のアイデア設計へ。止めずに回し続けます。
        </span>
      </div>
    </section>
  )
}
