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
  { label: "Fintech", href: "/fintech", icon: CreditCard },
  { label: "Pharma", href: "/pharma", icon: Pill },
  { label: "Telecom", href: "/telecom", icon: Radio },
  { label: "Real Estate", href: "/real-estate", icon: Building2 },
  { label: "Software/ITES", href: "/software-ites", icon: Code },
  { label: "e-Commerce", href: "/e-commerce", icon: ShoppingCart },
];

const industriesTwo: MenuLinkItem[] = [
  { label: "Education", href: "/education", icon: GraduationCap },
  { label: "Retail", href: "/retail", icon: Store },
  { label: "Automotive", href: "/automotive", icon: Car },
  { label: "Startup", href: "/startup", icon: Rocket },
  { label: "Non-Profit", href: "/non-profit", icon: HeartHandshake },
];

const caseStudyLinks: MenuLinkItem[] = [
  { label: "Maritime Safety & IoT", href: "/case-study/safety-at-sea", icon: Ship },
  { label: "Digital Wallet Solutions", href: "/case-study/digital-wallet", icon: Wallet },
  { label: "View All Case Studies", href: "/case-studies", icon: ArrowRight },
];

export default function IndustriesMenu({ closeMenu, mobile = false }: Props) {
  if (mobile) {
    return (
      <div className="space-y-[24px]">
        <MobileGroup title="Industries" links={[...industriesOne, ...industriesTwo, { label: "All Industries", href: "/industries", icon: Building2 }]} closeMenu={closeMenu} />
      </div>
    );
  }

  return (
    <section className="w-full bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div className="grid min-h-[466px] w-full grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        <aside className="min-w-0 bg-[#f7f8fa] pb-[40px] pl-[clamp(24px,2.6vw,51px)] pr-[clamp(20px,2.4vw,60px)] pt-[40px]">
          <div className="block">
            <h2 className="text-[22px] font-semibold leading-[28px] text-[#050b18]">
              Industries
            </h2>
            <p className="mt-[12px] max-w-[460px] text-[14px] font-normal leading-[22px] text-[#5f6674]">
              Deep expertise across 130+ industries.
            </p>
          </div>

          <div className="mt-[32px] border-t border-[#d5d5d5] pt-[22px]">
            <ColumnTitle href="/case-studies" closeMenu={closeMenu}>Featured Case Studies</ColumnTitle>
            <div className="mt-[18px] space-y-[15px]">
              {caseStudyLinks.map((item) => (
                <TextLink key={item.href} item={item} closeMenu={closeMenu} />
              ))}
            </div>
          </div>
        </aside>

        <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-[clamp(16px,3vw,64px)] bg-white px-[clamp(18px,3vw,56px)] pb-[40px] pt-[40px]">
          <div className="min-w-0">
            <ColumnTitle href="/industries" closeMenu={closeMenu}>Industries</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {industriesOne.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
            </div>
            <Link href="/industries" onClick={closeMenu} className="mt-[62px] inline-flex items-center gap-[13px] text-[17px] font-semibold leading-[24px] text-[#050b18] transition-colors hover:text-primary">
              All Industries <span className="text-[22px] font-normal leading-none">→</span>
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
      <span className="min-w-0 break-words">{item.label}</span>
    </Link>
  );
}

function MobileGroup({ title, links, closeMenu }: { title: string; links: MenuLinkItem[]; closeMenu: () => void }) {
  return (
    <div>
      <p className="mb-[12px] text-[15px] font-semibold text-primary">{title}</p>
      <div className="space-y-[10px]">
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} onClick={closeMenu} className="flex items-center gap-[10px] text-[15px] font-medium text-[#374151] transition-colors hover:text-primary">
              <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[6px] bg-[#fdeaea] text-primary">
                <Icon size={14} strokeWidth={1.9} />
              </span>
              <span className="min-w-0 break-words">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
