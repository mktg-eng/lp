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
    <section id="contact" className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-dots opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-md bg-brand-coral px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.12em] text-brand-coral-foreground">
            お問い合わせ
          </span>
          <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
            まずは無料でご相談ください
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-white/70">
            頼みたいデザインの種類や、月あたりのおおよその量をお伺いし、最適なプランと月額の目安をご提案します。
            「定額に収まるか分からない」という段階でも、お気軽にお問い合わせください。
          </p>
          <ul className="mt-2 flex flex-col gap-3 text-sm text-white/80">
            {[
              'オンラインでのご相談に対応',
              '無理な営業や勧誘は行いません',
              '内容に応じてお見積りをご提示',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-4 text-brand-yellow" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border-2 border-black bg-white p-7 sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-brand-coral/15 text-brand-coral">
                <CheckCircle2 className="size-7" aria-hidden />
              </span>
              <h3 className="text-xl font-bold">送信ありがとうございます</h3>
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
                <Label htmlFor="message">ご相談内容</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="頼みたいデザインの種類や、月あたりのおおよその件数をご記入ください。"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="h-12 w-full rounded-md bg-brand-coral text-base text-brand-coral-foreground hover:bg-brand-coral/85"
              >
                {submitting ? '送信中…' : '無料相談を申し込む'}
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
