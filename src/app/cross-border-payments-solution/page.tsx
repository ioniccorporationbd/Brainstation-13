import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import {
  ArrowLeftRight,
  BarChart3,
  CreditCard,
  Layers,
  ShieldCheck,
  Wallet,
  ArrowRight,
  CheckCircle2,
  CircleDot,
} from "lucide-react";

import GlobalFaqSection from "@/components/global/GlobalFaqSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Cross-Border Payments | Magnetic Solution Limited"),
    description: t("Cross-border payments platform engineering — multi-currency collections, payouts, FX, routing, reconciliation and compliance controls for money-movement businesses."),
  };
}

const strip = [
  { label: "Corridors", value: "Multi-country collections and payouts" },
  { label: "Currencies", value: "Multi-currency balances and FX quotes" },
  { label: "Ledger", value: "Double-entry trail per transaction" },
  { label: "Compliance", value: "Screening, limits and audit records" },
];

const features = [
  {
    icon: Wallet,
    title: "Collections",
    body: "Receive funds through bank transfer, cards, mobile wallets and agent networks, with the same reconciliation record regardless of channel.",
  },
  {
    icon: CreditCard,
    title: "Payouts & disbursements",
    body: "Batch or single payouts to bank accounts, wallets and cash-out points, with status tracking per beneficiary and retry handling.",
  },
  {
    icon: ArrowLeftRight,
    title: "FX & rate management",
    body: "Rate sources, markup rules and quote lifetimes are configured per corridor so pricing stays consistent with what operations agreed.",
  },
  {
    icon: Layers,
    title: "Routing & partner orchestration",
    body: "Route each transaction through the partner or rail that fits the corridor, amount and timing — with automatic failover.",
  },
  {
    icon: ShieldCheck,
    title: "Ledger & reconciliation",
    body: "Every movement posts to a double-entry ledger; settlement files, partner statements and internal balances reconcile per period.",
  },
  {
    icon: BarChart3,
    title: "Screening & limits",
    body: "Sanctions and PEP screening, velocity limits and tiered KYC sit in the flow rather than beside it.",
  },
];

const architectureBullets = [
  "Channel APIs for apps, agent portals and partner integrations, versioned and documented",
  "Payment orchestration service that owns state, retries, idempotency and partner failover",
  "Double-entry ledger with immutable postings and period-close reconciliation reports",
  "Connector layer per partner — bank, gateway, FX provider or payout network — isolated behind one interface",
  "Event stream for notifications, statements and downstream accounting or ERP posting",
];

const processSteps = [
  {
    title: "Corridor discovery",
    body: "Map corridors, partners, currencies, cut-off times and regulatory constraints before any code is written.",
  },
  {
    title: "Integration & certification",
    body: "Connect channels and partner APIs, then certify each corridor in a sandbox with real-world edge cases.",
  },
  {
    title: "Ledger & reconciliation setup",
    body: "Agree account structures, settlement timing and the reports operations will run every period.",
  },
  {
    title: "Pilot corridor",
    body: "Launch one corridor end to end with tight monitoring before widening the network.",
  },
  {
    title: "Rollout & support",
    body: "Add corridors one at a time, with runbooks, alerting and a support path for operations.",
  },
];

const integrations = [
  "Core banking systems",
  "Payment gateways and acquirers",
  "Mobile money and wallet networks",
  "Bank partners via API or host-to-host",
  "Sanctions and AML screening providers",
  "Accounting and ERP posting",
];

const compliance = [
  {
    title: "Screening in the flow",
    body: "KYC tiers, sanctions and PEP checks run as part of the transaction path, with documented decision records for each release decision.",
  },
  {
    title: "Transaction records",
    body: "Every state change is stored with timestamps, actor and partner response so an auditor can reconstruct the flow.",
  },
  {
    title: "Data protection",
    body: "Access is role-based and scoped per corridor; sensitive data is never exposed to the channel layer directly.",
  },
];

