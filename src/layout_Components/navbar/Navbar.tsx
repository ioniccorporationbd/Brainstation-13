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

const SERVICE_ROUTES = [
  "/services",
  "/staff-augmentation",
  "/managed-service",
  "/digital-transformation",
  "/technology-consulting",
  "/mvp-development",
  "/ml-ai-development",
  "/data-engineering",
  "/data-migration",
  "/business-intelligence",
  "/insurtech",
  "/3d-modeling-services",
  "/game-studio",
  "/qa-testing-and-automation",
  "/lms-development",
  "/web-mobile-app-development",
  "/ecommerce-development",
  "/adobe-experience-manager",
  "/sharepoint-services",
  "/blockchain-development",
  "/shopify-services",
  "/field-force-automation",
  "/banking-solutions",
  "/cloud-solutions",
  "/cyber-security",
  "/erp-development",
  "/data-science-business-intelligence",
];

const isServiceRoute = (p: string) => SERVICE_ROUTES.some((r) => p === r || p.startsWith(`${r}/`));

const INDUSTRY_ROUTES = [
  "/industries",
  "/fintech",
  "/pharma",
  "/telecom",
  "/real-estate",
  "/software-ites",
  "/e-commerce",
  "/education",
  "/retail",
  "/automotive",
  "/startup",
  "/non-profit",
];

const isIndustryRoute = (p: string) => INDUSTRY_ROUTES.some((r) => p === r || p.startsWith(`${r}/`));

type ActiveMenu = "services" | "industries" | "products" | "resources" | null;

type NavItemBase = {
  label: string;
  key: Exclude<ActiveMenu, null> | "our-offices";
};

/**
 * Mega-menu items open a dropdown instead of navigating; a missing `href`
 * means there is no landing page for that section (e.g. Products has no
 * /products route yet), so the label must never be rendered as a link.
 */
type NavItem =
  | (NavItemBase & { hasMegaMenu: true; href?: string })
  | (NavItemBase & { hasMegaMenu: false; href: string });

