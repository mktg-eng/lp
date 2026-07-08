import { TrendingDown, Code, BatteryLow, Compass } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const problems = [
  {
    icon: TrendingDown,
    title: '無料の教材だけでは本戦レベルに届かない',
    description:
      '入門レベルの学習は無料アプリや独学でも進められますが、情報オリンピック本戦を狙うレベルになると、体系立てられたカリキュラムと伴走が必要になります。',
  },
  {
    icon: Code,
    title: '独学でのC++移行につまずく',
    description:
      'Pythonで競プロに慣れてきても、本戦レベルで求められるC++への移行は独学だと挫折しやすいポイントです。',
  },
  {
    icon: BatteryLow,
    title: '一人で黙々と勉強するモチベーションが続かない',
    description:
      '長期間の学習になるため、一人きりで取り組んでいると目標を見失いがちです。仲間や講師とのやり取りが継続の支えになります。',
  },
  {
    icon: Compass,
    title: '何をどの順番で学べば本戦に届くのか分からない',
    description:
      'アルゴリズムや実装技術は幅広く、独学だと今の自分に必要なことが分かりにくいまま遠回りしてしまいがちです。',
  },
]

export function ProblemsSection() {
  return (
    <section id="problems" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="こんなお悩みありませんか？"
        title="本気で情報オリンピックを目指すほど、壁にぶつかる"
        description="情報オリンピック本戦やJOI出場を目指す生徒・保護者の方から、よくこんな声を聞きます。"
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
          >
            <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
              <item.icon className="size-5" aria-hidden />
            </span>
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
