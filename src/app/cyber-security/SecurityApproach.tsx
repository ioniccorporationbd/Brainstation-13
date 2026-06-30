"use client";

import {
  BrainCircuit,
  Network,
  Rocket,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

const steps = [
  {
    step: "Step 1",
    icon: BrainCircuit,
    title: "Engagement Planning & Environment Mapping",
    description:
      "Align on scope, business objectives, and rules of engagement; preliminary review of assets for exposure using Nmap reconnaissance.",
  },
  {
    step: "Step 2",
    icon: Network,
    title: "Target Discovery & Risk Identification",
    description:
      "Automated scans with OWASP ZAP and manual enumeration to uncover vulnerabilities, misconfigurations, and weak controls across infrastructure.",
  },
  {
    step: "Step 3",
    icon: ShieldCheck,
    title: "Threat Simulation & Exploitation Testing",
    description:
      "Manual exploitation chaining with Metasploit to mimic attacker behavior, demonstrating impacts like lateral movement without false positives.",
  },
  {
    step: "Step 4",
    icon: Rocket,
    title: "Findings Review & Strategic Guidance",
    description:
      "Prioritized vulnerability reports via secure platform, with executive summaries and remediation roadmaps ranked by CVSS severity.",
  },
  {
    step: "Step 5",
    icon: TimerReset,
    title: "Remediation Validation & Continuous Support",
    description:
      "Re-testing fixes, ongoing threat monitoring, and quarterly reviews to ensure long-term resilience and compliance.",
  },
];

export default function SecurityApproach() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f9fd] px-6 py-[96px] text-[#00051f]">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -left-[260px] top-[80px] h-[620px] w-[620px] rounded-full border border-[#bcecff]/70" />
      <div className="pointer-events-none absolute -left-[230px] top-[110px] h-[560px] w-[560px] rounded-full border border-[#bcecff]/60" />
      <div className="pointer-events-none absolute -left-[200px] top-[140px] h-[500px] w-[500px] rounded-full border border-[#bcecff]/50" />

      <div className="pointer-events-none absolute -right-[280px] bottom-[-180px] h-[620px] w-[620px] rounded-full border border-[#bcecff]/60" />
      <div className="pointer-events-none absolute -right-[240px] bottom-[-140px] h-[540px] w-[540px] rounded-full border border-[#bcecff]/50" />

      <div className="relative mx-auto max-w-[1320px]">
        {/* Top center title */}
        <div className="mx-auto mb-[64px] max-w-[760px] text-center">
          <span className="mb-4 inline-flex rounded-full bg-[#dff2fb] px-5 py-2 text-[14px] font-bold text-[#2494cf]">
            Security Workflow
          </span>

          <h2 className="mb-5 text-[40px] font-normal leading-[1.12] tracking-[-2px] text-[#00051f] md:text-[52px]">
            Our Security Approach
          </h2>

          <p className="mx-auto max-w-[700px] text-[17px] font-normal leading-[1.55] tracking-[-0.3px] text-[#315d79]">
            A Phased Blend of Human Expertise, Automated Tools, and Ethical
            Hacking for Swift, Secure Outcomes Aligned with NIST and ISO 27001
          </p>

          <button className="mt-7 rounded-full bg-[#ffae2b] px-[24px] py-[13px] text-[15px] font-bold text-black transition hover:bg-[#ffc15b]">
            Schedule a Call
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2 xl:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className={`group relative overflow-hidden rounded-[22px] border border-[#d7eaf4] bg-white p-[34px] shadow-[0_18px_55px_rgba(12,38,72,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#7bc9ed] hover:shadow-[0_24px_70px_rgba(12,38,72,0.14)] ${
                  index === 3 ? "xl:col-start-1 xl:ml-[180px]" : ""
                } ${
                  index === 4 ? "xl:col-start-2 xl:ml-[180px]" : ""
                }`}
              >
                {/* Top glow */}
                <div className="absolute -right-16 -top-16 h-[170px] w-[170px] rounded-full bg-[#dff2fb] opacity-80 transition duration-300 group-hover:scale-125" />

                {/* Step number watermark */}
                <div className="absolute bottom-[-24px] right-[20px] text-[110px] font-bold leading-none text-[#eef7fc]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-[#e9f7fd] text-[#2494cf] transition duration-300 group-hover:bg-[#2494cf] group-hover:text-white">
                      <Icon size={32} strokeWidth={1.8} />
                    </div>

                    <span className="rounded-full bg-[#2494cf] px-[13px] py-[6px] text-[12px] font-bold leading-none text-white">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="mb-5 min-h-[78px] text-[28px] font-normal leading-[1.15] tracking-[-1.3px] text-[#00051f]">
                    {item.title}
                  </h3>

                  <p className="text-[16px] font-normal leading-[1.55] tracking-[-0.25px] text-[#315d79]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
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
    </section>
  );
}