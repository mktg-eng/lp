import { BadgeCheck, Inbox, GraduationCap } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const benefits = [
  {
    icon: BadgeCheck,
    title: '高品質',
    description:
      '記事ごとに相性のよいAIモデルを選んで執筆し、独自の採点基準に届かない原稿は提出せずに書き直します。仕上げには専門家・編集者の目も通すため、「生成しただけ」の記事は納品しません。',
  },
  {
    icon: Inbox,
    title: '手間いらず',
    description:
      'キーワードの企画から執筆・投稿、公開後の分析と改善提案まで、記事運用の一連をまるごとお任せいただけます。社内のリソース状況にかかわらず、今の体制のまま始められます。',
  },
  {
    icon: GraduationCap,
    title: 'ノウハウが残る',
    description:
      '毎月の定例ミーティングと、制作過程を記録した記事作成シートを通じて、判断基準や改善の考え方を貴社に共有。契約が終わったあとも自走できる状態づくりを目指します。',
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="relative bg-brand-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          kicker="VALUE"
          eyebrow="提供価値"
          title="品質・手離れ・再現性を、まとめて"
          description="AIと人の役割分担を前提に設計したサービスだから、3つの価値を同時に提供できます。"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-xl border border-border/70 bg-background p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <item.icon className="size-5" aria-hidden />
                </span>
                <span className="font-mono text-sm font-bold text-primary/15">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-primary">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
