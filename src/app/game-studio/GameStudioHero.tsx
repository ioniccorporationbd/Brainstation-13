export default function GameStudioHero() {
  return (
    <section className="relative h-[760px] w-full overflow-hidden bg-black">
      <img
        src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1920&auto=format&fit=crop"
        alt="City skyline"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 bg-[#0b1f1b]/25" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-16 lg:px-44">
          <h1 className="max-w-[780px] text-[42px] font-black italic leading-[1.18] tracking-wide text-white md:text-[64px] lg:text-[74px]">
            From Pá·thos with Lógos,
            <br />
            We Build Worlds
          </h1>
        </div>
      </div>
    </section>
  );
}