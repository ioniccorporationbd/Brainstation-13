import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import { pageMetadata } from "@/i18n/seo";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CircleCheck,
  CircleDot,
  Lock,
  PenLine,
  Send,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/time2publish",
    title: t("Time2Publish | Magnetic Solution Limited"),
    description: t("Time2Publish is an end-to-end publishing platform for authoring, review, approval and digital distribution."),
  });
}

export default async function Page() {
  const { t } = await getTranslator();
  return (
    <main>
      <section className="bg-white pb-[64px] pt-[56px] text-black md:pb-[104px] md:pt-[80px]">
        <div className="mx-auto grid brand-container grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Product · Publishing")}</span>
            <h1 className="mt-6 max-w-[640px] text-[clamp(30px,8.9vw,38px)] font-semibold leading-[1.08] tracking-[-0.03em] text-black md:text-[52px] lg:text-[56px]">{t("From manuscript to live in one flow")}</h1>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("An end-to-end publishing platform for authoring, review, approval and digital distribution — with versioning and approvals instead of spreadsheet chaos.")}</p>
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
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1400&auto=format&fit=crop"
              alt={t("Library shelves of books representing a publishing workflow")}
              className="h-[280px] w-full object-cover md:h-[420px] lg:h-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] py-10">
        <dl className="mx-auto grid brand-container grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-normal text-[#8a8f98]">{t("Authoring")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Structured and collaborative")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-normal text-[#8a8f98]">{t("Review")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Versioned and auditable")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-normal text-[#8a8f98]">{t("Output")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Web, app and print-ready")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-normal text-[#8a8f98]">{t("Access")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Role-based permissions")}</dd>
          </div>
        </dl>
      </section>

      <section className="bg-white py-[56px] md:py-[104px]">
        <div className="mx-auto grid brand-container grid-cols-1 gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Why Time2Publish")}</p>
            <h2 className="mt-3 max-w-[620px] text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px] text-balance">{t("Publishing breaks at the hand-offs")}</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Drafts arrive by email, review comments live in three places, and the approved version is whatever someone last attached. Content that has to be reused across print and digital loses structure along the way.")}</p>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Time2Publish keeps the whole pipeline in one place: authors, editors and production teams work on the same structured content, with approvals that cannot be lost.")}</p>
          </div>
          <div className="rounded-xl border border-[#ececec] bg-white p-7 md:p-8">
            <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("The pipeline it replaces")}</h3>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("Drafting in shared documents with manual version naming")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("Review cycles tracked in email threads and spreadsheets")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("Approval by whoever has the latest file")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("Re-formatting the same content separately for each channel")}</span>
              </li>
            </ul>
            <p className="mt-6 rounded-lg bg-[#fafafa] px-4 py-3.5 text-[13px] leading-[1.6] text-[#52525B] text-pretty">{t("Existing editorial processes are mapped during onboarding, so the platform matches how your titles are actually produced.")}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] py-[56px] md:py-[104px]">
        <div className="mx-auto brand-container">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Capabilities")}</p>
          <h2 className="mt-3 max-w-[760px] text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px] text-balance">{t("Publishing, streamlined")}</h2>
          <p className="mt-4 max-w-[640px] text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Covers authoring through distribution, with an audit trail across the whole pipeline.")}</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <PenLine size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Collaborative authoring")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Structured content creation with real-time editing.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <CircleCheck size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Review & approval")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Versioned, auditable editorial workflows.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Send size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Digital distribution")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Publish to web, app and print-ready formats from one source.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <BookOpen size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Content reuse")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Structured content that repurposes across channels.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <BarChart3 size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Analytics")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Engagement and usage insight for every title.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Lock size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Access control")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Role-based permissions across teams and titles.")}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-[56px] md:py-[104px]">
        <div className="mx-auto brand-container">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Workflow")}</p>
          <h2 className="mt-3 max-w-[720px] text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px] text-balance">{t("How a title goes live")}</h2>
          <ol className="mt-10 space-y-4">
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                01
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Create the title")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("Structure, metadata and contributors are set up once.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                02
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Author and review")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("Editors work on the same structured content, with comments attached to versions.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                03
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Approve")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("Approval is recorded against a specific version, not a file name.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                04
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Publish")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("Outputs are generated for each channel from the approved source.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                05
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Measure")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("Usage insight feeds the next edition or revision.")}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-white pb-[56px] pt-[8px] md:pb-[104px]">
        <div className="mx-auto brand-container rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[clamp(22px,5.6vw,27px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px] text-balance">{t("Modernise your publishing workflow")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("See how Time2Publish fits your editorial process, using one of your own titles.")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Book a demo")}<ArrowRight size={17} />
              </Link>
              <Link
                href="/education"
                className="inline-flex items-center justify-center gap-2 sm:shrink-0 rounded-lg max-sm:px-5 max-sm:py-3 max-sm:text-[14px] lg:max-xl:px-4 lg:max-xl:text-[13px] text-center border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Explore education")}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
