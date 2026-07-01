import {
  Fingerprint,
  ShieldAlert,
  LockKeyhole,
  ScrollText,
  ShieldCheck,
  Eye,
} from "lucide-react";

type SecurityItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const securityItems: SecurityItem[] = [
  {
    title: "KYC / AML",
    description:
      "Identity verification, sanctions screening, and ongoing monitoring to keep every wallet compliant.",
    icon: Fingerprint,
  },
  {
    title: "Fraud Monitoring",
    description:
      "Real-time anomaly detection with risk scores, alerts, and suspicious activity tracking.",
    icon: ShieldAlert,
  },
  {
    title: "Data Protection",
    description:
      "Encryption at rest and in transit, granular access controls, secure storage, and audit logs.",
    icon: LockKeyhole,
  },
  {
    title: "Operational Governance",
    description:
      "RBAC, policy enforcement, approval workflows, and separation of duties for hardened operations.",
    icon: ScrollText,
  },
  {
    title: "Compliance Ready",
    description:
      "Built with PCI-DSS, AML, KYC, and secure banking workflow requirements in mind from day one.",
    icon: ShieldCheck,
  },
  {
    title: "Full Visibility",
    description:
      "Admin dashboards, monitoring, audit trails, transaction history, and reporting for complete control.",
    icon: Eye,
  },
];

export default function Wallet23SecurityComplianceSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[110px] text-[#07112b]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-[180px] top-[90px] h-[480px] w-[480px] rounded-full bg-[#08a7df]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-[220px] bottom-[80px] h-[520px] w-[520px] rounded-full bg-[#111E40]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex rounded-full bg-white px-5 py-2 text-[14px] font-bold tracking-[-0.02em] text-[#079ed8] shadow-[0_12px_30px_rgba(17,30,64,0.06)]">
            Wallet Protection
          </span>

          <h2 className="mt-6 text-[42px] font-black leading-[1.06] tracking-[-0.075em] text-[#07112b] md:text-[58px] lg:text-[64px]">
            Security &amp; Compliance
          </h2>

          <p className="mx-auto mt-6 max-w-[640px] text-[17px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[19px]">
            Enterprise-grade controls to protect users, transactions, data, and
            operational workflows across your wallet ecosystem.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[72px] grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {securityItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative min-h-[280px] overflow-hidden rounded-[26px] bg-[#111E40] p-8 text-white shadow-[0_24px_70px_rgba(17,30,64,0.14)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_34px_95px_rgba(17,30,64,0.24)]"
              >
                {/* Top shine line */}
                <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#08a7df] via-[#53c8ee] to-[#ffab2e] opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Circle decoration */}
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-white/10" />
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/10" />

                <div className="relative z-10">
                  <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-white/8 text-[#54c8ee] transition duration-300 group-hover:bg-[#08a7df] group-hover:text-white">
                    <Icon size={34} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-10 max-w-[320px] text-[28px] font-black leading-[1.1] tracking-[-0.06em] text-white md:text-[32px]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-[330px] text-[15px] font-medium leading-[1.55] tracking-[-0.025em] text-white/78 md:text-[16px]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}