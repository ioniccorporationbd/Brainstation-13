import React from "react";

const capabilities = [
  "Build scalable ML models for prediction, classification, and automation.",
  "Enable systems to understand and process human language (NLP).",
  "Implement computer vision for image, video, face, and object recognition.",
  "Deliver predictive and prescriptive analytics for smarter decisions.",
  "Automate workflows to boost efficiency and reduce manual work.",
  "Support complex decision-making with AI-driven insights.",
];

const IMAGE_URL =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1100&q=90";

export default function MLAICapabilitiesSection() {
  return (
    <section className="w-full bg-[#f7f7f7] py-[80px] md:py-[95px] lg:py-[110px]">
      <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 items-center gap-[55px] px-5 sm:px-8 lg:grid-cols-[520px_1fr] lg:gap-[70px] xl:px-0">
        {/* Left Content */}
        <div>
          <h2 className="mb-[28px] text-center text-[30px] font-bold leading-[1.2] tracking-[-0.025em] text-black md:text-[34px] lg:text-[36px]">
            Our AI Capabilities
          </h2>

          <ul className="space-y-[19px]">
            {capabilities.map((item) => (
              <li
                key={item}
                className="grid grid-cols-[16px_1fr] gap-[18px] text-[22px] font-normal leading-[1.85] tracking-[-0.025em] text-black md:text-[24px]"
              >
                <span className="mt-[15px] h-[7px] w-[7px] rounded-full bg-black" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="h-[360px] w-full max-w-[590px] overflow-hidden bg-gray-200 sm:h-[470px] lg:h-[580px]">
            <img
              src={IMAGE_URL}
              alt="AI capabilities and machine learning dashboard"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}