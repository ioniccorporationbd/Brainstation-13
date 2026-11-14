import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";

type IndustryCard = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

const industries: IndustryCard[] = [
  {
    title: "EdTech",
    description:
      "LMS solutions built with Moodle: live classes, assessments, compliance & reporting to empower learners.",
    icon: "/images/industries/icon-edtech.svg",
    href: "/education",
  },
  {
    title: "Fintech",
    description:
      "Secure, scalable fintech & blockchain platforms built to transform payments, lending, and risk management.",
    icon: "/images/industries/icon-fintech.svg",
    href: "/fintech",
  },
  {
    title: "E-Commerce",
    description:
      "Transform your store with certified nopCommerce themes, plugins & custom apps for speed, UX & conversion.",
    icon: "/images/industries/icon-ecommerce.svg",
    href: "/e-commerce",
  },
  {
    title: "Pharma",
    description:
      "Regulation-first pharma & healthcare software: compliant platforms supporting HCPs, education & analytics.",
    icon: "/images/industries/icon-pharma.svg",
    href: "/pharma",
  },
  {
    title: "Telecom",
    description:
      "Enterprise-grade telecom applications that scale securely to serve millions with reliability & speed.",
    icon: "/images/industries/icon-telecom.svg",
    href: "/telecom",
  },
  {
    title: "Retail",
    description:
      "Smart retail systems streamlining inventory, customer journeys & omnichannel sales for business growth.",
    icon: "/images/industries/icon-retail.svg",
    href: "/retail",
  },
  {
    title: "Software/ITES",
    description:
      "Cutting-edge custom software & IT-enabled solutions solving complex problems with innovation & agility.",
    icon: "/images/industries/icon-software.svg",
    href: "/software-ites",
  },
  {
    title: "Start-Ups",
    description:
      "Lean, fast-moving digital builds for startups: MVPs, product-market fit & scalable tech from day one.",
    icon: "/images/industries/icon-startups.svg",
    href: "/startup",
  },
];

export default async function IndustriesInnovationSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-[72px] md:py-[96px] lg:py-[112px]">
      <div className="brand-container">
        <h2 className="mx-auto max-w-[680px] text-center text-[38px] font-semibold leading-[1.14] tracking-[-0.02em] text-[#0A0A0A] sm:text-[48px] lg:text-[56px]">{t("Industries We Power with Innovation")}</h2>

        <div className="mt-[60px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {industries.map((industry) => (
            <IndustryItem key={industry.title} industry={industry} />
          ))}

          <ContactCard />
        </div>
      </div>
    </section>
  );
}

async function IndustryItem({ industry }: { industry: IndustryCard }) {
  const { t } = await getTranslator();
  return (
    <Link
      href={industry.href}
      className="group flex min-h-[292px] flex-col rounded-[18px] border border-black/[0.08] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out hover:border-primary hover:bg-[#FEF7F7] hover:shadow-[0_18px_40px_-12px_rgba(201,31,40,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-safe:hover:scale-[1.03]"
    >
      <Image
        src={industry.icon}
        alt=""
        width={44}
        height={44}
        className="h-[44px] w-[44px] object-contain"
      />

      <h3 className="mt-6 text-[23px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0A0A0A] sm:text-[25px]">
        {t(industry.title)}
      </h3>

      <p className="mt-3 text-[15px] font-normal leading-[1.6] text-[#52525B]">
        {t(industry.description)}
      </p>

      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-semibold text-primary transition-colors group-hover:text-primary-hover">{t("Learn More")}<span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}

async function ContactCard() {
  const { t } = await getTranslator();
  return (
    <div className="flex min-h-[292px] flex-col items-center justify-center rounded-[18px] border border-black/[0.08] bg-white p-7 text-center shadow-[0_1px_3px_rgba(0,0,0,0.05)] md:col-span-2 lg:col-span-1">
      <h3 className="text-[24px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#0A0A0A]">{t("Is your industry here?")}</h3>

      <Link
        href="/contact"
        className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >{t("Let's Talk")}</Link>
    </div>
  );
}
