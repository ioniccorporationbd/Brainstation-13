import { CloudCog, MonitorCheck, ShieldCheck } from "lucide-react";

type GrowthSecurityItem = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  bullets: {
    bold: string;
    text: string;
  }[];
};

const growthSecurityItems: GrowthSecurityItem[] = [
  {
    title: "Cloud-Native & Scalable",
    subtitle: "Scale wallet services faster with resilient cloud architecture.",
    icon: CloudCog,
    bullets: [
      {
        bold: "Microservices Architecture",
        text: "Independently scalable Spring Boot services for high availability and efficient resource usage.",
      },
      {
        bold: "Kubernetes Orchestration",
        text: "Automated deployment, scaling, and management of containerized applications.",
      },
      {
        bold: "High-Performance Data Layer",
        text: "Redis caching and PostgreSQL/Couchbase persistence for fast, reliable daily transactions.",
      },
    ],
  },
  {
    title: "Full Stack Observability",
    subtitle: "Monitor every service, transaction flow, and system event clearly.",
    icon: MonitorCheck,
    bullets: [
      {
        bold: "Real-Time Monitoring",
        text: "Prometheus metrics and Grafana dashboards provide live system health and performance visibility.",
      },
      {
        bold: "Unified Logging",
        text: "Aggregate and query service logs through Loki for faster debugging and operational insights.",
      },
      {
        bold: "Operational Alerts",
        text: "Detect issues early with alerting, event tracking, and service-level visibility.",
      },
    ],
  },
  {
    title: "Enterprise-Grade Security",
    subtitle: "Protect users, APIs, transactions, and financial data end-to-end.",
    icon: ShieldCheck,
    bullets: [
      {
        bold: "Proactive Threat Management",
        text: "Secure development lifecycle aligned with OWASP Top 10, SANS 25, and PCI-DSS standards.",
      },
      {
        bold: "Continuous Testing",
        text: "Automated security scanning with OWASP ZAP and SonarQube to detect risks early.",
      },
      {
        bold: "API Security",
        text: "Spring Cloud Gateway ensures secure, reliable, and discoverable service-to-service communication.",
      },
    ],
  },
];

export default function Wallet23GrowthSecuritySection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[110px] text-[#07112b]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-[180px] top-[120px] h-[460px] w-[460px] rounded-full bg-[#0aa7df]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-[220px] bottom-[80px] h-[520px] w-[520px] rounded-full bg-[#111E40]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <span className="inline-flex rounded-full bg-white px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#079ed8] shadow-[0_12px_30px_rgba(17,30,64,0.06)]">
            Growth & Security
          </span>

          <h2 className="mt-6 text-[42px] font-black leading-[1.06] tracking-[-0.075em] text-[#07112b] md:text-[58px] lg:text-[64px]">
            Engineered for Growth
            <br />
            &amp; Security
          </h2>

          <p className="mx-auto mt-6 max-w-[660px] text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[19px]">
            Built with scalable architecture, real-time visibility, and
            enterprise-grade protection to support secure wallet growth.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[72px] grid grid-cols-1 gap-7 lg:grid-cols-3">
          {growthSecurityItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[28px] border border-[#dce8f2] bg-white p-8 shadow-[0_20px_60px_rgba(17,30,64,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#0aa7df]/60 hover:shadow-[0_34px_90px_rgba(17,30,64,0.14)]"
              >
                {/* Top gradient line */}
                <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#0aa7df] via-[#54c8ee] to-[#ffab2e] opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Corner glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#0aa7df]/10 blur-[45px] transition duration-300 group-hover:bg-[#0aa7df]/20" />

                <div className="relative z-10">
                  <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[22px] bg-[#eaf6fc] text-[#08a7df] transition duration-300 group-hover:bg-[#08a7df] group-hover:text-white">
                    <Icon size={38} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-9 text-[30px] font-black leading-[1.08] tracking-[-0.07em] text-[#07112b] md:text-[36px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] font-medium leading-[1.5] tracking-[-0.025em] text-[#42637a]">
                    {item.subtitle}
                  </p>

                  <div className="mt-7 h-px w-full bg-[#e3edf5]" />

                  <ul className="mt-7 space-y-5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet.bold} className="flex gap-4">
                        <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[#08a7df]" />

                        <p className="text-[14px] font-medium leading-[1.55] tracking-[-0.025em] text-[#31475c] md:text-[15px]">
                          <span className="font-black text-[#07112b]">
                            {bullet.bold}
                          </span>
                          <span className="mx-1 text-[#7b8b99]">—</span>
                          {bullet.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom small highlight strip */}
        <div className="mt-10 rounded-[24px] border border-[#dce8f2] bg-white px-7 py-6 shadow-[0_18px_55px_rgba(17,30,64,0.06)]">
          <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
            <div>
              <h4 className="text-[28px] font-black tracking-[-0.05em] text-[#08a7df]">
                99.9%
              </h4>
              <p className="mt-1 text-[14px] font-semibold text-[#42637a]">
                High availability target
              </p>
            </div>

            <div>
              <h4 className="text-[28px] font-black tracking-[-0.05em] text-[#08a7df]">
                API-first
              </h4>
              <p className="mt-1 text-[14px] font-semibold text-[#42637a]">
                Secure integration layer
              </p>
            </div>

            <div>
              <h4 className="text-[28px] font-black tracking-[-0.05em] text-[#08a7df]">
                PCI-ready
              </h4>
              <p className="mt-1 text-[14px] font-semibold text-[#42637a]">
                Compliance-focused foundation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}