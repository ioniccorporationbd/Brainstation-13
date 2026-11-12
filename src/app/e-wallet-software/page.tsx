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
    title: t("E-Wallet Software | Magnetic Solution Limited"),
    description: t("E-wallet and mobile wallet platform engineering — onboarding, wallet ledger, P2P and merchant payments, agent networks, limits and back-office operations."),
  };
}

const strip = [
  { label: "Channels", value: "Customer app, agents, merchants" },
  { label: "Ledger", value: "Wallet balances as entries" },
  { label: "Limits", value: "Tiered KYC and velocity caps" },
  { label: "Operations", value: "Back-office and reconciliation" },
];

const features = [
  {
    icon: Wallet,
    title: "Customer onboarding",
    body: "Sign-up with identity verification and tiered KYC, opening a wallet only once the customer can transact within their tier.",
  },
  {
    icon: CreditCard,
    title: "Wallet ledger",
    body: "Balances are the sum of immutable entries, not a mutable field — so every correction is traceable and every statement reconciles.",
  },
  {
    icon: ArrowLeftRight,
    title: "P2P & merchant payments",
    body: "Transfers between wallets, merchant collection and QR-based payment with receipts both sides can verify.",
  },
  {
    icon: Layers,
    title: "Cash-in, cash-out & agents",
    body: "Agent onboarding, float management and cash operations with a reconciliation view per agent.",
  },
  {
    icon: ShieldCheck,
    title: "Limits & tiering",
    body: "Per-tier transaction limits, velocity checks and upgrade paths configured by operations without a release.",
  },
  {
    icon: BarChart3,
    title: "Back-office & support",
    body: "Search a customer or a transaction, see the full state, act within permissions and leave an audit record.",
  },
];

const architectureBullets = [
  "Customer and agent channel apps consuming a versioned API",
  "Wallet service enforcing limits, tiers and idempotent posting",
  "Double-entry ledger with immutable entries and period-close reconciliation",
  "Billers and top-up connectors for utilities, airtime and partner services",
  "Notification, statement and reporting pipelines fed from ledger events",
];

const processSteps = [
  {
    title: "Product & tier design",
    body: "Agree wallet products, KYC tiers, limits and fee rules with the business and compliance teams.",
  },
  {
    title: "Ledger & integration",
    body: "Build the ledger, channel APIs, biller and bank connectors, and certify money in and money out.",
  },
  {
    title: "Agent or merchant rollout",
    body: "Onboard the first agent or merchant cohort with float rules and reconciliation reports in place.",
  },
  {
    title: "Pilot & monitoring",
    body: "Run limited traffic with alerting on failed postings, limit breaches and reconciliation gaps.",
  },
  {
    title: "Scale",
    body: "Widen the network, add billers, and keep the same ledger and controls underneath.",
  },
];

const integrations = [
  "Bank partners and settlement accounts",
  "Mobile money and card rails",
  "Biller and utility payment aggregators",
  "Airtime and top-up providers",
  "KYC and identity verification",
  "SMS, push and email providers",
];

const compliance = [
  {
    title: "AML monitoring",
    body: "Rule-based monitoring on velocity, structuring and unusual patterns, with case records kept for review.",
  },
  {
    title: "Limits & KYC tiers",
    body: "Tier definitions, upgrade evidence and enforced limits are configuration the regulator's questions map to directly.",
  },
  {
    title: "Data protection",
    body: "Customer data access is scoped per role and per case, with retention aligned to the operating licence.",
  },
];

const faqs = [
  {
    question: "Is the wallet balance a field in a database?",
    answer:
      "No. The balance is derived from immutable ledger entries. Reading it is fast because it is projected, but the authority is always the entry history.",
  },
  {
    question: "Can we support agents and merchants in the same platform?",
    answer:
      "Yes. Both are participants with their own onboarding, limits and reconciliation views on top of the same ledger.",
  },
  {
    question: "How are bill payments and top-ups handled?",
    answer:
      "Through connectors: the wallet posts a debit, the connector confirms with the biller, and either the confirmation or the failure posts the matching entry.",
  },
  {
    question: "What happens if a partner times out mid-transaction?",
    answer:
      "Postings are idempotent and reconciled on status. The transaction is resolved to exactly one outcome — never a debit without a credit.",
  },
  {
    question: "How do we migrate from an existing wallet?",
    answer:
      "As a planned phase: balance extraction, entry-level reconciliation against the old system, dry runs and a cut-over with a rollback window.",
  },
  {
    question: "How are limits changed without a release?",
    answer:
      "Limits and tiers are configuration with an approval trail, so changes are immediate and still attributable to the person who made them.",
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
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Fintech · E-wallet")}</span>

            <h1 className="mt-6 max-w-[640px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">{t("A wallet platform built for scale and trust")}</h1>

            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">{t("Customer wallets, agent or merchant payments and a ledger that reconciles per period — with the limits, tiering and monitoring a mobile money operation is examined on.")}</p>

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
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop"
              alt={t("Person paying with a mobile wallet at a counter")}
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
                {t(item.value)}
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
            <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Ledger first, everything else around it")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#55585e]">{t("The wallet ledger is the source of truth. Channels, agents and partner integrations all move money by posting entries through one service, which is what keeps balances and statements consistent.")}</p>

            <ul className="mt-7 space-y-3.5">
              {architectureBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0 text-[#c91f28]"
                  />
                  <span className="text-[14.5px] leading-[1.65] text-[#55585e]">
                    {t(bullet)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[#ececec] bg-white p-7 md:p-8">
            <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Operations you can defend")}</h3>
            <p className="mt-3 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Support can resolve a disputed transaction from one screen: entries, device, channel, partner response and the operator who acted. Float and settlement positions are visible per agent, so reconciling the network is routine rather than month-end panic.")}</p>
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
                    {t(item)}
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
              <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">{t("Launching or replatforming a wallet?")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">{t("Tell us the licence scope, corridors and agent model. We will propose the ledger, integrations and rollout sequence.")}</p>
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
