import { getTranslator } from "@/i18n/server";

const pillars = ["Accuracy", "Completeness", "Consistency", "Accessibility"];

export default async function DataScienceBusinessIntelligenceIntroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] pt-[8px] md:pb-[104px]">
      <div className="brand-container">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("The pipeline, end to end")}</p>
            <h2 className="mt-4 max-w-[560px] text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("One partner for every stage of your data")}</h2>

            <p className="mt-5 text-[15.5px] leading-[1.8] text-[#52525B]">{t("We understand the importance of managing and analyzing data for businesses. That’s why we offer a one-stop-shop solution that covers every aspect of the data service pipeline. From data creation to storage, use, and archiving, we’ve got you covered! Our team of certified experts takes great pride in providing modern and cost-effective solutions to help our customers extract maximum value from their data.")}</p>

            <p className="mt-4 text-[15.5px] leading-[1.8] text-[#52525B]">{t("Our focus is on ensuring the accuracy, completeness, consistency, and accessibility of your data, so you can trust the information you’re working with. We’ve been helping businesses just like yours for years, and we’re always up for a challenge! Whether you need help with modern architecture or solution design and implementation, we’re here to provide you with the best possible service.")}</p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {pillars.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-[#ececec] bg-white px-3.5 py-1.5 text-[13px] font-semibold text-black"
                >
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#ececec]">
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop"
              alt={t("Analyst reviewing a reporting dashboard on a laptop")}
              className="h-[280px] w-full object-cover md:h-[380px] lg:h-[440px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
