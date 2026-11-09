const findings = [
  {
    title: "Design Patterns Aid Modernization:",
    text: "Projects following design patterns are easier to modernize, with smoother transitions.",
  },
  {
    title: "Improved Outcomes:",
    text: "Design-pattern-based projects consistently show better modernization results.",
  },
  {
    title: "Test Cases Enhance Clarity:",
    text: "Pre-existing test cases simplify migration, making it faster and more reliable.",
  },
  {
    title: "Effortless Validation:",
    text: "Proper test cases help confirm migration accuracy without extra setup.",
  },
  {
    title: "Reduced Setup for Verification:",
    text: "Existing tests eliminate the need for new roles or extensive retesting.",
  },
];

export default function DigitalTransformationFindingsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[96px] text-[#0a0a0a]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[80px] lg:grid-cols-[0.95fr_1fr]">
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="group relative h-[360px] w-full max-w-[620px] overflow-hidden rounded-[8px] bg-[#0a0a0a] shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1400&auto=format&fit=crop"
              alt="Cloud modernization and digital transformation"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/20 via-transparent to-[#0a0a0a]/20" />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-[46px] font-normal leading-[1.08] tracking-[-0.02em] text-[#0a0a0a] md:text-[58px]">
            Our Findings
          </h2>

          <ul className="mt-[38px] space-y-[25px]">
            {findings.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-5 text-[20px] font-medium leading-[1.5] tracking-[-0.01em] text-[#0a0a0a] md:text-[23px]"
              >
                <span className="mt-[12px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#0a0a0a]" />

                <span>
                  <strong className="font-bold">{item.title}</strong>{" "}
                  <span>{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="fixed bottom-10 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-2xl text-[#c91f28]">☁</span>
      </button>

      <span className="fixed bottom-4 right-5 z-20 text-[10px] text-black/25">
        Powered by NeuralFlow
      </span>
    </section>
  );
}