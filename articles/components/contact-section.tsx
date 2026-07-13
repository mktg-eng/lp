'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

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
    <section id="contact" className="relative overflow-hidden bg-brand-surface">
      <div className="absolute inset-0 bg-dots opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
      <div className="absolute -bottom-40 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
        {/* 力強い見出し＋2ボタンのCTAバナー */}
        <div className="flex flex-col items-center gap-6 rounded-3xl border-2 border-primary/10 bg-white px-6 py-14 text-center shadow-sm sm:px-14">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-bold text-accent">
            <span className="size-1.5 rounded-full bg-brand-teal" aria-hidden />
            お問い合わせ
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            まずは無料でご相談ください
          </h2>
          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            サイトの現状や目標をお伺いし、進め方と概算をご提案します。
            「何から書けばいいか分からない」段階でも、お気軽にお問い合わせください。
          </p>
          <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-full bg-accent px-7 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90"
              nativeButton={false}
              render={<Link href="#contact-form" />}
            >
              無料相談する
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-primary/20 px-7 text-base font-semibold text-primary hover:bg-primary/5"
              nativeButton={false}
              render={<Link href="#services" />}
            >
              サービス内容を見る
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>

        <div id="contact-form" className="mt-14 grid gap-12 pt-2 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ul className="flex flex-col gap-3 text-sm text-foreground/80">
            {[
              'オンラインでのご相談に対応',
              '無理な営業や勧誘は行いません',
              '内容に応じてお見積りをご提示',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-4 text-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg shadow-primary/5">
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-navy via-accent to-brand-teal" aria-hidden />
            <div className="p-7 sm:p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckCircle2 className="size-7" aria-hidden />
                  </span>
                  <h3 className="text-xl font-bold text-primary">送信ありがとうございます</h3>
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
                      placeholder="サイトのURLや、ご相談したい内容をご記入ください。"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="h-12 w-full rounded-full bg-accent text-base text-accent-foreground hover:bg-accent/90"
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
        </div>
      </div>
    </section>
  )
}
