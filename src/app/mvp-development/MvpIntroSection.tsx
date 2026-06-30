import Image from "next/image";

export default function MvpIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#11182f]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[80px] lg:grid-cols-[0.95fr_1fr]">
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="group relative h-[420px] w-full max-w-[620px] overflow-hidden rounded-[8px] bg-[#f4f8fc] shadow-[0_18px_50px_rgba(17,30,64,0.08)] md:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1400&auto=format&fit=crop"
              alt="MVP planning discussion with business team"
              fill
              sizes="(max-width: 768px) 100vw, 620px"
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:pl-8">
          <p className="mb-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#4fa0d1]">
            MVP Foundation
          </p>

          <h2 className="max-w-[640px] text-[42px] font-bold leading-[1.08] tracking-[-0.07em] text-[#050b18] md:text-[56px]">
            What Is an MVP?
          </h2>

          <p className="mt-8 max-w-[680px] text-[22px] font-medium leading-[1.55] tracking-[-0.04em] text-[#6f7782] md:text-[26px]">
            A Minimum Viable Product (MVP) is the simplest version of your
            software that delivers core functionality to real users. By focusing
            on essential features, you test product-market fit, gather feedback,
            and iterate quickly by saving time, budget, and risk on full
            scale-development.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              "Validate faster",
              "Reduce build risk",
              "Launch lean",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[14px] border border-[#dce8f2] bg-[#f4f8fc] px-5 py-4 text-[15px] font-bold text-[#42637a]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}