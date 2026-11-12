"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CloudOff,
  Compass,
  Home,
  KeyRound,
  LifeBuoy,
  RefreshCw,
  ServerCrash,
  ShieldAlert,
  Unplug,
  type LucideIcon,
} from "lucide-react";
import GoBackButton, { useErrorPageFlag } from "./GoBackButton";

export type ErrorCode = 401 | 403 | 404 | 500 | 502 | 503;

type Action = "retry" | "home" | "services" | "support" | "goback";

interface ErrorDefinition {
  title: string;
  heading: string;
  description: string;
  icon: LucideIcon;
  actions: Action[];
}

const DEFINITIONS: Record<ErrorCode, ErrorDefinition> = {
  401: {
    title: "Unauthorized",
    heading: "Authentication required",
    description:
      "This page needs a signed-in account with access. Sign in with the credentials your organisation provided, then try again — or contact our team if you believe you should already have access.",
    icon: KeyRound,
    actions: ["home", "support", "goback"],
  },
  403: {
    title: "Forbidden",
    heading: "Access not permitted",
    description:
      "Your account does not have permission to view this page. If you believe you should have access, ask the owner of this workspace to grant it — or contact our team and we will route you to the right place.",
    icon: ShieldAlert,
    actions: ["home", "support", "goback"],
  },
  404: {
    title: "Page Not Found",
    heading: "Page Not Found",
    description:
      "The page you are looking for does not exist, may have been moved, or the link is out of date. Nothing is broken on your side — try one of the options below and you will be back on track.",
    icon: Compass,
    actions: ["home", "services", "goback"],
  },
  500: {
    title: "Internal Server Error",
    heading: "Something went wrong",
    description:
      "Our server could not complete this request. The issue is on our side — try again, and if it keeps happening, contact our team and we will look into it right away.",
    icon: ServerCrash,
    actions: ["retry", "home", "goback"],
  },
  502: {
    title: "Bad Gateway",
    heading: "Upstream service error",
    description:
      "A service this page depends on returned an unexpected response. Nothing is wrong at your end — please try again in a moment.",
    icon: Unplug,
    actions: ["retry", "home", "goback"],
  },
  503: {
    title: "Service Unavailable",
    heading: "Temporarily unavailable",
    description:
      "This service is temporarily unavailable, usually during short maintenance. Please try again shortly — or contact our team if you need it urgently.",
    icon: CloudOff,
    actions: ["retry", "home", "goback"],
  },
};

const popular = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]";
const secondaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]";

export default function ErrorPage({
  code,
  onRetry,
  showPopular,
  emitHead,
}: {
  code: ErrorCode;
  onRetry?: () => void;
  showPopular?: boolean;
  /** Render <title>/<meta robots> from inside the page (needed where a file
   *  convention such as error.tsx cannot export metadata itself). */
  emitHead?: boolean;
}) {
  useErrorPageFlag();

  const def = DEFINITIONS[code];
  const Icon = def.icon;
  const digits = String(code).split("");
  const withPopular = showPopular ?? code === 404;

  // Set the flag during HTML parsing so the footer / Global Offices never paint.
  const bootstrap = `document.documentElement.dataset.errorPage="1";`;

  return (
    <main className="bg-white">
      <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
      {emitHead ? (
        <>
          <title>{`${def.title} | Magnetic Solution Limited`}</title>
          <meta name="robots" content="noindex, nofollow" />
        </>
      ) : null}

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
            Error {code}
          </span>

          <span
            aria-hidden="true"
            className="nf-fade mt-7 inline-flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-[#ececec] bg-[#fafafa] text-[#c91f28]"
          >
            <Icon size={30} strokeWidth={1.9} />
          </span>

          <div className="nf-rise mt-6 flex select-none items-end justify-center gap-1 md:gap-2">
            {digits.map((d, i) => (
              <span
                key={`${d}-${i}`}
                className={`text-[92px] font-bold leading-[0.9] tracking-[-0.055em] md:text-[148px] ${
                  i === 1 ? "text-[#c91f28]" : "text-black"
                }`}
              >
                {d}
              </span>
            ))}
          </div>

          <h1 className="nf-rise mt-6 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">
            {def.heading}
          </h1>

          <p className="nf-rise mt-4 max-w-[540px] text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">
            {def.description}
          </p>

          <div className="nf-rise mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
            {def.actions.map((action, i) => {
              // The first action is the primary CTA; the rest are outline buttons.
              const primary = i === 0 ? primaryBtn : secondaryBtn;
              if (action === "retry") {
                if (!onRetry) return null;
                return (
                  <button
                    key="retry"
                    type="button"
                    onClick={onRetry}
                    className={primary}
                  >
                    <RefreshCw size={17} />
                    Try Again
                  </button>
                );
              }
              if (action === "home") {
                return (
                  <Link key="home" href="/" className={primary}>
                    <Home size={17} />
                    Back to Home
                  </Link>
                );
              }
              if (action === "services") {
                return (
                  <Link
                    key="services"
                    href="/services"
                    className={secondaryBtn}
                  >
                    Explore Services
                    <ArrowRight size={17} />
                  </Link>
                );
              }
              if (action === "support") {
                return (
                  <Link key="support" href="/contact" className={primary}>
                    <LifeBuoy size={17} />
                    Contact Support
                  </Link>
                );
              }
              return <GoBackButton key="goback" className={primary} />;
            })}
          </div>

          {withPopular ? (
            <div className="nf-fade mt-11 w-full rounded-2xl border border-[#ececec] bg-[#fafafa] px-6 py-7 text-left md:px-8">
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
                Popular pages
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-4">
                {popular.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between gap-2 whitespace-nowrap rounded-lg border border-[#ececec] bg-white px-3.5 py-3 text-[13.5px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28]/50"
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
          ) : (
            <p className="nf-fade mt-9 flex flex-wrap items-center justify-center gap-2 text-[13.5px] leading-[1.7] text-[#8a8f98]">
              <LifeBuoy size={15} className="shrink-0 text-[#c91f28]" />
              Need help with this error?
              <Link
                href="/contact"
                className="font-semibold text-black underline decoration-[#c91f28] decoration-2 underline-offset-4 transition-colors hover:text-[#c91f28]"
              >
                contact our team
              </Link>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
