import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Shippori_Mincho_B1, Zen_Kaku_Gothic_New } from 'next/font/google'
import './globals.css'

import { COMPANY, SERVICE_NAME } from '@/lib/site'

const displaySerif = Shippori_Mincho_B1({
  variable: '--font-display-serif',
  subsets: ['latin'],
  weight: ['700', '800'],
})
const bodyGothic = Zen_Kaku_Gothic_New({
  variable: '--font-body-gothic',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: `${SERVICE_NAME}｜月額定額でデザイン依頼し放題 | ${COMPANY}`,
  description: `バナー・SNS画像からLP、営業資料、印刷物まで、月額定額でデザインを依頼し放題。AI×プロデザイナーの体制で、都度見積もりのいらない制作体制をつくります。提供：${COMPANY}。`,
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2ecdf',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${displaySerif.variable} ${bodyGothic.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
