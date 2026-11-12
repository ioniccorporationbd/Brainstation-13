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
    title: t("Insurance 360 | Magnetic Solution Limited"),
    description: t("Insurance platform engineering — policy administration, underwriting workflow, claims processing, distribution portals and renewals on one connected system."),
  };
}

const strip = [
  { label: "Policies", value: "One record per policy" },
  { label: "Distribution", value: "Agents, brokers, direct" },
  { label: "Claims", value: "Workflow with documents" },
  { label: "Controls", value: "Approvals and audit trail" },
];

const features = [
  {
    icon: Wallet,
    title: "Policy administration",
    body: "Quotation to issuance to endorsement on one record, with versions kept so history is never overwritten.",
  },
  {
    icon: CreditCard,
    title: "Underwriting workflow",
    body: "Risk questions, referral queues and approval thresholds so underwriters see the cases that need judgement.",
  },
  {
    icon: ArrowLeftRight,
    title: "Claims processing",
    body: "Intimation, assessment, documents and settlement in a workflow with statuses customers and staff can both follow.",
  },
  {
    icon: Layers,
    title: "Agent & broker portal",
    body: "Distribution partners submit and track business from their own login, within the products they are appointed for.",
  },
  {
    icon: ShieldCheck,
    title: "Renewals & collections",
    body: "Renewal generation, grace periods and premium collection tracked against each policy's schedule.",
  },
  {
    icon: BarChart3,
    title: "Reporting & compliance extracts",
    body: "Regulatory and management reporting generated from the same records operations work from.",
  },
];

const architectureBullets = [
  "Policy core holding products, versions, endorsements and document links",
  "Workflow engine for underwriting referrals, claims stages and approvals",
  "Partner portal layer for agents and brokers with scoped visibility",
  "Payment and accounting connectors for premium collection and settlement",
  "Document store and audit pipeline retaining what was issued and by whom",
];

const processSteps = [
  {
    title: "Product configuration",
    body: "Model the products, wordings, rating inputs and approval thresholds in the platform.",
  },
  {
    title: "Migration or greenfield",
    body: "Import the existing book or start fresh — either way, policies, documents and history land in one place.",
  },
  {
    title: "Distribution & servicing",
    body: "Roll out the partner portal and the servicing console for the first product line.",
  },
  {
    title: "Claims workflow",
    body: "Configure intimation, assessment and settlement stages with the authority limits agreed.",
  },
  {
    title: "Reporting & support",
    body: "Wire the extracts and runbooks, then monitor the first renewal and claim cycles closely.",
  },
];

const integrations = [
  "Payment gateways and premium collection",
  "Accounting and general ledger posting",
  "Document management and e-signature",
  "Identity verification",
  "SMS and email notification",
  "Regulatory reporting extracts",
];

const compliance = [
  {
    title: "Documented authority",
    body: "Approval limits for underwriting and claims are configuration with maker-checker, and every override is attributed.",
  },
  {
    title: "Retention",
    body: "Policy, endorsement and claim records are retained with versions for the periods the regulator requires.",
  },
  {
    title: "Data protection",
    body: "Partner and staff access is scoped per product line and per role, with access changes recorded.",
  },
];

const faqs = [
  {
    question: "Can we keep our existing product wordings?",
    answer:
      "Yes. Wordings, rating inputs and approval rules are modelled as configuration, so the products you already sell do not have to be redesigned.",
  },
  {
    question: "Do agents and brokers get their own access?",
    answer:
      "Yes. The partner portal gives them scoped visibility of their own business, limited to the products they are appointed for.",
  },
  {
    question: "How are claims and policies connected?",
    answer:
      "Claims attach to the policy record, so the claim sees exactly the cover and endorsements in force on the incident date.",
  },
  {
    question: "What about migrating an existing book?",
    answer:
      "Migration is its own phase: mapping, dry runs, reconciliation of in-force policies and documents, then cut-over with a rollback window.",
  },
  {
    question: "How is premium collection tracked?",
    answer:
      "Against each policy's schedule, with grace periods and lapse rules applied by the platform and posted to accounting.",
  },
  {
    question: "How do we start without disrupting the current system?",
    answer:
      "One product line first, running in parallel where necessary, before retiring anything from the old system.",
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
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Fintech · Insurance")}</span>

            <h1 className="mt-6 max-w-[640px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">{t("Insurance operations on one connected platform")}</h1>

            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">{t("Policy administration, underwriting, claims and distribution in a single system of record — so a policy, its documents and its claims history are never in three different places.")}</p>

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
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop"
              alt={t("Insurance documents and a pen on a desk")}
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
            <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("One record, many workflows")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#55585e]">{t("The policy is the anchor. Underwriting, claims, distribution and finance attach to it, which means reconciliation problems between systems largely stop existing.")}</p>

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
            <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("For teams examined on documentation")}</h3>
            <p className="mt-3 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Every issued document, endorsement and claim decision is retained with its version and author. When a regulator or an internal auditor asks which wording applied on a given date, the answer comes from the record, not from memory.")}</p>
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
              <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">{t("Modernising insurance operations?")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">{t("Share the product lines, the existing systems and the reporting obligations. We will propose a migration and rollout sequence.")}</p>
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
