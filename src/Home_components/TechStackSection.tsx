import Image from 'next/image';

type Logo = { src: string; alt: string; w: number; h: number; invert?: boolean };

// Real, verified brand & technology logos already in the project (merged from the
// former "Brand Collective" + "Tech Stack" sections). Partner wordmarks ship as
// pure-white SVGs (built for the dark footer) — flipped to black via CSS invert so
// they read cleanly on white; the logo files themselves are left untouched. Colored
// client logos render natively. Placeholder, near-white and unverified badges are
// excluded. No brand is duplicated beyond the two identical copies the seamless
// slider requires.
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

export default function TechStackSection() {
  const marquee = [...LOGOS, ...LOGOS];

  return (
    <section className="w-full overflow-hidden bg-white py-[72px] md:py-[92px] lg:py-[104px]">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="text-center">
          <h2 className="text-[26px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#0A0A0A] sm:text-[30px] md:text-[36px]">
            <span className="text-[#C91F28]">Yes!</span> We cover your tech stack.
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-[15px] font-normal leading-[1.6] text-[#52525B] sm:text-[17px]">
            From global technology partners to the brands we build for — a collective we work with
            across Cloud, ERP, Learning, Commerce, and Creative Technology.
          </p>
        </div>

        <div className="brand-marquee relative mt-14 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="brand-marquee-track flex w-max items-center">
            {marquee.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex h-20 shrink-0 items-center justify-center pr-[64px] sm:pr-[80px] lg:pr-[96px]"
                aria-hidden={index >= LOGOS.length ? true : undefined}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  className={`h-9 w-auto object-contain sm:h-10${logo.invert ? ' invert' : ''}`}
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
              animation: brandMarquee 48s linear infinite;
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
