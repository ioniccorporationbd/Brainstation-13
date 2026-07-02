import Link from "next/link";
import { Play } from "lucide-react";

type MediaVideo = {
  title: string;
  thumbnail: string;
  videoUrl: string;
};

const mediaVideos: MediaVideo[] = [
  {
    title: "হাইটেক পার্ক: আয় ও কর্মসংস্থানের কেন্দ্র || Rajakhon 2 || DBC NEWS",
    thumbnail:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=900&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title: "CEO of Brain Station-23 Speaks with SD Asia",
    thumbnail:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title:
      "মোবাইল অ্যাপ্লিকেশনে কমছে বিদেশ নির্ভরতা, বিশ্ববাজারে খ্যাতি দেশীয় প্রতিষ্ঠানের | Channel 24",
    thumbnail:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=900&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title:
      "সফটওয়্যার নির্মাতা প্রতিষ্ঠানগুলো তথ্য-প্রযুক্তি খাতে অবদান রাখছে। NTV News",
    thumbnail:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title:
      "Mobile app development companies video interview series: Brain Station-23",
    thumbnail:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title: "Khatunganj Theke Motijheel | Independent Television",
    thumbnail:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=900&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title:
      "ব্রেইন স্টেশন ২৩ | যেভাবে মাথা তুলে দাঁড়িয়েছে দেশের অন্যতম বৃহৎ সফটওয়্যার কোম্পানি | Tech World",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/",
  },
];

export default function MediaVisualSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-[90px] text-[#07112b]">
      <div className="pointer-events-none absolute -left-[260px] top-[120px] h-[560px] w-[560px] rounded-full bg-[#08a7df]/8 blur-[130px]" />
      <div className="pointer-events-none absolute -right-[260px] bottom-[80px] h-[560px] w-[560px] rounded-full bg-[#111E40]/7 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="text-center">
          <h2 className="text-[38px] font-black leading-[1.08] tracking-[-0.055em] text-black md:text-[48px]">
            Visual Media
          </h2>
        </div>

        <div className="mt-[70px] grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {mediaVideos.map((video) => (
            <article key={video.title} className="group text-center">
              <Link
                href={video.videoUrl}
                target="_blank"
                className="block"
                aria-label={`Watch video: ${video.title}`}
              >
                <div className="relative overflow-hidden bg-[#111E40] shadow-[0_18px_45px_rgba(17,30,64,0.10)]">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-[210px] w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/25" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-[82px] w-[82px] items-center justify-center rounded-full border-[5px] border-white/85 bg-white/10 text-white backdrop-blur-[2px] transition duration-300 group-hover:scale-110 group-hover:bg-[#08a7df]/80">
                      <Play
                        size={34}
                        strokeWidth={2}
                        fill="currentColor"
                        className="ml-1"
                      />
                    </span>
                  </div>
                </div>

                <h3 className="mx-auto mt-5 max-w-[390px] text-[15px] font-black leading-[1.35] tracking-[-0.025em] text-black transition duration-300 group-hover:text-[#079ed8] md:text-[16px]">
                  {video.title}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}