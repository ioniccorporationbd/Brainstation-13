export default function SpecialPrograms() {
  return (
    <aside
      id="special-programs"
      className="min-h-screen w-full bg-white px-7 py-10 lg:w-[520px] lg:px-9 lg:py-14"
    >
      <div className="sticky top-8">
        {/* Top Pill */}
        <div className="mb-28 flex min-h-[64px] w-full items-center rounded-full border-[3px] border-[#ff7438] bg-[#eaf4ff] px-8 text-[18px] font-extrabold text-[#351100] shadow-[0_14px_32px_rgba(255,116,56,0.1)]">
          Special Programs
        </div>

        {/* Title */}
        <h2 className="max-w-[470px] text-[34px] font-black leading-[1.08] tracking-[-0.045em] text-[#202833] md:text-[40px]">
          Deliver the Support Students Deserve
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-[470px] text-[17px] font-medium leading-[1.65] text-[#202833]">
          Bring compliance workflows and data into one connected system. Ensure
          every student receives the right services on time by reducing manual
          tracking and improving team alignment.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-start gap-5">
          <a
            href="#"
            className="inline-flex h-[52px] items-center justify-center gap-3 rounded-lg border border-[#0068ff] bg-white px-5 text-[17px] font-extrabold text-[#0068ff] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0068ff] hover:text-white hover:shadow-[0_14px_28px_rgba(0,104,255,0.2)]"
          >
            <span className="text-[20px]">→</span>
            Product Details
          </a>

          <button
            type="button"
            className="inline-flex items-center gap-3 text-[17px] font-extrabold text-[#0068ff] transition-all duration-300 hover:translate-x-1"
          >
            <span className="text-[18px]">☆</span>
            Save Product
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 space-y-10">
          <div>
            <h3 className="text-[56px] font-black leading-none tracking-[-0.06em] text-[#ff7438] md:text-[64px]">
              1200+
            </h3>

            <p className="mt-3 max-w-[460px] text-[16px] font-extrabold leading-6 text-[#202833]">
              Organizations using PowerSchool for special programs
            </p>
          </div>

          <div>
            <h3 className="text-[56px] font-black leading-none tracking-[-0.06em] text-[#ff7438] md:text-[64px]">
              1.7M
            </h3>

            <p className="mt-3 max-w-[460px] text-[16px] font-extrabold leading-6 text-[#202833]">
              Student services forms completed each year
            </p>
          </div>

          <div>
            <h3 className="text-[56px] font-black leading-none tracking-[-0.06em] text-[#ff7438] md:text-[64px]">
              9M+
            </h3>

            <p className="mt-3 max-w-[460px] text-[16px] font-extrabold leading-6 text-[#202833]">
              Students supported
            </p>
          </div>
        </div>

        {/* Quote Card */}
        <div className="mt-10 overflow-hidden rounded-[18px] bg-[#ffd09a] p-7 shadow-[0_18px_45px_rgba(255,116,56,0.16)]">
          <p className="text-[20px] font-medium leading-[1.45] text-[#23140e]">
            “Two-way data flow between PowerSchool SIS and Special Programs
            ensures that SODA&apos;s data is always current. Teachers also get
            alerts for student accommodations in their IEP or 504 plan . . . Now
            I can focus on other things besides compliance.”
          </p>

          {/* Dotted logo area */}
          <div className="relative mt-7 flex min-h-[150px] items-center justify-center overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle,#ff7438_1.35px,transparent_1.35px)] [background-size:18px_18px] opacity-60" />

            <div className="relative z-10 flex items-center justify-center">
              <div className="flex h-[105px] w-[190px] items-center justify-center rounded-xl bg-white/20 px-4 text-center text-[15px] font-black uppercase leading-tight text-[#351100]">
                School of Dreams Academy
              </div>
            </div>
          </div>

          {/* Author */}
          <div className="mt-7">
            <h3 className="text-[18px] font-black text-black">
              Paul Howard
            </h3>

            <p className="mt-1 text-[15px] font-medium leading-6 text-[#2f2118]">
              Special Services Leader, School of Dreams Academy
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}