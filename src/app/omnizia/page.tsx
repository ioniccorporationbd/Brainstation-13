import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CircleDot,
  FileCheck2,
  FlaskConical,
  HeartPulse,
  Receipt,
  ScanLine,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Omnizia | Magnetic Solution Limited",
  description:
    "Omnizia connects clinical, laboratory, imaging and billing systems into one patient record for care teams.",
};

export default function Page() {
  return (
    <main>
      <section className="bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
              Product · Healthcare
            </span>
            <h1 className="mt-6 max-w-[640px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">
              One patient record across every clinical system
            </h1>
            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">
              Omnizia connects hospital and diagnostic systems so care teams see
              a single, current patient record instead of chasing data across
              departments.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                Schedule a call
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                Send a brief
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400&auto=format&fit=crop"
              alt="Clinician reviewing patient information on a tablet"
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-10">
        <dl className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">
              Sources
            </dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">
              Clinical, lab, imaging and billing
            </dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">
              Standards
            </dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">
              HL7 and FHIR connectors
            </dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">
              Access
            </dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">
              Role-based clinical views
            </dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">
              Audit
            </dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">
              Every access is attributable
            </dd>
          </div>
        </dl>
      </section>

      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              The problem
            </p>
            <h2 className="mt-3 max-w-[620px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
              Fragmented records slow down care and hide risk
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
              Hospitals rarely run one system. Registration, laboratory,
              radiology, pharmacy and billing each hold part of the picture, and
              clinicians spend time reconciling them.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
              Omnizia brings those sources together behind a consistent patient
              view, with connectors that respect the standards each system
              already speaks.
            </p>
          </div>
          <div className="rounded-xl border border-[#ececec] bg-white p-7 md:p-8">
            <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black">
              What Omnizia connects
            </h3>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#55585e]">
                  Hospital information and electronic medical record systems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#55585e]">
                  Laboratory information systems and analyser feeds
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#55585e]">
                  Radiology and imaging archives
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#55585e]">
                  Billing, insurance and claims platforms
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot
                  size={15}
                  strokeWidth={2.2}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14px] leading-[1.6] text-[#55585e]">
                  Patient portals and appointment scheduling
                </span>
              </li>
            </ul>
            <p className="mt-6 rounded-lg bg-[#fafafa] px-4 py-3.5 text-[13px] leading-[1.6] text-[#55585e]">
              Connectors are mapped per site during implementation, because
              interface capability varies between vendors and versions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Modules
          </p>
          <h2 className="mt-3 max-w-[760px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            What the platform covers
          </h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.7] text-[#55585e]">
            Each module is part of one deployment, sharing a single patient
            identity and audit trail.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <HeartPulse size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Clinical record
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Unified patient view across departments and encounters.
              </p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <FlaskConical size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Laboratory integration
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Orders and results synchronised with the lab workflow.
              </p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <ScanLine size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Imaging access
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Imaging studies linked to the patient timeline.
              </p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <CalendarCheck size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Appointments
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Scheduling and visit context available to the care team.
              </p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Receipt size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Billing alignment
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Charges and insurance context connected to the encounter.
              </p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <FileCheck2 size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Audit trail
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Access and changes recorded with user and timestamp.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Integrations
            </p>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
              Speaks the standards your systems already use
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#55585e]">
              Interface work is planned per deployment: the connector set
              depends on which systems a site runs and what their vendors
              expose.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg border border-[#ececec] bg-white px-4 py-3.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />
              <span className="text-[13.5px] font-semibold text-black">
                HL7 v2 messaging
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-[#ececec] bg-white px-4 py-3.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />
              <span className="text-[13.5px] font-semibold text-black">
                FHIR resources
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-[#ececec] bg-white px-4 py-3.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />
              <span className="text-[13.5px] font-semibold text-black">
                Laboratory analyser feeds
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-[#ececec] bg-white px-4 py-3.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />
              <span className="text-[13.5px] font-semibold text-black">
                DICOM imaging archives
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-[#ececec] bg-white px-4 py-3.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />
              <span className="text-[13.5px] font-semibold text-black">
                Insurance and claims systems
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-[#ececec] bg-white px-4 py-3.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c91f28]" />
              <span className="text-[13.5px] font-semibold text-black">
                Single sign-on
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Implementation
          </p>
          <h2 className="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            How a rollout is sequenced
          </h2>
          <ol className="mt-10 space-y-4">
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                01
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">
                  Interface inventory
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">
                  Every source system, its version and its exposed interfaces
                  are documented.
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                02
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">
                  Patient identity design
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">
                  A matching strategy is agreed before any data flows between
                  systems.
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                03
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">
                  Pilot department
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">
                  One department goes live first, with clinical validation of
                  the merged record.
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                04
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">
                  Wider rollout
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">
                  Additional departments and modules follow the proven pattern.
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-4 rounded-xl border border-[#ececec] bg-white p-6 md:flex-row md:items-start md:gap-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ececec] bg-white text-[14px] font-bold text-[#c91f28]">
                05
              </span>
              <div className="md:flex md:flex-1 md:items-start md:gap-8">
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black md:w-[260px] md:shrink-0">
                  Hand-over
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e] md:mt-0">
                  Interface documentation and support paths are transferred to
                  your IT team.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-white px-6 pb-[72px] pt-[8px] md:pb-[96px]">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">
                Consolidate your clinical systems step by step
              </h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">
                Tell us which systems you run and we will map the practical
                first step.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/schedule-a-call"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                Book a demo
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/pharma"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                Explore healthcare work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
