"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import ServicesMenu from "./ServicesMenu";
import IndustriesMenu from "./IndustriesMenu";
import ProductsMenu from "./ProductsMenu";
import ResourcesMenu from "./ResourcesMenu";

type ActiveMenu = "services" | "industries" | "products" | "resources" | null;

const navItems = [
  {
    label: "Services",
    key: "services",
    href: "/services",
    hasComponent: true,
  },
  {
    label: "Industries",
    key: "industries",
    href: "/industries",
    hasComponent: true,
  },
  {
    label: "Products",
    key: "products",
    href: "/products",
    hasComponent: true,
  },
  {
    label: "Resources",
    key: "resources",
    href: "/resources",
    hasComponent: true,
  },
  {
    label: "Global Offices",
    key: "global-offices",
    href: "/global-offices",
    hasComponent: false,
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuClick = (key: string) => {
    if (
      key === "services" ||
      key === "industries" ||
      key === "products" ||
      key === "resources"
    ) {
      setActiveMenu((prev) => (prev === key ? null : key));
    }
  };

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  return (
    <header className="relative z-50 w-full bg-[#f4f8fc]">
      <nav className="mx-auto flex h-[88px] max-w-[1340px] items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" onClick={closeAll} className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Brain Station 23"
            width={220}
            height={45}
            priority
            className="h-auto w-[190px] md:w-[220px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 min-[1025px]:flex">
          {navItems.map((item) =>
            item.hasComponent ? (
              <button
                key={item.key}
                type="button"
                onClick={() => handleMenuClick(item.key)}
                className={`flex items-center gap-2 text-[16px] font-medium transition ${
                  activeMenu === item.key
                    ? "text-[#009fe3]"
                    : "text-[#111827] hover:text-[#009fe3]"
                }`}
              >
                {item.label}

                <ChevronDown
                  size={18}
                  className={`transition ${
                    activeMenu === item.key ? "rotate-180" : ""
                  }`}
                />
              </button>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                onClick={closeAll}
                className="text-[16px] font-medium text-[#111827] transition hover:text-[#009fe3]"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop Button */}
        <div className="hidden min-[1025px]:block">
          <Link
            href="/schedule-a-call"
            onClick={closeAll}
            className="rounded-full bg-[#ffab2e] px-7 py-4 text-[16px] font-semibold text-black transition hover:bg-[#f59b15]"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 bg-white min-[1025px]:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Desktop Component Show Area */}
      <div className="hidden min-[1025px]:block">
        {activeMenu === "services" && <ServicesMenu closeMenu={closeAll} />}
        {activeMenu === "industries" && <IndustriesMenu closeMenu={closeAll} />}
        {activeMenu === "products" && <ProductsMenu closeMenu={closeAll} />}
        {activeMenu === "resources" && <ResourcesMenu closeMenu={closeAll} />}
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute left-0 top-[88px] w-full bg-white shadow-md min-[1025px]:hidden">
          <div className="max-h-[calc(100vh-88px)] overflow-y-auto px-5 py-4">
            {navItems.map((item) =>
              item.hasComponent ? (
                <div key={item.key} className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => handleMenuClick(item.key)}
                    className="flex w-full items-center justify-between py-4 text-left text-[17px] font-semibold text-black"
                  >
                    {item.label}

                    <ChevronDown
                      size={18}
                      className={`transition ${
                        activeMenu === item.key ? "rotate-180 text-[#009fe3]" : ""
                      }`}
                    />
                  </button>

                  {activeMenu === item.key && (
                    <div className="pb-5">
                      {activeMenu === "services" && (
                        <ServicesMenu closeMenu={closeAll} mobile />
                      )}
                      {activeMenu === "industries" && (
                        <IndustriesMenu closeMenu={closeAll} mobile />
                      )}
                      {activeMenu === "products" && (
                        <ProductsMenu closeMenu={closeAll} mobile />
                      )}
                      {activeMenu === "resources" && (
                        <ResourcesMenu closeMenu={closeAll} mobile />
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={closeAll}
                  className="block border-b border-gray-100 py-4 text-[17px] font-semibold text-black"
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="/schedule-a-call"
              onClick={closeAll}
              className="mt-5 block rounded-full bg-[#ffab2e] px-6 py-4 text-center text-[16px] font-semibold text-black"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}