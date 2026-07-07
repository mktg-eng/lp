import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'PyStep（パイステップ）| 中高生のための無料 競技プログラミング学習アプリ',
  description:
    'Python文法の基礎から競技プログラミングの演習、情報オリンピック本戦を目指すレベルまで。ブラウザだけで学べる、中高生向けの完全無料アプリ「PyStep」。',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#eef0ea',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
