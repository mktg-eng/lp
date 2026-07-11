import { Newspaper, Briefcase, Building2 } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { SERVICE_NAME } from '@/lib/site'

const sparkPoints = [30, 55, 42, 68, 60, 82, 90]

const cases = [
  {
    icon: Newspaper,
    title: '求職者向けメディアの立ち上げ',
    description:
      '新しい求職者メディアの認知獲得に向け、訴求別のLPを量産。フォーム営業で反応を見ながら、当たった切り口に集中投下します。',
    stats: [
      { value: '◯◯', unit: '本/月', label: '公開LP数' },
      { value: '+◯◯%', unit: '', label: '登録の伸び' },
    ],
  },
  {
    icon: Briefcase,
    title: '人材紹介の集客',
    description:
      '採用したい企業・登録したい求職者の双方に向け、ターゲット別のオファーを検証。反応の良い型を横展開してリードを積み上げます。',
    stats: [
      { value: '◯◯', unit: '件/月', label: '新規リード' },
      { value: '◯.◯x', unit: '', label: '商談化率' },
    ],
  },
  {
    icon: Building2,
    title: '自社サービスの新規開拓',
    description:
      '既存の営業リソースを補完する形で、AI量産LP×フォーム営業を運用。広告に頼り切らない新規開拓チャネルを構築します。',
    stats: [
      { value: '◯◯', unit: '%減', label: '獲得単価' },
      { value: '◯◯', unit: '社', label: '新規商談' },
    ],
  },
]

export function CasesSection() {
  const points = sparkPoints
    .map((h, i) => `${(i / (sparkPoints.length - 1)) * 100},${100 - h}`)
    .join(' ')

  return (
    <section id="cases" className="relative py-6">
      <div
        className="absolute inset-0 -z-10 bg-brand-charcoal [clip-path:polygon(0_32px,100%_0,100%_100%,0_calc(100%-32px))]"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionHeading
          kicker="Cases"
          eyebrow="適用事例"
          title="こんな新規開拓に使えます"
          description={`求職者メディアから人材紹介、自社サービスまで。ターゲットに合わせて“${SERVICE_NAME}”を展開します。`}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-background p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-primary">
                  <item.icon className="size-5.5" aria-hidden />
                </span>
                <span className="font-mono text-xs text-muted-foreground/50 tabular-nums">
                  CASE 0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <div className="relative h-10 w-full text-primary/70">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <polyline
                    points={points}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-border pt-5">
                {item.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="flex items-baseline gap-0.5">
                      <span className="font-mono text-2xl font-black tracking-tight tabular-nums text-gradient">
                        {stat.value}
                      </span>
                      {stat.unit ? (
                        <span className="text-xs text-muted-foreground">
                          {stat.unit}
                        </span>
                      ) : null}
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          ※ 掲載の数値は表現上のイメージ（プレースホルダー）です。実績値は確定後に差し替えます。
        </p>
      </div>
    </section>
  )
}
