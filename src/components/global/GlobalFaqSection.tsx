"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";
import { Plus } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

export type GlobalFaqSectionProps = {
  /** Small uppercase label above the heading. Pass empty string to hide. */
  eyebrow?: string;
  /** Main heading (defaults to "Frequently Asked Questions"). */
  title?: string;
  /** Optional supporting text under the heading. */
  subtitle?: string;
  /** FAQ items to render. */
  items: FaqItem[];
  /** Index open by default. Pass null to keep all closed. Defaults to 0. */
  defaultOpen?: number | null;
  /** Optional CTA rendered under the accordion. */
  ctaLabel?: string;
  ctaHref?: string;
  /** Extra classes for the outer section (e.g. alternate padding). */
  className?: string;
};

/**
 * GlobalFaqSection
 * Reusable, theme-consistent FAQ block (white bg, black text, subtle border,
 * minimal red accent, smooth accordion). Drop it into any page:
 *
 *   <GlobalFaqSection items={faqs} title="FAQ" />
 */
export default function GlobalFaqSection({
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  subtitle,
  items,
  defaultOpen = 0,
  ctaLabel,
  ctaHref,
  className = "",
}: GlobalFaqSectionProps) {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpen ?? null
  );

  return (
    <section
      className={`bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px] ${className}`}
    >
      <div className="mx-auto max-w-[880px]">
        <div className="text-center">
          {eyebrow ? (
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              {t(eyebrow)}
            </p>
          ) : null}

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            {t(title)}
          </h2>

          {subtitle ? (
            <p className="mx-auto mt-5 max-w-[600px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">
              {t(subtitle)}
            </p>
          ) : null}
        </div>

        <div className="mt-12 space-y-3">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border bg-white transition-colors duration-300 ${
                  isOpen
                    ? "border-[#c91f28]"
                    : "border-[#ececec] hover:border-[#c91f28]"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index
                    )
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-[16px] font-bold leading-[1.4] tracking-[-0.01em] text-[#0a0a0a] md:text-[18px]">
                    {t(faq.question)}
                  </span>

                  <Plus
                    size={22}
                    strokeWidth={1.8}
                    className={`shrink-0 text-[#c91f28] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656]">
                      {t(faq.answer)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {ctaLabel && ctaHref ? (
          <div className="mt-12 text-center">
            <Link
              href={ctaHref}
              className="inline-flex rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >
              {t(ctaLabel)}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
