import { Check, Boxes, Bot } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    badge: 'A',
    icon: Boxes,
    title: '導入支援',
    description: '環境構築から初期設定、チームへの定着までをサポートします。',
    items: [
      '開発環境・アカウントのセットアップ',
      'MCP連携と外部ツールの接続設定',
      '権限・アクセス範囲の設計と整理',
      'プロジェクトに合わせた初期構成の提案',
      '社内向け運用ルールの整備支援',
    ],
  },
  {
    badge: 'B',
    icon: Bot,
    title: 'サブエージェント設定',
    description: '業務に合わせたサブエージェントを設計・実装します。',
    items: [
      'レビュー・テスト・ドキュメント等の役割設計',
      'プロジェクト構造に合わせたエージェント実装',
      'ワークフローやコマンドのカスタマイズ',
      '既存コードベースへの最適化',
      '運用しながらの調整・チューニング',
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="border-y border-border bg-muted/60">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="サービス内容"
          title="導入支援とエージェント設定を、一気通貫で"
          description="「入れる」だけでなく「使い続けられる」状態まで。2つの軸でご支援します。"
        />

        <div className="mt-14 flex flex-col">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col gap-6 border-t border-border py-10 first:border-t-0 sm:flex-row sm:gap-10"
            >
              <div className="flex shrink-0 items-start gap-4 sm:w-56">
                <span className="font-mono text-4xl font-black leading-none text-brand-navy/15 sm:text-5xl">
                  0{index + 1}
                </span>
                <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-brand-navy-foreground">
                  <service.icon className="size-4.5" aria-hidden />
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-orange" aria-hidden />
                      <span className="leading-relaxed text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
