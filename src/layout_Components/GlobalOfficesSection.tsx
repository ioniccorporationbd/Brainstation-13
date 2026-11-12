"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";
import { MapPin, Globe } from "lucide-react";

/* ------------------------------------------------------------------ *
 * Global component — mounted in app/layout.tsx, so it renders on EVERY
 * page (like the Navbar and Footer). The Magnetic Solution Limited
 * red/black/white design below therefore applies site-wide.
 *
 * Magnetic Solution Limited is a Bangladesh-based software & technology
 * company. No public street address / office email / phone could be
 * verified, so (per the branding data-verification rule) unverified
 * addresses and contacts are intentionally OMITTED rather than
 * fabricated, and no other company's office data/images are shown.
 * Real, existing links (/contact, /schedule-a-call) are used.
 * ------------------------------------------------------------------ */

type MagneticOffice = {
  name: string;
  badge: string;
  description: string;
  cta: { label: string; href: string };
  icon: "pin" | "globe";
};

const magneticOffices: MagneticOffice[] = [
  {
    name: "Bangladesh",
    badge: "Headquarters",
    description:
      "Our headquarters and engineering base — where we build and deliver software and technology solutions for clients.",
    cta: { label: "Contact Us", href: "/contact" },
    icon: "pin",
  },
  {
    name: "Global Delivery",
    badge: "Worldwide",
    description:
      "We collaborate with clients across regions through remote-first, distributed delivery, working across time zones.",
    cta: { label: "Schedule a Call", href: "/schedule-a-call" },
    icon: "globe",
  },
];

export default function GlobalOfficesSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-white py-[72px] md:py-[100px]">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-[620px]">
          <h2 className="text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A] sm:text-[38px] md:text-[44px]">{t("Global Offices")}</h2>
          <p className="mt-4 text-[16px] leading-[1.5] text-[#52525B] md:text-[18px]">{t("Headquartered in Bangladesh while working with clients worldwide.")}</p>
        </div>

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
          {magneticOffices.map((office) => (
            <article
              key={office.name}
              className="group flex flex-col rounded-2xl border border-[#E7E7EA] bg-white p-7 shadow-[0_1px_2px_rgba(10,10,10,0.04)] transition-all duration-300 ease-out hover:scale-[1.03] hover:border-[#C91F28] hover:shadow-[0_24px_50px_rgba(201,31,40,0.16)] motion-reduce:transition-none motion-reduce:hover:scale-100 md:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#C91F28] text-white">
                  {office.icon === "pin" ? <MapPin size={22} /> : <Globe size={22} />}
                </span>
                <span className="rounded-full bg-[#C91F28]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C91F28]">
                  {t(office.badge)}
                </span>
              </div>

              <h3 className="mt-6 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0A0A0A] md:text-[26px]">
                {t(office.name)}
              </h3>

              <p className="mt-3 flex-1 text-[15px] leading-[1.6] text-[#52525B] md:text-[16px]">
                {t(office.description)}
              </p>

              <Link
                href={office.cta.href}
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-[#C91F28] transition-colors duration-200 hover:text-[#A71920]"
              >
                {t(office.cta.label)}
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
