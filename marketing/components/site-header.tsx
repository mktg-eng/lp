'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CopyPlus, TrendingUp } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SERVICE_NAME } from '@/lib/site'

const navItems = [
  { label: '事例', href: '#cases' },
  { label: '課題', href: '#problems' },
  { label: '仕組み', href: '#flow' },
  { label: '解決', href: '#solution' },
  { label: '料金', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

/**
 * ページの閲覧進捗を「成長グラフの右肩上がり」に見立てたスクロールプログレスバー。
 * グロースダッシュボードのトップバーのような演出。
 */
function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const max = scrollHeight - clientHeight
      setProgress(max > 0 ? Math.min(100, Math.max(0, (scrollTop / max) * 100)) : 0)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return progress
}

export function SiteHeader() {
  const progress = useScrollProgress()

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      {/* グロースダッシュボードの上端バー：スクロール量を成長グラフのように可視化 */}
      <div className="h-[3px] w-full bg-border/50" aria-hidden>
        <div
          className="h-full bg-brand-gradient transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-brand-gradient text-brand-lime-foreground">
            <CopyPlus className="size-4" aria-hidden />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            CDC&nbsp;AI
            <span className="ml-1.5 hidden text-muted-foreground sm:inline">
              {SERVICE_NAME}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group inline-flex items-center gap-1 font-mono text-xs font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              <TrendingUp
                className="size-3 text-primary/40 transition-colors group-hover:text-primary"
                aria-hidden
              />
              {item.label}
            </Link>
          ))}
        </nav>

        <Button size="lg" nativeButton={false} render={<Link href="#contact" />}>
          無料で相談する
        </Button>
      </div>
    </header>
  )
}
