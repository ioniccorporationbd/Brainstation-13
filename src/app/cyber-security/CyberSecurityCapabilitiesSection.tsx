import Link from "next/link";
import { ArrowRight, Bug, Cloud, Code2, ShieldAlert } from "lucide-react";

const capabilities = [
  {
    title: "Data Breach Assessment & Mitigation",
    description:
      "Immediate digital forensics, threat intelligence, and root cause analysis to contain incidents via log analysis, endpoint isolation, and remediation plans with minimal disruption.",
    icon: ShieldAlert,
  },
  {
    title: "Penetration Testing",
    description:
      "Black-box, white-box, or grey-box simulations using Burp Suite and Metasploit to uncover exploitable weaknesses in networks, web apps, and Android endpoints against OWASP Top 10.",
    icon: Bug,
  },
  {
    title: "API Security Testing",
    description:
      "Validate RESTful endpoints against OWASP API Top 10 risks including OAuth/JWT auth flaws, rate limiting, fuzzing, and injection tests for secure third-party integrations.",
    icon: Code2,
  },
  {
    title: "Cloud Security Assessment & Mitigation",
    description:
      "Audit AWS, Azure, GCP for IAM misconfigurations, S3 encryption gaps, WAF rules and network segmentation using cloud-native frameworks like CSA CCM.",
    icon: Cloud,
  },
];

export default function CyberSecurityCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[680px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            What we do
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            Core capabilities
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
            Four services that cover the full cycle: find it, prove it, fix it
            and keep it closed.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50 sm:min-h-[248px] sm:p-6"
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

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-xl border border-[#ececec] bg-[#fafafa] px-7 py-6 sm:flex-row sm:items-center md:px-9 md:py-7">
          <div>
            <p className="text-[17px] font-bold text-black md:text-[19px]">
              Not sure where your exposure is?
            </p>
            <p className="mt-1.5 text-[14.5px] text-[#55585e]">
              Start with a scoped assessment and a prioritised findings report.
            </p>
          </div>

          <Link
            href="/schedule-a-call"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3 text-[14.5px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
          >
            Schedule a Call
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
