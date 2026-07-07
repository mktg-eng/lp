import { BookOpen, Code2, Trophy } from 'lucide-react'

const values = [
  { icon: BookOpen, label: 'Python文法から着実に' },
  { icon: Code2, label: '競技プログラミングの考え方が身につく' },
  { icon: Trophy, label: '情報オリンピックを見据えたロードマップ' },
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
            <value.icon className="size-7 shrink-0 text-[var(--gold-400)]" aria-hidden />
            <span className="text-sm font-semibold leading-snug">{value.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
