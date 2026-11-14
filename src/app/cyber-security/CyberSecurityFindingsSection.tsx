import { getTranslator } from "@/i18n/server";

const findings = [
  {
    source: "IBM Cost of a Data Breach Report 2023",
    text: "Average breach lifecycle is 277 days — quick response using root cause analysis saves up to $1.76 million per incident.",
  },
  {
    source: "Verizon DBIR 2024",
    text: "42% of breaches involve stolen credentials, enabling undetected lateral movement across systems for weeks, often via unpatched Apache Struts vulnerabilities.",
  },
  {
    source: "Real-world case: Marriott International (2020)",
    text: "Breach exposed 5.2 million guests’ data due to compromised franchise accounts — highlighting the need for continuous monitoring and IAM policy enforcement.",
  },
  {
    source: "Salt Security 2024",
    text: "400% increase in API attack traffic targeting business logic flaws and broken object-level authorization (BOLA).",
  },
  {
    source: "Palo Alto Networks 2024",
    text: "80% of cloud breaches from misconfigurations in AWS IAM roles or S3 buckets, taking 17% longer to detect due to visibility gaps.",
  },
  {
    source: "IBM X-Force Index",
    text: "Our assessments, including black-box/grey-box penetration testing, reduce dwell time by 41% per IBM X-Force Index.",
  },
];

export default async function CyberSecurityFindingsSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] pt-[8px] text-black md:pb-[104px]">
      <div className="brand-container">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="lg:sticky lg:top-24">
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("The threat landscape")}</p>
            <h2 className="mt-4 text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px]">{t("Our findings")}</h2>
            <p className="mt-4 max-w-[440px] text-[15.5px] leading-[1.6] text-[#52525B]">{t("Published research and public breach cases show where attackers concentrate and where response time pays back.")}</p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#ececec]">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                alt={t("Close-up of a secure circuit board")}
                className="h-[220px] w-full object-cover md:h-[280px]"
              />
            </div>
          </div>

          <ul className="space-y-4">
            {findings.map((item, index) => (
              <li
                key={item.source}
                className="rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[12.5px] font-bold text-[#c91f28]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[12.5px] font-bold uppercase tracking-[0.08em] text-[#c91f28]">
                      {t(item.source)}
                    </p>
                    <p className="mt-1.5 text-[14.5px] leading-[1.7] text-[#52525B] sm:text-[15px]">
                      {t(item.text)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
