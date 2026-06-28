import {
  BsDiagram3,
  BsCpu,
  BsGraphUpArrow,
  BsGlobe2,
} from "react-icons/bs";

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: FeatureItem[] = [
  {
    title: "Deep Data DNA",
    description:
      "Gain clarity and control over complex, large-scale financial data and turn it into actionable intelligence.",
    icon: <BsDiagram3 />,
  },
  {
    title: "AI & Future Readiness",
    description:
      "Move from reactive reporting to predictive, AI-driven insights that keep risk ahead of you.",
    icon: <BsCpu />,
  },
  {
    title: "Business-Centric ROI",
    description:
      "Lower operational costs while enabling faster, smarter decisions across your organization.",
    icon: <BsGraphUpArrow />,
  },
  {
    title: "Global-Grade Standards",
    description:
      "Operate with built-in security and compliance backed by ISO 9001 & ISO 27001 certified processes you can trust.",
    icon: <BsGlobe2 />,
  },
];

const TEAM_IMAGE =
  "https://brainstation-23.com/wp-content/uploads/2025/10/Hero-Img-v2.2.webp";

export default function DataWhyBrainStationSection() {
  return (
    <section className="w-full bg-[#f4f8fc] py-[78px] md:py-[94px] lg:py-[106px]">
      <div className="mx-auto grid w-full max-w-[1220px] grid-cols-1 items-center gap-[58px] px-5 sm:px-8 lg:grid-cols-[1fr_500px] lg:gap-[76px] xl:px-0">
        {/* Left Content */}
        <div>
          <h2 className="text-[42px] font-normal leading-[1.12] tracking-[-0.055em] text-[#061026] sm:text-[52px] lg:text-[58px]">
            Why Brain Station 23
          </h2>

          <p className="mt-[28px] max-w-[760px] text-[20px] font-normal leading-[1.45] text-[#335e79] sm:text-[22px]">
            Bronze winner in the Google Artificial intelligence Competition
            (Kaggle) in the Machine Learning category.
          </p>

          <div className="mt-[28px] space-y-[31px]">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="h-[420px] w-full max-w-[500px] overflow-hidden rounded-[8px] bg-gray-200 sm:h-[520px] lg:h-[590px]">
            <img
              src={TEAM_IMAGE}
              alt="Brain Station 23 team discussion"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: FeatureItem }) {
  return (
    <article className="grid grid-cols-[56px_1fr] gap-[18px]">
      <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[6px] bg-[#05a4df] text-[27px] text-white">
        {feature.icon}
      </div>

      <div>
        <h3 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.035em] text-black sm:text-[26px]">
          {feature.title}
        </h3>

        <p className="mt-[7px] max-w-[700px] text-[18px] font-normal leading-[1.45] text-[#335e79] sm:text-[20px]">
          {feature.description}
        </p>
      </div>
    </article>
  );
}