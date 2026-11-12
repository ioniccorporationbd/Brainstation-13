import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";
import {
  BarChart3,
  Bot,
  Cloud,
  Glasses,
  MonitorUp,
  ShoppingCart,
  Users,
} from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const services: ServiceItem[] = [
  {
    title: "Custom App Development",
    description:
      "We develop custom application solutions that work faithfully according to the need of the automotive industry.",
    icon: MonitorUp,
  },
  {
    title: "E-commerce Platform",
    description:
      "We have experts in the eCommerce platforms who can develop and customize your digital market according to specifications.",
    icon: ShoppingCart,
  },
  {
    title: "ERP Solutions",
    description:
      "Our Odoo powered ERP solutions help enterprises automate their resource management and miscellaneous activities.",
    icon: Users,
  },
  {
    title: "Cloud Solutions",
    description:
      "Our cloud computing services help automotive enterprises to adopt flexible computing resources and data collection.",
    icon: Cloud,
  },
  {
    title: "AR/VR Applications",
    description:
      "Our AR/VR experts help automotive enterprises to build engaging solutions to help build their brand and attract more customers.",
    icon: Glasses,
  },
  {
    title: "Chatbot",
    description:
      "We offer AI powered chatbots for automobile brands to bolster their customer services with the latest innovations.",
    icon: Bot,
  },
  {
    title: "BI/Analytical Tools",
    description:
      "We help the automotive industry adopt analytical tools and BI solutions to help monitor and strategize business performance.",
    icon: BarChart3,
  },
];

export default async function AutomotiveServicesSection() {
  const { t } = await getTranslator();
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Services")}</p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("How we can help")}</h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("Process automation, connected products and enterprise systems for the automotive industry.")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={21} />
              </span>
              <h3 className="mt-5 text-[16px] font-semibold leading-[1.3] text-black">
                {t(item.title)}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.65] text-[#55585e]">
                {t(item.description)}
              </p>
            </article>
          ))}
          <Link
            href="/contact"
            className="group flex h-full flex-col justify-between rounded-xl border border-[#ececec] bg-[#fafafa] p-6 transition-colors duration-200 hover:border-[#c91f28]/50"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#c91f28] text-white">
              <ArrowRight size={21} />
            </span>
            <div>
              <h3 className="mt-5 text-[16px] font-semibold leading-[1.3] text-black">{t("Need something specific?")}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.65] text-[#55585e]">{t("Tell us what your operation needs and we will scope it with you.")}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
