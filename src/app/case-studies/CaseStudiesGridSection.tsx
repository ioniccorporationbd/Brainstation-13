"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CaseStudy = {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  capability: string;
  href: string | null;
};

const caseStudies: CaseStudy[] = [
  {
    category: "Maritime & IoT",
    title: "IoT boat safety platform for coastal fleets",
    excerpt:
      "An IoT-based safety system that gives crews and authorities real-time visibility to prevent and respond to incidents at sea.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    alt: "Container ship berthed at a working port",
    capability: "Fleet safety",
    href: "/case-study/safety-at-sea",
  },
  {
    category: "Fintech",
    title: "Digital wallet platform serving millions",
    excerpt:
      "We built a secure, high-throughput wallet platform with real-time payments, KYC and compliance built in.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    alt: "Mobile banking app and dashboard used together on phone and laptop",
    capability: "Payments",
    href: "/case-study/digital-wallet",
  },
  {
    category: "Retail & E-commerce",
    title: "Headless commerce stack for rapid growth",
    excerpt:
      "A modern storefront and order platform that scaled effortlessly through peak shopping seasons.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    alt: "Customer completing a card payment at a retail counter",
    capability: "Commerce",
    href: null,
  },
  {
    category: "Healthcare",
    title: "Telehealth platform connecting patients and doctors",
    excerpt:
      "Video consultations, scheduling and secure records delivered on a HIPAA-aligned architecture.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    alt: "Clinician reviewing patient information on a smartphone",
    capability: "Virtual care",
    href: null,
  },
  {
    category: "Logistics",
    title: "Fleet tracking and route optimisation",
    excerpt:
      "Real-time visibility and intelligent routing cut fuel costs and improved on-time delivery.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop",
    alt: "Freight truck driving through a mountain pass",
    capability: "Routing",
    href: null,
  },
  {
    category: "SaaS",
    title: "Enterprise analytics dashboard rebuild",
    excerpt:
      "A complete front-end re-architecture delivered a faster, more intuitive product for thousands of users.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    alt: "Analytics dashboard with charts displayed on a screen",
    capability: "Front-end",
    href: null,
  },
  {
    category: "Education",
    title: "Scalable learning platform for global learners",
    excerpt:
      "A Moodle-based learning ecosystem serving students across multiple countries and languages.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    alt: "Students working together in a classroom",
    capability: "LMS",
    href: null,
  },
];

const categories = ["All", ...Array.from(new Set(caseStudies.map((item) => item.category)))];

export default function CaseStudiesGridSection() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? caseStudies : caseStudies.filter((item) => item.category === active)),
    [active]
  );

  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Selected work
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            Case studies across industries
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
            From high-volume fintech to global learning platforms &mdash; here&rsquo;s a
            snapshot of the outcomes we deliver.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter case studies by category">
          {categories.map((category) => {
            const isActive = category === active;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(category)}
                className={`rounded-lg border px-4 py-2 text-[13.5px] font-semibold transition-colors duration-200 ${
                  isActive
                    ? "border-[#c91f28] bg-[#c91f28] text-white"
                    : "border-[#ececec] bg-white text-black hover:border-[#c91f28] hover:text-[#c91f28]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-[13px] font-medium text-[#7a7d84]" aria-live="polite">
          Showing {visible.length} of {caseStudies.length} case studies
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => {
            const inner = (
              <>
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#c91f28]">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[18px] font-semibold leading-[1.32] tracking-[-0.01em] text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[14px] leading-[1.65] text-[#55585e]">
                    {item.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#ececec] pt-4">
                    <span className="text-[12px] font-semibold uppercase leading-tight tracking-[0.06em] text-[#7a7d84]">
                      {item.capability}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[13.5px] font-bold text-[#c91f28] transition-all duration-200 group-hover:gap-2.5">
                      {item.href ? "View case study" : "Discuss this project"}
                      <ArrowRight size={15} strokeWidth={2.2} />
                    </span>
                  </div>
                </div>
              </>
            );

            return item.href ? (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#ececec] bg-white transition-colors duration-200 hover:border-[#c91f28]/60"
              >
                {inner}
              </Link>
            ) : (
              <Link
                key={item.title}
                href="/contact"
                className="group flex flex-col overflow-hidden rounded-xl border border-[#ececec] bg-white transition-colors duration-200 hover:border-[#c91f28]/60"
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
