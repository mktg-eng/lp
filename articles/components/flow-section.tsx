import {
  ClipboardList,
  PackageCheck,
  RefreshCw,
  CalendarCheck,
  PenLine,
  SearchCheck,
  Repeat,
} from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const firstMonthSteps = [
  {
    icon: ClipboardList,
    title: 'キーワード選定',
    description:
      'ご利用開始から5営業日ほどを目安に、初月分のキーワードをご提案し、方針をすり合わせます。',
  },
  {
    icon: PackageCheck,
    title: 'まず3記事を納品',
    description:
      'キーワード合意から5営業日ほどを目安に、先行して3記事を納品。品質の目線を合わせます。',
  },
  {
    icon: RefreshCw,
    title: 'リライト＋残り記事の納品',
    description:
      'いただいたフィードバックを反映し、7営業日ほどを目安にリライトと残りの記事をまとめて納品します。',
  },
]

const monthlySteps = [
  {
    icon: CalendarCheck,
    title: 'キーワード確定',
    description: '当月が始まるまでに、その月に書くキーワードを確定します。',
  },
  {
    icon: PenLine,
    title: '記事作成・納品',
    description: '確定から10営業日を目安に、記事を作成して納品します。',
  },
  {
    icon: SearchCheck,
    title: '検収',
    description:
      '5営業日を目安にご確認いただきます（修正対応は1回まで）。',
  },
  {
    icon: Repeat,
    title: '翌月へ改善反映',
    description:
      'フィードバックを採点基準や企画に反映し、翌月の品質を高めます。',
  },
]

function FlowRow({
  steps,
  tone,
}: {
  steps: { icon: typeof ClipboardList; title: string; description: string }[]
  tone: 'primary' | 'accent'
}) {
  return (
    <ol className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-0">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="flex flex-1 items-start gap-4 sm:flex-col sm:items-center sm:text-center"
        >
          <div className="flex items-center sm:w-full">
            <span
              className={cn(
                'flex size-14 shrink-0 items-center justify-center rounded-full border-2',
                tone === 'primary'
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-accent bg-accent/5 text-accent',
              )}
            >
              <step.icon className="size-6" aria-hidden />
            </span>
            {index < steps.length - 1 ? (
              <span
                className={cn(
                  'ml-3 hidden h-0.5 flex-1 sm:block',
                  tone === 'primary' ? 'bg-primary/20' : 'bg-accent/20',
                )}
                aria-hidden
              />
            ) : null}
          </div>
          <div className="flex flex-col gap-1 pb-1 sm:mt-3 sm:px-2">
            <h4 className="text-sm font-bold text-primary">
              <span className="mr-1.5 font-mono text-muted-foreground/50">
                0{index + 1}
              </span>
              {step.title}
            </h4>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function FlowSection() {
  return (
    <section id="flow" className="relative bg-brand-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          kicker="FLOW"
          eyebrow="ご利用の流れ"
          title="初月で品質を合わせ、2ヶ月目から量産へ"
          description="初月はあえて本数を絞り、貴社の理想に合わせて品質のチューニングを優先します。"
        />

        <div className="mt-12 flex flex-col gap-6">
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary px-3 py-1 font-mono text-xs font-bold text-primary-foreground">
                初月
              </span>
              <h3 className="text-lg font-bold text-primary">
                品質をすり合わせる1ヶ月
              </h3>
            </div>

            <FlowRow steps={firstMonthSteps} tone="primary" />

            <p className="rounded-xl bg-accent/5 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              初月は制作本数を絞り、フィードバックを重ねて貴社仕様の品質に合わせることを優先します。
            </p>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs font-bold text-accent-foreground">
                2ヶ月目〜
              </span>
              <h3 className="text-lg font-bold text-primary">毎月の運用サイクル</h3>
            </div>

            <FlowRow steps={monthlySteps} tone="accent" />
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          ※ 日数はいずれも目安です。記事の分量・監修の有無により変わります。詳細はお見積り時にご案内します。
        </p>
      </div>
    </section>
  )
}
