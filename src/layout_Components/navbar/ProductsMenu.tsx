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

const fintech: MenuLinkItem[] = [
  { label: "Digital Banking Software", href: "/digital-banking-software", icon: Landmark },
  { label: "E-wallet Software", href: "/e-wallet-software", icon: Wallet },
  { label: "Digital Lending & Credit", href: "/digital-lending-credit", icon: Banknote },
  { label: "Insurance 360", href: "/insurance-360", icon: ShieldCheck },
  { label: "Cross Border Payments Solution", href: "/cross-border-payments-solution", icon: Globe2 },
];

const healthcare: MenuLinkItem[] = [
  { label: "Omnizia", href: "/omnizia", icon: Activity },
  { label: "Time2Publish", href: "/time2publish", icon: BookOpen },
];

const lms: MenuLinkItem[] = [
  { label: "Proctoring Pro", href: "/proctoring-pro", icon: Monitor },
];

const aiSolution: MenuLinkItem[] = [
  { label: "NeuraFlow - Conversational AI Agent", href: "/neuraflow-conversational-ai-agent", icon: Bot },
];

export default function ProductsMenu({ closeMenu, mobile = false }: Props) {
  if (mobile) {
    return (
      <div className="space-y-[24px]">
        <MobileGroup title="Fintech" links={fintech} closeMenu={closeMenu} />
        <MobileGroup title="Healthcare" links={healthcare} closeMenu={closeMenu} />
        <MobileGroup title="LMS" links={lms} closeMenu={closeMenu} />
        <MobileGroup title="AI Solution" links={aiSolution} closeMenu={closeMenu} />
      </div>
    );
  }

  return (
    <section className="w-full bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div className="grid min-h-[395px] w-full grid-cols-[667px_1fr]">
        <aside className="bg-[#f7f8fa] pb-[40px] pl-[56px] pr-[60px] pt-[39px]">
          <div className="block">
            <h2 className="text-[22px] font-semibold leading-[28px] text-[#050b18]">
              Products
            </h2>
            <p className="mt-[13px] max-w-[500px] text-[14px] font-normal leading-[22px] text-[#5f6674]">
              Purpose-built products for fintech, healthcare and learning — engineered to scale.
            </p>
          </div>

          <div className="mt-[39px] border-t border-[#d5d5d5] pt-[22px]">
            <div className="mb-[22px] flex items-center justify-between">
              <span className="text-[18px] font-semibold leading-[24px] text-[#050b18]">
                Testimonials
              </span>
              <Link href="/testimonials" onClick={closeMenu} className="inline-flex items-center gap-[10px] text-[15px] font-normal text-[#2d7dbf] transition-colors hover:text-[#009fe3]">
                View All <span className="text-[22px] leading-none">›</span>
              </Link>
            </div>

            <Link href="/testimonials/anupom-syam" onClick={closeMenu} className="group block max-w-[570px]">
              <div className="mb-[17px] flex items-center gap-[12px]">
                <div>
                  <p className="text-[7px] font-semibold uppercase leading-none text-[#6b7280]">Reviewed on</p>
                  <p className="text-[22px] font-bold leading-[24px] text-[#111827]">Clutch</p>
                </div>
                <p className="text-[20px] leading-none text-[#f04438]">★★★★★</p>
              </div>
              <p className="text-[15px] font-normal leading-[22px] text-[#050b18] transition-colors group-hover:text-[#009fe3]">
                Magnetic Solution Limited’s resource augmentation transformed our development velocity. Their AI-powered approach delivered our fintech platform 8X faster than expected.
              </p>
              <p className="mt-[24px] text-[15px] font-normal leading-[22px] text-[#050b18] transition-colors group-hover:text-[#009fe3]">Anupom Syam</p>
              <p className="mt-[4px] text-[14px] font-normal leading-[20px] text-[#5f6674] transition-colors group-hover:text-[#009fe3]">Founder & CEO at Tackle</p>
            </Link>
          </div>
        </aside>

        <div className="grid grid-cols-[322px_322px_1fr] gap-x-[80px] bg-white pb-[40px] pl-[60px] pr-[60px] pt-[40px]">
          <div>
            <ColumnTitle>Fintech</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {fintech.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
            </div>
          </div>

          <div>
            <ColumnTitle>Healthcare</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {healthcare.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
            </div>

            <div className="mt-[26px]">
              <ColumnTitle>LMS</ColumnTitle>
              <div className="mt-[23px] space-y-[15px]">
                {lms.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
              </div>
            </div>
          </div>

          <div>
            <ColumnTitle>AI Solution</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {aiSolution.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
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
