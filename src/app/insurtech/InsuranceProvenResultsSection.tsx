type ResultItem = {
  value: string;
  label: string;
};

const results: ResultItem[] = [
  {
    value: "70%",
    label: "Faster claims settlement",
  },
  {
    value: "8,000+",
    label: "Agents managed",
  },
  {
    value: "<2s",
    label: "Claim calculation time",
  },
  {
    value: "~95",
    label: "Fraud detection accuracy",
  },
];

export default function InsuranceProvenResultsSection() {
  return (
    <section className="w-full bg-[#f4f8fc] py-[74px] md:py-[86px] lg:py-[96px]">
      <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8 xl:px-0">
        <h2 className="text-center text-[42px] font-bold leading-[1.15] tracking-[-0.04em] text-black sm:text-[52px] lg:text-[58px]">
          Proven Results
        </h2>

        <div className="mx-auto mt-[48px] grid max-w-[1120px] grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {results.map((item) => (
            <ResultCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultCard({ item }: { item: ResultItem }) {
  return (
    <article className="flex min-h-[145px] flex-col items-center justify-center border border-[#dcdfe3] bg-transparent px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#05a4df] hover:bg-white hover:shadow-[0_16px_42px_rgba(0,0,0,0.06)]">
      <h3 className="text-[38px] font-semibold leading-none tracking-[-0.035em] text-[#057caf] sm:text-[42px]">
        {item.value}
      </h3>

      <p className="mt-[14px] text-[18px] font-normal leading-[1.25] text-black sm:text-[20px]">
        {item.label}
      </p>
    </article>
  );
}