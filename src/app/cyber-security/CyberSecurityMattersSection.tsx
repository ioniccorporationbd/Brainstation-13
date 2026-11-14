import { getTranslator } from "@/i18n/server";

const matters = [
  {
    title: "Reduced Risk Exposure",
    description:
      "Identify and mitigate vulnerabilities like injection vectors and privilege escalation before exploitation via ethical hacking simulations, preventing costly breaches and data exfiltration.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Align with GDPR, ISO 27001, NIST, and CIS Controls through gap analysis and policy alignment to avoid fines up to 4% of global revenue and ensure audit-ready documentation.",
  },
  {
    title: "Operational Resilience",
    description:
      "Simulate real-world threats including phishing campaigns and zero-day exploits to strengthen defenses with DevSecOps integration, without disrupting business continuity.",
  },
  {
    title: "Strategic Advantage",
    description:
      "Empower data-driven decisions with actionable insights from threat intelligence and KPI metrics for faster incident response, reducing breach impact.",
  },
];

export default async function CyberSecurityMattersSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="brand-container">
        <div className="max-w-[680px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Why it matters")}</p>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px]">{t("Why cyber security matters")}</h2>
          <p className="mt-4 text-[15.5px] leading-[1.6] text-[#52525B]">{t("Four outcomes every security programme is measured on.")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {matters.map((item, index) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50 md:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fdecec] text-[13.5px] font-bold text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  {index + 1}
                </span>
                <h3 className="text-[17.5px] font-semibold tracking-[-0.01em] text-black md:text-[20px]">
                  {t(item.title)}
                </h3>
              </div>

              <p className="mt-4 text-[14.5px] leading-[1.6] text-[#52525B] md:text-[15px]">
                {t(item.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
