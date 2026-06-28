const services = [
  {
    title: "Multiplayer",
    desc: "Studio-23 team has expertise in multiplayer game development services and other gaming areas which guarantees a thrilling gaming experience to the users with flawless end-to-end execution. Studio-23 and its expert game developers can flaunt their technical expertise to create an unparalleled multiplayer gaming experience.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Full Cycle Game Development",
    desc: "Our experience and a solid skill set allow for offering custom, full-cycle game development. Creating your perfect gaming experience, we ensure it runs smoothly across all supported platforms. From game concept creation to post-release support, we apply our knowledge and insightful know-how to develop addictive and fun-to-play games.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Environment Art",
    desc: "Studio-23 environment art team will help you to ideate, conceptualize, design, and execute a believable unique world utilizing a number of tools, bringing your idea of a game setting to life.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Concept Art",
    desc: "Our concept art team has extensive experience in providing 2D concept art for characters, and environments. We offer the best artwork that meets the requirements of customers’ in-game concept design.",
    image:
      "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Level Design",
    desc: "Our talented team of designers is living proof of how far imagination and professionalism can take you. Merging artistic excellence with endless creativity, our team designs exciting and engaging levels that will give the game the necessary atmosphere, environment, and characters to be a new market success.",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function OurServiceSection() {
  return (
    <section className="bg-[#111615] px-4 py-16 text-white">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#ffa51f] md:text-4xl">
          Our Service
        </h2>

        <div className="space-y-14">
          {services.map((item, index) => {
            const isReverse = index % 2 === 1;

            return (
              <div
                key={item.title}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
              >
                <div className={isReverse ? "lg:order-2" : ""}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[260px] w-full object-cover"
                  />
                </div>

                <div
                  className={`${
                    isReverse ? "lg:order-1 lg:text-left" : "lg:text-left"
                  }`}
                >
                  <h3 className="text-center text-2xl font-bold md:text-3xl lg:text-center">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-base font-semibold leading-7 text-white md:text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}