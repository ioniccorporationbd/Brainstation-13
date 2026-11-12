import ShikkhaFrame from "./ShikkhaFrame";
import { getTranslator } from "@/i18n/server";

const pages = [
  {
    src: "/images/shikkha/pub-online-admission.webp",
    alt: "Online admission page on a Shikkha Chat institution website",
    url: "shikkhachat.com/online-admission",
  },
  {
    src: "/images/shikkha/pub-notice-board.webp",
    alt: "Notice board page on a Shikkha Chat institution website",
    url: "shikkhachat.com/notice-board",
  },
  {
    src: "/images/shikkha/pub-teachers-info.webp",
    alt: "Teacher directory page on a Shikkha Chat institution website",
    url: "shikkhachat.com/teachers-info",
  },
  {
    src: "/images/shikkha/pub-news-events.webp",
    alt: "News and events page on a Shikkha Chat institution website",
    url: "shikkhachat.com/news-and-events",
  },
  {
    src: "/images/shikkha/pub-gallery.webp",
    alt: "Photo gallery page on a Shikkha Chat institution website",
    url: "shikkhachat.com/gallery",
  },
  {
    src: "/images/shikkha/pub-exam-results.webp",
    alt: "Exam results page on a Shikkha Chat institution website",
    url: "shikkhachat.com/exam-results",
  },
];

export default async function ShikkhaWebsiteSection() {
  const { t } = await getTranslator();
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[760px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#c91f28]">{t("Public school website")}</p>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-black md:text-[34px]">{t("Every institution also gets a complete public website")}</h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-[#55585e] md:text-[16.5px]">{t("Shikkha Chat ships a complete, mobile-friendly 40+ page school website for every institution — home, governing body, chairman and principal messages, academic calendar, class routine, syllabus, fees, scholarships, notice board, gallery, exam results and more — that parents and the public can browse before they ever sign in.")}</p>
        </div>

        <div className="mt-12 space-y-6">
          <div className="mx-auto max-w-[1000px]">
            <ShikkhaFrame
              src="/images/shikkha/pub-home.webp"
              alt={t("Public home page of an institution website built with Shikkha Chat")}
              url="shikkhachat.com"
              sizes="(max-width: 1024px) 100vw, 1000px"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pages.map((page) => (
              <ShikkhaFrame
                key={page.src}
                src={page.src}
                alt={page.alt}
                url={page.url}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
