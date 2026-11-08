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

/* Clean, meaningful company links (existing routes only). */
const companyLinks: MenuLinkItem[] = [
  { label: "About Us", href: "/about-us", icon: Info },
  { label: "Partners", href: "/partners", icon: Handshake },
  { label: "Investor Relations", href: "/investor-relations", icon: TrendingUp },
  { label: "Media", href: "/media", icon: Megaphone },
  { label: "Sustainability", href: "/sustainability", icon: Leaf },
  { label: "Enterprise-Grade Security", href: "/enterprise-grade-security", icon: ShieldCheck },
];

const resourceLinks: MenuLinkItem[] = [
  { label: "Blog", href: "/blog", icon: Newspaper },
  { label: "Case Studies", href: "/case-studies", icon: FolderOpen },
  { label: "Our Resources", href: "/resources", icon: BookOpen },
];

const connectLinks: MenuLinkItem[] = [
  { label: "Career", href: "/career", icon: Briefcase },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Join as Partner", href: "/join-as-partner", icon: UserPlus },
];

export default function ResourcesMenu({ closeMenu, mobile = false }: Props) {
  if (mobile) {
    return (
      <div className="space-y-[24px]">
        <MobileGroup title="Company" links={companyLinks} closeMenu={closeMenu} />
        <MobileGroup title="Resources" links={resourceLinks} closeMenu={closeMenu} />
        <MobileGroup title="Careers & Contact" links={connectLinks} closeMenu={closeMenu} />
      </div>
    );
  }

  return (
    <section className="w-full overflow-hidden bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div className="grid min-h-[466px] w-full grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        <aside className="min-w-0 bg-[#f7f8fa] pb-[40px] pl-[clamp(24px,2.6vw,51px)] pr-[clamp(20px,2.4vw,60px)] pt-[40px]">
          <div className="block">
            <h2 className="text-[22px] font-semibold leading-[28px] text-[#050b18]">
              About Magnetic Solution Limited
            </h2>
            <p className="mt-[13px] max-w-[260px] text-[14px] font-normal leading-[22px] text-[#5f6674]">
              A global software company since 2006, powering digital transformation.
            </p>
          </div>

          <div className="mt-[32px] border-t border-[#d5d5d5] pt-[22px]">
            <ColumnTitle>Company</ColumnTitle>
            <div className="mt-[18px] space-y-[15px]">
              {companyLinks.map((item) => (
                <TextLink key={item.href} item={item} closeMenu={closeMenu} />
              ))}
            </div>
          </div>
        </aside>

        <div className="grid grid-cols-2 gap-x-[60px] bg-white px-[clamp(18px,3vw,56px)] pb-[40px] pt-[40px]">
          <div className="min-w-0">
            <ColumnTitle>Resources</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {resourceLinks.map((item) => (
                <TextLink key={item.href} item={item} closeMenu={closeMenu} />
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <ColumnTitle>Careers &amp; Contact</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {connectLinks.map((item) => (
                <TextLink key={item.href} item={item} closeMenu={closeMenu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ColumnTitle({ children }: { children: ReactNode }) {
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
      <span>{item.label}</span>
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
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
