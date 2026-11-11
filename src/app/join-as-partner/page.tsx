import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Handshake,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

import PartnerForm from "./PartnerForm";

export const metadata: Metadata = {
  title: "Join as Partner | Magnetic Solution Limited",
  description:
    "Partner with Magnetic Solution Limited. Grow revenue, extend your capabilities and deliver enterprise-grade technology with a trusted engineering team.",
};

const benefits = [
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
      "Tap into delivery capacity that provides certified talent and scale on demand.",
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
    audience: "Agencies & consultancies",
    text: "Introduce opportunities that fit our expertise and earn a referral fee on every engagement that closes.",
  },
  {
    name: "Reseller Partner",
    audience: "Regional resellers",
    text: "Resell our delivery capacity and managed services under an agreement that protects your margin.",
  },
  {
    name: "Technology Partner",
    audience: "Platform & product companies",
    text: "Co-build integrations and solutions that complement your platform and reach new markets together.",
  },
  {
    name: "Strategic Partner",
    audience: "Enterprise & system integrators",
    text: "Build a deep, long-term alliance with joint go-to-market, dedicated teams and co-investment.",
  },
];

const steps = [
  {
    step: "01",
    title: "Apply",
    text: "Tell us about your business, clients and the kind of partnership you're seeking.",
  },
  {
    step: "02",
    title: "Discover",
    text: "We align on goals, capability fit and the commercial model that works for both sides.",
  },
  {
    step: "03",
    title: "Onboard",
    text: "Sign the agreement, get your partner manager and access to enablement materials.",
  },
  {
    step: "04",
    title: "Grow",
    text: "Win deals together with shared pre-sales, delivery and marketing support.",
  },
];

export default function JoinAsPartnerPage() {
  return (
    <main>
      <section className="bg-white px-6 pb-16 pt-14 md:pb-20 md:pt-20">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
              Join as partner
            </span>
            <h1 className="mt-6 text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px]">
              Grow with Magnetic Solution Limited
            </h1>
            <p className="mt-5 max-w-[560px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">
              Turn your client relationships and expertise into new
              opportunities. Our partner programme gives you the engineering
              muscle, credibility and support to deliver enterprise-grade
              technology &mdash; together.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920]"
              >
                Apply to partner
                <ArrowRight size={17} />
              </a>
              <a
                href="#models"
                className="inline-flex items-center justify-center rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                See partnership models
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
              alt="Partners collaborating around a table"
              className="h-[260px] w-full object-cover md:h-[360px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Why partner
          </p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            A partnership built around your growth
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                    <Icon size={21} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-4 text-[16.5px] font-bold leading-[1.3] text-black">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[#55585e]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="models"
        className="scroll-mt-24 bg-white px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Programme
          </p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            Partnership models
          </h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">
            Choose the model that matches how you work with clients today
            &mdash; and grow into deeper collaboration over time.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {models.map((model) => (
              <article
                key={model.name}
                className="rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50 md:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                    <Handshake size={19} strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold text-black">
                      {model.name}
                    </h3>
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#6b6f76]">
                      {model.audience}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[14.5px] leading-[1.7] text-[#55585e]">
                  {model.text}
                </p>
                <a
                  href="#apply"
                  className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28] hover:text-[#a71920]"
                >
                  Apply for this model
                  <ArrowRight size={14} strokeWidth={2.2} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            How it works
          </p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            Get started in four steps
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-[#ececec] bg-white p-6"
              >
                <p className="text-[30px] font-bold leading-none tracking-[-0.04em] text-[#c91f28]">
                  {item.step}
                </p>
                <h3 className="mt-4 text-[16.5px] font-bold text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-[#55585e]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 bg-white px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1240px] items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Apply
            </p>
            <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
              Start the conversation
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">
              Tell us about your business and the kind of partnership you have
              in mind. Our partnerships team reviews every application.
            </p>
            <p className="mt-6 rounded-xl border border-[#ececec] bg-[#fafafa] px-5 py-4 text-[13.5px] leading-[1.7] text-[#55585e]">
              We don&rsquo;t publish partner logos or client names we cannot
              verify &mdash; every partnership on this site is one we can stand
              behind.
            </p>
          </div>
          <PartnerForm models={models.map((model) => model.name)} />
        </div>
      </section>

      <section className="bg-white px-6 pb-20 md:pb-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
            <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[36px]">
                  Prefer to talk it through first?
                </h2>
                <p className="mt-3 max-w-[620px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">
                  Book a short call and we will walk through fit, expectations
                  and the commercial model.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/schedule-a-call"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920]"
                >
                  Book a call
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
