import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-28 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-xs font-medium tracking-[0.35em] text-muted-foreground">
            AI SERVICE COMPANY
          </p>

          <h1 className="mt-8 text-balance text-5xl font-light leading-[1.18] tracking-wide sm:text-6xl md:text-7xl">
            AIを、実務で使える形にして届ける。
          </h1>

          {/* NOTE: 以下のミッションコピーはドラフト。公開前に富田さんの確認を取ること。 */}
          <p className="mt-10 max-w-2xl text-pretty text-base leading-loose text-muted-foreground sm:text-lg">
            AI導入、開発、集客、デザイン、コンテンツ。
            株式会社CDC AIは、AIの力を企業の現場で成果につなげるサービスカンパニーです。
          </p>

          <div className="mt-12">
            <Link
              href="/service"
              className="inline-flex h-13 items-center gap-2 rounded-full bg-warm-gradient px-8 text-base font-medium text-primary transition-opacity hover:opacity-90"
            >
              サービスを見る
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
