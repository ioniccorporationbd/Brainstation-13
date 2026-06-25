"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import ServicesMenu from "./ServicesMenu";
import IndustriesMenu from "./IndustriesMenu";
import ProductsMenu from "./ProductsMenu";
import ResourcesMenu from "./ResourcesMenu";

type ActiveMenu = "services" | "industries" | "products" | "resources" | null;
type NavItem = {
  label: string;
  key: Exclude<ActiveMenu, null> | "global-offices";
  href: string;
  hasMegaMenu: boolean;
};

const navItems: NavItem[] = [
  { label: "Services", key: "services", href: "/services", hasMegaMenu: true },
  { label: "Industries", key: "industries", href: "/industries", hasMegaMenu: true },
  { label: "Products", key: "products", href: "/products", hasMegaMenu: true },
  { label: "Resources", key: "resources", href: "/resources", hasMegaMenu: true },
  { label: "Global Offices", key: "global-offices", href: "/global-offices", hasMegaMenu: false },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1025) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const toggleMenu = (key: NavItem["key"]) => {
    if (key === "global-offices") return;
    setActiveMenu((current) => (current === key ? null : key));
  };

  return (
    <header className="relative z-50 w-full border-b border-[#edf2f7] bg-[#f4f8fc] font-sans">
      <nav className="mx-auto flex h-[88px] max-w-[1340px] items-center justify-between px-[24px] min-[1025px]:px-[32px]">
        <Link href="/" onClick={closeAll} className="flex shrink-0 items-center">
          <Image
            src="/images/brainstation-logo.svg"
            alt="Brain Station 23"
            width={222}
            height={40}
            priority
            className="h-auto w-[186px] min-[768px]:w-[222px]"
          />
        </Link>

        <div className="hidden items-center gap-[30px] min-[1025px]:flex">
          {navItems.map((item) =>
            item.hasMegaMenu ? (
              <button
                key={item.key}
                type="button"
                onClick={() => toggleMenu(item.key)}
                aria-expanded={activeMenu === item.key}
                className={`flex items-center gap-[7px] text-[16px] font-normal leading-[24px] transition-colors ${
                  activeMenu === item.key ? "text-[#009fe3]" : "text-[#111827] hover:text-[#009fe3]"
                }`}
              >
                {item.label}
                <ChevronDown
                  size={18}
                  strokeWidth={2}
                  className={`transition-transform duration-200 ${activeMenu === item.key ? "rotate-180" : ""}`}
                />
              </button>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                onClick={closeAll}
                className="text-[16px] font-normal leading-[24px] text-[#111827] transition-colors hover:text-[#009fe3]"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <Link
          href="/schedule-a-call"
          onClick={closeAll}
          className="hidden rounded-full bg-[#ffab2e] px-[26px] py-[14px] text-[16px] font-semibold leading-[20px] text-black transition-colors hover:bg-[#f6a11f] min-[1025px]:inline-flex"
        >
          Schedule a Call
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => {
            setMobileOpen((current) => !current);
            setActiveMenu(null);
          }}
          className="flex h-[44px] w-[44px] items-center justify-center rounded-[8px] border border-[#dfe7f0] bg-white text-[#111827] min-[1025px]:hidden"
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      <div className="absolute left-0 top-[88px] hidden w-full min-[1025px]:block">
        {activeMenu === "services" && <ServicesMenu closeMenu={closeAll} />}
        {activeMenu === "industries" && <IndustriesMenu closeMenu={closeAll} />}
        {activeMenu === "products" && <ProductsMenu closeMenu={closeAll} />}
        {activeMenu === "resources" && <ResourcesMenu closeMenu={closeAll} />}
      </div>

      {mobileOpen && (
        <div className="absolute left-0 top-[88px] w-full bg-white shadow-[0_18px_35px_rgba(15,23,42,0.12)] min-[1025px]:hidden">
          <div className="max-h-[calc(100vh-88px)] overflow-y-auto px-[20px] py-[18px]">
            {navItems.map((item) =>
              item.hasMegaMenu ? (
                <div key={item.key} className="border-b border-[#eef2f6]">
                  <button
                    type="button"
                    onClick={() => toggleMenu(item.key)}
                    className="flex w-full items-center justify-between py-[16px] text-left text-[17px] font-semibold text-[#050b18]"
                  >
                    {item.label}
                    <ChevronDown
                      size={19}
                      className={`transition-transform ${activeMenu === item.key ? "rotate-180 text-[#009fe3]" : ""}`}
                    />
                  </button>

                  {activeMenu === item.key && (
                    <div className="pb-[18px]">
                      {activeMenu === "services" && <ServicesMenu closeMenu={closeAll} mobile />}
                      {activeMenu === "industries" && <IndustriesMenu closeMenu={closeAll} mobile />}
                      {activeMenu === "products" && <ProductsMenu closeMenu={closeAll} mobile />}
                      {activeMenu === "resources" && <ResourcesMenu closeMenu={closeAll} mobile />}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={closeAll}
                  className="block border-b border-[#eef2f6] py-[16px] text-[17px] font-semibold text-[#050b18]"
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="/schedule-a-call"
              onClick={closeAll}
              className="mt-[20px] block rounded-full bg-[#ffab2e] px-[22px] py-[14px] text-center text-[16px] font-semibold text-black"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
