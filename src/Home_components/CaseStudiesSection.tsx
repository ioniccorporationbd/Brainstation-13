import React from 'react';
import { getTranslator } from "@/i18n/server";
import Image from 'next/image';
import Link from 'next/link';

// Real client names already present in this section — kept as tags (no fabricated
// logos/images, no invented case studies). Case-study meaning, links and stats are
// preserved; only the visual design and copy typography change.
const caseStudyClients = [
  { name: 'IIITK', tag: 'Education' },
  { name: 'City Bank', tag: 'Banking' },
  { name: 'European Biotechnology', tag: 'Biotech' },
  { name: 'HKDC', tag: 'Real Estate' },
];

const STATS = [
  { value: '80%', label: 'Processing Time Reduced' },
  { value: '99.5%', label: 'Facial Recognition Accuracy Rate' },
];

export default async function CaseStudiesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-x-clip bg-white py-[72px] md:py-[100px]">
      <div className="brand-container">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A] sm:text-[38px] md:text-[44px]">{t("Case Studies")}</h2>
            <p className="mt-4 max-w-[560px] text-[16px] leading-[1.5] text-[#52525B] md:text-[18px]">{t("Check out our case studies to see how innovative solutions transformed real businesses.")}</p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#C91F28] px-6 py-3.5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#A71920] md:text-[15px]"
          >{t("See all Case Studies")}<span aria-hidden>→</span>
          </Link>
        </div>

        {/* Client tags (real names only) */}
        <div className="mt-10 flex flex-wrap gap-3">
          {caseStudyClients.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2 rounded-full border border-[#E7E7EA] bg-white px-4 py-2 transition-colors duration-200 hover:border-[#C91F28]"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#C91F28]" aria-hidden />
              <span className="text-[13px] font-semibold tracking-[-0.01em] text-[#0A0A0A] md:text-[14px]">
                {t(client.name)}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#71717A]">
                {t(client.tag)}
              </span>
            </div>
          ))}
        </div>

        {/* Featured case-study card */}
        <div className="group mt-8 overflow-hidden rounded-2xl border border-[#E7E7EA] bg-white shadow-[0_1px_2px_rgba(10,10,10,0.04)] transition-all duration-300 ease-out hover:scale-[1.03] hover:border-[#C91F28] hover:shadow-[0_24px_50px_rgba(201,31,40,0.16)] motion-reduce:transition-none motion-reduce:hover:scale-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[280px] sm:h-[340px] md:h-full md:min-h-[520px]">
              <Image
                src="/images/shikkha/shikkha-student.webp"
                alt={t("Facial recognition attendance case study")}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#C91F28] md:text-[14px]">{t("AI & ML · LMS")}</p>

              <h3 className="mt-4 text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0A0A0A] md:text-[30px]">{t("Streamlining Attendance at IIITK with Facial Recognition")}</h3>

              <p className="mt-5 text-[15px] leading-[1.6] text-[#52525B] md:text-[16px]">{t("The Indian Institute of Information Technology, Kottayam (IIITK) is an autonomous engineering institute located in Valavoor, Palai, Kottayam District, Kerala, India.")}</p>

              <Link
                href="/case-study"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#C91F28] px-6 py-3 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#A71920]"
              >{t("View Case Study")}<span aria-hidden>→</span>
              </Link>

              <div className="mt-9 grid grid-cols-2 gap-6 border-t border-[#F0F0F2] pt-7">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[36px] font-semibold leading-none tracking-[-0.03em] text-[#C91F28] md:text-[44px]">
                      {t(stat.value)}
                    </div>
                    <p className="mt-2 text-[13px] leading-[1.4] text-[#52525B] md:text-[14px]">
                      {t(stat.label)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
