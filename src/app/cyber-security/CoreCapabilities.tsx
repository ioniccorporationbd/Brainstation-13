"use client";

const capabilities = [
  {
    title: "Data Breach Assessment & Mitigation",
    description:
      "Immediate digital forensics, threat intelligence, and root cause analysis to contain incidents via log analysis, endpoint isolation, and remediation plans with minimal disruption.",
  },
  {
    title: "Penetration Testing",
    description:
      "Black-box, white-box, or grey-box simulations using Burp Suite and Metasploit to uncover exploitable weaknesses in networks, web apps, and Android endpoints against OWASP Top 10.",
  },
  {
    title: "API Security Testing",
    description:
      "Validate RESTful endpoints against OWASP API Top 10 risks including OAuth/JWT auth flaws, rate limiting, fuzzing, and injection tests for secure third-party integrations.",
  },
  {
    title: "Cloud Security Assessment & Mitigation",
    description:
      "Audit AWS, Azure, GCP for IAM misconfigurations, S3 encryption gaps, WAF rules, and network segmentation using cloud-native frameworks like CSA CCM.",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f172d] px-6 py-[104px] text-white">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="mb-[84px] text-center text-[44px] font-normal leading-none tracking-[-2.2px] text-white md:text-[50px]">
          Core Capabilities
        </h2>

        <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="min-h-[376px] rounded-[8px] bg-[#223e5a] px-[32px] py-[42px]"
            >
              <h3 className="mb-[24px] max-w-[220px] text-[25px] font-bold leading-[1.45] tracking-[-1.2px] text-white">
                {item.title}
              </h3>

              <p className="max-w-[238px] text-[17px] font-normal leading-[1.43] tracking-[-0.35px] text-white">
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