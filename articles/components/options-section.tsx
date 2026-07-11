import {
  ShieldCheck,
  UserCheck,
  ImagePlus,
  ChartColumn,
  Link2,
  GitCompareArrows,
  FileStack,
  Wrench,
} from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const options: {
  icon: typeof ShieldCheck
  label: string
  note: string
  price: string
  unit: string
}[] = [
  {
    icon: ShieldCheck,
    label: '監修レベル2',
    note: '校閲・ファクトチェックを強化し、より厳密に確認',
    price: '+1万円',
    unit: '/記事',
  },
  {
    icon: UserCheck,
    label: '専門家監修（レベル3）',
    note: '有資格者など専門家が監修。属性や氏名公開の要否で変動',
    price: '+3万円〜',
    unit: '/記事',
  },
  {
    icon: ImagePlus,
    label: 'タイトル画像への文字入れ',
    note: 'アイキャッチ画像にタイトルテキストを載せて仕上げ',
    price: '+5千円',
    unit: '/記事',
  },
  {
    icon: ChartColumn,
    label: 'インフォグラフィック制作',
    note: '記事内容を図解に。見出し（H2）ごとに最大3点まで',
    price: '+5千円',
    unit: '/記事',
  },
  {
    icon: Link2,
    label: '内部リンク挿入',
    note: '記事から記事への内部リンクを設計して挿入',
    price: '+5千円',
    unit: '/記事',
  },
  {
    icon: GitCompareArrows,
    label: '比較・おすすめ記事の作成',
    note: '「おすすめ◯選」のような比較検討型の記事に対応',
    price: '+1万円',
    unit: '/記事',
  },
  {
    icon: FileStack,
    label: '記事のホワイトペーパー化',
    note: '制作した記事をリード獲得用の資料に再編集',
    price: '+10万円〜',
    unit: '/記事',
  },
  {
    icon: Wrench,
    label: 'WordPress改修',
    note: 'テーマ・プラグインの最適化など、リード獲得に向けた構造改善',
    price: '+35万円〜',
    unit: '/単発',
  },
]

export function OptionsSection() {
  return (
    <section id="options" className="relative overflow-hidden bg-brand-surface">
      <div className="absolute inset-0 bg-grid opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          kicker="OPTIONS"
          eyebrow="オプション"
          title="必要な分だけ、記事単位で追加"
          description="監修の強化から画像・図解、記事の二次活用まで。金額はいずれも目安です。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option) => (
            <div
              key={option.label}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 transition-colors hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <option.icon className="size-4.5" aria-hidden />
              </span>
              <span className="text-sm font-bold text-primary">
                {option.label}
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                {option.note}
              </span>
              <span className="mt-auto flex items-baseline gap-1 border-t border-border pt-3">
                <span className="font-mono text-base font-bold text-accent">
                  {option.price}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground/70">
                  {option.unit}
                </span>
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          ※ 金額・条件は目安です。正式なお見積りはヒアリング後にご案内します。
        </p>
      </div>
    </section>
  )
}
