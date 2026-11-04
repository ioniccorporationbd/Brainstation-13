import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper, Mic, Download, Mail } from "lucide-react";

import {
  ResourceHero,
  Section,
  SectionHeader,
  FeatureGrid,
  CtaBanner,
} from "@/components/resource-kit/ui";
import type { FeatureItem } from "@/components/resource-kit/ui";

export const metadata: Metadata = {
  title: "Media | Brain Station 23",
  description:
    "Press coverage, announcements and media resources from Brain Station 23. Contact our communications team for interviews and press kits.",
};

const featured = [
  {
    category: "Announcement",
    title: "Brain Station 23's CEO promotes Bangladesh's tech prowess at WEF 2025",
    excerpt:
      "Our leadership joined global technology voices to highlight the country's growing software export sector and its role in the digital economy.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    date: "January 2025",
  },
  {
    category: "Award",
    title: "Recognised among the fastest-growing technology companies",
    excerpt:
      "Sustained global expansion and disciplined delivery earned a place on a leading growth list for the region.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    date: "November 2024",
  },
  {
    category: "Partnership",
    title: "Expanding cloud engineering capabilities with certified expertise",
    excerpt:
      "New certifications across major cloud platforms strengthen our ability to deliver complex migrations end to end.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    date: "September 2024",
  },
];

const resources: FeatureItem[] = [
  {
    icon: Newspaper,
    title: "Press Coverage",
    description:
      "Selected articles and features from leading technology and business publications.",
  },
  {
    icon: Mic,
    title: "Interviews & Commentary",
    description:
      "Expert commentary from our leadership on software, talent and digital transformation.",
  },
  {
    icon: Download,
    title: "Media Kit",
    description:
      "Logos, brand guidelines, executive bios and high-resolution imagery for editorial use.",
  },
];

export default function MediaPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Resources · Media"
        title="News, Press & Media Resources"
        description="The latest announcements, coverage and media assets from Brain Station 23. For interviews, commentary or a press kit, reach out to our communications team."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Newspapers and press materials on a desk"
      />

      <Section>
        <SectionHeader
          eyebrow="Featured"
          title="Latest announcements & coverage"
        />
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[14px] border border-[#e6edf5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(17,30,64,0.10)]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[210px] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-[13px] font-semibold">
                  <span className="rounded-full bg-[#eef6fc] px-3 py-1 text-[#3f93cf]">
                    {item.category}
                  </span>
                  <span className="text-[#8a96a5]">{item.date}</span>
                </div>
                <h3 className="mt-4 text-[20px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#050b18]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.55] text-[#5a6b7d]">
                  {item.excerpt}
                </p>
                <Link
                  href="/media"
                  className="mt-5 inline-flex items-center gap-2 text-[15px] font-bold text-[#3f93cf] transition hover:gap-4 hover:text-[#2d8fca]"
                >
                  Read more
                  <ArrowRight size={16} strokeWidth={2.2} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <SectionHeader eyebrow="Media Resources" title="What we can provide" />
        <div className="mt-14">
          <FeatureGrid items={resources} />
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-[760px] rounded-[18px] border border-[#e6edf5] bg-white p-10 text-center md:p-14">
          <div className="mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-[14px] bg-[#eef6fc] text-[#3f93cf]">
            <Mail size={28} strokeWidth={1.7} />
          </div>
          <h2 className="mt-6 text-[28px] font-medium tracking-[-0.04em] text-[#050b18] md:text-[34px]">
            Media & press inquiries
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.6] text-[#5a6b7d]">
            For interviews, expert commentary or to request our media kit,
            please contact the communications team and we'll respond promptly.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#111E40] px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1c2b52]"
          >
            Contact Communications
            <ArrowRight size={17} strokeWidth={2.1} />
          </Link>
        </div>
      </Section>

      <CtaBanner
        title="Stay connected with Brain Station 23"
        description="Follow our journey as we build the future of software from South Asia to the world."
        primary={{ label: "Read Our Blog", href: "/blog" }}
        secondary={{ label: "Explore Resources", href: "/resources" }}
      />
    </main>
  );
}
