import Link from "next/link";
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

function FeatureCard({ feature }: { feature: StdFeature }) {
  const Icon = iconMap[feature.icon] ?? Check;
  const inner = (
    <>
      <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#eef6fc] text-[#3f93cf] transition duration-300 group-hover:bg-[#fff3dd] group-hover:text-[#ffab2e]">
        <Icon size={26} strokeWidth={1.7} />
      </div>
      <h3 className="text-[21px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#050b18]">
        {feature.title}
      </h3>
      <p className="mt-3 text-[16px] font-normal leading-[1.55] text-[#5a6b7d]">
        {feature.description}
      </p>
      {feature.href ? (
        <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#2d8fca] transition-colors group-hover:text-[#ffab2e]">
          Learn more <ArrowRight size={16} strokeWidth={2.2} />
        </span>
      ) : null}
    </>
  );

  const cardClass =
    "group flex h-full flex-col rounded-[14px] border border-[#e6edf5] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#cfe0ef] hover:shadow-[0_22px_50px_rgba(17,30,64,0.10)]";

  if (feature.href) {
    return (
      <Link href={feature.href} className={cardClass}>
        {inner}
      </Link>
    );
  }
  return <article className={cardClass}>{inner}</article>;
}

export default function StandardPage({ data }: { data: PageData }) {
  const { eyebrow, title, description, intro, features, featuresTitle, stats, bullets, cta } = data;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#111E40] px-6 pb-[90px] pt-[128px] text-white">
        <div className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-[#2d8fca]/25 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-[#4fa0d1]/20 blur-[110px]" />
        <div className="relative mx-auto max-w-[1080px] text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[13px] font-bold uppercase tracking-[0.14em] text-[#9fd0ef]">
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
              className="inline-flex items-center gap-2 rounded-full bg-[#ffab2e] px-8 py-4 text-[15px] font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffc15a] hover:shadow-[0_16px_38px_rgba(255,171,46,0.35)]"
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
                className="mt-4 text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-[#42637a] md:text-[19px] first:mt-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {/* Features */}
      {features && features.length > 0 ? (
        <section className="bg-[#f7fafd] px-6 py-[92px]">
          <div className="mx-auto max-w-[1180px]">
            <div className="mx-auto max-w-[760px] text-center">
              <h2 className="text-[32px] font-medium leading-[1.12] tracking-[-0.05em] text-[#050b18] md:text-[42px]">
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
        <section className="bg-[#111E40]">
          <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-y-10 px-6 py-[70px] md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[44px] font-light leading-none tracking-[-0.05em] text-[#4fa0d1] md:text-[58px]">
                  {stat.value}
                </p>
                <p className="mt-4 text-[14px] font-medium leading-[1.4] text-white/70 md:text-[16px]">
                  {stat.label}
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
            <h2 className="text-center text-[30px] font-medium leading-[1.14] tracking-[-0.05em] text-[#050b18] md:text-[40px]">
              {bullets.title}
            </h2>
            <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-5 sm:grid-cols-2">
              {bullets.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eef6fc] text-[#3f93cf]">
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
          <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[18px] bg-[#111E40] px-8 py-[70px] text-center md:px-16">
            <h2 className="mx-auto max-w-[780px] text-[30px] font-medium leading-[1.14] tracking-[-0.05em] text-white md:text-[44px]">
              {cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[660px] text-[17px] font-medium leading-[1.5] text-white/70 md:text-[19px]">
              {cta.description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={cta.primaryHref ?? "/schedule-a-call"}
                className="inline-flex items-center gap-2 rounded-full bg-[#ffab2e] px-8 py-4 text-[15px] font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffc15a] hover:shadow-[0_16px_38px_rgba(255,171,46,0.35)]"
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
