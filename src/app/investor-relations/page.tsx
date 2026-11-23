import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import { pageMetadata } from "@/i18n/seo";
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
  return pageMetadata({
    route: "/investor-relations",
    title: t("Investor Relations | Magnetic Solution Limited"),
    description: t("Investor relations information for Magnetic Solution Limited — company details, governance approach and how shareholders request reports and disclosures."),
  });
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
      <section className="relative overflow-hidden bg-white pb-[64px] pt-[56px] text-black max-sm:pb-[44px] max-sm:pt-[40px] md:pb-[104px] md:pt-[80px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(58%_100%_at_50%_0%,rgba(201,31,40,0.06)_0%,rgba(255,255,255,0)_72%)]"
        />
        <div className="relative mx-auto min-w-0 brand-container">
          <div className="mx-auto flex min-w-0 max-w-[820px] flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Company · Investor relations")}</span>

            <h1 className="mx-auto mt-6 max-w-[720px] text-center font-semibold text-black text-[clamp(28px,8.387vw,36px)] leading-[1.08] tracking-[-0.035em] sm:text-[40px] md:text-[50px] lg:text-[54px]">{t("Shareholders & Partners Info")}</h1>

            <p className="mx-auto mt-6 max-w-[620px] text-center text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Magnetic Solution Limited is a privately held software engineering company. Financial statements, shareholding details and governance documents are provided to shareholders and counterparties directly — never summarised as marketing figures on a public page.")}</p>

            <div className="mt-8 flex w-full max-w-[420px] flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg text-center bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920] sm:w-auto sm:shrink-0 lg:max-xl:px-4 lg:max-xl:text-[13px]"
              >{t("Investor inquiries")}<ArrowRight size={18} />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg text-center border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28] sm:w-auto sm:shrink-0 lg:max-xl:px-4 lg:max-xl:text-[13px]"
              >{t("Company overview")}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="border-y border-[#ececec] bg-[#fafafa] py-10">
        <dl className="mx-auto grid brand-container grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {atAGlance.map((item) => (
            <div key={item.label}>
              <dt className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-normal text-[#8a8f98]">
                <item.icon size={15} className="text-[#c91f28]" />
                {t(item.label)}
              </dt>
              <dd className="mt-2 text-[17px] font-bold leading-[1.35] tracking-[-0.01em] text-black">
                {t(item.value)}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Governance */}
      <section className="bg-white py-[56px] md:py-[104px]">
        <div className="mx-auto brand-container">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Governance")}</p>
          <h2 className="max-sm:mx-auto max-sm:text-center mt-3 max-w-[720px] text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("How the company is governed")}</h2>
          <p className="max-sm:mx-auto max-sm:text-center mt-4 max-w-[640px] text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("The principles below describe how decisions are taken and reviewed. The underlying policies are available to shareholders and counterparties on request.")}</p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {governance.map((item) => (
              <article
                key={item.title}
                className="flex gap-5 rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50 max-sm:flex-col max-sm:items-center max-sm:gap-4 max-sm:text-center"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <item.icon size={21} strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                    {t(item.title)}
                  </h3>
                  <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">
                    {t(item.body)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="border-y border-[#ececec] bg-[#fafafa] py-[56px] md:py-[104px]">
        <div className="mx-auto grid brand-container grid-cols-1 max-sm:gap-8 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Reports & disclosures")}</p>
            <h2 className="max-sm:mx-auto max-sm:text-center mt-3 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Documents Shared, Not Published")}</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("As a privately held company we do not publish statutory accounts or quarterly results on the website. If you are a shareholder, lender, auditor or counterparty, these are provided under a confidentiality agreement with the latest period available.")}</p>

            <div className="mt-8 flex items-start gap-4 rounded-xl border border-[#ececec] bg-white p-7 max-sm:flex-col max-sm:items-center max-sm:gap-3 max-sm:text-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <ShieldCheck size={19} strokeWidth={1.9} />
              </span>
              <p className="text-[14.5px] leading-[1.6] text-[#52525B] text-pretty">{t("No financial figure, valuation or funding claim is published on this site. Information previously presented here belonged to the site's previous brand and has been removed rather than restated.")}</p>
            </div>
          </div>

          <div className="rounded-xl border border-[#ececec] bg-white p-7 md:p-8">
            <h3 className="text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">{t("Frequently requested documents")}</h3>
            <ul className="mt-5 space-y-3.5">
              {requests.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />
                  <span className="text-[14.5px] leading-[1.65] text-[#52525B]">
                    {t(item)}
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
      <section className="bg-white py-[56px] md:py-[104px]">
        <div className="mx-auto brand-container rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:flex max-sm:w-fit max-sm:mx-auto">
                <Mail size={15} />{t("Investor contact")}</p>
              <h2 className="max-sm:mx-auto max-sm:text-center mt-3 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Need a specific disclosure?")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Send the requirement and your organisation details through the contact form. Requests are answered with documents and a named point of contact.")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Contact us")}<ArrowRight size={17} />
              </Link>
              <Link
                href="/media"
                className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Media resources")}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
