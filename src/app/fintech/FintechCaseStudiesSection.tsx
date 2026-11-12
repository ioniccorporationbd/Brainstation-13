"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CaseStudy = {
  id: string;
  label: string;
  category: string;
  title: string;
  image: string;
  tags: string[];
  description: string;
  results: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "city-remit",
    label: "CityRemit",
    category: "Fintech · Remittance",
    title:
      "Instant and secure cross-border remittance with CityRemit: enhancing financial connectivity for expatriates",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1400&auto=format&fit=crop",
    tags: ["Instant transfers", "Round-the-clock", "Multi-country"],
    description:
      "A secure, instant cross-border remittance platform for City Bank, enabling Bangladeshi expatriates and foreign nationals to send money seamlessly to Bangladesh and 7 other countries. Delivered as a fully digital solution with web and mobile apps.",
    results: [
      "Instant, round-the-clock money transfers across borders",
      "Enhanced security with modern authentication",
      "Expanded reach to global remittance corridors",
    ],
  },
  {
    id: "ab-bank",
    label: "AB Bank",
    category: "Banking",
    title: "Modern digital banking platform for AB Bank with a secure customer experience",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop",
    tags: ["Secure", "Mobile", "Digital"],
    description:
      "A modern banking experience designed for account access, digital transactions, customer onboarding, reporting, and secure financial operations across digital channels.",
    results: [
      "Improved customer access to digital banking services",
      "Reduced manual banking operation dependency",
      "Strengthened security and transaction visibility",
    ],
  },
  {
    id: "convenience-pay",
    label: "Convenience Pay",
    category: "Payment",
    title: "Convenience Pay digital payment platform for faster and safer transactions",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
    tags: ["Fast", "Secure", "Payments"],
    description:
      "A flexible payment solution supporting faster customer transactions, secure payment flow, merchant connectivity, and reliable digital payment processing.",
    results: [
      "Faster payment processing and customer checkout",
      "Improved merchant and user payment experience",
      "Secure transaction flow with scalable architecture",
    ],
  },
];

export default function FintechCaseStudiesSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState<CaseStudy>(caseStudies[0]);

  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[640px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Case studies")}</p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Financial products in production")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("A few engagements that show how fintech delivery looks in practice.")}</p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3 text-[14.5px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
          >{t("See all case studies")}<ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label={t("Fintech case studies")}>
          {caseStudies.map((item) => {
            const isActive = active.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(item)}
                className={`rounded-lg border px-4 py-2 text-[13.5px] font-semibold transition-colors duration-200 ${
                  isActive
                    ? "border-[#c91f28] bg-[#c91f28] text-white"
                    : "border-[#ececec] bg-white text-black hover:border-[#c91f28] hover:text-[#c91f28]"
                }`}
              >
                {t(item.label)}
              </button>
            );
          })}
        </div>

        <div className="mt-7 grid grid-cols-1 items-center gap-8 rounded-2xl border border-[#ececec] bg-[#fafafa] p-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:p-9">
          <div className="overflow-hidden rounded-xl border border-[#ececec] bg-white">
            <img
              key={active.image}
              src={active.image}
              alt={active.title}
              className="h-[280px] w-full object-cover md:h-[400px]"
            />
          </div>

          <div>
            <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
              {t(active.category)}
            </p>
            <h3 className="mt-3 text-[22px] font-bold leading-[1.25] tracking-[-0.015em] text-black md:text-[28px]">
              {t(active.title)}
            </h3>

            <ul className="mt-5 flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-lg border border-[#ececec] bg-white px-3.5 py-1.5 text-[13px] font-semibold text-black"
                >
                  {t(tag)}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-[15px] leading-[1.8] text-[#55585e]">{t(active.description)}</p>

            <div className="mt-6">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.1em] text-black">{t("Key results")}</h4>
              <ul className="mt-3 space-y-2">
                {active.results.map((result) => (
                  <li key={result} className="flex gap-3 text-[14.5px] leading-[1.6] text-[#55585e]">
                    <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#c91f28]" />
                    <span>{t(result)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/case-studies"
              className="mt-7 inline-flex items-center gap-2 text-[14.5px] font-bold text-[#c91f28] transition-all duration-200 hover:gap-3.5"
            >{t("View case studies")}<ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
