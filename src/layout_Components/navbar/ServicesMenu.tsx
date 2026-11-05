import Link from "next/link";
import type { ReactNode } from "react";
import {
  Users,
  Settings,
  Rocket,
  Lightbulb,
  Zap,
  Brain,
  Database,
  Repeat,
  BarChart3,
  ShieldCheck,
  Boxes,
  Gamepad2,
  CheckCircle2,
  GraduationCap,
  Smartphone,
  ShoppingCart,
  Palette,
  Share2,
  Link2,
  ShoppingBag,
  Truck,
  Landmark,
  Cloud,
  Lock,
  Factory,
  LineChart,
  type LucideIcon,
} from "lucide-react";

type Props = {
  closeMenu: () => void;
  mobile?: boolean;
};

type MenuLinkItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const collaborationLinks: MenuLinkItem[] = [
  { label: "Staff Augmentation", href: "/staff-augmentation", icon: Users },
  { label: "Managed Service", href: "/managed-service", icon: Settings },
  { label: "Digital Transformation", href: "/digital-transformation", icon: Rocket },
  { label: "Technology Consulting", href: "/technology-consulting", icon: Lightbulb },
  { label: "MVP Development", href: "/mvp-development", icon: Zap },
];

const topServices: MenuLinkItem[] = [
  { label: "ML & AI Development", href: "/ml-ai-development", icon: Brain },
  { label: "Data Engineering", href: "/data-engineering", icon: Database },
  { label: "Data Migration", href: "/data-migration", icon: Repeat },
  { label: "Business Intelligence", href: "/business-intelligence", icon: BarChart3 },
  { label: "Insurtech", href: "/insurtech", icon: ShieldCheck },
  { label: "3D Modeling Services", href: "/3d-modeling-services", icon: Boxes },
  { label: "Game Studio", href: "/game-studio", icon: Gamepad2 },
  { label: "QA Testing & Automation", href: "/qa-testing-and-automation", icon: CheckCircle2 },
];

const serviceColumnTwo: MenuLinkItem[] = [
  { label: "LMS Development", href: "/lms-development", icon: GraduationCap },
  { label: "Web & Mobile App Development", href: "/web-mobile-app-development", icon: Smartphone },
  { label: "eCommerce Development", href: "/ecommerce-development", icon: ShoppingCart },
  { label: "Adobe Experience Manager", href: "/adobe-experience-manager", icon: Palette },
  { label: "SharePoint Services", href: "/sharepoint-services", icon: Share2 },
  { label: "Blockchain Development", href: "/blockchain-development", icon: Link2 },
  { label: "Shopify Services", href: "/shopify-services", icon: ShoppingBag },
];

const enterpriseLinks: MenuLinkItem[] = [
  { label: "Field Force Automation", href: "/field-force-automation", icon: Truck },
  { label: "Banking Solutions", href: "/banking-solutions", icon: Landmark },
  { label: "Cloud Solutions", href: "/cloud-solutions", icon: Cloud },
  { label: "Cyber Security", href: "/cyber-security", icon: Lock },
  { label: "ERP Development", href: "/erp-development", icon: Factory },
  { label: "Data Science & Business Intelligence", href: "/data-science-business-intelligence", icon: LineChart },
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
          <div className="block">
            <h2 className="text-[22px] font-semibold leading-[28px] text-[#050b18]">
              Collaboration Models
            </h2>
            <p className="mt-[12px] text-[14px] font-normal leading-[22px] text-[#5f6674]">
              AI-accelerated delivery — up to 10X faster.
            </p>
          </div>

          <div className="mt-[19px] space-y-[15px]">
            {collaborationLinks.map((item) => (
              <TextLink key={item.href} item={item} closeMenu={closeMenu} />
            ))}
          </div>

          <div className="mt-[39px] border-t border-[#d5d5d5] pt-[20px]">
            <Link
              href="/case-study"
              onClick={closeMenu}
              className="inline-flex items-center gap-[13px] text-[17px] font-semibold leading-[24px] text-[#050b18] transition-colors hover:text-[#009fe3]"
            >
              View Case Study <span className="text-[22px] font-normal leading-none">→</span>
            </Link>
          </div>
        </aside>

        <div className="grid grid-cols-[330px_365px_1fr] gap-x-[63px] bg-white pb-[40px] pl-[60px] pr-[58px] pt-[33px]">
          <div>
            <ColumnTitle href="/services" closeMenu={closeMenu}>Top Services</ColumnTitle>
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
            <ColumnTitle href="/enterprise-grade-security" closeMenu={closeMenu}>Enterprise Focused</ColumnTitle>
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

function ColumnTitle({ children }: { href: string; closeMenu: () => void; children: ReactNode }) {
  return (
    <div className="inline-flex items-center text-[17px] font-semibold leading-[24px] text-[#050b18] before:mr-[8px] before:inline-block before:h-[8px] before:w-[8px] before:bg-[#4e92ce]">
      {children}
    </div>
  );
}

function TextLink({ item, closeMenu }: { item: MenuLinkItem; closeMenu: () => void }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={closeMenu}
      className="group flex items-center gap-[11px] text-[16px] font-normal leading-[22px] text-[#050b18] transition-colors hover:text-[#009fe3]"
    >
      <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#eef6fc] text-[#3f93cf] transition-colors duration-300 group-hover:bg-[#e3f0fb] group-hover:text-[#2d8fca]">
        <Icon size={16} strokeWidth={1.9} />
      </span>
      <span>{item.label}</span>
    </Link>
  );
}

function MobileGroup({ title, links, closeMenu }: { title: string; links: MenuLinkItem[]; closeMenu: () => void }) {
  return (
    <div>
      <p className="mb-[12px] text-[15px] font-semibold text-[#009fe3]">{title}</p>
      <div className="space-y-[10px]">
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} onClick={closeMenu} className="flex items-center gap-[10px] text-[15px] font-medium text-[#374151] transition-colors hover:text-[#009fe3]">
              <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[6px] bg-[#eef6fc] text-[#3f93cf]">
                <Icon size={14} strokeWidth={1.9} />
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
