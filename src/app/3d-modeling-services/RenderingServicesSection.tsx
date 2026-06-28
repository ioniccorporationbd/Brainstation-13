import {
  Boxes,
  Film,
  MessageSquare,
  Eye,
  Factory,
  Brain,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const services = [
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

export default function RenderingServicesSection() {
  return (
    <section className="bg-white px-4 py-24 text-[#090d24]">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-medium leading-tight md:text-5xl">
            3D Rendering Services & <br />
            Industrial Animation
          </h2>

          <p className="mt-6 text-lg leading-7 text-[#4f778b]">
            From CAD data to cinematic visualization — comprehensive 3D modeling
            services for engineering excellence.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`px-8 ${
                  index % 3 !== 0 ? "lg:border-l lg:border-[#e1edf3]" : ""
                }`}
              >
                <Icon className="h-10 w-10 text-[#459bd0]" />

                <h3 className="mt-8 max-w-xs text-3xl font-medium leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-sm text-base leading-7 text-[#4f778b]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-y-16 md:grid-cols-2">
          {services.slice(6).map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`px-8 ${
                  index === 1 ? "md:border-l md:border-[#e1edf3]" : ""
                }`}
              >
                <Icon className="h-10 w-10 text-[#459bd0]" />

                <h3 className="mt-8 max-w-xs text-3xl font-medium leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-sm text-base leading-7 text-[#4f778b]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}