"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import LanguageSwitcher from "@/components/global/LanguageSwitcher";
import { useTranslation } from "@/i18n/LanguageProvider";

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
  const { t } = useTranslation();

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

  /* The navbar logo must always take the visitor to the home page. From any
     other route the Link below navigates to "/"; on the home page itself the
     navigation would be a no-op, so it closes the menus and scrolls back to
     the top instead. */
  const handleLogoClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    closeAll();
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Shared link styling: animated brand-red underline reveal (text colour stays white on hover).
  const linkBase =
    "relative text-[16px] font-medium leading-[24px] transition-colors duration-300 " +
    "after:absolute after:-bottom-[7px] after:left-0 after:h-[2px] after:w-full after:origin-left " +
    "after:scale-x-0 after:rounded-full after:bg-white after:transition-transform after:duration-300 " +
    "after:ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 w-full font-sans transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-[linear-gradient(to_top_right,#C91F28,#8B1119)] backdrop-blur-xl"
            : "border-b border-white/10 bg-[linear-gradient(to_top_right,#C91F28,#8B1119)]"
        }`}
      >
        <Link
          href="/"
          onClick={handleLogoClick}
          className="absolute left-[120px] top-0 z-30 flex h-[76px] items-center justify-center bg-white px-4 min-[1025px]:px-5 xl:h-[88px] 2xl:h-[100px]"
          aria-label={t("Magnetic Solution Limited — Home")}
        >
          <Image
            src="/images/brand/magnetic-logo.png"
            alt="Magnetic Solution Ltd"
            width={190}
            height={198}
            priority
            className="h-[80%] w-auto object-contain"
          />
        </Link>
        <nav
          className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 transition-all duration-300 min-[1025px]:px-8 xl:h-[88px] 2xl:h-[100px]"
        >
          <span
            aria-hidden="true"
            className="invisible -ml-5 flex shrink-0 items-center justify-center self-stretch bg-white px-4 min-[1025px]:-ml-8 min-[1025px]:px-5"
          >
            <Image
              src="/images/brand/magnetic-logo.png"
              alt=""
              width={190}
              height={198}
              priority
              className="h-full w-auto object-contain"
            />
          </span>

          <div className="hidden items-center gap-5 min-[1025px]:flex xl:gap-[30px]">
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
                  className={`group flex items-center gap-[7px] ${t(linkBase)} ${
                    active
                      ? "text-white after:scale-x-100"
                      : "text-white hover:after:scale-x-100"
                  }`}
                >
                  {t(item.label)}
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
                  className={`${t(linkBase)} ${
                    active
                      ? "text-white after:scale-x-100"
                      : "text-white hover:after:scale-x-100"
                  }`}
                >
                  {t(item.label)}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-4 min-[1025px]:flex">
            <LanguageSwitcher />
            <Link
              href="/schedule-a-call"
              onClick={closeAll}
              className="rounded-full bg-white px-6 py-[14px] text-[16px] font-semibold leading-[20px] text-black shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white xl:px-[30px]"
            >
              {t("Schedule a Call")}
            </Link>
          </div>

          <button
            type="button"
            aria-label={t("Toggle menu")}
            onClick={() => {
              setMobileOpen((current) => !current);
              setActiveMenu(null);
            }}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#C91F28] min-[1025px]:hidden"
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </nav>

        <div className="absolute left-0 top-[76px] hidden w-full min-[1025px]:block xl:top-[88px] 2xl:top-[100px]">
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
        className={`fixed right-0 top-0 z-[70] h-screen w-[340px] max-w-[88%] bg-[linear-gradient(to_top_right,#C91F28,#8B1119)] px-5 py-5 transition-transform duration-300 ease-out min-[1025px]:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" onClick={handleLogoClick} className="flex min-w-0 items-center gap-2" aria-label={t("Magnetic Solution Limited — Home")}>
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
            aria-label={t("Close menu")}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#C91F28]"
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
                        ? "after:absolute after:bottom-2 after:left-4 after:right-4 after:h-[2px] after:rounded-full after:bg-white"
                        : ""
                    }`}
                  >
                    {t(item.label)}
                    <ChevronDown
                      size={19}
                      className={`transition-transform duration-300 ${
                        activeMenu === item.key ? "rotate-180 text-white/80" : ""
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
                      ? "after:absolute after:bottom-2 after:left-4 after:right-4 after:h-[2px] after:rounded-full after:bg-white"
                      : ""
                  }`}
                >
                  {t(item.label)}
                </Link>
              )
            )}
          </nav>

          <LanguageSwitcher variant="mobile" />

          <Link
            href="/schedule-a-call"
            onClick={closeAll}
            className="mt-5 flex w-full justify-center rounded-full bg-white px-7 py-4 text-[16px] font-bold text-black shadow-none transition hover:bg-black hover:text-white"
          >
            {t("Schedule a Call")}
          </Link>
        </div>
      </aside>
    </>
  );
}
