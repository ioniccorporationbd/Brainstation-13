import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import {
  ArrowRight,
  Check,
  Layers,
  Cpu,
  Cloud,
  ShieldCheck,
  Database,
  Sparkles,
  Workflow,
  Gauge,
  Building2,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Banknote,
  Car,
  Rocket,
  Factory,
  ShoppingBag,
  CreditCard,
  Truck,
  BarChart3,
  Smartphone,
  Repeat,
  BookOpen,
  Monitor,
  Users,
  Award,
  Server,
  GitBranch,
  Lock,
  Handshake,
  Target,
  TrendingUp,
  Activity,
  Brain,
  Send,
  PenTool,
  Clock,
  Video,
  Eye,
  Bot,
  MessagesSquare,
  Quote,
  Star,
  Plug,
  Boxes,
  Globe,
  Network,
  Zap,
  Settings,
  Laptop,
  PieChart,
  LineChart,
  Landmark,
  Wallet,
  Headphones,
  Globe2,
  Fingerprint,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  cpu: Cpu,
  cloud: Cloud,
  shield: ShieldCheck,
  database: Database,
  sparkles: Sparkles,
  workflow: Workflow,
  gauge: Gauge,
  building: Building2,
  heart: HeartPulse,
  cart: ShoppingCart,
  graduation: GraduationCap,
  banknote: Banknote,
  car: Car,
  rocket: Rocket,
  factory: Factory,
  bag: ShoppingBag,
  card: CreditCard,
  truck: Truck,
  chart: BarChart3,
  phone: Smartphone,
  repeat: Repeat,
  book: BookOpen,
  monitor: Monitor,
  users: Users,
  award: Award,
  server: Server,
  git: GitBranch,
  lock: Lock,
  handshake: Handshake,
  target: Target,
  trending: TrendingUp,
  activity: Activity,
  brain: Brain,
  send: Send,
  pen: PenTool,
  clock: Clock,
  video: Video,
  eye: Eye,
  bot: Bot,
  chat: MessagesSquare,
  quote: Quote,
  star: Star,
  plug: Plug,
  boxes: Boxes,
  globe: Globe,
  network: Network,
  zap: Zap,
  settings: Settings,
  laptop: Laptop,
  pie: PieChart,
  line: LineChart,
  landmark: Landmark,
  wallet: Wallet,
  headphones: Headphones,
  globe2: Globe2,
  fingerprint: Fingerprint,
};

export type StdFeature = {
  icon: string;
  title: string;
  description: string;
  href?: string;
};

export type StdStat = { value: string; label: string };

