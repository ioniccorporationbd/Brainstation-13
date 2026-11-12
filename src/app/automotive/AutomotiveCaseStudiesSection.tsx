import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

type CaseStudy = {
  logoText: string;
  logoClassName: string;
  category: string;
  title: string;
  image: string;
  description: string;
  highlights: string[];
};

const cases: CaseStudy[] = [
  {
    logoText: "NISSAN",
    logoClassName: "text-[18px] font-black tracking-[-0.02em] text-black",
    category: "AR Mobile App",
    title: "NISSAN",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1400&auto=format&fit=crop",
    description:
      "Nissan has a global Automobile business across several countries. Their products range from a variety of categories and come in numerous visual looks and features. A better digital presentation of their products was an urgent demand.",
    highlights: ["Collaboration efficiency", "Knowledge retention"],
  },
  {
    logoText: "TOYOTA",
    logoClassName: "text-[18px] font-black tracking-[-0.02em] text-black",
    category: "Digital Service Platform",
    title: "TOYOTA",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1400&auto=format&fit=crop",
    description:
      "Toyota needed a scalable digital platform to improve customer engagement, product visibility, service booking, and brand communication across multiple touchpoints.",
    highlights: ["Service journey", "Customer engagement"],
  },
  {
    logoText: "NIO",
    logoClassName: "text-[18px] font-black tracking-[-0.02em] text-black",
    category: "Connected Mobility",
    title: "NIO",
    image:
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=1400&auto=format&fit=crop",
    description:
      "We supported connected mobility experiences with digital tools that help automotive teams manage customer journeys, data visibility, and vehicle engagement features.",
    highlights: ["Digital experience", "Operational visibility"],
  },
  {
    logoText: "GreenRoad",
    logoClassName: "text-[18px] font-black tracking-[-0.02em] text-[#4b4b4b]",
    category: "Fleet Safety Solution",
    title: "GreenRoad",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1400&auto=format&fit=crop",
    description:
      "Fleet intelligence solutions help improve vehicle monitoring, driver behavior visibility, route safety, and enterprise reporting for automotive operations.",
    highlights: ["Fleet safety tracking", "Driver performance insight"],
  },
];

export default async function AutomotiveCaseStudiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[640px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Case studies")}</p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Automotive work in production")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("Selected automotive engagements across mobility apps, service platforms and fleet operations.")}</p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3 text-[14.5px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
          >{t("See all case studies")}<ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {cases.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#ececec] bg-white transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[250px]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center rounded-md bg-[#fafafa] px-3 py-1.5 ring-1 ring-[#ececec] ${item.logoClassName}`}
                  >
                    {item.logoText}
                  </span>
                  <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
                    {item.category}
                  </p>
                </div>

                <h3 className="mt-4 text-[20px] font-semibold leading-[1.25] text-black md:text-[23px]">
                  {t(item.title)}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.7] text-[#55585e]">
                  {t(item.description)}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-lg border border-[#ececec] bg-[#fafafa] px-3 py-1.5 text-[12.5px] font-semibold text-black"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/case-studies"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-[14px] font-bold text-[#c91f28] transition-all duration-200 hover:gap-3.5"
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
