export default function BuildGameSection() {
  return (
    <section className="bg-[#111615] px-4 py-20 text-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold text-[#ffa51f] md:text-5xl">
            Build A Game with Us
          </h2>

          <div className="mt-7 h-[3px] w-[260px] bg-[#ffa51f]" />

          <p className="mt-6 max-w-[760px] text-xl font-semibold leading-8">
            Get your games created from the ground up or cover any of your
            production needs with specialized knowledge.
          </p>

          <div className="mt-7 space-y-7">
            <div>
              <h3 className="text-3xl font-bold text-[#ffa51f]">Plan</h3>
              <p className="mt-3 max-w-[760px] text-xl font-semibold leading-8">
                Grow your concept with us to lay a solid foundation for your
                product in game design, and concept design.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#ffa51f]">Build</h3>
              <p className="mt-3 max-w-[760px] text-xl font-semibold leading-8">
                Support your project with 3D art, level design, UI/UX design,
                animation, and engineering.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#ffa51f]">Expand</h3>
              <p className="mt-3 max-w-[760px] text-xl font-semibold leading-8">
                Connect your game with other platforms, and secure monetization.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=900&auto=format&fit=crop"
            alt="Game development studio process"
            className="w-full max-w-[620px] rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}