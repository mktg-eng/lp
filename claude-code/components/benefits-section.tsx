import { Rocket, ShieldCheck, GitBranch, BookOpenCheck } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const benefits = [
  {
    icon: Rocket,
    title: '開発スピードの向上',
    description:
      '定型的なコーディングやレビュー、テスト作成をエージェントに任せ、チームはより本質的な設計や意思決定に集中しやすくなります。',
  },
  {
    icon: ShieldCheck,
    title: '安全な運用設計',
    description:
      '権限やアクセス範囲を整理し、社内のセキュリティ方針に沿った形でAIエージェントを運用できる状態を目指します。',
  },
  {
    icon: GitBranch,
    title: 'チームでの標準化',
    description:
      'サブエージェントやワークフローを共通化し、特定の人に依存しない再現性のある開発体制づくりを支援します。',
  },
  {
    icon: BookOpenCheck,
    title: 'ナレッジの蓄積',
    description:
      '設定内容や運用ルールをドキュメント化。導入後もチーム内で改善を続けられる土台を整えます。',
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="導入後の世界"
          title="AIエージェントが、チームの一員になる"
          description="設定と運用が整うことで、開発チームの動き方は少しずつ変わっていきます。"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-7 text-center"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-navy/5 text-brand-orange">
                <item.icon className="size-6" aria-hidden />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
