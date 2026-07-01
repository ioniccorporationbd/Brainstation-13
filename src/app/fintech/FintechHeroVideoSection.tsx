import {
  BadgeCheck,
  CircleDollarSign,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export default function FintechHeroVideoSection() {
  return (
    <section className="relative overflow-hidden bg-[#111E40] px-6 py-[110px] text-white">
      {/* Background circular line pattern */}
      <div className="pointer-events-none absolute left-[34%] top-1/2 h-[980px] w-[980px] -translate-y-1/2 rounded-full border border-[#1f5d91]/35" />
      <div className="pointer-events-none absolute left-[36%] top-1/2 h-[900px] w-[900px] -translate-y-1/2 rounded-full border border-[#1f5d91]/35" />
      <div className="pointer-events-none absolute left-[38%] top-1/2 h-[820px] w-[820px] -translate-y-1/2 rounded-full border border-[#1f5d91]/35" />
      <div className="pointer-events-none absolute left-[40%] top-1/2 h-[740px] w-[740px] -translate-y-1/2 rounded-full border border-[#1f5d91]/35" />
      <div className="pointer-events-none absolute left-[42%] top-1/2 h-[660px] w-[660px] -translate-y-1/2 rounded-full border border-[#1f5d91]/35" />
      <div className="pointer-events-none absolute left-[44%] top-1/2 h-[580px] w-[580px] -translate-y-1/2 rounded-full border border-[#1f5d91]/35" />
      <div className="pointer-events-none absolute left-[46%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#1f5d91]/35" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.92fr_1fr]">
        {/* Left Content */}
        <div>
          <div className="mb-9 inline-flex rounded-[8px] bg-white/7 px-5 py-3 text-[20px] font-bold leading-none tracking-[-0.03em] text-[#3f93cf]">
            Fintech
          </div>

          <h1 className="max-w-[720px] text-[56px] font-light leading-[1.02] tracking-[-0.075em] text-white md:text-[78px] lg:text-[88px]">
            Launch Enterprise-
            <br />
            Grade Fintech
            <br />
            Solutions in 6 Weeks
          </h1>

          <p className="mt-9 max-w-[660px] text-[22px] font-bold leading-[1.45] tracking-[-0.045em] text-white">
            Accelerate your digital transformation with Brain Station 23’s
            proven fintech delivery framework — trusted by global banks, NBFCs,
            and fintech leaders to launch faster, lower costs, and deliver
            flawless customer experiences.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3 text-[17px] font-bold tracking-[-0.03em] text-white">
              <ShieldCheck size={18} strokeWidth={1.8} />
              PCI-DSS compliant
            </div>

            <div className="flex items-center gap-3 text-[17px] font-bold tracking-[-0.03em] text-white">
              <ExternalLink size={18} strokeWidth={1.8} />
              OWASP practices
            </div>
          </div>
        </div>

        {/* Right YouTube Video */}
        <div className="relative">
          <div className="overflow-hidden rounded-[8px] bg-black shadow-[0_28px_90px_rgba(0,0,0,0.36)]">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="Fintech Solutions by Brain Station 23"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[18px] bg-[#3f93cf]/10 blur-2xl" />
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <CircleDollarSign size={26} className="text-[#20a7e8]" />
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-white/45">
        Powered by NeuralFlow
      </span>
    </section>
  );
}