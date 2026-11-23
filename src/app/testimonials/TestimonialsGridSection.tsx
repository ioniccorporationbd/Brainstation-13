import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight, Quote } from "lucide-react";

import TestimonialProvenanceNote from "./TestimonialProvenanceNote";

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

function initials(name: string) {
  return name
    .replace(/^Dr\.\s+/, "")
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

async function Card({ item }: { item: Testimonial }) {
  const { t } = await getTranslator();
  const body = (
    <>
      <div className="flex items-start justify-between">
        <span className="rounded-md bg-[#fdecec] px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-normal text-[#c91f28]">
          {t(item.tag)}
        </span>
        <Quote size={24} strokeWidth={1.6} className="text-[#f0c9cb]" />
      </div>
      <p className="mt-5 flex-1 text-[15px] md:text-[16px] leading-[1.6] text-[#3f434a]">
        &ldquo;{t(item.quote)}&rdquo;
      </p>
      <div className="mt-6 border-t border-[#f2f2f2] pt-5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[14px] font-bold text-[#c91f28]">
            {initials(item.name)}
          </span>
          <div>
            <p className="text-[15px] md:text-[16px] font-semibold leading-[1.3] text-black">
              {t(item.name)}
            </p>
            <p className="mt-0.5 text-[13px] leading-[1.4] text-[#52525B] text-pretty">
              {t(item.role)}
            </p>
          </div>
        </div>
        {item.href ? (
          <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28]">{t("Read story")}<ArrowRight
              size={15}
              strokeWidth={2.2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
        ) : null}
      </div>
    </>
  );

  const base =
    "flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 md:p-7";

  if (item.href) {
    return (
      <Link
        href={item.href}
        className={`group ${t(base)} hover:border-[#c91f28]/50`}
      >
        {body}
      </Link>
    );
  }
  return (
    <article className={`${t(base)} hover:border-[#c91f28]/30`}>{body}</article>
  );
}

export default async function TestimonialsGridSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-20 max-sm:py-8 md:py-24">
      <div className="mx-auto brand-container">
        <div className="max-w-[760px]">
          <p className="text-[13px] font-bold uppercase tracking-normal text-[#c91f28]">{t("In their own words")}</p>
          <h2 className="mt-4 text-black font-semibold text-[clamp(24px,6.9vw,29px)] leading-[1.12] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px]">{t("Six accounts from our engagements")}</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-[#52525B] md:text-[16px] text-pretty">{t("Each card keeps the original name, designation, company and wording. Where a fuller story exists, the card links to it.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-[1.4fr_1fr] md:items-center">
          <TestimonialProvenanceNote />
          <div className="rounded-xl border border-[#ececec] bg-white px-6 py-5">
            <p className="text-[14px] font-semibold text-black">{t("Prefer to watch?")}</p>
            <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[#52525B] text-pretty">{t("Client video stories from LUUP, BSEZ and Pro Carrier are available on our staff augmentation page.")}</p>
            <Link
              href="/staff-augmentation"
              className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#c91f28] hover:text-[#a71920]"
            >{t("Watch client videos")}<ArrowRight size={15} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
