'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, LineChart, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { SERVICE_NAME } from '@/lib/site'

/** 「個別対応」から「型を量産・横展開」へ切り替えた際のイメージを、横棒の対比で見せる簡易シミュレーション。 */
function SimBar({
  label,
  value,
  tone,
}: {
  label: string
  value: number
  tone: 'muted' | 'primary'
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-32 shrink-0 font-mono text-[11px] text-muted-foreground">
        {label}
      </span>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
        <div
          className={cn(
            'h-full rounded-full',
            tone === 'primary' ? 'bg-brand-gradient' : 'bg-muted-foreground/30',
          )}
          style={{ width: `${value}%` }}
          aria-hidden
        />
      </div>
    </div>
  )
}

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
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border"
    >
      <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-3 py-1 font-mono text-xs font-bold tracking-[0.08em] text-primary-foreground">
            お問い合わせ
          </span>
          <h2 className="text-3xl font-black tracking-tight text-balance sm:text-4xl">
            まずは無料でご相談ください
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            新規開拓のお悩みやターゲットをお伺いし、「{SERVICE_NAME}」の進め方をご提案します。
            「何から手をつければいいか分からない」段階でも、お気軽にお問い合わせください。
          </p>
          <ul className="mt-2 flex flex-col gap-3 text-sm text-muted-foreground">
            {[
              'オンラインでのご相談に対応',
              '無理な営業や勧誘は行いません',
              '内容に応じてお見積りをご提示',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-4 text-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          {/* SaaSプロダクトの成果シミュレーション風パネル。数値は演出用のイメージであり、実測値ではない。 */}
          <div className="mt-2 overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-2.5">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                <LineChart className="size-3.5 text-primary" aria-hidden />
                成果シミュレーション
              </span>
              <span className="font-mono text-[10px] text-muted-foreground/60">
                イメージです
              </span>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <SimBar label="個別対応のみ" value={24} tone="muted" />
              <SimBar label="型を量産・横展開" value={88} tone="primary" />
            </div>
            <p className="border-t border-border px-4 py-2 text-center font-mono text-[10px] text-muted-foreground/60">
              ※ バーの長さはイメージです。実際の成果を保証するものではありません。
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-7 sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckCircle2 className="size-7" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold">送信ありがとうございます</h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                内容を確認のうえ、担当者よりご連絡いたします。少々お待ちください。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex items-center justify-between gap-2 border-b border-border pb-4">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-[0.1em] text-primary uppercase">
                  <Sparkles className="size-3.5" aria-hidden />
                  Start Free Trial
                </span>
                <span className="font-mono text-[10px] text-muted-foreground/60">
                  入力目安1分
                </span>
              </div>
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
                <Label htmlFor="message">ターゲット・ご相談内容</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="開拓したいターゲット（業種・地域など）や、現在の新規開拓のお悩みをご記入ください。"
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
