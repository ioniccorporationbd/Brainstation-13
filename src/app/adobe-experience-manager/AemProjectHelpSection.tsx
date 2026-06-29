import Link from "next/link";

export default function AemProjectHelpSection() {
  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="max-w-[560px] text-[44px] font-bold leading-[1.05] tracking-[-0.04em] text-black">
            Let Us Help You With Your <br />
            Project
          </h2>

          <Link
            href="/contact-us"
            className="mt-[52px] inline-flex rounded-full bg-[#ffab2e] px-7 py-3.5 text-[16px] font-bold text-black transition hover:bg-[#ffc15a]"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
            alt="Project consultation"
            className="h-[500px] w-full max-w-[560px] object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}