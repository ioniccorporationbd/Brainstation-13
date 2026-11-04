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
    <div className="mx-auto max-w-[900px] divide-y divide-[#e6edf5] border-y border-[#e6edf5]">
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
              <span className="text-[18px] font-semibold tracking-[-0.02em] text-[#050b18] md:text-[20px]">
                {item.question}
              </span>
              <ChevronDown
                size={22}
                className={`shrink-0 text-[#3f93cf] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "max-h-[420px] pb-6 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="max-w-[780px] text-[16px] leading-[1.65] text-[#5a6b7d] md:text-[17px]">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
