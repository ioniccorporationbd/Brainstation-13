import { Layers, Radar, ShieldCheck, Wrench } from "lucide-react";

const partners = [
  {
    title: "Proven Track Record",
    description:
      "Security engagements across fintech, healthcare, and retail, including red teaming and incident response for zero-day exploits.",
    icon: ShieldCheck,
  },
  {
    title: "Advanced Expertise",
    description:
      "Threat intelligence specialists and security engineers proficient in Burp Suite, Metasploit, and Nmap.",
    icon: Radar,
  },
  {
    title: "Enterprise Orchestration",
    description:
      "Integrated CI/CD security scanning and DevSecOps pipelines in every assessment for seamless vulnerability management.",
    icon: Layers,
  },
  {
    title: "End-to-End Support",
    description:
      "From breach forensics to managed security services, awareness training, and quarterly reviews with KPI dashboards.",
    icon: Wrench,
  },
];

export default function CyberSecurityPartnerSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Why us
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            Why partner with Magnetic Solution Limited?
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50 sm:p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={21} />
              </span>

              <h3 className="mt-5 text-[16.5px] font-semibold leading-[1.3] text-black">
                {item.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.65] text-[#55585e]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
