"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";
import { Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Can I start small and expand later?",
    answer:
      "Yes. You can start with a small managed team or a single service track, then expand based on your roadmap, workload, and business priorities.",
  },
  {
    question: "Can we switch service tracks mid-engagement?",
    answer:
      "Yes. Managed Services are designed to be flexible. You can shift between development, QA, DevOps, analytics, support, or hybrid tracks as needs change.",
  },
  {
    question: "How do you ensure transparency?",
    answer:
      "We provide regular reports, sprint reviews, SLA tracking, delivery dashboards, and clear communication through your dedicated delivery lead or account manager.",
  },
  {
    question: "Is this suitable for regulated industries?",
    answer:
      "Yes. Our delivery process can support compliance-focused environments, including healthcare, finance, enterprise software, and other regulated industries.",
  },
  {
    question: "How is performance measured?",
    answer:
      "Performance is measured using agreed KPIs such as sprint velocity, SLA adherence, defect rate, release quality, uptime, response time, and delivery milestones.",
  },
];

export default function ManagedServicesFaqSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[880px]">
        <div className="text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("FAQ")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Frequently Asked Questions")}</h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("Everything you need to know about working with our managed delivery teams.")}</p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
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

        <div className="mt-12 text-center">
          <Link
            href="/schedule-a-call"
            className="inline-flex rounded-full bg-[#c91f28] px-8 py-4 text-[16px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
          >{t("Schedule a Call")}</Link>
        </div>
      </div>
    </section>
  );
}
