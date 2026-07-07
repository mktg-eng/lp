const STEP_HEIGHTS = [32, 50, 68, 86, 100]

export function ConceptSection() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            Concept
          </span>
          <h2 className="mt-4 text-pretty text-3xl font-bold tracking-tight sm:text-4xl">
            一歩ずつ、確実に力をつける。
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            PyStepは、Python文法の学習から競技プログラミングの実戦演習までを、5段階のロードマップで一歩ずつ進められる無料の学習アプリです。「入れて終わり」ではなく、講義・コード実行・進捗確認・タイピング練習までを一つの画面で完結させ、次に何をすればいいか迷わない設計にしています。
          </p>
        </div>

        <div className="flex h-64 items-end gap-2.5" aria-hidden>
          {STEP_HEIGHTS.map((height, index) => {
            const isLast = index === STEP_HEIGHTS.length - 1
            return (
              <div
                key={index}
                className={`relative flex-1 rounded-t-lg pt-2.5 text-center font-mono text-xs font-bold ${
                  isLast
                    ? 'bg-gradient-to-b from-[var(--gold-400)] to-[var(--gold-600)] text-[var(--navy-950)]'
                    : 'bg-gradient-to-b from-[var(--navy-800)] to-[var(--navy-950)] text-[var(--gold-400)]'
                }`}
                style={{ height: `${height}%` }}
              >
                0{index + 1}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
