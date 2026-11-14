import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "Intelligent Protocol Engineering",
    description:
      "AI-assisted delivery, contract scaffolding, requirement analysis, and architecture validation accelerate blockchain development while preserving security and best practices.",
  },
  {
    title: "Smart Contract Auditing & Risk Detection",
    description:
      "AI-driven testing combined with static and dynamic analysis to identify logic flaws, vulnerabilities, attack vectors, and edge cases in smart contracts before deployment.",
  },
  {
    title: "AI-Optimized Blockchain Performance",
    description:
      "Machine learning models analyze network load, transaction patterns, and infrastructure usage to optimize throughput, cost, and scalability.",
  },
  {
    title: "Autonomous Blockchain DevOps",
    description:
      "Agentic automation for deployments, rollbacks, and monitoring across blockchain nodes and services with minimal downtime.",
  },
];

export default async function BlockchainExcellenceSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-[#fafafa] pb-[56px] pt-[56px] text-[#0a0a0a] md:pb-[104px] md:pt-[104px]">
      <div className="brand-container">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("AI × Blockchain")}</p>

            <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Blockchain Excellence with AI")}</h2>

            <p className="mt-5 max-w-[460px] text-[16px] font-medium leading-[1.7] text-[#565656] md:text-[17px]">{t("We combine artificial intelligence with blockchain engineering to build systems that are faster to develop, safer to deploy, and smarter in operation.")}</p>

            <p className="mt-4 max-w-[460px] text-[16px] font-medium leading-[1.7] text-[#565656] md:text-[17px]">{t("At Magnetic Solution Limited, AI doesn't replace engineering judgment — it augments it. We use AI across the SDLC to reduce risk, improve quality, and accelerate blockchain delivery.")}</p>

            <Link
              href="/schedule-a-call"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#c91f28] px-7 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
            >{t("Schedule a Call")}<ArrowRight size={15} strokeWidth={2.2} />
            </Link>

            <div className="mt-10 aspect-[4/3] w-full max-w-[470px] overflow-hidden rounded-2xl border border-[#ececec] bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1200&auto=format&fit=crop"
                alt={t("AI-assisted blockchain engineering")}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-5">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28] md:p-7"
              >
                <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-2.5 text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                  {t(item.title)}
                </h3>

                <p className="mt-2.5 text-[14.5px] font-medium leading-[1.6] text-[#565656]">
                  {t(item.description)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
