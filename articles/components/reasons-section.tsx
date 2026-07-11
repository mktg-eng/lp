import { UserCheck, Radar, TrendingUp } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    icon: UserCheck,
    tag: 'QUALITY CHECK',
    title: 'AI任せにしない制作体制',
    description:
      'AIが書いたら終わり、にはしません。貴社ごとの採点基準に届かない原稿は書き直し、ファクトチェックと人の確認を通過した記事だけをお届けします。',
  },
  {
    icon: Radar,
    tag: 'SEO + AIO',
    title: '検索とAI、両にらみの設計',
    description:
      '従来のSEOに加えて、AI検索に引用されやすい構造（結論先出し・要約・Q&A）を標準の記事設計に組み込んでいます。',
  },
  {
    icon: TrendingUp,
    tag: 'CV DRIVEN',
    title: '成果から逆算する伴走',
    description:
      '本数を納めて終わりにせず、問い合わせや購入への貢献を月次で確認しながら、書く内容そのものを見直し続けます。',
  },
]

export function ReasonsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        kicker="REASONS"
        eyebrow="選ばれる理由"
        title="“書いて納める”の、その先まで"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reasons.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand-teal font-mono text-xl font-black text-brand-teal-foreground">
                0{index + 1}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/5 px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider text-accent">
                <item.icon className="size-3" aria-hidden />
                {item.tag}
              </span>
            </div>
            <h3 className="text-lg font-bold text-primary">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
