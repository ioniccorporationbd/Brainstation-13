import { CheckCircle2 } from "lucide-react";
import { getTranslator } from "@/i18n/server";

export default async function ManagedServicesIntroSection() {
  const { t } = await getTranslator();
  const points = [
    "Accelerate delivery while reducing internal burden",
    "Avoid the complexity of managing technical teams",
    "Scale development and operations efficiently",
    "Ensure quality and compliance from the ground up",
  ];

  return (
    <section className="bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="max-w-[720px] text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("What Are Managed Services?")}</h2>

        <p className="mt-6 max-w-[760px] text-[17px] font-medium leading-[1.6] tracking-[-0.01em] text-[#565656] md:text-[18px]">{t("Managed Services offer a fully managed, outcome-driven software delivery model. We provide a dedicated team of project managers, developers, QA engineers, DevOps, and business analysts, ready to own the full software lifecycle from day one.")}</p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2
                size={22}
                strokeWidth={2}
                className="mt-[1px] shrink-0 text-[#c91f28]"
              />
              <span className="text-[16px] font-semibold leading-[1.45] tracking-[-0.01em] text-[#0a0a0a] md:text-[17px]">
                {t(point)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
