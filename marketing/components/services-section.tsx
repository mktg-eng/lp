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
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="サービス内容"
        title="導入支援とエージェント設定を、一気通貫で"
        description="「入れる」だけでなく「使い続けられる」状態まで。2つの軸でご支援します。"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-6 rounded-2xl border border-border bg-card/60 p-7 sm:p-8"
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
