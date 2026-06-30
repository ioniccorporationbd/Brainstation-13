"use client";

import { ArrowUpRight, Cloud, Code2, ShieldCheck } from "lucide-react";

const stories = [
  {
    icon: Cloud,
    tag: "Cloud Security",
    title: "Cloud Migration Security",
    caseName: "Capital One Case",
    description:
      "Secured AWS deployment for a retail giant, identifying 25+ IAM misconfigurations and S3 exposure risks pre-launch via WAF hardening and least-privilege audits.",
  },
  {
    icon: Code2,
    tag: "API Testing",
    title: "API Penetration Testing",
    caseName: "Breach Prevention",
    description:
      "Flagged BOLA flaws in RESTful endpoints, preventing unauthorized data scraping of 37M records through validation and fuzzing tests.",
  },
  {
    icon: ShieldCheck,
    tag: "Incident Response",
    title: "Breach Assessment & Mitigation",
    caseName: "Enterprise Recovery",
    description:
      "Supported forensic investigation, root-cause analysis, and remediation planning to reduce dwell time and restore secure business operations.",
  },
];

export default function SuccessStories() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f9fd] px-6 py-[96px] text-[#00051f]">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-[260px] top-[60px] h-[620px] w-[620px] rounded-full border border-[#bcecff]/60" />
      <div className="pointer-events-none absolute -left-[220px] top-[100px] h-[540px] w-[540px] rounded-full border border-[#bcecff]/50" />
      <div className="pointer-events-none absolute -right-[280px] bottom-[-220px] h-[680px] w-[680px] rounded-full border border-[#bcecff]/60" />
      <div className="pointer-events-none absolute -right-[230px] bottom-[-170px] h-[580px] w-[580px] rounded-full border border-[#bcecff]/45" />

      <div className="relative mx-auto max-w-[1320px]">
        {/* Top center title */}
        <div className="mx-auto mb-[64px] max-w-[760px] text-center">
          <span className="mb-4 inline-flex rounded-full bg-[#dff2fb] px-5 py-2 text-[14px] font-bold text-[#2494cf]">
            Client Impact
          </span>

          <h2 className="mb-5 text-[42px] font-normal leading-[1.12] tracking-[-2.2px] text-[#00051f] md:text-[54px]">
            Success Stories
          </h2>

          <p className="mx-auto max-w-[650px] text-[18px] font-normal leading-[1.55] tracking-[-0.35px] text-[#315d79]">
            Hear from industry leaders who have transformed their businesses
            with our AI-powered development and resource augmentation services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story, index) => {
            const Icon = story.icon;

            return (
              <div
                key={story.title}
                className="group relative min-h-[390px] overflow-hidden rounded-[24px] border border-[#d9eaf4] bg-white p-[34px] shadow-[0_18px_55px_rgba(12,38,72,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#7bc9ed] hover:shadow-[0_24px_70px_rgba(12,38,72,0.15)]"
              >
                {/* Card glow */}
                <div className="absolute -right-20 -top-20 h-[190px] w-[190px] rounded-full bg-[#dff2fb] opacity-80 transition duration-300 group-hover:scale-125" />

                {/* Big background number */}
                <div className="absolute bottom-[-26px] right-[22px] text-[120px] font-bold leading-none text-[#eef7fc]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[18px] bg-[#e9f7fd] text-[#2494cf] transition duration-300 group-hover:bg-[#2494cf] group-hover:text-white">
                      <Icon size={32} strokeWidth={1.8} />
                    </div>

                    <ArrowUpRight
                      size={27}
                      strokeWidth={1.8}
                      className="text-[#2494cf] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <span className="mb-5 inline-flex rounded-full bg-[#e9f7fd] px-4 py-2 text-[13px] font-bold leading-none text-[#2494cf]">
                    {story.tag}
                  </span>

                  <h3 className="mb-2 text-[29px] font-semibold leading-[1.22] tracking-[-1.3px] text-[#00051f]">
                    {story.title}
                  </h3>

                  <p className="mb-7 text-[19px] font-semibold leading-[1.35] tracking-[-0.6px] text-[#223e5a]">
                    {story.caseName}
                  </p>

                  <p className="text-[17px] font-normal leading-[1.55] tracking-[-0.3px] text-[#315d79]">
                    {story.description}
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