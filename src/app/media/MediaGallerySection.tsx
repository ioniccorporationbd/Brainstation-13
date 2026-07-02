"use client";

import { useMemo, useState } from "react";

type GalleryCategory =
  | "All"
  | "Awards"
  | "Events"
  | "Foundation Day"
  | "Fun Activities"
  | "Office"
  | "Conferences";

type GalleryImage = {
  id: number;
  category: Exclude<GalleryCategory, "All">;
  image: string;
  title: string;
};

const categories: GalleryCategory[] = [
  "All",
  "Awards",
  "Events",
  "Foundation Day",
  "Fun Activities",
  "Office",
  "Conferences",
];

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    category: "Awards",
    title: "BASIS Award Ceremony",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Awards",
    title: "Government Recognition Program",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Awards",
    title: "Certificate of Achievement",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Awards",
    title: "Corporate Award Moment",
    image:
      "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=900&auto=format&fit=crop",
  },

  {
    id: 5,
    category: "Events",
    title: "Corporate Event",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Events",
    title: "Business Networking",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "Events",
    title: "Speaker Session",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "Events",
    title: "Audience Event",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=900&auto=format&fit=crop",
  },

  {
    id: 9,
    category: "Conferences",
    title: "Technology Conference",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 10,
    category: "Conferences",
    title: "Conference Presentation",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 11,
    category: "Conferences",
    title: "Panel Discussion",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 12,
    category: "Conferences",
    title: "Business Conference",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=900&auto=format&fit=crop",
  },

  {
    id: 13,
    category: "Foundation Day",
    title: "Foundation Day Celebration",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 14,
    category: "Foundation Day",
    title: "Team Celebration",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 15,
    category: "Foundation Day",
    title: "Office Celebration",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=900&auto=format&fit=crop",
  },

  {
    id: 16,
    category: "Fun Activities",
    title: "Team Outdoor Activity",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 17,
    category: "Fun Activities",
    title: "Cricket Tournament",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 18,
    category: "Fun Activities",
    title: "Team Fun Day",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=900&auto=format&fit=crop",
  },

  {
    id: 19,
    category: "Office",
    title: "Office Collaboration",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 20,
    category: "Office",
    title: "Developer Workplace",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 21,
    category: "Office",
    title: "Team Discussion",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 22,
    category: "Office",
    title: "Office Meeting",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
  },
];

export default function MediaGallerySection() {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("All");

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages;
    }

    return galleryImages.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-[95px] text-[#07112b]">
      <div className="pointer-events-none absolute -left-[260px] top-[120px] h-[560px] w-[560px] rounded-full bg-[#08a7df]/8 blur-[130px]" />
      <div className="pointer-events-none absolute -right-[260px] bottom-[80px] h-[560px] w-[560px] rounded-full bg-[#111E40]/7 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`text-[15px] font-black leading-none tracking-[-0.02em] transition duration-300 ${
                  isActive
                    ? "text-[#6b7c59]"
                    : "text-black hover:text-[#079ed8]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-[70px] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredImages.map((item) => (
            <article key={item.id} className="group">
              <button
                type="button"
                className="block w-full overflow-hidden bg-[#f4f8fc] text-left shadow-[0_18px_45px_rgba(17,30,64,0.08)]"
                aria-label={item.title}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.08]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/28" />

                  <div className="absolute inset-x-4 bottom-4 translate-y-5 rounded-[10px] bg-white/95 px-4 py-3 opacity-0 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[13px] font-black tracking-[-0.02em] text-[#07112b]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[12px] font-bold text-[#079ed8]">
                      {item.category}
                    </p>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}