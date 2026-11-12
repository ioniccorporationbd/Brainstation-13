import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Compass,
  GitBranch,
  Handshake,
  Layers,
  LifeBuoy,
  MapPin,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("About Us | Magnetic Solution Limited"),
    description: t("Magnetic Solution Limited builds and modernises software for enterprise and startup teams — product engineering, digital transformation and dedicated delivery teams."),
  };
}

/**
 * Content policy for this page: company history dates, headcount, client
 * counts, certifications and named executives are not published here because
 * they cannot be verified from an authoritative source. Those details are
 * shared directly when a team evaluates us.
 */

const snapshot = [
  { icon: MapPin, label: "Headquarters", value: "Bangladesh" },
  { icon: Users, label: "Delivery model", value: "Remote-first, global" },
  { icon: Handshake, label: "Client base", value: "Enterprise & startup" },
  {
    icon: Layers,
    label: "Engagement",
    value: "Project, retainer, dedicated team",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Mission",
    body: "Help teams turn technology into practical products that create real business value — without the overhead of assembling a delivery organisation from scratch.",
  },
  {
    icon: Compass,
    title: "Vision",
    body: "Pursue new technology relentlessly and apply it with judgement, so every client ships software that still makes sense years after launch.",
  },
  {
    icon: ShieldCheck,
    title: "Values",
    body: "Engineering excellence, transparent communication and long-term partnership. Quality, security and maintainability are treated as non-negotiable.",
  },
];

const capabilities = [
  {
    icon: Boxes,
    title: "Product & Platform Engineering",
    body: "End-to-end product development — from first MVP to enterprise platform — on modern web, mobile and cloud stacks.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    body: "Modernise legacy systems, automate operations and connect data so enterprises can move faster with confidence.",
  },
  {
    icon: Users,
    title: "Talent & Staff Augmentation",
    body: "Dedicated, vetted engineering teams that plug into your delivery model and scale as your roadmap grows.",
  },
];

const principles = [
  {
    icon: GitBranch,
    title: "One accountable team",
    body: "You work with the people doing the work. Decision-making stays close to the code, not behind an account layer.",
  },
  {
    icon: ShieldCheck,
    title: "Security by default",
    body: "Access control, data handling and review discipline are designed in from the first sprint, not retrofitted before launch.",
  },
  {
    icon: Workflow,
    title: "Documentation-first delivery",
    body: "Architecture decisions, setup and runbooks are written down, so your team can own the product when we hand it over.",
  },
  {
    icon: LifeBuoy,
    title: "Support beyond launch",
    body: "Monitoring, fixes and incremental improvements continue after go-live through a clear support arrangement.",
  },
];

const steps = [
  {
    title: "Discover",
    body: "Understand the product, systems, constraints and the people who use them before proposing anything.",
  },
  {
    title: "Architect",
    body: "Agree the technical shape, delivery phases and risks in writing so scope is visible to everyone.",
  },
  {
    title: "Deliver",
    body: "Ship in small, reviewable increments with working software at the end of every cycle.",
  },
  {
    title: "Support",
    body: "Hand over with documentation, monitoring and a support path rather than an abrupt exit.",
  },
];

export default async function AboutUsPage() {
  const { t } = await getTranslator();
  return (
    <main>
      {/* Hero */}
      <section className="bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Company · About us")}</span>

            <h1 className="mt-6 max-w-[620px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">{t("An engineering partner for teams building serious software")}</h1>

            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">{t("Magnetic Solution Limited builds, modernises and supports software for enterprise and startup teams. We pursue new technology relentlessly — and turn it into practical products that create real business value.")}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Talk to our team")}<ArrowRight size={18} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("See our work")}</Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
              alt={t("Engineering team collaborating around a shared workspace")}
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-10">
        <dl className="mx-auto grid max-w-[1240px] grid-cols-2 gap-8 md:grid-cols-4">
          {snapshot.map((item) => (
            <div key={item.label}>
              <dt className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">
                <item.icon size={15} className="text-[#c91f28]" />
                {t(item.label)}
              </dt>
              <dd className="mt-2 text-[17px] font-bold leading-[1.35] tracking-[-0.01em] text-black">
                {t(item.value)}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("What guides us")}</p>
          <h2 className="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Mission, vision and the values behind every delivery")}</h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <pillar.icon size={21} strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 text-[17px] font-bold tracking-[-0.01em] text-black">
                  {t(pillar.title)}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                  {t(pillar.body)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("What we do")}</p>
          <h2 className="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("One partner across the whole product lifecycle")}</h2>
          <p className="mt-4 max-w-[620px] text-[15.5px] leading-[1.7] text-[#55585e]">{t("Strategy, engineering, modernisation and talent — delivered by the same team, so context never gets lost between vendors.")}</p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <item.icon size={21} strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                  {t(item.title)}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                  {t(item.body)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("How we work")}</p>
              <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Predictable delivery, without ceremony")}</h2>
              <p className="mt-4 text-[15.5px] leading-[1.7] text-[#55585e]">{t("Every engagement follows the same four phases. The framework stays fixed so the work stays visible — from first conversation to post-launch support.")}</p>

              <ol className="mt-8 space-y-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[13px] font-bold text-[#c91f28]">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-[15.5px] font-bold text-black">
                        {t(step.title)}
                      </p>
                      <p className="mt-1 text-[14.5px] leading-[1.65] text-[#55585e]">
                        {t(step.body)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {principles.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                    <item.icon size={19} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-4 text-[15.5px] font-bold tracking-[-0.01em] text-black">
                    {t(item.title)}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[#55585e]">
                    {t(item.body)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verified information note */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-12">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-7 md:flex-row md:items-start md:gap-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
            <ShieldCheck size={21} strokeWidth={1.9} />
          </span>
          <div>
            <h3 className="text-[16.5px] font-bold text-black">{t("Verified information only")}</h3>
            <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Founding dates, headcount, client counts and certification badges are not published on this page because they cannot be verified. Company registration details, client references and delivery records are shared directly with teams evaluating us — request them through the contact page.")}</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-[14.5px] font-bold text-[#c91f28] transition-colors hover:text-[#a71920]"
            >{t("Request company details")}<ArrowRight size={16} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">{t("Want to see how we would approach your product?")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">{t("Share the problem, the constraints and the timeline. We will come back with a technical view and a phased plan.")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Start a conversation")}<ArrowRight size={17} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Explore services")}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
