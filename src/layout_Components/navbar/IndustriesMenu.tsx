"use client";

import { useTranslation } from "@/i18n/LanguageProvider";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  CreditCard,
  Pill,
  Radio,
  Building2,
  Code,
  ShoppingCart,
  GraduationCap,
  Store,
  Car,
  Rocket,
  HeartHandshake,
  Ship,
  Wallet,
  ArrowRight,
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

const industriesOne: MenuLinkItem[] = [
  { label: "Fintech", href: "/industries/fintech", icon: CreditCard },
  { label: "Pharma", href: "/industries/pharma", icon: Pill },
  { label: "Telecom", href: "/industries/telecom", icon: Radio },
  { label: "Real Estate", href: "/industries/real-estate", icon: Building2 },
  { label: "Software/ITES", href: "/industries/software-ites", icon: Code },
  { label: "e-Commerce", href: "/industries/e-commerce", icon: ShoppingCart },
];

const industriesTwo: MenuLinkItem[] = [
  { label: "Education", href: "/industries/education", icon: GraduationCap },
  { label: "Retail", href: "/industries/retail", icon: Store },
  { label: "Automotive", href: "/industries/automotive", icon: Car },
  { label: "Startup", href: "/industries/startup", icon: Rocket },
  { label: "Non-Profit", href: "/industries/non-profit", icon: HeartHandshake },
];

const caseStudyLinks: MenuLinkItem[] = [
  { label: "Maritime Safety & IoT", href: "/case-study/safety-at-sea", icon: Ship },
  { label: "Digital Wallet Solutions", href: "/case-study/digital-wallet", icon: Wallet },
  { label: "View All Case Studies", href: "/case-studies", icon: ArrowRight },
];

export default function IndustriesMenu({ closeMenu, mobile = false }: Props) {
  const { t } = useTranslation();
  if (mobile) {
    return (
      <div className="space-y-5">
        <MobileGroup title={t("Industries")} links={[...industriesOne, ...industriesTwo, { label: t("All Industries"), href: "/industries", icon: Building2 }]} closeMenu={closeMenu} />
      </div>
    );
  }

  return (
    <section className="w-full bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div className="grid min-h-[466px] w-full grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        <aside className="min-w-0 bg-[#f7f8fa] pb-[40px] pl-[clamp(24px,2.6vw,51px)] pr-[clamp(20px,2.4vw,60px)] pt-[40px]">
          <div className="block">
            <h2 className="text-[22px] font-semibold leading-[28px] text-[#050b18] text-balance">{t("Industries")}</h2>
            <p className="mt-[12px] max-w-[460px] text-[14px] font-normal leading-[22px] text-[#5f6674]">{t("Deep expertise across 130+ industries.")}</p>
          </div>

          <div className="mt-[32px] border-t border-[#d5d5d5] pt-[22px]">
            <ColumnTitle href="/case-studies" closeMenu={closeMenu}>{t("Featured Case Studies")}</ColumnTitle>
            <div className="mt-[18px] space-y-[15px]">
              {caseStudyLinks.map((item) => (
                <TextLink key={item.href} item={item} closeMenu={closeMenu} />
              ))}
            </div>
          </div>
        </aside>

        <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-[clamp(16px,3vw,64px)] bg-white px-[clamp(18px,3vw,56px)] pb-[40px] pt-[40px]">
          <div className="min-w-0">
            <ColumnTitle href="/industries" closeMenu={closeMenu}>{t("Industries")}</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {industriesOne.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
            </div>
            <Link href="/industries" onClick={closeMenu} className="mt-[62px] inline-flex items-center gap-[13px] text-[17px] font-semibold leading-[24px] text-[#050b18] transition-colors hover:text-primary">{t("All Industries")}<span className="text-[22px] font-normal leading-none">→</span>
            </Link>
          </div>

          <div className="min-w-0 pt-[44px]">
            <div className="space-y-[15px]">
              {industriesTwo.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
            </div>
          </div>

          <div className="min-w-0" />
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