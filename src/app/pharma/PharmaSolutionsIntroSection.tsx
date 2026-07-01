export default function PharmaSolutionsIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[90px] text-[#11182f]">
      <div className="mx-auto max-w-[1280px]">
        {/* Top Title */}
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[38px] font-medium leading-[1.12] tracking-[-0.065em] text-[#050b18] md:text-[54px]">
            Pharma Solutions, Integration and <br />
            Products on comfort level
          </h2>

          <p className="mx-auto mt-7 max-w-[780px] text-[18px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a] md:text-[21px]">
            We deliver regulation-compliant solutions for enterprises operating
            in the healthcare sector to meet the demands of millions of people.
          </p>
        </div>

        {/* Middle Image / Doctors Network */}
        <div className="mx-auto mt-[70px] max-w-[650px]">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
            alt="Healthcare professionals network"
            className="h-[390px] w-full rounded-[28px] object-cover shadow-[0_24px_80px_rgba(17,30,64,0.10)]"
          />
        </div>

        {/* Small Bold Text */}
        <div className="mx-auto mt-10 max-w-[650px]">
          <h3 className="text-[16px] font-black uppercase leading-[1.35] tracking-[0.08em] text-[#111E40] md:text-[18px]">
            Big Data Power For Your Infield Force Activities Paired With The
            Comfort Of Simplicity
          </h3>
        </div>

        {/* Bottom Paragraph */}
        <div className="mx-auto mt-10 max-w-[1180px]">
          <p className="text-[18px] font-medium leading-[1.55] tracking-[-0.035em] text-[#42637a] md:text-[21px]">
            In addition to individual solutions for specialized requirements,
            we try to transfer our know how into products that we offer as
            Software as a Service. In this way, many customers benefit from
            proven processes. Based on the best practices for customer data
            platforms we have developed products that address the critical
            challenges pharma companies face today.
          </p>
        </div>
      </div>
    </section>
  );
}