type IntegrationItem = {
  name: string;
};

const integrations: IntegrationItem[] = [
  { name: "Oracle FLEXCUBE" },
  { name: "Infosys Finacle" },
  { name: "Temenos" },
  { name: "Apache Fineract" },
];

export default function DigitalBankingCoreIntegrationSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[82px] text-[#050b18]">
      <div className="mx-auto max-w-[1180px] text-center">
        <h2 className="text-[42px] font-black leading-[1.05] tracking-[-0.065em] text-black md:text-[58px] lg:text-[64px]">
          Core Banking Integration
        </h2>

        <p className="mx-auto mt-7 max-w-[900px] text-[18px] font-medium leading-[1.45] tracking-[-0.04em] text-black md:text-[21px]">
          Seamless integration with leading core banking systems. Supported
          integrations include:
        </p>

        <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
          {integrations.map((item) => (
            <span
              key={item.name}
              className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-[#0087c8] bg-transparent px-5 py-2 text-[15px] font-medium leading-none tracking-[-0.035em] text-black transition duration-300 hover:-translate-y-1 hover:bg-[#0087c8] hover:text-white hover:shadow-[0_14px_34px_rgba(0,135,200,0.22)] md:text-[17px]"
            >
              {item.name}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-9 max-w-[850px] text-[18px] font-medium leading-[1.45] tracking-[-0.04em] text-black md:text-[21px]">
          API-based architecture allows easy integration with legacy banking
          infrastructure.
        </p>
      </div>
    </section>
  );
}