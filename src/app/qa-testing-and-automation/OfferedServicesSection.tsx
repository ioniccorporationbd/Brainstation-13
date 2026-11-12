import { getTranslator } from "@/i18n/server";

import {
  Bot,
  CheckCircle2,
  Cpu,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Functional Testing",
    desc: "Verify every feature against your requirements and business rules, with clear and reproducible defect reports.",
    icon: CheckCircle2,
  },
  {
    title: "Compatibility Testing",
    desc: "Check your product across browsers, devices and operating system versions before real users find the gaps.",
    icon: MonitorSmartphone,
  },
  {
    title: "Technical Testing",
    desc: "API, integration and performance checks that confirm the system holds up under real conditions.",
    icon: Cpu,
  },
  {
    title: "Automation Testing",
    desc: "Reusable automated suites that catch regressions on every release and cut repetitive manual effort.",
    icon: Bot,
  },
  {
    title: "Security Testing",
    desc: "Probe authentication, authorization and input handling for vulnerabilities before your users do.",
    icon: ShieldCheck,
  },
];

export default async function OfferedServicesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("What We Can Do")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Offered Services")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Five testing disciplines, one dedicated QA team working on-demand.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLast = index === services.length - 1;
            const remainder = services.length % 4;

            const spanClass = isLast
              ? remainder === 1
                ? "lg:col-span-2 lg:col-start-2"
                : remainder === 2
                  ? "lg:col-span-2"
                  : remainder === 3
                    ? "lg:col-span-3"
                    : ""
              : "";

            return (
              <article
                key={service.title}
                className={`group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28] ${spanClass}`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={20} strokeWidth={2.1} />
                </span>

                <h3 className="mt-5 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                  {t(service.title)}
                </h3>

                <p className="mt-2.5 text-[14px] font-medium leading-[1.6] text-[#565656]">
                  {t(service.desc)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
