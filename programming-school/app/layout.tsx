import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'イエナアカデミー 情報オリンピック対策コース | 情報オリンピック本戦を目指す本格カリキュラム',
  description:
    'プログラミング未経験からPython基礎、C++移行、JOI（情報オリンピック）2次予選突破・本戦出場までを、全7コースで段階的に導く、イエナアカデミーの情報オリンピック対策コース。',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#f7f9fc',
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
