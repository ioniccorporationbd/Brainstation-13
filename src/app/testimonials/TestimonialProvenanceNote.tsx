import { getTranslator } from "@/i18n/server";

export default async function TestimonialProvenanceNote({
  className = "",
}: {
  className?: string;
}) {
  const { t } = await getTranslator();
  return (
    <div
      className={`rounded-xl border border-[#ececec] bg-[#fafafa] px-6 py-5 ${t(className)}`}
    >
      <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#c91f28]">{t("Provenance")}</p>
      <p className="mt-2 text-[13.5px] leading-[1.7] text-[#55585e]">{t("These testimonials were collected and published by our team before the company operated as Magnetic Solution Limited. They are reproduced here word for word, without edits to names, designations or quotes, as a record of the work described. They are not presented as endorsements of Magnetic Solution Limited, and no additional client, statistic or result has been added.")}</p>
    </div>
  );
}
