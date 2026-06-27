'use client';

import React from 'react';
import Image from 'next/image';

const caseStudyLogos = [
  {
    name: 'IIITK',
    image: 'https://dummyimage.com/180x90/f3f6fa/111827&text=IIITK',
  },
  {
    name: 'City Bank',
    image: 'https://dummyimage.com/180x90/f3f6fa/ef4444&text=city+bank',
  },
  {
    name: 'European Biotechnology',
    image: 'https://dummyimage.com/180x90/f3f6fa/111827&text=European+Biotech',
  },
  {
    name: 'HKDC',
    image: 'https://dummyimage.com/180x90/f3f6fa/111827&text=HKDC',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5">
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-[42px] font-medium leading-none tracking-[-0.04em] text-[#10172d] md:text-[56px]">
              Case Studies
            </h2>

            <p className="mt-7 max-w-[560px] text-[18px] leading-[1.4] text-[#35647c] md:text-[21px]">
              Check out our case studies that show how innovative
              <br className="hidden md:block" />
              solutions transformed businesses.
            </p>
          </div>

          <button className="w-fit rounded-full bg-[#ffad25] px-7 py-4 text-[15px] font-semibold text-black transition hover:bg-[#f2a11d] md:mt-8">
            See all Case Studies
          </button>
        </div>

        <div className="mb-9 flex flex-wrap gap-5">
          {caseStudyLogos.map((logo, index) => (
            <button
              key={logo.name}
              className={`flex h-[90px] w-[150px] items-center justify-center rounded-[6px] bg-[#f3f6fa] px-5 transition ${
                index === 0
                  ? 'border-b-[3px] border-[#3d9bd5]'
                  : 'border-b-[3px] border-transparent'
              }`}
            >
              <Image
                src={logo.image}
                alt={logo.name}
                width={120}
                height={60}
                className="max-h-[54px] max-w-[120px] object-contain"
                unoptimized
              />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.92fr_1fr] md:items-start md:gap-20">
          <div className="overflow-hidden rounded-[8px]">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
              alt="Facial recognition case study"
              width={620}
              height={520}
              className="h-[360px] w-full object-cover md:h-[520px]"
              unoptimized
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

            <a
              href="#"
              className="mt-9 inline-flex items-center gap-3 text-[17px] font-semibold text-[#ff9f1c]"
            >
              View Case Study
              <span>→</span>
            </a>

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