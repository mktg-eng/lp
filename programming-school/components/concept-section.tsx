const TIMELINE = [
  { label: '初級', months: 3 },
  { label: '中級前期', months: 3 },
  { label: '中級後期', months: 6 },
  { label: '上級前期', months: 9 },
  { label: '上級後期', months: 9 },
  { label: '最上級', months: 12 },
]

const TOTAL_MONTHS = TIMELINE.reduce((sum, item) => sum + item.months, 0)

export function ConceptSection() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden />
          Concept
        </span>
        <h2 className="mt-4 max-w-xl text-pretty text-3xl font-bold tracking-tight sm:text-4xl">
          長期戦だからこそ、段階を踏んで本戦に届く。
        </h2>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          情報オリンピック本戦は一朝一夕には届きません。だからこそ、Python基礎から始めて無理なくレベルを積み上げ、C++への移行、JOI予選突破を経て本戦を目指す、明確なレベル分けと到達目標を持った長期カリキュラムを設計しています。
        </p>

        <div className="mt-12 flex h-14 overflow-hidden rounded-xl border border-border" aria-hidden>
          {TIMELINE.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center justify-center border-r border-white/10 px-2 text-center text-xs font-semibold text-white last:border-r-0 ${
                index % 2 === 0 ? 'bg-[var(--navy-900)]' : 'bg-[var(--navy-800)]'
              }`}
              style={{ width: `${(item.months / TOTAL_MONTHS) * 100}%` }}
            >
              <span className="hidden sm:inline">{item.label}</span>
            </div>
          ))}
          <div className="flex w-14 shrink-0 items-center justify-center bg-gradient-to-b from-[var(--gold-400)] to-[var(--gold-600)] text-xs font-bold text-[var(--navy-950)]">
            本戦
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          ※ 期間はコースごとの目安（合計約{Math.round((TOTAL_MONTHS / 12) * 10) / 10}年）です。習熟度により前後します。
        </p>
      </div>
    </section>
  )
}
