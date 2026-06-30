"use client";

import { useState } from "react";
import { Phone, Plus, Send } from "lucide-react";

const faqs = [
  {
    question: "What do you need to get started?",
    answer:
      "We need a discovery call, project scope, target systems, testing timeline, access rules, and business objectives before starting the assessment.",
  },
  {
    question: "Do you follow ethical hacking principles?",
    answer:
      "Yes. Every assessment follows approved rules of engagement, legal authorization, limited-impact testing, and responsible disclosure practices.",
  },
  {
    question: "What tools do you use?",
    answer:
      "We use Nmap, OWASP ZAP, Burp Suite, Metasploit, vulnerability scanners, cloud audit tools, and custom scripts where needed.",
  },
  {
    question: "How secure is the process?",
    answer:
      "The process is handled through controlled access, secure reporting, encrypted communication, least-privilege permissions, and clear testing boundaries.",
  },
  {
    question: "Will you fix vulnerabilities?",
    answer:
      "Yes. We provide remediation guidance, validation testing, technical support, and ongoing security improvement recommendations.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-[78px] text-[#00051f]">
      <div className="pointer-events-none absolute -left-[260px] top-[120px] h-[620px] w-[620px] rounded-full border border-[#bcecff]/50" />
      <div className="pointer-events-none absolute -left-[220px] top-[160px] h-[540px] w-[540px] rounded-full border border-[#bcecff]/40" />
      <div className="pointer-events-none absolute -right-[320px] bottom-[-260px] h-[720px] w-[720px] rounded-full border border-[#bcecff]/45" />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="mx-auto mb-[72px] max-w-[760px] text-center">
          <span className="mb-4 inline-flex rounded-full bg-[#dff2fb] px-5 py-2 text-[14px] font-bold text-[#2494cf]">
            Help Center
          </span>

          <h2 className="text-[42px] font-normal leading-[1.12] tracking-[-2.2px] text-[#00051f] md:text-[54px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[64px] lg:grid-cols-[520px_1fr] lg:items-start">
          <div className="rounded-[22px] border border-[#dce9f1] bg-[#f5f9fd] p-[34px] shadow-[0_18px_55px_rgba(12,38,72,0.08)]">
            <h3 className="mb-6 max-w-[380px] text-[28px] font-semibold leading-[1.28] tracking-[-1.2px] text-[#00051f]">
              Ready to Streamline Your Software Delivery?
            </h3>

            <p className="mb-9 max-w-[420px] text-[17px] font-normal leading-[1.55] tracking-[-0.25px] text-[#315d79]">
              With Brain Station 23’s Managed Services, you get an expert-led
              team, proven processes, and transparent outcomes—all without the
              hiring overhead.
            </p>

            <button className="mb-12 rounded-full bg-[#ffae2b] px-[24px] py-[13px] text-[15px] font-bold text-black transition hover:bg-[#ffc15b]">
              Schedule a Call
            </button>

            <div className="mb-10">
              <h4 className="mb-5 text-[27px] font-normal tracking-[-1px] text-[#00051f]">
                Contact
              </h4>

              <div className="space-y-4">
                <a
                  href="mailto:sales@brainstation-23.com"
                  className="flex items-center gap-4 text-[18px] text-[#315d79] transition hover:text-[#2494cf]"
                >
                  <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#dce9f1] bg-white text-[#2494cf]">
                    <Send size={19} strokeWidth={1.8} />
                  </span>
                  sales@brainstation-23.com
                </a>

                <a
                  href="tel:+8801404055226"
                  className="flex items-center gap-4 text-[18px] text-[#315d79] transition hover:text-[#2494cf]"
                >
                  <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#dce9f1] bg-white text-[#2494cf]">
                    <Phone size={19} strokeWidth={1.8} />
                  </span>
                  +88 01404055226
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-[27px] font-normal tracking-[-1px] text-[#00051f]">
                Follow us
              </h4>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#dce9f1] bg-white text-[25px] font-bold text-[#315d79] transition hover:-translate-y-1 hover:bg-[#2494cf] hover:text-white"
                >
                  f
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#dce9f1] bg-white text-[20px] font-bold text-[#315d79] transition hover:-translate-y-1 hover:bg-[#2494cf] hover:text-white"
                >
                  in
                </a>

                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#dce9f1] bg-white text-[18px] font-bold text-[#315d79] transition hover:-translate-y-1 hover:bg-[#2494cf] hover:text-white"
                >
                  GH
                </a>

                <a
                  href="#"
                  aria-label="X"
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#dce9f1] bg-white text-[20px] font-bold text-[#315d79] transition hover:-translate-y-1 hover:bg-[#2494cf] hover:text-white"
                >
                  X
                </a>
              </div>
            </div>
          </div>

          <div className="pt-[10px]">
            <div className="space-y-4">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.question}
                    className="overflow-hidden rounded-[18px] border border-[#dce9f1] bg-white shadow-[0_14px_45px_rgba(12,38,72,0.06)] transition duration-300 hover:border-[#9bd5ef]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 px-[28px] py-[25px] text-left"
                    >
                      <span className="text-[23px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#00051f]">
                        {item.question}
                      </span>

                      <span
                        className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#e9f7fd] text-[#2494cf] transition duration-300 ${
                          isOpen ? "rotate-45 bg-[#2494cf] text-white" : ""
                        }`}
                      >
                        <Plus size={22} strokeWidth={1.8} />
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
                        <p className="border-t border-[#e2edf4] px-[28px] pb-[28px] pt-[20px] text-[17px] leading-[1.65] tracking-[-0.25px] text-[#315d79]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-[48px] flex justify-center">
              <button className="rounded-full bg-[#ffae2b] px-[30px] py-[14px] text-[16px] font-bold text-black transition hover:bg-[#ffc15b]">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}