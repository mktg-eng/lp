import { ArrowRight, ArrowDown } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    label: '目標（当初見積もり）',
    value: '¥2,000,000',
    note: '本来かかる見込み（目安）',
    tone: 'muted' as const,
  },
  {
    label: '相見積もり後',
    value: '¥1,500,000',
    note: '50万円ダウン（目安）',
    tone: 'foreground' as const,
  },
  {
    label: '成果報酬（差額の30%）',
    value: '¥150,000',
    note: 'お客様のお支払い',
    tone: 'primary' as const,
  },
  {
    label: '実質お得',
    value: '¥350,000',
    note: '差額50万円 − 報酬15万円',
    tone: 'accent' as const,
  },
]

const valueToneClass: Record<string, string> = {
  muted: 'text-muted-foreground line-through decoration-destructive/50 decoration-2',
  foreground: 'text-foreground',
  primary: 'text-foreground',
  accent: 'text-accent',
}

export function FeeExampleSection() {
  return (
    <section
      id="pricing"
      className="relative border-t border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:pt-24 sm:pb-16">
        <SectionHeading
          eyebrow="料金（成果報酬）"
          title="お支払いは「下がった分の30%」だけ"
          description="先払いの開発費はありません。本開発費が下がったときに、その差額の一部だけをいただく成果報酬型です。"
        />

        <div className="mt-12 rounded-2xl border border-border bg-background/60 p-6 sm:p-8">
          <p className="mb-6 text-center font-mono text-xs text-accent">
            計算例（目安）
          </p>

          <div className="grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
            {steps.map((step, index) => (
              <div key={step.label} className="contents">
                <div
                  className={
                    'flex flex-col gap-1 rounded-xl border p-5 ' +
                    (step.tone === 'accent'
                      ? 'border-accent/50 bg-accent/5'
                      : 'border-border bg-card/60')
                  }
                >
                  <p className="text-xs text-muted-foreground">{step.label}</p>
                  <p
                    className={
                      'font-mono text-2xl font-semibold tracking-tight ' +
                      valueToneClass[step.tone]
                    }
                  >
                    {step.value}
                  </p>
                  <p className="text-[11px] text-muted-foreground/70">{step.note}</p>
                </div>

                {index < steps.length - 1 ? (
                  <div className="flex items-center justify-center text-accent">
                    <ArrowRight className="hidden size-5 lg:block" aria-hidden />
                    <ArrowDown className="size-5 lg:hidden" aria-hidden />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            ※ 金額はすべて目安・計算例です。実際の金額・削減幅は案件により異なります。
          </p>
        </div>
      </div>
    </section>
  )
}
