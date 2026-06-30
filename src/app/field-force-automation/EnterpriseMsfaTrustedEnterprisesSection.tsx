import {
  BarChart3,
  Building2,
  Layers3,
  PackageCheck,
  Users,
  Zap,
} from "lucide-react";

type EnterpriseCard = {
  company: string;
  logo: string;
  metric: string;
  description: string;
};

type StatCard = {
  value: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
};

const enterprises: EnterpriseCard[] = [
  {
    company: "General Pharmaceuticals Ltd.",
    logo: "https://logo.clearbit.com/generalpharma.com.bd",
    metric: "2,500+ USERS",
    description:
      "Optimized last-mile journey planning across a complex multi-tier hierarchy, significantly reducing travel expenditures.",
  },
  {
    company: "Popular Pharmaceuticals",
    logo: "https://logo.clearbit.com/popular-pharma.com",
    metric: "30% YEARLY GROWTH",
    description:
      "Supported massive 30% annual growth with zero-downtime scalability for 3,000+ users during high-volume peak ordering windows.",
  },
  {
    company: "Berger Paints",
    logo: "https://logo.clearbit.com/bergerbd.com",
    metric: "2,500+ USERS",
    description:
      "Empowered field force with MSFA, bespoke e-Learning, and communication modules.",
  },
  {
    company: "BATA",
    logo: "https://logo.clearbit.com/bata.com",
    metric: "100% TRANSPARENCY",
    description:
      "Deployed offline-first order system, ensuring complete visibility across remote rural dealer networks.",
  },
  {
    company: "Beacon Pharmaceuticals",
    logo: "https://logo.clearbit.com/beaconpharma.com.bd",
    metric: "30% YEARLY GROWTH",
    description:
      "Consolidated multiple disconnected business units and 3,000+ users into a single, unified MSFA ecosystem.",
  },
  {
    company: "Sharif Pharmaceuticals",
    logo: "https://logo.clearbit.com/sharifpharma.com.bd",
    metric: "AGILE ENTRY",
    description:
      "Enabled a greenfield market entry with a fully paperless sales cycle seamlessly integrated with SAP.",
  },
];

const stats: StatCard[] = [
  {
    value: "12k-15k",
    title: "Active Users",
    subtitle: "Field Personnel",
    icon: Users,
  },
  {
    value: "Multi-Tier",
    title: "Sales Hierarchy",
    subtitle: "Complex Structures",
    icon: Layers3,
  },
  {
    value: "5,000+",
    title: "Peak Orders",
    subtitle: "Processed per Hour",
    icon: PackageCheck,
  },
  {
    value: "Unified",
    title: "Business Units",
    subtitle: "Single Ecosystem",
    icon: Building2,
  },
];

export default function EnterpriseMsfaTrustedEnterprisesSection() {
  return (
    <section className="relative overflow-hidden border-y-[6px] border-[#111E40] bg-white px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="max-w-[940px]">
          <p className="text-[20px] font-medium leading-none tracking-[-0.035em] text-[#3f93cf]">
            Proven in Production
          </p>

          <h2 className="mt-7 text-[44px] font-bold leading-[1.08] tracking-[-0.065em] text-[#050b18] md:text-[60px]">
            Trusted By Leading Enterprises
          </h2>

          <p className="mt-7 max-w-[760px] text-[18px] font-medium leading-[1.6] tracking-[-0.035em] text-[#42637a] md:text-[20px]">
            Enterprise-grade field execution trusted by large sales teams,
            pharmaceutical brands, retail networks, and multi-layer distribution
            organizations.
          </p>
        </div>

        {/* Enterprise Cards */}
        <div className="mt-[64px] grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {enterprises.map((item, index) => (
            <article
              key={item.company}
              className="group relative min-h-[245px] overflow-hidden rounded-[10px] border border-[#dce8f2] bg-white px-8 py-8 shadow-[0_14px_38px_rgba(17,30,64,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b7dff4] hover:shadow-[0_28px_80px_rgba(17,30,64,0.13)]"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#4fa0d1]/0 blur-2xl transition-all duration-300 group-hover:bg-[#4fa0d1]/18" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-[180px] w-[180px] rounded-full bg-[#ffab2e]/0 blur-2xl transition-all duration-300 group-hover:bg-[#ffab2e]/10" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-[42px] max-w-[180px] items-center">
                    <img
                      src={item.logo}
                      alt={item.company}
                      loading="lazy"
                      className="max-h-[38px] max-w-[165px] object-contain"
                    />
                  </div>

                  <span className="text-right text-[15px] font-bold uppercase tracking-[-0.02em] text-[#3f93cf]">
                    {item.metric}
                  </span>
                </div>

                <h3 className="mt-8 text-[27px] font-bold leading-[1.15] tracking-[-0.055em] text-[#050b18] md:text-[30px]">
                  {item.company}
                </h3>

                <p className="mt-5 text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[18px]">
                  {item.description}
                </p>
              </div>

              <span className="absolute bottom-5 right-6 text-[46px] font-bold leading-none text-[#111E40]/[0.035] transition duration-300 group-hover:text-[#4fa0d1]/10">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#08a9df] transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-[70px] grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[10px] border border-[#dce8f2] bg-white px-7 py-8 text-center shadow-[0_14px_38px_rgba(17,30,64,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b7dff4] hover:shadow-[0_28px_80px_rgba(17,30,64,0.13)]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-[140px] w-[140px] rounded-full bg-[#4fa0d1]/0 blur-2xl transition duration-300 group-hover:bg-[#4fa0d1]/18" />

                <div className="mx-auto flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#e8f1f6] text-[#4fa0d1] transition-all duration-300 group-hover:bg-[#08a9df] group-hover:text-white">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <p className="mt-5 text-[30px] font-bold leading-none tracking-[-0.055em] text-[#3f93cf] md:text-[34px]">
                  {item.value}
                </p>

                <h3 className="mt-4 text-[23px] font-bold leading-[1.15] tracking-[-0.055em] text-[#050b18] md:text-[26px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[16px] font-medium leading-none tracking-[-0.03em] text-[#42637a]">
                  {item.subtitle}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-[68px] overflow-hidden rounded-[22px] bg-[#111E40] px-8 py-8 text-white shadow-[0_24px_70px_rgba(17,30,64,0.18)] md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[15px] font-bold uppercase tracking-[0.14em] text-[#4fa0d1]">
                Enterprise Ready
              </p>

              <h3 className="mt-3 text-[28px] font-bold leading-[1.18] tracking-[-0.06em] md:text-[38px]">
                Built for high-volume, multi-territory field operations.
              </h3>
            </div>

            <div className="flex items-center gap-3 rounded-full bg-white/8 px-5 py-4">
              <BarChart3 size={22} className="text-[#ffab2e]" />
              <span className="text-[16px] font-bold">Live Performance Visibility</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}