const faqs = [
  {
    question: "Can you work with the partners we already have?",
    answer:
      "Yes. The connector layer is designed so existing bank, gateway and payout partners are integrated behind one interface. We start from what you already run and add partners only where a corridor needs it.",
  },
  {
    question: "Do you replace our core banking system?",
    answer:
      "No. The platform sits alongside the core: it orchestrates payments, keeps its own ledger for reconciliation and posts back to the systems that need it.",
  },
  {
    question: "How is FX pricing controlled?",
    answer:
      "Rate sources, markup and quote validity are configuration. Operations can change them without a release, and each quote is stored with the rate used.",
  },
  {
    question: "How do you handle failed or reversed payouts?",
    answer:
      "Retries follow per-partner rules with idempotency keys. Reversals post compensating ledger entries so balances stay consistent, and every attempt is visible in the operations view.",
  },
  {
    question: "What does a first phase usually include?",
    answer:
      "One corridor, the channels needed for it, ledger and reconciliation, plus reporting for the period close. Additional corridors follow once the first is stable.",
  },
  {
    question: "How long does integration take?",
    answer:
      "It depends on partner certification, which is usually the long pole. We plan in phases and certify each partner before traffic is switched on.",
  },
];

export default async function Page() {
  const { t } = await getTranslator();
  return (
    <main>
      {/* Hero */}
      <section className="bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Fintech · Cross-border payments")}</span>

            <h1 className="mt-6 max-w-[640px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">{t("Move money across borders without losing visibility")}</h1>

            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">{t("Engineering for remittance and payout businesses: multi-currency collections, disbursements, FX handling, partner routing and a reconciliation trail that survives audit.")}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Schedule a call")}<ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Send a brief")}</Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1400&auto=format&fit=crop"
              alt={t("Currency notes and a globe on a desk representing cross-border money movement")}
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Strip */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-10">
        <dl className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {strip.map((item) => (
            <div key={item.label}>
              <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">
                {t(item.label)}
              </dt>
              <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Features */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Capabilities")}</p>
          <h2 className="mt-3 max-w-[760px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("What the platform covers")}</h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.7] text-[#55585e]">{t("Each capability is a working part of the product, not a slide. They share one data model, so trust, compliance and reporting do not have to be bolted on afterwards.")}</p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <item.icon size={21} strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                  {t(item.title)}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                  {t(item.body)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Architecture")}</p>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("How the platform is put together")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#55585e]">{t("The orchestration layer sits between your channels and the partners that actually move money. Everything below it is replaceable, so adding a corridor does not mean rewriting the product.")}</p>

            <ul className="mt-7 space-y-3.5">
              {architectureBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0 text-[#c91f28]"
                  />
                  <span className="text-[14.5px] leading-[1.65] text-[#55585e]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[#ececec] bg-white p-7 md:p-8">
            <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Built for operations teams, not just developers")}</h3>
            <p className="mt-3 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Support can see the exact state of a transaction, the partner response and the ledger impact from one screen. Failed payouts are triaged with reason codes instead of guesswork, and manual overrides are logged with the operator identity.")}</p>
            <div className="mt-6 rounded-lg bg-[#fafafa] p-4">
              <p className="flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">
                <CircleDot size={14} />{t("Delivery note")}</p>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-[#55585e]">{t("Architecture decisions are documented with the trade-offs they carry, so your team can maintain the platform after hand-over.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Delivery process")}</p>
          <h2 className="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("How an engagement runs")}</h2>

          <ol className="mt-10 space-y-4">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50 md:flex-row md:items-start md:gap-6 md:p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="md:flex md:flex-1 md:items-start md:gap-8">
                  <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">
                    {t(step.title)}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">
                    {t(step.body)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Integrations + compliance */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Integrations")}</p>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Connects to what you already run")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#55585e]">{t("Existing systems stay in place. Connectors are versioned and certified before traffic is switched on, so an upgrade on either side is a planned event rather than an outage.")}</p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {integrations.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-[#ececec] bg-white px-4 py-3.5"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />
                  <span className="text-[13.5px] font-semibold text-black">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Controls")}</p>
            {compliance.map((item) => (
              <article
                key={item.title}
                className="flex gap-5 rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <ShieldCheck size={20} strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="text-[16px] font-bold tracking-[-0.01em] text-black">
                    {t(item.title)}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e]">
                    {t(item.body)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GlobalFaqSection
        eyebrow="FAQ"
        title={t("Questions we hear before we start")}
        subtitle={t("Scope, integration and controls — the things teams ask first.")}
        items={faqs}
        ctaLabel="Schedule a call"
        ctaHref="/schedule-a-call"
      />

      {/* CTA */}
      <section className="bg-white px-6 pb-[72px] pt-[8px] md:pb-[96px]">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">{t("Planning a cross-border product?")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">{t("Share the corridors, partners and volumes you are targeting. We will come back with an architecture view and a phased integration plan.")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Schedule a call")}<ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Contact us")}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
