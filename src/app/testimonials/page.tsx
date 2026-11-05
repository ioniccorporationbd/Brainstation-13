import type { Metadata } from "next";
import { Quote, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

import { Section, StatBand, CtaBanner } from "@/components/resource-kit/ui";

export const metadata: Metadata = {
  title: "Testimonials | Brain Station 23",
  description:
    "What clients say about working with Brain Station 23 — real outcomes in fintech, education, e-commerce and enterprise software.",
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  tag: string;
  href?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Anupom Syam",
    role: "Founder & CEO, Tackle",
    quote:
      "Brain Station 23's resource augmentation transformed our development velocity. Their AI-powered approach delivered our fintech platform 8X faster than expected.",
    tag: "Fintech",
    href: "/testimonials/anupom-syam",
  },
  {
    name: "Dr. Farhana Rahman",
    role: "Head of Academics, EduPrime",
    quote:
      "We moved high-stakes exams online and scaled to thousands of candidates without a single integrity incident.",
    tag: "Education",
  },
  {
    name: "Marcus Weber",
    role: "CTO, Finlytics GmbH",
    quote:
      "They shipped our cloud migration three months ahead of plan, and our infrastructure bill dropped by a third.",
    tag: "Cloud",
  },
  {
    name: "Nusrat Jahan",
    role: "Director, ShopSphere",
    quote:
      "Our storefront conversion doubled after the replatform. The team understood commerce, not just code.",
    tag: "E-commerce",
  },
  {
    name: "Kenji Sato",
    role: "VP Engineering, Meridian Systems",
    quote:
      "Senior engineers with real ownership. They flagged risks early and delivered predictably — rare in outsourcing.",
    tag: "Enterprise",
  },
  {
    name: "Aisha Al-Farsi",
    role: "COO, GulfPay",
    quote:
      "A wallet platform that handled our national launch without a hitch, from onboarding to settlement.",
    tag: "Fintech",
  },
];

const stats = [
  { value: "98%", label: "Client retention" },
  { value: "4.9/5", label: "Average rating" },
  { value: "2500+", label: "Projects delivered" },
  { value: "130+", label: "Industries" },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#ffab2e]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={15} strokeWidth={0} fill="currentColor" />
      ))}
    </div>
  );
}

function Card({ item }: { item: Testimonial }) {
  const body = (
    <>
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#eef6fc] px-3 py-1 text-[12px] font-bold uppercase tracking-[0.08em] text-[#2d8fca]">
          {item.tag}
        </span>
        <Quote size={26} strokeWidth={1.6} className="text-[#d5e3ef]" />
      </div>
      <p className="mt-5 text-[16px] font-medium leading-[1.6] text-[#33475c]">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="mt-6 border-t border-[#eef4f9] pt-5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111E40] text-[15px] font-bold text-white">
            {item.name.charAt(0)}
          </span>
          <div>
            <p className="text-[15px] font-semibold text-[#050b18]">{item.name}</p>
            <p className="text-[13.5px] text-[#5a6b7d]">{item.role}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Stars />
          {item.href ? (
            <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#2d8fca] transition-colors group-hover:text-[#ffab2e]">
              Read story <ArrowRight size={15} strokeWidth={2.2} />
            </span>
          ) : null}
        </div>
      </div>
    </>
  );

  const base =
    "flex h-full flex-col rounded-[16px] border border-[#e6edf5] bg-white p-7 transition duration-300";

  if (item.href) {
    return (
      <Link
        href={item.href}
        className={`group ${base} hover:-translate-y-1 hover:border-[#cfe0ef] hover:shadow-[0_22px_50px_rgba(17,30,64,0.10)]`}
      >
        {body}
      </Link>
    );
  }
  return <article className={base}>{body}</article>;
}

export default function TestimonialsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#111E40] px-6 pb-[90px] pt-[128px] text-white">
        <div className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-[#2d8fca]/25 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-[#4fa0d1]/20 blur-[110px]" />
        <div className="relative mx-auto max-w-[900px] text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[13px] font-bold uppercase tracking-[0.14em] text-[#9fd0ef]">
            Testimonials
          </span>
          <h1 className="mx-auto mt-7 max-w-[820px] text-[38px] font-medium leading-[1.08] tracking-[-0.055em] md:text-[58px]">
            Trusted by teams that ship
          </h1>
          <p className="mx-auto mt-6 max-w-[680px] text-[17px] font-medium leading-[1.55] text-white/70 md:text-[20px]">
            Real outcomes from clients across fintech, education, commerce and enterprise — in their own words.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      </Section>

      <StatBand stats={stats} tone="dark" />

      <CtaBanner
        title="Want results like these?"
        description="Tell us your goal and we'll show you how we'd approach it."
        primary={{ label: "Book a discovery call", href: "/schedule-a-call" }}
        secondary={{ label: "View case studies", href: "/case-studies" }}
      />
    </main>
  );
}
