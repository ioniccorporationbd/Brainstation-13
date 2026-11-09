import Image from 'next/image';

type Logo = { src: string; alt: string; w: number; h: number; invert?: boolean };

// Real, verified brand logos already in the project.
// Partner wordmarks ship as pure-white SVGs (built for the dark footer) — they are
// flipped to black via CSS invert so they read cleanly on the white section; the
// logo files themselves are left untouched. Colored client logos render natively.
// (Placeholder, near-white Elenor and unverified recognition badges are excluded.)
const LOGOS: Logo[] = [
  { src: '/images/footer/partner-aws.svg', alt: 'Amazon Web Services', w: 105, h: 42, invert: true },
  { src: '/images/trusted/robi.svg', alt: 'Robi', w: 130, h: 42 },
  { src: '/images/footer/partner-google-cloud.svg', alt: 'Google Cloud', w: 165, h: 42, invert: true },
  { src: '/images/trusted/syngenta.svg', alt: 'Syngenta', w: 160, h: 42 },
  { src: '/images/footer/partner-microsoft.svg', alt: 'Microsoft', w: 130, h: 32, invert: true },
  { src: '/images/trusted/tennant.svg', alt: 'Tennant', w: 125, h: 42 },
  { src: '/images/footer/partner-moodle.svg', alt: 'Moodle', w: 135, h: 36, invert: true },
  { src: '/images/trusted/sharebike.svg', alt: 'Sharebike', w: 160, h: 38 },
  { src: '/images/footer/partner-salesforce.svg', alt: 'Salesforce', w: 150, h: 38, invert: true },
  { src: '/images/trusted/vallie.svg', alt: 'Vallie', w: 145, h: 38 },
  { src: '/images/trusted/virtual-affairs.svg', alt: 'Virtual Affairs', w: 170, h: 38 },
];

export default function BrandCollectiveSection() {
  const marquee = [...LOGOS, ...LOGOS];

  return (
    <section className="w-full overflow-hidden bg-white py-[72px] md:py-[92px] lg:py-[104px]">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="text-center">
          <h2 className="text-[30px] font-semibold leading-[1.16] tracking-[-0.02em] text-[#0A0A0A] sm:text-[36px] lg:text-[40px]">
            The 23 Brand Collective
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] text-[15px] font-normal leading-[1.6] text-[#52525B] sm:text-[17px]">
            A collective of the brands and technology partners we work with across Cloud, ERP,
            Learning, Commerce, and Creative Technology.
          </p>
        </div>

        <div className="brand-marquee relative mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="brand-marquee-track flex w-max items-center">
            {marquee.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex h-16 shrink-0 items-center justify-center pr-[56px] sm:pr-[72px] lg:pr-[88px]"
                aria-hidden={index >= LOGOS.length ? true : undefined}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  className={`h-7 w-auto object-contain sm:h-8${logo.invert ? ' invert' : ''}`}
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes brandMarquee {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
            .brand-marquee-track {
              animation: brandMarquee 46s linear infinite;
              will-change: transform;
            }
            .brand-marquee:hover .brand-marquee-track,
            .brand-marquee-track:hover {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .brand-marquee-track {
                animation: none !important;
                transform: none !important;
              }
            }
          `,
        }}
      />
    </section>
  );
}
