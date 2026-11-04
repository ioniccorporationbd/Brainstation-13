import type { Metadata } from "next";
import {
  Target,
  Eye,
  Rocket,
  Globe2,
  Users,
  ShieldCheck,
  Sparkles,
  Handshake,
} from "lucide-react";

import {
  ResourceHero,
  Section,
  SectionHeader,
  FeatureGrid,
  StatBand,
  SplitBlock,
  CtaBanner,
} from "@/components/resource-kit/ui";
import type { FeatureItem } from "@/components/resource-kit/ui";

export const metadata: Metadata = {
  title: "About Us | Brain Station 23",
  description:
    "Founded in 2006, Brain Station 23 is a global software company powering digital transformation across industries with enterprise-grade engineering.",
};

const values: FeatureItem[] = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description:
      "We pursue new technologies relentlessly and turn them into practical products that create real business value.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering Excellence",
    description:
      "Quality, security and maintainability are non-negotiable. We build software that lasts and scales.",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description:
      "We work as an extension of your team — transparent, responsive and invested in your long-term success.",
  },
];

const capabilities: FeatureItem[] = [
  {
    icon: Rocket,
    title: "Product & Platform Engineering",
    description:
      "End-to-end product development — from MVP to enterprise platforms — with modern web, mobile and cloud stacks.",
  },
  {
    icon: Globe2,
    title: "Digital Transformation",
    description:
      "We modernise legacy systems, automate operations and connect data so enterprises can move faster.",
  },
  {
    icon: Users,
    title: "Talent & Staff Augmentation",
    description:
      "Dedicated, vetted engineering teams that plug into your delivery model and scale on demand.",
  },
];

export default function AboutUsPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Resources · About Us"
        title="About Brain Station 23"
        description="Founded in 2006, we are a global software company powering digital transformation across industries. From startups to Fortune-listed enterprises, teams trust us to design, build and scale technology that matters."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Brain Station 23 team collaborating in an open office"
      />

      <StatBand
        stats={[
          { value: "2006", label: "Founded — nearly two decades of engineering" },
          { value: "1,500+", label: "Technology professionals worldwide" },
          { value: "40+", label: "Countries served across four continents" },
          { value: "500+", label: "Enterprise and startup clients delivered" },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#eef6fc] text-[#3f93cf]">
              <Target size={26} strokeWidth={1.7} />
            </div>
            <h2 className="text-[30px] font-medium leading-[1.14] tracking-[-0.05em] text-[#050b18] md:text-[38px]">
              Our Mission
            </h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-[#5a6b7d]">
              To help organisations succeed in the digital economy by building
              world-class software and providing dependable, future-ready
              engineering talent.
            </p>
          </div>
          <div>
            <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#eef6fc] text-[#3f93cf]">
              <Eye size={26} strokeWidth={1.7} />
            </div>
            <h2 className="text-[30px] font-medium leading-[1.14] tracking-[-0.05em] text-[#050b18] md:text-[38px]">
              Our Vision
            </h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-[#5a6b7d]">
              To be the most trusted global technology partner from South Asia —
              known for innovation, integrity and the exceptional quality of our
              people.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <SectionHeader
          eyebrow="Our Values"
          title="What guides every project we deliver"
          align="center"
        />
        <div className="mt-14">
          <FeatureGrid items={values} />
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="What We Do"
          title="Full-spectrum technology expertise"
          description="One partner for strategy, engineering, modernisation and talent — across the whole product lifecycle."
        />
        <div className="mt-14">
          <FeatureGrid items={capabilities} />
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <SplitBlock
          image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
          imageAlt="Modern Brain Station office interior"
          eyebrow="Our Story"
          title="From a small studio to a global delivery network"
          paragraphs={[
            "Brain Station 23 started in Dhaka with a handful of engineers and a bold belief: that world-class software can be built anywhere in the world.",
            "Today we serve clients across North America, Europe, the Middle East and Asia, with delivery centres that combine global standards with local talent.",
          ]}
          bullets={[
            "Multi-industry expertise across fintech, health, retail and more",
            "Certified engineering practices (CMMI, ISO, GDPR-aligned)",
            "Long-term partnerships averaging five-plus years",
          ]}
        />
      </Section>

      <CtaBanner
        title="Let's build your next breakthrough together"
        description="Whether you're launching a startup or modernising an enterprise, our team is ready to help you move faster."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "See Our Work", href: "/case-studies" }}
      />
    </main>
  );
}
