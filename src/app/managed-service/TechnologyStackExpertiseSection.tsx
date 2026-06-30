import {
  BrainCircuit,
  CloudCog,
  Database,
  Laptop,
  Layers3,
  ShieldCheck,
  ServerCog,
} from "lucide-react";

type StackCard = {
  title: string;
  icon: React.ElementType;
  tags: string[];
};

const stackCards: StackCard[] = [
  {
    title: "Front-End & Mobile",
    icon: Laptop,
    tags: ["React", "Angular", "Vue", "Flutter", "iOS", "Android"],
  },
  {
    title: "Back-End & APIs",
    icon: ServerCog,
    tags: ["Node.js", ".NET", "Java", "Python", "Go"],
  },
  {
    title: "Platforms",
    icon: Layers3,
    tags: ["AEM", "Salesforce", "Odoo", "SAP", "NopCommerce", "Moodle", "Low Code"],
  },
  {
    title: "Cloud & DevOps",
    icon: CloudCog,
    tags: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
  },
  {
    title: "Data & AI/ML",
    icon: Database,
    tags: ["Python", "R", "Power BI", "SAP", "NLP", "TensorFlow"],
  },
  {
    title: "Security & Compliance",
    icon: ShieldCheck,
    tags: ["ISO 27001", "ISO 9001", "GDPR", "HIPAA", "GxP", "SAMD", "PCI DSS"],
  },
  {
    title: "Platform Partnerships",
    icon: BrainCircuit,
    tags: ["AWS", "Microsoft", "Google", "Adobe", "Salesforce", "NopCommerce"],
  },
];

export default function TechnologyStackExpertiseSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[96px] text-white">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-center text-[40px] font-normal leading-[1.1] tracking-[-0.07em] text-white md:text-[52px]">
          Our Technology Stack &amp; Expertise
        </h2>

        <div className="mt-[82px] grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
          {stackCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative min-h-[185px] overflow-hidden rounded-[8px] border border-white/0 bg-[#223f5c] px-[32px] py-[34px] shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#4fa0d1]/70 hover:bg-[#284a6d] hover:shadow-[0_28px_80px_rgba(79,160,209,0.16)]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#4fa0d1]/0 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/25" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-[190px] w-[190px] rounded-full bg-[#ffb22c]/0 blur-2xl transition-all duration-300 group-hover:bg-[#ffb22c]/10" />

                <div className="relative z-10">
                  <div className="flex items-center gap-5">
                    <Icon
                      size={36}
                      strokeWidth={1.7}
                      className="text-[#4fa0d1] transition-all duration-300 group-hover:scale-110 group-hover:text-[#7dd3fc]"
                    />

                    <h3 className="text-[25px] font-bold leading-none tracking-[-0.055em] text-white md:text-[28px]">
                      {card.title}
                    </h3>
                  </div>

                  <div className="mt-[28px] flex flex-wrap gap-3">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#13527a] px-4 py-2 text-[14px] font-bold leading-none text-white transition-all duration-300 group-hover:bg-[#1b6b9e]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#4fa0d1] transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
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