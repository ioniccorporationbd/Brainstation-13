import Link from "next/link";
import { getTranslator } from "@/i18n/server";
import { ArrowRight } from "lucide-react";

const successPoints = [
  {
    label: "Smartphone-based",
    text: "Retinopathy levels captured with a phone camera",
  },
  {
    label: "Automated grading",
    text: "Consistent, objective measurement of disease stage",
  },
];

export default async function PharmaCustomerSuccessSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Customer success")}</p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Our customer success stories")}</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="group overflow-hidden rounded-2xl border border-[#ececec] bg-white">
            <img
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1400&auto=format&fit=crop"
              alt={t("Doctor consulting a patient about screening results")}
              className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[440px]"
            />
          </div>

          <div>
            <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Healthcare professional")}</p>

            <h3 className="mt-3 text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[32px]">{t("Diabetic retinopathy")}</h3>

            <p className="mt-4 text-[15px] leading-[1.8] text-[#55585e]">{t("Our app aims to identify this disease by scanning human retinopathy levels using just a smartphone. This can be a convenient solution for patients and doctors. With quick and accurate retinopathy level measurements, doctors can understand their patients’ conditions and consult them according to their stage of the disease.")}</p>

            <Link
              href="/case-studies"
              className="mt-7 inline-flex items-center gap-2 text-[14.5px] font-bold text-[#c91f28] transition-all duration-200 hover:gap-3.5"
            >{t("View case studies")}<ArrowRight size={17} />
            </Link>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#ececec] pt-7 sm:grid-cols-2">
              {successPoints.map((point) => (
                <div key={point.label} className="rounded-xl border border-[#ececec] bg-[#fafafa] p-5">
                  <p className="text-[15px] font-bold text-black">{t(point.label)}</p>
                  <p className="mt-1.5 text-[13.5px] leading-[1.65] text-[#55585e]">{t(point.text)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
