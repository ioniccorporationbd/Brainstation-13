"use client";

import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(8);
  const activeItem = ecosystemItems[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[96px] text-white">
      <div className="mx-auto max-w-[1320px]">
        {/* Header */}
        <div className="mx-auto max-w-[840px] text-center">
          <p className="text-[20px] font-bold leading-none tracking-[-0.035em] text-[#3f93cf]">
            Comprehensive Capabilities
          </p>

          <h2 className="mt-7 text-[44px] font-bold leading-[1.08] tracking-[-0.065em] text-white md:text-[62px]">
            The Core Ecosystem
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[18px] font-semibold leading-[1.55] tracking-[-0.035em] text-white/75 md:text-[20px]">
            Click any module to preview how the platform supports field sales,
            governance, reporting, approvals, route planning, and ERP-ready
            execution.
          </p>
        </div>

        <div className="mt-[76px] grid grid-cols-1 items-center gap-[54px] lg:grid-cols-[0.9fr_1.25fr]">
          {/* Left Buttons */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ecosystemItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex min-h-[70px] items-center gap-4 rounded-[10px] px-5 py-4 text-left text-[17px] font-bold tracking-[-0.035em] transition-all duration-300 ${
                    isActive
                      ? "bg-[#ffab2e] text-black shadow-[0_18px_45px_rgba(255,171,46,0.28)]"
                      : "bg-white text-[#223f5c] hover:-translate-y-1 hover:bg-[#f4f8fc] hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-black/10 text-black"
                        : "bg-[#e8f1f6] text-[#4fa0d1] group-hover:bg-[#4fa0d1] group-hover:text-white"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.9} />
                  </span>

                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right Changing Image */}
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4fa0d1]/12 blur-3xl" />

            <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_34px_90px_rgba(0,0,0,0.38)] backdrop-blur-sm">
              <div className="relative h-[430px] overflow-hidden rounded-[24px] bg-[#f4f8fc] md:h-[520px]">
                <img
                  key={activeItem.image}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-[#111E40]/88 via-[#111E40]/38 to-transparent" />

                {/* Dashboard Overlay */}
                <div className="absolute inset-x-6 bottom-6 rounded-[22px] border border-white/15 bg-white/90 p-6 text-[#11182f] shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur md:inset-x-8 md:bottom-8">
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div>
                      <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#4fa0d1]">
                        Active Module
                      </p>

                      <h3 className="mt-3 text-[30px] font-bold leading-[1.08] tracking-[-0.06em] text-[#050b18] md:text-[38px]">
                        {activeItem.title}
                      </h3>
                    </div>

                    <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#08a9df] text-white shadow-[0_14px_34px_rgba(8,169,223,0.28)]">
                      {(() => {
                        const ActiveIcon = activeItem.icon;
                        return <ActiveIcon size={28} strokeWidth={1.8} />;
                      })()}
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-[14px] bg-[#f4f8fc] px-4 py-4">
                      <p className="text-[12px] font-bold text-[#42637a]">
                        Status
                      </p>
                      <p className="mt-2 text-[18px] font-bold text-[#11182f]">
                        Live
                      </p>
                    </div>

                    <div className="rounded-[14px] bg-[#f4f8fc] px-4 py-4">
                      <p className="text-[12px] font-bold text-[#42637a]">
                        Sync
                      </p>
                      <p className="mt-2 text-[18px] font-bold text-[#11182f]">
                        ERP
                      </p>
                    </div>

                    <div className="rounded-[14px] bg-[#f4f8fc] px-4 py-4">
                      <p className="text-[12px] font-bold text-[#42637a]">
                        Mode
                      </p>
                      <p className="mt-2 text-[18px] font-bold text-[#11182f]">
                        Offline
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute left-6 top-6 rounded-full bg-[#ffab2e] px-5 py-2 text-[13px] font-bold uppercase tracking-[0.08em] text-black shadow-[0_14px_34px_rgba(255,171,46,0.28)]">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {ecosystemItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-white/45">
        Powered by NeuralFlow
      </span>
    </section>
  );
}