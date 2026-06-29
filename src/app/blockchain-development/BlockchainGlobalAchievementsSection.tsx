export default function BlockchainGlobalAchievementsSection() {
  const pins = [
    { name: "United States", left: "25.8%", top: "47.8%" },
    { name: "Brazil", left: "36.8%", top: "70.5%" },
    { name: "United Kingdom", left: "47.1%", top: "39.8%" },
    { name: "France", left: "48.9%", top: "47.5%" },
    { name: "Germany", left: "51.1%", top: "44.8%" },
    { name: "Sweden", left: "51.7%", top: "34.5%" },
    { name: "Italy", left: "51.4%", top: "51.4%" },
    { name: "Singapore", left: "76.4%", top: "66.2%" },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[82px] text-[#11182f]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[1120px] text-center">
          <h2 className="text-[42px] font-light leading-[1.08] tracking-[-0.065em] text-[#11182f] md:text-[48px]">
            Global Blockchain Achievements
          </h2>

          <p className="mx-auto mt-6 max-w-[1080px] text-[18px] font-medium leading-[1.45] tracking-[-0.035em] text-[#42637a]">
            Our record in the blockchain integration and development services
            market speaks for itself — from government-funded IEEE research to
            global hackathon wins and production deployments across four
            continents.
          </p>
        </div>

        <div className="relative mx-auto mt-[36px] h-[530px] max-w-[1120px]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt="Global blockchain achievements map"
            className="absolute inset-0 h-full w-full object-contain opacity-[0.16] grayscale"
          />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,155,211,0.08),transparent_48%)]" />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(0,155,211,0.22) 1px, transparent 1px), linear-gradient(60deg, rgba(0,155,211,0.18) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />

          {pins.map((pin, index) => (
            <span
              key={pin.name}
              title={pin.name}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: pin.left,
                top: pin.top,
              }}
            >
              <span
                className="absolute left-1/2 top-1/2 h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#009bd3]/25"
                style={{
                  animationDelay: `${index * 180}ms`,
                  animationDuration: "2.4s",
                }}
              />

              <span className="relative block h-[24px] w-[24px] rounded-full border-[4px] border-white bg-[#009bd3] shadow-[0_8px_22px_rgba(0,155,211,0.35)]" />
            </span>
          ))}
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