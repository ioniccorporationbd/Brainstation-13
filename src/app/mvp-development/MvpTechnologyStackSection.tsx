import {
  BarChart3,
  CloudCog,
  Code2,
  Database,
  Layers3,
} from "lucide-react";

type TechStackCard = {
  title: string;
  icon: React.ElementType;
  tools: string[];
};

const techStacks: TechStackCard[] = [
  {
    title: "Front-End",
    icon: Code2,
    tools: ["React", "Angular", "Vue", "Flutter"],
  },
  {
    title: "Back-End",
    icon: Layers3,
    tools: ["Node.js", ".NET Core", "Ruby on Rails", "Python"],
  },
  {
    title: "Analytics & Monitoring",
    icon: BarChart3,
    tools: ["Google Analytics", "Sentry"],
  },
  {
    title: "Cloud & DevOps",
    icon: CloudCog,
    tools: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"],
  },
  {
    title: "Databases",
    icon: Database,
    tools: ["PostgreSQL", "MongoDB", "MySQL"],
  },
];

export default function MvpTechnologyStackSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[108px] text-white">
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
            MVP Engineering Stack
          </p>

          <h2 className="text-[44px] font-bold leading-[1.08] tracking-[-0.075em] text-white md:text-[58px]">
            Our Technology Stack
          </h2>

          <p className="mx-auto mt-7 max-w-[760px] text-[18px] font-semibold leading-[1.6] tracking-[-0.035em] text-white/80 md:text-[21px]">
            We use proven frontend, backend, cloud, database, and monitoring
            technologies to build scalable MVPs that are ready for real users.
          </p>
        </div>

        <div className="mx-auto mt-[86px] grid max-w-[1120px] grid-cols-1 gap-[32px] md:grid-cols-2 xl:grid-cols-3">
          {techStacks.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative min-h-[220px] overflow-hidden rounded-[8px] border border-white/0 bg-[#223f5c] px-[34px] py-[38px] shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#4fa0d1]/70 hover:bg-[#284a6d] hover:shadow-[0_28px_80px_rgba(79,160,209,0.18)]"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#4fa0d1]/0 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/25" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-[190px] w-[190px] rounded-full bg-[#ffb22c]/0 blur-2xl transition-all duration-300 group-hover:bg-[#ffb22c]/10" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#183253] text-[#4fa0d1] ring-1 ring-white/10 transition-all duration-300 group-hover:bg-[#4fa0d1] group-hover:text-white group-hover:ring-[#4fa0d1]">
                        <Icon size={29} strokeWidth={1.8} />
                      </div>

                      <h3 className="text-[26px] font-bold leading-[1.15] tracking-[-0.055em] text-white md:text-[30px]">
                        {card.title}
                      </h3>
                    </div>

                    <span className="text-[18px] font-bold leading-none text-white/20 transition-all duration-300 group-hover:text-[#ffb22c]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {card.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-[#15587c] px-4 py-2 text-[15px] font-bold leading-none text-white ring-1 ring-white/5 transition duration-300 group-hover:bg-[#1f6f9a]"
                      >
                        {tool}
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

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-white/45">
        Powered by NeuralFlow
      </span>
    </section>
  );
}