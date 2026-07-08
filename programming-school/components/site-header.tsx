import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'お悩み', href: '#problems' },
  { label: 'カリキュラム', href: '#curriculum' },
  { label: '選ばれる理由', href: '#reason' },
  { label: 'よくある質問', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src="/jena-academy-logo.jpg"
            alt="イエナアカデミー"
            width={945}
            height={248}
            className="h-8 w-auto"
            priority
          />
          <span className="hidden text-sm font-semibold text-muted-foreground sm:inline">
            情報オリンピック対策コース
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
          無料相談を申し込む
        </Button>
      </div>
    </header>
  )
}
