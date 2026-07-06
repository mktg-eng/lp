import { FileQuestion, Wallet, Scale, AlertTriangle } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const problems = [
  {
    icon: FileQuestion,
    title: '要件が固まらない',
    description:
      'やりたいことはあるが要件が曖昧なまま見積もりを依頼してしまい、認識のズレや手戻りが起きやすい。',
  },
  {
    icon: Wallet,
    title: '費用が読めない',
    description:
      '「100万〜200万円ほど」「やってみないと分からない」と言われ、予算が立てられず踏み出せない。（金額は一般的な目安）',
  },
  {
    icon: Scale,
    title: '言い値で比較できない',
    description:
      '見積もりの根拠が不透明で、提示された金額が妥当なのかを比べる軸がない。',
  },
  {
    icon: AlertTriangle,
    title: '失敗するのが怖い',
    description:
      '動くものを見ないまま高額を支払い、想定と違うものが出てくるのではと不安が残る。',
  },
]

export function ProblemsSection() {
  return (
    <section id="problems" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="こんな課題はありませんか？"
        title="システム開発の「最初の一歩」でつまずく"
        description="新規事業や業務システムの立ち上げでは、発注の前段階でこんな悩みがよく起こります。"
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
          >
            <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-secondary text-accent">
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
