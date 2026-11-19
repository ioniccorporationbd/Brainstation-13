import { getTranslator } from "@/i18n/server";
import {
  Code2,
  GitBranch,
  LayoutTemplate,
  LifeBuoy,
  Network,
  RefreshCw,
} from "lucide-react";

const services = [
  { title: "AEM Development", icon: Code2 },
  { title: "AEM Solution Design", icon: LayoutTemplate },
  { title: "AEM DevOps", icon: GitBranch },
  { title: "AEM Info Architecture", icon: Network },
  { title: "AEM Managed Services", icon: LifeBuoy },
  { title: "AEM Migration & Update", icon: RefreshCw },
];

export default async function AemOfferedServicesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white pb-[56px] text-[#0a0a0a] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("What We Can Do")}</p>

          <h2 className="text-[#0a0a0a] font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Offered Services")}</h2>

          <p className="mt-4 text-[15px] font-medium leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Six services that cover the full AEM platform lifecycle.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full items-center gap-5 rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={20} strokeWidth={2.1} />
                </span>

                <p className="text-[#0a0a0a] text-[17px] font-medium leading-[1.3] tracking-[-0.01em] md:text-[18px]">
                  {t(service.title)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
