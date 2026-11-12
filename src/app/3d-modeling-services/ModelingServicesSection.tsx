import type { ComponentType } from "react";
import { getTranslator } from "@/i18n/server";
import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  Car,
  Cpu,
  HardHat,
} from "lucide-react";

type Service = {
  title: string;
  desc: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  img: string;
};

const services: Service[] = [
  {
    title: "3D Car Modeling",
    desc: "Engine internals, EV systems, drivetrain mechanics and precision component renders.",
    icon: Car,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Heavy Machinery",
    desc: "Excavators, cranes, mining equipment and construction vehicle technical visualizations.",
    icon: HardHat,
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Semiconductor Manufacturing",
    desc: "Wafer processing, clean room equipment and advanced fab walkthroughs.",
    icon: Cpu,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Robotics & Automation",
    desc: "Industrial robots, conveyor systems and factory automation walkthroughs.",
    icon: Bot,
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
  },
];

export default async function ModelingServicesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("What We Build")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("3D Modeling Services for Complex Industries")}</h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("Engineering-accurate 3D visualizations tailored for the world's most demanding manufacturing and engineering sectors.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-[#ececec] bg-white transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f7f7f7]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.9} />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-5 px-6 py-6 sm:px-7">
                  <div>
                    <h3 className="text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                      {t(item.title)}
                    </h3>

                    <p className="mt-3 max-w-[420px] text-[14.5px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656]">
                      {t(item.desc)}
                    </p>
                  </div>

                  <span className="mt-1 shrink-0 text-[#c91f28] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight size={22} strokeWidth={2} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
