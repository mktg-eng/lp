import { Gift, MonitorSmartphone, Target } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    icon: Gift,
    title: '費用は完全無料',
    description:
      '中高生が競技プログラミングに出会うハードルを下げたいという思いから、登録・利用ともに無料で提供しています。',
  },
  {
    icon: MonitorSmartphone,
    title: 'ブラウザだけで完結',
    description:
      '環境構築は不要。ブラウザ上でPythonのコードを書いて、その場で実行できるので、パソコンが苦手でもすぐに始められます。',
  },
  {
    icon: Target,
    title: '本戦を見据えたロードマップ',
    description:
      'Python文法の基礎から競プロ入門・基礎・上級、実戦道場まで。情報オリンピック本戦やAtCoder上位を見据えて段階的に設計されています。',
  },
]

export function ReasonsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading eyebrow="選ばれる理由" title="無料でも、本気で実力をつけられる" />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reasons.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-7"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-accent">
                <item.icon className="size-5.5" aria-hidden />
              </span>
              <span className="font-mono text-sm text-accent/70">
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
