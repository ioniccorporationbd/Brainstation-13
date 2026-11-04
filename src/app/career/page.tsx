import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake, GraduationCap, Globe2, Coffee } from "lucide-react";

import {
  ResourceHero,
  Section,
  SectionHeader,
  FeatureGrid,
  CtaBanner,
} from "@/components/resource-kit/ui";
import type { FeatureItem } from "@/components/resource-kit/ui";

export const metadata: Metadata = {
  title: "Career | Brain Station 23",
  description:
    "Join Brain Station 23 and build software that matters. Explore open roles in engineering, design, data and delivery across our global offices.",
};

const perks: FeatureItem[] = [
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Certifications, courses and mentorship budgets to keep your skills at the cutting edge.",
  },
  {
    icon: Globe2,
    title: "Global Exposure",
    description:
      "Work on products used across continents and collaborate with clients and teams worldwide.",
  },
  {
    icon: HeartHandshake,
    title: "People-First Culture",
    description:
      "Fair pay, health benefits and a supportive environment where wellbeing comes first.",
  },
  {
    icon: Coffee,
    title: "Flexible Work",
    description:
      "Hybrid and remote-friendly arrangements that help you do your best work.",
  },
];

const roles = [
  { title: "Senior Frontend Engineer", dept: "Engineering", location: "Dhaka · Hybrid", type: "Full-time" },
  { title: "Backend Engineer (Node.js)", dept: "Engineering", location: "Dhaka · Hybrid", type: "Full-time" },
  { title: "DevOps Engineer", dept: "Infrastructure", location: "Remote", type: "Full-time" },
  { title: "Data Engineer", dept: "Data & AI", location: "Dhaka · Hybrid", type: "Full-time" },
  { title: "Product Designer (UI/UX)", dept: "Design", location: "Dhaka · On-site", type: "Full-time" },
  { title: "QA Automation Engineer", dept: "Quality", location: "Remote", type: "Full-time" },
];

export default function CareerPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Resources · Career"
        title="Build Software That Matters"
        description="We're always looking for curious, driven people who want to solve hard problems for real clients. Grow your craft with a team that ships enterprise-grade technology across the globe."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Colleagues celebrating together in the office"
      />

      <Section>
        <SectionHeader
          eyebrow="Why Brain Station 23"
          title="A place to do the best work of your career"
        />
        <div className="mt-14">
          <FeatureGrid items={perks} columns={2} />
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]" >
        <SectionHeader
          eyebrow="Open Positions"
          title="Current opportunities"
          description="Don't see your role? Send us your CV anyway — we're always growing."
        />
        <div className="mt-14 overflow-hidden rounded-[14px] border border-[#e6edf5] bg-white">
          {roles.map((role, index) => (
            <div
              key={role.title}
              className={`flex flex-col gap-4 p-6 transition hover:bg-[#f8fafc] md:flex-row md:items-center md:justify-between md:p-7 ${
                index !== 0 ? "border-t border-[#eef2f7]" : ""
              }`}
            >
              <div>
                <h3 className="text-[19px] font-semibold tracking-[-0.03em] text-[#050b18]">
                  {role.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-[#5a6b7d]">
                  <span className="font-semibold text-[#3f93cf]">{role.dept}</span>
                  <span>{role.location}</span>
                  <span>{role.type}</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[#111E40] px-6 py-3 text-[14px] font-bold text-[#111E40] transition duration-300 hover:bg-[#111E40] hover:text-white"
              >
                Apply now
                <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Our Process" title="What to expect" align="center" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Apply", text: "Send your CV and portfolio through the role you're interested in." },
            { step: "02", title: "Screen", text: "A short conversation to understand your experience and goals." },
            { step: "03", title: "Interview", text: "Technical and team-fit discussions with the people you'd work with." },
            { step: "04", title: "Offer", text: "We move quickly — timely feedback and a clear offer when it's a match." },
          ].map((item) => (
            <div key={item.step} className="rounded-[14px] border border-[#e6edf5] bg-white p-8">
              <p className="text-[38px] font-light leading-none tracking-[-0.05em] text-[#4fa0d1]">
                {item.step}
              </p>
              <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.03em] text-[#050b18]">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.55] text-[#5a6b7d]">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Ready to join the team?"
        description="Explore open roles or get in touch — we'd love to hear from you."
        primary={{ label: "View Open Roles", href: "/career" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
