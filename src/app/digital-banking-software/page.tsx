import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Digital Banking Software | Magnetic Solution Limited",
  description:
    "Digital banking platform engineering — customer onboarding, payments, cards, back-office operations and core banking integration for banks and challengers.",
};

const strip = [
  { label: "Channels", value: "Mobile, web and back-office" },
  { label: "Core", value: "Adapter-based integration" },
  { label: "Controls", value: "Role-based access, full audit" },
  { label: "Delivery", value: "Phased rollout per product" },
];

const features = [
  {
    icon: Wallet,
    title: "Onboarding & KYC",
    body: "Self-service account opening with identity verification, document capture and tiered KYC limits that operations can review.",
  },
  {
    icon: CreditCard,
    title: "Payments & transfers",
    body: "Internal transfers, scheduled payments and external rails behind one API, with statuses and receipts customers can trust.",
  },
  {
    icon: ArrowLeftRight,
    title: "Cards & limits",
    body: "Card issuance flow, spend limits, block/unblock and dispute handling exposed to both the app and the operations console.",
  },
  {
    icon: Layers,
    title: "Core banking integration",
    body: "Adapters isolate your core host — accounts, balances and postings — so the channel layer is not rewritten when the core changes.",
  },
  {
    icon: ShieldCheck,
    title: "Operations console",
    body: "One back-office for customer service: search a customer, see their products, act within permissions, and leave an audit record.",
  },
  {
    icon: BarChart3,
    title: "Reporting & statements",
    body: "Statements, transaction history exports and regulatory extracts generated from the same ledger the customers see.",
  },
];

const architectureBullets = [
  "Channel applications (mobile, web, back office) consuming a versioned API",
  "Service layer for limits, fees, product rules and authorisation decisions",
  "Core adapters per host system, exposing accounts, balances and postings through one contract",
  "Event backbone for notifications, statements and analytics without touching customer latency",
  "Audit and log pipeline capturing who did what, from which channel, with what result",
];

const processSteps = [
  {
    title: "Assessment",
    body: "Review the product set, core host, channels and regulatory constraints to define the rollout order.",
  },
  {
    title: "Core integration",
    body: "Build and certify the adapters against the core host, covering balances, postings and reversal cases.",
  },
  {
    title: "Channel rollout",
    body: "Release the customer app and the operations console behind feature flags, product by product.",
  },
  {
    title: "Controls & audit",
    body: "Wire limits, approvals and reporting so operations and audit have what they need from day one.",
  },
  {
    title: "Support & evolution",
    body: "Runbooks, monitoring and a route for new products on the same platform.",
  },
];

const integrations = [
  "Core banking hosts",
  "Payment rails and switches",
  "Card management and processing",
  "KYC and identity verification",
  "Credit bureau and scoring engines",
  "SMS, email and push providers",
];

const compliance = [
  {
    title: "Access & segregation",
    body: "Role-based permissions, maker-checker on sensitive actions and full attribution of every change.",
  },
  {
    title: "Data handling",
    body: "Encryption in transit and at rest, scoped access per channel, and retention rules aligned with the regulator's expectations.",
  },
  {
    title: "Auditability",
    body: "Immutable audit records for privileged operations and configuration changes, queryable for internal audit.",
  },
];

const faqs = [
  {
    question: "Do you replace the core banking system?",
    answer:
      "Not necessarily. The platform is built to run on top of an existing core through adapters. Replacing the core is a separate decision that does not have to block the channel rollout.",
  },
  {
    question: "Can we launch one product first?",
    answer:
      "Yes — and it is usually the right plan. Savings, cards or payments can go live first, then additional products attach to the same customer and the same console.",
  },
  {
    question: "How do you handle approvals and limits?",
    answer:
      "As configuration: thresholds, approvers and limits are defined per product and per role, with every override recorded and attributable.",
  },
  {
    question: "What about regulatory reporting?",
    answer:
      "Extracts are generated from the same ledger the channels use, so reported numbers and customer-visible numbers cannot drift apart.",
  },
  {
    question: "How do we migrate existing customers?",
    answer:
      "Migration is planned as its own phase: data mapping, dry runs, reconciliation against the core and a cut-over plan with rollback.",
  },
  {
    question: "Who owns the code at the end?",
    answer:
      "You do. Delivery includes documentation, environment setup and knowledge transfer so your team can operate and extend the platform.",
  },
];

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
              Fintech · Digital banking
            </span>

            <h1 className="mt-6 max-w-[640px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">
              A digital banking platform customers can rely on
            </h1>

            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">
              Channels, operations console and core integration built as one
              product — customer onboarding, payments, cards and limits, with
              the audit trail a regulated bank is expected to keep.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                Schedule a call
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                Send a brief
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop"
              alt="Person using a banking app on a smartphone"
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
                {item.label}
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
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Capabilities
          </p>
          <h2 className="mt-3 max-w-[760px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            What the platform covers
          </h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.7] text-[#55585e]">
            Each capability is a working part of the product, not a slide. They
            share one data model, so trust, compliance and reporting do not have
            to be bolted on afterwards.
          </p>

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
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                  {item.body}
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
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Architecture
            </p>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
              Channel, service and core — kept apart on purpose
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#55585e]">
              The products customers use are separated from the services that
              enforce rules and the core that holds the balances. That
              separation is what makes phased rollout and core replacement
              feasible.
            </p>

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
            <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black">
              Regulated by design
            </h3>
            <p className="mt-3 text-[14.5px] leading-[1.7] text-[#55585e]">
              Authorisation rules, approval thresholds and segregation of duties
              are configuration, not code paths. Every privileged action is
              attributed and retained, so internal audit and the regulator can
              be answered with evidence rather than screenshots.
            </p>
            <div className="mt-6 rounded-lg bg-[#fafafa] p-4">
              <p className="flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">
                <CircleDot size={14} />
                Delivery note
              </p>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-[#55585e]">
                Architecture decisions are documented with the trade-offs they
                carry, so your team can maintain the platform after hand-over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Delivery process
          </p>
          <h2 className="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            How an engagement runs
          </h2>

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
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">
                    {step.body}
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
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Integrations
            </p>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
              Connects to what you already run
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#55585e]">
              Existing systems stay in place. Connectors are versioned and
              certified before traffic is switched on, so an upgrade on either
              side is a planned event rather than an outage.
            </p>

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
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Controls
            </p>
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
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e]">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GlobalFaqSection
        eyebrow="FAQ"
        title="Questions we hear before we start"
        subtitle="Scope, integration and controls — the things teams ask first."
        items={faqs}
        ctaLabel="Schedule a call"
        ctaHref="/schedule-a-call"
      />

      {/* CTA */}
      <section className="bg-white px-6 pb-[72px] pt-[8px] md:pb-[96px]">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">
                Modernising a bank&#8217;s channels?
              </h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">
                Tell us the core host, the products and the regulatory timeline.
                We will map a phased rollout that does not put the existing book
                at risk.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                Schedule a call
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
