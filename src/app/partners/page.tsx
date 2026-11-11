import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Cloud,
  Code2,
  Database,
  Handshake,
  Puzzle,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partners | Magnetic Solution Limited",
  description:
    "How Magnetic Solution Limited works with platform vendors, technology partners and delivery allies — and how partnership and certification status is confirmed.",
};

/**
 * Content policy: vendor partnership claims, partner-logo walls and tier
 * badges previously shown here could not be verified and are not republished.
 * Partnership status is confirmed per engagement, not advertised.
 */

const models = [
  {
    icon: Handshake,
    title: "Technology partners",
    body: "We build on the platforms our clients already run. Where a formal partner status exists, it is confirmed in writing during evaluation rather than advertised as a badge.",
  },
  {
    icon: Users,
    title: "Delivery allies",
    body: "For large programmes we work alongside other delivery firms — with a single accountable owner, shared documentation and one reporting line back to you.",
  },
  {
    icon: Puzzle,
    title: "Product & vendor teams",
    body: "Vendors who need implementation capacity for their customers get a trained team that follows their reference architecture and support process.",
  },
  {
    icon: Cloud,
    title: "Cloud & infrastructure",
    body: "Cloud, hosting and managed-service providers are selected per project based on your compliance, cost and region requirements.",
  },
];

const ecosystem = [
  { icon: Code2, label: "Web & app frameworks" },
  { icon: Cloud, label: "Cloud & hosting" },
  { icon: Database, label: "Data & analytics platforms" },
  { icon: Boxes, label: "ERP & business systems" },
  { icon: Workflow, label: "Automation & integration" },
  { icon: ShieldCheck, label: "Security & compliance tooling" },
];

const principles = [
  {
    title: "No unverified logos",
    body: "A logo on a website is not a partnership. We list a vendor relationship only when it is active and can be backed by a signed agreement.",
  },
  {
    title: "Client interest first",
    body: "Recommendations follow the client's constraints — not a vendor incentive. Stack choices are documented with their trade-offs.",
  },
  {
    title: "Clear ownership",
    body: "When multiple parties are involved, responsibilities, interfaces and escalation paths are written down before work starts.",
  },
];

export default function PartnersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
              Company · Partners
            </span>

            <h1 className="mt-6 max-w-[620px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">
              Partnerships built around the work, not the logo
            </h1>

            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">
              Magnetic Solution Limited works with platform vendors, delivery
              allies and product teams to ship software that holds up in
              production. Where a formal partnership exists, it is confirmed in
              writing — not published as decoration.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                Discuss a partnership
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                About the company
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
              alt="Two delivery teams working together in a planning session"
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Partnership models */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Ways we work together
          </p>
          <h2 className="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            Four partnership models
          </h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.7] text-[#55585e]">
            Each model is a working arrangement, not a marketing tier. The
            terms, responsibilities and reporting follow what the programme
            actually needs.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((model) => (
              <article
                key={model.title}
                className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <model.icon size={21} strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                  {model.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                  {model.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Ecosystem
            </p>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
              Where we plug in
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#55585e]">
              We integrate with the systems your business already depends on
              instead of replacing them. The specific vendors, versions and
              support terms are agreed per project.
            </p>

            <div className="mt-8 rounded-xl border border-[#ececec] bg-[#fafafa] p-6">
              <h3 className="flex items-center gap-2 text-[15.5px] font-bold text-black">
                <ShieldCheck size={18} className="text-[#c91f28]" />
                Verified information only
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e]">
                Partner logos, tier levels and certification badges previously
                published on this page could not be verified, so they are not
                shown. Ask for the current partner and certification list for a
                specific platform and you will receive it with documentation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ecosystem.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl border border-[#ececec] bg-white px-5 py-5 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <item.icon size={19} strokeWidth={1.9} />
                </span>
                <span className="text-[14.5px] font-semibold text-black">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Ground rules
          </p>
          <h2 className="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            How we keep partnerships honest
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black">
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

      {/* CTA */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">
                Partnering with us on a programme?
              </h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">
                Tell us the scope, the platform and who else is involved. We
                will confirm what we can own and how the interfaces are managed.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                Start a conversation
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
