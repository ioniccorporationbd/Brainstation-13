import Link from "next/link";

export default function ManagedServiceHeroSection() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#111E40] px-6 text-white">
      {/* Circle Background */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 46 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full border border-[#236aa0]/20"
            style={{
              width: `${1320 - index * 30}px`,
              height: `${1320 - index * 30}px`,
              left: "68%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid min-h-[680px] max-w-[1320px] grid-cols-1 items-center gap-14 py-20 lg:grid-cols-[0.9fr_1fr]">
        {/* Left Content */}
        <div>
          <span className="inline-flex rounded-[7px] bg-[#1d315c] px-5 py-3 text-[18px] font-bold leading-none tracking-[-0.03em] text-[#3ba3e4]">
            Managed Service
          </span>

          <h1 className="mt-10 max-w-[720px] text-[46px] font-bold leading-[1.18] tracking-[-0.07em] text-white md:text-[60px]">
            End-to-End Software Delivery: <br />
            Fully Managed, Always <br />
            Accountable
          </h1>

          <p className="mt-9 max-w-[720px] text-[21px] font-medium leading-[1.45] tracking-[-0.035em] text-white/90 md:text-[24px]">
            Focus on your strategic goals while we take care of everything else.
            From planning to release and post-launch support, Brain Station 23
            delivers turnkey software solutions with complete ownership
          </p>

          <Link
            href="/schedule-a-call"
            className="mt-12 inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[17px] font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffc15a] hover:shadow-[0_14px_34px_rgba(255,171,46,0.32)]"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[390px] w-full max-w-[680px] overflow-hidden rounded-[8px] shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:h-[430px]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
              alt="Managed software delivery team meeting"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#20a7e8]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-white/45">
        Powered by NeuralFlow
      </span>
    </section>
  );
}