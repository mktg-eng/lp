import { Check, X, Minus } from 'lucide-react'

import { cn } from '@/lib/utils'

type Cell =
  | { type: 'good'; text: string }
  | { type: 'bad'; text: string }
  | { type: 'mid'; text: string }

const columns = ['観点', 'いきなり発注', '自社・フリーランスPOC', '本サービス'] as const

const rows: { label: string; cells: [Cell, Cell, Cell] }[] = [
  {
    label: '初期費用',
    cells: [
      { type: 'bad', text: '高額（100〜200万円が目安）' },
      { type: 'mid', text: 'POC費用がかかる' },
      { type: 'good', text: 'MVPは無料' },
    ],
  },
  {
    label: '要件の固まり方',
    cells: [
      { type: 'bad', text: '曖昧なまま着手しがち' },
      { type: 'mid', text: 'ある程度固まる' },
      { type: 'good', text: '動くMVPで明確に' },
    ],
  },
  {
    label: '価格交渉の材料',
    cells: [
      { type: 'bad', text: '乏しい（言い値）' },
      { type: 'mid', text: '限定的' },
      { type: 'good', text: '相見積もりで比較' },
    ],
  },
  {
    label: '失敗リスク',
    cells: [
      { type: 'bad', text: '高い' },
      { type: 'mid', text: '中程度' },
      { type: 'good', text: '低く抑えやすい' },
    ],
  },
  {
    label: '費用の考え方',
    cells: [
      { type: 'bad', text: '先払い' },
      { type: 'mid', text: '先払い' },
      { type: 'good', text: '成果報酬（下がった分の30%）' },
    ],
  },
]

const cellIcon = {
  good: Check,
  bad: X,
  mid: Minus,
}

const cellIconClass = {
  good: 'text-accent',
  bad: 'text-destructive',
  mid: 'text-muted-foreground/60',
}

export function ComparisonSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:pb-24">
      <div className="overflow-x-auto rounded-2xl border border-border bg-card/40">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              {columns.map((col, i) => (
                <th
                  key={col}
                  className={cn(
                    'p-4 align-bottom text-sm font-semibold sm:p-5',
                    i === 0 && 'w-40 text-muted-foreground',
                    i === 3 &&
                      'rounded-t-xl bg-accent/10 text-accent',
                  )}
                >
                  {i === 3 ? (
                    <span className="flex flex-col gap-1">
                      <span className="font-mono text-[11px] text-accent/80">
                        RECOMMENDED
                      </span>
                      {col}
                    </span>
                  ) : (
                    col
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-border/70 last:border-b-0">
                <th
                  scope="row"
                  className="p-4 text-sm font-medium text-muted-foreground sm:p-5"
                >
                  {row.label}
                </th>
                {row.cells.map((cell, i) => {
                  const Icon = cellIcon[cell.type]
                  const isHighlight = i === 2
                  return (
                    <td
                      key={i}
                      className={cn(
                        'p-4 text-sm sm:p-5',
                        isHighlight
                          ? 'bg-accent/10 font-medium text-foreground'
                          : 'text-muted-foreground',
                      )}
                    >
                      <span className="flex items-start gap-2">
                        <Icon
                          className={cn(
                            'mt-0.5 size-4 shrink-0',
                            cellIconClass[cell.type],
                          )}
                          aria-hidden
                        />
                        <span className="leading-relaxed">{cell.text}</span>
                      </span>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        ※ 比較は一般的な傾向の目安です。金額・リスクは案件により異なります。
      </p>
    </section>
  )
}
