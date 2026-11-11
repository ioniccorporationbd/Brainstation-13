import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Image as ImageIcon,
  Mail,
  Megaphone,
  Mic,
  Newspaper,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Media | Magnetic Solution Limited",
  description:
    "Media and press resources for Magnetic Solution Limited — how to request interviews, commentary, company information and brand assets.",
};

/**
 * Content policy: third-party coverage, award announcements and certification
 * news previously listed here could not be verified and were removed rather
 * than republished under Magnetic Solution Limited. Nothing on this page is a
 * dated news claim.
 */

const resources = [
  {
    icon: Newspaper,
    title: "Press inquiries",
    body: "For questions about the company, our services or a specific announcement, write to our communications team through the contact page and we will respond directly.",
  },
  {
    icon: Mic,
    title: "Interviews & commentary",
    body: "Our engineers and delivery leads can speak on fintech platforms, cloud architecture, data and product engineering for interviews or background briefings.",
  },
  {
    icon: ImageIcon,
    title: "Brand assets",
    body: "Logo files, brand colours and product screenshots for editorial use are provided on request so material stays current and correctly licensed.",
  },
  {
    icon: Megaphone,
    title: "Speaking & events",
    body: "We take part in panel sessions, meetups and technical workshops. Share the topic and audience and we will confirm availability.",
  },
];

const topics = [
  {
    title: "Fintech & payments platforms",
    body: "Wallet platforms, cross-border payments, digital lending journeys and the compliance boundaries around them.",
  },
  {
    title: "Cloud & platform engineering",
    body: "Migration strategy, infrastructure cost control and running reliable services at scale.",
  },
  {
    title: "Data, AI & automation",
    body: "Practical automation inside existing business systems — from data pipelines to assisted workflows.",
  },
  {
    title: "Product engineering",
    body: "How small, senior teams ship and maintain software that enterprises keep running for years.",
  },
];

export default function MediaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white px-6 pb-[64px] pt-[56px] text-black md:pb-[88px] md:pt-[80px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
              Company · Media
            </span>

            <h1 className="mt-6 max-w-[620px] text-[32px] font-bold leading-[1.06] tracking-[-0.03em] text-black md:text-[46px] lg:text-[52px]">
              Media, press and brand resources
            </h1>

            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#55585e] md:text-[17.5px]">
              Announcements, company information and assets for editorial use.
              For interviews, commentary or a press kit, our communications team
              responds from a single contact point.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
              >
                Contact communications
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                Company overview
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1400&auto=format&fit=crop"
              alt="Newspapers and press materials laid out on a desk"
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Media resources
          </p>
          <h2 className="mt-3 max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            What we can provide, and how to ask for it
          </h2>
          <p className="mt-4 max-w-[620px] text-[15.5px] leading-[1.7] text-[#55585e]">
            Requests are handled editorially rather than through a marketing
            funnel — you get a direct answer, not a brochure.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {resources.map((item) => (
              <article
                key={item.title}
                className="flex gap-5 rounded-xl border border-[#ececec] bg-white p-7 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
                  <item.icon size={21} strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="text-[16.5px] font-bold tracking-[-0.01em] text-black">
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
      </section>

      {/* Topics */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
                Topics
              </p>
              <h2 className="mt-3 max-w-[640px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
                Subjects our team can speak to
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#55585e]">
              <Sparkles size={16} className="text-[#c91f28]" />
              Briefings arranged on request
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <h3 className="text-[15.5px] font-bold tracking-[-0.01em] text-black">
                  {topic.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.65] text-[#55585e]">
                  {topic.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Verified note + press kit */}
      <section className="border-y border-[#ececec] bg-[#fafafa] px-6 py-12">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex gap-5 rounded-xl border border-[#ececec] bg-white p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
              <ShieldCheck size={21} strokeWidth={1.9} />
            </span>
            <div>
              <h3 className="text-[16.5px] font-bold text-black">
                No unverified coverage
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e]">
                We do not publish press coverage, award announcements or
                certification news that cannot be confirmed against the original
                source. Published articles and mentions are supplied on request
                with their original links.
              </p>
            </div>
          </div>

          <div className="flex gap-5 rounded-xl border border-[#ececec] bg-white p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28]">
              <FileText size={21} strokeWidth={1.9} />
            </span>
            <div>
              <h3 className="text-[16.5px] font-bold text-black">
                Press kit on request
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.7] text-[#55585e]">
                Company description, logo files and product imagery are sent as
                a single package when you tell us the publication, the story
                angle and your deadline.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-[14.5px] font-bold text-[#c91f28] transition-colors hover:text-[#a71920]"
              >
                Request the press kit
                <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-10 md:px-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
                <Mail size={15} />
                Media contact
              </p>
              <h2 className="mt-3 text-[24px] font-bold leading-[1.18] tracking-[-0.02em] text-black md:text-[30px]">
                Have a story or a deadline?
              </h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#55585e]">
                Send the details through the contact form and mention media in
                the message — requests are routed to the people who can answer
                technically.
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
                href="/about-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
              >
                Our approach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
