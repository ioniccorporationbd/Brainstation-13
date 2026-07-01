import Link from "next/link";

const circles = Array.from({ length: 34 }, (_, index) => 160 + index * 34);

const roadmapImage =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop";

const ecosystemImage =
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop";

export default function Wallet23LaunchPlatformSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[90px] text-[#07112b]">
      {/* Bottom left circle background */}
      <div className="pointer-events-none absolute bottom-[-260px] left-[-280px] h-[760px] w-[760px] overflow-hidden">
        {circles.map((size, index) => (
          <div
            key={index}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#8fd4f4]/35"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1220px]">
        {/* Top Section */}
        <div className="text-center">
          <h2 className="text-[34px] font-medium leading-[1.08] tracking-[-0.075em] text-[#050b18] md:text-[48px] lg:text-[56px]">
            Launch Your White-Label eWallet in Just 6 Weeks
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[16px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a] md:text-[18px]">
            A predictable, efficient path from discovery and branding to secure
            deployment and handover.
          </p>

          {/* Top online image */}
          <div className="mx-auto mt-[62px] max-w-[1040px] overflow-hidden rounded-[18px] shadow-[0_24px_70px_rgba(17,30,64,0.10)]">
            <img
              src={roadmapImage}
              alt="Wallet23 launch roadmap"
              className="h-[280px] w-full object-cover md:h-[340px]"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-[135px] grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Text */}
          <div className="max-w-[530px]">
            <h3 className="text-[42px] font-medium leading-[1.08] tracking-[-0.075em] text-[#07112b] md:text-[58px] lg:text-[64px]">
              The eWallet
              <br />
              Platform Built for a
              <br />
              Connected
              <br />
              Financial World
            </h3>

            <p className="mt-8 max-w-[520px] text-[18px] font-medium leading-[1.48] tracking-[-0.04em] text-[#42637a] md:text-[20px]">
              Engineered to integrate seamlessly with banks, card networks,
              credit bureaus, and fintechs—enabling secure P2P transfers,
              multi-currency support, remittance, and white-label customization
              in one unified solution.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#ffab2e] px-7 py-3.5 text-[15px] font-black tracking-[-0.02em] text-black transition duration-300 hover:bg-[#ffc15a]"
            >
              Talk to an Expert
            </Link>
          </div>

          {/* Right online image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[600px] overflow-hidden rounded-[28px] bg-white p-3 shadow-[0_28px_80px_rgba(17,30,64,0.12)]">
              <img
                src={ecosystemImage}
                alt="Wallet23 connected financial ecosystem"
                className="h-[430px] w-full rounded-[22px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}