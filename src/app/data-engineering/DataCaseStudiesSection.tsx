import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CaseStudy = {
  tag: string;
  title: string;
  description: string;
  href: string;
  image: string;
};

const caseStudies: CaseStudy[] = [
  {
    tag: "Enterprise Data Platform Modernization",
    title: "High-Performance Analytics Platform",
    description:
      "A legacy data ecosystem modernized by migrating insurance data to Azure, consolidating fragmented systems into one centralized platform for faster analytics, better data quality, and secure access to portfolio insights.",
    href: "/case-studies",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1100&q=90",
  },
  {
    tag: "AI-Ready Data Engineering",
    title: "Unified Cloud Data Warehouse",
    description:
      "A unified cloud data warehouse with automated pipelines, clean governance, and scalable architecture — turning multiple disconnected systems into reliable reporting for faster business decisions.",
    href: "/case-studies",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=90",
  },
  {
    tag: "Business Intelligence Transformation",
    title: "Executive BI Dashboard System",
    description:
      "Scattered spreadsheets and manual reporting transformed into real-time executive dashboards, giving business leaders instant visibility into revenue, operations, and performance trends.",
    href: "/case-studies",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=90",
  },
  {
    tag: "Data Governance & Compliance",
    title: "Secure Enterprise Data Foundation",
    description:
      "A trusted data foundation with lineage, access control, and compliance-ready reporting — implemented through secure data layers and monitoring workflows for higher trust and operational accuracy.",
    href: "/case-studies",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1100&q=90",
  },
];

export default async function DataCaseStudiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[720px]">
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Our Work")}</p>

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Case Studies")}</h2>

            <p className="mt-4 text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("A closer look at how our data engineering work has transformed businesses.")}</p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#c91f28] px-7 py-3.5 text-[15px] font-bold tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
          >{t("See all Case Studies")}</Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#ececec] bg-white transition-colors duration-300 hover:border-[#c91f28]"
            >
              <div className="relative h-[210px] w-full overflow-hidden bg-[#f2f2f2]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#c91f28]">
                  {t(item.tag)}
                </p>

                <h3 className="mt-3 text-[19px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                  {t(item.title)}
                </h3>

                <p className="mt-3 flex-1 text-[14.5px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
                  {t(item.description)}
                </p>

                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-[#c91f28] transition hover:text-[#a71920]"
                >{t("View Case Study")}<ArrowRight size={16} strokeWidth={2.2} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
