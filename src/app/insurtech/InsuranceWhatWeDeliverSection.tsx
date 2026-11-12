"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { ChevronDown, CircleCheck } from "lucide-react";

type DeliverItem = {
  title: string;
  points: string[];
};

const deliverItems: DeliverItem[] = [
  {
    title: "AI-Powered Claim Fraud Screening",
    points: [
      "Integrated fraud detection within the claims workflow — early risk visibility during claim processing.",
      "Early notification to medical advisors and adjudicators about suspected fraudulent activity.",
      "Proactive fraud prevention controls embedded into the claim lifecycle.",
      "Improved decision accuracy and reduced financial leakage through early fraud alerts.",
    ],
  },
  {
    title: "Core Insurance Solution",
    points: [
      "Centralized policy, customer, claim, payment and benefit management in one reliable platform.",
      "Configurable workflows for underwriting, policy servicing and claim operations.",
      "Role-based access and audit-ready records for secure insurance operations.",
      "Improved operational visibility across branches, agents and support teams.",
    ],
  },
  {
    title: "Insurance 360",
    points: [
      "Complete customer-facing insurance app for policyholders and service teams.",
      "Policy details, claims, premium tracking, wellness tools and support requests in one place.",
      "Mobile-first experience for faster customer service and better engagement.",
      "Real-time dashboard access for policy and claim updates.",
    ],
  },
  {
    title: "Agent Onboarding & Training System",
    points: [
      "Digital agent registration, document upload, verification and approval workflow.",
      "Training modules, exams, evaluation and certification tracking.",
      "Progress dashboards for administrators and distribution managers.",
      "Faster onboarding with less manual follow-up and paperwork.",
    ],
  },
  {
    title: "RAG-Enabled AI Chatbot",
    points: [
      "AI chatbot trained on insurance policy, claim and service knowledge bases.",
      "Instant customer responses for common questions, claim status and product information.",
      "RAG-based answer generation for more accurate, context-aware support.",
      "Reduces support pressure while improving round-the-clock service availability.",
    ],
  },
  {
    title: "Broker-Led Automation",
    points: [
      "Email-to-ticket automation for broker requests, quote tracking and follow-ups.",
      "Smart comparison reports for customer options and insurance products.",
      "Centralized visibility into broker communication and request status.",
      "Faster response cycles with reduced manual coordination.",
    ],
  },
];

export default function InsuranceWhatWeDeliverSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white px-6 pb-[80px] pt-[8px] text-[#0a0a0a] md:pb-[96px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
        {/* Left title */}
        <div className="lg:sticky lg:top-24 lg:self-start lg:pt-2">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Deliverables")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("What We Deliver")}</h2>

          <p className="mt-5 max-w-[340px] text-[15.5px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656]">{t("Six production modules that cover the insurance lifecycle, from claim intake to customer self-service.")}</p>
        </div>

        {/* Right accordion */}
        <div className="w-full space-y-3">
          {deliverItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.title}
                className={`overflow-hidden rounded-xl border bg-white transition-colors duration-300 ${
                  isOpen ? "border-[#c91f28]" : "border-[#ececec]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 sm:px-6 sm:py-5"
                >
                  <span className="text-[16px] font-bold leading-[1.35] tracking-[-0.01em] text-[#0a0a0a] sm:text-[17px]">
                    {t(item.title)}
                  </span>

                  <span
                    className={`shrink-0 text-[#c91f28] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={20} strokeWidth={2} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-3 px-5 pb-5 sm:px-6 sm:pb-6">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="grid grid-cols-[18px_1fr] gap-3 text-[14.5px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]"
                        >
                          <span className="mt-0.5 text-[#c91f28]">
                            <CircleCheck size={18} strokeWidth={2} />
                          </span>

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
