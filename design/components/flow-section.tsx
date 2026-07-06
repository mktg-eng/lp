import { FileSignature, Handshake, MessageSquareText, Palette, PackageCheck } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: FileSignature,
    title: 'ご契約',
    description: 'プランを選んでお申し込み。契約は月単位で、いつでも解約できます。',
  },
  {
    icon: Handshake,
    title: 'キックオフ',
    description: '専用チャットを開設。ブランドのトーンや素材、依頼の進め方をすり合わせます。',
  },
  {
    icon: MessageSquareText,
    title: 'チャットで依頼',
    description: '依頼内容をチャットに送るだけ。迷わず書ける依頼フォーマットもご用意します。',
  },
  {
    icon: Palette,
    title: '初稿のご提出',
    description: '着手から目安◯営業日で初稿をご提出します。内容により前後します。',
  },
  {
    icon: PackageCheck,
    title: '修正・納品',
    description: 'フィードバックを反映して仕上げ、データを納品。完了次第、次の依頼に着手します。',
  },
]

export function FlowSection() {
  return (
    <section
      id="flow"
      className="relative border-y border-border bg-muted/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="ご利用の流れ"
          title="契約から納品まで、5つのステップ"
          description="やり取りはすべてオンラインで完結。日々の依頼はチャットだけで進みます。"
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary">
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
      </div>
    </section>
  )
}
