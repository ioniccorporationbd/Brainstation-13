import Image from "next/image";
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
    className: "lg:col-start-1 lg:row-start-1",
  },
  {
    title: "Managed Services",
    description:
      "End-to-end support for your applications, infrastructure, and digital platforms—so you can shift focus from maintenance to innovation.",
    icon: "/images/core-capabilities/icon-managed.svg",
    href: "/services/managed-services",
    className: "lg:col-start-3 lg:row-start-1",
  },
  {
    title: "MVP Development",
    description:
      "Launch market-ready MVPs in 8-12 weeks. AI-accelerated builds with 40% faster iteration cycles.",
    icon: "/images/core-capabilities/icon-mvp.svg",
    href: "/services/mvp-development",
    className: "lg:col-start-2 lg:row-start-2 lg:pt-[3px]",
  },
  {
    title: "Technology Consulting",
    description:
      "Cut tech waste by 30% with our strategic audits. Align tools with business goals for maximum ROI.",
    icon: "/images/core-capabilities/icon-consulting.svg",
    href: "/services/technology-consulting",
    className: "lg:col-start-1 lg:row-start-3 lg:pt-[6px]",
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize legacy systems with AI-driven automation. Achieve 50% operational efficiency gains.",
    icon: "/images/core-capabilities/icon-digital.svg",
    href: "/services/digital-transformation",
    className: "lg:col-start-3 lg:row-start-3 lg:pt-[6px]",
  },
];

const images: CapabilityImage[] = [
  {
    src: "/images/core-capabilities/staff-augmentation.png",
    alt: "Staff augmentation specialist working with laptop",
    className: "lg:col-start-2 lg:row-start-1",
  },
  {
    src: "/images/core-capabilities/team-collaboration.png",
    alt: "Team collaboration at office desk",
    className: "lg:col-start-1 lg:row-start-2",
  },
  {
    src: "/images/core-capabilities/managed-services.png",
    alt: "Managed services specialist in support meeting",
    className: "lg:col-start-3 lg:row-start-2",
  },
  {
    src: "/images/core-capabilities/technology-consulting.png",
    alt: "Technology consulting discussion",
    className: "lg:col-start-2 lg:row-start-3",
  },
];

export default function CoreCapabilitiesSection() {
  return (
    <section className="w-full bg-white py-[70px] md:py-[90px] lg:py-[112px]">
      <div className="mx-auto w-full max-w-[1328px] px-5 sm:px-8 xl:px-0">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-[520px] text-[36px] font-medium leading-[1.12] tracking-[-0.045em] text-[#10182f] sm:text-[44px] lg:text-[48px]">
            Drive Growth with Our Core Capabilities
          </h2>

          <Link
            href="/services"
            className="mt-1 inline-flex items-center gap-3 text-[15px] font-semibold text-[#3c96ce] transition-colors hover:text-[#0f78b7] md:mt-[44px]"
          >
            Explore All Services
            <span aria-hidden="true" className="text-[18px] leading-none">
              →
            </span>
          </Link>
        </div>

        <div className="mt-[72px] grid gap-9 md:grid-cols-2 lg:grid-cols-[376px_504px_376px] lg:grid-rows-[230px_224px_270px] lg:gap-x-[34px] lg:gap-y-[62px]">
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

function CapabilityCard({ item }: { item: Capability }) {
  return (
    <Link
      href={item.href}
      className={`group block rounded-[14px] transition-transform duration-300 hover:-translate-y-1 ${
        item.className ?? ""
      }`}
    >
      <Image
        src={item.icon}
        alt=""
        width={42}
        height={42}
        className="h-[42px] w-[42px] object-contain"
      />

      <h3 className="mt-[40px] text-[30px] font-medium leading-[1.16] tracking-[-0.04em] text-[#10182f] transition-colors group-hover:text-[#3998d3] sm:text-[34px] lg:text-[36px]">
        {item.title}
      </h3>

      <p className="mt-[22px] max-w-[360px] text-[16px] font-normal leading-[1.5] text-[#476a80] transition-colors group-hover:text-[#335e79]">
        {item.description}
      </p>
    </Link>
  );
}

function CapabilityPhoto({ item }: { item: CapabilityImage }) {
  return (
    <div
      className={`relative h-[224px] overflow-hidden rounded-[9px] ${
        item.className ?? ""
      }`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 504px"
        className="object-cover"
      />
    </div>
  );
}