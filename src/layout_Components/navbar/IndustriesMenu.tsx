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

const industriesOne: MenuLinkItem[] = [
  { label: "Fintech", href: "/fintech" },
  { label: "Pharma", href: "/pharma" },
  { label: "Telecom", href: "/telecom" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Software/ITES", href: "/software-ites" },
  { label: "e-Commerce", href: "/e-commerce" },
];

const industriesTwo: MenuLinkItem[] = [
  { label: "Education", href: "/education" },
  { label: "Retail", href: "/retail" },
  { label: "Automotive", href: "/automotive" },
  { label: "Startup", href: "/startup" },
  { label: "Non-Profit", href: "/non-profit" },
];

export default function IndustriesMenu({ closeMenu, mobile = false }: Props) {
  if (mobile) {
    return (
      <div className="space-y-[24px]">
        <MobileGroup title="Industries" links={[...industriesOne, ...industriesTwo, { label: "All Industries", href: "/industries" }]} closeMenu={closeMenu} />
      </div>
    );
  }

  return (
    <section className="w-full bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div className="grid min-h-[466px] w-full grid-cols-[607px_1fr]">
        <aside className="bg-[#f7f8fa] pb-[40px] pl-[51px] pr-[60px] pt-[40px]">
          <Link href="/industries" onClick={closeMenu} className="group block">
            <h2 className="text-[22px] font-semibold leading-[28px] text-[#050b18] transition-colors group-hover:text-[#009fe3]">
              Industries
            </h2>
            <p className="mt-[12px] max-w-[460px] text-[14px] font-normal leading-[22px] text-[#5f6674] transition-colors group-hover:text-[#009fe3]">
              We’ve delivered 2500+ projects across 130+ sectors. Experience in your industry? We have it.
            </p>
          </Link>

          <div className="mt-[39px] border-t border-[#d5d5d5] pt-[22px]">
            <div className="mb-[20px] flex items-center justify-between">
              <Link href="/case-studies" onClick={closeMenu} className="text-[18px] font-semibold leading-[24px] text-[#050b18] transition-colors hover:text-[#009fe3]">
                Recommended Case Study
              </Link>
              <Link href="/case-studies" onClick={closeMenu} className="inline-flex items-center gap-[10px] text-[15px] font-normal text-[#2d7dbf] transition-colors hover:text-[#009fe3]">
                View All <span className="text-[22px] leading-none">›</span>
              </Link>
            </div>

            <div className="space-y-[20px]">
              <CaseCard
                image="/images/case-safety-at-sea.svg"
                title="Safety at Sea - Leveraging IoT for Strengthening Maritime Security"
                description="Brain Station 23 developed an advanced IoT-based boat safety system"
                href="/case-study/safety-at-sea"
                closeMenu={closeMenu}
              />
              <CaseCard
                image="/images/case-digital-wallet.svg"
                title="Fueling Financial Inclusion through Digital Wallet Solutions"
                description="Digital wallet services are becoming increasingly popular as people"
                href="/case-study/digital-wallet"
                closeMenu={closeMenu}
              />
            </div>
          </div>
        </aside>

        <div className="grid grid-cols-[295px_295px_1fr] gap-x-[80px] bg-white pb-[40px] pl-[60px] pr-[60px] pt-[40px]">
          <div>
            <ColumnTitle href="/industries" closeMenu={closeMenu}>Industries</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {industriesOne.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
            </div>
            <Link href="/industries" onClick={closeMenu} className="mt-[62px] inline-flex items-center gap-[13px] text-[17px] font-semibold leading-[24px] text-[#050b18] transition-colors hover:text-[#009fe3]">
              All Industries <span className="text-[22px] font-normal leading-none">→</span>
            </Link>
          </div>

          <div className="pt-[44px]">
            <div className="space-y-[15px]">
              {industriesTwo.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
            </div>
          </div>

          <div />
        </div>
      </div>
    </section>
  );
}

function CaseCard({ image, title, description, href, closeMenu }: { image: string; title: string; description: string; href: string; closeMenu: () => void }) {
  return (
    <Link href={href} onClick={closeMenu} className="group grid grid-cols-[148px_1fr] gap-[36px]">
      <Image src={image} alt={title} width={148} height={90} className="h-[90px] w-[148px] rounded-[8px] object-cover" />
      <div>
        <h3 className="text-[15px] font-medium leading-[22px] text-[#050b18] transition-colors group-hover:text-[#009fe3]">{title}</h3>
        <p className="mt-[10px] text-[14px] font-normal leading-[22px] text-[#5f6674] transition-colors group-hover:text-[#009fe3]">{description}</p>
      </div>
    </Link>
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
