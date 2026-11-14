import { getTranslator } from "@/i18n/server";

type IntegrationItem = {
  name: string;
  logo?: string;
  logoClassName?: string;
  wordmarkClassName?: string;
};

const integrations: IntegrationItem[] = [
  {
    name: "SAP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    logoClassName: "max-h-[48px] max-w-[118px]",
  },
  {
    name: "Oracle",
    wordmarkClassName: "text-[#c74634]",
  },
  {
    name: "Odoo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg",
    logoClassName: "max-h-[52px] max-w-[136px]",
  },
  {
    name: "IFS",
    wordmarkClassName: "text-[#000000]",
  },
];

export default async function EnterpriseMsfaIntegrationsSection() {
  const { t } = await getTranslator();
  return (
    <section className="w-full overflow-hidden bg-white pb-[56px] text-[#000000] md:pb-[104px]">
      <div className="brand-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#c91f28]">{t("Enterprise Ecosystem")}</p>

          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#000000] md:text-[46px] lg:text-[50px]">{t("Integrations")}</h2>

          <p className="mt-4 text-[15px] font-medium leading-[1.65] text-[#52525B] md:text-[15px]">{t("Connect to your ERP and analytics stack. We provide seamless bi-directional handshakes with your core platforms.")}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {integrations.map((item) => (
            <article
              key={item.name}
              className="group flex h-[132px] flex-col items-center justify-center border border-[#ececec] bg-white px-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c91f28] md:h-[148px]"
            >
              <div className="flex h-[56px] w-full items-center justify-center">
                {item.logo ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={item.logo}
                    alt={`${t(item.name)} logo`}
                    loading="lazy"
                    className={`object-contain ${item.logoClassName ?? "max-h-[48px] max-w-[130px]"}`}
                  />
                ) : (
                  <span
                    className={`text-[26px] font-bold uppercase leading-none tracking-[-0.02em] md:text-[30px] ${
                      item.wordmarkClassName ?? "text-[#000000]"
                    }`}
                  >
                    {t(item.name)}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
