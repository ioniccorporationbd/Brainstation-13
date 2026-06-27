'use client';

import React from 'react';
import Image from 'next/image';

export default function JoinOurTeamSection() {
  return (
    <section className="w-full bg-[#11182b] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-12 px-5 md:grid-cols-[0.75fr_1.15fr] md:gap-20">
        <div>
          <h2 className="text-[48px] font-medium leading-[1.15] tracking-[-0.05em] text-white md:text-[64px]">
            Join Our Team
            <br />
            <span className="mt-4 inline-block">Join Our Team</span>
          </h2>

          <p className="mt-8 max-w-[460px] text-[20px] leading-[1.45] text-white/85 md:text-[24px]">
            We always welcome talented professionals to strengthen our team.
          </p>

          <a
            href="#"
            className="mt-12 inline-flex rounded-full bg-[#ffad25] px-7 py-4 text-[16px] font-semibold text-black transition hover:bg-[#f5a11c]"
          >
            Visit Career
          </a>
        </div>

        <div className="overflow-hidden rounded-[8px]">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"
            alt="Team members"
            width={820}
            height={430}
            className="h-[300px] w-full object-cover md:h-[430px]"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}