import { getTranslator } from "@/i18n/server";

const steps = [
  {
    step: "01",
    title: "Assess the estate",
    text: "We review current workloads, dependencies and spend before anything moves.",
  },
  {
    step: "02",
    title: "Design the landing zone",
    text: "Accounts, networking and identity set up so the platform is safe from day one.",
  },
  {
    step: "03",
    title: "Automate the move",
    text: "Staged migration with Terraform and CI/CD, so every environment is reproducible.",
  },
  {
    step: "04",
    title: "Instrument and optimise",
    text: "Metrics, logging and tracing, with FinOps right-sizing to keep spend under control.",
  },
];

export default async function CloudSolutionsProcessSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[88px] md:pb-[104px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("How we deliver")}</p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("A staged path, not a big-bang migration")}</h2>
            <p className="mt-4 max-w-[480px] text-[15.5px] leading-[1.75] text-[#55585e]">{t("Every engagement follows the same discipline: understand the estate, build the foundation, automate the change, then measure and tune.")}</p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#ececec]">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop"
                alt={t("Structured network cabling in a cloud data centre")}
                className="h-[220px] w-full object-cover md:h-[280px]"
              />
            </div>
          </div>

          <ol className="relative space-y-4">
            {steps.map((item) => (
              <li
                key={item.step}
                className="group flex gap-5 rounded-xl border border-[#ececec] bg-white p-6 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdecec] text-[14.5px] font-bold text-[#c91f28] transition-colors duration-200 group-hover:bg-[#c91f28] group-hover:text-white">
                  {t(item.step)}
                </span>

                <div>
                  <h3 className="text-[16.5px] font-semibold leading-[1.3] text-black md:text-[17.5px]">
                    {t(item.title)}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.7] text-[#55585e]">
                    {t(item.text)}
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
