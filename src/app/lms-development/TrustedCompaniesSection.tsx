"use client";

const logos = [
  {
    name: "UCB",
    image:
      "https://www.ucb.com.bd/themes/custom/ucb_subtheme/images/ucb-logo.svg",
  },
  {
    name: "HSBC",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg",
  },
  {
    name: "City Bank",
    image:
      "https://www.thecitybank.com/themes/custom/citybank/logo.svg",
  },
  {
    name: "AB Bank",
    image:
      "https://www.abbl.com/themes/custom/abbank/logo.svg",
  },
  {
    name: "bKash",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1d/BKash_logo.svg",
  },
  {
    name: "Nagad",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Nagad_Logo.svg",
  },
  {
    name: "Rocket",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/Dutch_Bangla_Bank_Rocket_logo.svg",
  },
];

export default function TrustedTeamsSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] py-[105px]">
      <div className="mx-auto max-w-[1450px] px-6">
        <h2 className="text-center text-[26px] font-bold leading-tight tracking-[-0.04em] text-white md:text-[28px]">
          Trusted By Fast-Moving Tech Teams - From Startups to Enterprises
        </h2>

        <div className="relative mt-[92px] overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[180px] bg-gradient-to-r from-[#111E40] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[180px] bg-gradient-to-l from-[#111E40] to-transparent" />

          <div className="flex w-max animate-logo-marquee items-center">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="mx-[42px] flex h-[90px] w-[170px] items-center justify-center"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-[58px] max-w-[165px] object-contain grayscale brightness-0 invert opacity-70 transition-all duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes logo-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-logo-marquee {
          animation: logo-marquee 32s linear infinite;
        }

        .animate-logo-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}