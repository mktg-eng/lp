import { SectionHeading } from '@/components/section-heading'

const newsItems = [
  {
    date: '2026-07-07',
    tag: 'お知らせ',
    title: 'コーポレートサイトを公開しました',
  },
]

export function NewsSection() {
  return (
    <section id="news" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <SectionHeading en="News" ja="お知らせ" />

        <div className="mt-16 border-t border-border">
          {newsItems.map((item) => (
            <div
              key={`${item.date}-${item.title}`}
              className="flex flex-col gap-3 border-b border-border py-7 sm:flex-row sm:items-center sm:gap-8"
            >
              <time
                dateTime={item.date}
                className="shrink-0 font-mono text-sm text-muted-foreground"
              >
                {item.date.replaceAll('-', '.')}
              </time>
              <span className="w-fit shrink-0 rounded-full border border-border px-3 py-0.5 text-xs text-muted-foreground">
                {item.tag}
              </span>
              <p className="text-sm sm:text-base">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
