import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import { pageMetadata } from "@/i18n/seo";
import Link from "next/link";
import {
  ArrowRight,
  CircleDot,
  Eye,
  FileCheck2,
  Fingerprint,
  Lock,
  Users,
  Video,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return pageMetadata({
    route: "/proctoring-pro",
    title: t("Proctoring Pro | Magnetic Solution Limited"),
    description: t("Proctoring Pro combines live supervision, identity verification and AI integrity signals for fair, auditable online exams."),
  });
}

export default async function Page() {
  const { t } = await getTranslator();
  return (
    <main>
      <section className="bg-white pb-[64px] pt-[56px] text-black md:pb-[104px] md:pt-[80px]">
        <div className="mx-auto grid brand-container grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Product · Assessment")}</span>
            <h1 className="mt-6 max-w-[640px] text-[clamp(30px,8.9vw,38px)] font-semibold leading-[1.08] tracking-[-0.03em] text-black md:text-[52px] lg:text-[56px]">{t("Online exams that stay trustworthy and fair")}</h1>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Proctoring Pro combines live supervision, identity verification and AI integrity signals, so institutions can assess at a distance without losing confidence in the result.")}</p>
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
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1400&auto=format&fit=crop"
              alt={t("Candidate taking an online exam at a desk with a laptop")}
              className="h-[280px] w-full object-cover md:h-[420px] lg:h-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] py-10">
        <dl className="mx-auto grid brand-container grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-normal text-[#8a8f98]">{t("Supervision")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Live and AI-assisted together")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-normal text-[#8a8f98]">{t("Identity")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Verified before the exam")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-normal text-[#8a8f98]">{t("Environment")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Locked-down exam session")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-normal text-[#8a8f98]">{t("Evidence")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Session report per candidate")}</dd>
          </div>
        </dl>
      </section>

      <section className="bg-white py-[56px] md:py-[104px]">
        <div className="mx-auto grid brand-container grid-cols-1 gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Why proctoring")}</p>
            <h2 className="mt-3 max-w-[620px] text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px] text-balance">{t("Integrity signals must be useful, not just abundant")}</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Flagging everything is the same as flagging nothing. Proctoring Pro combines live supervision with behavioural and object detection so reviewers get a short list worth reviewing.")}</p>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Candidates get a clear, calm experience: checks are explained up front, and the session stays focused on the exam rather than on tooling.")}</p>
          </div>
          <div className="rounded-xl border border-[#ececec] bg-white p-7 md:p-8">
            <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("What a session includes")}</h3>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("Identity verification before the exam window opens")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("Continuous environment checks during the session")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("A locked-down browser for the duration of the exam")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#52525B]">{t("A session report with timestamps and evidence")}</span>
              </li>
            </ul>
            <p className="mt-6 rounded-lg bg-[#fafafa] px-4 py-3.5 text-[13px] leading-[1.6] text-[#52525B] text-pretty">{t("Reviewer decisions are recorded alongside the automatic signals, so outcomes can be justified to candidates and regulators.")}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] py-[56px] md:py-[104px]">
        <div className="mx-auto brand-container">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Capabilities")}</p>
          <h2 className="mt-3 max-w-[760px] text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px] text-balance">{t("Exam integrity, end to end")}</h2>
          <p className="mt-4 max-w-[640px] text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Covers the period from candidate check-in to the final session report.")}</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Video size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Live proctoring")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Real-time supervision with flexible scheduling.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Eye size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("AI integrity checks")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Behavioural and object detection aimed at genuine risks.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Fingerprint size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Identity verification")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Biometric and document checks before the exam begins.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Lock size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Browser lockdown")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("A focused exam environment that blocks distractions.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <FileCheck2 size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Reports & audit")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Session reports and retained evidence for each candidate.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Users size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black text-balance">{t("Scale")}</h3>
              <p className="mt-2.5 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Cohorts from a single class to large concurrent sittings.")}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-[56px] md:py-[104px]">
        <div className="mx-auto brand-container">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("Exam workflow")}</p>
          <h2 className="mt-3 max-w-[720px] text-[clamp(27px,8vw,32px)] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px] text-balance">{t("From scheduling to signed-off results")}</h2>
          <ol className="mt-10 space-y-4">
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                01
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Schedule the sitting")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("Exam windows, cohorts and supervision levels are configured per sitting.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                02
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Check in candidates")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("Identity and environment checks run before the exam unlocks.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                03
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Supervise the session")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("Live proctors and automated signals run in parallel during the exam.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                04
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Review flags")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("Only flagged moments are escalated, with the evidence attached.")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                05
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:w-[260px] md:shrink-0 text-balance">{t("Release results")}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] md:mt-0 text-pretty">{t("Decision and audit record travel with the candidate result.")}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-white pb-[56px] pt-[8px] md:pb-[104px]">
        <div className="mx-auto brand-container rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[clamp(22px,5.6vw,27px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px] text-balance">{t("Protect your assessments")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] md:text-[16px] leading-[1.6] text-[#52525B] text-pretty">{t("Book a walkthrough with an assessment specialist and see the candidate and reviewer views.")}</p>
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
