import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

import { JENA_COURSE_URL } from '@/lib/site'

export function JenaCourseSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="overflow-hidden rounded-2xl border border-border bg-[#002b6b] text-white">
        <div className="flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <Image
              src="/jena-academy-logo-footer.svg"
              alt="イエナアカデミー"
              width={223}
              height={45}
              className="h-9 w-auto"
            />
            <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
              本気で情報オリンピック本戦を目指すなら。
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-white/70">
              PyStepで身につけた力をさらに伸ばしたい方へ。イエナアカデミーの情報オリンピック対策コースでは、Python基礎からC++実装力まで、全7コースの本格カリキュラムでJOI本戦出場をサポートします。
            </p>
          </div>

          <Link
            href={JENA_COURSE_URL}
            target="_blank"
            rel="noopener"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#e63946] px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            コースを見る
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
