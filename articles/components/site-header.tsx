import Link from 'next/link'
import { Newspaper } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SERVICE_NAME } from '@/lib/site'

const navItems = [
  { label: '提供価値', href: '#benefits' },
  { label: 'お悩み', href: '#problems' },
  { label: 'サービス', href: '#services' },
  { label: '流れ', href: '#flow' },
  { label: '料金', href: '#pricing' },
  { label: 'オプション', href: '#options' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      {/* SEO×AIOの二軸を示す極細グラデーションライン */}
      <div
        className="h-[3px] w-full bg-gradient-to-r from-brand-navy via-accent to-brand-teal"
        aria-hidden
      />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Newspaper className="size-4" aria-hidden />
            <span
              className="absolute -bottom-1 -right-1 flex size-3 items-center justify-center rounded-full border-2 border-background bg-accent"
              aria-hidden
            />
          </span>
          <span className="text-sm font-bold tracking-tight text-primary">
            CDC&nbsp;AI
            <span className="ml-1.5 hidden font-normal text-muted-foreground sm:inline">
              {SERVICE_NAME}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 rounded-full border border-border/80 bg-secondary/50 p-1 lg:flex"
          aria-label="メインナビゲーション"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-background hover:text-accent hover:shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          size="lg"
          className="rounded-full bg-accent text-accent-foreground shadow-sm shadow-accent/30 hover:bg-accent/90"
          nativeButton={false}
          render={<Link href="#contact" />}
        >
          無料相談する
        </Button>
      </div>
    </header>
  )
}
