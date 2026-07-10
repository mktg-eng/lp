import Link from 'next/link'
import { Palette } from 'lucide-react'

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
    <header className="sticky top-0 z-50 border-b border-black/10 bg-primary text-primary-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex items-center gap-1.5 rounded-sm bg-brand-yellow px-2 py-1 text-[10px] font-black leading-none text-brand-yellow-foreground">
            <Palette className="size-3" aria-hidden />
            定額制
          </span>
          <span className="text-sm font-black tracking-tight">
            CDC&nbsp;AI
            <span className="ml-1.5 hidden font-medium text-white/60 sm:inline">
              {SERVICE_NAME}
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
          className="rounded-md bg-brand-coral text-brand-coral-foreground hover:bg-brand-coral/85"
          nativeButton={false}
          render={<Link href="#contact" />}
        >
          無料相談する
        </Button>
      </div>
    </header>
  )
}
