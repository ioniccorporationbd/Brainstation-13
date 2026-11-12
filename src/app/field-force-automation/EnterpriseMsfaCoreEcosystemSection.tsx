"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import {
  Bell,
  CreditCard,
  GraduationCap,
  LayoutDashboard,
  MapPin,
  Megaphone,
  Route,
  ShieldCheck,
  ShoppingCart,
  Target,
  UserCog,
  Users,
} from "lucide-react";

type EcosystemItem = {
  title: string;
  image: string;
  icon: React.ElementType;
};

const ecosystemItems: EcosystemItem[] = [
  {
    title: "User Management",
    icon: UserCog,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Customer Management",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Sales Hierarchy",
    icon: Route,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Order Management",
    icon: ShoppingCart,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Visit Plan Activity",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Approval Management",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Target VS Achievement",
    icon: Target,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Territory Management",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Report & Dashboard",
    icon: LayoutDashboard,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Credit & Discount",
    icon: CreditCard,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Notification & Alerts",
    icon: Bell,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Promotional Materials",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Attendance & Location",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Training & Support",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function EnterpriseMsfaCoreEcosystemSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(8);
  const activeItem = ecosystemItems[activeIndex];

  return (
    <section className="w-full overflow-hidden bg-white px-6 pb-[88px] text-[#000000] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Comprehensive Capabilities")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#000000] md:text-[42px]">{t("The Core Ecosystem")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Click any module to preview how the platform supports field sales, governance, reporting, approvals, route planning, and ERP-ready execution.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.95fr_1.15fr] lg:gap-10">
          <div className="grid grid-cols-2 gap-2 md:gap-2.5">
            {ecosystemItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex min-h-[52px] items-center gap-2 border px-2.5 py-2.5 text-left text-[12px] font-semibold leading-tight transition-colors duration-200 md:min-h-[56px] md:gap-3 md:px-4 md:py-3 md:text-[14px] ${
                    isActive
                      ? "border-[#c91f28] bg-[#c91f28] text-white"
                      : "border-[#ececec] bg-white text-[#2b2b2b] hover:border-[#c91f28]"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-[4px] md:h-8 md:w-8 ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-[#fdecec] text-[#c91f28]"
                    }`}
                  >
                    <Icon size={16} strokeWidth={2} />
                  </span>

                  <span className="leading-tight">{t(item.title)}</span>
                </button>
              );
            })}
          </div>

          <div className="border border-[#ececec] bg-white p-2.5">
            <div className="relative h-[320px] overflow-hidden bg-[#f5f5f5] md:h-[440px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={activeItem.image}
                src={activeItem.image}
                alt={activeItem.title}
                className="h-full w-full object-cover"
              />

              <span className="absolute left-3 top-3 rounded-[4px] bg-[#c91f28] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {ecosystemItems.length}
              </span>

              <div className="absolute inset-x-3 bottom-3 border border-[#ececec] bg-white p-4 md:inset-x-4 md:bottom-4 md:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8a8a8a]">{t("Active Module")}</p>

                    <h3 className="mt-1.5 text-[20px] font-bold leading-tight tracking-[-0.02em] text-[#000000] md:text-[24px]">
                      {t(activeItem.title)}
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#c91f28] text-white">
                    {(() => {
                      const ActiveIcon = activeItem.icon;
                      return <ActiveIcon size={20} strokeWidth={2} />;
                    })()}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { label: t("Status"), value: t("Live") },
                    { label: t("Sync"), value: t("ERP") },
                    { label: t("Mode"), value: t("Offline") },
                  ].map((meta) => (
                    <div
                      key={meta.label}
                      className="border border-[#ececec] px-2.5 py-2"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a8a8a]">
                        {t(meta.label)}
                      </p>
                      <p className="mt-1 text-[13px] font-bold text-[#000000]">
                        {t(meta.value)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
