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
  { label: "Global Offices", key: "global-offices", href: "#", hasMegaMenu: false },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1025) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const toggleMenu = (key: NavItem["key"]) => {
    if (key === "global-offices") return;
    setActiveMenu((current) => (current === key ? null : key));
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b font-sans transition-all duration-300 ${
          isScrolled
            ? "border-[#1c2b52] bg-[#111E40]/95 shadow-[0_14px_35px_rgba(0,0,0,0.26)] backdrop-blur-xl"
            : "border-[#111E40] bg-[#111E40]"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-[1320px] items-center justify-between px-5 transition-all duration-300 min-[1025px]:px-8 ${
            isScrolled ? "h-[72px]" : "h-[88px]"
          }`}
        >
          <Link href="/" onClick={closeAll} className="flex shrink-0 items-center">
            <Image
              src="/images/brainstation-logo.svg"
              alt="Brain Station 23"
              width={222}
              height={40}
              priority
              className={`h-auto transition-all duration-300 ${
                isScrolled
                  ? "w-[170px] min-[768px]:w-[202px]"
                  : "w-[186px] min-[768px]:w-[222px]"
              }`}
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
                  className={`group flex items-center gap-[7px] text-[16px] font-medium leading-[24px] transition-all duration-300 ${
                    activeMenu === item.key
                      ? "text-[#ffab2e]"
                      : "text-white hover:text-[#ffab2e]"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={17}
                    strokeWidth={2.2}
                    className={`transition-transform duration-300 ${
                      activeMenu === item.key ? "rotate-180" : "group-hover:translate-y-[1px]"
                    }`}
                  />
                </button>
              ) : (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={closeAll}
                  className="text-[16px] font-medium leading-[24px] text-white transition-colors duration-300 hover:text-[#ffab2e]"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <Link
            href="/schedule-a-call"
            onClick={closeAll}
            className="hidden rounded-full bg-[#ffab2e] px-[30px] py-[14px] text-[16px] font-semibold leading-[20px] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_10px_24px_rgba(255,171,46,0.32)] min-[1025px]:inline-flex"
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
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-sm transition-all duration-300 hover:bg-white/15 min-[1025px]:hidden"
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </nav>

        <div
          className={`absolute left-0 hidden w-full min-[1025px]:block ${
            isScrolled ? "top-[72px]" : "top-[88px]"
          }`}
        >
          {activeMenu === "services" && <ServicesMenu closeMenu={closeAll} />}
          {activeMenu === "industries" && <IndustriesMenu closeMenu={closeAll} />}
          {activeMenu === "products" && <ProductsMenu closeMenu={closeAll} />}
          {activeMenu === "resources" && <ResourcesMenu closeMenu={closeAll} />}
        </div>
      </header>

      <div
        onClick={closeAll}
        className={`fixed inset-0 z-[60] bg-black/55 backdrop-blur-[2px] transition-opacity duration-300 min-[1025px]:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[70] h-screen w-[340px] max-w-[88%] bg-[#111E40] px-5 py-5 shadow-[-20px_0_45px_rgba(0,0,0,0.28)] transition-transform duration-300 ease-out min-[1025px]:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" onClick={closeAll} className="flex shrink-0 items-center">
            <Image
              src="/images/brainstation-logo.svg"
              alt="Brain Station 23"
              width={190}
              height={34}
              priority
              className="h-auto w-[190px]"
            />
          </Link>

          <button
            type="button"
            onClick={closeAll}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/15"
          >
            <X size={24} />
          </button>
        </div>

        <div className="h-[calc(100vh-105px)] overflow-y-auto pr-1">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) =>
              item.hasMegaMenu ? (
                <div key={item.key} className="overflow-hidden rounded-2xl border border-white/10">
                  <button
                    type="button"
                    onClick={() => toggleMenu(item.key)}
                    className="flex w-full items-center justify-between px-4 py-4 text-left text-[17px] font-semibold text-white transition hover:bg-white/10"
                  >
                    {item.label}
                    <ChevronDown
                      size={19}
                      className={`transition-transform duration-300 ${
                        activeMenu === item.key ? "rotate-180 text-[#ffab2e]" : ""
                      }`}
                    />
                  </button>

                  {activeMenu === item.key && (
                    <div className="border-t border-white/10 bg-white px-3 py-4">
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
                  className="block rounded-2xl border border-white/10 px-4 py-4 text-[17px] font-semibold text-white transition hover:bg-white/10"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <Link
            href="/schedule-a-call"
            onClick={closeAll}
            className="mt-7 flex w-full justify-center rounded-full bg-[#ffab2e] px-7 py-4 text-[16px] font-bold text-black transition hover:bg-[#ffc15a]"
          >
            Schedule a Call
          </Link>
        </div>
      </aside>
    </>
  );
}