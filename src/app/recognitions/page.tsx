import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  Fingerprint,
  Gauge,
  HandHeart,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Recognitions | Magnetic Solution Limited",
  description:
    "How Magnetic Solution Limited measures recognition — delivery discipline, security practice, client references and the certifications we can evidence on request.",
};

/**
 * Content policy: the award wall previously on this page (industry rankings,
 * certification badges and award logos from the previous brand) could not be
 * verified and has not been republished under Magnetic Solution Limited.
 */

const proofPoints = [
  {
    icon: Gauge,
    title: "Delivery discipline",
    body: "Every engagement runs on a written plan with defined phases, reviewable increments and a visible burn-down of risk.",
  },
  {
    icon: ShieldCheck,
    title: "Security practice",
    body: "Secure development lifecycle, dependency review and access control are applied by default — not bolted on before an audit.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality gates",
    body: "Code review, static analysis and automated checks gate every merge, so a release is a decision rather than a gamble.",
  },
  {
    icon: Users,
    title: "Client references",
    body: "Referenceable clients and the outcomes they measured are shared during evaluation, with their consent and in context.",
  },
];

const practices = [
  {
    icon: FileCheck2,
    title: "Certifications that apply",
    body: "Where an engagement requires a specific certification, the applicable one is confirmed in the proposal together with its scope and validity.",
  },
  {
    icon: Fingerprint,
    title: "Audits & assessments",
    body: "Security questionnaires, vendor assessments and due-diligence packs are completed directly on request instead of being summarised on a web page.",
  },
  {
    icon: HandHeart,
    title: "Long-term relationships",
    body: "The strongest signal we have is clients who extend or repeat engagements. Those arrangements are private and shared only with permission.",
  },
];

export default function RecognitionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
              Company · Recognitions
            </span>

            <h1 className="mt-6 max-w-[640px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">
              Recognition should be provable, not printed
            </h1>

            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">
              We measure recognition by delivery discipline, security practice
              and clients who come back — and we only show what can be
              evidenced. Award logos and certification badges from the previous
              brand are not carried over.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                Request references
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                Read case studies
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop"
              alt="Team reviewing project documentation and results together"
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Proof points */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            What can be checked
          </p>
          <h2 className="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            Four things we can evidence on request
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <item.icon size={21} strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
                Due diligence
              </p>
              <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
                Ask for the evidence, not the badge
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.7] text-[#55585e]">
                Any certification or award becomes meaningless if nobody can
                trace it to a source. These are the three requests we answer
                most often during procurement.
              </p>
            </div>

            <div className="space-y-5">
              {practices.map((item) => (
                <article
                  key={item.title}
                  className="flex gap-5 rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                    <item.icon size={20} strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-bold tracking-[-0.01em] text-black">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e]">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verified note */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-12">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 rounded-xl border border-[#ececec] bg-white p-7 md:flex-row md:items-start md:gap-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
            <BadgeCheck size={21} strokeWidth={1.9} />
          </span>
          <div>
            <h3 className="text-[16.5px] font-bold text-black">
              Verified information only
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e]">
              The award wall, industry rankings and certification logos
              previously displayed on this page belonged to the site&apos;s
              previous brand and could not be verified, so they have been
              removed rather than re-published. If a certification or award is
              relevant to your evaluation, ask for it and you will receive the
              original evidence.
            </p>
            <div className="mt-4 flex items-start gap-3 rounded-lg bg-[#fafafa] p-4">
              <Quote size={16} className="mt-0.5 shrink-0 text-[#c91f28]" />
              <p className="text-[13.5px] leading-[1.65] text-[#55585e]">
                Client testimonial text is published only with permission. No
                name, photograph or statement is attributed to a client here
                without that consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">
                Running a vendor assessment?
              </h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">
                Send the questionnaire or the due-diligence list. We answer
                directly with documents rather than pointing at a marketing
                page.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                Contact us
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                Partnership models
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
