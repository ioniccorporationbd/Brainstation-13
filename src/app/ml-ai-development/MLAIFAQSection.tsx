"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";

const IMAGE_URL =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=90";

const whyChooseItems = [
  "Proven ML solutions for finance, healthcare, research, e-commerce, and enterprises.",
  "End-to-end support: data prep, model building, deployment, and optimization.",
  "Expert data scientists using advanced algorithms and modern frameworks.",
  "Fully customized ML solutions aligned with your business goals.",
  "Enterprise-grade quality, security, and compliance throughout.",
  "Faster delivery with AI-ready teams and streamlined processes.",
];

const faqs = [
  {
    question: "What do you need to initiate an ML project?",
    answer:
      "We usually begin with your business goals, available data, expected outcomes, technical environment, and timeline. After that, we define the model scope, data requirements, and implementation plan.",
  },
  {
    question: "How long does it typically take to deploy a solution?",
    answer:
      "A basic proof of concept can take a few weeks, while a production-ready ML solution may take several weeks or months depending on data quality, integrations, and complexity.",
  },
  {
    question: "Is a large dataset required for ML implementation?",
    answer:
      "Not always. Larger datasets often help, but we can also work with smaller datasets using data preparation, feature engineering, transfer learning, or staged model improvements.",
  },
  {
    question: "Can ML solutions integrate with existing business systems?",
    answer:
      "Yes. ML solutions can integrate with CRMs, ERPs, web apps, mobile apps, analytics tools, cloud platforms, and internal business workflows.",
  },
  {
    question: "How is model accuracy and performance ensured?",
    answer:
      "We use proper data validation, model testing, performance monitoring, retraining strategies, and real-world feedback loops to maintain reliable accuracy.",
  },
];

export default function MLAIFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white">
      {/* Why Choose Section */}
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-[44px] px-5 py-[82px] sm:px-8 lg:grid-cols-[520px_1fr] lg:gap-[34px] lg:py-[92px] xl:px-0">
        <div className="h-[360px] w-full overflow-hidden bg-gray-200 lg:h-[365px]">
          <img
            src={IMAGE_URL}
            alt="AI machine learning development team"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="lg:pl-[8px]">
          <h2 className="max-w-[560px] text-center text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-black sm:text-[28px] lg:text-[30px]">
            Why choose Brain Station 23 for machine learning development?
          </h2>

          <ul className="mt-[23px] space-y-[15px]">
            {whyChooseItems.map((item) => (
              <li
                key={item}
                className="grid grid-cols-[8px_1fr] gap-[18px] text-[15px] font-normal leading-[1.75] text-black sm:text-[16px]"
              >
                <span className="mt-[11px] h-[5px] w-[5px] rounded-full bg-black" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ Header */}
      <div className="mx-auto w-full max-w-[1120px] px-5 pt-[30px] text-center sm:px-8 xl:px-0">
        <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-0.055em] text-black sm:text-[42px]">
          Frequently Asked Questions
        </h2>

        <p className="mx-auto mt-[16px] max-w-[900px] text-[16px] font-normal leading-[1.6] text-[#333333] sm:text-[18px]">
          Get answers to common questions about the Machine Learning (ML) &amp;
          Artificial Intelligence (AI) process.
        </p>
      </div>

      {/* FAQ Body */}
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-[58px] px-5 py-[58px] sm:px-8 lg:grid-cols-[380px_1fr] lg:gap-[68px] xl:px-0">
        {/* Contact Card */}
        <div className="rounded-[6px] border border-[#e1e1e1] bg-white px-[24px] py-[28px]">
          <h3 className="text-[18px] font-medium leading-[1.35] text-black">
            Get in Touch with Our Team
          </h3>

          <p className="mt-[18px] text-[13px] font-normal leading-[1.65] text-[#335e79]">
            Ready to scale your development team? Contact us today to discuss
            your project requirements.
          </p>

          <a
            href="/schedule-a-call"
            className="mt-[24px] inline-flex h-[38px] items-center justify-center rounded-full bg-[#ffad2f] px-[20px] text-[12px] font-bold text-black transition hover:bg-[#f59b15]"
          >
            Schedule a Call
          </a>

          <div className="mt-[40px]">
            <h4 className="text-[18px] font-medium text-black">Contact</h4>

            <a
              href="mailto:sales@brainstation-23.com"
              className="mt-[18px] block text-[14px] text-[#4b5563] transition hover:text-[#159bd7]"
            >
              sales@brainstation-23.com
            </a>

            <a
              href="tel:+8809610902323"
              className="mt-[12px] block text-[14px] text-[#4b5563] transition hover:text-[#159bd7]"
            >
              +8809610-902323
            </a>
          </div>

          <div className="mt-[34px]">
            <h4 className="text-[18px] font-medium text-black">Follow us</h4>

            <div className="mt-[16px] flex items-center gap-[13px]">
              <SocialIcon href="https://facebook.com" label="Facebook">
                <FaFacebookF />
              </SocialIcon>

              <SocialIcon href="https://linkedin.com" label="LinkedIn">
                <FaLinkedinIn />
              </SocialIcon>

              <SocialIcon href="https://github.com" label="GitHub">
                <FaGithub />
              </SocialIcon>

              <SocialIcon href="https://x.com" label="X">
                <FaXTwitter />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-[#e5e7eb]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-[22px] text-left"
                >
                  <span className="text-[17px] font-medium leading-[1.4] text-black sm:text-[18px]">
                    {faq.question}
                  </span>

                  <span className="flex shrink-0 items-center justify-center text-[22px] text-[#419bd3]">
                    {isOpen ? <FiMinus /> : <FiPlus />}
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
                    <p className="max-w-[620px] pb-[22px] text-[15px] leading-[1.65] text-[#4b5563]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mt-[66px] text-center">
            <button
              type="button"
              className="inline-flex h-[42px] items-center justify-center rounded-full bg-[#ffad2f] px-[24px] text-[13px] font-bold text-black transition hover:bg-[#f59b15]"
            >
              Load More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full bg-[#0789ae]">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 px-5 py-[26px] sm:px-8 md:flex-row md:items-center md:justify-between xl:px-0">
          <div>
            <h3 className="text-[22px] font-semibold text-white">
              Would like to start a project with us?
            </h3>

            <p className="mt-[12px] text-[12px] text-white/85">
              Feel free to drop an email (consultancy@brainstation-23.com) and
              share your idea.
            </p>
          </div>

          <a
            href="tel:+8809610902323"
            className="inline-flex h-[42px] w-fit items-center justify-center rounded-full border border-white px-[34px] text-[13px] font-bold tracking-[0.18em] text-white transition hover:bg-white hover:text-[#0789ae]"
          >
            +8809610902323
          </a>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
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
      target="_blank"
      rel="noreferrer"
      className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#e6eef4] bg-white text-[16px] text-[#335e79] transition hover:border-[#159bd7] hover:text-[#159bd7]"
    >
      {children}
    </a>
  );
}