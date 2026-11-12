import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileLock2,
  Landmark,
  LineChart,
  Mail,
  ScrollText,
  ShieldCheck,
  Users,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Investor Relations | Magnetic Solution Limited"),
    description: t("Investor relations information for Magnetic Solution Limited — company details, governance approach and how shareholders request reports and disclosures."),
  };
}

/**
 * Content policy: no financial figures, valuations, investor names, funding
 * claims, annual-report downloads or dated quarterly results are published on
 * this page. Those documents are shared with shareholders and counterparties
 * under NDA. Nothing here is a fabricated financial statement.
 */

const atAGlance = [
  {
    icon: Building2,
    label: "Legal entity",
    value: "Magnetic Solution Limited",
  },
  {
    icon: Landmark,
    label: "Headquarters",
    value: "Bangladesh",
  },
  {
    icon: Users,
    label: "Ownership",
    value: "Privately held",
  },
  {
    icon: LineChart,
    label: "Business",
    value: "Software engineering & digital services",
  },
];

const governance = [
  {
    icon: ScrollText,
    title: "Board oversight",
    body: "Strategy, capital allocation and risk appetite are set at board level, with management accountable for execution.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & compliance",
    body: "Financial statements are prepared and reviewed through an external audit process; compliance obligations are tracked per jurisdiction we operate in.",
  },
  {
    icon: FileLock2,
    title: "Risk management",
    body: "Delivery, security, currency and concentration risks are reviewed on a regular cycle with documented owners.",
  },
  {
    icon: Users,
    title: "Disclosure",
    body: "Material company information is shared with shareholders directly and consistently — not selectively or informally.",
  },
];

const requests = [
  "Company registration and incorporation documents",
  "Audited financial statements and management accounts",
  "Cap table and shareholding structure",
  "Governance policies and delegations of authority",
];

export default async function InvestorRelationsPage() {
  const { t } = await getTranslator();
  return (
    <main>
      {/* Hero */}
      <section className="bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Company · Investor relations")}</span>

            <h1 className="mt-6 max-w-[620px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">{t("Clear information for shareholders and counterparties")}</h1>

            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">{t("Magnetic Solution Limited is a privately held software engineering company. Financial statements, shareholding details and governance documents are provided to shareholders and counterparties directly — never summarised as marketing figures on a public page.")}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Investor inquiries")}<ArrowRight size={18} />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Company overview")}</Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop"
              alt={t("Business documents and financial reports on a desk")}
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-10">
        <dl className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {atAGlance.map((item) => (
            <div key={item.label}>
              <dt className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">
                <item.icon size={15} className="text-[#c91f28]" />
                {t(item.label)}
              </dt>
              <dd className="mt-2 text-[17px] font-bold leading-[1.35] tracking-[-0.01em] text-black">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Governance */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Governance")}</p>
          <h2 className="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("How the company is governed")}</h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.7] text-[#55585e]">{t("The principles below describe how decisions are taken and reviewed. The underlying policies are available to shareholders and counterparties on request.")}</p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {governance.map((item) => (
              <article
                key={item.title}
                className="flex gap-5 rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <item.icon size={21} strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black">
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

      {/* Reports */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Reports & disclosures")}</p>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Documents are shared, not published")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#55585e]">{t("As a privately held company we do not publish statutory accounts or quarterly results on the website. If you are a shareholder, lender, auditor or counterparty, these are provided under a confidentiality agreement with the latest period available.")}</p>

            <div className="mt-8 flex items-start gap-4 rounded-xl border border-[#ececec] bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <ShieldCheck size={19} strokeWidth={1.9} />
              </span>
              <p className="text-[14px] leading-[1.7] text-[#55585e]">{t("No financial figure, valuation or funding claim is published on this site. Information previously presented here belonged to the site's previous brand and has been removed rather than restated.")}</p>
            </div>
          </div>

          <div className="rounded-xl border border-[#ececec] bg-white p-7 md:p-8">
            <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Frequently requested documents")}</h3>
            <ul className="mt-5 space-y-3.5">
              {requests.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />
                  <span className="text-[14.5px] leading-[1.65] text-[#55585e]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-bold text-[#c91f28] transition-colors hover:text-[#a71920]"
            >{t("Request documents")}<ArrowRight size={16} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
                <Mail size={15} />{t("Investor contact")}</p>
              <h2 className="mt-3 text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">{t("Need a specific disclosure?")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">{t("Send the requirement and your organisation details through the contact form. Requests are answered with documents and a named point of contact.")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Contact us")}<ArrowRight size={17} />
              </Link>
              <Link
                href="/media"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Media resources")}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
