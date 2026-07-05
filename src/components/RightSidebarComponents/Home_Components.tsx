export default function RightContentSection() {
  return (
    <aside className="min-h-screen w-full bg-white px-7 py-6 lg:w-[520px] lg:px-9 lg:py-8">
      <div className="sticky top-8">
        <div className="mb-20 flex min-h-[64px] w-full items-center rounded-full bg-[#ff7438] px-8 text-[18px] font-extrabold text-[#351100] shadow-[0_16px_35px_rgba(255,116,56,0.18)]">
          Home Connections
        </div>

        <p className="max-w-[455px] text-[18px] font-medium leading-[1.6] text-[#333942]">
          When student information and communications are clear and consistent,
          schools and families connect with confidence. Shikkha Chat brings
          together student and family operations in one connected system that
          helps school communities engage around trusted information.
        </p>

        <div className="mt-10">
          <h2 className="text-[56px] font-black leading-none tracking-[-0.06em] text-[#ff7438] md:text-[64px]">
            +70%
          </h2>

          <p className="mt-3 text-[17px] font-extrabold leading-6 text-[#202833]">
            Improvement in data accuracy
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[20px] bg-[#ffd09a] p-7 shadow-[0_18px_45px_rgba(255,116,56,0.16)]">
          <p className="text-[20px] font-medium leading-[1.45] text-[#23140e]">
            “We improved data accuracy and helped families stay connected with
            clear, trusted updates.”
          </p>

          <div className="relative mt-7 flex min-h-[135px] items-center justify-center overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle,#ff7438_1.4px,transparent_1.4px)] [background-size:18px_18px] opacity-65" />

            <div className="relative z-10 flex items-center gap-8">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                alt="School leader"
                className="h-[78px] w-[78px] rounded-2xl object-cover grayscale shadow-[0_12px_28px_rgba(0,0,0,0.15)]"
              />

              <div className="flex h-[82px] w-[130px] items-center justify-center rounded-xl bg-white/40 text-center text-[15px] font-black text-[#351100]">
                School Logo
              </div>
            </div>
          </div>

          <div className="mt-7">
            <h3 className="text-[18px] font-black text-black">
              Dr. Angela Hargrave
            </h3>

            <p className="mt-1 text-[15px] font-medium leading-6 text-[#2f2118]">
              Technology Leader, Connected School Community
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}