import { CircleDollarSign, ListOrdered, MonitorSmartphone } from 'lucide-react'

const values = [
  { icon: CircleDollarSign, label: '利用料 ¥0・ずっと無料' },
  { icon: ListOrdered, label: '全5ステップのロードマップ' },
  { icon: MonitorSmartphone, label: 'ブラウザだけで学習完結' },
]

export function ValuesBandSection() {
  return (
    <section className="bg-[var(--navy-900)] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-3">
        {values.map((value, index) => (
          <div
            key={value.label}
            className={`flex items-center justify-center gap-3 px-7 py-8 text-center ${
              index !== values.length - 1 ? 'border-white/10 sm:border-r' : ''
            } border-b border-white/10 last:border-b-0 sm:border-b-0`}
          >
            <value.icon className="size-6 shrink-0 text-[var(--gold-400)]" aria-hidden />
            <span className="text-sm font-semibold">{value.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
