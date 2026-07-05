export default function FamilyEngagement() {
  return (
    <aside
      id="family-engagement"
      className="min-h-screen w-full bg-white px-7 py-10 lg:w-[520px] lg:px-9 lg:py-14"
    >
      <div className="sticky top-8">
        {/* Top Pill */}
        <div className="mb-28 flex min-h-[64px] w-full items-center rounded-full bg-[#ffd09a] px-8 text-[18px] font-extrabold uppercase text-[#351100] shadow-[0_14px_32px_rgba(255,116,56,0.1)]">
          Family Engagement
        </div>

        {/* Title */}
        <h2 className="max-w-[470px] text-[34px] font-black leading-[1.08] tracking-[-0.045em] text-[#202833] md:text-[40px]">
          Bring Families Closer to Every School Day
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-[470px] text-[17px] font-medium leading-[1.65] text-[#202833]">
          Keeping families informed shouldn&apos;t require juggling tools, data
          gaps, or mixed messages. PowerSchool makes communication clear,
          consistent, and accessible—saving staff time, keeping families
          connected, and ensuring students are in school.
        </p>

        {/* Stat */}
        <div className="mt-10">
          <h3 className="text-[56px] font-black leading-none tracking-[-0.06em] text-[#ff7438] md:text-[64px]">
            4%
          </h3>

          <p className="mt-3 max-w-[460px] text-[16px] font-extrabold leading-6 text-[#202833]">
            Improvement in chronic absenteeism districtwide
          </p>
        </div>

        {/* Quote Card */}
        <div className="mt-10 overflow-hidden rounded-[18px] bg-[#ffd09a] p-7 shadow-[0_18px_45px_rgba(255,116,56,0.16)]">
          <p className="text-[20px] font-medium leading-[1.45] text-[#23140e]">
            “As more staff and teachers began using the platform, what started
            as a communication tool became an engagement engine.”
          </p>

          {/* Dotted image/logo area */}
          <div className="relative mt-7 flex min-h-[150px] items-center justify-center overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle,#ff7438_1.35px,transparent_1.35px)] [background-size:18px_18px] opacity-60" />

            <div className="relative z-10 flex items-center gap-9">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=220&q=80"
                alt="Dr. Matt Anderson"
                className="h-[84px] w-[84px] rounded-2xl object-cover grayscale shadow-[0_12px_28px_rgba(0,0,0,0.15)]"
              />

              <div className="flex h-[90px] w-[150px] items-center justify-center rounded-xl bg-white/30 px-4 text-center text-[15px] font-black uppercase leading-tight text-[#351100]">
                JCPS
              </div>
            </div>
          </div>

          {/* Author */}
          <div className="mt-7">
            <h3 className="text-[18px] font-black text-black">
              Dr. Matt Anderson
            </h3>

            <p className="mt-1 text-[15px] font-medium leading-6 text-[#2f2118]">
              Climate and Culture Leader, Jefferson County Public Schools,
              Kentucky
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}