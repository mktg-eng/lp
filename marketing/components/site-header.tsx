import Link from 'next/link'
import { CopyPlus } from 'lucide-react'

import { Button } from '@/components/ui/button'

const navItems = [
  { label: '課題', href: '#problems' },
  { label: '解決', href: '#solution' },
  { label: '仕組み', href: '#flow' },
  { label: '事例', href: '#cases' },
  { label: '料金', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-brand-gradient text-primary-foreground">
            <CopyPlus className="size-4" aria-hidden />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            CDC&nbsp;AI
            <span className="ml-1.5 hidden text-muted-foreground sm:inline">
              コピーできる集客
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

        <Button size="lg" nativeButton={false} render={<Link href="#contact" />}>
          無料で相談する
        </Button>
      </div>
    </header>
  )
}
