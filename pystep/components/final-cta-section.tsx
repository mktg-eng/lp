import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { APP_URL, LOGIN_URL } from '@/lib/site'

const points = ['登録は1分・費用は無料', '環境構築は不要、ブラウザだけ', '進捗はログインすると自動で保存']

export function FinalCtaSection() {
  return (
    <section
      id="start"
      className="relative overflow-hidden border-t border-border"
    >
      <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
      <div className="absolute -bottom-40 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 py-20 text-center sm:py-24">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden />
          Get Started
        </span>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          まずは1問だけ遊んでみよう
        </h2>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          ログイン前でも、コードを書いて実行する雰囲気を少しだけ体験できます。
          ログインすると、解いた問題・タイピング記録・道場の進捗が残ります。
        </p>

        <ul className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
          {points.map((point) => (
            <li key={point} className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-accent" aria-hidden />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-12 px-6 text-base"
            nativeButton={false}
            render={<Link href={LOGIN_URL} />}
          >
            無料で始める
            <ArrowRight className="size-4" aria-hidden />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-6 text-base"
            nativeButton={false}
            render={<Link href={APP_URL} />}
          >
            30秒だけ試してみる
          </Button>
        </div>
      </div>
    </section>
  )
}
