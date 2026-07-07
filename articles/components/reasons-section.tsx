import { UserCheck, Radar, TrendingUp } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    icon: UserCheck,
    title: 'AI任せにしない制作体制',
    description:
      'AIが担うのは下書きまで。公開前に必ず人の編集者が事実関係と読みやすさを確認し、機械的な文章は貴社のトーンに合わせてつくり直します。',
  },
  {
    icon: Radar,
    title: '検索とAI、両にらみの設計',
    description:
      '従来のSEOに加えて、AI検索に引用されやすい構造（結論先出し・要約・Q&A）を標準の記事設計に組み込んでいます。',
  },
  {
    icon: TrendingUp,
    title: '成果から逆算する伴走',
    description:
      '本数を納めて終わりにせず、問い合わせや購入への貢献を月次で確認しながら、書く内容そのものを見直し続けます。',
  },
]

export function ReasonsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="選ばれる理由"
        title="“書いて納める”の、その先まで"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reasons.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-7"
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
