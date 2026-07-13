import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { SERVICE_NAME } from '@/lib/site'

const navItems = [
  { label: '課題', href: '#problems' },
  { label: 'できること', href: '#services' },
  { label: '進め方', href: '#flow' },
  { label: '料金', href: '#pricing' },
  { label: 'ルール', href: '#rules' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-brand-ink text-brand-ink-foreground">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-base font-bold tracking-tight">
            CDC AI
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.1em] text-brand-ink-foreground/50 sm:inline">
            {SERVICE_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="メインナビゲーション">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-baseline gap-1.5 text-sm text-brand-ink-foreground/60 transition-colors hover:text-brand-ink-foreground"
            >
              <span className="font-mono text-[10px] text-brand-vermillion">
                {String(index + 1).padStart(2, '0')}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          size="lg"
          className="rounded-sm bg-brand-vermillion text-brand-vermillion-foreground hover:bg-brand-vermillion/85"
          nativeButton={false}
          render={<Link href="#contact" />}
        >
          無料相談する
        </Button>
      </div>
    </header>
  )
}
