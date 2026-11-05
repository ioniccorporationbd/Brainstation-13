import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Info,
  Newspaper,
  FolderOpen,
  Briefcase,
  Mail,
  BookOpen,
  TrendingUp,
  Handshake,
  ShieldCheck,
  Leaf,
  Megaphone,
  UserPlus,
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

const insideLinks: MenuLinkItem[] = [
  { label: "About Us", href: "/about-us", icon: Info },
  { label: "Blog", href: "/blog", icon: Newspaper },
  { label: "Case Studies", href: "/case-studies", icon: FolderOpen },
  { label: "Career", href: "/career", icon: Briefcase },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Our Resources", href: "/resources", icon: BookOpen },
  { label: "Investor Relations", href: "/investor-relations", icon: TrendingUp },
];

const recognitionLinks: MenuLinkItem[] = [
  { label: "Partners", href: "/partners", icon: Handshake },
  { label: "Enterprise-Grade Security", href: "/enterprise-grade-security", icon: ShieldCheck },
  { label: "Sustainability", href: "/sustainability", icon: Leaf },
  { label: "Media", href: "/media", icon: Megaphone },
  { label: "Join as Partner", href: "/join-as-partner", icon: UserPlus },
];

export default function ResourcesMenu({ closeMenu, mobile = false }: Props) {
  if (mobile) {
    return (
      <div className="space-y-[24px]">
        <MobileGroup title="Inside Magnetic Solution Limited" links={insideLinks} closeMenu={closeMenu} />
        <MobileGroup title="Recognitions" links={recognitionLinks} closeMenu={closeMenu} />
      </div>
    );
  }

  return (
    <section className="w-full bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div className="grid min-h-[398px] w-full grid-cols-[615px_1fr]">
        <aside className="bg-[#f7f8fa] pb-[40px] pl-[60px] pr-[60px] pt-[40px]">
          <div className="block">
            <h2 className="text-[22px] font-semibold leading-[28px] text-[#050b18]">
              About Magnetic Solution Limited
            </h2>
            <p className="mt-[13px] max-w-[450px] text-[14px] font-normal leading-[22px] text-[#5f6674]">
              A global software company since 2006, powering digital transformation.
            </p>
          </div>

          <div className="mt-[40px] border-t border-[#d5d5d5] pt-[22px]">
            <Link href="/about-us" onClick={closeMenu} className="group grid grid-cols-[150px_1fr] gap-[35px]">
              <Image
                src="/images/about-news.svg"
                alt="Magnetic Solution Limited news"
                width={150}
                height={112}
                className="h-[112px] w-[150px] rounded-[8px] object-cover"
              />
              <div>
                <h3 className="max-w-[310px] text-[19px] font-medium leading-[28px] text-[#050b18] transition-colors group-hover:text-[#009fe3]">
                  Magnetic Solution Limited’s CEO promotes Bangladesh’s tech prowess at WEF 2025
                </h3>
                <p className="mt-[13px] inline-flex items-center gap-[14px] text-[15px] font-normal text-[#2d7dbf] transition-colors group-hover:text-[#009fe3]">
                  About Us <span className="text-[22px] leading-none">›</span>
                </p>
              </div>
            </Link>
          </div>
        </aside>

        <div className="grid grid-cols-[360px_360px_1fr] gap-x-[85px] bg-white pb-[40px] pl-[60px] pr-[60px] pt-[40px]">
          <DesktopColumn title="Inside Magnetic Solution Limited" href="/about-us" links={insideLinks} closeMenu={closeMenu} />
          <DesktopColumn title="Recognitions" href="/recognitions" links={recognitionLinks} closeMenu={closeMenu} />
          <div />
        </div>
      </div>
    </section>
  );
}

function DesktopColumn({ title, href, links, closeMenu }: { title: string; href: string; links: MenuLinkItem[]; closeMenu: () => void }) {
  return (
    <div>
      <ColumnTitle href={href} closeMenu={closeMenu}>{title}</ColumnTitle>
      <div className="mt-[23px] space-y-[15px]">
        {links.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
      </div>
    </div>
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
