import Link from 'next/link'
import { Terminal } from 'lucide-react'

import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'お悩み', href: '#problems' },
  { label: '導入後', href: '#benefits' },
  { label: 'サービス', href: '#services' },
  { label: '流れ', href: '#flow' },
  { label: '料金', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy text-brand-navy-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-md bg-brand-orange text-brand-orange-foreground">
            <Terminal className="size-4" aria-hidden />
          </span>
          <span className="text-sm font-bold tracking-tight">
            CDC&nbsp;AI
            <span className="ml-1.5 hidden font-medium text-white/60 sm:inline">
              Claude Code 導入支援
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          size="lg"
          className="rounded-full bg-brand-orange text-brand-orange-foreground hover:bg-brand-orange/85"
          nativeButton={false}
          render={<Link href="#contact" />}
        >
          無料相談する
        </Button>
      </div>
    </header>
  )
}
