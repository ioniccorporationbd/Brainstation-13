import type { Metadata } from "next";
import {
  Handshake,
  TrendingUp,
  Globe2,
  Users,
  Megaphone,
  Wrench,
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
  title: "Join as Partner | Brain Station 23",
  description:
    "Become a Brain Station 23 partner. Grow revenue, extend your capabilities and deliver enterprise-grade technology with a trusted global engineering team.",
};

const benefits: FeatureItem[] = [
  {
    icon: TrendingUp,
    title: "New Revenue Streams",
    description:
      "Refer projects, resell services or co-deliver engagements and share in the value you create.",
  },
  {
    icon: Wrench,
    title: "Extend Your Capabilities",
    description:
      "Offer enterprise-grade engineering to your clients without building a large in-house team.",
  },
  {
    icon: Globe2,
    title: "Global Delivery",
    description:
      "Tap into delivery centres that provide certified talent, 24/7 coverage and scale on demand.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Get a named partner manager, technical pre-sales help and priority engineering support.",
  },
];

const models = [
  {
    name: "Referral Partner",
    for: "Agencies & consultancies",
    text: "Introduce opportunities that fit our expertise and earn a referral fee on every engagement that closes.",
  },
  {
    name: "Reseller Partner",
    for: "Regional resellers",
    text: "Resell our delivery capacity and managed services under an agreement that protects your margin.",
  },
  {
    name: "Technology Partner",
    for: "Platform & product companies",
    text: "Co-build integrations and solutions that complement your platform and reach new markets together.",
  },
  {
    name: "Strategic Partner",
    for: "Enterprise & system integrators",
    text: "Build a deep, long-term alliance with joint go-to-market, dedicated teams and co-investment.",
  },
];

const steps = [
  { step: "01", title: "Apply", text: "Tell us about your business, clients and the kind of partnership you're seeking." },
  { step: "02", title: "Discover", text: "We align on goals, capability fit and the commercial model that works for both sides." },
  { step: "03", title: "Onboard", text: "Sign the agreement, get your partner manager and access to enablement materials." },
  { step: "04", title: "Grow", text: "Win deals together with shared pre-sales, delivery and marketing support." },
];

export default function JoinAsPartnerPage() {
  return (
    <main>
      <ResourceHero
        eyebrow="Resources · Join as Partner"
        title="Grow With Brain Station 23"
        description="Turn your client relationships and expertise into new opportunities. Our partner programme gives you the engineering muscle, credibility and support to deliver enterprise-grade technology — together."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Partners collaborating around a table"
      />

      <Section>
        <SectionHeader
          eyebrow="Why Partner"
          title="A partnership built around your growth"
        />
        <div className="mt-14">
          <FeatureGrid items={benefits} columns={2} />
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <SectionHeader
          eyebrow="Programme"
          title="Partnership models"
          description="Choose the model that matches how you work with clients today — and grow into deeper collaboration over time."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {models.map((model) => (
            <article
              key={model.name}
              className="rounded-[14px] border border-[#e6edf5] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(17,30,64,0.08)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[11px] bg-[#eef6fc] text-[#3f93cf]">
                  <Handshake size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#050b18]">
                    {model.name}
                  </h3>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#8a96a5]">
                    {model.for}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-[16px] leading-[1.55] text-[#5a6b7d]">
                {model.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="How It Works" title="Get started in four steps" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-[14px] border border-[#e6edf5] bg-white p-8"
            >
              <p className="text-[38px] font-light leading-none tracking-[-0.05em] text-[#4fa0d1]">
                {item.step}
              </p>
              <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.03em] text-[#050b18]">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.55] text-[#5a6b7d]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#f4f8fc]">
        <div className="flex flex-col items-center gap-6 rounded-[18px] border border-[#e6edf5] bg-white p-10 text-center md:p-14">
          <span className="flex h-[56px] w-[56px] items-center justify-center rounded-[14px] bg-[#eef6fc] text-[#3f93cf]">
            <Megaphone size={28} strokeWidth={1.7} />
          </span>
          <h2 className="max-w-[640px] text-[28px] font-medium tracking-[-0.04em] text-[#050b18] md:text-[34px]">
            Ready to explore a partnership?
          </h2>
          <p className="max-w-[560px] text-[16px] leading-[1.6] text-[#5a6b7d]">
            Reach out and our partner team will get in touch to discuss the best
            fit for your business.
          </p>
          <CtaBannerButton />
        </div>
      </Section>
    </main>
  );
}

function CtaBannerButton() {
  return (
    <a
      href="/contact"
      className="inline-flex items-center gap-2 rounded-full bg-[#ffab2e] px-8 py-4 text-[15px] font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_16px_38px_rgba(255,171,46,0.35)]"
    >
      Apply to Partner
    </a>
  );
}
