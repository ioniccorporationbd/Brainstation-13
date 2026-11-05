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
  if (mobile) {
    return (
      <div className="space-y-[24px]">
        <MobileGroup title="Education" links={education} closeMenu={closeMenu} />
        <MobileGroup title="Fintech" links={fintech} closeMenu={closeMenu} />
        <MobileGroup title="Healthcare" links={healthcare} closeMenu={closeMenu} />
        <MobileGroup title="LMS" links={lms} closeMenu={closeMenu} />
        <MobileGroup title="AI Solution" links={aiSolution} closeMenu={closeMenu} />
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

        <div className="grid grid-cols-3 gap-x-[36px] bg-white px-[40px] py-[40px]">
          <div className="min-w-0">
            <ColumnTitle>Education</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {education.map((item) => <TextLink key={item.label} item={item} closeMenu={closeMenu} />)}
            </div>

            <div className="mt-[26px]">
              <ColumnTitle>Fintech</ColumnTitle>
              <div className="mt-[23px] space-y-[15px]">
                {fintech.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
              </div>
            </div>
          </div>

          <div className="min-w-0">
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

          <div className="min-w-0">
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
