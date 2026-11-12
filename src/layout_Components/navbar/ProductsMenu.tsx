"use client";

import { useTranslation } from "@/i18n/LanguageProvider";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  Landmark,
  Wallet,
  Banknote,
  ShieldCheck,
  Globe2,
  Activity,
  BookOpen,
  Monitor,
  Bot,
  MessagesSquare,
  GraduationCap,
  Quote,
  ArrowRight,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";

type Props = {
  closeMenu: () => void;
  mobile?: boolean;
};

type MenuLinkItem = {
  label: string;
  href?: string;
  icon: LucideIcon;
  newTab?: boolean;
  placeholder?: boolean;
  note?: string;
};

const fintech: MenuLinkItem[] = [
  { label: "Magnetic Digital Banking Software", href: "/digital-banking-software", icon: Landmark },
  { label: "Magnetic E-wallet Software", href: "/e-wallet-software", icon: Wallet },
  { label: "Magnetic Digital Lending & Credit", href: "/digital-lending-credit", icon: Banknote },
  { label: "Magnetic Insurance 360", href: "/insurance-360", icon: ShieldCheck },
  { label: "Magnetic Cross Border Payments Solution", href: "/cross-border-payments-solution", icon: Globe2 },
];

const healthcare: MenuLinkItem[] = [
  { label: "Magnetic Omnizia", href: "/omnizia", icon: Activity },
  { label: "Magnetic Time2Publish", href: "/time2publish", icon: BookOpen },
];

const lms: MenuLinkItem[] = [
  { label: "Magnetic Proctoring Pro", href: "/proctoring-pro", icon: Monitor },
];

const aiSolution: MenuLinkItem[] = [
  { label: "Magnetic NeuraFlow - Conversational AI Agent", href: "/neuraflow-conversational-ai-agent", icon: Bot },
];

const education: MenuLinkItem[] = [
  { label: "Shikkha Chat", href: "/shikkha-chat", icon: MessagesSquare },
  { label: "Cadet Website", icon: GraduationCap, placeholder: true, note: "Coming soon" },
];

const testimonialLinks: MenuLinkItem[] = [
  { label: "Anupom Syam — Founder & CEO, Tackle", href: "/testimonials/anupom-syam", icon: Quote },
  { label: "View All Testimonials", href: "/testimonials", icon: ArrowRight },
];

export default function ProductsMenu({ closeMenu, mobile = false }: Props) {
  const { t } = useTranslation();
  if (mobile) {
    return (
      <div className="space-y-[24px]">
        <MobileGroup title={t("Education")} links={education} closeMenu={closeMenu} />
        <MobileGroup title={t("LMS")} links={lms} closeMenu={closeMenu} disabled />
        <MobileGroup title={t("AI Solution")} links={aiSolution} closeMenu={closeMenu} disabled />
        <MobileGroup title={t("Healthcare")} links={healthcare} closeMenu={closeMenu} disabled />
        <MobileGroup title={t("Fintech")} links={fintech} closeMenu={closeMenu} disabled />
      </div>
    );
  }

  return (
    <section className="w-full bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div className="grid min-h-[466px] w-full grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        <aside className="min-w-0 bg-[#f7f8fa] pb-[40px] pl-[clamp(24px,2.6vw,51px)] pr-[clamp(20px,2.4vw,60px)] pt-[40px]">
          <div className="block">
            <h2 className="text-[22px] font-semibold leading-[28px] text-[#050b18]">{t("Products")}</h2>
            <p className="mt-[13px] max-w-[500px] text-[14px] font-normal leading-[22px] text-[#5f6674]">{t("Purpose-built products for fintech, healthcare, learning and education — engineered to scale.")}</p>
          </div>

          <div className="mt-[39px] border-t border-[#d5d5d5] pt-[22px]">
            <ColumnTitle>{t("Testimonials")}</ColumnTitle>

            <p className="mt-[14px] flex items-center gap-[10px] text-[13px] font-medium text-[#5f6674]">
              <span className="text-[15px] leading-none text-[#f04438]">★★★★★</span>{t("Rated 5.0 on Clutch")}</p>

            <div className="mt-[18px] space-y-[15px]">
              {testimonialLinks.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
            </div>
          </div>
        </aside>

        <div className="grid grid-cols-2 gap-x-[48px] bg-white px-[clamp(18px,3vw,56px)] pb-[40px] pt-[40px]">
          {/* Column 1 — Education (active) + LMS, AI Solution (disabled) */}
          <div className="min-w-0">
            <ColumnTitle>{t("Education")}</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {education.map((item) => <TextLink key={t(item.label)} item={item} closeMenu={closeMenu} />)}
            </div>

            <div className="mt-[26px]">
              <ColumnTitle disabled>{t("LMS")}</ColumnTitle>
              <div className="mt-[23px] space-y-[15px]">
                {lms.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} disabled />)}
              </div>
            </div>

            <div className="mt-[26px]">
              <ColumnTitle disabled>{t("AI Solution")}</ColumnTitle>
              <div className="mt-[23px] space-y-[15px]">
                {aiSolution.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} disabled />)}
              </div>
            </div>
          </div>

          {/* Column 2 — Healthcare, Fintech (disabled) */}
          <div className="min-w-0">
            <ColumnTitle disabled>{t("Healthcare")}</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {healthcare.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} disabled />)}
            </div>

            <div className="mt-[26px]">
              <ColumnTitle disabled>{t("Fintech")}</ColumnTitle>
              <div className="mt-[23px] space-y-[15px]">
                {fintech.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} disabled />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ColumnTitle({ children, disabled = false }: { children: ReactNode; disabled?: boolean }) {
  return (
    <div
      className={`inline-flex items-center text-[17px] font-semibold leading-[24px] before:mr-[8px] before:inline-block before:h-[8px] before:w-[8px] ${
        disabled
          ? "text-[#b6bdc8] before:bg-[#d3d8e0]"
          : "text-[#050b18] before:bg-primary"
      }`}
    >
      {children}
    </div>
  );
}

