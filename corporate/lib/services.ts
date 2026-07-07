// サービス一覧の単一ソース。href（各サービスLPの公開URL）もここだけで管理する。

/** components/logos.tsx の <ServiceLogo> と対応するロゴID */
export type ServiceLogoId =
  | 'claude-code'
  | 'mvp'
  | 'marketing'
  | 'design'
  | 'articles'

export interface Service {
  logo: ServiceLogoId
  name: string
  en: string
  /** トップページのダイジェスト用・1行タグライン */
  desc: string
  /** /service ページ用の詳細説明（顧客向け・2〜3文） */
  detail: string
  tags: string[]
  href: string
}

export const SERVICES: Service[] = [
  {
    logo: 'claude-code',
    name: 'Claude Code導入支援',
    en: 'AI Coding Enablement',
    desc: 'Claude Codeの導入・設定を代行し、開発組織のAI活用を立ち上げる',
    detail:
      'Claude Codeの環境構築からサブエージェント設計、チームへの定着までを一気通貫でご支援します。導入して終わりではなく、貴社の開発フローに合わせた運用ルールづくりまで伴走。開発組織のAI活用を、最短距離で軌道に乗せます。',
    tags: ['導入支援'],
    href: 'https://claude-code-service-lp.vercel.app/',
  },
  {
    logo: 'mvp',
    name: 'MVP相見積もりサービス',
    en: 'MVP & Cost Reduction',
    desc: '動くMVPを無料で開発し、相見積もりで本開発費を適正化する',
    detail:
      'まず動くMVPを無料で開発し、実物を確かめてから本開発を判断できます。あわせて複数社の見積もりを比較し、開発費を適正な水準に。成果が出てはじめて費用が発生する、成果報酬型の料金設計です。',
    tags: ['成果報酬型'],
    href: 'https://mvp-service-lp.vercel.app/',
  },
  {
    logo: 'marketing',
    name: 'コピーできる集客',
    en: 'Growth Marketing',
    desc: 'AI制作のLPとフォーム営業で、貴社に響く訴求を見つけるリード獲得支援',
    detail:
      'AIを活用してLPと訴求パターンをスピーディに用意し、フォーム営業で反応を確かめながら、貴社に響く売り方を見つけます。効果のあった訴求は、そのまま営業資料や広告にも展開可能。BtoBの新規リード獲得を、小さく速く立ち上げます。',
    tags: ['BtoBリード獲得'],
    href: 'https://marketing-service-lp-xi.vercel.app/',
  },
  {
    logo: 'design',
    name: '定額制デザインサービス',
    en: 'Design Subscription',
    desc: '月額定額でバナーからLP・営業資料までデザインを依頼し放題',
    detail:
      '月額定額で、バナー・LP・営業資料などのデザインを依頼し放題。都度の見積もりや発注のやり取りが不要になり、思いついたその日に依頼できます。デザイナーを採用するより速く、単発の外注より柔軟な選択肢です。',
    tags: ['月額定額'],
    href: 'https://design-service-lp.vercel.app/',
  },
  {
    logo: 'articles',
    name: 'SEO・AIO記事作成代行',
    en: 'Content Studio',
    desc: 'AI×人のハイブリッドで、検索とAI検索の両方に見つかる記事を制作',
    detail:
      'AIによる執筆と、採点・ファクトチェックを通した品質管理を組み合わせ、品質と本数を両立した記事制作を月額制でご提供します。従来の検索エンジンに加えて、AI検索（AIO）からの流入も見据えた設計。オウンドメディアの立ち上げから運用まで、まとめてお任せいただけます。',
    tags: ['月額制'],
    href: 'https://article-service-lp.vercel.app/',
  },
]
