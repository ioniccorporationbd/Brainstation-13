export default function TestimonialProvenanceNote({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-[#ececec] bg-[#fafafa] px-6 py-5 ${className}`}
    >
      <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">
        Provenance
      </p>
      <p className="mt-2 text-[13.5px] leading-[1.7] text-[#55585e]">
        These testimonials were collected and published by our team before the
        company operated as Magnetic Solution Limited. They are reproduced here
        word for word, without edits to names, designations or quotes, as a
        record of the work described. They are not presented as endorsements of
        Magnetic Solution Limited, and no additional client, statistic or result
        has been added.
      </p>
    </div>
  );
}
