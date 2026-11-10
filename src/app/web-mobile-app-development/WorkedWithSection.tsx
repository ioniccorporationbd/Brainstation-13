const platforms = [
  { name: "Android", image: "https://cdn.simpleicons.org/android/3DDC84" },
  { name: "iOS", image: "https://cdn.simpleicons.org/apple/000000" },
  { name: "Google Play", image: "https://cdn.simpleicons.org/googleplay/414141" },
  { name: "App Store", image: "https://cdn.simpleicons.org/appstore/0D96F6" },
  { name: "Flutter", image: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "Firebase", image: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Stripe", image: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "PayPal", image: "https://cdn.simpleicons.org/paypal/003087" },
  { name: "Visa", image: "https://cdn.simpleicons.org/visa/1A1F71" },
  { name: "Mastercard", image: "https://cdn.simpleicons.org/mastercard/EB001B" },
];

export default function WorkedWithSection() {
  return (
    <section className="w-full overflow-hidden bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Integrations
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Platforms We Build For
          </h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">
            App stores, payment providers and platform SDKs our builds
            integrate with.
          </p>
        </div>

        <div className="group relative mt-10 overflow-hidden border-y border-[#ececec] py-6">
          <div className="animate-platform-marquee flex w-max items-center motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
            {[...platforms, ...platforms, ...platforms].map((platform, index) => (
              <div
                key={`${platform.name}-${index}`}
                className="mx-3 flex h-[56px] shrink-0 items-center gap-3 px-4 md:mx-5 md:h-[60px] md:px-5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={platform.image}
                  alt={platform.name}
                  className="h-[24px] w-[24px] shrink-0 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
                <span className="whitespace-nowrap text-[14px] font-bold tracking-[-0.01em] text-[#3f3f3f]">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-[48px] bg-gradient-to-r from-white to-transparent md:w-[120px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[48px] bg-gradient-to-l from-white to-transparent md:w-[120px]" />
        </div>
      </div>

      <style>{`
        @keyframes platform-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        .animate-platform-marquee {
          animation: platform-marquee 32s linear infinite;
        }

        .group:hover .animate-platform-marquee {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-platform-marquee {
            animation: none;
            transform: none;
          }

          .animate-platform-marquee > div:nth-child(n + 11) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
