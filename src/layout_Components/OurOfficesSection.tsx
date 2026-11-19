"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";

/* ------------------------------------------------------------------ *
 * Global component — mounted in app/layout.tsx by OurOfficesGate.
 * Displays the verified IONIC Corporation office information sourced
 * from https://ioniccorporation.com/contact (address, sales/accounts/
 * customer-care numbers, email, website, office hours, 24/7 support).
 * Company name, address, phone numbers and email are kept verbatim;
 * field labels are localized (BN/EN). Magnetic Solution Limited
 * red/black/white card styling is preserved.
 * ------------------------------------------------------------------ */

// Verified contact details — https://ioniccorporation.com/contact
const OFFICE = {
  name: "IONIC Corporation",
  address: "House #18, Road #01, Proschim Rayarbag, Jattrabari, Dhaka-1362, Bangladesh",
  sales: { dial: "+8801958442200", label: "01958442200" },
  accounts: { dial: "+8801911142320", label: "01911142320" },
  care: { wa: "+8801511142320", label: "01511142320" },
  email: "ioniccorporation@gmail.com",
  website: "https://ioniccorporation.com",
  websiteLabel: "ioniccorporation.com",
} as const;

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-[#F0F0F2] pt-3.5 first:border-t-0 first:pt-0">
      <dt className="text-[12.5px] font-semibold tracking-[0.01em] text-[#6B6B73]">{label}</dt>
      <dd className="mt-1 text-[15px] leading-[1.55] text-[#0A0A0A] md:text-[16px]">{children}</dd>
    </div>
  );
}

const linkCls =
  "font-medium text-[#C91F28] underline-offset-2 transition-colors duration-200 hover:text-[#A71920] hover:underline";

export default function OurOfficesSection({ compact = false }: { compact?: boolean }) {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-white py-[56px] sm:py-[72px] md:py-[104px]">
      <div className="brand-container">
        <div className="max-w-[620px]">
          <h2
            className={
              compact
                ? "text-[clamp(24px,6.9vw,29px)] font-semibold leading-[1.12] tracking-[-0.03em] text-[#0A0A0A] sm:text-[36px] md:text-[40px] lg:text-[44px] text-balance"
                : "text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.03em] text-[#0A0A0A] sm:text-[38px] md:text-[44px] text-balance"
            }
          >
            {t("Our Offices")}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.5] text-[#52525B] md:text-[18px] text-pretty">
            {t("Headquartered in Bangladesh while working with clients worldwide.")}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2">
          {/* Card 1 — Headquarters & address */}
          <article className="group flex flex-col rounded-2xl border border-[#E7E7EA] bg-white p-6 sm:p-7 shadow-[0_1px_2px_rgba(10,10,10,0.04)] transition-all duration-300 ease-out hover:scale-[1.03] hover:border-[#C91F28] hover:shadow-[0_24px_50px_rgba(201,31,40,0.16)] motion-reduce:transition-none motion-reduce:hover:scale-100 md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Image
                src="/brand/ionic-corporation-logo.png"
                alt="IONIC Corporation"
                width={833}
                height={313}
                priority={false}
                className="h-10 w-auto md:h-11"
              />
              <span className="rounded-full bg-[#C91F28]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-normal text-[#C91F28]">
                {t("Headquarters")}
              </span>
            </div>

            <h3
              className={
                compact
                  ? "mt-6 text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0A0A0A] sm:text-[20px] md:text-[22px] lg:text-[22px] text-balance"
                  : "mt-6 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0A0A0A] md:text-[26px] text-balance"
              }
            >
              {OFFICE.name}
            </h3>

            <dl className="mt-5 flex flex-1 flex-col gap-3.5">
              <Row label={t("Address")}>{OFFICE.address}</Row>
              <Row label={t("Website")}>
                <a href={OFFICE.website} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {OFFICE.websiteLabel}
                </a>
              </Row>
              <Row label={t("Office Hours")}>{t("Saturday–Friday, 9 AM – 7 PM")}</Row>
            </dl>

            <Link
              href="/contact"
              className="mt-6 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-[#C91F28] transition-colors duration-200 hover:text-[#A71920]"
            >
              {t("Contact Us")}
              <span aria-hidden>→</span>
            </Link>
          </article>

          {/* Card 2 — Sales, accounts, customer care & support */}
          <article className="group flex flex-col rounded-2xl border border-[#E7E7EA] bg-white p-6 sm:p-7 shadow-[0_1px_2px_rgba(10,10,10,0.04)] transition-all duration-300 ease-out hover:scale-[1.03] hover:border-[#C91F28] hover:shadow-[0_24px_50px_rgba(201,31,40,0.16)] motion-reduce:transition-none motion-reduce:hover:scale-100 md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#C91F28] text-white">
                <Globe size={22} />
              </span>
              <span className="rounded-full bg-[#C91F28]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-normal text-[#C91F28]">
                {t("Support")}
              </span>
            </div>

            <h3
              className={
                compact
                  ? "mt-6 text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0A0A0A] sm:text-[20px] md:text-[22px] lg:text-[22px] text-balance"
                  : "mt-6 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0A0A0A] md:text-[26px] text-balance"
              }
            >
              {t("Contact & Support")}
            </h3>

            <dl className="mt-5 flex flex-1 flex-col gap-3.5">
              <Row label={t("Sales")}>
                <a href={`tel:${OFFICE.sales.dial}`} className={linkCls}>
                  {OFFICE.sales.label}
                </a>
              </Row>
              <Row label={t("Accounts")}>
                <a href={`tel:${OFFICE.accounts.dial}`} className={linkCls}>
                  {OFFICE.accounts.label}
                </a>
              </Row>
              <Row label={t("Customer Care / WhatsApp")}>
                <a href={`https://wa.me/${OFFICE.care.wa.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {OFFICE.care.label}
                </a>
              </Row>
              <Row label={t("Email")}>
                <a href={`mailto:${OFFICE.email}`} className={linkCls}>
                  {OFFICE.email}
                </a>
              </Row>
              <Row label={t("Support")}>{t("24/7 Customer Support")}</Row>
            </dl>

            <Link
              href="/schedule-a-call"
              className="mt-6 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-[#C91F28] transition-colors duration-200 hover:text-[#A71920]"
            >
              {t("Schedule a Call")}
              <span aria-hidden>→</span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
