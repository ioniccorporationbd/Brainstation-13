import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  CircleDot,
  Code2,
  GraduationCap,
  Landmark,
  Radio,
  Rocket,
  ShoppingBag,
  Stethoscope,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Industries | Magnetic Solution Limited"),
    description: t("Sector-focused engineering for fintech, retail, education, automotive, healthcare, telecom, startups and software businesses."),
  };
}

export default async function Page() {
  const { t } = await getTranslator();
  return (
    <main>
      <section className="bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Industries")}</span>
            <h1 className="mt-6 max-w-[640px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">{t("Sector knowledge first, then clean engineering")}</h1>
            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">{t("We start from how your market actually works — regulation, workflow and customer expectations — and build software that fits on day one.")}</p>
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
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop"
              alt={t("Open-plan office floor with teams working across desks")}
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-10">
        <dl className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Sector focus")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Regulated, data-heavy markets")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Discovery")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Market constraints mapped before design")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Delivery")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Senior engineers on every engagement")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Patterns")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Reusable sector architectures")}</dd>
          </div>
        </dl>
      </section>

      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Overview")}</p>
            <h2 className="mt-3 max-w-[620px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Domain context decides whether software ships or gets rewritten")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("Every sector carries rules that are invisible from outside: how a claim is assessed, when a payment may be reversed, which record an auditor will ask for. We map those rules before work is scoped.")}</p>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("Front-loading that context means sector work starts faster and needs fewer rewrites later, because the requirements come from the business rather than a generic template.")}</p>
          </div>
          <div className="rounded-xl border border-[#ececec] bg-white p-7 md:p-8">
            <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Sector coverage at a glance")}</h3>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#55585e]">{t("Fintech: banking, lending, wallets and payment infrastructure")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#55585e]">{t("Commerce: storefronts, omnichannel and fulfilment journeys")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#55585e]">{t("Healthcare: regulated data, clinical and patient workflows")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#55585e]">{t("Telecom and automotive: BSS/OSS, connected and after-sales systems")}</span>
              </li>
            </ul>
            <p className="mt-6 rounded-lg bg-[#fafafa] px-4 py-3.5 text-[13px] leading-[1.6] text-[#55585e]">{t("Not every sector appears on this page. Work outside these areas is scoped case by case, after the constraints are understood.")}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Sector coverage")}</p>
          <h2 className="mt-3 max-w-[760px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Where we are strongest")}</h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.7] text-[#55585e]">{t("Eight sectors we have built for repeatedly. Each card leads to the service page with the relevant capabilities and delivery detail.")}</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/fintech"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Landmark size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Fintech")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Banking, lending, wallets and payment infrastructure.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
            <Link
              href="/retail"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <ShoppingBag size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Retail & E-commerce")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Commerce platforms, omnichannel and storefront innovation.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
            <Link
              href="/education"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <GraduationCap size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Education")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Learning platforms, assessment and content delivery.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
            <Link
              href="/automotive"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Car size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Automotive")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Connected vehicles, dealer systems and after-sales platforms.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
            <Link
              href="/pharma"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Stethoscope size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Pharma & Healthcare")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Regulated data, clinical workflows and patient platforms.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
            <Link
              href="/telecom"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Radio size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Telecom")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("BSS/OSS, self-service and network-driven products.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
            <Link
              href="/startup"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Rocket size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Startups")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("MVPs and scalable foundations for fast-moving founders.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
            <Link
              href="/software-ites"
              className="group rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Code2 size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Software & ITES")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Product engineering for software companies and enablement teams.")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Learn more")}<ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("How we work")}</p>
          <h2 className="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Four steps from sector context to working software")}</h2>
          <ol className="mt-10 space-y-4">
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                01
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Sector mapping")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">{t("Regulation, workflow and terminology are documented with your team before scope is fixed.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                02
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Reference architecture")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">{t("We reuse proven patterns for the sector and adapt them to your specific constraints.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                03
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Build in slices")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">{t("Each slice is demonstrable, reviewable and usable — no big-bang reveal at the end.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                04
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">{t("Hand-over and support")}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">{t("Documentation, runbooks and a support path so the platform stays maintainable.")}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-white px-6 pb-[72px] pt-[8px] md:pb-[96px]">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">{t("Tell us your market and the constraint that hurts most")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">{t("We will reply with a plan grounded in your sector, not a generic brochure.")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Schedule a call")}<ArrowRight size={17} />
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
