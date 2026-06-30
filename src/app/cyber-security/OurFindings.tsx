"use client";

import Image from "next/image";

const findings = [
  "IBM Cost of a Data Breach Report 2023: Average breach lifecycle is 277 days—quick response using root cause analysis saves up to $1.76 million per incident.",
  "Verizon DBIR 2024: 42% of breaches involve stolen credentials, enabling undetected lateral movement across systems for weeks, often via unpatched Apache Struts vulnerabilities.",
  "Real-World Case: Marriott International (2020) breach exposed 5.2 million guests' data due to compromised franchise accounts—highlighting needs for continuous monitoring and IAM policy enforcement.",
  "Salt Security 2024: 400% increase in API attack traffic targeting business logic flaws and broken object-level authorization (BOLA).",
  "Palo Alto Networks 2024: 80% of cloud breaches from misconfigurations in AWS IAM roles or S3 buckets, taking 17% longer to detect due to visibility gaps.",
  "Our assessments, including black-box/grey-box penetration testing, reduce dwell time by 41% per IBM X-Force Index.",
];

export default function OurFindings() {
  return (
    <section className="w-full bg-white py-[68px]">
      <div className="mx-auto grid max-w-[1325px] items-start gap-[118px] px-6 lg:grid-cols-[600px_1fr] lg:px-8">
        {/* Left Image */}
        <div className="relative h-[414px] w-full overflow-hidden rounded-[8px] bg-slate-900 lg:ml-[8px]">
          <Image
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1400&auto=format&fit=crop"
            alt="Cyber security lock"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="max-w-[640px] pt-[4px]">
          <h2 className="mb-[31px] text-[48px] font-normal leading-none tracking-[-2.4px] text-[#01051b]">
            Our Findings
          </h2>

          <ul className="space-y-[18px] pl-[17px] text-[#01051b]">
            {findings.map((item, index) => (
              <li
                key={index}
                className="list-disc pl-[3px] text-[19px] font-normal leading-[1.42] tracking-[-0.45px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating chat button */}
      <button
        aria-label="Chat"
        className="fixed bottom-6 right-6 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
      >
        <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#19aee7] text-[18px] text-white">
          ●
        </span>
      </button>
    </section>
  );
}