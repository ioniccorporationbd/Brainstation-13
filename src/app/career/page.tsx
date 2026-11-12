import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import {
  ArrowRight,
  Coffee,
  Globe2,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

import CareerApplyForm from "./CareerApplyForm";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Careers | Magnetic Solution Limited"),
    description: t("Join Magnetic Solution Limited and build software that matters. Explore open roles in engineering, design, data and delivery."),
  };
}

const perks = [
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Certifications, courses and mentorship budgets to keep your skills at the cutting edge.",
  },
  {
    icon: Globe2,
    title: "Global Exposure",
    description:
      "Work on products used across continents and collaborate with clients and teams worldwide.",
  },
  {
    icon: HeartHandshake,
    title: "People-First Culture",
    description:
      "Fair pay, health benefits and a supportive environment where wellbeing comes first.",
  },
  {
    icon: Coffee,
    title: "Flexible Work",
    description:
      "Hybrid and remote-friendly arrangements that help you do your best work.",
  },
];

const roles = [
  {
    title: "Senior Frontend Engineer",
    dept: "Engineering",
    location: "Dhaka · Hybrid",
    type: "Full-time",
  },
  {
    title: "Backend Engineer (Node.js)",
    dept: "Engineering",
    location: "Dhaka · Hybrid",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    dept: "Infrastructure",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Data Engineer",
    dept: "Data & AI",
    location: "Dhaka · Hybrid",
    type: "Full-time",
  },
  {
    title: "Product Designer (UI/UX)",
    dept: "Design",
    location: "Dhaka · On-site",
    type: "Full-time",
  },
  {
    title: "QA Automation Engineer",
    dept: "Quality",
    location: "Remote",
    type: "Full-time",
  },
];

const steps = [
  {
    step: "01",
    title: "Apply",
    text: "Send your CV and portfolio through the role you're interested in.",
  },
  {
    step: "02",
    title: "Screen",
    text: "A short conversation to understand your experience and goals.",
  },
  {
    step: "03",
    title: "Interview",
    text: "Technical and team-fit discussions with the people you'd work with.",
  },
  {
    step: "04",
    title: "Offer",
    text: "We move quickly — timely feedback and a clear offer when it's a match.",
  },
];

export default async function CareerPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <section className="bg-white px-6 pb-16 pt-14 md:pb-20 md:pt-20">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Careers")}</span>
            <h1 className="mt-6 text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px]">{t("Build software that matters")}</h1>
            <p className="mt-5 max-w-[560px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">{t("We’re always looking for curious, driven people who want to solve hard problems for real clients — with a team that ships enterprise-grade technology.")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#open-roles"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920]"
              >{t("View open roles")}<ArrowRight size={17} />
              </a>
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Apply now")}</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
              alt={t("Team celebrating together in the office")}
              className="h-[260px] w-full object-cover md:h-[360px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Why Magnetic Solution Limited")}</p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("A place to do the best work of your career")}</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                    <Icon size={21} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-4 text-[16.5px] font-bold leading-[1.3] text-black">
                    {t(perk.title)}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[#55585e]">
                    {t(perk.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="open-roles"
        className="scroll-mt-24 bg-white px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Open positions")}</p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Current opportunities")}</h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">{t("Don’t see your role? Send us your application anyway — we’re always growing.")}</p>

          <div className="mt-10 overflow-hidden rounded-xl border border-[#ececec]">
            {roles.map((role, index) => (
              <div
                key={role.title}
                className={`flex flex-col gap-4 bg-white p-6 transition-colors hover:bg-[#fafafa] md:flex-row md:items-center md:justify-between md:p-7 ${
                  index !== 0 ? "border-t border-[#ececec]" : ""
                }`}
              >
                <div>
                  <h3 className="text-[17.5px] font-bold tracking-[-0.01em] text-black">
                    {t(role.title)}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13.5px] text-[#6b6f76]">
                    <span className="font-semibold text-[#c91f28]">
                      {t(role.dept)}
                    </span>
                    <span className="text-[#d5d8dd]">•</span>
                    <span>{t(role.location)}</span>
                    <span className="text-[#d5d8dd]">•</span>
                    <span>{t(role.type)}</span>
                  </div>
                </div>
                <a
                  href="#apply"
                  className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#ececec] bg-white px-5 py-2.5 text-[13.5px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
                >{t("Apply now")}<ArrowRight size={15} strokeWidth={2.2} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Our process")}</p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("What to expect")}</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-[#ececec] bg-white p-6"
              >
                <p className="text-[30px] font-bold leading-none tracking-[-0.04em] text-[#c91f28]">
                  {t(item.step)}
                </p>
                <h3 className="mt-4 text-[16.5px] font-bold text-black">
                  {t(item.title)}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-[#55585e]">
                  {t(item.text)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 bg-white px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1240px] items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Apply")}</p>
            <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Ready to join the team?")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">{t("Send your details for the role that fits you best. We review every application and reply when there is a match.")}</p>
            <p className="mt-6 rounded-xl border border-[#ececec] bg-[#fafafa] px-5 py-4 text-[13.5px] leading-[1.7] text-[#55585e]">{t("Applying for a role not listed? Choose")}{" "}
              <strong className="text-black">{t("General application")}</strong>{t("and tell us what you do best.")}</p>
          </div>
          <CareerApplyForm roles={roles.map((role) => role.title)} />
        </div>
      </section>

      <section className="bg-white px-6 pb-20 md:pb-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
            <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[36px]">{t("Questions before you apply?")}</h2>
                <p className="mt-3 max-w-[620px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">{t("Our team is happy to answer anything about roles, process or life at Magnetic Solution Limited.")}</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920] sm:w-auto"
              >{t("Contact us")}<ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
