"use client";

import { useState } from "react";

type PluginItem = {
  name: string;
  title: string;
  description: string;
  image: string;
};

const plugins: PluginItem[] = [
  {
    name: "Proctoring Pro",
    title: "Proctoring Pro",
    description:
      "AI-Enabled Moodle Proctoring for High-Stakes Exams. Secure, scalable exam proctoring trusted by universities and enterprises—without replacing your existing Moodle LMS.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Alap Scheduler",
    title: "Alap Scheduler",
    description:
      "Smart scheduling plugin for Moodle. Manage meetings, consultations, classes, and booking slots with a clean and simple scheduling experience.",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Interview Plugin",
    title: "Interview Plugin",
    description:
      "Conduct structured interviews directly from Moodle. Manage candidates, interview schedules, evaluation notes, and assessment records in one place.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Interactive PDF",
    title: "Interactive PDF",
    description:
      "Transform static PDF materials into interactive learning resources with annotations, guided reading, embedded activities, and learner engagement tracking.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Coversheet for Moodle",
    title: "Coversheet for Moodle",
    description:
      "Generate professional assignment coversheets automatically inside Moodle with student details, course information, declarations, and submission metadata.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Brightcove Player",
    title: "Brightcove Player",
    description:
      "Seamlessly embed Brightcove videos into Moodle courses with responsive playback, secure delivery, and smooth learning content integration.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Atto QR code",
    title: "Atto QR code",
    description:
      "Create QR codes directly from the Moodle Atto editor. Quickly share links, course pages, resources, and activity access points.",
    image:
      "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Atto Share plugin",
    title: "Atto Share plugin",
    description:
      "Enable quick content sharing from Moodle’s Atto editor. Share learning resources, links, documents, and course materials with ease.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Payment Gateway Integrations",
    title: "Payment Gateway Integrations",
    description:
      "Connect Moodle with secure online payment gateways for course enrollment, paid certifications, institutional training, and subscription-based learning.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function MoodleReadyPluginsSection() {
  const [active, setActive] = useState<number>(0);
  const plugin = plugins[active];

  return (
    <section className="relative bg-white px-6 py-[34px] text-[#071F49]">
      <div className="mx-auto max-w-[1660px]">
        <h2 className="text-center text-[46px] font-normal leading-none tracking-[-0.055em] text-[#071F49]">
          Moodle Ready Plugins
        </h2>

        <div className="mx-auto mt-[92px] max-w-fit rounded-full bg-white p-3 shadow-[0_0_18px_rgba(0,0,0,0.35)]">
          <div className="flex flex-wrap items-center justify-center gap-3 xl:flex-nowrap">
            {plugins.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-full px-4 py-2 text-[15px] font-semibold transition-all duration-300 ${
                  active === index
                    ? "bg-[#5B2BE8] text-white"
                    : "bg-transparent text-[#071F49] hover:bg-[#f2f4f8]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-[31px] max-w-[1190px] rounded-[10px] bg-[#f5f8fc] px-[60px] py-[60px]">
          <div className="grid min-h-[350px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <h3 className="mb-6 text-[38px] font-normal leading-tight tracking-[-0.045em] text-[#071F49]">
                {plugin.title}
              </h3>

              <p className="max-w-[560px] text-[19px] font-normal leading-[1.45] tracking-[-0.02em] text-[#071F49]">
                {plugin.description}
              </p>
            </div>

            <div className="flex justify-end">
              <div className="h-[348px] w-full max-w-[510px] overflow-hidden rounded-[8px] bg-gray-200">
                <img
                  src={plugin.image}
                  alt={plugin.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}