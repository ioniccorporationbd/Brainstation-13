const findings = [
  {
    title: "Design Patterns Aid Modernization",
    text: "Projects following design patterns are easier to modernize, with smoother transitions.",
  },
  {
    title: "Improved Outcomes",
    text: "Design-pattern-based projects consistently show better modernization results.",
  },
  {
    title: "Test Cases Enhance Clarity",
    text: "Pre-existing test cases simplify migration, making it faster and more reliable.",
  },
  {
    title: "Effortless Validation",
    text: "Proper test cases help confirm migration accuracy without extra setup.",
  },
  {
    title: "Reduced Setup for Verification",
    text: "Existing tests eliminate the need for new roles or extensive retesting.",
  },
];

export default function DigitalTransformationFindingsSection() {
  return (
    <section className="bg-white px-6 py-[80px] text-[#0a0a0a] md:py-[96px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">
            What The Data Shows
          </p>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] md:text-[42px]">
            Our Findings
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656] md:text-[17px]">
            Patterns we consistently observe across legacy modernization
            engagements.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {findings.map((item, index) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-2xl border border-[#ececec] bg-white p-6 transition-colors duration-300 hover:border-[#c91f28]"
            >
              <span className="text-[15px] font-bold leading-none tracking-[-0.01em] text-[#c91f28]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                {item.title}
              </h3>

              <p className="mt-2 text-[14px] font-medium leading-[1.55] tracking-[-0.01em] text-[#565656]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
