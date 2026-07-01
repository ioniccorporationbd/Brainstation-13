"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, Plus, Send, X } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question:
      "What types of solutions do you offer for the healthcare and pharmaceutical industries?",
    answer:
      "We provide pharma marketing platforms, HCP engagement solutions, LMS systems, AR/VR engagement tools, pharma e-commerce, compliance automation, and custom healthcare software solutions.",
  },
  {
    question:
      "What are the key features of your Learning Management Systems (LMS) for the pharma sector?",
    answer:
      "Our LMS supports custom course development, HCP audience segmentation, progress tracking, certification, reporting, and integration with CRM, Veeva, and other pharma tools.",
  },
  {
    question:
      "Can your LMS solutions be tailored for both internal teams and healthcare professionals?",
    answer:
      "Yes. We can customize LMS platforms for internal employee training, sales teams, medical representatives, healthcare professionals, and partner education programs.",
  },
  {
    question:
      "We would like to transform our legacy systems into a more agile, future-ready infrastructure. Do have experience with custom developments in the pharma and healthcare industry?",
    answer:
      "Yes. We build custom healthcare and pharma systems including workflow automation, data platforms, compliance tools, customer portals, and integration-ready enterprise applications.",
  },
  {
    question: "What is Omnizia and how can Omnizia support HCP engagement?",
    answer:
      "Omnizia is an HCP activation suite that helps pharma brands manage cross-channel engagement, analyze data, personalize campaigns, and improve communication with healthcare professionals.",
  },
  {
    question: "How does Time2Publish improve the MLR approval process?",
    answer:
      "Time2Publish streamlines MLR approval by connecting content workflows, reducing manual approval effort, improving compliance visibility, and accelerating publishing timelines.",
  },
  {
    question:
      "For which purposes is an LMS uses in the Pharma and Healthcare industry?",
    answer:
      "An LMS can be used for medical training, product education, compliance learning, HCP engagement, internal onboarding, certification, and continuous professional development.",
  },
  {
    question: "How can augmented reality be used in medical education?",
    answer:
      "AR can create interactive product demos, virtual procedure training, 3D medical visualization, immersive learning modules, and engaging HCP education experiences.",
  },
];

export default function PharmaFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[1180px]">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-[38px] font-medium leading-[1.08] tracking-[-0.065em] text-[#050b18] md:text-[54px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-[72px] grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-[70px]">
          {/* Left Contact Card */}
          <aside className="rounded-[8px] border border-[#dbe5ee] bg-[#f4f8fc] px-8 py-9 shadow-[0_12px_40px_rgba(17,30,64,0.04)] md:px-10">
            <h3 className="max-w-[330px] text-[24px] font-bold leading-[1.28] tracking-[-0.05em] text-[#050b18]">
              Ready to streamline your digital solutions in Pharma?
            </h3>

            <p className="mt-6 max-w-[390px] text-[16px] font-medium leading-[1.55] tracking-[-0.025em] text-[#42637a]">
              Brain Station 23 empowers your organization with products &
              services that combine innovation, regulatory compliance, and
              measurable results — so you can focus on your core mission.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#ffab2e] px-7 py-4 text-[15px] font-bold tracking-[-0.02em] text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffc15a] hover:shadow-[0_16px_38px_rgba(255,171,46,0.35)]"
            >
              Schedule a Call
            </Link>

            <div className="mt-12">
              <h4 className="text-[24px] font-bold tracking-[-0.045em] text-[#050b18]">
                Contact
              </h4>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:sales@brainstation-23.com"
                  className="group flex items-center gap-4 text-[16px] font-medium text-[#42637a] transition hover:text-[#3f93cf]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#3f93cf] shadow-sm transition group-hover:scale-110">
                    <Send size={18} strokeWidth={1.8} />
                  </span>
                  sales@brainstation-23.com
                </a>

                <a
                  href="tel:+8801404055226"
                  className="group flex items-center gap-4 text-[16px] font-medium text-[#42637a] transition hover:text-[#3f93cf]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#3f93cf] shadow-sm transition group-hover:scale-110">
                    <Phone size={18} strokeWidth={1.8} />
                  </span>
                  +88 01404055226
                </a>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-[24px] font-bold tracking-[-0.045em] text-[#050b18]">
                Follow us
              </h4>

              <div className="mt-5 flex items-center gap-3">
                {[
                  { label: "f", href: "https://facebook.com" },
                  { label: "in", href: "https://linkedin.com" },
                  { label: "gh", href: "https://github.com" },
                  { label: "𝕏", href: "https://x.com" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce7f0] bg-white text-[18px] font-bold text-[#42637a] transition duration-300 hover:-translate-y-1 hover:border-[#3f93cf] hover:bg-[#3f93cf] hover:text-white"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Right FAQ List */}
          <div>
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#dce7f0] py-7"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="group flex w-full items-start justify-between gap-8 text-left"
                  >
                    <span className="max-w-[720px] text-[22px] font-bold leading-[1.28] tracking-[-0.05em] text-[#050b18] transition group-hover:text-[#3f93cf] md:text-[25px]">
                      {faq.question}
                    </span>

                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center text-[#3f93cf] transition duration-300 group-hover:scale-110">
                      {isOpen ? (
                        <X size={24} strokeWidth={1.6} />
                      ) : (
                        <Plus size={24} strokeWidth={1.6} />
                      )}
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
                      <p className="max-w-[720px] pt-5 text-[17px] font-medium leading-[1.55] tracking-[-0.03em] text-[#42637a] md:text-[18px]">
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
    </section>
  );
}