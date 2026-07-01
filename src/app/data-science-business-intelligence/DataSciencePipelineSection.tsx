export default function DataSciencePipelineSection() {
  return (
    <section className="relative overflow-hidden  border-[#f4f8fc] bg-white px-6 py-[84px] text-black">
      <div className="mx-auto max-w-[1220px]">
        <div className="text-center">
          <h2 className="text-[42px] font-light leading-[1.08] tracking-[-0.055em] text-black md:text-[58px]">
            Data Science Pipeline
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-[176px] bg-[#28a8e0]" />
        </div>

        <div className="mx-auto mt-[70px] max-w-[980px] overflow-hidden rounded-[12px] shadow-[0_18px_55px_rgba(17,30,64,0.10)]">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
            alt="Data Science Pipeline"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}