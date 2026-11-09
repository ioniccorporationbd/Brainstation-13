import Image from "next/image";
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

export default function IndustriesInnovationSection() {
  return (
    <section className="w-full bg-[#0A0A0A] py-[96px] text-white md:py-[120px] lg:py-[138px]">
      <div className="mx-auto w-full max-w-[1260px] px-5 sm:px-8 xl:px-0">
        <h2 className="mx-auto max-w-[700px] text-center text-[46px] font-medium leading-[1.1] tracking-[-0.06em] text-white sm:text-[60px] lg:text-[68px]">
          Industries We Power with Innovation
        </h2>

        <div className="mt-[86px] grid grid-cols-1 gap-[34px] md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryItem key={industry.title} industry={industry} />
          ))}

          <ContactCard />
        </div>
      </div>
    </section>
  );
}

function IndustryItem({ industry }: { industry: IndustryCard }) {
  return (
    <Link
      href={industry.href}
      className="group flex min-h-[310px] flex-col rounded-[11px] bg-[#52525B] px-[36px] pb-[34px] pt-[34px] transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#26262A]"
    >
      <Image
        src={industry.icon}
        alt=""
        width={46}
        height={46}
        className="h-[46px] w-[46px] object-contain"
      />

      <h3 className="mt-[38px] text-[36px] font-medium leading-[1.12] tracking-[-0.05em] text-white">
        {industry.title}
      </h3>

      <p className="mt-[20px] max-w-[350px] text-[17px] font-semibold leading-[1.5] text-white/95">
        {industry.description}
      </p>

      <span className="mt-auto inline-flex items-center gap-[9px] pt-[28px] text-[15px] font-bold text-[#C91F28] transition-colors group-hover:text-[#C91F28]">
        Learn More
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}

function ContactCard() {
  return (
    <div className="flex min-h-[310px] flex-col items-center justify-center rounded-[11px] bg-[#52525B] px-[36px] py-[36px] text-center">
      <h3 className="text-[25px] font-semibold leading-[1.3] tracking-[-0.035em] text-white">
        Is your industry here?
      </h3>

      <Link
        href="/contact"
        className="mt-[38px] inline-flex h-[48px] items-center justify-center rounded-full bg-[#C91F28] px-[30px] text-[15px] font-bold text-black transition-colors hover:bg-[#A71920]"
      >
        Let&apos;s Talk
      </Link>
    </div>
  );
}