import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import {
  ArrowRight,
  Building2,
  Cloud,
  Cog,
  CreditCard,
  Globe2,
  Repeat,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Users,
} from "lucide-react";

const services = [
  { title: "Retail Internet Banking", icon: Globe2 },
  { title: "Corporate Internet Banking", icon: Building2 },
  { title: "Mobile Internet Banking", icon: Smartphone },
  { title: "Card Services", icon: CreditCard },
  { title: "Extensive Customization", icon: SlidersHorizontal },
  { title: "FDI Automation", icon: Repeat },
  { title: "Internet Banking System", icon: Server },
  { title: "Cyber Security and Audit", icon: ShieldCheck },
  { title: "Banking Process Automation", icon: Cog },
  { title: "Banking CRM", icon: Users },
  { title: "Cloud Services for Banking", icon: Cloud },
];

export default async function BankingFinancialServicesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="brand-container">
        <div className="max-w-[680px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("What we can do")}</p>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[46px] lg:text-[50px]">{t("Offered services")}</h2>
          <p className="mt-4 text-[15.5px] leading-[1.6] text-[#52525B]">{t("A complete portfolio of banking software services, delivered as standalone modules or as one integrated platform.")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex h-full flex-col rounded-xl border border-[#ececec] bg-white p-5 transition-colors duration-200 hover:border-[#c91f28]/50 sm:min-h-[168px] sm:p-7"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#fdecec] text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                <service.icon size={21} />
              </span>

              <h3 className="mt-5 text-[15.5px] font-semibold leading-[1.35] text-black">
                {t(service.title)}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-xl border border-[#ececec] bg-[#fafafa] px-7 py-6 sm:flex-row sm:items-center md:px-9 md:py-7">
          <div>
            <p className="text-[15px] font-bold text-black md:text-[19px]">{t("Need a solution shaped around your core banking stack?")}</p>
            <p className="mt-1.5 text-[14.5px] text-[#52525B]">{t("Our team can scope a customized build across any of these services.")}</p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3 text-[14.5px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
          >{t("Talk to our team")}<ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
