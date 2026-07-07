import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { APP_URL } from '@/lib/site'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" aria-hidden />
      <div className="absolute -top-32 left-1/2 -z-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-accent">
            <Sparkles className="size-3.5" aria-hidden />
            Pythonと競プロを一歩ずつ
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.2] tracking-tight sm:text-5xl md:text-6xl">
            プログラミング未経験から、
            <br className="hidden sm:block" />
            <span className="text-accent">情報オリンピック</span>本戦へ。
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            PyStep（パイステップ）は、Python文法の基礎から競技プログラミングの演習までを、
            講義・コード実行・道場形式で一歩ずつ進められる中高生向けの学習アプリです。
            費用は完全無料。ブラウザだけで、今日からはじめられます。
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-6 text-base"
              nativeButton={false}
              render={<Link href={APP_URL} />}
            >
              無料で始める
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base"
              nativeButton={false}
              render={<Link href="#roadmap" />}
            >
              学習ロードマップを見る
            </Button>
          </div>

          <p className="mt-4 font-mono text-xs text-muted-foreground">
            完全無料 ／ アカウント登録は1分 ／ 小学生〜高校生対象
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <CodePreview />
        </div>
      </div>
    </section>
  )
}

function CodePreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[oklch(0.22_0.03_250)] shadow-lg shadow-black/5">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
        <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
        <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
        <span className="ml-2 font-mono text-xs text-white/50">demo.py</span>
      </div>
      <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
        <p className="text-white/80">
          <span className="text-[oklch(0.78_0.12_227)]">name</span> = <span className="text-white">&quot;PyStep&quot;</span>
        </p>
        <p className="text-white/80">
          <span className="text-white">print</span>(name + <span className="text-white">&quot;へようこそ!&quot;</span>)
        </p>
        <p className="mt-3 text-white/55">実行結果</p>
        <p className="text-[oklch(0.78_0.12_227)]">
          PyStepへようこそ!
          <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-white/70 align-middle" aria-hidden />
        </p>
      </div>
    </div>
  )
}
