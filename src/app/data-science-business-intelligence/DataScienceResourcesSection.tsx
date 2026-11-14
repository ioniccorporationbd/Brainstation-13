import { getTranslator } from "@/i18n/server";

const resources = [
  { name: "TensorFlow", use: "Model development and deployment" },
  { name: "AWS", use: "Data lake and pipeline architecture" },
  { name: "Alteryx", use: "Workflow automation for analysts" },
  { name: "Azure", use: "Cloud data platform implementation" },
  { name: "Machine learning", use: "Forecasting and anomaly detection" },
  { name: "Data quality", use: "Validation rules and reconciliation" },
];

export default async function DataScienceResourcesSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white pb-[56px] md:pb-[104px]">
      <div className="brand-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Team & tooling")}</p>
            <h2 className="mt-4 text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-black md:text-[42px]">{t("Resources")}</h2>
            <p className="mt-4 max-w-[420px] text-[15px] leading-[1.6] text-[#52525B]">{t("Where our team applies each platform. Named for clarity — not a certification or partnership claim.")}</p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {resources.map((item) => (
              <li
                key={item.name}
                className="rounded-xl border border-[#ececec] bg-white p-4 transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <p className="text-[14.5px] font-semibold text-black">{t(item.name)}</p>
                <p className="mt-1 text-[13px] leading-[1.6] text-[#52525B]">{t(item.use)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
