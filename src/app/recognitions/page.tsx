import type { Metadata } from "next";
import { Trophy, Star, TrendingUp, Globe2 } from "lucide-react";

import {
  ResourceHero,
  Section,
  SectionHeader,
  LogoRow,
  StatBand,
  CtaBanner,
} from "@/components/resource-kit/ui";

export const metadata: Metadata = {
  title: "Recognitions | Brain Station 23",
  description:
    "Awards, certifications and industry recognition earned by Brain Station 23 across global and regional technology communities.",
};

const awardLogos = [
  { src: "/images/footer/recognized-cmmi.svg", alt: "CMMI Level 5 appraisal" },
  { src: "/images/footer/recognized-inc5000.svg", alt: "Inc. 5000" },
  { src: "/images/footer/recognized-fortune.svg", alt: "Fortune recognition" },
  { src: "/images/footer/recognized-clutch.svg", alt: "Clutch top company" },
  { src: "/images/footer/recognized-basis.svg", alt: "BASIS national ICT award" },
  { src: "/images/footer/recognized-ey.svg", alt: "EY Entrepreneur of the Year" },
];

const highlights = [
  {
    icon: Trophy,
    title: "CMMI Level 5",
    description:
      "Appraised at the highest level of process maturity — a proven record of predictable, high-quality delivery.",
  },
  {
    icon: Star,
    title: "Top-Rated on Clutch",
    description:
      "Consistently ranked among the leading software development companies by verified client reviews.",
  },
  {
    icon: TrendingUp,
    title: "Fastest-Growing",
    description:
      "Recognised on growth lists for sustained year-over-year expansion across global markets.",
  },
  {
    icon: Globe2,
    title: "National ICT Champion",
    description:
      "Honoured by industry bodies for contribution to the country's technology export sector.",
  },
];

export default function RecognitionsPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Resources · Recognitions"
        title="Recognition Earned Through Results"
        description="Awards and certifications are only meaningful when they reflect real client outcomes. These recognitions show where sustained, disciplined engineering has taken us."
        image="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Award trophy on a stage under lights"
      />

      <StatBand
        stats={[
          { value: "CMMI 5", label: "Highest process maturity appraisal" },
          { value: "10+", label: "Global industry awards" },
          { value: "4.8/5", label: "Average verified client rating" },
          { value: "19", label: "Years of consistent delivery" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Certifications & Awards"
          title="Recognised by global and regional bodies"
          align="center"
        />
        <div className="mt-14">
          <LogoRow logos={awardLogos} />
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <SectionHeader
          eyebrow="Highlights"
          title="What these honours stand for"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex gap-5 rounded-[14px] border border-[#e6edf5] bg-white p-8"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[#eef6fc] text-[#3f93cf]">
                  <Icon size={26} strokeWidth={1.7} />
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#050b18]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-[1.55] text-[#5a6b7d]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <CtaBanner
        title="Experience award-winning delivery"
        description="Partner with a team whose quality is backed by certification and recognised by clients worldwide."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "See Our Work", href: "/case-studies" }}
      />
    </main>
  );
}
