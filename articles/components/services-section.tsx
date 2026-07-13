import {
  Check,
  Database,
  PenLine,
  Code2,
  Gauge,
  SearchCheck,
} from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const stages = [
  {
    step: '01',
    icon: Database,
    title: '情報取得',
    description:
      '書く前の下ごしらえ。外部の最新情報と、貴社にしかない一次情報を揃えます。',
    items: [
      '外部から最新情報を収集してインプット',
      '商品情報・サイト・資料など貴社独自情報も反映',
    ],
  },
  {
    step: '02',
    icon: PenLine,
    title: '記事執筆',
    description:
      '記事の種類ごとに、最も性能を発揮できるAIモデルを選んで執筆します。',
    items: [
      '記事に応じて最適なAIモデルを内部で選択',
      'AIが読み取りやすい構造化で、AI検索対策にも対応',
    ],
  },
  {
    step: '03',
    icon: Code2,
    title: 'コーディング',
    description:
      'そのままCMSに貼り付けて公開できる形に整えてお渡しします。',
    items: [
      'コピペ投稿できるHTMLタグ付きで納品',
      '見出し・装飾を整え、入稿の手間を削減',
    ],
  },
  {
    step: '04',
    icon: Gauge,
    title: '採点',
    description:
      '貴社ごとに設定した採点基準でチェックし、届かない原稿は出しません。',
    items: [
      '採点基準は会社ごとに設定し、運用しながら更新',
      '基準未満（目安80点未満）の記事は書き直し',
    ],
  },
  {
    step: '05',
    icon: SearchCheck,
    title: 'ファクトチェック',
    description:
      '検索連動型のAIツールで事実関係を照合し、抜け漏れを防ぎます。',
    items: [
      '数値・固有名詞・最新性を検索結果と突き合わせ',
      '疑わしい記述は修正・出典確認のうえで納品',
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="サービス内容"
        title="5段階の制作パイプラインで品質を担保"
        description="1本の記事は、情報取得から採点・ファクトチェックまで5つの工程を通ってから納品されます。"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stages.map((stage) => (
          <div
            key={stage.title}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7"
          >
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <stage.icon className="size-5" aria-hidden />
              </span>
              <div>
                <span className="font-mono text-xs font-bold text-accent">
                  STEP {stage.step}
                </span>
                <h3 className="text-xl font-bold text-primary">{stage.title}</h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {stage.description}
            </p>

            <ul className="flex flex-col gap-3 border-t border-border pt-5">
              {stage.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col justify-center gap-3 rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-7">
          <h3 className="text-base font-bold text-primary">
            使うAIは、固定しません
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            使用するAIツール・モデルは、メディアの特性やご要望、記事の種類に合わせて内部で随時見直しています。特定のツールに縛られず、その時点で最適な組み合わせで制作します。
          </p>
        </div>
      </div>
    </section>
  )
}
