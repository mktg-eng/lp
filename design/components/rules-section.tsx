import { ListOrdered, Repeat2, FileCheck2, Clock, DoorOpen } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const rules = [
  {
    icon: ListOrdered,
    title: '着手は1案件ずつ',
    description:
      '依頼はいくつでもキューに追加できます。着手は原則1案件ずつ（同時進行プランでは複数）で、完了次第すぐ次に取りかかります。',
  },
  {
    icon: Repeat2,
    title: '修正回数の考え方',
    description:
      '初稿に対する調整・修正は定額の範囲で対応します。当初のご依頼内容から大きく変わる場合は、新しい依頼として承ります。',
  },
  {
    icon: FileCheck2,
    title: '納品物の権利はお客様に',
    description:
      '納品したデザインデータの権利は、原則お客様に帰属します。納品後は広告・印刷など自由にご活用いただけます。',
  },
  {
    icon: Clock,
    title: '対応時間',
    description:
      '制作・ご連絡への対応は平日の日中が基本です。ご依頼自体は、チャットへ24時間いつでも送信いただけます。',
  },
  {
    icon: DoorOpen,
    title: '月単位契約・いつでも解約可',
    description:
      '契約は1か月単位です。合わなければ翌月から解約でき、依頼が少ない月は休会のご相談も可能です。',
  },
]

export function RulesSection() {
  return (
    <section
      id="rules"
      className="relative border-y border-border bg-muted/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="ご利用ルール"
          title="安心して使い続けられる、シンプルなルール"
          description="「定額だとどこまで頼めるの？」に迷わないよう、運用ルールをあらかじめ明確にしています。"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rules.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-secondary text-accent">
                <item.icon className="size-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
