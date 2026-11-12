import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  KeyRound,
  Lock,
  ServerCog,
} from "lucide-react";
import GlobalFaqSection from "@/components/global/GlobalFaqSection";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Enterprise-Grade Security | Magnetic Solution Limited"),
    description: t("How Magnetic Solution Limited protects client data with encrypted design, least-privilege access, secure engineering and monitored operations."),
  };
}

const faqs = [
  {
    question: "How is client data segregated?",
    answer:
      "Each engagement runs in its own isolated environments and access boundaries. Production data is never mixed between clients, and access is provisioned on a strict need-to-know basis.",
  },
  {
    question: "How do you handle data protection regulation?",
    answer:
      "We follow GDPR-aligned data-handling practices, including data minimisation, processing agreements and support for data-subject requests. Documentation is available on request under NDA.",
  },
  {
    question: "Do you support security reviews and penetration tests?",
    answer:
      "Yes. We welcome client-led security assessments. Control documentation is shared as part of due diligence, and findings are addressed through the same incident and remediation process as production issues.",
  },
  {
    question: "What happens to our data after the engagement ends?",
    answer:
      "Data is returned and securely destroyed according to the agreed retention schedule, and you receive written confirmation once deletion is complete.",
  },
];

export default async function Page() {
  const { t } = await getTranslator();
  return (
    <main>
      <section className="bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Enterprise-grade security")}</span>
            <h1 className="mt-6 max-w-[640px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">{t("Security engineered into everything we build")}</h1>
            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">{t("Encryption, least-privilege access, reviewed build pipelines and monitored operations — controls designed into delivery rather than added at audit time.")}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Talk to our security team")}<ArrowRight size={18} />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("See our approach")}</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1400&auto=format&fit=crop"
              alt={t("Cybersecurity concept with digital lock and code")}
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-10">
        <dl className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Data")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Encrypted in transit and at rest")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Access")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Least privilege, MFA, SSO")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Delivery")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("Threat modelling and scanning")}</dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">{t("Operations")}</dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">{t("24/7 logging and alerting")}</dd>
          </div>
        </dl>
      </section>

      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Protection layers")}</p>
          <h2 className="mt-3 max-w-[760px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Four layers of defence")}</h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.7] text-[#55585e]">{t("Each layer is independently reviewed, so a single mistake never becomes a breach.")}</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Lock size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Data protection")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Encryption in transit and at rest, strict retention policies and least-privilege access for sensitive information.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <KeyRound size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Identity & access")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Single sign-on, multi-factor authentication and role-based controls keep the right people on the right systems.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <ClipboardCheck size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Compliance alignment")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Controls mapped to ISO 27001 control areas and GDPR-aligned data handling; artefacts shared on request under NDA.")}</p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <ServerCog size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">{t("Resilience")}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("Redundant infrastructure, tested backups and documented disaster-recovery plans keep services running.")}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Standards")}</p>
            <h2 className="mt-3 max-w-[460px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Mapped to recognised frameworks, verifiable on request")}</h2>
            <p className="mt-4 max-w-[460px] text-[15.5px] leading-[1.7] text-[#55585e]">{t("Our controls follow established frameworks rather than custom claims. Certification status, scope statements and audit artefacts are provided during due diligence under NDA — we do not display badges we cannot substantiate.")}</p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-3 rounded-lg border border-[#ececec] bg-white px-4 py-3.5">
              <CircleDot
                size={16}
                strokeWidth={2.1}
                className="mt-[3px] shrink-0 text-[#c91f28]"
              />
              <span className="text-[14px] font-semibold leading-[1.55] text-black">{t("ISO 27001 control areas for the management system")}</span>
            </li>
            <li className="flex items-start gap-3 rounded-lg border border-[#ececec] bg-white px-4 py-3.5">
              <CircleDot
                size={16}
                strokeWidth={2.1}
                className="mt-[3px] shrink-0 text-[#c91f28]"
              />
              <span className="text-[14px] font-semibold leading-[1.55] text-black">{t("GDPR-aligned data handling and processing agreements")}</span>
            </li>
            <li className="flex items-start gap-3 rounded-lg border border-[#ececec] bg-white px-4 py-3.5">
              <CircleDot
                size={16}
                strokeWidth={2.1}
                className="mt-[3px] shrink-0 text-[#c91f28]"
              />
              <span className="text-[14px] font-semibold leading-[1.55] text-black">{t("Secure development lifecycle on every release")}</span>
            </li>
            <li className="flex items-start gap-3 rounded-lg border border-[#ececec] bg-white px-4 py-3.5">
              <CircleDot
                size={16}
                strokeWidth={2.1}
                className="mt-[3px] shrink-0 text-[#c91f28]"
              />
              <span className="text-[14px] font-semibold leading-[1.55] text-black">{t("Documented incident-response procedures")}</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Operations")}</p>
            <h2 className="mt-3 max-w-[520px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Security that runs every day, not only at audit time")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("Security is part of the engineering culture: hardened pipelines, reviewed code and automated vulnerability scanning are the default, not an add-on.")}</p>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("Our operations team monitors for threats continuously and responds through documented incident procedures.")}</p>
            <ul className="mt-7 space-y-3.5">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.1}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14.5px] leading-[1.7] text-[#55585e]">{t("Automated dependency and container scanning")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.1}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14.5px] leading-[1.7] text-[#55585e]">{t("Reviewed, hardened build pipelines")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.1}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14.5px] leading-[1.7] text-[#55585e]">{t("Documented incident-response playbooks")}</span>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec] lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1400&auto=format&fit=crop"
              alt={t("Security operations centre with monitoring dashboards")}
              className="h-[280px] w-full object-cover md:h-[400px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Engineering")}</p>
            <h2 className="mt-3 max-w-[520px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Threat modelling before the first commit")}</h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("Every engagement starts by mapping the data involved, who may reach it and what happens if a control fails.")}</p>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">{t("Network isolation and hardened environments limit the blast radius when something goes wrong.")}</p>
            <ul className="mt-7 space-y-3.5">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.1}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14.5px] leading-[1.7] text-[#55585e]">{t("Threat modelling in design reviews")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.1}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14.5px] leading-[1.7] text-[#55585e]">{t("Code review and automated scanning in the pipeline")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.1}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14.5px] leading-[1.7] text-[#55585e]">{t("Network isolation and hardened environments")}</span>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec] ">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
              alt={t("Engineering team reviewing work together in a meeting room")}
              className="h-[280px] w-full object-cover md:h-[400px]"
            />
          </div>
        </div>
      </section>

      <GlobalFaqSection
        eyebrow="FAQ"
        title={t("Security and compliance questions")}
        subtitle={t("Short answers to what procurement and security reviewers usually ask first.")}
        items={faqs}
        ctaLabel="Talk to our security team"
        ctaHref="/contact"
      />

      <section className="bg-white px-6 pb-[72px] pt-[8px] md:pb-[96px]">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">{t("Have a security review to complete?")}</h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">{t("Send the questionnaire — we will answer in writing and attach the control documentation your process needs.")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >{t("Talk to our security team")}<ArrowRight size={17} />
              </Link>
              <Link
                href="/sustainability"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >{t("Learn about sustainability")}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
