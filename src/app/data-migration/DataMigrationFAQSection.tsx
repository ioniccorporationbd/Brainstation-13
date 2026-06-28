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
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1100&q=90";

const whyChooseItems = [
  "Expertise in migrating complex data across finance, healthcare, e-commerce, and enterprises.",
  "Complete support from data assessment and mapping to migration and validation.",
  "Advanced tools and frameworks for fast, accurate, and efficient transfers.",
  "Tailored solutions that fit your business needs.",
  "Secure, compliant, and reliable migration with minimal downtime.",
];

const faqs = [
  {
    question: "Can you migrate data from legacy systems?",
    answer:
      "Yes. We migrate data from legacy databases, spreadsheets, old enterprise systems, cloud platforms, and custom applications into modern, secure, and scalable environments.",
  },
  {
    question: "Do you offer zero-downtime migration?",
    answer:
      "Yes. For business-critical systems, we plan phased migration, parallel runs, validation checkpoints, and rollback strategies to reduce downtime as much as possible.",
  },
  {
    question: "How do you maintain data quality and integrity?",
    answer:
      "We use data profiling, mapping, cleansing, deduplication, validation rules, reconciliation reports, and post-migration testing to make sure migrated data remains accurate and reliable.",
  },
  {
    question: "Do you support hybrid or multi-cloud migrations?",
    answer:
      "Yes. We support on-premise to cloud, cloud to cloud, hybrid cloud, and multi-cloud migration across modern platforms depending on your business and technical requirements.",
  },
  {
    question: "How do you handle large-scale datasets?",
    answer:
      "We design scalable migration workflows using batching, automation, monitoring, secure transfer methods, and optimized pipelines to handle large datasets safely and efficiently.",
  },
];

export default function DataMigrationFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white">
      {/* Why Choose */}
      <div className="mx-auto grid w-full max-w-[980px] grid-cols-1 items-start gap-[48px] px-5 py-[76px] sm:px-8 md:grid-cols-[420px_1fr] lg:gap-[58px] lg:py-[88px] xl:px-0">
        {/* Left Image */}
        <div className="h-[310px] w-full overflow-hidden bg-gray-200 md:h-[330px]">
          <img
            src={IMAGE_URL}
            alt="Data migration services"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="max-w-[500px] text-center text-[22px] font-bold leading-[1.08] tracking-[-0.03em] text-black sm:text-[25px] md:text-left">
            Why choose Brain Station 23 for Data Migration Services
          </h2>

          <ul className="mt-[24px] space-y-[13px]">
            {whyChooseItems.map((item) => (
              <li
                key={item}
                className="grid grid-cols-[8px_1fr] gap-[17px] text-[15px] font-normal leading-[1.75] text-black sm:text-[16px]"
              >
                <span className="mt-[11px] h-[5px] w-[5px] rounded-full bg-black" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ Header */}
      <div className="mx-auto w-full max-w-[1120px] px-5 pt-[52px] text-center sm:px-8 xl:px-0">
        <h2 className="text-[34px] font-normal leading-[1.15] tracking-[-0.055em] text-black sm:text-[42px]">
          Frequently Asked Questions
        </h2>

        <p className="mx-auto mt-[16px] max-w-[850px] text-[16px] font-normal leading-[1.6] text-[#333333] sm:text-[18px]">
          Get answers to common questions about Data Migration Services from
          Brain Station 23.
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
              +8809610902323
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
            className="inline-flex h-[42px] w-fit items-center justify-center rounded-full bg-[#ffad2f] px-[26px] text-[13px] font-bold tracking-[0.02em] text-black transition hover:bg-white hover:text-[#0789ae]"
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