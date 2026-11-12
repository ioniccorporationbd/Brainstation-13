import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Discover & map",
    description:
      "We sit with the people who run the process today, map the real flow and agree which modules come first.",
  },
  {
    title: "Configure & build",
    description:
      "Standard ERPNext and Frappe modules wherever they fit, custom doctypes and workflows only where they do not.",
  },
  {
    title: "Integrate & migrate",
    description:
      "Payment, logistics, CRM and BI connections wired in, legacy data cleaned, validated and loaded.",
  },
  {
    title: "Train & support",
    description:
      "Role-based training, go-live support and a review cycle so the system keeps matching how the business works.",
  },
];

export default async function ErpDevelopmentProcessSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="lg:sticky lg:top-24">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("How we deliver")}</p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Implementation process")}</h2>
            <p className="mt-4 max-w-[460px] text-[15.5px] leading-[1.75] text-[#55585e]">{t("Four stages from first workshop to a system people use every day.")}</p>

            <Link
              href="/schedule-a-call"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3 text-[14.5px] font-semibold text-white transition-colors duration-200 hover:bg-[#a71920]"
            >{t("Book an ERP consult")}<ArrowRight size={17} />
            </Link>
          </div>

          <ol className="relative space-y-4">
            {steps.map((item, index) => (
              <li
                key={item.title}
                className="group flex gap-5 rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[14.5px] font-bold text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-[16.5px] font-semibold leading-[1.3] text-black md:text-[17.5px]">
                    {t(item.title)}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                    {t(item.description)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
