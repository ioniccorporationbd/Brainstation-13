export default function Wallet23VideoStrategiesSection() {
  const videos = [
    {
      title: "Smart Digital Wallet for Seamless Financial Control",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "iBank23 Secure & Seamless Digital Banking App",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4f8fc] px-6 py-[100px] text-[#07112b]">
      <div className="mx-auto max-w-[1220px]">
        {/* Header */}
        <div className="max-w-[720px]">
          <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.075em] text-[#07112b] md:text-[58px]">
            Proven Strategies &amp; Innovations
          </h2>

          <p className="mt-7 max-w-[660px] text-[18px] font-medium leading-[1.45] tracking-[-0.035em] text-[#315b72] md:text-[21px]">
            Watch how our fintech solutions solve complex banking challenges,
            streamline operations, and unlock new growth opportunities for
            global financial leaders.
          </p>
        </div>

        {/* Real YouTube Videos */}
        <div className="mt-[72px] grid grid-cols-1 gap-8 lg:grid-cols-2">
          {videos.map((video) => (
            <div
              key={video.title}
              className="group overflow-hidden rounded-[14px] bg-[#111E40] shadow-[0_24px_70px_rgba(17,30,64,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(17,30,64,0.22)]"
            >
              <div className="relative aspect-video w-full">
                <iframe
                  src={video.url}
                  title={video.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}