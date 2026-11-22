import React from 'react';
import { getTranslator } from "@/i18n/server";
import Image from 'next/image';

// Step meaning and order preserved. Unverified numeric/marketing claims from the
// original copy (e.g. "800+ experts", "30% faster", "99.9% reliability",
// "ISO 27001", "90-day", "GDPR/ISO 2701") have been removed/reworded so no
// unverified claim is made, per the branding policy.
const PROCESS_STEPS = [
  {
    icon: '🧠',
    label: 'AI-Powered Discovery Audit',
    title: "Zero-risk roadmap",
    points: [
      'In-depth strategy session to analyze your current tech stack',
      'Clear scoping of time and cost before any work begins',
      'A secure, standards-aligned project blueprint',
    ],
  },
  {
    icon: '🧩',
    label: 'Hybrid Team Onboarding',
    title: 'Right talent + AI tools, day one',
    points: [
      'Match with vetted engineers from our team',
      'Structured sprint planning to start quickly',
      'Dedicated project manager and live progress dashboards',
    ],
  },
  {
    icon: '🛡️',
    label: 'Build with AI Guardrails',
    title: 'Code, test, deploy',
    points: [
      'AI-assisted development tooling across the build',
      'Automated test suites for dependable releases',
      'Continuous checks aligned to security best practices',
    ],
  },
  {
    icon: '🚀',
    label: 'Scale with Confidence',
    title: 'Your growth, automated',
    points: [
      'Cloud deployment optimized for scale',
      'Continuous performance monitoring and predictive scaling',
      'Post-launch support with analytics-driven insights',
    ],
  },
];

export default async function ProcessSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-x-clip bg-white py-11 sm:py-[72px] md:py-[100px]">
      <div className="brand-container grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.05fr] md:gap-16 lg:gap-20">
        {/* Intro */}
        <div className="max-sm:text-center">
          <h2 className="max-sm:mx-auto text-[clamp(24px,6.9vw,29px)] font-semibold leading-[1.12] tracking-[-0.03em] text-[#0A0A0A] sm:text-[36px] md:text-[40px] lg:text-[44px] text-balance">{t("Our Process")}</h2>

          <p className="mt-3 text-[18px] font-medium leading-[1.35] tracking-[-0.01em] text-[#C91F28] md:text-[18px]">{t("AI-Optimized, Transparent & Scalable.")}</p>

          <p className="mt-5 max-w-[500px] max-sm:mx-auto text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("We blend human expertise with AI precision — delivering faster outcomes without compromising security.")}</p>

          <button className="mt-7 rounded-full bg-[#C91F28] px-5 py-2.5 text-[14px] max-sm:mx-auto max-sm:min-h-[44px] font-semibold text-white transition-colors duration-200 hover:bg-[#A71920]">{t("Schedule a Call")}</button>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[#E7E7EA] md:mt-16">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt={t("Team presentation")}
              width={620}
              height={640}
              className="h-[280px] w-full object-cover sm:h-[380px] md:h-[520px]"
              unoptimized
            />
          </div>
        </div>

        {/* Steps timeline */}
        <div className="space-y-5 md:space-y-7">
          {PROCESS_STEPS.map((item, index) => {
            const isLast = index === PROCESS_STEPS.length - 1;
            return (
              <div key={item.label} className="relative md:pl-14">
                {/* connector */}
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute left-[17px] top-10 -bottom-8 w-px bg-[#E7E7EA] md:left-[19px] max-sm:hidden"
                  />
                )}

                {/* number node */}
                <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#C91F28] text-[14px] font-bold text-white shadow-[0_6px_16px_rgba(201,31,40,0.28)] md:h-10 md:w-10 md:text-[15px] max-sm:hidden">
                  {index + 1}
                </span>

                {/* card */}
                <div className="group mx-auto w-full rounded-2xl border border-[#E7E7EA] bg-white p-5 shadow-[0_1px_2px_rgba(10,10,10,0.04)] transition-all duration-300 ease-out hover:scale-[1.03] hover:border-[#C91F28] hover:shadow-[0_18px_40px_rgba(201,31,40,0.16)] motion-reduce:transition-none motion-reduce:hover:scale-100 md:p-6">
                  <div className="flex items-center gap-3 max-sm:justify-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C91F28]/10 text-[20px] leading-none">
                      {item.icon}
                    </span>
                    <span className="text-[12px] font-semibold uppercase tracking-normal text-[#C91F28] md:text-[13px]">
                      {t(item.label)}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0A0A0A] sm:text-[20px] md:text-[22px] lg:text-[22px] text-balance max-sm:text-center">
                    {t(item.title)}
                  </h3>

                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[14px] leading-[1.5] text-[#52525B] marker:text-[#C91F28] md:text-[15px]">
                    {item.points.map((point) => (
                      <li key={point}>{t(point)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
