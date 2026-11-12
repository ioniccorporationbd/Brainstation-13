import { getTranslator } from "@/i18n/server";
export default async function EducationIntroSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[8px]">
      <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#ececec] bg-[#fafafa] px-7 py-9 md:px-12 md:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          <p className="text-[15.5px] leading-[1.8] text-[#55585e]">{t("Education is moving online and hybrid — and the technology has to keep up with pedagogy, not the other way round. We help universities, training providers and EdTech companies ship platforms learners actually finish.")}</p>
          <p className="text-[15.5px] leading-[1.8] text-[#55585e]">{t("From LMS to secure assessment, we cover the learner journey end to end — authoring, delivery, engagement, integrity and the analytics that tell you what is working.")}</p>
        </div>
      </div>
    </section>
  );
}
