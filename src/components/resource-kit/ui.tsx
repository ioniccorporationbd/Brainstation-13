import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import type { ElementType, ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */
export async function ResourceHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[92px] text-[#0a0a0a]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[920px] text-center">
          <span className="inline-flex rounded-[8px] bg-[#f7f7f8] px-5 py-2 text-[16px] font-bold tracking-[-0.03em] text-[#c91f28]">
            {t(eyebrow)}
          </span>
          <h1 className="mt-7 text-[42px] font-medium leading-[1.08] tracking-[-0.07em] text-[#0a0a0a] md:text-[58px]">
            {t(title)}
          </h1>
          <p className="mx-auto mt-7 max-w-[860px] text-[18px] font-medium leading-[1.45] tracking-[-0.035em] text-[#565656] md:text-[22px]">
            {t(description)}
          </p>
        </div>

        <div className="mx-auto mt-[82px] max-w-[1220px]">
          <div className="group overflow-hidden rounded-[8px] bg-[#0a0a0a] shadow-[0_22px_70px_rgba(0,0,0,0.10)]">
            <img
              src={image}
              alt={imageAlt}
              className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-[1.04] md:h-[480px] lg:h-[560px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section header                                                    */
/* ------------------------------------------------------------------ */
export async function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const { t } = await getTranslator();
  const centered = align === "center";
  return (
    <div
      className={
        centered ? "mx-auto max-w-[780px] text-center" : "max-w-[820px]"
      }
    >
      {eyebrow ? (
        <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">
          {t(eyebrow)}
        </p>
      ) : null}
      <h2
        className={`text-[34px] font-medium leading-[1.1] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] ${
          eyebrow ? "mt-3" : ""
        }`}
      >
        {t(title)}
      </h2>
      {description ? (
        <p className="mt-5 text-[17px] font-medium leading-[1.5] tracking-[-0.035em] text-[#565656] md:text-[19px]">
          {t(description)}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature grid                                                      */
/* ------------------------------------------------------------------ */
export type FeatureItem = {
  icon: ElementType;
  title: string;
  description: string;
};

export async function FeatureGrid({
  items,
  columns = 3,
}: {
  items: FeatureItem[];
  columns?: 2 | 3;
}) {
  const { t } = await getTranslator();
  const grid =
    columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 gap-6 ${t(grid)}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.title}
            className="group rounded-[14px] border border-[#ececec] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#ececec] hover:shadow-[0_22px_50px_rgba(0,0,0,0.10)]"
          >
            <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#ffffff] text-[#c91f28] transition duration-300 group-hover:bg-[#fdecec] group-hover:text-[#c91f28]">
              <Icon size={26} strokeWidth={1.7} />
            </div>
            <h3 className="text-[21px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#0a0a0a]">
              {t(item.title)}
            </h3>
            <p className="mt-3 text-[16px] font-normal leading-[1.55] text-[#565656]">
              {t(item.description)}
            </p>
          </article>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stat band                                                         */
/* ------------------------------------------------------------------ */
export async function StatBand({
  stats,
  tone = "dark",
}: {
  stats: { value: string; label: string }[];
  tone?: "dark" | "light";
}) {
  const { t } = await getTranslator();
  const dark = tone === "dark";
  return (
    <section className={dark ? "bg-[#0a0a0a]" : "bg-[#ffffff]"}>
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-y-10 px-6 py-[70px] md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p
              className={`text-[44px] font-light leading-none tracking-[-0.02em] md:text-[58px] ${
                dark ? "text-[#c91f28]" : "text-[#c91f28]"
              }`}
            >
              {t(stat.value)}
            </p>
            <p
              className={`mt-4 text-[14px] font-medium leading-[1.4] md:text-[16px] ${
                dark ? "text-white/70" : "text-[#565656]"
              }`}
            >
              {t(stat.label)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Split block (image + content)                                     */
/* ------------------------------------------------------------------ */
export async function SplitBlock({
  image,
  imageAlt,
  eyebrow,
  title,
  paragraphs,
  bullets,
  reverse = false,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  reverse?: boolean;
}) {
  const { t } = await getTranslator();
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div
        className={`group overflow-hidden rounded-[14px] bg-[#ffffff] shadow-[0_22px_60px_rgba(0,0,0,0.08)] ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <img
          src={image}
          alt={imageAlt}
          className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-[1.04] md:h-[460px]"
        />
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        {eyebrow ? (
          <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">
            {t(eyebrow)}
          </p>
        ) : null}
        <h2
          className={`text-[30px] font-medium leading-[1.14] tracking-[-0.02em] text-[#0a0a0a] md:text-[40px] ${
            eyebrow ? "mt-3" : ""
          }`}
        >
          {t(title)}
        </h2>
        <div className="mt-6 space-y-4">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[16px] font-normal leading-[1.6] text-[#565656] md:text-[17px]"
            >
              {t(paragraph)}
            </p>
          ))}
        </div>
        {bullets && bullets.length > 0 ? (
          <ul className="mt-7 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ffffff] text-[#c91f28]">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span className="text-[15px] font-medium leading-[1.5] text-[#374151] md:text-[16px]">
                  {t(bullet)}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Logo row                                                          */
/* ------------------------------------------------------------------ */
export function LogoRow({
  logos,
}: {
  logos: { src: string; alt: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {logos.map((logo) => (
        <div
          key={logo.src}
          className="flex h-[110px] items-center justify-center rounded-[12px] border border-[#ececec] bg-white px-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={150}
            height={50}
            className="h-auto max-h-[46px] w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA banner                                                        */
/* ------------------------------------------------------------------ */
export async function CtaBanner({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  const { t } = await getTranslator();
  return (
    <section className="bg-white px-6 pb-[110px] pt-[10px]">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[18px] bg-[#0a0a0a] px-8 py-[70px] text-center md:px-16">
        <h2 className="mx-auto max-w-[780px] text-[30px] font-medium leading-[1.14] tracking-[-0.02em] text-white md:text-[44px]">
          {t(title)}
        </h2>
        <p className="mx-auto mt-5 max-w-[660px] text-[17px] font-medium leading-[1.5] text-white/70 md:text-[19px]">
          {t(description)}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primary.href}
            className="inline-flex items-center gap-2 rounded-full bg-[#c91f28] px-8 py-4 text-[15px] font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#a71920] hover:shadow-[0_16px_38px_rgba(201,31,40,0.30)]"
          >
            {t(primary.label)}
            <ArrowRight size={18} strokeWidth={2.2} />
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:border-white/50 hover:bg-white/10"
            >
              {t(secondary.label)}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section wrapper (vertical rhythm helper)                          */
/* ------------------------------------------------------------------ */
export function Section({
  children,
  className = "",
  width = "max-w-[1180px]",
}: {
  children: ReactNode;
  className?: string;
  width?: string;
}) {
  return (
    <section className={`px-6 py-[92px] ${className}`}>
      <div className={`mx-auto ${width}`}>{children}</div>
    </section>
  );
}
