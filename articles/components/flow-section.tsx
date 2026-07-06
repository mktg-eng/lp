import { FileSignature, ClipboardList, MessagesSquare, PackageCheck, RefreshCw } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: FileSignature,
    title: 'ご契約',
    description: 'プランと進め方をすり合わせのうえ、ご契約となります。',
  },
  {
    icon: ClipboardList,
    title: '情報記入シート',
    description: '商材・ターゲット・NG表現などを専用シートにご記入いただきます。',
  },
  {
    icon: MessagesSquare,
    title: 'キックオフ',
    description: 'オンラインで方針と初回の制作テーマを確認します。',
  },
  {
    icon: PackageCheck,
    title: '初回納品',
    description: '目安◯営業日で初回記事を納品。フィードバックを反映します。',
  },
  {
    icon: RefreshCw,
    title: '分析・リライト',
    description: '公開後のデータを見ながら、改善サイクルを回し続けます。',
  },
]

export function FlowSection() {
  return (
    <section
      id="flow"
      className="relative border-y border-border bg-muted/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="ご利用の流れ"
          title="ご契約から改善サイクルまで、5つのステップ"
          description="やり取りはオンライン中心。記入シートで前提を揃えるので、打ち合わせの負担を最小限にできます。"
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary">
                  <step.icon className="size-5" aria-hidden />
                </span>
                <span className="font-mono text-2xl font-semibold text-muted-foreground/50">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          ※ 納品日数は記事の分量・監修の有無により変わります。詳細はお見積り時にご案内します。
        </p>
      </div>
    </section>
  )
}
