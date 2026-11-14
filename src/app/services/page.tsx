import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CircleCheck,
  CircleDot,
  Cloud,
  Database,
  Lock,
  Sparkles,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Services | Magnetic Solution Limited"),
    description: t("Full-lifecycle engineering across AI, cloud, data and enterprise software \u2014 strategy, build and run under one accountable team."),
  };
}

export default async function Page() {
  const { t } = await getTranslator();
  return (
    <main>
      <section className="bg-white pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="grid brand-container grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Services")}</span>
            <h1 className="mt-6 max-w-[640px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">{t("Full-lifecycle engineering, under one accountable team")}</h1>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.6] text-[#52525B] md:text-[15px]">{t("Strategy, design, build and run across AI, cloud, data and enterprise software — delivered by specialists who stay with the outcome after launch.")}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Schedule a call")}<ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Send a brief")}</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
              alt={t("Engineering team reviewing work together in a meeting room")}
              className="h-[280px] w-full object-cover md:h-[420px] lg:h-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] py-10">
        <dl className="grid brand-container grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Scope")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Strategy through production support")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Teams")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Senior specialists, one owner")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Cloud")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Any provider, infrastructure as code")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Quality")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Testing and security inside the pipeline")}</dd>
          </div>
        </dl>
      </section>

      <section className="bg-white py-[48px] md:py-[104px]">
        <div className="grid brand-container grid-cols-1 gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("How we engage")}</p>
            <h2 className="mt-3 max-w-[620px] text-[27px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[34px]">{t("One senior team from first decision to steady state")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.6] text-[#52525B]">{t("Work usually starts with a real constraint: a platform that cannot scale, a release process that stalls, or a product that has to reach the market sooner than the current setup allows.")}</p>
            <p className="mt-4 text-[15.5px] leading-[1.6] text-[#52525B]">{t("Rather than hand over between a strategy group, a build group and a support group, one team carries the decisions through — so the trade-offs made early still make sense later.")}</p>
          </div>
          <div className="rounded-xl border border-[#ececec] bg-white p-7 md:p-8">
            <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-black">{t("What stays constant")}</h3>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("A named technical owner for the whole engagement")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("Architecture decisions documented with their trade-offs")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("Weekly working software rather than status slides")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("Runbooks and hand-over material as a deliverable, not an afterthought")}</span>
              </li>
            </ul>
            <p className="mt-6 rounded-lg bg-[#fafafa] px-4 py-3.5 text-[13px] leading-[1.6] text-[#52525B]">{t("Engagements can be fixed-scope, retainer or embedded with your team. The model is agreed after discovery, not before.")}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] py-[48px] md:py-[104px]">
        <div className="brand-container">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Service lines")}</p>
          <h2 className="mt-3 max-w-[760px] text-[27px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[34px]">{t("What we do")}</h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.7] text-[#52525B]">{t("Six service lines that can run alone or together. Each card opens the detailed service page.")}</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/ml-ai-development"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Sparkles size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-semibold tracking-[-0.01em] text-black">{t("AI & ML Development")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#52525B]">{t("Production-grade machine learning, LLM applications and intelligent automation.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
            <Link
              href="/cloud-solutions"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Cloud size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-semibold tracking-[-0.01em] text-black">{t("Cloud & DevOps")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#52525B]">{t("Migration, infrastructure as code and reliability engineering on any cloud.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
            <Link
              href="/data-engineering"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Database size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-semibold tracking-[-0.01em] text-black">{t("Data Engineering")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#52525B]">{t("Pipelines, warehouses and analytics foundations built to scale.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
            <Link
              href="/erp-development"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Boxes size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-semibold tracking-[-0.01em] text-black">{t("Enterprise Software")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#52525B]">{t("ERP, CRM and custom platforms that fit how your business really runs.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
            <Link
              href="/qa-testing-and-automation"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <CircleCheck size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-semibold tracking-[-0.01em] text-black">{t("QA & Automation")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#52525B]">{t("Test strategy and automation that protect every release.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
            <Link
              href="/cyber-security"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Lock size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-semibold tracking-[-0.01em] text-black">{t("Cyber Security")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#52525B]">{t("Threat modelling, hardening and compliance built into delivery.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-[48px] md:py-[104px]">
        <div className="brand-container">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Delivery model")}</p>
          <h2 className="mt-3 max-w-[720px] text-[27px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[34px]">{t("How a typical engagement runs")}</h2>
          <ol className="mt-10 space-y-4">
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                01
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Discovery")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#52525B] md:mt-0">{t("Current estate, constraints and the outcome that matters are agreed in writing.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                02
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Architecture")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#52525B] md:mt-0">{t("Target design, risks and a sequenced plan with explicit trade-offs.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                03
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Build in slices")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#52525B] md:mt-0">{t("Working software every week, reviewed against the agreed outcome.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                04
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Harden")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#52525B] md:mt-0">{t("Testing, security review and performance work before anything is called done.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                05
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Run and hand over")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#52525B] md:mt-0">{t("Monitoring, documentation and a support path your team can own.")}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-white pb-[48px] pt-[8px] md:pb-[96px]">
        <div className="brand-container rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[27px] font-semibold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">{t("Not sure where to start?")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#52525B]">{t("Tell us the goal — we will map the shortest safe path to value.")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Book a discovery call")}<ArrowRight size={17} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("See our work")}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
