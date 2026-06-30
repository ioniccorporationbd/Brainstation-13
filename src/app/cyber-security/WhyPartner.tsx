"use client";

const partners = [
  {
    title: "Proven Track Record",
    description:
      "50+ cybersecurity engagements in fintech, healthcare, and retail, including red teaming and incident response for zero-day exploits.",
  },
  {
    title: "Advanced Expertise",
    description:
      "Certified ethical hackers (CEH, OSCP), CISSP professionals, and threat intelligence specialists proficient in Burp Suite, Metasploit, and Nmap.",
  },
  {
    title: "Enterprise Orchestration",
    description:
      "Integrated CI/CD security scanning and DevSecOps pipelines in every assessment for seamless vulnerability management.",
  },
  {
    title: "End-to-End Support",
    description:
      "From breach forensics to managed security services, awareness training, and quarterly reviews with KPI dashboards.",
  },
];

export default function WhyPartner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f172d] px-6 py-[108px] text-white">
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto mb-[88px] max-w-[620px] text-center">
          <h2 className="text-[42px] font-normal leading-[1.28] tracking-[-2.4px] text-white md:text-[52px]">
            Why Partner with Brain Station 23?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2 xl:grid-cols-4">
          {partners.map((item) => (
            <div
              key={item.title}
              className="min-h-[316px] rounded-[8px] bg-[#223e5a] px-[32px] py-[44px] transition duration-300 hover:-translate-y-2 hover:bg-[#284a6b] hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
            >
              <h3 className="mb-[25px] max-w-[230px] text-[25px] font-bold leading-[1.35] tracking-[-1.2px] text-white">
                {item.title}
              </h3>

              <p className="max-w-[245px] text-[17px] font-normal leading-[1.45] tracking-[-0.35px] text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating chat button */}
      <button
        aria-label="Chat"
        className="fixed bottom-6 right-6 z-50 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
      >
        <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#19aee7] text-[18px] text-white">
          ●
        </span>
      </button>
    </section>
  );
}