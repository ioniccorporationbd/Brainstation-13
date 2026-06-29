import Link from "next/link";

export default function SharePointHeroSection() {
  return (
    <section
      className="relative min-h-[640px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      {/* Blue overlay to match SharePoint style */}
      <div className="absolute inset-0 bg-[#0067b8]/35" />

      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-[1220px] items-center px-6">
        <div className="w-full max-w-[720px] bg-white/90 px-[52px] py-[82px] backdrop-blur-[1px]">
          <p className="mb-7 text-[15px] font-bold uppercase leading-none tracking-[0.45em] text-black">
            FEATURED FOR 2020
          </p>

          <h1 className="text-[62px] font-bold leading-none tracking-[-0.045em] text-black">
            SharePoint
          </h1>

          <p className="mt-8 max-w-[560px] text-[16px] font-normal leading-[2] text-black">
            Get the best comprehensive set of SharePoint services to meet your
            business requirements.
          </p>

          <Link
            href="/sharepoint"
            className="mt-8 inline-flex rounded-full bg-[#ffab2e] px-8 py-4 text-[15px] font-bold uppercase text-black transition-all duration-300 hover:bg-[#ffc15a]"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </section>
  );
}