export default function MobileAppTypesSection() {
  const appTypes = [
    "Native Apps (iOS, Android).",
    "Cross-platform apps (Flutter, React Native).",
    "Enterprise mobility solutions.",
    "On-demand apps (ride-sharing, food delivery, fintech wallets, etc.).",
    "AR/VR-powered mobile apps.",
  ];

  return (
    <section className="bg-[#f7f7f7] py-[105px]">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-y-12 px-6 lg:grid-cols-[0.85fr_1fr] lg:gap-x-[95px]">
        <div>
          <h2 className="mb-7 text-[30px] font-bold leading-tight tracking-[-0.03em] text-black">
            Types of Mobile Apps We Develop
          </h2>

          <ul className="space-y-[14px] pl-6 text-[16px] leading-[1.5] text-black">
            {appTypes.map((item) => (
              <li key={item} className="list-disc pl-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop"
            alt="Mobile app planning"
            className="h-[390px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}