import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, Award, Rocket, Headphones, ArrowRight } from "lucide-react";

import {
  ResourceHero,
  Section,
  SectionHeader,
  FeatureGrid,
  LogoRow,
  CtaBanner,
} from "@/components/resource-kit/ui";
import type { FeatureItem } from "@/components/resource-kit/ui";

export const metadata: Metadata = {
  title: "Partners | Brain Station 23",
  description:
    "Brain Station 23 partners with the world's leading technology platforms — AWS, Google Cloud, Microsoft, Salesforce and Moodle — to deliver certified expertise.",
};

const partnerLogos = [
  { src: "/images/footer/partner-aws.svg", alt: "Amazon Web Services" },
  { src: "/images/footer/partner-google-cloud.svg", alt: "Google Cloud" },
  { src: "/images/footer/partner-microsoft.svg", alt: "Microsoft" },
  { src: "/images/footer/partner-salesforce.svg", alt: "Salesforce" },
  { src: "/images/footer/partner-moodle.svg", alt: "Moodle" },
];

const benefits: FeatureItem[] = [
  {
    icon: Award,
    title: "Certified Expertise",
    description:
      "Our teams hold active certifications across every partner platform, so your project is built to official best practices.",
  },
  {
    icon: Cloud,
    title: "Early Access",
    description:
      "Partnership gives us early access to new features and roadmaps, so we can plan your architecture ahead of the market.",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description:
      "We escalate through partner channels to resolve critical issues faster than standard support would allow.",
  },
  {
    icon: Rocket,
    title: "Faster Delivery",
    description:
      "Pre-validated architectures and reference designs cut delivery time and de-risk complex cloud migrations.",
  },
];

export default function PartnersPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Resources · Partners"
        title="Powered by the World's Best Platforms"
        description="Our partnerships with leading cloud and enterprise platforms give your project certified expertise, early access to innovation and priority support."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Business partners shaking hands at a technology conference"
      />

      <Section>
        <SectionHeader
          eyebrow="Technology Partners"
          title="Trusted by the platforms you rely on"
          description="We maintain active partnerships and certified teams across the ecosystems our clients depend on most."
          align="center"
        />
        <div className="mt-14">
          <LogoRow logos={partnerLogos} />
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <SectionHeader
          eyebrow="Why It Matters"
          title="What our partnerships mean for you"
        />
        <div className="mt-14">
          <FeatureGrid items={benefits} columns={2} />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              tier: "Cloud & Infrastructure",
              partners: "AWS · Google Cloud · Microsoft Azure",
              text: "Architecture, migration, cost optimisation and managed cloud operations delivered by certified engineers.",
            },
            {
              tier: "Enterprise Platforms",
              partners: "Salesforce · Moodle",
              text: "CRM customisation, integration and learning-platform engineering built to platform standards.",
            },
            {
              tier: "Data & AI",
              partners: "Google Cloud · AWS",
              text: "Modern data pipelines, analytics and AI workloads on proven, partner-validated foundations.",
            },
          ].map((item) => (
            <article
              key={item.tier}
              className="rounded-[14px] border border-[#e6edf5] bg-white p-8"
            >
              <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#3f93cf]">
                {item.partners}
              </p>
              <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.03em] text-[#050b18]">
                {item.tier}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.55] text-[#5a6b7d]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/join-as-partner"
            className="inline-flex items-center gap-2 text-[17px] font-bold text-[#3f93cf] transition hover:gap-4 hover:text-[#2d8fca]"
          >
            Interested in partnering with us?
            <ArrowRight size={18} strokeWidth={2.2} />
          </Link>
        </div>
      </Section>

      <CtaBanner
        title="Build on a certified, partner-backed foundation"
        description="Work with a team that knows the platforms inside out. Let's scope your project."
        primary={{ label: "Book a Consultation", href: "/contact" }}
        secondary={{ label: "Become a Partner", href: "/join-as-partner" }}
      />
    </main>
  );
}
