import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { APP_URL } from '@/lib/site'

const navItems = [
  { label: 'お悩み', href: '#problems' },
  { label: 'できること', href: '#benefits' },
  { label: 'ロードマップ', href: '#roadmap' },
  { label: '料金', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary font-mono text-xs font-bold text-accent">
            Py
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Py<span className="text-accent">Step</span>
            <span className="ml-1.5 hidden text-muted-foreground sm:inline">
              中高生のための競プロ学習アプリ
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button size="lg" nativeButton={false} render={<Link href={APP_URL} />}>
          無料で始める
        </Button>
      </div>
    </header>
  )
}
