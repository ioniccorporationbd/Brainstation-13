"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CaseStudy = {
  id: string;
  logo: string;
  logoAlt: string;
  category: string;
  title: string;
  image: string;
  badges: string[];
  description: string;
  results: string[];
  href: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "city-remit",
    logo: "https://logo.clearbit.com/cityremit.com",
    logoAlt: "CityRemit",
    category: "Fintech",
    title:
      "Instant and Secure Cross-Border Remittance with CityRemit: Enhancing Financial Connectivity for Expatriates",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop",
    badges: ["60%", "24/7", "8 countries"],
    description:
      "A secure, instant cross-border remittance platform for City Bank, enabling Bangladeshi expatriates and foreign nationals to send money seamlessly to Bangladesh and 7 other countries. Delivered as a fully digital solution with web and mobile apps.",
    results: [
      "Instant, 24/7 money transfers across borders",
      "Enhanced security with modern authentication",
      "Expanded reach to global remittance corridors",
    ],
    href: "/case-studies/city-remit",
  },
  {
    id: "ab-bank",
    logo: "https://logo.clearbit.com/abbl.com",
    logoAlt: "AB Bank",
    category: "Banking",
    title:
      "Modern Digital Banking Platform for AB Bank with Secure Customer Experience",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop",
    badges: ["Secure", "Mobile", "Digital"],
    description:
      "A modern banking experience designed for account access, digital transactions, customer onboarding, reporting, and secure financial operations across digital channels.",
    results: [
      "Improved customer access to digital banking services",
      "Reduced manual banking operation dependency",
      "Strengthened security and transaction visibility",
    ],
    href: "/case-studies/ab-bank",
  },
  {
    id: "convenience-pay",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400&auto=format&fit=crop",
    logoAlt: "Convenience Pay",
    category: "Payment",
    title:
      "Convenience Pay Digital Payment Platform for Faster and Safer Transactions",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
    badges: ["Fast", "Secure", "Payment"],
    description:
      "A flexible payment solution supporting faster customer transactions, secure payment flow, merchant connectivity, and reliable digital payment processing.",
    results: [
      "Faster payment processing and customer checkout",
      "Improved merchant and user payment experience",
      "Secure transaction flow with scalable architecture",
    ],
    href: "/case-studies/convenience-pay",
  },
];

export default function FintechCaseStudiesSection() {
  const [active, setActive] = useState<CaseStudy>(caseStudies[0]);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[92px] text-[#11182f]">
      <div className="mx-auto max-w-[1240px]">
        {/* Top Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-[42px] font-medium leading-[1.08] tracking-[-0.065em] text-[#050b18] md:text-[58px]">
              Case Studies
            </h2>

            <p className="mt-7 max-w-[520px] text-[18px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a] md:text-[21px]">
              Check out our case studies that show how innovative solutions
              transformed businesses.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#ffab2e] px-8 py-4 text-[15px] font-bold tracking-[-0.02em] text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffc15a] hover:shadow-[0_16px_38px_rgba(255,171,46,0.35)]"
          >
            See all Case Studies
          </Link>
        </div>

        {/* Logo Tabs */}
        <div className="mt-[74px] flex flex-wrap gap-5">
          {caseStudies.map((item) => {
            const isActive = active.id === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item)}
                className={`group flex h-[92px] w-[150px] items-center justify-center overflow-hidden rounded-[8px] bg-[#f4f7fb] px-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(17,30,64,0.12)] ${
                  isActive
                    ? "border-b-[3px] border-[#3f93cf] shadow-[0_12px_36px_rgba(17,30,64,0.08)]"
                    : "border-b-[3px] border-transparent"
                }`}
              >
                {item.id === "convenience-pay" ? (
                  <span className="text-center text-[15px] font-black uppercase leading-[1.05] text-[#6a32dc]">
                    Convenience Pay
                  </span>
                ) : (
                  <img
                    src={item.logo}
                    alt={item.logoAlt}
                    className="max-h-[48px] max-w-[118px] object-contain transition duration-300 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="mt-10 grid grid-cols-1 items-center gap-[70px] lg:grid-cols-[0.9fr_1fr]">
          {/* Left Image */}
          <div className="group relative overflow-hidden rounded-[8px] bg-[#f4f7fb]">
            <img
              key={active.image}
              src={active.image}
              alt={active.title}
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.06] md:h-[560px]"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-[#111E40]/15 via-transparent to-[#3f93cf]/10" />
          </div>

          {/* Right Text */}
          <div>
            <p className="text-[22px] font-medium leading-none tracking-[-0.035em] text-[#3f93cf]">
              {active.category}
            </p>

            <h3 className="mt-7 max-w-[720px] text-[36px] font-medium leading-[1.12] tracking-[-0.07em] text-[#050b18] md:text-[46px]">
              {active.title}
            </h3>

            <div className="mt-8 flex flex-wrap gap-3">
              {active.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-[#f0f6fb] px-4 py-2 text-[16px] font-bold leading-none tracking-[-0.02em] text-[#3f93cf]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-7 max-w-[690px] text-[20px] font-medium leading-[1.5] tracking-[-0.035em] text-[#42637a]">
              {active.description}
            </p>

            <div className="mt-7">
              <h4 className="text-[19px] font-bold tracking-[-0.035em] text-[#050b18]">
                Key Results:
              </h4>

              <ul className="mt-4 space-y-2">
                {active.results.map((result) => (
                  <li
                    key={result}
                    className="flex gap-3 text-[18px] font-medium leading-[1.45] tracking-[-0.03em] text-[#42637a]"
                  >
                    <span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#42637a]" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={active.href}
              className="mt-10 inline-flex items-center gap-3 text-[18px] font-bold tracking-[-0.025em] text-[#ff9f1c] transition duration-300 hover:gap-5 hover:text-[#3f93cf]"
            >
              View Case Study
              <ArrowRight size={19} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}