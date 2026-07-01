"use client";

import { useState } from "react";

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
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop",
    href: "/fintech/digital-banking",
  },
  {
    id: "ewallet-mfs",
    label: "eWallet & MFS",
    title: "eWallet & MFS Solution",
    description:
      "Launch scalable mobile financial services with wallet accounts, cash-in, cash-out, merchant payment, agent banking, QR payment, transaction monitoring, and secure customer verification workflows.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
    href: "/fintech/ewallet-mfs",
  },
  {
    id: "digital-lending",
    label: "Digital Lending",
    title: "Digital Lending Solution",
    description:
      "Automate loan origination, credit scoring, borrower onboarding, document verification, approval workflows, repayment tracking, and risk monitoring with an intelligent digital lending platform.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop",
    href: "/fintech/digital-lending",
  },
  {
    id: "insurance",
    label: "Insurance",
    title: "Insurance Technology Solution",
    description:
      "Digitize insurance operations with policy management, premium collection, claim processing, customer portals, agent workflows, automated notifications, and analytics-driven decision support.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop",
    href: "/fintech/insurance",
  },
  {
    id: "cross-border",
    label: "Cross Border Payments",
    title: "Cross-Border Payment Solution",
    description:
      "Remity is a white-label cross-border payments platform to launch branded international money transfer services in 30 days. It features multi-currency wallets, real-time FX, SWIFT/local rail integrations, and biometric authentication. Built-in KYC/AML and encryption ensure secure, regulation-ready operations for global remittance.",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1400&auto=format&fit=crop",
    href: "/fintech/cross-border-payments",
  },
];

export default function FintechSolutionsTabsSection() {
  const [activeTab, setActiveTab] = useState<SolutionTab>(solutions[4]);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mx-auto max-w-[1080px] text-center">
          <h2 className="text-[38px] font-bold leading-[1.08] tracking-[-0.065em] text-[#050b18] md:text-[54px]">
            Complete Financial Technology Solutions
          </h2>

          <p className="mx-auto mt-7 max-w-[1050px] text-[18px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[21px]">
            Our comprehensive fintech expertise spans digital banking, payment
            solutions, AI automation, and regulatory compliance — delivering
            enterprise-grade platforms that transform financial services and
            accelerate your digital transformation journey.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mt-[62px] flex max-w-[820px] flex-wrap items-center justify-center gap-2 rounded-full bg-white px-3 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
          {solutions.map((item) => {
            const isActive = activeTab.id === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item)}
                className={`rounded-full px-5 py-3 text-[14px] font-bold leading-none tracking-[-0.025em] transition-all duration-300 md:text-[15px] ${
                  isActive
                    ? "bg-[#5B32D6] text-white shadow-[0_10px_22px_rgba(91,50,214,0.28)]"
                    : "bg-transparent text-[#050b18] hover:bg-[#f1f4f8] hover:text-[#5B32D6]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content */}
        <div className="mt-[62px] rounded-[10px] bg-[#f4f8fc] px-8 py-10 md:px-12 md:py-12 lg:px-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left Text */}
            <div>
              <h3 className="max-w-[430px] text-[34px] font-medium leading-[1.1] tracking-[-0.07em] text-[#050b18] md:text-[44px]">
                {activeTab.title}
              </h3>

              <p className="mt-7 max-w-[560px] text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#26384d] md:text-[18px]">
                {activeTab.description}
              </p>

              <a
                href={activeTab.href}
                className="mt-8 inline-flex rounded-full bg-[#FFAB2E] px-7 py-4 text-[15px] font-bold tracking-[-0.02em] text-black transition duration-300 hover:-translate-y-1 hover:bg-[#FFC15A] hover:shadow-[0_16px_38px_rgba(255,171,46,0.35)]"
              >
                Explore
              </a>
            </div>

            {/* Right Image */}
            <div className="group relative overflow-hidden rounded-[8px] bg-[#111E40] shadow-[0_20px_60px_rgba(17,30,64,0.12)]">
              <img
                key={activeTab.image}
                src={activeTab.image}
                alt={activeTab.title}
                className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.06] md:h-[360px]"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-[#111E40]/35 via-transparent to-[#5B32D6]/20" />

              <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#111E40]">
                {activeTab.label}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}