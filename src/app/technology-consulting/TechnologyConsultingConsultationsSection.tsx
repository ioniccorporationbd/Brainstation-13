import { BrainCircuit, CloudCog, ShieldCheck, Target } from "lucide-react";
import { getTranslator } from "@/i18n/server";

type ConsultationCard = {
  title: string;
  points: string[];
  icon: React.ElementType;
};

const consultations: ConsultationCard[] = [
  {
    title: "Architecture & Infrastructure",
    points: [
      "Microservices and monolith-to-distributed transition",
      "Cloud-native design with AWS Well-Architected practices",
      "DevOps and Infrastructure as Code",
    ],
    icon: CloudCog,
  },
  {
    title: "Security & Compliance",
    points: [
      "Security threat modeling",
      "ISO 27001, GDPR, HIPAA, PCI DSS, penetration testing",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Software Product Consulting",
    points: [
      "MVP design and scoping",
      "Scalability and performance optimization",
    ],
    icon: Target,
  },
  {
    title: "AI & Data Consulting",
    points: [
      "AI/ML integration and pipeline design",
      "Data lake, warehouse, and ETL/ELT strategies",
      "Predictive analytics and BI",
    ],
    icon: BrainCircuit,
  },
];

export default async function TechnologyConsultingConsultationsSection() {
  const { t } = await getTranslator();
  return (
    <section className="bg-white py-[52px] text-[#0a0a0a] md:py-[104px]">
      <div className="brand-container">
        {/* Heading */}
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("What We Cover")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[46px] lg:text-[50px]">{t("Consultations We Provide")}</h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[15px] font-medium leading-[1.6] tracking-[-0.01em] text-[#52525B] md:text-[15px]">{t("From architecture to AI, we cover the technical decisions that shape how your business grows.")}</p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {consultations.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-7 transition-colors duration-300 hover:border-[#c91f28]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold leading-[1.25] tracking-[-0.015em] text-[#0a0a0a]">
                  {t(card.title)}
                </h3>

                <ul className="mt-3 space-y-3">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-[14px] font-medium leading-[1.5] tracking-[-0.01em] text-[#52525B]"
                    >
                      <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#c91f28]" />
                      <span>{t(point)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