function TextLink({ item, closeMenu, disabled = false }: { item: MenuLinkItem; closeMenu: () => void; disabled?: boolean }) {
  const { t } = useTranslation();
  const Icon = item.icon;
  const isPlaceholder = item.placeholder || !item.href;

  // Disabled link: identical design/icon/text/spacing, but inert (no navigation).
  if (disabled) {
    return (
      <a
        href="#"
        aria-disabled="true"
        onClick={(e) => { e.preventDefault(); }}
        className="flex cursor-not-allowed items-center gap-[11px] text-[16px] font-normal leading-[22px] text-[#050b18] opacity-60"
      >
        <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#fdeaea] text-primary">
          <Icon size={16} strokeWidth={1.9} />
        </span>
        <span className="flex items-center gap-[6px]">{t(item.label)}</span>
      </a>
    );
  }

  if (isPlaceholder) {
    return (
      <div className="flex cursor-default items-center gap-[11px] text-[16px] font-normal leading-[22px] text-[#9aa3af]">
        <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#eef1f5] text-[#a7b0bc]">
          <Icon size={16} strokeWidth={1.9} />
        </span>
        <span className="flex items-center gap-[8px]">
          {t(item.label)}
          {item.note ? <span className="rounded-full bg-[#eef1f5] px-[8px] py-[1px] text-[11px] font-semibold uppercase tracking-[0.04em] text-[#8a94a3]">{t(item.note)}</span> : null}
        </span>
      </div>
    );
  }

  const external = item.newTab;
  return (
    <Link
      href={item.href as string}
      onClick={closeMenu}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-[11px] text-[16px] font-normal leading-[22px] text-[#050b18] transition-colors hover:text-primary"
    >
      <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#fdeaea] text-primary transition-colors duration-300 group-hover:bg-[#f8dada] group-hover:text-primary">
        <Icon size={16} strokeWidth={1.9} />
      </span>
      <span className="flex items-center gap-[6px]">
        {t(item.label)}
        {external ? <ExternalLink size={13} strokeWidth={2.2} className="text-[#9aa3af] transition-colors group-hover:text-primary" /> : null}
      </span>
    </Link>
  );
}

function MobileGroup({ title, links, closeMenu, disabled = false }: { title: string; links: MenuLinkItem[]; closeMenu: () => void; disabled?: boolean }) {
  const { t } = useTranslation();
  return (
    <div>
      <p className={`mb-[12px] text-[15px] font-semibold ${disabled ? "text-[#b6bdc8]" : "text-primary"}`}>{title}</p>
      <div className="space-y-[10px]">
        {links.map((item) => {
          const Icon = item.icon;
          const isPlaceholder = item.placeholder || !item.href;
          const external = item.newTab;
          const inner = (
            <>
              <span className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[6px] ${isPlaceholder ? "bg-[#eef1f5] text-[#a7b0bc]" : "bg-[#fdeaea] text-primary"}`}>
                <Icon size={14} strokeWidth={1.9} />
              </span>
              <span className="flex items-center gap-[6px]">
                {t(item.label)}
                {external ? <ExternalLink size={12} strokeWidth={2.2} className="text-[#9aa3af]" /> : null}
                {item.note ? <span className="rounded-full bg-[#eef1f5] px-[7px] py-[1px] text-[10px] font-semibold uppercase tracking-[0.04em] text-[#8a94a3]">{t(item.note)}</span> : null}
              </span>
            </>
          );

          if (disabled) {
            return (
              <a
                key={t(item.label)}
                href="#"
                aria-disabled="true"
                onClick={(e) => { e.preventDefault(); }}
                className="flex cursor-not-allowed items-center gap-[10px] text-[15px] font-medium text-[#374151] opacity-60"
              >
                {inner}
              </a>
            );
          }

          if (isPlaceholder) {
            return (
              <div key={t(item.label)} className="flex cursor-default items-center gap-[10px] text-[15px] font-medium text-[#9aa3af]">
                {inner}
              </div>
            );
          }

          return (
            <Link
              key={t(item.label)}
              href={item.href as string}
              onClick={closeMenu}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-[10px] text-[15px] font-medium text-[#374151] transition-colors hover:text-primary"
            >
              {inner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
