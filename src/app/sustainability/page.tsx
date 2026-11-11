import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Recycle,
  Scale,
  Sun,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability | Magnetic Solution Limited",
  description:
    "How Magnetic Solution Limited approaches environmental impact, social responsibility and responsible governance across its delivery centres.",
};

export default function Page() {
  return (
    <main>
      <section className="bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
              Sustainability
            </span>
            <h1 className="mt-6 max-w-[640px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">
              Technology that leaves the place better than it found it
            </h1>
            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">
              Environmental impact, social equity and responsible governance run
              through how we build, operate and grow — reviewed and improved
              rather than announced once.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                Talk to our team
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                Explore our resources
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1400&auto=format&fit=crop"
              alt="Lush green forest canopy representing environmental sustainability"
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-10">
        <dl className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">
              Environment
            </dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">
              Cloud efficiency, circular IT, paperless operations
            </dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">
              People
            </dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">
              Fair employment, learning and inclusive opportunity
            </dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">
              Governance
            </dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">
              Transparent reporting and data stewardship
            </dd>
          </div>
          <div>
            <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8a8f98]">
              Review
            </dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.45] text-black">
              Commitments tracked rather than asserted
            </dd>
          </div>
        </dl>
      </section>

      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Three pillars
          </p>
          <h2 className="mt-3 max-w-[760px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            One accountable promise
          </h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.7] text-[#55585e]">
            Our framework balances environmental impact, social equity and
            responsible governance — each pillar has named owners and is
            reviewed on a set cycle.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Leaf size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Environmental Stewardship
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Reducing our footprint through efficient cloud infrastructure,
                responsible e-waste handling and energy-conscious offices.
              </p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Users size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Social Responsibility
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Investing in people — fair employment, continuous learning and
                inclusive opportunity in the communities where we operate.
              </p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Scale size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Responsible Governance
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Transparent reporting, ethical conduct and strong data
                stewardship keep accountability at the centre of decisions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Programmes
          </p>
          <h2 className="mt-3 max-w-[760px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            Practical commitments, not posters
          </h2>
          <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.7] text-[#55585e]">
            Six programmes turn the pillars into everyday practice across
            delivery centres and support teams.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Sun size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Green Data Centres
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Workloads move to efficient cloud regions and right-sized
                servers, cutting idle compute and redundant energy use.
              </p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Recycle size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Circular IT
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Hardware is repaired, refurbished and responsibly recycled.
                End-of-life devices follow documented e-waste partners.
              </p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Droplets size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Paperless Operations
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Digitised HR, finance and delivery workflows reduce paper
                consumption and physical waste year over year.
              </p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <GraduationCap size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Skills for the Future
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Free training, internships and mentorship open technology
                careers to young learners.
              </p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <HeartHandshake size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Community Impact
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Local partnerships on education, health and disaster-relief
                support build resilient communities.
              </p>
            </article>
            <article className="rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                <Leaf size={21} strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-[16.5px] font-bold tracking-[-0.01em] text-black">
                Sustainable Delivery
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                Remote-first collaboration and green commuting policies reduce
                daily travel emissions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Environment
            </p>
            <h2 className="mt-3 max-w-[520px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
              Greener infrastructure, measured continuously
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
              We keep consolidating workloads, choosing efficient cloud regions
              and retiring hardware that no longer earns its power draw.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
              Each facility tracks energy and waste against annual targets, so
              progress is a number reviewed by owners — not a slogan.
            </p>
            <ul className="mt-7 space-y-3.5">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.1}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14.5px] leading-[1.7] text-[#55585e]">
                  Right-sized cloud provisioning to eliminate idle compute
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.1}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14.5px] leading-[1.7] text-[#55585e]">
                  Documented e-waste recycling for decommissioned devices
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.1}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14.5px] leading-[1.7] text-[#55585e]">
                  Energy-efficient lighting and cooling across offices
                </span>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec] lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1400&auto=format&fit=crop"
              alt="Solar panels and clean energy infrastructure"
              className="h-[280px] w-full object-cover md:h-[400px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              People
            </p>
            <h2 className="mt-3 max-w-[520px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
              Growth that lifts the community with it
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
              Our social work focuses on widening access to technology
              education, supporting employee wellbeing and standing with
              communities when they need it.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
              From mentorship to volunteering, the programmes are practical and
              open to the people around us.
            </p>
            <ul className="mt-7 space-y-3.5">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.1}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14.5px] leading-[1.7] text-[#55585e]">
                  Inclusive hiring and equal-opportunity advancement
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.1}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14.5px] leading-[1.7] text-[#55585e]">
                  Paid volunteering and disaster-relief support
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2.1}
                  className="mt-[3px] shrink-0 text-[#c91f28]"
                />
                <span className="text-[14.5px] leading-[1.7] text-[#55585e]">
                  Free bootcamps and open learning resources
                </span>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#ececec] ">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
              alt="Diverse team collaborating in a bright office"
              className="h-[280px] w-full object-cover md:h-[400px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-[72px] pt-[8px] md:pb-[96px]">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">
                Partner with a company that takes this seriously
              </h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">
                Looking for a technology partner that shares your environmental
                and social values? Let us show you how the commitments are
                governed.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                Talk to our team
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                Explore our resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
