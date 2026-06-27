'use client';

import React from 'react';
import Image from 'next/image';

const PROCESS_STEPS = [
  {
    icon: '🧠',
    step: 'Step 1',
    label: 'AI-Powered Discovery Audit',
    title: 'Zero-risk assessment, tailored roadmap',
    points: [
      'Free 60-min strategy session to analyze your tech stack',
      'AI-driven scoping tool estimates time/cost savings',
      'Receive a GDPR/ISO 2701-compliant project blueprint',
    ],
  },
  {
    icon: '🧩',
    step: 'Step 2',
    label: 'Hybrid Team Onboarding',
    title: 'Right talent + AI tools from day one',
    points: [
      'Match with vetted engineers (800+ experts)',
      'AI-augmented sprint planning for 30% faster kickoff',
      'Dedicated PM + automated progress dashboards',
    ],
  },
  {
    icon: '🛡️',
    step: 'Step 3',
    label: 'Build with AI Guardrails',
    title: 'Code, test, deploy—smarter',
    points: [
      'AI pair-programming assistants (70% faster dev)',
      'Self-healing test suites (99.9% reliability)',
      'Real-time compliance checks (ISO 27001 baked in)',
    ],
  },
  {
    icon: '🚀',
    step: 'Step 4',
    label: 'Scale with Confidence',
    title: 'Your growth, automated',
    points: [
      'AI-optimized cloud deployment',
      'Continuous performance monitoring + predictive scaling',
      '90-day post-launch support with AI-driven analytics',
    ],
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-[#f3f8fc] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-14 px-5 md:grid-cols-[1fr_0.95fr] md:gap-16">
        <div>
          <h2 className="max-w-[520px] text-[42px] font-medium leading-[1.08] tracking-[-0.05em] text-[#10172d] md:text-[58px]">
            Our Process:
            <br />
            AI-Optimized,
            <br />
            Transparent, Scalable
          </h2>

          <p className="mt-7 max-w-[500px] text-[16px] leading-[1.5] text-[#35647c] md:text-[18px]">
            We blend human expertise with AI precision—delivering faster outcomes
            without compromising security.
          </p>

          <button className="mt-8 rounded-full bg-[#ffb32c] px-6 py-3 text-[14px] font-semibold text-black transition hover:bg-[#f5a91f]">
            Schedule a Call
          </button>

          <div className="mt-16 overflow-hidden rounded-[8px] md:mt-20">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Team presentation"
              width={620}
              height={640}
              className="h-[420px] w-full object-cover md:h-[560px]"
              unoptimized
            />
          </div>
        </div>

        <div className="space-y-16 md:pt-2">
          {PROCESS_STEPS.map((item) => (
            <div key={item.step}>
              <div className="mb-8 text-[34px] leading-none text-[#3b96cf]">
                {item.icon}
              </div>

              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-[#3b96cf] px-3 py-1 text-[12px] font-semibold text-white">
                  {item.step}
                </span>

                <span className="text-[16px] font-medium text-[#3b96cf]">
                  {item.label}
                </span>
              </div>

              <h3 className="max-w-[500px] text-[28px] font-medium leading-[1.12] tracking-[-0.04em] text-[#10172d] md:text-[32px]">
                {item.title}
              </h3>

              <ul className="mt-5 space-y-2 pl-5 text-[15px] leading-[1.45] text-[#35647c] md:text-[16px]">
                {item.points.map((point) => (
                  <li key={point} className="list-disc">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}