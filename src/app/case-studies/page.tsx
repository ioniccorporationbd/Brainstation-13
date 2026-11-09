import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  ResourceHero,
  Section,
  SectionHeader,
  StatBand,
  CtaBanner,
} from "@/components/resource-kit/ui";

export const metadata: Metadata = {
  title: "Case Studies | Magnetic Solution Limited",
  description:
    "Real projects, real outcomes. Explore how Magnetic Solution Limited helped clients across fintech, retail, health and more build and scale technology.",
};

const caseStudies = [
  {
    category: "Fintech",
    title: "Digital wallet platform serving millions",
    excerpt:
      "We built a secure, high-throughput wallet platform with real-time payments, KYC and compliance built in.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    metric: "10M+ transactions / month",
  },
  {
    category: "Retail & E-commerce",
    title: "Headless commerce stack for rapid growth",
    excerpt:
      "A modern storefront and order platform that scaled effortlessly through peak shopping seasons.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    metric: "3.2× conversion uplift",
  },
  {
    category: "Healthcare",
    title: "Telehealth platform connecting patients and doctors",
    excerpt:
      "Video consultations, scheduling and secure records delivered on a HIPAA-aligned architecture.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    metric: "500K+ consultations",
  },
  {
    category: "Logistics",
    title: "Fleet tracking and route optimisation",
    excerpt:
      "Real-time visibility and intelligent routing cut fuel costs and improved on-time delivery.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop",
    metric: "28% lower fuel cost",
  },
  {
    category: "SaaS",
    title: "Enterprise analytics dashboard rebuild",
    excerpt:
      "A complete front-end re-architecture delivered a faster, more intuitive product for thousands of users.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    metric: "60% faster load times",
  },
  {
    category: "Education",
    title: "Scalable learning platform for global learners",
    excerpt:
      "A Moodle-based learning ecosystem serving students across multiple countries and languages.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    metric: "200K+ active learners",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Resources · Case Studies"
        title="Work That Moves the Needle"
        description="Every engagement starts with a business problem and ends with measurable results. Explore a selection of the platforms, products and transformations we've delivered."
        image="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Team reviewing project results on a whiteboard"
      />

      <StatBand
        stats={[
          { value: "500+", label: "Projects delivered" },
          { value: "40+", label: "Countries served" },
          { value: "19", label: "Years of engineering" },
          { value: "98%", label: "Client satisfaction" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Selected Work"
          title="Case studies across industries"
          description="From high-volume fintech to global learning platforms — here's a snapshot of the outcomes we deliver."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <Link
              key={item.title}
              href="/case-study"
              className="group flex flex-col overflow-hidden rounded-[14px] border border-[#ececec] bg-white transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_22px_50px_rgba(0,0,0,0.10)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[210px] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-[#c91f28]">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-[1.55] text-[#565656]">
                  {item.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-[#f7f7f8] pt-4">
                  <span className="text-[15px] font-bold text-[#c91f28]">
                    {item.metric}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#c91f28] transition group-hover:gap-3">
                    View
                    <ArrowRight size={15} strokeWidth={2.2} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Your success story starts here"
        description="Tell us about your challenge and we'll show you how we've solved it before."
        primary={{ label: "Start a Project", href: "/contact" }}
        secondary={{ label: "Read Our Blog", href: "/blog" }}
      />
    </main>
  );
}
