import { Award, BrainCircuit, Headphones, ShieldCheck } from "lucide-react";
import { getTranslator } from "@/i18n/server";

type PartnerCard = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const partnerCards: PartnerCard[] = [
  {
    title: "Proven Track Record",
    description:
      "Proven digital transformation delivery across finance, healthcare, manufacturing, and retail.",
    icon: Award,
  },
  {
    title: "Advanced Expertise",
    description:
      "Certified AI/ML engineers, RPA developers, architects, and process consultants.",
    icon: BrainCircuit,
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "ISO 27001, ISO 9001, GDPR, HIPAA, GxP, SAMD, and PCI DSS baked into every engagement.",
    icon: ShieldCheck,
  },
  {
    title: "End-to-End Support",
    description:
      "From advisory and POC to full development, deployment, and managed services.",
    icon: Headphones,
  },
];

export default async function DigitalTransformationPartnerSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[96px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[1160px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("The Magnetic Advantage")}</p>

          <h2 className="text-[27px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] sm:text-[34px] lg:text-[38px]">{t("Why Partner With Magnetic Solution Limited")}</h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">{t("A partner that combines deep engineering expertise with enterprise-grade security and end-to-end accountability.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partnerCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[18px] font-semibold leading-[1.25] tracking-[-0.015em] text-[#0a0a0a]">
                  {t(card.title)}
                </h3>

                <p className="mt-2 text-[14px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
                  {t(card.description)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
