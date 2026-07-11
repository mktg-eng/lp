import Link from 'next/link'
import { Newspaper } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SERVICE_NAME } from '@/lib/site'

const navItems = [
  { label: 'お悩み', href: '#problems' },
  { label: '提供価値', href: '#benefits' },
  { label: 'サービス', href: '#services' },
  { label: '流れ', href: '#flow' },
  { label: '料金', href: '#pricing' },
  { label: 'オプション', href: '#options' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Newspaper className="size-4" aria-hidden />
          </span>
          <span className="text-sm font-bold tracking-tight text-primary">
            CDC&nbsp;AI
            <span className="ml-1.5 hidden font-normal text-muted-foreground sm:inline">
              {SERVICE_NAME}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          size="lg"
          className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          nativeButton={false}
          render={<Link href="#contact" />}
        >
          無料相談する
        </Button>
      </div>
    </header>
  )
}
