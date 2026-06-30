import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  closeMenu: () => void;
  mobile?: boolean;
};

type MenuLinkItem = {
  label: string;
  href: string;
};

const collaborationLinks: MenuLinkItem[] = [
  { label: "Staff Augmentation", href: "/staff-augmentation" },
  { label: "Managed Service", href: "/managed-service" },
  { label: "Digital Transformation", href: "/digital-transformation" },
  { label: "Technology Consulting", href: "/technology-consulting" },
  { label: "MVP Development", href: "/mvp-development" },
];

const topServices: MenuLinkItem[] = [
  { label: "ML & AI Development", href: "/ml-ai-development" },
  { label: "Data Engineering", href: "/data-engineering" },
  { label: "Data Migration", href: "/data-migration" },
  { label: "Business Intelligence", href: "/business-intelligence" },
  { label: "Insurtech", href: "/insurtech" },
  { label: "3D Modeling Services", href: "/3d-modeling-services" },
  { label: "Game Studio", href: "/game-studio" },
  { label: "QA Testing & Automation", href: "/qa-testing-and-automation" },
];

const serviceColumnTwo: MenuLinkItem[] = [
  { label: "LMS Development", href: "/lms-development" },
  { label: "Web & Mobile App Development", href: "/web-mobile-app-development" },
  { label: "eCommerce Development", href: "/ecommerce-development" },
  { label: "Adobe Experience Manager", href: "/adobe-experience-manager" },
  { label: "SharePoint Services", href: "/sharepoint-services" },
  { label: "Blockchain Development", href: "/blockchain-development" },
  { label: "Shopify Services", href: "/shopify-services" },
];

const enterpriseLinks: MenuLinkItem[] = [
  { label: "Field Force Automation", href: "/field-force-automation" },
  { label: "Banking Solutions", href: "/banking-solutions" },
  { label: "Cloud Solutions", href: "/cloud-solutions" },
  { label: "Cyber Security", href: "/cyber-security" },
  { label: "ERP Development", href: "/erp-development" },
  { label: "Data Science & Business Intelligence", href: "/data-science-business-intelligence" },
];

export default function ServicesMenu({ closeMenu, mobile = false }: Props) {
  if (mobile) {
    return (
      <div className="space-y-[24px]">
        <MobileGroup title="Collaboration Model" links={collaborationLinks} closeMenu={closeMenu} />
        <MobileGroup title="Top Services" links={[...topServices, ...serviceColumnTwo]} closeMenu={closeMenu} />
        <MobileGroup title="Enterprise Focused" links={enterpriseLinks} closeMenu={closeMenu} />
      </div>
    );
  }

  return (
    <section className="w-full bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div className="grid min-h-[489px] w-full grid-cols-[477px_1fr]">
        <aside className="bg-[#f7f8fa] pb-[40px] pl-[60px] pr-[56px] pt-[31px]">
          <Link href="/collaboration-models" onClick={closeMenu} className="group block">
            <h2 className="text-[22px] font-semibold leading-[28px] text-[#050b18] transition-colors group-hover:text-[#009fe3]">
              Collaboration Models
            </h2>
            <p className="mt-[12px] text-[14px] font-normal leading-[22px] text-[#5f6674] transition-colors group-hover:text-[#009fe3]">
              AI-powered dev for 10X faster software delivery.
            </p>
          </Link>

          <div className="mt-[19px] space-y-[15px]">
            {collaborationLinks.map((item) => (
              <TextLink key={item.href} item={item} closeMenu={closeMenu} />
            ))}
          </div>

          <div className="mt-[39px] border-t border-[#d5d5d5] pt-[20px]">
            <Link href="/solution-partner/swapno" onClick={closeMenu} className="group flex items-center gap-[15px]">
              <Image
                src="/images/swapno-logo.svg"
                alt="Swapno Solution Partner"
                width={76}
                height={40}
                className="h-[40px] w-[76px] object-cover"
              />
              <span className="h-[40px] w-px bg-[#d5d5d5]" />
              <span className="text-[13px] font-medium leading-[18px] text-[#050b18] transition-colors group-hover:text-[#009fe3]">
                Solution Partner
              </span>
            </Link>

            <Link
              href="/case-study"
              onClick={closeMenu}
              className="mt-[17px] block max-w-[350px] text-[16px] font-normal leading-[24px] text-[#050b18] transition-colors hover:text-[#009fe3]"
            >
              A Journey Towards Digital Excellence in Retail. <span className="underline underline-offset-[2px]">Read case study.</span>
            </Link>
          </div>
        </aside>

        <div className="grid grid-cols-[330px_365px_1fr] gap-x-[63px] bg-white pb-[40px] pl-[60px] pr-[58px] pt-[33px]">
          <div>
            <ColumnTitle href="/top-services" closeMenu={closeMenu}>Top Services</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {topServices.map((item) => (
                <TextLink key={item.href} item={item} closeMenu={closeMenu} />
              ))}
            </div>
            <Link
              href="/services"
              onClick={closeMenu}
              className="mt-[64px] inline-flex items-center gap-[13px] text-[17px] font-semibold leading-[24px] text-[#050b18] transition-colors hover:text-[#009fe3]"
            >
              All Services <span className="text-[22px] font-normal leading-none">→</span>
            </Link>
          </div>

          <div className="pt-[44px]">
            <div className="space-y-[15px]">
              {serviceColumnTwo.map((item) => (
                <TextLink key={item.href} item={item} closeMenu={closeMenu} />
              ))}
            </div>
          </div>

          <div>
            <ColumnTitle href="/enterprise-focused" closeMenu={closeMenu}>Enterprise Focused</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {enterpriseLinks.map((item) => (
                <TextLink key={item.href} item={item} closeMenu={closeMenu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ColumnTitle({ href, closeMenu, children }: { href: string; closeMenu: () => void; children: ReactNode }) {
  return (
    <Link
      href={href}
      onClick={closeMenu}
      className="inline-flex items-center text-[17px] font-semibold leading-[24px] text-[#050b18] transition-colors before:mr-[8px] before:inline-block before:h-[8px] before:w-[8px] before:bg-[#4e92ce] hover:text-[#009fe3]"
    >
      {children}
    </Link>
  );
}

function TextLink({ item, closeMenu }: { item: MenuLinkItem; closeMenu: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={closeMenu}
      className="block text-[16px] font-normal leading-[22px] text-[#050b18] transition-colors hover:text-[#009fe3]"
    >
      {item.label}
    </Link>
  );
}

function MobileGroup({ title, links, closeMenu }: { title: string; links: MenuLinkItem[]; closeMenu: () => void }) {
  return (
    <div>
      <p className="mb-[12px] text-[15px] font-semibold text-[#009fe3]">{title}</p>
      <div className="space-y-[10px]">
        {links.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu} className="block text-[15px] font-medium text-[#374151] transition-colors hover:text-[#009fe3]">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
