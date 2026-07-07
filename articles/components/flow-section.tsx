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

export function FlowSection() {
  return (
    <section
      id="flow"
      className="relative border-y border-border bg-muted/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="ご利用の流れ"
          title="初月で品質を合わせ、2ヶ月目から量産へ"
          description="初月はあえて本数を絞り、貴社の理想に合わせて品質のチューニングを優先します。"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary px-3 py-1 font-mono text-xs font-medium text-primary-foreground">
                初月
              </span>
              <h3 className="text-lg font-semibold">
                品質をすり合わせる1ヶ月
              </h3>
            </div>

            <ol className="flex flex-col gap-6">
              {firstMonthSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-primary">
                      <step.icon className="size-4.5" aria-hidden />
                    </span>
                    {index < firstMonthSteps.length - 1 ? (
                      <span
                        className="mt-2 w-px flex-1 bg-border"
                        aria-hidden
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-1 pb-1">
                    <h4 className="text-sm font-semibold">
                      <span className="mr-2 font-mono text-muted-foreground/60">
                        0{index + 1}
                      </span>
                      {step.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="rounded-xl bg-accent/5 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              初月は制作本数を絞り、フィードバックを重ねて貴社仕様の品質に合わせることを優先します。
            </p>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium text-accent-foreground">
                2ヶ月目〜
              </span>
              <h3 className="text-lg font-semibold">毎月の運用サイクル</h3>
            </div>

            <ol className="flex flex-col gap-6">
              {monthlySteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-accent">
                      <step.icon className="size-4.5" aria-hidden />
                    </span>
                    {index < monthlySteps.length - 1 ? (
                      <span
                        className="mt-2 w-px flex-1 bg-border"
                        aria-hidden
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-1 pb-1">
                    <h4 className="text-sm font-semibold">
                      <span className="mr-2 font-mono text-muted-foreground/60">
                        0{index + 1}
                      </span>
                      {step.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          ※ 日数はいずれも目安です。記事の分量・監修の有無により変わります。詳細はお見積り時にご案内します。
        </p>
      </div>
    </section>
  )
}
