import Link from 'next/link'

import { CdcLogo } from '@/components/logos'
import { Button } from '@/components/ui/button'

// NOTE: マルチページ構成のため、トップページのセクションへのリンクは
// どのページからでも動くよう '/#...' 形式にしている。
const navItems = [
  { label: '私たちについて', href: '/#about' },
  { label: 'サービス', href: '/service' },
  { label: 'お知らせ', href: '/#news' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <CdcLogo className="size-8" />
          <span className="text-lg font-semibold tracking-[0.08em] text-primary">
            CDC&nbsp;AI
          </span>
          <span className="hidden text-[11px] tracking-[0.2em] text-muted-foreground sm:inline">
            AI SERVICE COMPANY
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="メインナビゲーション"
        >
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

        <Button
          size="lg"
          className="px-5"
          nativeButton={false}
          render={<Link href="/#contact" />}
        >
          お問い合わせ
        </Button>
      </div>
    </header>
  )
}
