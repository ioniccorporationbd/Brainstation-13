'use client';

import React from 'react';
import Image from 'next/image';

interface BrandItem {
  name: string;
  imageUrl: string;
}

const BRANDS: BrandItem[] = [
  {
    name: 'ERP23',
    imageUrl: 'https://logo.clearbit.com/erpnext.com',
  },
  {
    name: 'XR23',
    imageUrl: 'https://logo.clearbit.com/unity.com',
  },
  {
    name: 'FINTECH23',
    imageUrl: 'https://logo.clearbit.com/stripe.com',
  },
  {
    name: 'STUDIO23',
    imageUrl: 'https://logo.clearbit.com/unrealengine.com',
  },
  {
    name: 'CLOUD23',
    imageUrl: 'https://logo.clearbit.com/aws.amazon.com',
  },
  {
    name: 'eLea',
    imageUrl: 'https://logo.clearbit.com/moodle.org',
  },
];

export default function BrandCollectiveSection() {
  const scrollingBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="w-full overflow-hidden bg-[#f3f8fc] py-24">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-20 text-center">
          <h2 className="text-[42px] font-medium leading-[1.08] tracking-[-0.04em] text-[#10172d] md:text-[64px]">
            The 23 Brand Collective
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-[18px] font-normal leading-[1.35] text-[#2f6280] md:text-[22px]">
            A portfolio of specialized brands driving innovation across Cloud, ERP, Learning,
            <br className="hidden md:block" />
            Commerce, XR, and Creative Technology.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="brand-scroll flex w-max gap-5">
            {scrollingBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex h-[112px] w-[248px] shrink-0 items-center justify-center rounded-[8px] bg-white px-8"
              >
                <Image
                  src={brand.imageUrl}
                  alt={brand.name}
                  width={220}
                  height={80}
                  className="max-h-[64px] max-w-[190px] object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}