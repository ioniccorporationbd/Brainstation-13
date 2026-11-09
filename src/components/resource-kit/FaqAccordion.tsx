"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-[900px] divide-y divide-[#ececec] border-y border-[#ececec]">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="text-[18px] font-semibold tracking-[-0.02em] text-[#0a0a0a] md:text-[20px]">
                {item.question}
              </span>
              <ChevronDown
                size={22}
                className={`shrink-0 text-[#c91f28] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "max-h-[420px] pb-6 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="max-w-[780px] text-[16px] leading-[1.65] text-[#565656] md:text-[17px]">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
