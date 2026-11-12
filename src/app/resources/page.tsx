import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Download,
  FileText,
  Handshake,
  Leaf,
  Mic,
  Newspaper,
  Trophy,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Resources | Magnetic Solution Limited"),
    description: t("Explore everything Magnetic Solution Limited publishes — blog insights, case studies, media, partnerships, recognitions, sustainability and downloadable guides."),
  };
}

const hubs = [
  {
    icon: Newspaper,
    title: "Blog & Insights",
    description:
      "Practical articles on engineering, cloud, AI and building great technology teams.",
    href: "/blog",
  },
  {
    icon: Briefcase,
    title: "Case Studies",
    description:
      "Real projects with measurable outcomes across fintech, retail, health and more.",
    href: "/case-studies",
  },
  {
    icon: Mic,
    title: "Media",
    description:
      "Press coverage, announcements and media assets for editorial use.",
    href: "/media",
  },
  {
    icon: Handshake,
    title: "Partners",
    description:
      "The cloud and enterprise platforms we're certified to deliver on.",
    href: "/partners",
  },
  {
    icon: Trophy,
    title: "Recognitions",
    description:
      "Awards and certifications earned through consistent, quality delivery.",
    href: "/recognitions",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "How we build a responsible, low-carbon and people-first company.",
    href: "/sustainability",
  },
];

const downloads = [
  {
    title: "Digital Transformation Playbook",
    text: "A step-by-step guide to modernising legacy systems without disruption.",
    type: "Guide · PDF",
  },
  {
    title: "Cloud Migration Checklist",
    text: "The 20-point checklist we use before every enterprise cloud migration.",
    type: "Checklist · PDF",
  },
  {
    title: "Security & Compliance Overview",
    text: "How we protect client data — controls mapped to ISO and GDPR.",
    type: "Whitepaper · PDF",
  },
];

export default async function ResourcesPage() {
  const { t } = await getTranslator();
  return (
    <main>
      <section className="relative overflow-hidden bg-white px-6 pb-16 pt-14 md:pb-20 md:pt-20">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Resources")}</span>
            <h1 className="mt-6 text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px]">{t("Our resources")}</h1>
            <p className="mt-5 max-w-[560px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">{t("Everything you need to understand how we work and what we deliver — insights, proof of results, media, partnerships and guides, in one place.")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920]"
              >{t("Read the blog")}<ArrowRight size={17} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("View case studies")}</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1600&auto=format&fit=crop"
              alt={t("Library shelves — a collection of reference material")}
              className="h-[260px] w-full object-cover md:h-[340px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Explore")}</p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Browse by topic")}</h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">{t("Jump straight to the resources most relevant to you.")}</p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hubs.map((hub) => {
              const Icon = hub.icon;
              return (
                <Link
                  key={hub.title}
                  href={hub.href}
                  className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50 md:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                    <Icon size={21} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-4 text-[17.5px] font-bold leading-[1.3] tracking-[-0.01em] text-black">
                    {t(hub.title)}
                  </h3>
                  <p className="mt-2 flex-1 text-[14.5px] leading-[1.65] text-[#55585e]">
                    {t(hub.description)}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Explore")}<ArrowRight
                      size={15}
                      strokeWidth={2.2}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Downloads")}</p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Guides & whitepapers")}</h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">{t("Practical resources distilled from real engagements — free to request.")}</p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {downloads.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/40 md:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <FileText size={21} strokeWidth={1.9} />
                </span>
                <p className="mt-4 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#6b6f76]">
                  {t(item.type)}
                </p>
                <h3 className="mt-1.5 text-[17.5px] font-bold leading-[1.3] tracking-[-0.01em] text-black">
                  {t(item.title)}
                </h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-[1.65] text-[#55585e]">
                  {t(item.text)}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-[13.5px] font-semibold text-[#c91f28] hover:text-[#a71920]"
                >
                  <Download size={15} strokeWidth={2.1} />{t("Request download")}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-20 md:pb-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
            <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[36px]">{t("Can’t find what you need?")}</h2>
                <p className="mt-3 max-w-[620px] text-[15.5px] leading-[1.7] text-[#55585e] md:text-[16.5px]">{t("Our team is happy to share the references and answers you need.")}</p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#a71920]"
                >{t("Contact us")}<ArrowRight size={17} />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
                >{t("Read the blog")}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
