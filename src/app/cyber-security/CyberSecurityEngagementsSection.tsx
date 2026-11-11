import Link from "next/link";
import { ArrowRight, Cloud, Code2, Siren } from "lucide-react";

const engagements = [
  {
    tag: "Cloud Security",
    title: "Cloud Migration Security",
    description:
      "Secured an AWS deployment ahead of launch, identifying IAM misconfigurations and S3 exposure risks through WAF hardening and least-privilege audits.",
    icon: Cloud,
  },
  {
    tag: "API Testing",
    title: "API Penetration Testing",
    description:
      "Flagged BOLA flaws in RESTful endpoints, closing the data-scraping path before launch through validation and fuzzing tests.",
    icon: Code2,
  },
  {
    tag: "Incident Response",
    title: "Breach Assessment & Mitigation",
    description:
      "Supported forensic investigation, root-cause analysis, and remediation planning to reduce dwell time and restore secure business operations.",
    icon: Siren,
  },
];

export default function CyberSecurityEngagementsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[700px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            In practice
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">
            Engagements
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e]">
            Representative cloud, API and incident response work &mdash; the
            methods we apply and the outcomes they produce.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {engagements.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50 md:p-7"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <item.icon size={21} />
              </span>

              <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">
                {item.tag}
              </p>
              <h3 className="mt-2 text-[18px] font-bold leading-[1.25] tracking-[-0.01em] text-black md:text-[19px]">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-[14.5px] leading-[1.7] text-[#55585e]">
                {item.description}
              </p>

              <Link
                href="/schedule-a-call"
                className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#c91f28] transition-colors duration-200 hover:text-[#a71920]"
              >
                Discuss a similar engagement
                <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
