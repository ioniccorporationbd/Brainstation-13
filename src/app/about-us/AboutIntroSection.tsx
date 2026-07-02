export default function AboutIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[105px] text-[#07112b]">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        {/* Left Content */}
        <div>
          <h2 className="max-w-[620px] text-[42px] font-medium leading-[1.08] tracking-[-0.075em] text-[#07112b] md:text-[58px] lg:text-[64px]">
            Innovating Digital Solutions
            <br />
            Since 2006
          </h2>

          <p className="mt-8 max-w-[650px] text-[18px] font-medium leading-[1.55] tracking-[-0.035em] text-[#6b7280] md:text-[22px]">
            BrainStation-23 is a leading software development company committed
            to delivering cutting-edge digital solutions that drive business
            growth and transformation.
          </p>

          {/* Mission Vision */}
          <div className="mt-[72px] grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-[24px] font-black leading-tight tracking-[-0.045em] text-[#07112b] md:text-[28px]">
                Our Mission
              </h3>

              <p className="mt-6 max-w-[320px] text-[17px] font-medium leading-[1.5] tracking-[-0.03em] text-[#6b7280] md:text-[20px]">
                Your trusted companion for digital leadership by empowering
                people to achieve more with less
              </p>
            </div>

            <div>
              <h3 className="text-[24px] font-black leading-tight tracking-[-0.045em] text-[#07112b] md:text-[28px]">
                Our Vision
              </h3>

              <p className="mt-6 max-w-[340px] text-[17px] font-medium leading-[1.5] tracking-[-0.03em] text-[#6b7280] md:text-[20px]">
                To be the fastest digital transformation and innovation partner
                by engaging global talents thus creating positive impact.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-[220px] w-[220px] rounded-full bg-[#08a7df]/10 blur-[80px]" />

          <div className="relative overflow-hidden rounded-[10px] bg-[#f4f8fc] shadow-[0_24px_70px_rgba(17,30,64,0.10)]">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
              alt="Brain Station 23 software development team working together"
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-[1.04] md:h-[560px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}