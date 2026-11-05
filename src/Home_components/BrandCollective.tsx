'use client';

import React from 'react';

interface BrandItem {
  name: string;
  tag: string;
  accent: string;
}

const BRANDS: BrandItem[] = [
  { name: 'ERP23', tag: 'Enterprise ERP', accent: '#3f93cf' },
  { name: 'XR23', tag: 'Immersive XR', accent: '#7c5cff' },
  { name: 'FINTECH23', tag: 'Digital Finance', accent: '#0ea97b' },
  { name: 'STUDIO23', tag: 'Creative Studio', accent: '#ff8a3d' },
  { name: 'CLOUD23', tag: 'Cloud & DevOps', accent: '#2f8df4' },
  { name: 'eLea', tag: 'Learning Platform', accent: '#e0567a' },
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

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
          <div className="brand-scroll flex w-max gap-5">
            {scrollingBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex h-[112px] w-[248px] shrink-0 items-center justify-center rounded-[8px] border border-[#e2edf6] bg-white px-8"
              >
                <div className="flex flex-col items-center gap-[6px]">
                  <span className="flex items-baseline gap-1 text-[26px] font-bold leading-none tracking-[-0.03em] text-[#0d162b]">
                    {brand.name}
                    <span
                      className="inline-block h-[7px] w-[7px] rounded-full"
                      style={{ backgroundColor: brand.accent }}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#5a7d94]">
                    {brand.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
