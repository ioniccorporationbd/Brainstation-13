'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function JoinOurTeamSection() {
  return (
    <section className="w-full bg-[#0A0A0A] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-12 px-5 md:grid-cols-[0.75fr_1.15fr] md:gap-20">
        <div>
          <h2 className="text-[48px] font-medium leading-[1.15] tracking-[-0.05em] text-white md:text-[64px]">
            Join Our
            <br />
            <span className="mt-1 inline-block">Team</span>
          </h2>

          <p className="mt-8 max-w-[460px] text-[20px] leading-[1.45] text-white/85 md:text-[24px]">
            We always welcome talented professionals to strengthen our team.
          </p>

          <Link
            href="/career"
            className="mt-12 inline-flex rounded-full bg-[#C91F28] px-7 py-4 text-[16px] font-semibold text-black transition hover:bg-[#C91F28]"
          >
            Visit Career
          </Link>
        </div>

        <div className="overflow-hidden rounded-[8px]">
          <Image
            src="/images/brands/team-photo.webp"
            alt="Team members collaborating at Magnetic Solution"
            width={1000}
            height={670}
            className="h-[300px] w-full object-cover md:h-[430px]"
          />
        </div>
      </div>
    </section>
  );
}
