import Link from "next/link";

type CaseMeta = {
  label: string;
  value: string;
};

const caseMeta: CaseMeta[] = [
  {
    label: "Platforms",
    value: "Mobile & Web",
  },
  {
    label: "Technology Used",
    value: "NEXT.JS, ANGULAR, AWS, Microsoft.Net, Flutter, Firebase",
  },
  {
    label: "Industry",
    value: "Retail, Distribution & E-commerce",
  },
  {
    label: "Tags",
    value: "E-commerce",
  },
];

export default function CaseStudyHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[108px] text-[#0a0a0a]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            Case Study
          </p>

          <h1 className="mx-auto max-w-[980px] text-[42px] font-normal leading-[1.18] tracking-[-0.02em] text-[#0a0a0a] md:text-[58px]">
            Achieving Digital Excellence in Retail: Shwapno’s Scalable,
            Customer-Centric E-Commerce Transformation
          </h1>

          <p className="mx-auto mt-8 max-w-[860px] text-[20px] font-medium leading-[1.55] tracking-[-0.015em] text-[#565656] md:text-[23px]">
            Magnetic Solution Limited rebuilt Shwapno’s e-commerce platform, delivering
            a scalable and hyperlocal digital experience that drove significant
            growth and improved customer ratings.
          </p>

          <Link
            href="/schedule-a-call"
            className="mt-11 inline-flex rounded-full bg-[#c91f28] px-8 py-4 text-[17px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a71920] hover:shadow-[0_14px_34px_rgba(201,31,40,0.32)]"
          >
            Schedule a Call
          </Link>
        </div>

        <div className="mt-[92px] grid grid-cols-1 gap-8 border-y border-[#ececec] py-12 sm:grid-cols-2 lg:grid-cols-4">
          {caseMeta.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-[16px] font-medium leading-none tracking-[-0.01em] text-[#565656]">
                {item.label}
              </p>

              <p className="mx-auto mt-5 max-w-[260px] text-[20px] font-bold leading-[1.35] tracking-[-0.045em] text-[#0a0a0a] md:text-[22px]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#c91f28]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}