"use client";

import { useTranslation } from "@/i18n/LanguageProvider";

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
  { label: "Staff Augmentation", href: "/services/staff-augmentation", icon: Users },
  { label: "Managed Service", href: "/services/managed-service", icon: Settings },
  { label: "Digital Transformation", href: "/services/digital-transformation", icon: Rocket },
  { label: "Technology Consulting", href: "/services/technology-consulting", icon: Lightbulb },
  { label: "MVP Development", href: "/services/mvp-development", icon: Zap },
];

const topServices: MenuLinkItem[] = [
  { label: "ML & AI Development", href: "/services/ml-ai-development", icon: Brain },
  { label: "Data Engineering", href: "/services/data-engineering", icon: Database },
  { label: "Data Migration", href: "/services/data-migration", icon: Repeat },
  { label: "Business Intelligence", href: "/services/business-intelligence", icon: BarChart3 },
  { label: "Insurtech", href: "/services/insurtech", icon: ShieldCheck },
  { label: "3D Modeling Services", href: "/services/3d-modeling-services", icon: Boxes },
  { label: "Game Studio", href: "/services/game-studio", icon: Gamepad2 },
  { label: "QA Testing & Automation", href: "/services/qa-testing-and-automation", icon: CheckCircle2 },
];

const serviceColumnTwo: MenuLinkItem[] = [
  { label: "LMS Development", href: "/services/lms-development", icon: GraduationCap },
  { label: "Web & Mobile App Development", href: "/services/web-mobile-app-development", icon: Smartphone },
  { label: "eCommerce Development", href: "/services/ecommerce-development", icon: ShoppingCart },
  { label: "Adobe Experience Manager", href: "/services/adobe-experience-manager", icon: Palette },
  { label: "SharePoint Services", href: "/services/sharepoint-services", icon: Share2 },
  { label: "Blockchain Development", href: "/services/blockchain-development", icon: Link2 },
  { label: "Shopify Services", href: "/services/shopify-services", icon: ShoppingBag },
];

const enterpriseLinks: MenuLinkItem[] = [
  { label: "Field Force Automation", href: "/services/field-force-automation", icon: Truck },
  { label: "Banking Solutions", href: "/services/banking-solutions", icon: Landmark },
  { label: "Cloud Solutions", href: "/services/cloud-solutions", icon: Cloud },
  { label: "Cyber Security", href: "/services/cyber-security", icon: Lock },
  { label: "ERP Development", href: "/services/erp-development", icon: Factory },
  { label: "Data Science & Business Intelligence", href: "/services/data-science-business-intelligence", icon: LineChart },
];

export default function ServicesMenu({ closeMenu, mobile = false }: Props) {
  const { t } = useTranslation();
  if (mobile) {
    return (
      <div className="space-y-5">
        <MobileGroup title={t("Collaboration Model")} links={collaborationLinks} closeMenu={closeMenu} />
        <MobileGroup title={t("Top Services")} links={[...topServices, ...serviceColumnTwo]} closeMenu={closeMenu} />
        <MobileGroup title={t("Enterprise Focused")} links={enterpriseLinks} closeMenu={closeMenu} />
      </div>
    );
  }

  return (
    <section className="w-full bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div className="grid min-h-[489px] w-full grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        <aside className="min-w-0 bg-[#f7f8fa] pb-[40px] pl-[clamp(24px,2.6vw,60px)] pr-[clamp(20px,2.4vw,56px)] pt-[31px]">
          <div className="block">
            <h2 className="text-[22px] font-semibold leading-[28px] text-[#050b18] text-balance">{t("Collaboration Models")}</h2>
            <p className="mt-[12px] text-[14px] font-normal leading-[22px] text-[#5f6674]">{t("AI-accelerated delivery — up to 10X faster.")}</p>
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
              className="inline-flex items-center gap-[13px] text-[17px] font-semibold leading-[24px] text-[#050b18] transition-colors hover:text-primary"
            >{t("View Case Study")}<span className="text-[22px] font-normal leading-none">→</span>
            </Link>
          </div>
        </aside>

        <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-[clamp(16px,2.6vw,60px)] bg-white px-[clamp(18px,3vw,58px)] pb-[40px] pt-[33px]">
          <div className="min-w-0">
            <ColumnTitle href="/services" closeMenu={closeMenu}>{t("Top Services")}</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {topServices.map((item) => (
                <TextLink key={item.href} item={item} closeMenu={closeMenu} />
              ))}
            </div>
            <Link
              href="/services"
              onClick={closeMenu}
              className="mt-[64px] inline-flex items-center gap-[13px] text-[17px] font-semibold leading-[24px] text-[#050b18] transition-colors hover:text-primary"
            >{t("All Services")}<span className="text-[22px] font-normal leading-none">→</span>
            </Link>
          </div>

          <div className="min-w-0 pt-[44px]">
            <div className="space-y-[15px]">
              {serviceColumnTwo.map((item) => (
                <TextLink key={item.href} item={item} closeMenu={closeMenu} />
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <ColumnTitle href="/enterprise-grade-security" closeMenu={closeMenu}>{t("Enterprise Focused")}</ColumnTitle>
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
    <div className="inline-flex items-center text-[17px] font-semibold leading-[24px] text-[#050b18] before:mr-[8px] before:inline-block before:h-[8px] before:w-[8px] before:bg-primary">
      {children}
    </div>
  );
}

function TextLink({ item, closeMenu }: { item: MenuLinkItem; closeMenu: () => void }) {
  const { t } = useTranslation();
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={closeMenu}
      className="group flex items-center gap-[11px] text-[16px] font-normal leading-[22px] text-[#050b18] transition-colors hover:text-primary"
    >
      <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#fdeaea] text-primary transition-colors duration-300 group-hover:bg-[#f8dada] group-hover:text-primary">
        <Icon size={16} strokeWidth={1.9} />
      </span>
      <span className="min-w-0 break-words">{t(item.label)}</span>
    </Link>
  );
}

function MobileGroup({ title, links, closeMenu }: { title: string; links: MenuLinkItem[]; closeMenu: () => void }) {
  const { t } = useTranslation();
  return (
    <div>
      <p className="mb-1.5 px-2 text-[12.5px] font-semibold uppercase tracking-normal text-[#C91F28]">{t(title)}</p>
      <div className="flex flex-col">
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="group flex min-h-[42px] items-center gap-3 rounded-lg px-2 py-2 text-[15px] font-medium text-[#2b2b33] transition-colors duration-200 hover:bg-white hover:text-[#C91F28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C91F28]/40"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fdf2f2] text-[#C91F28] transition-colors duration-200 group-hover:bg-[#fbe3e5]">
                <Icon size={15} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <span className="min-w-0 break-words">{t(item.label)}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}