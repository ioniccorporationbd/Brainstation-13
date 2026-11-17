import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import { pageMetadata } from "@/i18n/seo";
import Link from "next/link";
import {
  ArrowRight,
  CircleDot,
  Handshake,
  Headphones,
  Layers,
  Rocket,
  ShieldCheck,
  Target,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/solution-partner/swapno",
    title: t("Swapno Solution Partnership | Magnetic Solution Limited"),
    description: t("How the Swapno platform and Magnetic Solution Limited engineering combine on joint solution work for shared clients."),
  });
}

export default async function Page() {
  const { t } = await getTranslator();
  return (
    <main>
      <section className="bg-white pb-[64px] pt-[56px] text-black md:pb-[104px] md:pt-[80px]">
        <div className="mx-auto grid brand-container grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Solution partner · Swapno")}</span>
            <h1 className="mt-6 max-w-[640px] text-[clamp(30px,8.9vw,38px)] font-semibold leading-[1.08] tracking-[-0.03em] text-black md:text-[52px] lg:text-[56px] text-balance">{t("Better together with Swapno")}</h1>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("A collaboration that pairs the Swapno platform with engineering delivery from Magnetic Solution Limited, so joint clients get domain depth and build capacity in one arrangement.")}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Schedule a call")}<ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Send a brief")}</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
              alt={t("Two teams planning together around a whiteboard")}
              className="h-[280px] w-full object-cover md:h-[420px] lg:h-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] py-10">
        <dl className="mx-auto grid brand-container grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-normal text-[#8a8f98]">{t("Platform")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Swapno product foundation")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-normal text-[#8a8f98]">{t("Engineering")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Delivery by Magnetic Solution Limited")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-normal text-[#8a8f98]">{t("Design")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Solution architecture shaped jointly")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-normal text-[#8a8f98]">{t("Support")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("A single support path after launch")}</dd>
          </div>
        </dl>
      </section>

      <section className="bg-white py-[56px] md:py-[104px]">
        <div className="mx-auto grid brand-container grid-cols-1 gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("The collaboration")}</p>
            <h2 className="mt-3 max-w-[620px] text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px] text-balance">{t("Platform expertise plus engineering depth")}</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Swapno brings its platform and domain knowledge. Magnetic Solution Limited brings senior engineering, delivery discipline and the capacity to take a solution from pilot to production.")}</p>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Clients work with one combined team: one roadmap, one point of contact and one set of quality standards across both organisations.")}</p>
          </div>
          <div className="rounded-xl border border-[#ececec] bg-white p-7 md:p-8">
            <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("How the work is divided")}</h3>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("Solution scope and architecture: shaped jointly")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("Platform configuration and product fit: Swapno")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("Custom engineering and integration: Magnetic Solution Limited")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("Quality, security and release standards: shared")}</span>
              </li>
            </ul>
            <p className="mt-6 rounded-lg bg-[#fafafa] px-4 py-3.5 text-[13px] leading-[1.6] text-[#52525B] text-pretty">{t("Partnership terms, references and joint credentials are shared with prospective clients on request under NDA.")}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] py-[56px] md:py-[104px]">
        <div className="mx-auto brand-container">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("What the collaboration gives you")}</p>
          <h2 className="mt-3 max-w-[760px] text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px] text-balance">{t("Practical benefits for a joint engagement")}</h2>
          <p className="mt-4 max-w-[640px] text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Each item describes how the two teams work together on a live project.")}</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Handshake size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Joint solution design")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Architecture and scope shaped by both teams together.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Rocket size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Faster delivery")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Reusable components and accelerators shorten the path to a working pilot.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Layers size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Engineering depth")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Senior specialists across AI, cloud and enterprise stacks.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <ShieldCheck size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Quality assurance")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Shared QA and security standards on every joint engagement.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Headphones size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Ongoing support")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("A combined support path after launch, agreed in the contract.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Target size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Shared accountability")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("One roadmap and one point of contact for the client.")}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-[56px] md:py-[104px]">
        <div className="mx-auto brand-container">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Joint delivery")}</p>
          <h2 className="mt-3 max-w-[720px] text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px] text-balance">{t("How a combined engagement is set up")}</h2>
          <ol className="mt-10 space-y-4">
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                01
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Joint discovery")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("Both teams meet the client together so scope is understood the same way.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                02
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Division of work")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("Responsibilities are written down before the build starts.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                03
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Shared plan")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("One plan and one reporting rhythm cover both organisations.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                04
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Combined QA")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("Quality and security gates apply to every change, whichever team makes it.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                05
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Single support path")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("After launch the client has one route to support, not two.")}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-white pb-[56px] pt-[8px] md:pb-[104px]">
        <div className="mx-auto brand-container rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[clamp(27px,8vw,32px)] font-semibold leading-[1.18] tracking-[-0.02em] text-black md:text-[34px] text-balance">{t("Explore a joint engagement")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Tell us the goal and we will bring the right combined team to the first call.")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Talk to us")}<ArrowRight size={17} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("See our work")}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
