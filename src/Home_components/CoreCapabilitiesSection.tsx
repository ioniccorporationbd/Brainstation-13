import Image from "next/image";
import { getTranslator } from "@/i18n/server";
import Link from "next/link";

type Capability = {
  title: string;
  description: string;
  icon: string;
  href: string;
  className?: string;
};

type CapabilityImage = {
  src: string;
  alt: string;
  className?: string;
};

const capabilities: Capability[] = [
  {
    title: "Staff Augmentation",
    description:
      "Instantly scale your team with vetted AI/cloud experts. Pay only for the talent you need, when you need it.",
    icon: "/images/core-capabilities/icon-staff.svg",
    href: "/services/staff-augmentation",
    className: "xl:col-start-1 xl:row-start-1",
  },
  {
    title: "Managed Services",
    description:
      "End-to-end support for your applications, infrastructure, and digital platforms—so you can shift focus from maintenance to innovation.",
    icon: "/images/core-capabilities/icon-managed.svg",
    href: "/services/managed-service",
    className: "xl:col-start-3 xl:row-start-1",
  },
  {
    title: "MVP Development",
    description:
      "Launch market-ready MVPs in 8-12 weeks. AI-accelerated builds with 40% faster iteration cycles.",
    icon: "/images/core-capabilities/icon-mvp.svg",
    href: "/services/mvp-development",
    className: "xl:col-start-2 xl:row-start-2",
  },
  {
    title: "Technology Consulting",
    description:
      "Cut tech waste by 30% with our strategic audits. Align tools with business goals for maximum ROI.",
    icon: "/images/core-capabilities/icon-consulting.svg",
    href: "/services/technology-consulting",
    className: "xl:col-start-1 xl:row-start-3",
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize legacy systems with AI-driven automation. Achieve 50% operational efficiency gains.",
    icon: "/images/core-capabilities/icon-digital.svg",
    href: "/services/digital-transformation",
    className: "xl:col-start-3 xl:row-start-3",
  },
];

const images: CapabilityImage[] = [
  {
    src: "/images/core-capabilities/staff-augmentation.png",
    alt: "Staff augmentation specialist working with laptop",
    className: "xl:col-start-2 xl:row-start-1",
  },
  {
    src: "/images/core-capabilities/team-collaboration.png",
    alt: "Team collaboration at office desk",
    className: "xl:col-start-1 xl:row-start-2",
  },
  {
    src: "/images/core-capabilities/managed-services.png",
    alt: "Managed services specialist in support meeting",
    className: "xl:col-start-3 xl:row-start-2",
  },
  {
    src: "/images/core-capabilities/technology-consulting.png",
    alt: "Technology consulting discussion",
    className: "xl:col-start-2 xl:row-start-3",
  },
];

const CARD_BASE =
  "group rounded-[18px] border border-black/[0.07] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] " +
  "transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform " +
  "hover:border-[#C91F28]/25 hover:shadow-[0_22px_44px_-12px_rgba(0,0,0,0.18)] " +
  "motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.99] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C91F28] focus-visible:ring-offset-2";

export default async function CoreCapabilitiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-11 max-sm:py-8 sm:py-[70px] md:py-[90px] lg:py-[112px]">
      <div className="brand-container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between max-sm:items-center max-sm:text-center">
          <h2 className="max-w-[600px] max-sm:mx-auto text-[clamp(24px,6.9vw,29px)] font-semibold leading-[1.12] tracking-[-0.03em] text-[#0A0A0A] sm:text-[36px] md:text-[40px] lg:text-[44px] text-balance">{t("Drive Growth with Core Capabilities")}</h2>

          <Link
            href="/services"
            className="inline-flex items-center gap-3 max-sm:min-h-11 text-[15px] font-semibold text-primary transition-colors hover:text-primary-hover md:pb-2 max-sm:min-h-[44px]"
          >{t("Explore All Services")}<span aria-hidden="true" className="text-[18px] leading-none">
              →
            </span>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 max-sm:gap-3.5 sm:mt-12 md:grid-cols-2 md:gap-6 xl:auto-rows-[270px] xl:grid-cols-3 xl:gap-7 max-sm:mt-6">
          {capabilities.map((item) => (
            <CapabilityCard key={item.title} item={item} />
          ))}

          {images.map((item) => (
            <CapabilityPhoto key={item.src} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

async function CapabilityCard({ item }: { item: Capability }) {
  const { t } = await getTranslator();
  return (
    <Link
      href={item.href}
      className={`${CARD_BASE} flex h-full flex-col p-5 md:p-7 ${item.className ?? ""}`}
    >
      <Image
        src={item.icon}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />

      <h3 className="mt-6 text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0A0A0A] sm:text-[20px] md:text-[22px] lg:text-[22px] text-balance transition-colors group-hover:text-[#C91F28]">
        {t(item.title)}
      </h3>

      <p className="mt-2.5 max-w-[360px] text-[15px] font-normal leading-[1.55] text-[#52525B] text-pretty">
        {t(item.description)}
      </p>
    </Link>
  );
}

function CapabilityPhoto({ item }: { item: CapabilityImage }) {
  return (
    <div
      className={`${CARD_BASE} relative h-[220px] overflow-hidden sm:h-[260px] xl:h-full ${item.className ?? ""}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 430px"
        className="object-cover"
      />
    </div>
  );
}
