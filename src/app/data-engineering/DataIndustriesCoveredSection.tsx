import {
  PiCarProfile,
  PiBuildings,
  PiPill,
  PiHeart,
} from "react-icons/pi";

type IndustryItem = {
  title: string;
  icon: React.ReactNode;
};

const industries: IndustryItem[] = [
  {
    title: "Automobile",
    icon: <PiCarProfile />,
  },
  {
    title: "Real Estate",
    icon: <PiBuildings />,
  },
  {
    title: "Pharmaceutical",
    icon: <PiPill />,
  },
  {
    title: "Health Care",
    icon: <PiHeart />,
  },
];

export default function DataIndustriesCoveredSection() {
  return (
    <section className="w-full bg-[#f4f8fc] py-[72px] md:py-[82px] lg:py-[92px]">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 xl:px-0">
        <h2 className="text-center text-[42px] font-normal leading-[1.12] tracking-[-0.055em] text-[#061026] sm:text-[52px] lg:text-[58px]">
          Industries Covered
        </h2>

        <div className="mx-auto mt-[42px] grid max-w-[980px] grid-cols-1 gap-x-[54px] gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="flex items-center justify-center gap-[18px]"
            >
              <span className="flex text-[46px] leading-none text-[#009fe3]">
                {industry.icon}
              </span>

              <h3 className="text-[26px] font-medium leading-[1.2] tracking-[-0.035em] text-black sm:text-[28px] lg:text-[30px]">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}