import type { ComponentType } from "react";
import { getTranslator } from "@/i18n/server";
import {
  Boxes,
  Brain,
  Eye,
  Factory,
  Film,
  Lightbulb,
  MessageSquare,
  Sparkles,
} from "lucide-react";

type Service = {
  title: string;
  desc: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const services: Service[] = [
  {
    title: "System-Level 3D Modeling",
    desc: "Complete CAD-to-render pipeline for complex mechanical assemblies with engineering accuracy.",
    icon: Boxes,
  },
  {
    title: "Mechanical & Process Animation",
    desc: "Dynamic visualizations of moving parts, hydraulic systems, and operational workflows.",
    icon: Film,
  },
  {
    title: "Technical Explainer Visualization",
    desc: "Clear, educational content that breaks down complex systems for training and marketing.",
    icon: MessageSquare,
  },
  {
    title: "Ghost-Mode Visualization",
    desc: "Transparent internal views revealing hidden components and internal mechanisms.",
    icon: Eye,
  },
  {
    title: "3D Architectural Walkthrough",
    desc: "Step-by-step assembly sequences and production line visualizations.",
    icon: Factory,
  },
  {
    title: "AI & Sensor Logic Visualization",
    desc: "Data flow diagrams, sensor networks, and control system animations.",
    icon: Brain,
  },
  {
    title: "Industrial Lighting Accuracy",
    desc: "Photorealistic rendering with physically accurate materials and lighting setups.",
    icon: Lightbulb,
  },
  {
    title: "Visual Storytelling",
    desc: "Narrative-driven engineering content for presentations and client engagement.",
    icon: Sparkles,
  },
];

export default async function RenderingServicesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 pb-[80px] pt-[8px] text-[#0a0a0a] md:pb-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Rendering &amp; Animation
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            3D Rendering Services &amp; Industrial Animation
          </h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[16px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656] md:text-[17px]">
            From CAD data to cinematic visualization — comprehensive 3D
            rendering capabilities for engineering excellence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                  {t(item.title)}
                </h3>

                <p className="mt-3 flex-1 text-[14.5px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656]">
                  {t(item.desc)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
