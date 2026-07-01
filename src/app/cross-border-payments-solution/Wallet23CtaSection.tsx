import Link from "next/link";

export default function Wallet23CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[72px] text-[#07112b]">
      <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-10 md:flex-row md:items-center">
        {/* Left Text */}
        <h2 className="max-w-[760px] text-[38px] font-medium leading-[1.12] tracking-[-0.075em] text-[#07112b] md:text-[52px] lg:text-[60px]">
          Save 70% of development time and
          <br />
          launch a future-proof wallet in weeks.
          <br />
          Want to see a demo?
        </h2>

        {/* Button */}
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#ffab2e] px-9 py-4 text-[16px] font-black tracking-[-0.025em] text-black transition duration-300 hover:bg-[#ffc15a] hover:shadow-[0_18px_45px_rgba(255,171,46,0.28)]"
        >
          Let&apos;s Book a Call
        </Link>
      </div>
    </section>
  );
}