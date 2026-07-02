import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  closeMenu: () => void;
  mobile?: boolean;
};

type MenuLinkItem = {
  label: string;
  href: string;
};

const insideLinks: MenuLinkItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Career", href: "#" },
  { label: "Contact", href: "/contact" },
  { label: "Our Resources", href: "/resources" },
  { label: "Investor Relations", href: "#" },
];

const recognitionLinks: MenuLinkItem[] = [
  { label: "Partners", href: "/partners" },
  { label: "Enterprise-Grade Security", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "Media", href: "/media" },
  { label: "Join as Partner", href: "/join-as-partner" },
];

export default function ResourcesMenu({ closeMenu, mobile = false }: Props) {
  if (mobile) {
    return (
      <div className="space-y-[24px]">
        <MobileGroup title="Inside Brain Station 23" links={insideLinks} closeMenu={closeMenu} />
        <MobileGroup title="Recognitions" links={recognitionLinks} closeMenu={closeMenu} />
      </div>
    );
  }

  return (
    <section className="w-full bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div className="grid min-h-[398px] w-full grid-cols-[615px_1fr]">
        <aside className="bg-[#f7f8fa] pb-[40px] pl-[60px] pr-[60px] pt-[40px]">
          <Link href="/about-us" onClick={closeMenu} className="group block">
            <h2 className="text-[22px] font-semibold leading-[28px] text-[#050b18] transition-colors group-hover:text-[#009fe3]">
              About Brain Station 23
            </h2>
            <p className="mt-[13px] max-w-[450px] text-[14px] font-normal leading-[22px] text-[#5f6674] transition-colors group-hover:text-[#009fe3]">
              Founded in 2006, we are a global software company powering digital transformation across industries.
            </p>
          </Link>

          <div className="mt-[40px] border-t border-[#d5d5d5] pt-[22px]">
            <Link href="/about-us" onClick={closeMenu} className="group grid grid-cols-[150px_1fr] gap-[35px]">
              <Image
                src="/images/about-news.svg"
                alt="Brain Station 23 news"
                width={150}
                height={112}
                className="h-[112px] w-[150px] rounded-[8px] object-cover"
              />
              <div>
                <h3 className="max-w-[310px] text-[19px] font-medium leading-[28px] text-[#050b18] transition-colors group-hover:text-[#009fe3]">
                  Brain Station 23’s CEO promotes Bangladesh’s tech prowess at WEF 2025
                </h3>
                <p className="mt-[13px] inline-flex items-center gap-[14px] text-[15px] font-normal text-[#2d7dbf] transition-colors group-hover:text-[#009fe3]">
                  About Us <span className="text-[22px] leading-none">›</span>
                </p>
              </div>
            </Link>
          </div>
        </aside>

        <div className="grid grid-cols-[360px_360px_1fr] gap-x-[85px] bg-white pb-[40px] pl-[60px] pr-[60px] pt-[40px]">
          <DesktopColumn title="Inside Brain Station 23" href="/about-us" links={insideLinks} closeMenu={closeMenu} />
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

function ColumnTitle({ href, closeMenu, children }: { href: string; closeMenu: () => void; children: ReactNode }) {
  return (
    <Link href={href} onClick={closeMenu} className="inline-flex items-center text-[17px] font-semibold leading-[24px] text-[#050b18] transition-colors before:mr-[8px] before:inline-block before:h-[8px] before:w-[8px] before:bg-[#4e92ce] hover:text-[#009fe3]">
      {children}
    </Link>
  );
}

function TextLink({ item, closeMenu }: { item: MenuLinkItem; closeMenu: () => void }) {
  return (
    <Link href={item.href} onClick={closeMenu} className="block text-[16px] font-normal leading-[22px] text-[#050b18] transition-colors hover:text-[#009fe3]">
      {item.label}
    </Link>
  );
}

function MobileGroup({ title, links, closeMenu }: { title: string; links: MenuLinkItem[]; closeMenu: () => void }) {
  return (
    <div>
      <p className="mb-[12px] text-[15px] font-semibold text-[#009fe3]">{title}</p>
      <div className="space-y-[10px]">
        {links.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu} className="block text-[15px] font-medium text-[#374151] transition-colors hover:text-[#009fe3]">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
