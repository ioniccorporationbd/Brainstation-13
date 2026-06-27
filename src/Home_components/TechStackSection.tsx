'use client';

import React from 'react';

const TOP_TECHS = ['PHP', 'Rails', 'Node.js', 'Java'];
const BOTTOM_TECHS = ['WordPress', 'iOS', 'JavaScript', 'C++'];

export default function TechStackSection() {
  return (
    <section className="w-full overflow-hidden bg-[#11182b] py-24 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="text-center">
          <h2 className="text-[38px] font-normal leading-tight tracking-[-0.03em] text-white md:text-[52px]">
            <span className="font-semibold text-[#ffb32c]">Yes!</span>{' '}
            We cover your tech stack.
          </h2>

          <p className="mt-6 text-[18px] font-normal text-white/90 md:text-[22px]">
            Our 850+ team has expertise in almost every programming language.
          </p>
        </div>

        <div className="mt-20 space-y-10 md:mt-24 md:space-y-9">
          <div className="relative overflow-hidden">
            <div className="tech-scroll-left-to-right flex w-max items-center gap-24 md:gap-32">
              {[...TOP_TECHS, ...TOP_TECHS, ...TOP_TECHS].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="shrink-0 text-[42px] font-semibold leading-none tracking-[-0.03em] text-[#e8eef8] md:text-[56px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="tech-scroll-right-to-left flex w-max items-center gap-24 md:gap-32">
              {[...BOTTOM_TECHS, ...BOTTOM_TECHS, ...BOTTOM_TECHS].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="shrink-0 text-[42px] font-semibold leading-none tracking-[-0.03em] text-[#e8eef8] md:text-[56px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}