import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Home, LifeBuoy } from "lucide-react";
import NotFoundGoBack from "./not-found-go-back";

export const metadata: Metadata = {
  title: "Page Not Found | Magnetic Solution Limited",
  description:
    "The page you are looking for does not exist or has moved. Return to the Magnetic Solution Limited homepage or explore our services.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

const popular = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <main className="bg-white">
      <style>{`
        @keyframes nf-rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes nf-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nf-rise { animation: nf-rise 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) both; }
        .nf-fade { animation: nf-fade 0.7s ease-out 0.15s both; }
        @media (prefers-reduced-motion: reduce) {
          .nf-rise, .nf-fade { animation: none !important; }
        }
      `}</style>

      <section className="px-6 pb-[88px] pt-[68px] md:pb-[120px] md:pt-[92px]">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <Link
            href="/"
            aria-label="Magnetic Solution Limited — Home"
            className="nf-fade inline-flex items-center justify-center"
          >
            <Image
              src="/images/brand/magnetic-logo.png"
              alt="Magnetic Solution Limited"
              width={190}
              height={198}
              priority
              className="h-[58px] w-auto object-contain"
            />
          </Link>

          <span className="nf-fade mt-8 inline-flex items-center gap-2 rounded-full bg-[#fdecec] px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
            <Compass size={14} strokeWidth={2.2} />
            Error 404
          </span>

          <div className="nf-rise mt-7 flex select-none items-end justify-center gap-1 md:gap-2">
            <span className="text-[92px] font-bold leading-[0.9] tracking-[-0.055em] text-black md:text-[148px]">
              4
            </span>
            <span className="text-[92px] font-bold leading-[0.9] tracking-[-0.055em] text-[#c91f28] md:text-[148px]">
              0
            </span>
            <span className="text-[92px] font-bold leading-[0.9] tracking-[-0.055em] text-black md:text-[148px]">
              4
            </span>
          </div>

          <h1 className="nf-rise mt-6 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            Page Not Found
          </h1>

          <p className="nf-rise mt-4 max-w-[540px] text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">
            The page you are looking for does not exist, may have been moved, or
            the link is out of date. Nothing is broken on your side — try one of
            the options below and you will be back on track.
          </p>

          <div className="nf-rise mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
            >
              <Home size={17} />
              Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
            >
              Explore Services
              <ArrowRight size={17} />
            </Link>
            <NotFoundGoBack />
          </div>

          <div className="nf-fade mt-11 w-full rounded-2xl border border-[#ececec] bg-[#fafafa] px-6 py-7 text-left md:px-8">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
              Popular pages
            </p>
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-4">
              {popular.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-2 rounded-lg border border-[#ececec] bg-white px-4 py-3 text-[14px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28]/50"
                >
                  <span>{item.label}</span>
                  <ArrowRight
                    size={15}
                    className="shrink-0 text-[#8a8f98] transition-colors duration-200 group-hover:text-[#c91f28]"
                  />
                </Link>
              ))}
            </div>
          </div>

          <p className="nf-fade mt-8 flex flex-wrap items-center justify-center gap-2 text-[13.5px] leading-[1.7] text-[#8a8f98]">
            <LifeBuoy size={15} className="shrink-0 text-[#c91f28]" />
            Still stuck? Our team can point you to the right page —
            <Link
              href="/contact"
              className="font-semibold text-black underline decoration-[#c91f28] decoration-2 underline-offset-4 transition-colors hover:text-[#c91f28]"
            >
              contact us
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
