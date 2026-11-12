"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Search,
  SlidersHorizontal,
} from "lucide-react";

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
};

const PAGE_SIZE = 4;

function Meta({ post }: { post: BlogPost }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] font-semibold">
      <span className="rounded-md bg-[#fdecec] px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#c91f28]">
        {t(post.category)}
      </span>
      <span className="font-medium text-[#6b6f76]">{t(post.date)}</span>
      <span className="inline-flex items-center gap-1 font-medium text-[#6b6f76]">
        <Clock size={13} strokeWidth={2} />
        {t(post.readTime)}
      </span>
    </div>
  );
}

function ArticleView({ post, onBack }: { post: BlogPost; onBack: () => void }) {
  const { t } = useTranslation();
  return (
    <section className="bg-white px-6 py-14 md:py-20">
      <div className="mx-auto max-w-[820px]">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-lg border border-[#ececec] bg-white px-5 py-2.5 text-[13.5px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
        >
          <ArrowLeft size={15} />{t("All articles")}</button>

        <div className="mt-8">
          <Meta post={post} />
          <h1 className="mt-5 text-[28px] font-bold leading-[1.15] tracking-[-0.025em] text-black md:text-[40px]">
            {t(post.title)}
          </h1>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="mt-8 h-[240px] w-full rounded-xl border border-[#ececec] object-cover md:h-[380px]"
        />

        <p className="mt-8 text-[17px] font-medium leading-[1.65] text-[#22252a] md:text-[19px]">
          {t(post.excerpt)}
        </p>
        <p className="mt-6 rounded-xl border border-[#ececec] bg-[#fafafa] px-6 py-5 text-[14.5px] leading-[1.7] text-[#55585e]">{t("This page carries the published summary of the article. For the complete write-up, including the technical detail behind it, talk to our team and we will share it with you.")}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-[#a71920]"
          >{t("Request the full article")}<ArrowRight size={16} />
          </a>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[14.5px] font-semibold text-black transition-colors hover:border-[#c91f28] hover:text-[#c91f28]"
          >{t("Back to the blog")}</button>
        </div>
      </div>
    </section>
  );
}

export default function BlogExplorer({
  featured,
  posts,
  categories,
}: {
  featured: BlogPost;
  posts: BlogPost[];
  categories: string[];
}) {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const all = useMemo(() => [featured, ...posts], [featured, posts]);
  const openPost = all.find((item) => item.slug === openSlug) ?? null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        q === "" ||
        `${t(post.title)} ${t(post.excerpt)} ${t(post.category)}`
          .toLowerCase()
          .includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );
  const showFeatured =
    category === "All" && query.trim() === "" && safePage === 1;

  if (openPost) {
    return <ArticleView post={openPost} onBack={() => setOpenSlug(null)} />;
  }

  return (
    <section className="bg-[#fafafa] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1240px]">
        {showFeatured ? (
          <article className="grid overflow-hidden rounded-2xl border border-[#ececec] bg-white lg:grid-cols-2">
            <div className="h-[240px] overflow-hidden lg:h-full">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
            <div className="p-7 md:p-10">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-[#fdecec] px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#c91f28]">{t("Featured")}</span>
                <span className="text-[12.5px] font-medium text-[#6b6f76]">
                  {t(featured.category)} &middot; {t(featured.date)}
                </span>
              </div>
              <h2 className="mt-5 text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-black md:text-[32px]">
                {t(featured.title)}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-[#55585e] md:text-[16px]">
                {t(featured.excerpt)}
              </p>
              <button
                type="button"
                onClick={() => setOpenSlug(featured.slug)}
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#c91f28] px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-[#a71920]"
              >{t("Read article")}<ArrowRight size={16} />
              </button>
            </div>
          </article>
        ) : null}

        <div className="mt-10 flex flex-col gap-5">
          <div className="relative w-full sm:max-w-[420px]">
            <Search
              size={17}
              strokeWidth={2}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9aa0a8]"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              aria-label={t("Search articles")}
              placeholder={t("Search articles")}
              className="h-[48px] w-full rounded-lg border border-[#ececec] bg-white pl-11 pr-4 text-[14.5px] text-black outline-none transition focus:border-[#c91f28] focus:ring-2 focus:ring-[#fdecec]"
            />
          </div>

          <div className="flex items-start gap-3">
            <SlidersHorizontal
              size={16}
              strokeWidth={2}
              className="mt-2.5 shrink-0 text-[#9aa0a8]"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => {
                const active = item === category;
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setCategory(item);
                      setPage(1);
                    }}
                    className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
                      active
                        ? "border-[#c91f28] bg-[#c91f28] text-white"
                        : "border-[#ececec] bg-white text-[#3f434a] hover:border-[#c91f28]/50 hover:text-[#c91f28]"
                    }`}
                  >
                    {t(item)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 rounded-xl border border-[#ececec] bg-white px-6 py-10 text-center text-[15px] text-[#55585e]">{t("No articles match that search. Try another keyword or category.")}</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#ececec] bg-white transition-colors duration-200 hover:border-[#c91f28]/50"
              >
                <div className="h-[190px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Meta post={post} />
                  <h3 className="mt-4 text-[17.5px] font-bold leading-[1.3] tracking-[-0.01em] text-black">
                    {t(post.title)}
                  </h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-[1.65] text-[#55585e]">
                    {t(post.excerpt)}
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpenSlug(post.slug)}
                    className="mt-5 inline-flex items-center gap-1.5 self-start text-[13.5px] font-semibold text-[#c91f28] hover:text-[#a71920]"
                  >{t("Read article")}<ArrowRight
                      size={15}
                      strokeWidth={2.2}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {totalPages > 1 ? (
          <nav
            aria-label={t("Pagination")}
            className="mt-10 flex items-center justify-between gap-4"
          >
            <button
              type="button"
              onClick={() => setPage(Math.max(1, safePage - 1))}
              disabled={safePage === 1}
              className="inline-flex items-center gap-2 rounded-lg border border-[#ececec] bg-white px-5 py-2.5 text-[13.5px] font-semibold text-black transition-colors enabled:hover:border-[#c91f28] enabled:hover:text-[#c91f28] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft size={15} />{t("Previous")}</button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    aria-current={item === safePage ? "page" : undefined}
                    onClick={() => setPage(item)}
                    className={`h-9 w-9 rounded-md border text-[13.5px] font-semibold transition-colors ${
                      item === safePage
                        ? "border-[#c91f28] bg-[#c91f28] text-white"
                        : "border-[#ececec] bg-white text-[#3f434a] hover:border-[#c91f28]/50 hover:text-[#c91f28]"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
            <button
              type="button"
              onClick={() => setPage(Math.min(totalPages, safePage + 1))}
              disabled={safePage === totalPages}
              className="inline-flex items-center gap-2 rounded-lg border border-[#ececec] bg-white px-5 py-2.5 text-[13.5px] font-semibold text-black transition-colors enabled:hover:border-[#c91f28] enabled:hover:text-[#c91f28] disabled:cursor-not-allowed disabled:opacity-40"
            >{t("Next")}<ArrowRight size={15} />
            </button>
          </nav>
        ) : null}
      </div>
    </section>
  );
}
