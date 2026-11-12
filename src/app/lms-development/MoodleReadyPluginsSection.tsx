"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import Image from "next/image";

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
      "AI-enabled Moodle proctoring for high-stakes exams. Secure, scalable exam proctoring trusted by universities and enterprises — without replacing your existing Moodle LMS.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Alap Scheduler",
    title: "Alap Scheduler",
    description:
      "Smart scheduling plugin for Moodle. Manage meetings, consultations, classes and booking slots with a clean and simple scheduling experience.",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Interview Plugin",
    title: "Interview Plugin",
    description:
      "Conduct structured interviews directly from Moodle. Manage candidates, interview schedules, evaluation notes and assessment records in one place.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Interactive PDF",
    title: "Interactive PDF",
    description:
      "Transform static PDF materials into interactive learning resources with annotations, guided reading, embedded activities and learner engagement tracking.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Coversheet for Moodle",
    title: "Coversheet for Moodle",
    description:
      "Generate professional assignment coversheets automatically inside Moodle with student details, course information, declarations and submission metadata.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Brightcove Player",
    title: "Brightcove Player",
    description:
      "Seamlessly embed Brightcove videos into Moodle courses with responsive playback, secure delivery and smooth learning content integration.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Atto QR code",
    title: "Atto QR code",
    description:
      "Create QR codes directly from the Moodle Atto editor. Quickly share links, course pages, resources and activity access points.",
    image:
      "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Atto Share plugin",
    title: "Atto Share plugin",
    description:
      "Enable quick content sharing from Moodle’s Atto editor. Share learning resources, links, documents and course materials with ease.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Payment Gateway Integrations",
    title: "Payment Gateway Integrations",
    description:
      "Connect Moodle with secure online payment gateways for course enrollment, paid certifications, institutional training and subscription-based learning.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function MoodleReadyPluginsSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState<number>(0);
  const plugin = plugins[active];

  return (
    <section className="w-full bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Extensions")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Moodle Ready Plugins")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("Plugins we build, integrate and maintain for Moodle sites.")}</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {plugins.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              className={`rounded-full border px-4 py-2.5 text-[13.5px] font-bold transition-colors duration-300 ${
                active === index
                  ? "border-[#c91f28] bg-[#c91f28] text-white"
                  : "border-[#ececec] bg-white text-[#565656] hover:border-[#c91f28] hover:text-[#c91f28]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#ececec] bg-white p-6 md:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
            <div>
              <h3 className="text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0a0a0a] md:text-[32px]">
                {t(plugin.title)}
              </h3>

              <p className="mt-4 max-w-[560px] text-[15.5px] font-medium leading-[1.7] text-[#565656] md:text-[17px]">
                {t(plugin.description)}
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#ececec] bg-[#f7f7f7]">
              <Image
                key={plugin.image}
                src={plugin.image}
                alt={plugin.title}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
