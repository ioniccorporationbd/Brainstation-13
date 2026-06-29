export default function MoodleHeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f1f44] text-white">
      {/* CSS Circle Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[36%] top-[-42%] h-[1150px] w-[1150px] rounded-full border border-[#1f6aa0]/30" />
        {Array.from({ length: 42 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-[36%] top-[-42%] rounded-full border border-[#1f6aa0]/25"
            style={{
              width: `${1150 - i * 24}px`,
              height: `${1150 - i * 24}px`,
              transform: `translate(${i * 12}px, ${i * 12}px)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1320px] grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-[1fr_1.05fr]">
        {/* Left Content */}
        <div>
          <span className="mb-8 inline-flex rounded-md bg-white/10 px-4 py-2 text-lg font-semibold text-[#43a6ff]">
            LMS
          </span>

          <h1 className="max-w-[650px] text-[48px] font-light leading-[1.08] tracking-[-0.05em] md:text-[66px] lg:text-[74px]">
            Enterprise Grade <br />
            Moodle LMS & <br />
            Proctoring Services
          </h1>

          <p className="mt-8 max-w-[650px] text-[20px] font-medium leading-[1.55] text-white">
            Secure. Scalable. Audit-ready learning and assessment platforms
            <br className="hidden md:block" />
            for institutions that cannot afford failure.
          </p>

          <div className="mt-12 flex items-center gap-3 text-base font-semibold text-white">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/80 text-[9px]">
              ✓
            </span>
            Request Free Assessment
          </div>

          
        </div>

        {/* Right Video */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-video w-full max-w-[628px] overflow-hidden rounded-lg bg-black shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Moodle Proctoring Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Bottom Policy Button */}
      <div className="fixed bottom-0 left-[100px] z-20 bg-[#061b2d] px-3 py-2 text-xs font-bold text-white">
        Privacy & Cookies Policy
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-14 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-6 right-5 z-20 text-[10px] text-white/40">
        Powered by NeuralFlow
      </span>
    </section>
  );
}