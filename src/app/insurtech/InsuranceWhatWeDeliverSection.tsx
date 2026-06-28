"use client";

import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type DeliverItem = {
  title: string;
  points: string[];
};

const deliverItems: DeliverItem[] = [
  {
    title: "AI-Powered Claim Fraud Screening",
    points: [
      "Integrated fraud detection within claims workflow — ensuring early risk visibility during claim processing.",
      "Early notification to Medical Advisors and Adjudicators regarding suspected fraudulent activities.",
      "Proactive fraud prevention controls are embedded into the claim’s lifecycle.",
      "Improved decision accuracy and reduced financial leakage through early fraud alerts.",
    ],
  },
  {
    title: "Core Insurance Solution",
    points: [
      "Centralized policy, customer, claim, payment, and benefit management in one reliable platform.",
      "Configurable workflows for underwriting, policy servicing, and claim operations.",
      "Role-based access and audit-ready records for secure insurance operations.",
      "Improved operational visibility across branches, agents, and support teams.",
    ],
  },
  {
    title: "Insurance 360",
    points: [
      "Complete customer-facing insurance app for policyholders and service teams.",
      "Policy details, claims, premium tracking, wellness tools, and support requests in one place.",
      "Mobile-first experience for faster customer service and better engagement.",
      "Real-time dashboard access for policy and claim updates.",
    ],
  },
  {
    title: "Agent Onboarding & Training System",
    points: [
      "Digital agent registration, document upload, verification, and approval workflow.",
      "Training modules, exams, evaluation, and certification tracking.",
      "Progress dashboards for administrators and distribution managers.",
      "Faster onboarding with less manual follow-up and paperwork.",
    ],
  },
  {
    title: "RAG-Enabled AI Chatbot",
    points: [
      "AI chatbot trained on insurance policy, claim, and service knowledge bases.",
      "Instant customer responses for common questions, claim status, and product information.",
      "RAG-based answer generation for more accurate and context-aware support.",
      "Reduces support pressure while improving 24/7 service availability.",
    ],
  },
  {
    title: "Broker-Led Automation",
    points: [
      "Email-to-ticket automation for broker requests, quote tracking, and follow-ups.",
      "Smart comparison reports for customer options and insurance products.",
      "Centralized visibility into broker communication and request status.",
      "Faster response cycles with reduced manual coordination.",
    ],
  },
];

export default function InsuranceWhatWeDeliverSection() {
  // null means all dropdowns are closed on first load
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f8fc] py-[80px] md:py-[94px] lg:py-[104px]">
      {/* Left circle background only */}
      <div className="pointer-events-none absolute left-[-470px] top-[-210px] hidden h-[980px] w-[980px] rounded-full md:block">
        {Array.from({ length: 28 }).map((_, index) => {
          const size = 420 + index * 24;

          return (
            <div
              key={index}
              className="absolute rounded-full border border-[#bee9fb]/70"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1220px] grid-cols-1 gap-[54px] px-5 sm:px-8 lg:grid-cols-[420px_1fr] lg:gap-[96px] xl:px-0">
        {/* Left Title */}
        <div className="lg:pt-[18px]">
          <h2 className="text-[42px] font-normal leading-[1.1] tracking-[-0.06em] text-black sm:text-[52px] lg:text-[58px]">
            What We Deliver
          </h2>
        </div>

        {/* Right Accordion */}
        <div className="w-full">
          {deliverItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={item.title}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className={`flex w-full items-center justify-between border px-[12px] py-[13px] text-left transition ${
                    isOpen
                      ? "border-[#008fd3] bg-transparent"
                      : "border-[#d9dde3] bg-transparent"
                  }`}
                >
                  <span className="text-[18px] font-normal leading-[1.35] text-black sm:text-[20px]">
                    {item.title}
                  </span>

                  <span className="shrink-0 text-[20px] text-[#1d3557]">
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-[12px] px-[12px] py-[14px]">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="grid grid-cols-[18px_1fr] gap-[12px] text-[17px] font-normal leading-[1.35] text-black sm:text-[19px]"
                        >
                          <span className="mt-[4px] text-[16px] text-[#008fd3]">
                            <FaRegCircleCheck />
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