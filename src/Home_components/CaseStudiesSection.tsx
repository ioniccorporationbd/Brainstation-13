'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const caseStudyLogos = [
  { name: 'IIITK', tag: 'Education' },
  { name: 'City Bank', tag: 'Banking' },
  { name: 'European Biotechnology', tag: 'Biotech' },
  { name: 'HKDC', tag: 'Real Estate' },
];

export default function CaseStudiesSection() {
  return (
    <section className="w-full overflow-x-clip bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5">
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-[42px] font-medium leading-none tracking-[-0.04em] text-[#10172d] md:text-[56px]">
              Case Studies
            </h2>

            <p className="mt-7 max-w-[560px] text-[18px] leading-[1.4] text-[#35647c] md:text-[21px]">
              Check out our case studies to see how innovative solutions transformed real
              businesses.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex w-fit rounded-full bg-[#ffad25] px-7 py-4 text-[15px] font-semibold text-black transition hover:bg-[#f2a11d] md:mt-8"
          >
            See all Case Studies
          </Link>
        </div>

        <div className="mb-9 flex flex-wrap gap-5">
          {caseStudyLogos.map((logo, index) => (
            <div
              key={logo.name}
              className={`flex h-[90px] w-[150px] flex-col items-center justify-center rounded-[6px] bg-[#f3f6fa] px-4 text-center transition ${
                index === 0
                  ? 'border-b-[3px] border-[#3d9bd5]'
                  : 'border-b-[3px] border-transparent'
              }`}
            >
              <span className="text-[17px] font-semibold leading-tight tracking-[-0.01em] text-[#10172d]">
                {logo.name}
              </span>
              <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7c93a5]">
                {logo.tag}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] md:items-start md:gap-12 lg:gap-20">
          <div className="overflow-hidden rounded-[8px]">
            <Image
              src="/images/shikkha/shikkha-student.webp"
              alt="Facial recognition attendance case study"
              width={1600}
              height={1000}
              className="h-[360px] w-full object-cover md:h-[520px]"
            />
          </div>

          <div className="pt-2 md:pt-3">
            <p className="text-[18px] font-medium text-[#4597cf]">
              AI &amp; ML, LMS
            </p>

            <h3 className="mt-7 max-w-[700px] text-[34px] font-medium leading-[1.15] tracking-[-0.04em] text-[#10172d] md:text-[44px]">
              Streamlining Attendance at IIITK with Facial Recognition
            </h3>

            <p className="mt-8 max-w-[660px] text-[18px] leading-[1.45] text-[#35647c] md:text-[21px]">
              The Indian Institute of Information Technology, Kottayam (IIITK) is an
              autonomous engineering institute located in Valavoor, Palai, Kottayam
              District, Kerala, India.
            </p>

            <Link
              href="/case-study"
              className="mt-9 inline-flex items-center gap-3 text-[17px] font-semibold text-[#ff9f1c] transition-colors hover:text-[#e88a00]"
            >
              View Case Study
              <span>→</span>
            </Link>

            <div className="mt-10 border-t border-[#dce8f1] pt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                <div>
                  <div className="text-[58px] font-light leading-none tracking-[-0.05em] text-[#4b9bd0] md:text-[64px]">
                    80%
                  </div>
                  <p className="mt-4 text-[18px] text-[#35647c] md:text-[20px]">
                    Processing Time Reduced
                  </p>
                </div>

                <div>
                  <div className="text-[58px] font-light leading-none tracking-[-0.05em] text-[#4b9bd0] md:text-[64px]">
                    99.5%
                  </div>
                  <p className="mt-4 text-[18px] text-[#35647c] md:text-[20px]">
                    Facial Recognition Accuracy Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
