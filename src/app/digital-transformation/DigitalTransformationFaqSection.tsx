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
    question: "How long does a typical transformation take?",
    answer:
      "Timeline depends on the size of the legacy system, integrations, automation scope, and business priorities. A discovery or assessment phase can start quickly, while full transformation usually runs in phased milestones.",
  },
  {
    question: "Can you integrate with existing ERP and CRM systems?",
    answer:
      "Yes. We can integrate with existing ERP, CRM, HRM, accounting, warehouse, payment, and third-party business systems using APIs, middleware, automation flows, and secure data pipelines.",
  },
  {
    question: "What level of disruption should we expect?",
    answer:
      "We follow a phased transformation approach to reduce disruption. Critical systems can be modernized gradually with parallel testing, controlled migration, backup planning, and rollback support.",
  },
  {
    question: "Do you provide AI automation and cloud migration together?",
    answer:
      "Yes. We can combine AI automation, RPA, workflow optimization, cloud-native modernization, DevOps, and application refactoring into one structured transformation roadmap.",
  },
  {
    question: "How do you measure transformation success?",
    answer:
      "Success is measured through agreed KPIs such as cost reduction, process efficiency, system performance, release speed, user adoption, automation coverage, uptime, and business impact.",
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
      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#c91f28] ring-1 ring-[#ececec] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#c91f28] hover:text-white hover:shadow-[0_12px_28px_rgba(201,31,40,0.25)]"
    >
      {children}
    </a>
  );
}

export default function DigitalTransformationFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#0a0a0a]">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-center text-[44px] font-bold leading-[1.08] tracking-[-0.02em] text-[#0a0a0a] md:text-[58px]">
          Frequently Asked Questions
        </h2>

        <div className="mt-[92px] grid grid-cols-1 gap-[70px] lg:grid-cols-[0.78fr_1.1fr]">
          {/* Left Contact Card */}
          <aside className="rounded-[8px] border border-[#ececec] bg-[#ffffff] px-8 py-10 shadow-[0_16px_45px_rgba(0,0,0,0.04)] md:px-10">
            <h3 className="max-w-[420px] text-[28px] font-bold leading-[1.25] tracking-[-0.02em] text-[#0a0a0a]">
              Ready to Streamline Your Software Delivery?
            </h3>

            <p className="mt-7 max-w-[460px] text-[17px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656]">
              With Magnetic Solution Limited&apos;s Managed Services, you get an
              expert-led team, proven processes, and transparent outcomes—all
              without the hiring overhead.
            </p>

            <Link
              href="/schedule-a-call"
              className="mt-10 inline-flex rounded-full bg-[#c91f28] px-7 py-3.5 text-[16px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920] hover:shadow-[0_14px_34px_rgba(201,31,40,0.30)]"
            >
              Schedule a Call
            </Link>

            <div className="mt-[58px]">
              <h4 className="text-[26px] font-bold leading-none tracking-[-0.02em] text-[#0a0a0a]">
                Contact
              </h4>

              <div className="mt-7 space-y-5">
                <a
                  href="/contact"
                  className="flex items-center gap-4 text-[18px] font-medium tracking-[-0.01em] text-[#565656] transition hover:text-[#c91f28]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#c91f28] ring-1 ring-[#ececec]">
                    <Send size={18} strokeWidth={1.8} />
                  </span>
                  Contact our team
                </a>

                <a
                  href="/contact"
                  className="flex items-center gap-4 text-[18px] font-medium tracking-[-0.01em] text-[#565656] transition hover:text-[#c91f28]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#c91f28] ring-1 ring-[#ececec]">
                    <Phone size={18} strokeWidth={1.8} />
                  </span>
                  Talk to our team
                </a>
              </div>
            </div>

            <div className="mt-[48px]">
              <h4 className="text-[26px] font-bold leading-none tracking-[-0.02em] text-[#0a0a0a]">
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
                <div key={faq.question} className="border-b border-[#ececec]">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index
                      )
                    }
                    className="flex w-full items-center justify-between gap-8 py-[31px] text-left"
                  >
                    <span className="max-w-[760px] text-[23px] font-bold leading-[1.35] tracking-[-0.02em] text-[#0a0a0a] md:text-[28px]">
                      {faq.question}
                    </span>

                    <Plus
                      size={27}
                      strokeWidth={1.6}
                      className={`shrink-0 text-[#c91f28] transition-transform duration-300 ${
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
                      <p className="max-w-[760px] text-[17px] font-medium leading-[1.65] tracking-[-0.01em] text-[#565656] md:text-[18px]">
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
        <span className="text-2xl text-[#c91f28]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}