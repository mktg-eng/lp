import { MessagesSquare, Handshake, Rocket, GitCompareArrows, Building2 } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: MessagesSquare,
    title: 'ヒアリング',
    description: '事業の目標や課題、想定している目標金額をお伺いします。',
  },
  {
    icon: Handshake,
    title: '目標金額を合意',
    description: '「いくらまで下げたいか」をすり合わせ、進め方に合意します。',
  },
  {
    icon: Rocket,
    title: 'MVPを無料で開発',
    description: 'AIを活用し、動くMVPを無料で開発してお渡しします。',
  },
  {
    icon: GitCompareArrows,
    title: '相見積もりを手配',
    description: 'CDCが提携システム会社へ相見積もりを手配します。',
  },
  {
    icon: Building2,
    title: '本開発スタート',
    description: '下がった価格と、より正確な納期で本開発を始められます。',
  },
]

export function FlowSection() {
  return (
    <section id="flow" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="利用の流れ"
        title="ご相談から本開発まで、5つのステップ"
        description="オンライン中心で進めるため、遠隔地の企業でもスムーズにご利用いただけます。"
      />

      <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-card text-primary">
                <step.icon className="size-5" aria-hidden />
              </span>
              <span className="font-mono text-2xl font-semibold text-muted-foreground/50">
                0{index + 1}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
