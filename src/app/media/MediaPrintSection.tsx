import Link from "next/link";

type PrintMediaItem = {
  title: string;
  publisher: string;
  image: string;
  href: string;
};

const printMediaItems: PrintMediaItem[] = [
  {
    title: "BASIS honours top 10 IT, ITES exporters for FY25",
    publisher: "The Financial Express",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop",
    href: "/media/basis-honours-top-exporters",
  },
  {
    title:
      "The secret to Brain Station 23’s success: Flexibility, creativity and spreading the ownership",
    publisher: "The Business Standard",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
    href: "/media/secret-to-brain-station-success",
  },
  {
    title: "Brain Station 23 wins NPO award",
    publisher: "The Business Standard",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=900&auto=format&fit=crop",
    href: "/media/brain-station-wins-npo-award",
  },
  {
    title: "Brain Station-23: Power of conviction",
    publisher: "The Daily Star",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900&auto=format&fit=crop",
    href: "/media/power-of-conviction",
  },
  {
    title: "PROFILES OF ICT AWARDS WINNERS",
    publisher: "The Daily Star",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=900&auto=format&fit=crop",
    href: "/media/ict-awards-winners",
  },
  {
    title:
      "Brain Station 23: the homegrown fintech firm enabling local banks go digital",
    publisher: "The Daily Star",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop",
    href: "/media/homegrown-fintech-firm",
  },
  {
    title:
      "The Making Of Brain Station 23: An Interview with Raisul Kabir, CEO, Brain Station 23",
    publisher: "Future Startup",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop",
    href: "/media/making-of-brain-station-23",
  },
  {
    title: "Brain Station 23 Plans To Go Big In the Local Market",
    publisher: "Future Startup",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
    href: "/media/go-big-in-local-market",
  },
  {
    title: "Big Work Every Day",
    publisher: "Prothom Alo",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop",
    href: "/media/big-work-every-day",
  },
  {
    title: "How blockchain will impact future trade",
    publisher: "The Business Standard",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=900&auto=format&fit=crop",
    href: "/media/blockchain-future-trade",
  },
  {
    title: "Brain Station 23 wins in ISC T20",
    publisher: "Prothom Alo",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=900&auto=format&fit=crop",
    href: "/media/isc-t20-winner",
  },
];

export default function MediaPrintSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[90px] text-[#07112b]">
      <div className="pointer-events-none absolute -left-[260px] top-[120px] h-[560px] w-[560px] rounded-full bg-[#08a7df]/8 blur-[130px]" />
      <div className="pointer-events-none absolute -right-[260px] bottom-[80px] h-[560px] w-[560px] rounded-full bg-[#111E40]/7 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div className="text-center">
          <h2 className="text-[38px] font-black leading-[1.08] tracking-[-0.055em] text-black md:text-[48px]">
            Print Media
          </h2>
        </div>

        <div className="mt-[58px] grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 lg:grid-cols-4">
          {printMediaItems.map((item) => (
            <article key={item.title} className="group text-center">
              <Link href={item.href} className="block">
                <div className="mx-auto overflow-hidden bg-[#f4f8fc] shadow-[0_16px_40px_rgba(17,30,64,0.08)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[110px] w-full object-cover transition duration-700 group-hover:scale-[1.08] sm:h-[120px]"
                  />
                </div>

                <h3 className="mx-auto mt-8 max-w-[250px] text-[18px] font-medium leading-[1.18] tracking-[-0.035em] text-[#009fe3] transition duration-300 group-hover:text-[#07112b] md:text-[20px]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[13px] font-black leading-tight tracking-[-0.025em] text-black">
                  {item.publisher}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}