'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)
    const fd = new FormData(event.currentTarget)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: fd.get('company'),
          name: fd.get('name'),
          email: fd.get('email'),
          message: fd.get('message'),
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.ok) {
        throw new Error(
          json.error || '送信に失敗しました。時間をおいて再度お試しください。',
        )
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : '送信に失敗しました。')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:py-32 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <h2 className="text-5xl font-light tracking-wide sm:text-6xl">
              Contact
            </h2>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              お問い合わせ
            </span>
          </div>
          <p className="max-w-md text-pretty leading-loose text-muted-foreground">
            サービスへのご相談・協業のご提案・PM応募など、
            お気軽にご連絡ください。内容を確認のうえ、担当者よりご返信します。
          </p>
          <ul className="mt-2 flex flex-col gap-3 text-sm text-muted-foreground">
            {[
              '各サービスへのご相談・お見積り',
              '協業・パートナーシップのご提案',
              'PM応募（「PM応募」と添えてご連絡ください）',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-4 shrink-0 text-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-7 sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <CheckCircle2 className="size-7" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold">送信ありがとうございます</h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                内容を確認のうえ、担当者よりご連絡いたします。少々お待ちください。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="company">会社名</Label>
                <Input id="company" name="company" placeholder="株式会社サンプル" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">お名前</Label>
                <Input id="name" name="name" placeholder="山田 太郎" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">お問い合わせ内容</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="ご相談・協業・PM応募など、内容をご記入ください。"
                  required
                />
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="h-12 w-full text-base">
                {submitting ? '送信中…' : '送信する'}
                {!submitting && <ArrowRight className="size-4" aria-hidden />}
              </Button>
              {error && (
                <p className="text-center text-sm text-destructive">{error}</p>
              )}
              <p className="text-center text-xs text-muted-foreground">
                送信いただいた内容は、お問い合わせ対応のみに利用します。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
