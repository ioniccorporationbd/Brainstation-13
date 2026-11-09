import {
  BrainCircuit,
  CloudCog,
  ShieldCheck,
  Target,
} from "lucide-react";

type ConsultationCard = {
  title: string;
  points: string[];
  icon: React.ElementType;
};

const consultations: ConsultationCard[] = [
  {
    title: "Architecture & Infrastructure",
    points: [
      "Microservices, serverless, monolith to distributed transition",
      "Cloud-native design with AWS Well-Architected practices",
      "DevOps and Infrastructure as Code (IaC)",
    ],
    icon: CloudCog,
  },
  {
    title: "Security & Compliance",
    points: [
      "Security threat modeling",
      "ISO 27001, ISO 9001, GDPR, HIPAA, GxP, SAMD, PCI DSS, penetration testing",
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
      "AI/ML model integration and pipeline design",
      "Data lake, warehouse, and ETL/ELT strategies",
      "Predictive analytics and BI",
    ],
    icon: BrainCircuit,
  },
];

export default function TechnologyConsultingConsultationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-[108px] text-white">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-center text-[44px] font-normal leading-[1.08] tracking-[-0.02em] text-white md:text-[58px]">
          Consultations We Provide
        </h2>

        <div className="mt-[92px] grid grid-cols-1 gap-[32px] sm:grid-cols-2 xl:grid-cols-4">
          {consultations.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative min-h-[365px] overflow-hidden rounded-[8px] border border-white/0 bg-[#1a1a1a] px-[32px] py-[38px] shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-[#c91f28]/70 hover:bg-[#1a1a1a] hover:shadow-[0_28px_80px_rgba(201,31,40,0.18)]"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#c91f28]/0 blur-2xl transition-all duration-300 group-hover:bg-[#c91f28]/25" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-[190px] w-[190px] rounded-full bg-[#c91f28]/0 blur-2xl transition-all duration-300 group-hover:bg-[#c91f28]/10" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#1a1a1a] text-[#c91f28] ring-1 ring-white/10 transition-all duration-300 group-hover:bg-[#c91f28] group-hover:text-white group-hover:ring-[#c91f28]">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <span className="text-[18px] font-bold leading-none text-white/20 transition-all duration-300 group-hover:text-[#c91f28]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-10 max-w-[280px] text-[27px] font-bold leading-[1.22] tracking-[-0.02em] text-white md:text-[30px]">
                    {card.title}
                  </h3>

                  <ul className="mt-8 space-y-5">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-4 text-[17px] font-bold leading-[1.45] tracking-[-0.01em] text-white/90"
                      >
                        <span className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-full bg-white" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#c91f28] transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#c91f28]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-white/45">
        Powered by NeuralFlow
      </span>
    </section>
  );
}