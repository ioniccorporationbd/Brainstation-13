"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is a white label digital wallet?",
    answer:
      "A white label digital wallet is a ready-made wallet platform that can be launched under your own brand. It includes wallet balance, payments, transfers, user management, security, reporting, and integrations without building everything from scratch.",
  },
  {
    question: "Which digital wallet is best in Bangladesh?",
    answer:
      "The best digital wallet depends on the business model, compliance needs, payment flows, integrations, and scalability requirements. Wallet23 is designed for banks, fintechs, telcos, NBFCs, and retail businesses that need a secure white-label wallet platform.",
  },
  {
    question: "What is an example of a white label?",
    answer:
      "A white-label example is a company launching a wallet app with its own name, logo, colors, customer experience, and services while using a pre-built wallet technology platform underneath.",
  },
  {
    question:
      "How does Wallet23 ensure security and regulatory compliance for a financial institution?",
    answer:
      "Wallet23 supports identity verification, KYC/AML workflows, device and SIM binding, role-based access control, transaction monitoring, audit logs, fraud controls, API security, and bank-grade data protection.",
  },
  {
    question: "Can Wallet23 integrate with an existing core banking system?",
    answer:
      "Yes. Wallet23 is API-first and can integrate with core banking systems, card networks, payment processors, credit bureaus, notification gateways, compliance systems, and other third-party services.",
  },
  {
    question: "What are the typical cost and timeline for implementation?",
    answer:
      "The timeline depends on branding, integrations, compliance requirements, and deployment model. A standard white-label wallet can be launched faster using pre-built modules, with a typical target timeline around 6 weeks for a focused rollout.",
  },
];

export default function Wallet23FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[95px] text-[#07112b]">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[820px] text-center">
          <span className="inline-flex rounded-full bg-[#eaf6fc] px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#079ed8]">
            FAQ
          </span>

          <h2 className="mt-6 text-[42px] font-medium leading-[1.06] tracking-[-0.075em] text-[#07112b] md:text-[58px] lg:text-[64px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-[58px] max-w-[1080px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#dce8f2]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-8 py-8 text-left"
                >
                  <span className="text-[22px] font-black leading-[1.25] tracking-[-0.045em] text-[#07112b] md:text-[28px]">
                    {faq.question}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#0aa7df] transition duration-300 hover:bg-[#eaf6fc]">
                    {isOpen ? (
                      <X size={24} strokeWidth={1.8} />
                    ) : (
                      <Plus size={24} strokeWidth={1.8} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] pb-8 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[860px] text-[16px] font-medium leading-[1.65] tracking-[-0.025em] text-[#42637a] md:text-[18px]">
                      {faq.answer}
                    </p>
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