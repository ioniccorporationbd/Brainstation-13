"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export function MobileAppProcessSection() {
  const processItems = [
    "Discovery & requirement analysis.",
    "UI/UX design (user research, wireframes).",
    "Agile development (sprints, milestones).",
    "QA & testing (manual + automated).",
    "Deployment & app store launch.",
    "Ongoing support & updates.",
  ];

  return (
    <section className="bg-white py-[80px]">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr_1fr]">
        <img
          src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop"
          alt="Mobile app development process"
          className="h-[300px] w-full object-cover"
        />

        <div>
          <h2 className="mb-6 text-[28px] font-bold leading-tight text-black">
            Our Mobile App Development Process
          </h2>

          <ul className="space-y-3 pl-5 text-[15px] leading-[1.4] text-black">
            {processItems.map((item) => (
              <li key={item} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function MobileAppFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "How much does it cost to develop a mobile app in Bangladesh?",
      a: "The cost depends on features, platform, UI/UX complexity, integrations, and project timeline.",
    },
    {
      q: "How long does it take to build a mobile app?",
      a: "A simple app may take 6–10 weeks, while complex enterprise apps may take several months.",
    },
    {
      q: "Do you provide post-launch support and maintenance?",
      a: "Yes, we provide bug fixing, monitoring, upgrades, optimization, and feature improvements.",
    },
    {
      q: "How do you ensure app security and IP protection?",
      a: "We follow secure coding practices, access control, NDA, code ownership agreement, and deployment security.",
    },
    {
      q: "Do you sign NDAs and ensure code ownership?",
      a: "Yes, NDA and code ownership can be included based on project requirements.",
    },
  ];

  return (
    <section className="bg-white pb-[90px] pt-[40px]">
      <div className="mx-auto max-w-[1220px] px-6">
        <div className="text-center">
          <h2 className="text-[42px] font-normal leading-tight tracking-[-0.06em] text-[#071F49]">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-[18px] text-[#374151]">
            Get answers to common questions about Mobile App Development and our
            App development process
          </p>
        </div>

        <div className="mt-[70px] grid grid-cols-1 gap-[70px] lg:grid-cols-[0.8fr_1.1fr]">
          <div className="rounded-[6px] border border-[#e5e7eb] bg-white p-[26px]">
            <h3 className="mb-4 text-[19px] font-semibold text-[#071F49]">
              Get in Touch with Our Team
            </h3>

            <p className="mb-8 text-[14px] leading-[1.6] text-[#42637a]">
              Ready to scale your development team? Contact us today to discuss
              your project requirements.
            </p>

            <Link
              href="/schedule-a-call"
              className="inline-flex rounded-full bg-[#ffab2e] px-6 py-3 text-[14px] font-bold text-black"
            >
              Schedule a Call
            </Link>

            <h4 className="mt-9 text-[18px] font-semibold text-[#071F49]">
              Contact
            </h4>

            <p className="mt-4 text-[14px] text-[#4b5563]">
              sales@brainstation-23.com
            </p>

            <p className="mt-3 text-[14px] text-[#4b5563]">
              +88096 1090 2323
            </p>

            <h4 className="mt-8 text-[18px] font-semibold text-[#071F49]">
              Follow us
            </h4>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e2ec] bg-white text-[#246178] transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:shadow-lg"
              >
                <IconBrandFacebook size={20} stroke={2} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e2ec] bg-white text-[#246178] transition-all duration-300 hover:bg-[#0A66C2] hover:text-white hover:shadow-lg"
              >
                <IconBrandLinkedin size={20} stroke={2} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e2ec] bg-white text-[#246178] transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg"
              >
                <IconBrandGithub size={20} stroke={2} />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e2ec] bg-white text-[#246178] transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg"
              >
                <IconBrandX size={20} stroke={2} />
              </a>
            </div>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <div key={faq.q} className="border-b border-[#e5e7eb] py-6">
                <button
                  type="button"
                  onClick={() => setOpen(open === index ? null : index)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="max-w-[560px] text-[19px] font-semibold leading-[1.35] text-[#071F49]">
                    {faq.q}
                  </span>

                  <Plus
                    size={20}
                    className={`shrink-0 text-[#1976b8] transition-transform duration-300 ${
                      open === index ? "rotate-45" : ""
                    }`}
                  />
                </button>

                {open === index && (
                  <p className="mt-4 max-w-[620px] text-[15px] leading-[1.7] text-[#4b5563]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}

            <div className="mt-[70px] text-center">
              <button
                type="button"
                className="rounded-full bg-[#ffab2e] px-7 py-3 text-[13px] font-bold text-black"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectCTASection() {
  return (
    <section className="bg-[#0786a9] py-8">
      <div className="mx-auto flex max-w-[1220px] flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <h2 className="text-[24px] font-bold text-white">
            Would like to start a project with us?
          </h2>

          <p className="mt-3 text-[12px] text-white">
            Feel free to drop an email (consultancy@brainstation-23.com) and
            share your idea.
          </p>
        </div>

        <Link
          href="tel:+8809610902323"
          className="rounded-full bg-[#ffab2e] px-7 py-3 text-[13px] font-bold text-black"
        >
          +8809610-902323
        </Link>
      </div>
    </section>
  );
}