import { Target, Users, Code2 } from 'lucide-react'

const values = [
  { icon: Target, label: '情報オリンピック本戦を見据えた設計' },
  { icon: Users, label: 'レッスン制で着実に伴走' },
  { icon: Code2, label: 'Python基礎からC++実装力まで' },
]

export function ValueStripSection() {
  return (
    <section className="bg-[var(--navy-900)] text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-3">
        {values.map((value, index) => (
          <div
            key={value.label}
            className={`flex items-center gap-4 px-7 py-8 ${
              index !== values.length - 1 ? 'border-white/10 sm:border-r' : ''
            } border-b border-white/10 last:border-b-0 sm:border-b-0`}
          >
            <value.icon className="size-7 shrink-0 text-[var(--code-blue)]" aria-hidden />
            <span className="text-sm font-semibold leading-snug">{value.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
