type IntegrationItem = {
  name: string;
  logo: string;
  logoClassName?: string;
};

const integrations: IntegrationItem[] = [
  {
    name: "SAP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    logoClassName: "max-h-[52px] max-w-[120px]",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    logoClassName: "max-h-[42px] max-w-[165px]",
  },
  {
    name: "Odoo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg",
    logoClassName: "max-h-[66px] max-w-[160px]",
  },
  {
    name: "IFS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/IFS_AB_logo.svg",
    logoClassName: "max-h-[62px] max-w-[130px]",
  },
];

export default function EnterpriseMsfaIntegrationsSection() {
  return (
    <section className="relative overflow-hidden border-t-[6px] border-[#111E40] bg-white px-6 py-[92px] text-[#11182f]">
      <div className="mx-auto max-w-[1320px]">
        {/* Header */}
        <div className="mx-auto max-w-[920px] text-center">
          <p className="text-[24px] font-medium leading-none tracking-[-0.04em] text-[#3f93cf]">
            Enterprise Ecosystem
          </p>

          <h2 className="mt-7 text-[46px] font-bold leading-[1.08] tracking-[-0.065em] text-black md:text-[64px]">
            Integrations
          </h2>

          <p className="mx-auto mt-7 max-w-[950px] text-[20px] font-medium leading-[1.45] tracking-[-0.035em] text-black md:text-[23px]">
            Connect to your ERP and analytics stack. We provide seamless
            bi-directional handshakes with your core platforms.
          </p>
        </div>

        {/* Integration Cards */}
        <div className="mx-auto mt-[76px] grid max-w-[1260px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((item) => (
            <article
              key={item.name}
              className="group flex h-[150px] flex-col items-center justify-center rounded-[8px] border border-[#d8dfe7] bg-white px-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#b7dff4] hover:shadow-[0_22px_65px_rgba(17,30,64,0.12)]"
            >
              <div className="flex h-[72px] items-center justify-center">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  loading="lazy"
                  className={`object-contain transition duration-300 group-hover:scale-110 ${
                    item.logoClassName ?? "max-h-[58px] max-w-[150px]"
                  }`}
                />
              </div>

              <p className="mt-3 text-[18px] font-medium leading-none tracking-[-0.035em] text-[#42637a]">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}