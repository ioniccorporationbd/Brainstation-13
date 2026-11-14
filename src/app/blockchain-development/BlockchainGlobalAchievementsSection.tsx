import {
  FileCode2,
  Rocket,
  Search,
  ShieldCheck,
} from "lucide-react";
import { getTranslator } from "@/i18n/server";

const steps = [
  {
    title: "Discovery & Solution Design",
    description:
      "We map the business process, data boundaries and compliance needs, then design the ledger model and integration surface before any code is written.",
    icon: Search,
  },
  {
    title: "Smart Contract & Platform Build",
    description:
      "Contracts, chaincode and Web3 services are built in short iterations with reviewable specifications and continuous integration.",
    icon: FileCode2,
  },
  {
    title: "Security Audit & Testing",
    description:
      "Static and dynamic analysis, threat modelling and end-to-end test networks validate logic, access control and failure handling.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment & Managed Support",
    description:
      "We hand over runbooks, monitoring and node operations, and stay on for managed support, upgrades and incident response.",
    icon: Rocket,
  },
];

export default async function BlockchainGlobalAchievementsSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-[#fafafa] pb-[56px] pt-[56px] text-[#0a0a0a] md:pb-[104px] md:pt-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Our Process")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("How We Deliver Blockchain Projects")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("A four-stage delivery path from process mapping to managed operations.")}</p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-0 right-0 top-[34px] hidden h-px bg-[#ececec] lg:block" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="group relative flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
                >
                  <div className="flex items-center gap-3">
                    <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ececec] bg-white text-[#c91f28] transition-colors duration-300 group-hover:border-[#c91f28]">
                      <Icon size={19} strokeWidth={2.1} />
                    </span>

                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Step")}{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[16.5px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                    {t(step.title)}
                  </h3>

                  <p className="mt-2.5 text-[14px] font-medium leading-[1.6] text-[#565656]">
                    {t(step.description)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
