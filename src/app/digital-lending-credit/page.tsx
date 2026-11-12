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
    title: t("Digital Lending & Credit | Magnetic Solution Limited"),
    description: t("Digital lending platform engineering — origination, credit decisioning, disbursement, repayment schedules and collections with an auditable trail."),
  };
}

const strip = [
  { label: "Origination", value: "One application, many products" },
  { label: "Decisioning", value: "Rules plus scoring inputs" },
  { label: "Servicing", value: "Schedules, accruals, collections" },
  { label: "Controls", value: "Approvals and audit records" },
];

const features = [
  {
    icon: Wallet,
    title: "Loan origination",
    body: "Applications across channels with document capture, deduplication and a single status trail from submission to disbursement.",
  },
  {
    icon: CreditCard,
    title: "Credit decisioning",
    body: "Policy rules and scoring inputs combined into an explainable decision, with the evidence retained for every application.",
  },
  {
    icon: ArrowLeftRight,
    title: "Disbursement control",
    body: "Approval chains, limit checks and disbursement instructions posted to the ledger with a full reconciliation trail.",
  },
  {
    icon: Layers,
    title: "Repayment & schedules",
    body: "Amortisation, interest accrual and due-date generation that reconcile exactly, including partial and early payments.",
  },
  {
    icon: ShieldCheck,
    title: "Collections workflow",
    body: "Delinquency buckets, reminder automation and case assignment so the collections team works from one queue.",
  },
  {
    icon: BarChart3,
    title: "Portfolio reporting",
    body: "Exposure, ageing and product performance reporting generated from the same data that drives servicing.",
  },
];

const architectureBullets = [
  "Origination service capturing applications, documents and consent records",
  "Decisioning engine evaluating policy rules with scoring and bureau adapters",
  "Loan ledger posting disbursements, accruals and repayments as immutable entries",
  "Scheduler generating due dates, reminders and delinquency transitions",
  "Reporting layer building portfolio and regulatory extracts from the ledger",
];

const processSteps = [
  {
    title: "Product modelling",
    body: "Define the loan products, rates, fees, schedules and policy rules that will run on the platform.",
  },
  {
    title: "Integration",
    body: "Connect bureau, identity, payments and accounting systems, and certify each adapter against real cases.",
  },
  {
    title: "Origination & decisioning",
    body: "Build the application flow and the decision engine with the policy team, then test against historical decisions.",
  },
  {
    title: "Servicing & collections",
    body: "Configure schedules, accruals, reminders and the collections queue before the first disbursement.",
  },
  {
    title: "Pilot & scale",
    body: "Run a limited product or segment first, monitor, then widen the portfolio on the same platform.",
  },
];

const integrations = [
  "Credit bureaus",
  "Identity and eKYC providers",
  "Payment rails and disbursement channels",
  "Core banking or loan ledger systems",
  "Accounting and ERP posting",
  "SMS, email and in-app notifications",
];

const compliance = [
  {
    title: "Responsible lending",
    body: "Policy rules, affordability checks and cooling-off periods are enforced by the platform, with the inputs stored per application.",
  },
  {
    title: "Auditability",
    body: "Approval chains, overrides and manual adjustments are attributed and retained, so any disbursement can be reconstructed.",
  },
  {
    title: "Data protection",
    body: "Applicant documents and personal data are scoped per role and per case, with retention rules that match regulatory expectations.",
  },
];

const faqs = [
  {
    question: "Can you work with our existing credit policy?",
    answer:
      "Yes. The policy is expressed as rules in the decisioning engine. We start from your current policy, document each rule, and test it against historical applications before go-live.",
  },
  {
    question: "How are interest and schedules calculated?",
    answer:
      "In integer minor units with explicit rounding at agreed points. Schedules, statements and ledger postings all derive from the same calculation, so they reconcile exactly.",
  },
  {
    question: "Do you support partial and early repayment?",
    answer:
      "Yes. Partial payments, early settlement and re-amortisation post compensating ledger entries, and the remaining schedule is regenerated from the recorded state.",
  },
  {
    question: "What happens to applications we reject?",
    answer:
      "The decision, its inputs and the policy version are retained. That record is what makes a rejection defensible if it is ever questioned.",
  },
  {
    question: "Can collections work from the same system?",
    answer:
      "Yes. Delinquency transitions, reminders and case assignment are part of servicing, so collections sees the same data as the ledger.",
  },
  {
    question: "How is a pilot usually scoped?",
    answer:
      "One product or one segment, a fixed policy version and a defined observation window. Widen only when the numbers and the process both hold.",
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
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Fintech · Lending & credit")}</span>

            <h1 className="mt-6 max-w-[640px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">{t("Lending journeys that hold up to audit")}</h1>

            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">{t("Origination, decisioning and servicing in one flow: applications captured once, decisions explainable, disbursements controlled and repayment schedules that reconcile to the last unit.")}</p>

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
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop"
              alt={t("Financial documents, calculator and pen on a desk")}
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
            <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("A pipeline you can inspect at any stage")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#55585e]">{t("Each stage — capture, decision, disbursement, servicing — owns its data and hands over through an explicit contract. That makes the journey explainable per application and testable per stage.")}</p>

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
            <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Explainable decisions, exact numbers")}</h3>
            <p className="mt-3 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Every decision records which policy version ran, which inputs it saw and what it returned. Money is stored in integer minor units with explicit rounding, so schedules, statements and reports agree to the last unit instead of drifting by fractions.")}</p>
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
              <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">{t("Building or replacing a lending platform?")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">{t("Share the products, policy scope and integrations you need. We will propose a phased plan from origination through servicing.")}</p>
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
