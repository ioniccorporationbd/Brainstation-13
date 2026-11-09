"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

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

  // Close the open mega menu when clicking anywhere outside the navbar, or on Escape.
  useEffect(() => {
    if (!activeMenu) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      // Desktop only: the mobile drawer closes via its own backdrop overlay.
      if (window.innerWidth < 1025) return;
      const target = event.target as Node | null;
      if (headerRef.current && target && !headerRef.current.contains(target)) {
        setActiveMenu(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMenu]);

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const toggleMenu = (key: NavItem["key"]) => {
    if (key === "global-offices") return;
    setActiveMenu((current) => (current === key ? null : key));
  };

  const isRouteActive = (item: NavItem) =>
    pathname === item.href ||
    (item.href !== "/" && !!pathname && pathname.startsWith(`${item.href}/`));

  // Shared link styling: brand-red hover colour + animated underline reveal.
  const linkBase =
    "relative text-[16px] font-medium leading-[24px] transition-colors duration-300 " +
    "after:absolute after:-bottom-[7px] after:left-0 after:h-[2px] after:w-full after:origin-left " +
    "after:scale-x-0 after:rounded-full after:bg-[#C91F28] after:transition-transform after:duration-300 " +
    "after:ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 w-full font-sans transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-black/95 shadow-[0_14px_35px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            : "border-b border-white/10 bg-black"
        }`}
      >
        <nav
          className="mx-auto flex h-14 max-w-[1320px] items-center justify-between px-5 transition-all duration-300 min-[1025px]:px-8 xl:h-16 2xl:h-20"
        >
          <Link href="/" onClick={closeAll} className="flex shrink-0 items-center gap-3" aria-label="Magnetic Solution Limited — Home">
            <span className="flex h-[48px] items-center justify-center rounded-[10px] bg-white px-[7px] shadow-[0_4px_14px_rgba(0,0,0,0.28)] transition-all duration-300 xl:h-[56px] xl:px-[8px] 2xl:h-[72px] 2xl:px-[10px]">
              <Image
                src="/images/brand/magnetic-logo.png"
                alt="Magnetic Solution Ltd"
                width={190}
                height={198}
                priority
                className="h-full w-auto object-contain"
              />
            </span>
          </Link>

          <div className="hidden items-center gap-[30px] min-[1025px]:flex">
            {navItems.map((item) => {
              const active = activeMenu === item.key || isRouteActive(item);
              return item.hasMegaMenu ? (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => toggleMenu(item.key)}
                  aria-expanded={activeMenu === item.key}
                  aria-haspopup="true"
                  aria-current={isRouteActive(item) ? "page" : undefined}
                  className={`group flex items-center gap-[7px] ${linkBase} ${
                    active
                      ? "text-white after:scale-x-100"
                      : "text-white hover:text-primary hover:after:scale-x-100"
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
                  aria-current={isRouteActive(item) ? "page" : undefined}
                  className={`${linkBase} ${
                    active
                      ? "text-white after:scale-x-100"
                      : "text-white hover:text-primary hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/schedule-a-call"
            onClick={closeAll}
            className="hidden rounded-full bg-primary px-[30px] py-[14px] text-[16px] font-semibold leading-[20px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_10px_24px_rgba(201,31,40,0.36)] min-[1025px]:inline-flex"
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
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-sm transition-all duration-300 hover:border-primary hover:bg-white/15 hover:text-primary min-[1025px]:hidden"
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
        className={`fixed right-0 top-0 z-[70] h-screen w-[340px] max-w-[88%] bg-[#0b0b0b] px-5 py-5 shadow-[-20px_0_45px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out min-[1025px]:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" onClick={closeAll} className="flex min-w-0 items-center gap-2" aria-label="Magnetic Solution Limited — Home">
            <span className="flex h-[48px] items-center justify-center rounded-[10px] bg-white px-[7px] shadow-[0_4px_14px_rgba(0,0,0,0.28)]">
              <Image
                src="/images/brand/magnetic-logo.png"
                alt="Magnetic Solution Ltd"
                width={190}
                height={198}
                priority
                className="h-full w-auto object-contain"
              />
            </span>
          </Link>

          <button
            type="button"
            onClick={closeAll}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary hover:text-white"
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
                    className={`relative flex w-full items-center justify-between px-4 py-4 text-left text-[17px] font-semibold text-white transition hover:bg-white/10 ${
                      isRouteActive(item)
                        ? "after:absolute after:bottom-2 after:left-4 after:right-4 after:h-[2px] after:rounded-full after:bg-[#C91F28]"
                        : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={19}
                      className={`transition-transform duration-300 ${
                        activeMenu === item.key ? "rotate-180 text-primary" : ""
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
                  className={`relative block rounded-2xl border border-white/10 px-4 py-4 text-[17px] font-semibold text-white transition hover:bg-white/10 ${
                    isRouteActive(item)
                      ? "after:absolute after:bottom-2 after:left-4 after:right-4 after:h-[2px] after:rounded-full after:bg-[#C91F28]"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <Link
            href="/schedule-a-call"
            onClick={closeAll}
            className="mt-7 flex w-full justify-center rounded-full bg-primary px-7 py-4 text-[16px] font-bold text-white transition hover:bg-primary-hover"
          >
            Schedule a Call
          </Link>
        </div>
      </aside>
    </>
  );
}
