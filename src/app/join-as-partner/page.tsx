import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import { pageMetadata } from "@/i18n/seo";
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

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/join-as-partner",
    title: t("Join as Partner | Magnetic Solution Limited"),
    description: t("Partner with Magnetic Solution Limited. Grow revenue, extend your capabilities and deliver enterprise-grade technology with a trusted engineering team."),
  });
}

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

export default async function JoinAsPartnerPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <section className="bg-white pb-16 max-sm:pb-7 pt-14 max-sm:pt-6 md:pb-20 md:pt-20">
        <div className="mx-auto grid brand-container items-center max-sm:gap-8 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:flex max-sm:w-fit max-sm:mx-auto">{t("Join as partner")}</span>
            <h1 className="max-sm:mx-auto max-sm:text-center mt-6 font-semibold text-black text-[clamp(28px,8.387vw,36px)] leading-[1.08] tracking-[-0.035em] sm:text-[40px] md:text-[50px] lg:text-[54px]">{t("Grow with us")}</h1>
            <p className="max-sm:mx-auto max-sm:text-center mt-5 max-w-[560px] text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:text-[16.5px] text-pretty">{t("Turn your client relationships and expertise into new opportunities. Our partner programme gives you the engineering muscle, credibility and support to deliver enterprise-grade technology — together.")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920]"
              >{t("Apply to partner")}<ArrowRight size={17} />
              </a>
              <a
                href="#models"
                className="inline-flex items-center justify-center sm:shrink-0 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("See partnership models")}</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
              alt={t("Partners collaborating around a table")}
              className="h-[260px] w-full object-cover md:h-[360px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-16 max-sm:py-8 md:py-20">
        <div className="mx-auto brand-container">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Why partner")}</p>
          <h2 className="max-sm:mx-auto max-sm:text-center mt-4 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("A partnership built around your growth")}</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-[#ececec] bg-white p-7 max-sm:p-4 transition-colors duration-200 hover:border-[#c91f28]/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                    <Icon size={21} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-4 text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                    {t(benefit.title)}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[#52525B] text-pretty">
                    {t(benefit.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="models"
        className="scroll-mt-24 bg-white py-16 max-sm:py-8 md:py-20"
      >
        <div className="mx-auto brand-container">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Programme")}</p>
          <h2 className="max-sm:mx-auto max-sm:text-center mt-4 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Partnership models")}</h2>
          <p className="max-sm:mx-auto max-sm:text-center mt-4 max-w-[640px] text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:text-[16.5px] text-pretty">{t("Choose the model that matches how you work with clients today — and grow into deeper collaboration over time.")}</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {models.map((model) => (
              <article
                key={model.name}
                className="rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50 md:p-7 max-sm:p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                    <Handshake size={19} strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                      {t(model.name)}
                    </h3>
                    <p className="text-[11.5px] font-bold uppercase tracking-normal text-[#52525B] text-pretty max-sm:text-center">
                      {t(model.audience)}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">
                  {t(model.text)}
                </p>
                <a
                  href="#apply"
                  className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28] hover:text-[#a71920]"
                >{t("Apply for this model")}<ArrowRight size={14} strokeWidth={2.2} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-16 max-sm:py-8 md:py-20">
        <div className="mx-auto brand-container">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("How it works")}</p>
          <h2 className="max-sm:mx-auto max-sm:text-center mt-4 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Get started in four steps")}</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-[#ececec] bg-white p-7 max-sm:p-4"
              >
                <div className="text-[30px] font-bold leading-none tracking-[-0.04em] text-[#c91f28]">
                  {t(item.step)}
                </div>
                <h3 className="mt-4 text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                  {t(item.title)}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[#52525B] text-pretty">
                  {t(item.text)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 bg-white py-16 max-sm:py-8 md:py-20">
        <div className="mx-auto grid brand-container items-start gap-10 max-sm:gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Apply")}</p>
            <h2 className="max-sm:mx-auto max-sm:text-center mt-4 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Start the conversation")}</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:text-[16.5px] text-pretty">{t("Tell us about your business and the kind of partnership you have in mind. Our partnerships team reviews every application.")}</p>
            <p className="mt-6 rounded-xl border border-[#ececec] bg-[#fafafa] px-5 py-4 text-[14.5px] leading-[1.6] text-[#52525B] text-pretty">{t("We don’t publish partner logos or client names we cannot verify — every partnership on this site is one we can stand behind.")}</p>
          </div>
          <PartnerForm models={models.map((model) => model.name)} />
        </div>
      </section>

      <section className="bg-white pb-20 max-sm:pb-7 md:pb-24">
        <div className="mx-auto brand-container">
          <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 max-sm:py-8 md:px-12 md:py-14">
            <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div>
                <h2 className="max-sm:mx-auto max-sm:text-center text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Prefer to talk it through first?")}</h2>
                <p className="mt-3 max-w-[620px] text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:text-[16.5px] text-pretty">{t("Book a short call and we will walk through fit, expectations and the commercial model.")}</p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:shrink-0 sm:flex-row">
                <Link
                  href="/schedule-a-call"
                  className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920]"
                >{t("Book a call")}<ArrowRight size={17} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center sm:shrink-0 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
                >{t("Contact us")}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
