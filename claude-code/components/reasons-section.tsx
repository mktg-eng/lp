import { Wrench, Workflow, HeartHandshake } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    icon: Wrench,
    title: '設定まで踏み込む実務支援',
    description:
      'ツールの紹介で終わらせず、MCP連携や権限、サブエージェントの実装といった現場の設定作業まで対応します。',
  },
  {
    icon: Workflow,
    title: '業務に合わせた設計',
    description:
      '画一的なテンプレートではなく、チームの開発フローやコードベースを踏まえた構成をご提案します。',
  },
  {
    icon: HeartHandshake,
    title: '導入後の伴走',
    description:
      '設定して終わりではなく、運用しながらの調整やご相談に継続的に対応し、定着を後押しします。',
  },
]

export function ReasonsSection() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 sm:py-24">
      <SectionHeading
        kicker="WHY US"
        eyebrow="選ばれる理由"
        title="“入れる”その先まで、伴走します"
      />

      <div className="mt-14 flex flex-col divide-y divide-border">
        {reasons.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:gap-8"
          >
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-orange font-mono text-xl font-black text-brand-orange-foreground">
              {index + 1}
            </span>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <item.icon className="size-5 text-brand-orange" aria-hidden />
                <h3 className="text-lg font-bold sm:text-xl">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
