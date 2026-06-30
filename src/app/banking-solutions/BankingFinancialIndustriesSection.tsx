import { Check } from "lucide-react";

const industries = [
  "Banks",
  "Financial Organization",
  "Banking & Fin-Tech Solution Providers",
];

export default function BankingFinancialIndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[105px] text-black">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.8fr_1fr_0.95fr]">
        {/* Left Title */}
        <div>
          <p className="text-[14px] font-medium uppercase tracking-[0.08em] text-black">
            Clients We Have Served In
          </p>

          <h2 className="mt-7 text-[56px] font-light leading-none tracking-[-0.06em] text-black md:text-[70px]">
            Industries
          </h2>

          <div className="mt-8 h-[2px] w-[88px] bg-[#28a8e0]" />
        </div>

        {/* Middle List */}
        <div>
          <ul className="space-y-8">
            {industries.map((item) => (
              <li
                key={item}
                className="group flex items-center gap-6 text-[24px] font-medium uppercase leading-[1.2] tracking-[0.15em] text-black md:text-[28px]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center text-black transition duration-300 group-hover:scale-110 group-hover:text-[#28a8e0]">
                  <Check size={30} strokeWidth={3.2} />
                </span>

                <span className="transition duration-300 group-hover:text-[#28a8e0]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="group relative h-[250px] overflow-hidden md:h-[320px] lg:h-[345px]">
            <img
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1400&auto=format&fit=crop"
              alt="Banking and financial industry"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
            />

            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}