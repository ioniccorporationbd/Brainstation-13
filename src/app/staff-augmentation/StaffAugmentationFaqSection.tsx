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
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-[48px] font-normal leading-none tracking-[-0.07em] text-[#11182f] md:text-[60px]">
          Frequently Asked Questions
        </h2>

        <div className="mt-[96px]">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`border-b border-[#dce6ef] ${
                  index === visibleFaqs.length - 1 && !isOpen
                    ? "opacity-55"
                    : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex((current) => (current === index ? null : index))
                  }
                  className="flex w-full items-center justify-between gap-8 py-[34px] text-left"
                >
                  <span className="max-w-[980px] text-[24px] font-bold leading-[1.35] tracking-[-0.045em] text-[#020617] md:text-[30px]">
                    {faq.question}
                  </span>

                  <Plus
                    size={28}
                    strokeWidth={1.6}
                    className={`shrink-0 text-[#2d8fca] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-[34px] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[900px] text-[18px] font-medium leading-[1.65] tracking-[-0.03em] text-[#42637a] md:text-[20px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {hasMore && (
          <div className="mt-[36px] flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount(faqs.length)}
              className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#4fa0d1] text-white shadow-[0_14px_36px_rgba(79,160,209,0.30)] transition hover:-translate-y-1 hover:bg-[#2d8fca]"
              aria-label="Show more questions"
            >
              <ChevronDown size={30} strokeWidth={2.4} />
            </button>
          </div>
        )}
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}