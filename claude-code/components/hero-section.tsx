import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 bg-grid-invert [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" aria-hidden />
      <div className="absolute -top-32 left-1/2 -z-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-orange/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-xs text-brand-orange">
            <Sparkles className="size-3.5" aria-hidden />
            AIエージェントで開発を自動化
          </span>

          <h1 className="mt-6 text-balance text-4xl font-black leading-[1.2] tracking-tight text-white sm:text-5xl md:text-6xl">
            Claude Code、
            <br className="hidden sm:block" />
            入れて終わりになって
            <span className="text-brand-orange">いませんか？</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            設定・運用まで丸ごと代行。チームの開発をAIエージェントで自動化します。
            導入の最初の一歩から、現場に定着するまでを伴走します。
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-full bg-brand-orange px-6 text-base text-brand-orange-foreground hover:bg-brand-orange/85"
              nativeButton={false}
              render={<Link href="#contact" />}
            >
              無料相談する
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/25 bg-transparent px-6 text-base text-white hover:bg-white/10"
              nativeButton={false}
              render={<Link href="#services" />}
            >
              サービス内容を見る
            </Button>
          </div>

          <p className="mt-4 font-mono text-xs text-white/50">
            提供：株式会社CDC AI ／ オンライン相談に対応
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <TerminalPreview />
        </div>
      </div>
    </section>
  )
}

function TerminalPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-brand-navy-deep shadow-2xl shadow-black/30">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
        <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
        <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
        <span className="ml-2 font-mono text-xs text-white/50">
          claude-code · sub-agents
        </span>
      </div>
      <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
        <p className="text-white/55">
          <span className="text-brand-orange">$</span> claude agents list
        </p>
        <p className="text-white/80">
          <span className="text-white">reviewer</span>{' '}
          コードレビュー担当エージェント{' '}
          <span className="text-brand-orange">● ready</span>
        </p>
        <p className="text-white/80">
          <span className="text-white">tester</span>{'   '}
          テスト生成エージェント{'      '}
          <span className="text-brand-orange">● ready</span>
        </p>
        <p className="text-white/80">
          <span className="text-white">docs</span>{'      '}
          ドキュメント整備エージェント{'  '}
          <span className="text-brand-orange">● ready</span>
        </p>
        <p className="text-white/55">
          <span className="text-brand-orange">$</span> MCP / 権限設定{' '}
          <span className="text-brand-orange">完了</span>
          <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-white/70 align-middle" aria-hidden />
        </p>
      </div>
    </div>
  )
}
