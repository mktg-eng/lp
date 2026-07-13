import { FileSignature, Handshake, MessageSquareText, Palette, PackageCheck } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

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
    <section id="flow" className="relative bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="ご利用の流れ"
            title="契約から納品まで、5つのステップ"
            description="やり取りはすべてオンラインで完結。日々の依頼はチャットだけで進みます。"
          />
        </Reveal>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-brand-ink/10">
          {steps.map((step, index) => (
            <li key={step.title} className="relative lg:px-6 lg:first:pl-0 lg:last:pr-0">
              <Reveal delay={index * 100} className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl leading-none font-bold text-brand-ink/15">
                    0{index + 1}
                  </span>
                  <step.icon className="size-5 text-brand-vermillion" aria-hidden />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-base font-bold text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
