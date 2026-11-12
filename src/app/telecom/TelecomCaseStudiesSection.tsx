import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

type TelecomCaseStudy = {
  id: string;
  label: string;
  category: string;
  title: string;
  image: string;
  description: string;
  highlights: string[];
};

const caseStudies: TelecomCaseStudy[] = [
  {
    id: "bt",
    label: "British Telecom",
    category: "Order management journey",
    title: "Customer portal and order journey for British Telecom",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    description:
      "We developed a customer facing website and portal for BT. The application receives huge orders each year and we helped BT to process their whole order journey. We used Adobe Experience Manager (AEM) - a comprehensive content management (CMS) tool for the large enterprise sector. We have helped BT Group with infrastructure and dev support.",
    highlights: ["Online bill payment", "Order tracking", "Enterprise CMS delivery"],
  },
  {
    id: "telenor",
    label: "Telenor",
    category: "Telecom digital platform",
    title: "Digital engagement platform for Telenor",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1400&auto=format&fit=crop",
    description:
      "We helped telecom teams improve customer engagement, self-service access, digital content management, and operational visibility through scalable software platforms and enterprise integration support.",
    highlights: ["Customer self-service", "Digital content management", "Operational visibility"],
  },
];

export default async function TelecomCaseStudiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[640px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Case studies")}</p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Telecom work in production")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("Check out our case studies that show how innovative solutions transformed businesses.")}</p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3 text-[14.5px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
          >{t("See all case studies")}<ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {caseStudies.map((item) => (
            <article
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#ececec] bg-white transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[260px]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
                  {t(item.category)}
                </p>
                <h3 className="mt-3 text-[20px] font-semibold leading-[1.3] text-black">
                  {t(item.title)}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-[#55585e]">
                  {t(item.description)}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-lg border border-[#ececec] bg-[#fafafa] px-3 py-1.5 text-[12.5px] font-semibold text-black"
                    >
                      {t(highlight)}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/case-studies"
                  className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-[#c91f28] transition-all duration-200 hover:gap-3.5"
                >{t("View case studies")}<ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
