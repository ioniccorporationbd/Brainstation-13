const stats = [
  {
    number: "850+",
    label: "In-house\nFTEs",
    circleText: "WE HAVE IN HOUSE FTEs",
  },
  {
    number: "100+",
    label: "Clients\nServed",
    circleText: "ALREADY 100+ CLIENTS SERVED",
  },
  {
    number: "19+",
    label: "Years of\nExperience",
    circleText: "WE HAVE YEARS OF EXPERIENCE",
  },
  {
    number: "30+",
    label: "Country\nServed",
    circleText: "ALREADY 30+ COUNTRIES SERVED",
  },
  {
    number: "5+",
    label: "Global\nOffices",
    circleText: "WE HAVE GLOBAL OFFICES",
  },
];

const clutchAwards = [
  "BANGLADESH\n2025",
  "HOSPITALITY & LEISURE\nDUBAI",
  "KUALA LUMPUR\n2025",
  "MANUFACTURING\nDUBAI",
  "RETAIL\n2025",
  "TELECOMMUNICATIONS\n2025",
  "TELECOMMUNICATIONS\nUNITED KINGDOM",
];

function CircularText({
  text,
  index,
}: {
  text: string;
  index: number;
}) {
  const pathId = `circle-path-${index}`;

  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <path
          id={pathId}
          d="
            M 100, 100
            m -78, 0
            a 78,78 0 1,1 156,0
            a 78,78 0 1,1 -156,0
          "
        />
      </defs>

      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="14s"
          repeatCount="indefinite"
        />

        <text className="fill-[#9CA3AF] text-[15px] font-bold uppercase tracking-[8px]">
          <textPath href={`#${pathId}`} startOffset="0%">
            {text} • {text} •
          </textPath>
        </text>
      </g>
    </svg>
  );
}

export default function CompanyStatsAwardsSection() {
  return (
    <section className="bg-[#f4f8fc] px-6 py-[72px] text-[#111827]">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 items-center gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item, index) => (
            <div
              key={item.number}
              className="relative mx-auto flex h-[190px] w-[190px] items-center justify-center text-center"
            >
              <CircularText text={item.circleText} index={index} />

              <div className="relative z-10">
                <h3 className="text-[36px] font-normal leading-none tracking-[-0.04em] text-[#111827]">
                  {item.number}
                </h3>

                <p className="mt-4 whitespace-pre-line text-[17px] font-bold leading-[1.35] text-[#111827]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-[64px] h-px max-w-[1160px] bg-[#cbd5e1]" />

        <div className="mt-[76px] grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-7">
          {clutchAwards.map((award, index) => (
            <div
              key={`${award}-${index}`}
              className="relative flex h-[125px] w-[125px] items-center justify-center"
            >
              <div className="absolute inset-0 [clip-path:polygon(50%_0%,93%_25%,93%_75%,50%_100%,7%_75%,7%_25%)] bg-[#7b8a8d]" />
              <div className="absolute inset-[5px] [clip-path:polygon(50%_0%,93%_25%,93%_75%,50%_100%,7%_75%,7%_25%)] bg-white" />
              <div className="absolute inset-[11px] [clip-path:polygon(50%_0%,93%_25%,93%_75%,50%_100%,7%_75%,7%_25%)] bg-[#0f2d33]" />

              <div className="relative z-10 text-center">
                <p className="mb-2 text-[8px] font-bold uppercase leading-[1.1] tracking-[0.08em] text-[#516368]">
                  TOP <br /> SOFTWARE <br /> DEVELOPERS
                </p>

                <div className="bg-white px-4 py-1">
                  <p className="text-[20px] font-bold leading-none text-[#0f2d33]">
                    Clutch
                  </p>
                </div>

                <p className="mt-3 whitespace-pre-line text-[7px] font-bold uppercase leading-[1.25] tracking-[0.08em] text-[#516368]">
                  {award}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}