"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Globe,
  Clock,
  Phone,
  MessageCircle,
  Mail,
  ShieldCheck,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 * Global component — mounted in app/layout.tsx by OurOfficesGate, so
 * it renders site-wide.
 *
 * Redesign: two identical, compact cards, each carrying the complete
 * verified IONIC Corporation contact card (source:
 * ioniccorporation.com/contact) — logo, company name, address,
 * website, office hours, sales/accounts/customer-care numbers, email
 * and 24/7 support. Magnetic Solution Limited design system
 * (#C91F28 red / black / white) preserved.
 * ------------------------------------------------------------------ */

// Verified contact details — https://ioniccorporation.com/contact
const OFFICE = {
  name: "IONIC Corporation",
  address: "House #18, Road #01, Proschim Rayarbag, Jattrabari, Dhaka-1362, Bangladesh",
  sales: { dial: "+8801958442200", label: "01958442200" },
  accounts: { dial: "+8801911142320", label: "01911142320" },
  care: { dial: "+8801511142320", label: "01511142320" },
  email: "ioniccorporation@gmail.com",
  website: "https://ioniccorporation.com",
  websiteLabel: "ioniccorporation.com",
} as const;

const linkCls =
  "font-medium text-[#0A0A0A] underline-offset-2 transition-colors duration-200 hover:text-[#C91F28] hover:underline";

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#C91F28]/[0.08] text-[#C91F28]">
        <Icon size={13.5} strokeWidth={2.1} />
      </span>
      <p className="min-w-0 text-[14px] leading-[1.45] text-[#0A0A0A] break-words md:text-[14.5px]">
        <span className="mr-1 text-[#6B6B73]">{label}:</span>
        {children}
      </p>
    </div>
  );
}

function OfficeCard({ compact }: { compact: boolean }) {
  const { t } = useTranslation();
  return (
    <article className="group flex min-w-0 flex-col rounded-2xl border border-[#E7E7EA] bg-white p-5 shadow-[0_1px_2px_rgba(10,10,10,0.04)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#C91F28]/60 hover:shadow-[0_18px_40px_rgba(201,31,40,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6 md:p-7">
      {/* Header — official logo + badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0F0F2] pb-4">
        <Image
          src="/brand/ionic-corporation-logo.png"
          alt="IONIC Corporation"
          width={833}
          height={313}
          className="h-8 w-auto md:h-9"
        />
        <span className="rounded-full bg-[#C91F28]/10 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-normal text-[#C91F28]">
          {t("Headquarters")}
        </span>
      </div>

      {/* Company name */}
      <h3
        className={
          compact
            ? "mt-4 text-[19px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0A0A0A] sm:text-[20px] md:text-[21px]"
            : "mt-4 text-[20px] font-semibold leading-[1.25] tracking-[-0.015em] text-[#0A0A0A] md:text-[22px]"
        }
      >
        {OFFICE.name}
      </h3>

      {/* Complete contact details */}
      <div className="mt-4 flex flex-1 flex-col gap-2.5">
        <Detail icon={MapPin} label={t("Address")}>
          {OFFICE.address}
        </Detail>
        <Detail icon={Globe} label={t("Website")}>
          <a href={OFFICE.website} target="_blank" rel="noopener noreferrer" className={linkCls}>
            {OFFICE.websiteLabel}
          </a>
        </Detail>
        <Detail icon={Clock} label={t("Office Hours")}>
          {t("Saturday–Friday, 9 AM – 7 PM")}
        </Detail>
        <Detail icon={Phone} label={t("Sales")}>
          <a href={`tel:${OFFICE.sales.dial}`} className={linkCls}>
            {OFFICE.sales.label}
          </a>
        </Detail>
        <Detail icon={Phone} label={t("Accounts")}>
          <a href={`tel:${OFFICE.accounts.dial}`} className={linkCls}>
            {OFFICE.accounts.label}
          </a>
        </Detail>
        <Detail icon={MessageCircle} label={t("Customer Care / WhatsApp")}>
          <a
            href={`https://wa.me/${OFFICE.care.dial.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            {OFFICE.care.label}
          </a>
        </Detail>
        <Detail icon={Mail} label={t("Email")}>
          <a href={`mailto:${OFFICE.email}`} className={`${linkCls} [overflow-wrap:anywhere]`}>
            {OFFICE.email}
          </a>
        </Detail>
        <Detail icon={ShieldCheck} label={t("Support")}>
          {t("24/7 Customer Support")}
        </Detail>
      </div>

      {/* Footer CTA — identical in both cards */}
      <Link
        href="/contact"
        className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#C91F28]/25 px-4 py-1.5 text-[13px] font-semibold text-[#C91F28] transition-colors duration-200 hover:border-[#C91F28] hover:bg-[#C91F28] hover:text-white max-sm:min-h-[44px] max-sm:px-5"
      >
        {t("Contact Us")}
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}

export default function OurOfficesSection({ compact = false }: { compact?: boolean }) {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-white py-[56px] sm:py-[72px] md:py-[104px]">
      <div className="brand-container">
        <div className="max-w-[620px] max-sm:mx-auto max-sm:text-center">
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

        <div className="mt-8 grid gap-5 md:mt-11 md:grid-cols-2 md:gap-6">
          <OfficeCard compact={compact} />
          <OfficeCard compact={compact} />
        </div>
      </div>
    </section>
  );
}
