import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import {
  ArrowRight,
  Boxes,
  CircleDollarSign,
  Cloud,
  Eye,
  GitBranch,
  Lock,
} from "lucide-react";

const capabilities = [
  {
    title: "Cloud migration",
    description: "Safe, staged moves from on-prem or legacy clouds to modern platforms.",
    icon: Cloud,
  },
  {
    title: "Infrastructure as code",
    description: "Reproducible environments with Terraform and CI/CD automation.",
    icon: GitBranch,
  },
  {
    title: "Observability",
    description: "Metrics, logging and tracing so incidents are caught before users notice.",
    icon: Eye,
  },
  {
    title: "Security & compliance",
    description: "Guardrails, IAM and compliance controls built into the pipeline.",
    icon: Lock,
  },
  {
    title: "Cost optimisation",
    description: "Right-sizing and FinOps practices that cut cloud spend.",
    icon: CircleDollarSign,
  },
  {
    title: "Kubernetes & containers",
    description: "Scalable orchestration with operational excellence baked in.",
    icon: Boxes,
  },
];

export default async function CloudSolutionsCapabilitiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="brand-container">
        <div className="max-w-[680px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("What we can do")}</p>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Cloud capabilities")}</h2>
          <p className="mt-4 text-[15.5px] leading-[1.6] text-[#52525B]">{t("Six disciplines that take a cloud estate from working to dependable.")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50 sm:min-h-[184px] sm:p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <capability.icon size={21} />
              </span>

              <h3 className="mt-5 text-[16.5px] font-semibold leading-[1.3] text-black">
                {t(capability.title)}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.65] text-[#52525B]">
                {t(capability.description)}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-xl border border-[#ececec] bg-[#fafafa] px-7 py-6 sm:flex-row sm:items-center md:px-9 md:py-7">
          <div>
            <p className="text-[17px] font-bold text-black md:text-[19px]">{t("Want a free architecture and cost review?")}</p>
            <p className="mt-1.5 text-[14.5px] text-[#52525B]">{t("We’ll assess your current estate and outline a practical path forward.")}</p>
          </div>

          <Link
            href="/schedule-a-call"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3 text-[14.5px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
          >{t("Book a cloud review")}<ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
