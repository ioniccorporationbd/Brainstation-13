import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight, Check, Phone } from "lucide-react";

const industries = [
  "Bank & Fin-Tech Industries",
  "Telecommunication Industries",
  "Service Industries",
  "Retail Industries",
  "Pharmaceutical Industries",
];

const microsoftStack = [
  { name: "SharePoint", image: "/sharepoint-logos/sharepoint.svg" },
  { name: "Microsoft 365", image: "/sharepoint-logos/m365.svg" },
  { name: "Microsoft Teams", image: "/sharepoint-logos/teams.svg" },
  { name: "OneDrive", image: "/sharepoint-logos/onedrive.svg" },
  { name: "Microsoft Azure", image: "/sharepoint-logos/azure.svg" },
  { name: "Power BI", image: "/sharepoint-logos/powerbi.svg" },
  { name: "Power Automate", image: "/sharepoint-logos/powerautomate.svg" },
  { name: "Word", image: "/sharepoint-logos/word.svg" },
  { name: "Excel", image: "/sharepoint-logos/excel.svg" },
];

export async function SharePointIndustriesSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Industries We Build For")}</p>

            <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Industries")}</h2>

            <p className="mt-4 max-w-[460px] text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("SharePoint and Microsoft 365 engagements across document-heavy, regulated and customer-facing sectors.")}</p>

            <div className="mt-8 space-y-3">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="group flex items-center gap-4 rounded-2xl border border-[#ececec] bg-white px-5 py-4 transition-colors duration-300 hover:border-[#c91f28]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[#c91f28] transition-colors duration-300 group-hover:bg-[#c91f28] group-hover:text-white">
                    <Check size={16} strokeWidth={2.6} />
                  </span>

                  <span className="text-[12.5px] font-bold uppercase tracking-[0.1em] text-[#0a0a0a]">
                    {t(industry)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3.2] w-full overflow-hidden rounded-2xl border border-[#ececec] bg-[#f7f7f7]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt={t("Team working on a shared workspace")}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export async function SharePointWorkedWithSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white px-6 pb-[88px] text-[#0a0a0a] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Microsoft Technologies")}</p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">{t("Technologies We Build With")}</h2>

          <p className="mt-4 text-[16px] font-medium leading-[1.65] text-[#565656] md:text-[17px]">{t("The Microsoft products our SharePoint work connects to.")}</p>
        </div>

        <div className="group relative mt-10 overflow-hidden border-y border-[#ececec] py-6">
          <div className="animate-ms-marquee flex w-max items-center motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
            {[...microsoftStack, ...microsoftStack, ...microsoftStack].map(
              (item, index) => (
                <div
                  key={`${t(item.name)}-${index}`}
                  className="mx-3 flex h-[56px] shrink-0 items-center gap-3 px-4 md:mx-5 md:h-[60px] md:px-5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[26px] w-[26px] shrink-0 object-contain"
                  />
                  <span className="whitespace-nowrap text-[14px] font-bold tracking-[-0.01em] text-[#3f3f3f]">
                    {t(item.name)}
                  </span>
                </div>
              ),
            )}
          </div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-[48px] bg-gradient-to-r from-white to-transparent md:w-[120px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[48px] bg-gradient-to-l from-white to-transparent md:w-[120px]" />
        </div>
      </div>

      <style>{`
        @keyframes ms-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        .animate-ms-marquee {
          animation: ms-marquee 34s linear infinite;
        }

        .group:hover .animate-ms-marquee {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-ms-marquee {
            animation: none;
            transform: none;
          }

          .animate-ms-marquee > div:nth-child(n + 10) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

export async function SharePointPurchaseCTASection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full bg-white px-6 pb-[96px] text-[#0a0a0a] md:pb-[112px]">
      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-2xl border border-[#ececec] bg-[#fafafa] px-8 py-12 text-center md:px-16 md:py-16">
        <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Start a Project")}</p>

        <h2 className="mx-auto max-w-[720px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a] md:text-[38px]">{t("Would you like to start a project with us?")}</h2>

        <p className="mx-auto mt-4 max-w-[620px] text-[16px] font-medium leading-[1.6] text-[#565656] md:text-[17px]">{t("Share your idea and we'll come back with a scoped SharePoint plan.")}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link
            href="/schedule-a-call"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c91f28] px-8 py-4 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920]"
          >{t("Schedule a call")}<ArrowRight size={16} strokeWidth={2.2} />
          </Link>

          <a
            href="tel:+8809612345678"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c91f28] px-8 py-4 text-[15px] font-bold text-[#c91f28] transition duration-300 hover:bg-[#c91f28] hover:text-white"
          >
            <Phone size={16} strokeWidth={2.2} />
            +880 96 1234 5678
          </a>
        </div>
      </div>
    </section>
  );
}

export default async function SharePointBottomSections() {
  const { t } = await getTranslator();
  return (
    <>
      <SharePointIndustriesSection />
      <SharePointWorkedWithSection />
      <SharePointPurchaseCTASection />
    </>
  );
}
