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

const fintech: MenuLinkItem[] = [
  { label: "Digital Banking Software", href: "/digital-banking-software" },
  { label: "E-wallet Software", href: "/e-wallet-software" },
  { label: "Digital Lending & Credit", href: "/digital-lending-credit" },
  { label: "Insurance 360", href: "/insurance-360" },
  { label: "Cross Border Payments Solution", href: "/cross-border-payments-solution" },
];

const healthcare: MenuLinkItem[] = [
  { label: "Omnizia", href: "#" },
  { label: "Time2Publish", href: "#" },
];

const lms: MenuLinkItem[] = [
  { label: "Proctoring Pro", href: "/proctoring-pro" },
];

const aiSolution: MenuLinkItem[] = [
  { label: "NeuraFlow - Conversational AI Agent", href: "#" },
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
          <Link href="#" onClick={closeMenu} className="group block">
            <h2 className="text-[22px] font-semibold leading-[28px] text-[#050b18] transition-colors group-hover:text-[#009fe3]">
              Products
            </h2>
            <p className="mt-[13px] max-w-[555px] text-[14px] font-normal leading-[22px] text-[#5f6674] transition-colors group-hover:text-[#009fe3]">
              Brain Station 23 delivers tailored digital solutions across fintech, healthcare, e-commerce, and more, empowering industries with innovation and expertise.
            </p>
          </Link>

          <div className="mt-[39px] border-t border-[#d5d5d5] pt-[22px]">
            <div className="mb-[22px] flex items-center justify-between">
              <Link href="/testimonials" onClick={closeMenu} className="text-[18px] font-semibold leading-[24px] text-[#050b18] transition-colors hover:text-[#009fe3]">
                Testimonials
              </Link>
              <Link href="/testimonials" onClick={closeMenu} className="inline-flex items-center gap-[10px] text-[15px] font-normal text-[#2d7dbf] transition-colors hover:text-[#009fe3]">
                View All <span className="text-[22px] leading-none">›</span>
              </Link>
            </div>

            <Link href="#" onClick={closeMenu} className="group block max-w-[570px]">
              <div className="mb-[17px] flex items-center gap-[12px]">
                <div>
                  <p className="text-[7px] font-semibold uppercase leading-none text-[#6b7280]">Reviewed on</p>
                  <p className="text-[22px] font-bold leading-[24px] text-[#111827]">Clutch</p>
                </div>
                <p className="text-[20px] leading-none text-[#f04438]">★★★★★</p>
              </div>
              <p className="text-[15px] font-normal leading-[22px] text-[#050b18] transition-colors group-hover:text-[#009fe3]">
                Brain Station 23’s resource augmentation transformed our development velocity. Their AI-powered approach delivered our fintech platform 8X faster than expected.
              </p>
              <p className="mt-[24px] text-[15px] font-normal leading-[22px] text-[#050b18] transition-colors group-hover:text-[#009fe3]">Anupom Syam</p>
              <p className="mt-[4px] text-[14px] font-normal leading-[20px] text-[#5f6674] transition-colors group-hover:text-[#009fe3]">Founder & CEO at Tackle</p>
            </Link>
          </div>
        </aside>

        <div className="grid grid-cols-[322px_322px_1fr] gap-x-[80px] bg-white pb-[40px] pl-[60px] pr-[60px] pt-[40px]">
          <div>
            <ColumnTitle href="/products/fintech" closeMenu={closeMenu}>Fintech</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {fintech.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
            </div>
          </div>

          <div>
            <ColumnTitle href="/products/healthcare" closeMenu={closeMenu}>Healthcare</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {healthcare.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
            </div>

            <div className="mt-[26px]">
              <ColumnTitle href="/products/lms" closeMenu={closeMenu}>LMS</ColumnTitle>
              <div className="mt-[23px] space-y-[15px]">
                {lms.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
              </div>
            </div>
          </div>

          <div>
            <ColumnTitle href="/products/ai-solution" closeMenu={closeMenu}>AI Solution</ColumnTitle>
            <div className="mt-[23px] space-y-[15px]">
              {aiSolution.map((item) => <TextLink key={item.href} item={item} closeMenu={closeMenu} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
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
