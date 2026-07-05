export default function StudentInformation() {
  return (
    <aside
      id="student-information"
      className="min-h-screen w-full bg-white px-7 py-10 lg:w-[520px] lg:px-9 lg:py-14"
    >
      <div className="sticky top-8">
        {/* Pill */}
        <div className="mb-28 flex min-h-[64px] w-full items-center rounded-full bg-[#ffd09a] px-8 text-[18px] font-extrabold uppercase text-[#243241] shadow-[0_14px_32px_rgba(255,116,56,0.12)]">
          Student Information
        </div>

        {/* Title */}
        <h2 className="max-w-[470px] text-[34px] font-black leading-[1.08] tracking-[-0.045em] text-[#202833] md:text-[40px]">
          Give Educators Time Back
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-[470px] text-[17px] font-medium leading-[1.65] text-[#202833]">
          When data is scattered across systems, staff spend time fixing records
          instead of focusing on students. PowerSchool brings student
          information, enrollment, and special program management into one
          connected system so schools can operate confidently and meet every
          student&apos;s needs.
        </p>

        {/* Stat */}
        <div className="mt-10">
          <h3 className="text-[54px] font-black leading-none tracking-[-0.06em] text-[#ff7438] md:text-[64px]">
            10–20 Hours
          </h3>

          <p className="mt-3 max-w-[460px] text-[16px] font-extrabold leading-6 text-[#202833]">
            Busy-work time saved by teachers every week
          </p>
        </div>

        {/* Quote card */}
        <div className="mt-10 overflow-hidden rounded-[18px] bg-[#ffd09a] p-7 shadow-[0_18px_45px_rgba(255,116,56,0.16)]">
          <p className="text-[20px] font-medium leading-[1.45] text-[#23140e]">
            “[PowerSchool] is saving our teachers time in manual grading, which
            is low-level work. You don&apos;t want your certified teachers doing
            that kind of work. You want them focused on teaching and measuring
            the students.”
          </p>

          {/* dotted image/logo area */}
          <div className="relative mt-7 flex min-h-[150px] items-center justify-center overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle,#ff7438_1.35px,transparent_1.35px)] [background-size:18px_18px] opacity-60" />

            <div className="relative z-10 flex items-center gap-9">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=220&q=80"
                alt="Bart Banfield"
                className="h-[84px] w-[84px] rounded-2xl object-cover grayscale shadow-[0_12px_28px_rgba(0,0,0,0.15)]"
              />

              <div className="flex h-[90px] w-[150px] items-center justify-center rounded-xl bg-white/30 px-4 text-center text-[15px] font-black uppercase leading-tight text-[#351100]">
                Epic Charter Schools
              </div>
            </div>
          </div>

          {/* Author */}
          <div className="mt-7">
            <h3 className="text-[18px] font-black text-black">
              Bart Banfield
            </h3>

            <p className="mt-1 text-[15px] font-medium leading-6 text-[#2f2118]">
              Former School Leader, Epic Charter Schools, Oklahoma
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}