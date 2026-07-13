import { Zap, LineChart, Workflow } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const reasons = [
  {
    icon: Zap,
    title: '低コストで量産できる',
    description:
      'AI×テンプレートでLP・オファーを高速に生成。広告や制作に大きく投資する前に、複数の型を低コストで試せます。',
    compare: { beforeLabel: '個別制作', before: 28, afterLabel: 'AI量産', after: 92 },
  },
  {
    icon: LineChart,
    title: '“当たり”を数字で見極める',
    description:
      '感覚ではなく、配信と反応のデータで判断。どの訴求・ターゲットが効くのかを可視化し、勝ち筋に集中します。',
    compare: { beforeLabel: '勘に頼る', before: 22, afterLabel: 'データで判断', after: 88 },
  },
  {
    icon: Workflow,
    title: '実行まで代行する',
    description:
      '設計や提案で終わらせず、LP量産からフォーム営業の配信・運用までを代行。手が足りないチームでも回せます。',
    compare: { beforeLabel: '自社対応のみ', before: 32, afterLabel: '伴走で代行', after: 90 },
  },
]

export function ReasonsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        kicker="Why Us"
        eyebrow="選ばれる理由"
        title="量産・分析・実行を、まとめて任せられる"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reasons.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-7"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-primary">
                <item.icon className="size-5.5" aria-hidden />
              </span>
              <span className="font-mono text-xs text-muted-foreground/50 tabular-nums">
                0{index + 1}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>

            {/* 「従来のやり方」と「このサービス」を横棒の長さで対比するデータドリブンな見せ方。数値は表現上のイメージ。 */}
            <div className="mt-1 flex flex-col gap-2.5 border-t border-border pt-5">
              <CompareBar
                label={item.compare.beforeLabel}
                value={item.compare.before}
                tone="muted"
              />
              <CompareBar
                label={item.compare.afterLabel}
                value={item.compare.after}
                tone="primary"
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        ※ バーの長さはイメージです。実際の効果は業種・条件により異なります。
      </p>
    </section>
  )
}

function CompareBar({
  label,
  value,
  tone,
}: {
  label: string
  value: number
  tone: 'muted' | 'primary'
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 shrink-0 font-mono text-[11px] text-muted-foreground">
        {label}
      </span>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
        <div
          className={cn(
            'h-full rounded-full',
            tone === 'primary' ? 'bg-brand-gradient' : 'bg-muted-foreground/30',
          )}
          style={{ width: `${value}%` }}
          aria-hidden
        />
      </div>
    </div>
  )
}
