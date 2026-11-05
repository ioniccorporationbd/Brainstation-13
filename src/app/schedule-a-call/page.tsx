import type { Metadata } from "next";
import { CalendarCheck, Clock, Check, Globe } from "lucide-react";

import {
  ResourceHero,
  Section,
  SectionHeader,
  CtaBanner,
} from "@/components/resource-kit/ui";
import ContactForm from "@/components/resource-kit/ContactForm";

export const metadata: Metadata = {
  title: "Schedule a Call | Brain Station 23",
  description:
    "Book a discovery call with Brain Station 23. Tell us about your project and we'll set up time with the right specialists within one business day.",
};

const steps = [
  { title: "We listen", line: "A short conversation about your goals, constraints and timeline." },
  { title: "We scope", line: "The right specialists outline an approach, not a sales pitch." },
  { title: "We plan", line: "You leave with a clear next step — even if it's not with us." },
];

const benefits = [
  "30-minute discovery call with senior engineers",
  "Honest feasibility and effort guidance",
  "No obligation, no hard sell",
  "Response within one business day",
];

export default function ScheduleACallPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Let's Talk · Book a Call"
        title="Schedule a discovery call"
        description="Tell us what you're building and we'll connect you with the right specialists. Pick a time, share a few details, and we'll come prepared."
        image="/images/core-capabilities/team-collaboration.png"
        imageAlt="Brain Station 23 team ready to meet"
      />

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Request a Slot"
              title="Tell us about your project"
              description="Fill in the form and our team will follow up to agree on a time that works for you."
            />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <div>
            <div className="rounded-[16px] border border-[#e6edf5] bg-[#f9fbfd] p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#eef6fc] text-[#3f93cf]">
                  <CalendarCheck size={22} strokeWidth={1.8} />
                </span>
                <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-[#050b18]">
                  What to expect
                </h3>
              </div>
              <ol className="mt-6 space-y-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111E40] text-[14px] font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-[16px] font-semibold text-[#050b18]">{step.title}</p>
                      <p className="mt-1 text-[15px] leading-[1.5] text-[#5a6b7d]">{step.line}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 rounded-[16px] border border-[#e6edf5] bg-white p-8">
              <ul className="space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eaf7ef] text-[#2e9e5b]">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-medium leading-[1.5] text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3 border-t border-[#eef4f9] pt-5 text-[14px] text-[#5a6b7d]">
                <Clock size={16} strokeWidth={1.8} className="text-[#3f93cf]" />
                Prefer email? Write to hello@brainstation-23.com
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-[16px] bg-[#111E40] p-6 text-white">
              <Globe size={22} strokeWidth={1.8} className="text-[#4fa0d1]" />
              <p className="text-[15px] leading-[1.5] text-white/80">
                Teams across 4 countries on standby — calls scheduled in your timezone.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Rather explore our work first?"
        description="Browse case studies, industries and services to see how we approach delivery."
        primary={{ label: "View case studies", href: "/case-studies" }}
        secondary={{ label: "Explore services", href: "/services" }}
      />
    </main>
  );
}
