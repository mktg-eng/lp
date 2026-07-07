import { ListOrdered, Languages, Target } from 'lucide-react'

const values = [
  { icon: ListOrdered, label: '全7コースの体系的カリキュラム' },
  { icon: Languages, label: 'Python基礎からC++実装力へ' },
  { icon: Target, label: '情報オリンピック本戦を見据えた設計' },
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
