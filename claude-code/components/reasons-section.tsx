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
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="選ばれる理由"
        title="“入れる”その先まで、伴走します"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reasons.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col gap-5 rounded-xl border border-border bg-card/60 p-7"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
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
