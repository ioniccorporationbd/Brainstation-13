import {
  CloudCog,
  Database,
  Layers3,
  MonitorSmartphone,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

type ArchitectureCard = {
  eyebrow: string;
  title: string;
  description: string;
  logos: string[];
  icon: React.ElementType;
  variant?: "light" | "blue";
};

const architectureCards: ArchitectureCard[] = [
  {
    eyebrow: "Edge Client Layer",
    title: "Native & Web Apps",
    description:
      "Flutter App & Next JS Web Portal equipped with encrypted local SQLite storage.",
    logos: ["Flutter", "NEXT.js"],
    icon: MonitorSmartphone,
    variant: "light",
  },
  {
    eyebrow: "MSFA Core Engine",
    title: "Backend",
    description:
      "Scalable microservices handling workflow logic, validation rules, and offline sync.",
    logos: [".NET Core"],
    icon: Layers3,
    variant: "blue",
  },
  {
    eyebrow: "Enterprise Systems",
    title: "Core ERP",
    description:
      "Bi-directional integration with SAP, Oracle, IFS and HR Systems.",
    logos: ["SAP", "ORACLE", "IFS", "odoo"],
    icon: CloudCog,
    variant: "light",
  },
];

const architectureFeatures = [
  {
    title: "Secure Sync",
    icon: RefreshCcw,
  },
  {
    title: "Encrypted Storage",
    icon: ShieldCheck,
  },
  {
    title: "Centralized Data",
    icon: Database,
  },
];

export default function EnterpriseMsfaArchitectureSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[96px] text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4fa0d1]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1320px]">
        {/* Header */}
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-[22px] font-bold leading-none tracking-[-0.04em] text-[#3f93cf]">
            Enterprise Architecture
          </p>

          <h2 className="mt-7 text-[44px] font-bold leading-[1.08] tracking-[-0.065em] text-white md:text-[64px]">
            Secure. Scalable. Connected.
          </h2>

          <p className="mx-auto mt-7 max-w-[960px] text-[19px] font-bold leading-[1.55] tracking-[-0.035em] text-white/92 md:text-[22px]">
            A robust multi-tier architecture bridging offline field execution
            with your core enterprise systems.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[78px] grid grid-cols-1 gap-7 lg:grid-cols-3">
          {architectureCards.map((card, index) => {
            const Icon = card.icon;
            const isBlue = card.variant === "blue";

            return (
              <article key={card.title} className="group relative">
                <div className="mb-5 text-center text-[17px] font-bold tracking-[-0.035em] text-white">
                  {card.eyebrow}
                </div>

                <div
                  className={`relative min-h-[245px] overflow-hidden rounded-[10px] px-8 py-9 text-center shadow-[0_22px_70px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-2 ${
                    isBlue
                      ? "bg-[#4b9bca] text-white hover:bg-[#55aadd]"
                      : "bg-white text-[#11182f] hover:bg-[#f4f8fc]"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-[170px] w-[170px] rounded-full blur-2xl transition duration-300 ${
                      isBlue
                        ? "bg-white/0 group-hover:bg-white/16"
                        : "bg-[#4fa0d1]/0 group-hover:bg-[#4fa0d1]/16"
                    }`}
                  />

                  <div className="relative z-10">
                    <div className="mx-auto mb-6 flex min-h-[32px] flex-wrap items-center justify-center gap-7">
                      {card.logos.map((logo) => (
                        <span
                          key={logo}
                          className={`text-[22px] font-bold leading-none tracking-[-0.04em] ${
                            isBlue
                              ? "text-white"
                              : logo.toLowerCase().includes("sap")
                                ? "text-[#0b9bd8]"
                                : logo.toLowerCase().includes("oracle")
                                  ? "text-[#e22b2b]"
                                  : logo.toLowerCase().includes("odoo")
                                    ? "text-[#8a6b8d]"
                                    : logo.toLowerCase().includes("flutter")
                                      ? "text-[#4fa0d1]"
                                      : "text-[#050b18]"
                          }`}
                        >
                          {logo}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`mx-auto mb-5 flex h-[54px] w-[54px] items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 ${
                        isBlue
                          ? "bg-white/16 text-white"
                          : "bg-[#e8f1f6] text-[#4fa0d1]"
                      }`}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <h3
                      className={`text-[30px] font-bold leading-[1.12] tracking-[-0.06em] md:text-[34px] ${
                        isBlue ? "text-white" : "text-[#050b18]"
                      }`}
                    >
                      {card.title}
                    </h3>

                    <p
                      className={`mx-auto mt-5 max-w-[380px] text-[18px] font-medium leading-[1.55] tracking-[-0.035em] md:text-[20px] ${
                        isBlue ? "text-white/95" : "text-[#42637a]"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  <span
                    className={`absolute right-5 top-5 text-[44px] font-bold leading-none ${
                      isBlue ? "text-white/10" : "text-[#111E40]/5"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={`absolute bottom-0 left-0 h-[4px] w-0 transition-all duration-300 group-hover:w-full ${
                      isBlue ? "bg-white" : "bg-[#08a9df]"
                    }`}
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Features */}
        <div className="mx-auto mt-[62px] grid max-w-[820px] grid-cols-1 gap-5 sm:grid-cols-3">
          {architectureFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/6 px-5 py-4 text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/12"
              >
                <Icon
                  size={20}
                  strokeWidth={1.8}
                  className="text-[#4fa0d1] transition duration-300 group-hover:text-[#ffab2e]"
                />
                <span className="text-[15px] font-bold tracking-[-0.03em]">
                  {feature.title}
                </span>
              </div>
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