export type PageData = {
  eyebrow: string;
  title: string;
  description: string;
  intro?: string[];
  featuresTitle?: string;
  features?: StdFeature[];
  stats?: StdStat[];
  bullets?: { title: string; items: string[] };
  cta?: {
    title: string;
    description: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

async function FeatureCard({ feature }: { feature: StdFeature }) {
  const { t } = await getTranslator();
  const Icon = iconMap[feature.icon] ?? Check;
  const inner = (
    <>
      <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#ffffff] text-[#c91f28] transition duration-300 group-hover:bg-[#fdecec] group-hover:text-[#c91f28]">
        <Icon size={26} strokeWidth={1.7} />
      </div>
      <h3 className="text-[21px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#0a0a0a]">
        {t(feature.title)}
      </h3>
      <p className="mt-3 text-[16px] font-normal leading-[1.55] text-[#565656]">
        {t(feature.description)}
      </p>
      {feature.href ? (
        <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#c91f28] transition-colors group-hover:text-[#c91f28]">{t("Learn more")}<ArrowRight size={16} strokeWidth={2.2} />
        </span>
      ) : null}
    </>
  );

  const cardClass =
    "group flex h-full flex-col rounded-[14px] border border-[#ececec] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#ececec] hover:shadow-[0_22px_50px_rgba(0,0,0,0.10)]";

  if (feature.href) {
    return (
      <Link href={feature.href} className={cardClass}>
        {inner}
      </Link>
    );
  }
  return <article className={cardClass}>{inner}</article>;
}

export default async function StandardPage({ data }: { data: PageData }) {
  const { t } = await getTranslator();
  const { eyebrow, title, description, intro, features, featuresTitle, stats, bullets, cta } = data;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0a0a] px-6 pb-[90px] pt-[128px] text-white">
        <div className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-[#c91f28]/25 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-[#c91f28]/20 blur-[110px]" />
        <div className="relative mx-auto max-w-[1080px] text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[13px] font-bold uppercase tracking-[0.14em] text-[#f87171]">
            {eyebrow}
          </span>
          <h1 className="mx-auto mt-7 max-w-[920px] text-[38px] font-medium leading-[1.08] tracking-[-0.055em] md:text-[60px]">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-[760px] text-[17px] font-normal leading-[1.55] text-white/70 md:text-[21px]">
            {description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={cta?.primaryHref ?? "/schedule-a-call"}
              className="inline-flex items-center gap-2 rounded-full bg-[#c91f28] px-8 py-4 text-[15px] font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#a71920] hover:shadow-[0_16px_38px_rgba(201,31,40,0.30)]"
            >
              {cta?.primaryLabel ?? "Book a discovery call"}
              <ArrowRight size={18} strokeWidth={2.2} />
            </Link>
            <Link
              href={cta?.secondaryHref ?? "/case-studies"}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:border-white/50 hover:bg-white/10"
            >
              {cta?.secondaryLabel ?? "See our work"}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      {intro && intro.length > 0 ? (
        <section className="px-6 py-[80px]">
          <div className="mx-auto max-w-[900px] text-center">
            {intro.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-[#565656] md:text-[19px] first:mt-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {/* Features */}
      {features && features.length > 0 ? (
        <section className="bg-[#ffffff] px-6 py-[92px]">
          <div className="mx-auto max-w-[1180px]">
            <div className="mx-auto max-w-[760px] text-center">
              <h2 className="text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
                {featuresTitle ?? "What you get"}
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Stats */}
      {stats && stats.length > 0 ? (
        <section className="bg-[#0a0a0a]">
          <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-y-10 px-6 py-[70px] md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[44px] font-light leading-none tracking-[-0.02em] text-[#c91f28] md:text-[58px]">
                  {stat.value}
                </p>
                <p className="mt-4 text-[14px] font-medium leading-[1.4] text-white/70 md:text-[16px]">
                  {t(stat.label)}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Bullets */}
      {bullets && bullets.items.length > 0 ? (
        <section className="px-6 py-[92px]">
          <div className="mx-auto max-w-[980px]">
            <h2 className="text-center text-[30px] font-medium leading-[1.14] tracking-[-0.02em] text-[#0a0a0a] md:text-[40px]">
              {t(bullets.title)}
            </h2>
            <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-5 sm:grid-cols-2">
              {bullets.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ffffff] text-[#c91f28]">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-[16px] font-medium leading-[1.55] text-[#374151]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      {cta ? (
        <section className="bg-white px-6 pb-[110px] pt-[10px]">
          <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[18px] bg-[#0a0a0a] px-8 py-[70px] text-center md:px-16">
            <h2 className="mx-auto max-w-[780px] text-[30px] font-medium leading-[1.14] tracking-[-0.02em] text-white md:text-[44px]">
              {t(cta.title)}
            </h2>
            <p className="mx-auto mt-5 max-w-[660px] text-[17px] font-medium leading-[1.5] text-white/70 md:text-[19px]">
              {t(cta.description)}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={cta.primaryHref ?? "/schedule-a-call"}
                className="inline-flex items-center gap-2 rounded-full bg-[#c91f28] px-8 py-4 text-[15px] font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#a71920] hover:shadow-[0_16px_38px_rgba(201,31,40,0.30)]"
              >
                {cta.primaryLabel ?? "Book a discovery call"}
                <ArrowRight size={18} strokeWidth={2.2} />
              </Link>
              {cta.secondaryLabel && cta.secondaryHref ? (
                <Link
                  href={cta.secondaryHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:border-white/50 hover:bg-white/10"
                >
                  {cta.secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
