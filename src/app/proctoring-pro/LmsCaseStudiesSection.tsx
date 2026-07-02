"use client";

import { useState } from "react";
import Link from "next/link";

type CaseStudy = {
  id: number;
  logo: string;
  logoAlt: string;
  category: string;
  title: string;
  description: string;
  image: string;
  stats: string[];
  results: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    logo: "https://dummyimage.com/220x90/f4f7fb/111827.png&text=CityRemit",
    logoAlt: "CityRemit logo",
    category: "Fintech",
    title:
      "Instant and Secure Cross-Border Remittance with CityRemit: Enhancing Financial Connectivity for Expatriates",
    description:
      "A secure, instant cross-border remittance platform for City Bank, enabling Bangladeshi expatriates and foreign nationals to send money seamlessly to Bangladesh and 7 other countries. Delivered as a fully digital solution with web and mobile apps.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    stats: ["60%", "24/7", "8 countries"],
    results: [
      "Instant, 24/7 money transfers across borders",
      "Enhanced security with modern authentication",
      "Expanded reach to global remittance corridors",
    ],
  },
  {
    id: 2,
    logo: "https://dummyimage.com/220x90/f4f7fb/dc2626.png&text=AB+Bank",
    logoAlt: "AB Bank logo",
    category: "Banking",
    title:
      "Secure Digital Banking Platform with Strong Customer Experience and Reliable Operations",
    description:
      "A modern digital banking solution that helps financial institutions streamline customer onboarding, payments, account services, and transaction visibility through one secure platform.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    stats: ["70%", "2M+", "99.9%"],
    results: [
      "Improved customer digital onboarding",
      "Reduced manual operational workflows",
      "Secure transaction monitoring and reporting",
    ],
  },
  {
    id: 3,
    logo: "https://dummyimage.com/220x90/f4f7fb/6d28d9.png&text=Convenience+Pay",
    logoAlt: "Convenience Pay logo",
    category: "Payment Platform",
    title:
      "Convenience Pay Platform for Fast, Transparent and Secure Digital Transactions",
    description:
      "A digital payment platform designed for smooth payment journeys, real-time transaction confirmation, customer transparency, and reliable payment operations.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    stats: ["85%", "24/7", "API-first"],
    results: [
      "Faster payment processing experience",
      "Clear transaction history and user visibility",
      "Flexible integrations with payment ecosystems",
    ],
  },
];

export default function LmsCaseStudiesSection() {
  const [activeCase, setActiveCase] = useState<CaseStudy>(caseStudies[0]);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[105px] text-[#07112b]">
      <div className="mx-auto max-w-[1220px]">
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.075em] text-[#07112b] md:text-[58px]">
              Case Studies
            </h2>

            <p className="mt-6 max-w-[500px] text-[18px] font-medium leading-[1.45] tracking-[-0.035em] text-[#315b72] md:text-[20px]">
              Check out our case studies that show how innovative solutions
              transformed businesses.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#ffab2e] px-8 py-4 text-[15px] font-black tracking-[-0.025em] text-black transition duration-300 hover:bg-[#ffc15a] hover:shadow-[0_18px_45px_rgba(255,171,46,0.25)]"
          >
            See all Case Studies
          </Link>
        </div>

        {/* Logo Tabs */}
        <div className="mt-[72px] flex flex-wrap gap-4">
          {caseStudies.map((item) => {
            const isActive = activeCase.id === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveCase(item)}
                className={`flex h-[86px] w-[132px] items-center justify-center rounded-[8px] border bg-[#f3f6fa] px-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(17,30,64,0.08)] ${
                  isActive
                    ? "border-[#3f93cf] shadow-[inset_0_-3px_0_#3f93cf]"
                    : "border-transparent"
                }`}
              >
                <img
                  src={item.logo}
                  alt={item.logoAlt}
                  className="max-h-[50px] max-w-[110px] object-contain"
                />
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="mt-9 grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left Image */}
          <div className="overflow-hidden rounded-[10px] bg-[#f3f6fa] shadow-[0_20px_60px_rgba(17,30,64,0.08)]">
            <img
              src={activeCase.image}
              alt={activeCase.title}
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-[1.04] md:h-[560px]"
            />
          </div>

          {/* Right Text */}
          <div>
            <p className="text-[20px] font-medium tracking-[-0.035em] text-[#3f93cf]">
              {activeCase.category}
            </p>

            <h3 className="mt-6 max-w-[680px] text-[34px] font-medium leading-[1.12] tracking-[-0.07em] text-[#07112b] md:text-[44px]">
              {activeCase.title}
            </h3>

            <div className="mt-7 flex flex-wrap gap-3">
              {activeCase.stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full bg-[#edf5fb] px-4 py-2 text-[15px] font-black tracking-[-0.02em] text-[#3f93cf]"
                >
                  {stat}
                </span>
              ))}
            </div>

            <p className="mt-7 max-w-[660px] text-[18px] font-medium leading-[1.45] tracking-[-0.035em] text-[#315b72] md:text-[20px]">
              {activeCase.description}
            </p>

            <div className="mt-8">
              <h4 className="text-[18px] font-black tracking-[-0.03em] text-black">
                Key Results:
              </h4>

              <ul className="mt-4 space-y-2">
                {activeCase.results.map((result) => (
                  <li
                    key={result}
                    className="text-[17px] font-medium leading-[1.4] tracking-[-0.03em] text-[#315b72]"
                  >
                    • {result}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/case-studies"
              className="mt-9 inline-flex items-center gap-3 text-[17px] font-black tracking-[-0.025em] text-[#ff9500] transition duration-300 hover:gap-5"
            >
              View Case Study
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}