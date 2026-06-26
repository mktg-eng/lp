import { NextResponse } from 'next/server'

const SERVICE = 'MVP相見積もりサービス'

export async function POST(request: Request) {
  try {
    const data = await request.json().catch(() => ({}) as Record<string, unknown>)
    const company = String(data.company ?? '').trim()
    const name = String(data.name ?? '').trim()
    const email = String(data.email ?? '').trim()
    const message = String(data.message ?? '').trim()

    if (!company || !name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: '必須項目が未入力です。' },
        { status: 400 },
      )
    }

    const webhook = process.env.SLACK_WEBHOOK_URL
    if (!webhook) {
      console.error('SLACK_WEBHOOK_URL is not set')
      return NextResponse.json(
        { ok: false, error: '送信先が未設定です。時間をおいて再度お試しください。' },
        { status: 500 },
      )
    }

    const text = [
      `:inbox_tray: *新規お問い合わせ*（${SERVICE}）`,
      `*会社名:* ${company}`,
      `*お名前:* ${name}`,
      `*メール:* ${email}`,
      '*ご相談内容:*',
      message,
    ].join('\n')

    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })

    if (!res.ok) {
      console.error('Slack webhook responded with', res.status)
      return NextResponse.json(
        { ok: false, error: '送信に失敗しました。時間をおいて再度お試しください。' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('contact route error', err)
    return NextResponse.json(
      { ok: false, error: '送信に失敗しました。時間をおいて再度お試しください。' },
      { status: 500 },
    )
  }
}
