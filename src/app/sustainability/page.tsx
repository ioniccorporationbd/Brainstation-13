import type { Metadata } from "next";
import {
  Leaf,
  Users,
  Scale,
  Recycle,
  Sun,
  Droplets,
  HeartHandshake,
  GraduationCap,
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
  title: "Sustainability | Brain Station 23",
  description:
    "How Brain Station 23 builds a responsible, low-carbon and people-first technology company for a sustainable digital future.",
};

const pillars: FeatureItem[] = [
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description:
      "We reduce our carbon footprint through efficient cloud infrastructure, responsible e-waste handling and energy-conscious offices across every delivery centre.",
  },
  {
    icon: Users,
    title: "Social Responsibility",
    description:
      "We invest in people — fair employment, continuous learning and inclusive opportunities that uplift the communities where we operate.",
  },
  {
    icon: Scale,
    title: "Responsible Governance",
    description:
      "Transparent reporting, ethical business conduct and strong data stewardship keep accountability at the centre of every decision.",
  },
];

const initiatives: FeatureItem[] = [
  {
    icon: Sun,
    title: "Green Data Centres",
    description:
      "Workloads are migrated to efficient cloud regions and right-sized servers, cutting idle compute and redundant energy use.",
  },
  {
    icon: Recycle,
    title: "Circular IT",
    description:
      "Hardware is repaired, refurbished and responsibly recycled. End-of-life devices follow certified e-waste programmes.",
  },
  {
    icon: Droplets,
    title: "Paperless Operations",
    description:
      "Digitised workflows across HR, finance and delivery reduce paper consumption and physical waste year over year.",
  },
  {
    icon: GraduationCap,
    title: "Skills for the Future",
    description:
      "Free training, internships and mentorship programmes open technology careers to thousands of young learners.",
  },
  {
    icon: HeartHandshake,
    title: "Community Impact",
    description:
      "We partner with local organisations on education, health and disaster-relief initiatives that build resilient communities.",
  },
  {
    icon: Leaf,
    title: "Sustainable Delivery",
    description:
      "Remote-first collaboration and green commuting policies reduce daily travel emissions for our distributed teams.",
  },
];

export default function SustainabilityPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Resources · Sustainability"
        title="Building a Sustainable Digital Future"
        description="At Brain Station 23 we believe technology should create lasting value for people and the planet. Sustainability is not a side initiative — it is engineered into how we build, operate and grow."
        image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Lush green forest canopy representing environmental sustainability"
      />

      <StatBand
        stats={[
          { value: "40%", label: "Reduction in office energy use since 2021" },
          { value: "100%", label: "Paperless internal workflows" },
          { value: "5,000+", label: "Learners trained through free programmes" },
          { value: "12", label: "Community partnerships active today" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Our Commitment"
          title="Three pillars, one accountable promise"
          description="Our sustainability framework balances environmental impact, social equity and responsible governance — measured, reported and improved every year."
        />
        <div className="mt-14">
          <FeatureGrid items={pillars} />
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <SplitBlock
          image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop"
          imageAlt="Solar panels and clean energy infrastructure"
          eyebrow="Environment"
          title="Greener infrastructure, measurable results"
          paragraphs={[
            "We continuously optimise our cloud footprint — consolidating workloads, choosing renewable-powered regions and retiring inefficient hardware.",
            "Every team is accountable for resource use, and our facilities track energy and waste against clear annual reduction targets.",
          ]}
          bullets={[
            "Right-sized cloud provisioning to eliminate idle compute",
            "Certified e-waste recycling for all decommissioned devices",
            "Energy-efficient lighting and cooling across offices",
          ]}
        />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Programmes"
          title="Initiatives we run today"
          description="Practical programmes that turn our commitments into everyday habits across the entire organisation."
        />
        <div className="mt-14">
          <FeatureGrid items={initiatives} />
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <SplitBlock
          reverse
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
          imageAlt="Diverse team collaborating in a bright office"
          eyebrow="People & Community"
          title="Growth that lifts the community with it"
          paragraphs={[
            "Our social impact work focuses on widening access to technology education, supporting employee wellbeing and standing with communities in times of need.",
            "From scholarships to mentorship, we invest in the next generation of engineers, makers and leaders.",
          ]}
          bullets={[
            "Inclusive hiring and equal-opportunity advancement",
            "Paid volunteering and disaster-relief support",
            "Free bootcamps and open learning resources",
          ]}
        />
      </Section>

      <CtaBanner
        title="Partner with a responsible technology company"
        description="Looking for a vendor that shares your environmental and social values? Let's build something sustainable together."
        primary={{ label: "Talk to Our Team", href: "/contact" }}
        secondary={{ label: "Explore Our Resources", href: "/resources" }}
      />
    </main>
  );
}
