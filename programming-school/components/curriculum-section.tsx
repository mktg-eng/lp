import {
  BookOpen,
  Code2,
  ListChecks,
  Braces,
  Users,
  Trophy,
  Rocket,
  Keyboard,
} from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'

const courses = [
  {
    icon: BookOpen,
    title: '初級コース',
    subtitle: 'プログラミング基礎',
    level: 'プログラミング未経験〜初心者',
    duration: '約3か月（約10レッスン）',
    language: 'Python',
    description:
      'Progateを使用したPython基礎学習。変数・データ型・演算子、条件分岐（if）・繰り返し処理（for, while）、関数の基本概念を身につけます。HTML・CSS・JavaScript基礎も並行して学び、プログラミング共通の文法感覚を養います。',
    goals: [
      'if, for, while, 型などプログラミング共通文法をマスター',
      'Python基本構文を理解し、簡単なプログラムを自力で書ける',
    ],
  },
  {
    icon: Code2,
    title: '中級前期コース',
    subtitle: 'Python競技プログラミング入門',
    level: '初級コース修了者',
    duration: '約3か月（約10レッスン）',
    language: 'Python',
    description:
      'トイプロを使用した問題解決練習で、AtCoder A・B問題レベルの演習を重ねます。標準入出力の完全マスター、リスト・辞書・文字列操作の実践を通じて、Python文法を競プロで使えるレベルまで定着させます。',
    goals: ['Python文法を完全にマスターし、競プロで活用できる'],
    target: 'AtCoder茶色（Rating 400-800）',
  },
  {
    icon: ListChecks,
    title: '中級後期コース',
    subtitle: 'アルゴリズム実技検定（PAST）',
    level: '中級前期コース修了者',
    duration: '約6か月（約20レッスン）',
    language: 'Python',
    description:
      'AtCoder主催のアルゴリズム実技検定（PAST）を教材として活用。情報オリンピックで必要となる知識の大半をここで習得します。',
    goals: [
      '情報オリンピック1次予選突破レベル・PAST中級レベル合格',
      '基本的なアルゴリズム・データ構造を理解し実装できる',
    ],
  },
  {
    icon: Braces,
    title: '上級前期コース',
    subtitle: 'C++移行・高度アルゴリズム基礎',
    level: '中級後期コース修了者',
    duration: '約9か月（約30レッスン）',
    language: 'C++（完全移行）',
    description:
      'APG4b（AtCoder公式C++入門）を使用し、C++の基本文法とSTLを完全マスター。競技プログラミング特有のC++実装技術を身につけ、PAST上級レベルの問題演習に取り組みます。',
    goals: ['C++による高速実装をマスター', 'PAST上級レベル合格'],
  },
  {
    icon: Users,
    title: '上級後期コース',
    subtitle: 'JOI 2次予選突破対策',
    level: '上級前期コース修了者',
    duration: '約9か月（約30レッスン）',
    language: 'C++',
    description:
      'JOI 2次予選の過去問演習を中心に、平均点35点以上の問題を確実に解く力を養います。生徒間での教え合いやアルゴリズムプレゼンテーションを通じて、理解を人に説明できるレベルまで深めます。',
    goals: [
      'AtCoder Rating 1400-1600（水色上位）達成・JOI 2次予選突破',
      '複雑なアルゴリズムを理解し、他者に説明・教授できる',
    ],
  },
  {
    icon: Trophy,
    title: '最上級コース',
    subtitle: 'JOI 本戦出場対策',
    level: '上級後期コース修了者',
    duration: '約12か月（約40レッスン）',
    language: 'C++',
    description:
      'JOI 2次試験の難問演習、JOI本選過去問の攻略に取り組みます。主要アルゴリズムのレポート作成を通じて理解を研究レベルまで深め、本戦出場を目指します。',
    goals: ['JOI本戦出場・入賞'],
  },
  {
    icon: Rocket,
    title: 'エキストラコース',
    subtitle: 'AI開発実践',
    level: 'オープン（プロジェクトベース）',
    duration: '3か月〜',
    language: '問わない',
    description:
      'これまでに身につけたプログラミング能力を活かし、世界中の人が使えるサービスの作成・公開に挑戦。機械学習・深層学習の基礎、Web/サーバーサイド開発、データベース設計・API開発、クラウドサービス活用まで、実践的な開発経験を積みます。',
    goals: [
      '実用的なAIサービスの開発・公開',
      'エンジニアとしての実践的スキル・将来のキャリアへの準備',
    ],
  },
]

export function CurriculumSection() {
  return (
    <section id="curriculum" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="カリキュラム"
        title="情報オリンピック本戦出場を目指す、全7コース"
        description="各コースは明確なレベル分けと到達目標を設定。無理なく確実にステップアップできます。"
      />

      <div className="mt-10 flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-4 py-3 text-center text-xs text-muted-foreground sm:text-sm">
        <Keyboard className="size-4 shrink-0 text-primary" aria-hidden />
        全コース共通：タイピング練習（6か月で速度5倍を目標。実装・作文・学校課題の効率化にも直結）
      </div>

      <div className="mt-8">
        {courses.map((course, index) => (
          <article
            key={course.title}
            className="grid gap-6 border-b border-border py-10 first:pt-0 last:border-b-0 sm:grid-cols-[auto_1fr] sm:gap-8"
          >
            <div className="flex sm:flex-col sm:items-center">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                <course.icon className="size-6" aria-hidden />
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-primary/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {course.title}
                </h3>
                <span className="text-sm text-muted-foreground">{course.subtitle}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                  対象: {course.level}
                </span>
                <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                  期間: {course.duration}
                </span>
                <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                  言語: {course.language}
                </span>
                {course.target ? (
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                    目標: {course.target}
                  </span>
                ) : null}
              </div>

              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {course.description}
              </p>

              <ul className="flex flex-col gap-1.5">
                {course.goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-2 text-sm font-medium">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
