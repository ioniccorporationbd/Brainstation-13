"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SolutionTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

const solutions: SolutionTab[] = [
  {
    id: "digital-banking",
    label: "Digital Banking",
    title: "Digital Banking Solution",
    description:
      "Build modern digital banking platforms with secure account access, online onboarding, fund transfer, bill payment, statement management, and customer self-service features. Our solution helps banks deliver fast, reliable, and customer-friendly digital experiences.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop",
    href: "/digital-banking-software",
  },
  {
    id: "ewallet-mfs",
    label: "eWallet & MFS",
    title: "eWallet & MFS Solution",
    description:
      "Launch scalable mobile financial services with wallet accounts, cash-in, cash-out, merchant payment, agent banking, QR payment, transaction monitoring, and secure customer verification workflows.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
    href: "/e-wallet-software",
  },
  {
    id: "digital-lending",
    label: "Digital Lending",
    title: "Digital Lending Solution",
    description:
      "Automate loan origination, credit scoring, borrower onboarding, document verification, approval workflows, repayment tracking, and risk monitoring with an intelligent digital lending platform.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop",
    href: "/digital-lending-credit",
  },
  {
    id: "insurance",
    label: "Insurance",
    title: "Insurance Technology Solution",
    description:
      "Digitize insurance operations with policy management, premium collection, claim processing, customer portals, agent workflows, automated notifications, and analytics-driven decision support.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop",
    href: "/insurance-360",
  },
  {
    id: "cross-border",
    label: "Cross Border Payments",
    title: "Cross-Border Payment Solution",
    description:
      "Remity is a white-label cross-border payments platform for launching branded international money transfer services. It features multi-currency wallets, real-time FX, SWIFT and local rail integrations, and biometric authentication. Built-in KYC/AML and encryption support secure, regulation-ready operations for global remittance.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1400&auto=format&fit=crop",
    href: "/cross-border-payments-solution",
  },
];

export default function FintechSolutionsTabsSection() {
  const [activeTab, setActiveTab] = useState<SolutionTab>(solutions[0]);

  return (
    <section id="solutions" className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Our solutions
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            Complete financial technology solutions
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
            Our fintech expertise spans digital banking, payments, lending,
            insurance and cross-border transfers &mdash; enterprise-grade
            platforms that move financial services forward.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Fintech solutions">
          {solutions.map((item) => {
            const isActive = activeTab.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(item)}
                className={`rounded-lg border px-4 py-2 text-[13.5px] font-semibold transition-colors duration-200 ${
                  isActive
                    ? "border-[#c91f28] bg-[#c91f28] text-white"
                    : "border-[#ececec] bg-white text-black hover:border-[#c91f28] hover:text-[#c91f28]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-7 rounded-2xl border border-[#ececec] bg-[#fafafa] p-6 md:p-9">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
            <div>
              <h3 className="text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[32px]">
                {activeTab.title}
              </h3>
              <p className="mt-4 max-w-[560px] text-[15px] leading-[1.8] text-[#55585e]">
                {activeTab.description}
              </p>
              <Link
                href={activeTab.href}
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3 text-[14.5px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                Explore {activeTab.label}
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-[#ececec] bg-white">
              <img
                key={activeTab.image}
                src={activeTab.image}
                alt={activeTab.title}
                className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[330px]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#c91f28]">
                {activeTab.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
