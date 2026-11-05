import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  FileText,
  ShieldCheck,
  Users,
  Mail,
  ArrowRight,
} from "lucide-react";

import {
  ResourceHero,
  Section,
  SectionHeader,
  StatBand,
  FeatureGrid,
  CtaBanner,
} from "@/components/resource-kit/ui";
import type { FeatureItem } from "@/components/resource-kit/ui";

export const metadata: Metadata = {
  title: "Investor Relations | Brain Station 23",
  description:
    "Financial highlights, reports and corporate governance information for investors and analysts of Brain Station 23.",
};

const govItems: FeatureItem[] = [
  {
    icon: ShieldCheck,
    title: "Corporate Governance",
    description:
      "Independent oversight, clear committees and transparent decision-making across the organisation.",
  },
  {
    icon: Users,
    title: "Board & Leadership",
    description:
      "Experienced leaders with deep technology, finance and governance expertise.",
  },
  {
    icon: FileText,
    title: "Policies & Charters",
    description:
      "Documented codes of conduct, disclosure policies and committee charters available on request.",
  },
];

const reports = [
  {
    title: "Annual Report 2024",
    text: "Full-year financial and operational results.",
    type: "Annual Report · PDF",
  },
  {
    title: "Q3 2025 Results",
    text: "Quarterly performance highlights and outlook.",
    type: "Quarterly · PDF",
  },
  {
    title: "Corporate Governance Statement",
    text: "Governance framework, board composition and controls.",
    type: "Governance · PDF",
  },
];

export default function InvestorRelationsPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Resources · Investor Relations"
        title="Investor Relations"
        description="Brain Station 23 delivers sustainable growth built on disciplined engineering and long-term client partnerships. Here you'll find our financial highlights, reports and governance information."
        image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Financial charts and analytics on a screen"
      />

      <StatBand
        stats={[
          { value: "19 yrs", label: "Track record of delivery" },
          { value: "1,500+", label: "Employees worldwide" },
          { value: "40+", label: "Countries served" },
          { value: "98%", label: "Client retention" },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#eef6fc] text-[#3f93cf]">
              <TrendingUp size={26} strokeWidth={1.7} />
            </div>
            <h2 className="text-[30px] font-medium leading-[1.14] tracking-[-0.05em] text-[#050b18] md:text-[38px]">
              A business built for the long term
            </h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-[#5a6b7d]">
              We combine recurring, relationship-driven revenue with a
              globally diversified client base. Our focus on quality delivery and
              deep partnerships has produced steady, durable growth.
            </p>
            <p className="mt-4 text-[17px] leading-[1.6] text-[#5a6b7d]">
              Management is committed to transparent communication and to
              creating lasting value for shareholders, clients and employees
              alike.
            </p>
          </div>
          <div className="rounded-[16px] border border-[#e6edf5] bg-[#f4f8fc] p-8">
            <h3 className="text-[18px] font-semibold text-[#050b18]">
              Investment Highlights
            </h3>
            <ul className="mt-5 space-y-4">
              {[
                "Diversified revenue across industries and geographies",
                "Long-term enterprise client relationships",
                "Scalable delivery model with certified talent",
                "Strong governance and financial discipline",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] leading-[1.5] text-[#374151]">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#3f93cf]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <SectionHeader
          eyebrow="Reports & Filings"
          title="Financial reports"
          description="Download our latest reports and statements. Additional materials are available on request."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reports.map((report) => (
            <article
              key={report.title}
              className="flex flex-col rounded-[14px] border border-[#e6edf5] bg-white p-8"
            >
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#eef6fc] text-[#3f93cf]">
                <FileText size={26} strokeWidth={1.7} />
              </div>
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#8a96a5]">
                {report.type}
              </p>
              <h3 className="mt-2 text-[20px] font-semibold tracking-[-0.03em] text-[#050b18]">
                {report.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-[1.55] text-[#5a6b7d]">
                {report.text}
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-[#3f93cf] transition hover:gap-4 hover:text-[#2d8fca]"
              >
                Request report
                <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Governance" title="Corporate governance" />
        <div className="mt-14">
          <FeatureGrid items={govItems} />
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <div className="mx-auto max-w-[760px] rounded-[18px] border border-[#e6edf5] bg-white p-10 text-center md:p-14">
          <div className="mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-[14px] bg-[#eef6fc] text-[#3f93cf]">
            <Mail size={28} strokeWidth={1.7} />
          </div>
          <h2 className="mt-6 text-[28px] font-medium tracking-[-0.04em] text-[#050b18] md:text-[34px]">
            Investor inquiries
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.6] text-[#5a6b7d]">
            For investor relations questions, please contact our team and we&apos;ll
            connect you with the right person.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#111E40] px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1c2b52]"
          >
            Contact IR
            <ArrowRight size={17} strokeWidth={2.1} />
          </Link>
        </div>
      </Section>

      <CtaBanner
        title="Transparent by design"
        description="Explore our latest results, governance practices and long-term growth story."
        primary={{ label: "Contact Investor Relations", href: "/contact" }}
        secondary={{ label: "About the Company", href: "/about-us" }}
      />
    </main>
  );
}
