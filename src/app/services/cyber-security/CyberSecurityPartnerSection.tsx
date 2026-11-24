import { Layers, Radar, ShieldCheck, Wrench } from "lucide-react";
import { getTranslator } from "@/i18n/server";

const partners = [
  {
    title: "Proven Track Record",
    description:
      "Security engagements across fintech, healthcare, and retail, including red teaming and incident response for zero-day exploits.",
    icon: ShieldCheck,
  },
  {
    title: "Advanced Expertise",
    description:
      "Threat intelligence specialists and security engineers proficient in Burp Suite, Metasploit, and Nmap.",
    icon: Radar,
  },
  {
    title: "Enterprise Orchestration",
    description:
      "Integrated CI/CD security scanning and DevSecOps pipelines in every assessment for seamless vulnerability management.",
    icon: Layers,
  },
  {
    title: "End-to-End Support",
    description:
      "From breach forensics to managed security services, awareness training, and quarterly reviews with KPI dashboards.",
    icon: Wrench,
  },
];

export default async function CyberSecurityPartnerSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] max-sm:pb-7 md:pb-[104px]">
      <div className="brand-container">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28] max-sm:text-center">{t("Why us")}</p>
          <h2 className="max-sm:mx-auto max-sm:text-center mt-4 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Why Magnetic Solution Limited?")}</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50 sm:p-7 max-sm:p-4"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={21} />
              </span>

              <h3 className="mt-5 text-black font-semibold text-[20px] leading-[1.3] tracking-[-0.01em] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                {t(item.title)}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[#52525B] text-pretty">
                {t(item.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