const navItems: NavItem[] = [
  { label: "Services", key: "services", href: "/services", hasMegaMenu: true },
  { label: "Industries", key: "industries", href: "/industries", hasMegaMenu: true },
  { label: "Products", key: "products", hasMegaMenu: true },
  { label: "Resources", key: "resources", href: "/resources", hasMegaMenu: true },
  { label: "Our Offices", key: "our-offices", href: "/our-offices", hasMegaMenu: false },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const asideRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();
  const isCompactGutter =
    pathname === "/" || (!!pathname && (isServiceRoute(pathname) || isIndustryRoute(pathname)));

  useEffect(() => {
    document.body.classList.toggle("svc-mobile", !!pathname && isServiceRoute(pathname));
    document.body.classList.toggle("ind-mobile", !!pathname && isIndustryRoute(pathname));
  }, [pathname]);
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

  /* Mobile drawer behaviour: lock focus inside the open drawer, close it on
     Escape, and return focus to the hamburger on close. */
  useEffect(() => {
    if (!mobileOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const triggerEl = triggerRef.current;
    const raf = window.requestAnimationFrame(() => closeBtnRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const root = asideRef.current;
      if (!root) return;
      const nodes = Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.tabIndex !== -1 && el.offsetParent !== null);
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKeyDown);
      const target = triggerEl;
      if (target && target.offsetParent !== null) {
        target.focus({ preventScroll: true });
      } else if (previouslyFocused && document.contains(previouslyFocused)) {
        previouslyFocused.focus({ preventScroll: true });
      }
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
    if (key === "our-offices") return;
    setActiveMenu((current) => (current === key ? null : key));
  };

  const isRouteActive = (item: NavItem) =>
    !!item.href &&
    (pathname === item.href ||
      (item.href !== "/" && !!pathname && pathname.startsWith(`${item.href}/`)));

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
            ? "bg-[linear-gradient(to_top_right,#C91F28,#8B1119)] backdrop-blur-xl"
            : "bg-[linear-gradient(to_top_right,#C91F28,#8B1119)]"
        }`}
      >
        <nav
          className={`mx-auto flex h-[64px] w-full max-w-[1440px] items-center justify-between gap-3 transition-all duration-300 min-[768px]:h-[72px] min-[768px]:px-11 min-[1200px]:h-[76px] min-[1200px]:gap-5 min-[1200px]:px-12 xl:h-[88px] 2xl:h-[100px] ${isCompactGutter ? "px-[5px] min-[640px]:px-9" : "px-9"}`}
        >
          <Link
            href="/"
            onClick={handleLogoClick}
            className="relative z-30 flex h-[64px] shrink-0 items-center justify-center self-stretch bg-white px-3 min-[768px]:h-[72px] min-[768px]:px-4 min-[1200px]:h-[76px] min-[1200px]:px-5 xl:h-[88px] 2xl:h-[100px]"
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
          <div className="bn-links hidden items-center gap-5 min-[1200px]:flex xl:gap-[30px]">
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
                  className={`group flex items-center gap-2 ${t(linkBase)} ${
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

          <div className="ml-auto hidden shrink-0 items-center gap-3 min-[480px]:flex min-[1200px]:ml-0 min-[1200px]:gap-4">
            <LanguageSwitcher />
            <Link
              href="/schedule-a-call"
              onClick={closeAll}
              className="bn-cta hidden rounded-full bg-white px-5 py-[12px] text-[15px] font-semibold leading-[20px] text-black shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white min-[768px]:inline-flex min-[1200px]:px-6 min-[1200px]:py-[14px] min-[1200px]:text-[16px] xl:px-[30px]"
            >
              {t("Schedule a Call")}
            </Link>
          </div>

          <button
            ref={triggerRef}
            type="button"
            aria-label={t("Toggle menu")}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            onClick={() => {
              setMobileOpen((current) => !current);
              setActiveMenu(null);
            }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#C91F28] min-[768px]:h-[46px] min-[768px]:w-[46px] min-[1200px]:hidden"
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </nav>

        <div className="absolute left-0 top-[76px] hidden w-full min-[1200px]:block xl:top-[88px] 2xl:top-[100px]">
          {activeMenu === "services" && <ServicesMenu closeMenu={closeAll} />}
          {activeMenu === "industries" && <IndustriesMenu closeMenu={closeAll} />}
          {activeMenu === "products" && <ProductsMenu closeMenu={closeAll} />}
          {activeMenu === "resources" && <ResourcesMenu closeMenu={closeAll} />}
        </div>
      </header>

      <div
        aria-hidden="true"
        onClick={closeAll}
        className={`fixed inset-0 z-[60] bg-black/45 transition-opacity duration-300 motion-reduce:transition-none min-[1200px]:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        ref={asideRef}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={t("Main menu")}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        className={`bn-drawer fixed right-0 top-0 z-[70] flex h-[100dvh] w-[360px] max-w-[92vw] flex-col bg-white transition-transform duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none min-[1200px]:hidden ${
          mobileOpen ? "translate-x-0 shadow-[-24px_0_60px_rgba(15,23,42,0.22)]" : "translate-x-full shadow-none"
        }`}
      >
        <div className="flex h-[68px] shrink-0 items-center justify-between gap-3 border-b border-[#efefef] px-5 min-[768px]:h-[76px] min-[768px]:px-6">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex min-h-[44px] min-w-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C91F28]/40"
            aria-label={t("Magnetic Solution Limited — Home")}
          >
            <Image
              src="/images/brand/magnetic-logo.png"
              alt="Magnetic Solution Ltd"
              width={190}
              height={198}
              priority
              className="h-[36px] w-auto object-contain min-[768px]:h-[40px]"
            />
          </Link>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={closeAll}
            aria-label={t("Close menu")}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e6e6e6] text-[#141418] transition-colors duration-200 hover:border-[#C91F28] hover:bg-[#C91F28] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C91F28]/40"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-7 pt-3 min-[768px]:px-5">
          <nav aria-label={t("Mobile navigation")} className="flex flex-col gap-1">
            {navItems.map((item) => {
              const routeActive = isRouteActive(item);
              const open = activeMenu === item.key;

              if (!item.hasMegaMenu) {
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={closeAll}
                    aria-current={routeActive ? "page" : undefined}
                    className={`flex min-h-[52px] items-center rounded-xl px-4 py-3 text-[16px] font-medium transition-colors duration-200 hover:bg-[#fdf2f2] hover:text-[#C91F28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C91F28]/40 ${
                      routeActive ? "bg-[#fdf2f2] text-[#C91F28]" : "text-[#141418]"
                    }`}
                  >
                    <span className="min-w-0 break-words">{t(item.label)}</span>
                  </Link>
                );
              }

              return (
                <div key={item.key}>
                  <button
                    type="button"
                    id={`drawer-trigger-${item.key}`}
                    aria-expanded={open}
                    aria-controls={`drawer-panel-${item.key}`}
                    onClick={() => {
                      const opening = activeMenu !== item.key;
                      toggleMenu(item.key);
                      if (opening) {
                        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                        window.requestAnimationFrame(() => {
                          document
                            .getElementById(`drawer-trigger-${item.key}`)
                            ?.scrollIntoView({ block: "start", behavior: reduced ? "auto" : "smooth" });
                        });
                      }
                    }}
                    className={`flex min-h-[52px] w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-[16px] font-medium transition-colors duration-200 hover:bg-[#fdf2f2] hover:text-[#C91F28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C91F28]/40 ${
                      open || routeActive ? "bg-[#fdf2f2] text-[#C91F28]" : "text-[#141418]"
                    }`}
                  >
                    <span className="min-w-0 break-words">{t(item.label)}</span>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={`shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                        open ? "rotate-180 text-[#C91F28]" : "text-[#9aa0aa]"
                      }`}
                    />
                  </button>

                  <div
                    id={`drawer-panel-${item.key}`}
                    role="region"
                    aria-labelledby={`drawer-trigger-${item.key}`}
                    aria-hidden={!open}
                    inert={!open}
                    className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`mb-1 mt-1 rounded-xl border border-[#f0f0f0] bg-[#fafafa] px-3 py-4 transition-opacity duration-300 motion-reduce:transition-none ${
                          open ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {item.key === "services" && <ServicesMenu closeMenu={closeAll} mobile />}
                        {item.key === "industries" && <IndustriesMenu closeMenu={closeAll} mobile />}
                        {item.key === "products" && <ProductsMenu closeMenu={closeAll} mobile />}
                        {item.key === "resources" && <ResourcesMenu closeMenu={closeAll} mobile />}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="mt-5 border-t border-[#efefef] pt-5">
            <LanguageSwitcher variant="mobile" />

            <Link
              href="/schedule-a-call"
              onClick={closeAll}
              className="mt-3 flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#C91F28] px-7 text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#a3131b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C91F28]/40 focus-visible:ring-offset-2"
            >
              {t("Schedule a Call")}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
