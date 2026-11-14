import Image from 'next/image';
import { getTranslator } from "@/i18n/server";
import Link from 'next/link';

const introCards = [
  {
    title: 'AI-Driven Development',
    description:
      'Integrating AI across the development lifecycle to deliver software 10X faster, smarter, and more reliably.',
    image: '/images/core-capabilities/team-collaboration.png',
    alt: 'Magnetic Solution Limited engineers collaborating on software development',
  },
  {
    title: 'Our Team',
    description:
      'A global team of engineers and consultants driving digital transformation across industries.',
    image: '/images/brands/team-photo.webp',
    alt: 'The Magnetic Solution Limited team',
  },
  {
    title: 'Global Accreditations',
    description:
      'Certified in CMMI Level 3 and ISO 27001, with 8+ partnerships including AWS, Microsoft, and Odoo.',
    image: '/images/core-capabilities/technology-consulting.png',
    alt: 'Magnetic Solution Limited consulting and partnership meeting',
  },
];

export default async function AboutSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white py-[72px] md:py-[92px] lg:py-[110px]">
      <div className="brand-container">
        <h2 className="mx-auto max-w-[760px] text-center text-[30px] font-semibold leading-[1.16] tracking-[-0.02em] text-[#0A0A0A] sm:text-[38px] lg:text-[44px]">{t("A global software company powering digital transformation.")}</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {introCards.map((card) => (
            <article
              key={card.title}
              className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-black/[0.08] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-primary hover:shadow-[0_18px_40px_-12px_rgba(201,31,40,0.22)] motion-safe:hover:scale-[1.03]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0A0A0A] sm:text-[21px]">
                  {t(card.title)}
                </h3>

                <p className="mt-2 text-[15px] font-normal leading-[1.55] text-[#52525B]">
                  {t(card.description)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/about-us"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >{t("About Us")}</Link>
        </div>
      </div>
    </section>
  );
}
