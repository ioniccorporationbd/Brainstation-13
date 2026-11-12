import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  FileCheck2,
  Globe2,
  MapPin,
  ShieldCheck,
  UserRound,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Global Offices | Magnetic Solution Limited"),
    description: t("Magnetic Solution Limited is headquartered in Bangladesh and delivers software and technology solutions to clients worldwide through remote-first, distributed teams working across time zones."),
  };
}

/* ------------------------------------------------------------------ *
 * Verification note — same rule as the shared Global Offices section:
 * Magnetic Solution Limited is Bangladesh-based. No public street
 * address, branch office, phone number or office email could be
 * verified, so unverified locations and contact details are omitted
 * rather than fabricated. Nothing from a previous brand's office list
 * is presented as Magnetic Solution Limited's own.
 * ------------------------------------------------------------------ */

const presence = [
  {
    icon: MapPin,
    badge: "Headquarters",
    title: "Bangladesh",
    text: "Our headquarters and engineering base — where we design, build and deliver software and technology solutions for clients.",
  },
  {
    icon: Globe2,
    badge: "Worldwide",
    title: "Global delivery",
    text: "We collaborate with clients across regions through remote-first, distributed delivery, working across time zones.",
  },
];

const workingModel = [
  {
    icon: Clock,
    title: "Overlapping hours",
    text: "Working hours are agreed per engagement so your team and ours share real overlap every week.",
  },
  {
    icon: UserRound,
    title: "One accountable lead",
    text: "Each engagement has a single delivery lead who owns the plan, the reporting and the escalation path.",
  },
  {
    icon: FileCheck2,
    title: "Documentation-first",
    text: "Decisions, scope and hand-overs are written down, so distributed work stays traceable across time zones.",
  },
];

const facts = [
  { value: "Bangladesh", label: "Home base" },
  { value: "Remote-first", label: "Delivery model" },
  { value: "Per engagement", label: "Overlapping hours" },
  { value: "Single", label: "Accountable team" },
];

export default async function GlobalOfficesPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <section className="bg-white px-6 pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Global offices")}</span>
            <h1 className="mt-6 text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px]">{t("One team, everywhere you work")}</h1>
            <p className="mt-5 max-w-[560px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">{t("Headquartered in Bangladesh, Magnetic Solution Limited works with clients worldwide through remote-first delivery — one connected team, no hand-offs between branches.")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920]"
              >{t("Book a call in your timezone")}<ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Contact us")}</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
              alt={t("Distributed team collaborating across offices")}
              className="h-[260px] w-full object-cover md:h-[380px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Our locations")}</p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Where we deliver from")}</h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">{t("Two verified operating bases: a headquarters and engineering centre in Bangladesh, and a remote-first delivery model that puts senior engineers close to your working day.")}</p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {presence.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50 md:p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                      <Icon size={21} strokeWidth={1.9} />
                    </span>
                    <div>
                      <h3 className="text-[18px] font-bold leading-[1.25] text-black">
                        {t(item.title)}
                      </h3>
                      <p className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#6b6f76]">
                        {t(item.badge)}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-[14.5px] leading-[1.7] text-[#55585e]">
                    {t(item.text)}
                  </p>
                  <Link
                    href={
                      item.badge === "Headquarters"
                        ? "/contact"
                        : "/schedule-a-call"
                    }
                    className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28] hover:text-[#a71920]"
                  >
                    {item.badge === "Headquarters"
                      ? t("Contact the team")
                      : t("Schedule a call")}
                    <ArrowRight size={14} strokeWidth={2.2} />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#ececec] bg-white px-5 py-4">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
              <ShieldCheck size={17} strokeWidth={1.9} />
            </span>
            <p className="text-[13.5px] leading-[1.7] text-[#55585e]">
              <strong className="font-semibold text-black">{t("Verified information only.")}</strong>{" "}{t("A public street address, branch office list, office phone number and office email address have not been verified for Magnetic Solution Limited, so they are intentionally not published here rather than invented. Locations listed by a previous brand are not presented as ours. Write to us through the")}{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#c91f28] hover:text-[#a71920]"
              >{t("contact page")}</Link>{" "}{t("and our team will confirm current details.")}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[#ececec] bg-[#ececec] sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-white px-6 py-6">
                <dd className="text-[20px] font-bold leading-[1.2] tracking-[-0.02em] text-[#c91f28] md:text-[22px]">
                  {t(fact.value)}
                </dd>
                <dt className="mt-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6b6f76]">
                  {t(fact.label)}
                </dt>
              </div>
            ))}
          </dl>

          <div className="mt-14">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("How we work")}</p>
            <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Working across borders, without the friction")}</h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {workingModel.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/40"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                      <Icon size={21} strokeWidth={1.9} />
                    </span>
                    <h3 className="mt-4 text-[16.5px] font-bold leading-[1.3] text-black">
                      {t(card.title)}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.65] text-[#55585e]">
                      {t(card.text)}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 text-center md:px-12 md:py-12">
            <h2 className="text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[30px]">{t("Not near an office? That's fine.")}</h2>
            <p className="mx-auto mt-3 max-w-[640px] text-[15.5px] leading-[1.7] text-[#55585e]">{t("Most of our work is delivered remotely with overlapping hours in your timezone. Distance has never been a barrier to shipping great software.")}</p>
            <Link
              href="/schedule-a-call"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920]"
            >{t("Book a call in your timezone")}<ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-20 md:pb-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
            <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[36px]">{t("Want to meet the team?")}</h2>
                <p className="mt-3 max-w-[620px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">{t("Schedule a call and we will connect you with the people who will actually do the work.")}</p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/schedule-a-call"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920]"
                >{t("Schedule a call")}<ArrowRight size={17} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
                >{t("Contact us")}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
