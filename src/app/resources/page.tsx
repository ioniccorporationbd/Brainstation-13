import type { Metadata } from "next";
import Link from "next/link";
import {
  Newspaper,
  Briefcase,
  Mic,
  Handshake,
  Trophy,
  Leaf,
  Download,
  FileText,
  ArrowRight,
} from "lucide-react";

import {
  ResourceHero,
  Section,
  SectionHeader,
  FeatureGrid,
  CtaBanner,
} from "@/components/resource-kit/ui";
import type { FeatureItem } from "@/components/resource-kit/ui";

export const metadata: Metadata = {
  title: "Our Resources | Brain Station 23",
  description:
    "Explore everything Brain Station 23 has to offer — blog insights, case studies, media, partnerships, certifications, sustainability and downloadable guides.",
};

const hubs: FeatureItem[] = [
  {
    icon: Newspaper,
    title: "Blog & Insights",
    description:
      "Practical articles on engineering, cloud, AI and building great technology teams.",
  },
  {
    icon: Briefcase,
    title: "Case Studies",
    description:
      "Real projects with measurable outcomes across fintech, retail, health and more.",
  },
  {
    icon: Mic,
    title: "Media",
    description:
      "Press coverage, announcements and media assets for editorial use.",
  },
  {
    icon: Handshake,
    title: "Partners",
    description:
      "The cloud and enterprise platforms we're certified to deliver on.",
  },
  {
    icon: Trophy,
    title: "Recognitions",
    description:
      "Awards and certifications earned through consistent, quality delivery.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "How we build a responsible, low-carbon and people-first company.",
  },
];

const downloads = [
  {
    icon: FileText,
    title: "Digital Transformation Playbook",
    text: "A step-by-step guide to modernising legacy systems without disruption.",
    type: "Guide · PDF",
  },
  {
    icon: FileText,
    title: "Cloud Migration Checklist",
    text: "The 20-point checklist we use before every enterprise cloud migration.",
    type: "Checklist · PDF",
  },
  {
    icon: FileText,
    title: "Security & Compliance Overview",
    text: "How we protect client data — controls mapped to ISO and GDPR.",
    type: "Whitepaper · PDF",
  },
];

const hubLinks: Record<string, string> = {
  "Blog & Insights": "/blog",
  "Case Studies": "/case-studies",
  Media: "/media",
  Partners: "/partners",
  Recognitions: "/recognitions",
  Sustainability: "/sustainability",
};

export default function ResourcesPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Resources"
        title="Our Resources"
        description="Everything you need to understand how we work and what we deliver — insights, proof of results, media, partnerships and downloadable guides, all in one place."
        image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Library of resources and books"
      />

      <Section>
        <SectionHeader
          eyebrow="Explore"
          title="Browse by topic"
          description="Jump straight to the resources most relevant to you."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hubs.map((hub) => {
            const Icon = hub.icon;
            return (
              <Link
                key={hub.title}
                href={hubLinks[hub.title] ?? "/resources"}
                className="group rounded-[14px] border border-[#e6edf5] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#cfe0ef] hover:shadow-[0_22px_50px_rgba(17,30,64,0.10)]"
              >
                <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#eef6fc] text-[#3f93cf] transition duration-300 group-hover:bg-[#fff3dd] group-hover:text-[#ffab2e]">
                  <Icon size={26} strokeWidth={1.7} />
                </div>
                <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-[#050b18]">
                  {hub.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.55] text-[#5a6b7d]">
                  {hub.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-[#3f93cf] transition group-hover:gap-4">
                  Explore
                  <ArrowRight size={16} strokeWidth={2.2} />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <SectionHeader
          eyebrow="Downloads"
          title="Guides & whitepapers"
          description="Practical resources distilled from thousands of engagements — free to download."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {downloads.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-[14px] border border-[#e6edf5] bg-white p-8"
              >
                <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#eef6fc] text-[#3f93cf]">
                  <Icon size={26} strokeWidth={1.7} />
                </div>
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#8a96a5]">
                  {item.type}
                </p>
                <h3 className="mt-2 text-[20px] font-semibold tracking-[-0.03em] text-[#050b18]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-[1.55] text-[#5a6b7d]">
                  {item.text}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-[#3f93cf] transition hover:gap-4 hover:text-[#2d8fca]"
                >
                  <Download size={16} strokeWidth={2.1} />
                  Request download
                </Link>
              </article>
            );
          })}
        </div>
      </Section>

      <CtaBanner
        title="Can't find what you're looking for?"
        description="Our team is happy to share the resources, references and answers you need."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Read the Blog", href: "/blog" }}
      />
    </main>
  );
}
