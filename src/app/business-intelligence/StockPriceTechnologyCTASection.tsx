import { FaCircleCheck } from "react-icons/fa6";

const technologies = ["scikit learn", "numpy", "react", "flask"];

export default function StockPriceTechnologyCTASection() {
  return (
    <section className="w-full">
      {/* Technology Used */}
      <div className="w-full bg-[#7b8084] py-[82px] md:py-[92px]">
        <div className="mx-auto w-full max-w-[1200px] px-5 text-center sm:px-8 xl:px-0">
          <h2 className="text-[42px] font-bold leading-[1.15] tracking-[-0.035em] text-white sm:text-[52px]">
            Technology Used
          </h2>

          <div className="mx-auto mt-[18px] h-[2px] w-[118px] bg-[#159bd7]" />

          <div className="mt-[30px] flex flex-wrap items-center justify-center gap-x-[34px] gap-y-[16px]">
            {technologies.map((item) => (
              <div
                key={item}
                className="flex items-center gap-[10px] text-[22px] font-semibold text-white sm:text-[26px]"
              >
                <FaCircleCheck className="text-[22px] text-white sm:text-[24px]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Phone Section - no white gap */}
      <div className="w-full bg-[#0789ae]">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-8 px-5 py-[42px] sm:px-8 md:flex-row md:items-center md:justify-between xl:px-0">
          <div>
            <h3 className="text-[26px] font-semibold leading-[1.25] text-white sm:text-[30px]">
              Would like to start a project with us?
            </h3>

            <p className="mt-[18px] text-[14px] font-normal text-white">
              Feel free to drop an email{" "}
              <a
                href="mailto:sales@brainstation-23.com"
                className="hover:underline"
              >
                (sales@brainstation-23.com)
              </a>{" "}
              and share your idea.
            </p>
          </div>

          <a
            href="tel:+8801404055226"
            className="inline-flex h-[50px] w-fit items-center justify-center rounded-full bg-[#ffad2f] px-[34px] text-[16px] font-bold text-black transition hover:bg-white hover:text-[#0789ae]"
          >
            +8801404055226
          </a>
        </div>
      </div>
    </section>
  );
}