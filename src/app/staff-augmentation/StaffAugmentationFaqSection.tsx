"use client";

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What happens if I'm not satisfied with the engineer after 2 weeks?",
    answer:
      "You can discontinue the engagement within the first 2 weeks if the engineer does not meet your expectations. The goal is to make sure there is a strong technical and workflow fit before continuing long-term.",
  },
  {
    question: "How do you ensure quality and accountability with offshore teams?",
    answer:
      "We provide pre-vetted engineers, structured onboarding, sprint planning, delivery tracking, regular check-ins, and account management support to keep work transparent and accountable.",
  },
  {
    question: "Can I scale up or down quickly if the project needs change?",
    answer:
      "Yes. You can scale your team up or down based on roadmap, workload, budget, and delivery requirements. We support flexible engagement models for changing project needs.",
  },
  {
    question: "What if a developer leaves mid-project?",
    answer:
      "We support replacement planning, documentation, knowledge transfer, and continuity management so your project does not lose momentum.",
  },
  {
    question: "How fast can engineers start working?",
    answer:
      "Depending on the required skills and team size, vetted engineers can usually be presented quickly and onboarded within a short timeline.",
  },
  {
    question: "Do you provide project management support?",
    answer:
      "Yes. We can provide account management, delivery coordination, sprint support, reporting, and communication structure based on your engagement model.",
  },
];

export default function StaffAugmentationFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const visibleFaqs = faqs.slice(0, visibleCount);
  const hasMore = visibleCount < faqs.length;

  return (
    <section className="bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-center text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px]">
          Frequently Asked Questions
        </h2>

        <div className="mt-12">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-[#ececec]">
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex((current) => (current === index ? null : index))
                  }
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="max-w-[840px] text-[17px] font-semibold leading-[1.4] tracking-[-0.01em] text-[#0a0a0a] md:text-[19px]">
                    {faq.question}
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
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[820px] text-[15px] font-medium leading-[1.7] tracking-[-0.01em] text-[#565656] md:text-[16px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount(faqs.length)}
              className="inline-flex items-center gap-2 rounded-full border border-[#ececec] px-6 py-3 text-[14px] font-semibold tracking-[-0.01em] text-[#0a0a0a] transition-colors duration-300 hover:border-[#c91f28] hover:text-[#c91f28]"
            >
              Show more questions
              <ChevronDown size={16} strokeWidth={2} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
