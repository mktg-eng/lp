import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { JENA_COURSE_URL } from '@/lib/site'

export function JenaCourseSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="次のステップ"
        title="本気で情報オリンピック本戦を目指すなら"
        description="PyStepで身につけた力をさらに伸ばしたい方へ。運営元のイエナアカデミーが、講師とともに本戦出場を目指す本格コースも提供しています。"
      />

      <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card p-7 sm:p-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Image
              src="/jena-academy-logo.jpg"
              alt="イエナアカデミー"
              width={945}
              height={248}
              className="h-8 w-auto"
            />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Python基礎からC++実装力まで、全7コースの本格カリキュラムでJOI本戦出場をサポートする、イエナアカデミー 情報オリンピック対策コース。
            </p>
          </div>

          <Button
            size="lg"
            className="h-11 shrink-0 px-6"
            nativeButton={false}
            render={<Link href={JENA_COURSE_URL} target="_blank" rel="noopener" />}
          >
            コースを見る
          </Button>
        </div>
      </div>
    </section>
  )
}
