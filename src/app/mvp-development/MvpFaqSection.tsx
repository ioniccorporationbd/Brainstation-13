"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Plus, Send, X } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How long does an MVP take to build?",
    answer:
      "A focused MVP usually takes 8–12 weeks depending on product complexity, integrations, design depth, and the number of core features required for validation.",
  },
  {
    question: "What’s included in the MVP scope?",
    answer:
      "MVP scope usually includes product discovery, feature prioritization, UX/UI design, core functionality development, basic integrations, testing, deployment, and post-launch feedback planning.",
  },
  {
    question: "What happens after the MVP launch?",
    answer:
      "After launch, we collect user feedback, analyze product usage, fix priority issues, improve the experience, and plan the next roadmap for scaling into a full product.",
  },
  {
    question: "Can you help us validate the product idea before development?",
    answer:
      "Yes. We can help with market research, user journey mapping, prototype validation, feature prioritization, technical feasibility, and a clear MVP roadmap before development starts.",
  },
];

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#246178] ring-1 ring-[#dce8f2] transition duration-300 hover:-translate-y-1 hover:bg-[#4fa0d1] hover:text-white hover:shadow-[0_12px_28px_rgba(79,160,209,0.25)]"
    >
      {children}
    </a>
  );
}

export default function MvpFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-center text-[44px] font-bold leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[58px]">
          Still Have Questions?
        </h2>

        <div className="mt-[92px] grid grid-cols-1 gap-[70px] lg:grid-cols-[0.78fr_1.1fr]">
          {/* Left Contact Card */}
          <aside className="rounded-[8px] border border-[#dce8f2] bg-[#f4f8fc] px-8 py-10 shadow-[0_16px_45px_rgba(17,30,64,0.04)] md:px-10">
            <h3 className="max-w-[430px] text-[28px] font-bold leading-[1.3] tracking-[-0.055em] text-[#050b18]">
              Ready to Validate Your Vision?
            </h3>

            <p className="mt-7 max-w-[460px] text-[17px] font-medium leading-[1.6] tracking-[-0.03em] text-[#42637a]">
              Partner with Brain Station 23 and accelerate your path from
              concept to customer feedback. Book your MVP strategy session.
            </p>

            <Link
              href="/schedule-a-call"
              className="mt-10 inline-flex rounded-full bg-[#ffab2e] px-7 py-3.5 text-[16px] font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_14px_34px_rgba(255,171,46,0.30)]"
            >
              Schedule a Call
            </Link>

            <div className="mt-[58px]">
              <h4 className="text-[26px] font-bold leading-none tracking-[-0.05em] text-[#050b18]">
                Contact
              </h4>

              <div className="mt-7 space-y-5">
                <a
                  href="mailto:sales@brainstation-23.com"
                  className="flex items-center gap-4 text-[18px] font-medium tracking-[-0.03em] text-[#42637a] transition hover:text-[#4fa0d1]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#4fa0d1] ring-1 ring-[#dce8f2]">
                    <Send size={18} strokeWidth={1.8} />
                  </span>
                  sales@brainstation-23.com
                </a>

                <a
                  href="tel:+8801404055226"
                  className="flex items-center gap-4 text-[18px] font-medium tracking-[-0.03em] text-[#42637a] transition hover:text-[#4fa0d1]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#4fa0d1] ring-1 ring-[#dce8f2]">
                    <Phone size={18} strokeWidth={1.8} />
                  </span>
                  +88 01404055226
                </a>
              </div>
            </div>

            <div className="mt-[48px]">
              <h4 className="text-[26px] font-bold leading-none tracking-[-0.05em] text-[#050b18]">
                Follow us
              </h4>

              <div className="mt-7 flex items-center gap-4">
                <SocialButton href="#" label="Facebook">
                  <span className="text-[24px] font-bold leading-none">f</span>
                </SocialButton>

                <SocialButton href="#" label="LinkedIn">
                  <span className="text-[20px] font-bold leading-none">in</span>
                </SocialButton>

                <SocialButton href="#" label="GitHub">
                  <span className="text-[18px] font-bold leading-none">GH</span>
                </SocialButton>

                <SocialButton href="#" label="X">
                  <X size={22} strokeWidth={1.8} />
                </SocialButton>
              </div>
            </div>
          </aside>

          {/* Right FAQ */}
          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="border-b border-[#dce8f2]">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index
                      )
                    }
                    className="flex w-full items-center justify-between gap-8 py-[31px] text-left"
                  >
                    <span className="max-w-[760px] text-[23px] font-bold leading-[1.35] tracking-[-0.05em] text-[#050b18] md:text-[28px]">
                      {faq.question}
                    </span>

                    <Plus
                      size={27}
                      strokeWidth={1.6}
                      className={`shrink-0 text-[#4fa0d1] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] pb-8 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[760px] text-[17px] font-medium leading-[1.65] tracking-[-0.03em] text-[#42637a] md:text-[18px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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