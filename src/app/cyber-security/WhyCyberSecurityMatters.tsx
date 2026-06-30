"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

const matters = [
  {
    title: "1. Reduced Risk Exposure",
    description:
      "Identify and mitigate vulnerabilities like injection vectors and privilege escalation before exploitation via ethical hacking simulations, preventing costly breaches and data exfiltration.",
  },
  {
    title: "2. Regulatory Compliance",
    description:
      "Align with GDPR, ISO 27001, NIST, and CIS Controls through gap analysis and policy alignment to avoid fines up to 4% of global revenue and ensure audit-ready documentation.",
  },
  {
    title: "3. Operational Resilience",
    description:
      "Simulate real-world threats including phishing campaigns and zero-day exploits to strengthen defenses with DevSecOps integration, without disrupting business continuity.",
  },
  {
    title: "4. Strategic Advantage",
    description:
      "Empower data-driven decisions with actionable insights from threat intelligence and KPI metrics for faster incident response, reducing breach impact.",
  },
];

export default function WhyCyberSecurityMatters() {
  return (
    <section className="min-h-screen w-full bg-[#f5f9fd] text-[#00051f]">
      {/* Navbar */}
      <header className="mx-auto flex h-[92px] max-w-[1260px] items-center justify-between px-6 lg:px-4">
        <div className="flex items-center gap-3">
          <div className="relative h-[28px] w-[28px]">
            <Image
              src="https://brainstation-23.com/wp-content/uploads/2023/10/BS-23-Logo.svg"
              alt="Brain Station 23"
              fill
              className="object-contain"
            />
          </div>

          <span className="text-[21px] font-bold tracking-[-0.4px] text-[#12a7df]">
            BRAIN STATION 23
          </span>
        </div>

        <nav className="hidden items-center gap-[34px] text-[16px] font-medium text-[#00051f] lg:flex">
          <button className="flex items-center gap-1.5">
            Services <ChevronDown size={17} strokeWidth={2} />
          </button>
          <button className="flex items-center gap-1.5">
            Industries <ChevronDown size={17} strokeWidth={2} />
          </button>
          <button className="flex items-center gap-1.5">
            Products <ChevronDown size={17} strokeWidth={2} />
          </button>
          <button className="flex items-center gap-1.5">
            Resources <ChevronDown size={17} strokeWidth={2} />
          </button>
          <button>Global Offices</button>
        </nav>

        <button className="hidden rounded-full bg-[#ffae2b] px-[25px] py-[14px] text-[16px] font-bold text-black transition hover:bg-[#ffc15b] md:block">
          Schedule a Call
        </button>
      </header>

      {/* Main Section */}
      <div className="relative overflow-hidden">
        {/* Left circular lines */}
        <div className="pointer-events-none absolute -left-[330px] top-[0px] h-[780px] w-[780px] rounded-full border border-[#bcecff] opacity-70" />
        <div className="pointer-events-none absolute -left-[318px] top-[12px] h-[756px] w-[756px] rounded-full border border-[#bcecff] opacity-70" />
        <div className="pointer-events-none absolute -left-[306px] top-[24px] h-[732px] w-[732px] rounded-full border border-[#bcecff] opacity-70" />
        <div className="pointer-events-none absolute -left-[294px] top-[36px] h-[708px] w-[708px] rounded-full border border-[#bcecff] opacity-70" />
        <div className="pointer-events-none absolute -left-[282px] top-[48px] h-[684px] w-[684px] rounded-full border border-[#bcecff] opacity-70" />
        <div className="pointer-events-none absolute -left-[270px] top-[60px] h-[660px] w-[660px] rounded-full border border-[#bcecff] opacity-70" />
        <div className="pointer-events-none absolute -left-[258px] top-[72px] h-[636px] w-[636px] rounded-full border border-[#bcecff] opacity-70" />
        <div className="pointer-events-none absolute -left-[246px] top-[84px] h-[612px] w-[612px] rounded-full border border-[#bcecff] opacity-70" />
        <div className="pointer-events-none absolute -left-[234px] top-[96px] h-[588px] w-[588px] rounded-full border border-[#bcecff] opacity-70" />
        <div className="pointer-events-none absolute -left-[222px] top-[108px] h-[564px] w-[564px] rounded-full border border-[#bcecff] opacity-70" />
        <div className="pointer-events-none absolute -left-[210px] top-[120px] h-[540px] w-[540px] rounded-full border border-[#bcecff] opacity-70" />

        <div className="relative mx-auto grid max-w-[1260px] grid-cols-1 gap-10 px-6 pb-24 pt-[76px] lg:grid-cols-[420px_1fr] lg:gap-[120px] lg:px-4">
          {/* Left Title */}
          <div className="pt-[5px]">
            <h1 className="max-w-[390px] text-[42px] font-normal leading-[1.22] tracking-[-2.1px] text-[#00051f] md:text-[48px]">
              Why Cyber Security Matters
            </h1>
          </div>

          {/* Right Items */}
          <div className="max-w-[680px]">
            <div className="space-y-[78px]">
              {matters.map((item) => (
                <div key={item.title}>
                  <h2 className="mb-[10px] text-[34px] font-normal leading-[1.1] tracking-[-1.6px] text-[#00051f] md:text-[38px]">
                    {item.title}
                  </h2>

                  <p className="max-w-[670px] text-[18px] font-normal leading-[1.42] tracking-[-0.35px] text-[#315d79]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating chat button */}
        <button
          aria-label="Chat"
          className="fixed bottom-6 right-6 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
        >
          <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#19aee7] text-[18px] text-white">
            ●
          </span>
        </button>
      </div>
    </section>
  );
}