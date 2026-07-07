import { CircleStop, GitCompareArrows, Building2 } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export const FEE_FLOOR_NOTE =
  '※ 成果報酬は『下がった分の30%』です。ただし規模別の下限（S=30万／M=60万／L=90万）を下回る場合は、下限額を頂戴します。'

const columns = ['ケース', 'S規模', 'M規模', 'L規模'] as const

const rows: {
  icon: typeof CircleStop
  label: string
  note: string
  fees: [string, string, string]
}[] = [
  {
    icon: CircleStop,
    label: 'MVP納品後に中止',
    note: 'MVPを受け取ったうえで、本開発に進まない場合',
    fees: ['10万円', '20万円', '30万円'],
  },
  {
    icon: GitCompareArrows,
    label: '相見積もり段階で中止',
    note: '相見積もりの手配まで進んだあとで中止する場合',
    fees: ['20万円', '40万円', '60万円'],
  },
  {
    icon: Building2,
    label: '提携網を通さず既存ベンダーへ発注',
    note: 'MVPと相見積もりを材料に、提携網の外で発注する場合',
    fees: ['30万円', '60万円', '90万円'],
  },
]

export function CancellationSection() {
  return (
    <section id="cancellation" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="中止時の実費"
        title="途中でやめても、規模に応じた実費だけ"
        description="進み具合とMVPの規模（S/M/L）に応じて、それまでにかかった実費のみを頂戴します。金額はいずれも目安です。"
      />

      <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              {columns.map((col, i) => (
                <th
                  key={col}
                  className={cn(
                    'p-4 align-bottom text-sm font-semibold sm:p-5',
                    i === 0 ? 'text-muted-foreground' : 'w-28 text-foreground',
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-border/70 last:border-b-0"
              >
                <th scope="row" className="p-4 sm:p-5">
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                      <row.icon className="size-4" aria-hidden />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-foreground">
                        {row.label}
                      </span>
                      <span className="text-xs font-normal text-muted-foreground">
                        {row.note}
                      </span>
                    </span>
                  </span>
                </th>
                {row.fees.map((fee, i) => (
                  <td key={i} className="p-4 sm:p-5">
                    <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
                      {fee}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-1.5 text-center text-xs text-muted-foreground">
        <p>{FEE_FLOOR_NOTE}</p>
        <p>
          ※ 規模（S/M/L）の目安は「MVPの規模と納期」をご覧ください。実際の金額は、NDA締結のうえヒアリング後にご案内します。
        </p>
      </div>
    </section>
  )
}
