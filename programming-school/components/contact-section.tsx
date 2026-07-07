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
          name: fd.get('name'),
          email: fd.get('email'),
          grade: fd.get('grade'),
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
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--navy-950)] text-white"
    >
      <div className="absolute inset-0 bg-dots-light [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
      <div className="absolute -bottom-40 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[var(--gold-500)]/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-white/70">
            <span className="size-1.5 rounded-full bg-[var(--gold-400)]" aria-hidden />
            無料相談
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            まずは無料相談から
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-white/65">
            お子さまの現在のレベルや目標をお伺いし、最適なコースをご提案します。
            「情報オリンピックを目指したいけど、どこから始めればいいか分からない」段階でも、お気軽にご相談ください。
          </p>
          <ul className="mt-2 flex flex-col gap-3 text-sm text-white/65">
            {[
              '初回のご相談は無料',
              '現在のレベルに応じたコースをご提案',
              '無理な勧誘は行いません',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-4 text-[var(--gold-400)]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white p-7 text-foreground sm:p-8">
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
                <Label htmlFor="name">保護者様のお名前</Label>
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
                <Label htmlFor="grade">お子さまの学年</Label>
                <Input id="grade" name="grade" placeholder="例：中学1年生" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">ご相談内容</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="現在のプログラミング経験や、目指したいレベルなどご記入ください。"
                  required
                />
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="h-12 w-full text-base">
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
