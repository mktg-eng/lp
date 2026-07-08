import Link from 'next/link'
import { ArrowRight, CalendarClock, Languages, GraduationCap, Check, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

const badges = [
  { icon: CalendarClock, label: '全7コース・本戦まで一貫指導' },
  { icon: Languages, label: 'Python基礎からC++実装力へ' },
  { icon: GraduationCap, label: '小学生〜高校生対象' },
]

const courses = [
  { label: '初級 Python基礎', done: true },
  { label: '中級前期 競プロ入門', done: true },
  { label: '中級後期 PAST対策', done: false, current: true },
  { label: '上級前期 C++移行', done: false },
  { label: '上級後期 JOI予選対策', done: false },
  { label: '最上級 JOI本戦対策', done: false },
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -z-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              情報オリンピック本戦を目指す本格カリキュラム
            </span>

            <h1 className="mt-6 text-balance font-bold leading-[1.32] tracking-tight text-[clamp(1.75rem,3.4vw,2.55rem)]">
              プログラミング未経験から
              <br />
              <span className="text-accent">情報オリンピック本戦</span>へ。
            </h1>

            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Python基礎の習得からC++への本格移行、JOI（情報オリンピック）2次予選突破・本戦出場までを、全7コースで段階的に導く、イエナアカデミー情報オリンピック対策コースです。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold shadow-sm"
                >
                  <badge.icon className="size-4 text-accent" aria-hidden />
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="h-12 px-6 text-base"
                nativeButton={false}
                render={<Link href="#contact" />}
              >
                無料相談を申し込む
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <span className="font-mono text-xs text-muted-foreground">
                初回のご相談は無料です
              </span>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="overflow-hidden rounded-xl border border-border bg-[var(--navy-950)] shadow-lg shadow-black/10">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
                <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
                <span className="size-2.5 rounded-full bg-white/20" aria-hidden />
                <span className="ml-2 font-mono text-xs text-white/50">learning-path</span>
              </div>
              <ul className="flex flex-col gap-1 p-4">
                {courses.map((course) => (
                  <li
                    key={course.label}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                      course.current ? 'bg-white/10 font-semibold text-white' : 'text-white/70'
                    }`}
                  >
                    <span
                      className={`flex size-5 shrink-0 items-center justify-center rounded-full ${
                        course.done
                          ? 'bg-[var(--code-blue)] text-[var(--navy-950)]'
                          : course.current
                            ? 'bg-[var(--red-500)] text-[var(--navy-950)]'
                            : 'border border-white/20'
                      }`}
                    >
                      {course.done ? (
                        <Check className="size-3" aria-hidden />
                      ) : course.current ? (
                        <ChevronRight className="size-3" aria-hidden />
                      ) : null}
                    </span>
                    {course.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -top-5 -right-5 hidden w-40 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-xl sm:block">
              <div className="text-2xl font-extrabold tabular-nums text-primary">7</div>
              <div className="mt-0.5 text-xs text-muted-foreground">コースの本格カリキュラム</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
