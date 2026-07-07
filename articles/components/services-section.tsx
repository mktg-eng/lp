import { Check, Compass, FileText, MousePointerClick, LineChart } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    badge: 'A',
    icon: Compass,
    title: '戦略設計',
    description:
      '商材と競合を踏まえてキーワードを選定し、サイト全体のコンテンツ戦略を描きます。',
    items: [
      '商材・競合を踏まえたキーワード調査',
      '検索意図とAI回答を意識したトピック設計',
      'サイト構造・内部リンクの方針策定',
      '記事ごとの狙いと目標の整理（目安設定）',
      'コンテンツカレンダーの作成',
    ],
  },
  {
    badge: 'B',
    icon: FileText,
    title: '記事制作',
    description:
      'AIの下書き×人の編集で、速さと品質を両立。必要に応じて専門家監修も組み合わせます。',
    items: [
      'AIによる構成案・下書きの高速作成',
      '編集者による事実確認とリライト',
      '必要に応じた専門家監修の手配',
      '図表・画像の挿入と読みやすい装飾',
      'CMSへの入稿・公開作業まで代行',
    ],
  },
  {
    badge: 'C',
    icon: MousePointerClick,
    title: 'CV設計',
    description:
      '読んで終わりにしない。問い合わせ・購入へ進んでもらうための仕掛けをつくります。',
    items: [
      '記事内CTAの設計・配置',
      '比較表・料金表など判断を助けるコンテンツ',
      '診断・チェックリスト型コンテンツの企画',
      '問い合わせフォームまでの導線整理',
      'CVポイントの計測設計',
    ],
  },
  {
    badge: 'D',
    icon: LineChart,
    title: '運用伴走',
    description:
      '公開後のデータをもとに、リライトと追加提案を継続。育つメディアに変えていきます。',
    items: [
      '月次レポートと定例のふりかえり',
      '順位・流入データに基づくリライト',
      '内部リンク・回遊の継続改善',
      '新規トピックの追加提案',
      'AI検索での見え方のモニタリング',
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="サービス内容"
        title="4つの柱で、記事づくりを丸ごと代行"
        description="戦略から制作、CV設計、公開後の運用まで。必要な範囲だけの組み合わせもご相談いただけます。"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-7 sm:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-lg font-semibold text-primary-foreground">
                {service.badge}
              </span>
              <div>
                <div className="flex items-center gap-2 text-accent">
                  <service.icon className="size-4" aria-hidden />
                  <span className="font-mono text-xs">SERVICE {service.badge}</span>
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            <ul className="flex flex-col gap-3 border-t border-border pt-6">
              {service.items.map((item) => (
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
      </div>
    </section>
  )
}
