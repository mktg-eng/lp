import Link from 'next/link'
import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { APP_URL } from '@/lib/site'

const features = [
  'Python文法・競プロ入門・基礎編・上級編の全コース',
  'ブラウザ上でのコード実行（環境構築不要）',
  '実戦形式の「PyStep道場」',
  'タイピング練習（日本語入力・Pythonタイピング）',
  '進捗・クリア状況の記録',
  'アカウント登録・利用ともに無料',
]

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="料金"
        title="料金プランはシンプルに、ずっと無料"
        description="機能制限やお試し期間はありません。すべての機能を無料でご利用いただけます。"
      />

      <div className="mx-auto mt-12 max-w-md">
        <div className="relative flex flex-col gap-6 rounded-2xl border border-accent/60 bg-card p-7 shadow-lg shadow-black/5 sm:p-8">
          <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            現在提供中のプラン
          </span>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">フリープラン</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              中高生の競技プログラミング学習を、費用の心配なく始められるように。
            </p>
          </div>

          <div className="flex items-baseline gap-1.5 border-y border-border py-5">
            <span className="text-4xl font-semibold tracking-tight">¥0</span>
            <span className="text-sm text-muted-foreground">/ ずっと無料</span>
          </div>

          <ul className="flex flex-1 flex-col gap-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className="h-11 w-full"
            nativeButton={false}
            render={<Link href={APP_URL} />}
          >
            無料で始める
          </Button>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        ※ 今後、コース追加や機能拡張を予定していますが、現行機能の無料提供の方針は変わりません。
      </p>
    </section>
  )
}
