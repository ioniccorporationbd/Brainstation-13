import Link from "next/link";
import type { ReactNode } from "react";
import {
  MessagesSquare,
  GraduationCap,
  Quote,
  ArrowRight,
  ExternalLink,
  Lock,
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

const education: MenuLinkItem[] = [
  { label: "Shikkha Chat", href: "/shikkha-chat", icon: MessagesSquare },
  { label: "Cadet Website", icon: GraduationCap, placeholder: true, note: "Coming soon" },
];

const testimonialLinks: MenuLinkItem[] = [
  { label: "Anupom Syam — Founder & CEO, Tackle", href: "/testimonials/anupom-syam", icon: Quote },
  { label: "View All Testimonials", href: "/testimonials", icon: ArrowRight },
];

export default function ProductsMenu({ closeMenu, mobile = false }: Props) {
  if (mobile) {
    return (
      <div className="space-y-[24px]">
        <MobileGroup title="Education" links={education} closeMenu={closeMenu} />
        <div className="space-y-[14px]">
          <DisabledMobileCategory title="LMS" />
          <DisabledMobileCategory title="AI Solution" />
          <DisabledMobileCategory title="Healthcare" />
          <DisabledMobileCategory title="Fintech" />
        </div>
      </div>
    );
  }

  return (
    <section className="w-full bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div className="mx-auto grid min-h-[395px] w-full max-w-[1440px] grid-cols-[340px_1fr]">
        <aside className="bg-[#f7f8fa] px-[40px] py-[40px]">
          <div className="block">
            <h2 className="text-[22px] font-semibold leading-[28px] text-[#050b18]">
              Products
            </h2>
            <p className="mt-[13px] max-w-[500px] text-[14px] font-normal leading-[22px] text-[#5f6674]">
              Purpose-built products for fintech, healthcare, learning and education — engineered to scale.
            </p>
          </div>

          <div className="mt-[39px] border-t border-[#d5d5d5] pt-[22px]">
            <ColumnTitle>Testimonials</ColumnTitle>

            <p className="mt-[14px] flex items-center gap-[10px] text-[13px] font-medium text-[#5f6674]">
              <span className="text-[15px] leading-none text-[#f04438]">★★★★★</span>
              Rated 5.0 on Clutch
            </p>

            <div className="mt-[18px] space-y-[15px]">
              {testimonialLinks.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
            </div>
          </div>
        </aside>

        <div className="grid grid-cols-2 gap-x-[48px] bg-white px-[40px] py-[40px]">
          {/* Column 1 — Education (active) + LMS, AI Solution (disabled) */}
          <div className="min-w-0">
            <ColumnTitle>Education</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {education.map((item) => <TextLink key={item.label} item={item} closeMenu={closeMenu} />)}
            </div>

            <div className="mt-[34px]">
              <DisabledCategory title="LMS" />
            </div>
            <div className="mt-[22px]">
              <DisabledCategory title="AI Solution" />
            </div>
          </div>

          {/* Column 2 — Healthcare, Fintech (disabled) */}
          <div className="min-w-0">
            <DisabledCategory title="Healthcare" />
            <div className="mt-[22px]">
              <DisabledCategory title="Fintech" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ColumnTitle({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center text-[17px] font-semibold leading-[24px] text-[#050b18] before:mr-[8px] before:inline-block before:h-[8px] before:w-[8px] before:bg-[#4e92ce]">
      {children}
    </div>
  );
}

// Visible but disabled category heading — non-clickable, clearly greyed out.
function DisabledCategory({ title }: { title: string }) {
  return (
    <div
      aria-disabled="true"
      className="inline-flex cursor-not-allowed select-none items-center text-[17px] font-semibold leading-[24px] text-[#b6bdc8]"
    >
      <span className="mr-[8px] inline-block h-[8px] w-[8px] bg-[#d3d8e0]" />
      {title}
      <Lock size={13} strokeWidth={2.2} className="ml-[8px] text-[#c4cbd5]" />
    </div>
  );
}

function DisabledMobileCategory({ title }: { title: string }) {
  return (
    <div aria-disabled="true" className="flex cursor-not-allowed select-none items-center gap-[8px]">
      <p className="text-[15px] font-semibold text-[#b6bdc8]">{title}</p>
      <Lock size={12} strokeWidth={2.2} className="text-[#c4cbd5]" />
    </div>
  );
}

function TextLink({ item, closeMenu }: { item: MenuLinkItem; closeMenu: () => void }) {
  const Icon = item.icon;
  const isPlaceholder = item.placeholder || !item.href;

  if (isPlaceholder) {
    return (
      <div className="flex cursor-default items-center gap-[11px] text-[16px] font-normal leading-[22px] text-[#9aa3af]">
        <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#eef1f5] text-[#a7b0bc]">
          <Icon size={16} strokeWidth={1.9} />
        </span>
        <span className="flex items-center gap-[8px]">
          {item.label}
          {item.note ? <span className="rounded-full bg-[#eef1f5] px-[8px] py-[1px] text-[11px] font-semibold uppercase tracking-[0.04em] text-[#8a94a3]">{item.note}</span> : null}
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
      className="group flex items-center gap-[11px] text-[16px] font-normal leading-[22px] text-[#050b18] transition-colors hover:text-[#009fe3]"
    >
      <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#eef6fc] text-[#3f93cf] transition-colors duration-300 group-hover:bg-[#e3f0fb] group-hover:text-[#2d8fca]">
        <Icon size={16} strokeWidth={1.9} />
      </span>
      <span className="flex items-center gap-[6px]">
        {item.label}
        {external ? <ExternalLink size={13} strokeWidth={2.2} className="text-[#9aa3af] transition-colors group-hover:text-[#009fe3]" /> : null}
      </span>
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
          const isPlaceholder = item.placeholder || !item.href;
          const external = item.newTab;
          const inner = (
            <>
              <span className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[6px] ${isPlaceholder ? "bg-[#eef1f5] text-[#a7b0bc]" : "bg-[#eef6fc] text-[#3f93cf]"}`}>
                <Icon size={14} strokeWidth={1.9} />
              </span>
              <span className="flex items-center gap-[6px]">
                {item.label}
                {external ? <ExternalLink size={12} strokeWidth={2.2} className="text-[#9aa3af]" /> : null}
                {item.note ? <span className="rounded-full bg-[#eef1f5] px-[7px] py-[1px] text-[10px] font-semibold uppercase tracking-[0.04em] text-[#8a94a3]">{item.note}</span> : null}
              </span>
            </>
          );

          if (isPlaceholder) {
            return (
              <div key={item.label} className="flex cursor-default items-center gap-[10px] text-[15px] font-medium text-[#9aa3af]">
                {inner}
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href as string}
              onClick={closeMenu}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-[10px] text-[15px] font-medium text-[#374151] transition-colors hover:text-[#009fe3]"
            >
              {inner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
