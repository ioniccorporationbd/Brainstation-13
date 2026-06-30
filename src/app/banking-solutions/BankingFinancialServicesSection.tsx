import { ChevronRight } from "lucide-react";

type ServiceItem = {
  title: string;
};

const services: ServiceItem[] = [
  { title: "Retail Internet Banking" },
  { title: "Corporate Internet Banking" },
  { title: "Mobile Internet Banking" },
  { title: "Card Services" },
  { title: "Extensive Customization" },
  { title: "FDI Automation" },
  { title: "Internet Banking System" },
  { title: "Cyber Security and Audit" },
  { title: "Banking Process Automation" },
  { title: "Banking CRM" },
  { title: "Cloud Services for Banking" },
];

export default function BankingFinancialServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] px-6 py-[120px] text-black">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left Title */}
        <div className="lg:pl-8">
          <p className="text-[14px] font-medium uppercase tracking-[0.12em] text-[#11182f]">
            What We Can Do
          </p>

          <h2 className="mt-7 max-w-[360px] text-[62px] font-light leading-[0.98] tracking-[-0.07em] text-black md:text-[78px]">
            Offered <br />
            Services
          </h2>

          <div className="mt-9 h-[2px] w-[88px] bg-[#28a8e0]" />
        </div>

        {/* Right Service List */}
        <div className="mx-auto w-full max-w-[650px]">
          <ul className="space-y-[24px]">
            {services.map((service) => (
              <li key={service.title}>
                <button
                  type="button"
                  className="group flex w-full items-center gap-8 text-left"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#69bee8] transition duration-300 group-hover:translate-x-1 group-hover:text-[#ffab2e]">
                    <ChevronRight size={34} strokeWidth={3.2} />
                  </span>

                  <span className="text-[24px] font-light leading-[1.2] tracking-[-0.04em] text-black transition duration-300 group-hover:text-[#28a8e0] md:text-[29px]">
                    {service.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>
    </section>
  );
}