import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Engagement Planning & Environment Mapping",
    description:
      "Align on scope, business objectives, and rules of engagement; preliminary review of assets for exposure using Nmap reconnaissance.",
  },
  {
    title: "Target Discovery & Risk Identification",
    description:
      "Automated scans with OWASP ZAP and manual enumeration to uncover vulnerabilities, misconfigurations, and weak controls across infrastructure.",
  },
  {
    title: "Threat Simulation & Exploitation Testing",
    description:
      "Manual exploitation chaining with Metasploit to mimic attacker behavior, demonstrating impacts like lateral movement without false positives.",
  },
  {
    title: "Findings Review & Strategic Guidance",
    description:
      "Prioritized vulnerability reports via secure platform, with executive summaries and remediation roadmaps ranked by CVSS severity.",
  },
  {
    title: "Remediation Validation & Continuous Support",
    description:
      "Re-testing fixes, ongoing threat monitoring, and quarterly reviews to ensure long-term resilience and compliance.",
  },
];

export default async function CyberSecurityApproachSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="brand-container">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="lg:sticky lg:top-24">
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("How we work")}</p>
            <h2 className="mt-4 text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px]">{t("Our security approach")}</h2>
            <p className="mt-4 max-w-[460px] text-[15.5px] leading-[1.6] text-[#52525B]">{t("A five-stage engagement that moves from scoping to verified remediation, with evidence at every step.")}</p>

            <Link
              href="/schedule-a-call"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3 text-[14.5px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
            >{t("Schedule a Call")}<ArrowRight size={17} />
            </Link>
          </div>

          <ol className="relative space-y-4">
            {steps.map((item, index) => (
              <li
                key={item.title}
                className="group flex gap-5 rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[14.5px] font-bold text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-[16.5px] font-semibold leading-[1.3] text-black md:text-[17.5px]">
                    {t(item.title)}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.7] text-[#52525B]">
                    {t(item.description)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
