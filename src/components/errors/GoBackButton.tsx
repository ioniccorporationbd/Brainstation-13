"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { useTranslation } from "@/i18n/LanguageProvider";

/**
 * Returns the user to the previous page when the tab has history, otherwise to
 * the homepage — the same behaviour required on every error surface.
 */
export default function GoBackButton({ className }: { className?: string }) {
  const router = useRouter();
  const { t } = useTranslation();

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      type="button"
      onClick={goBack}
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
      }
    >
      <ArrowLeft size={17} />
      {t("Go Back")}
    </button>
  );
}

/** Keeps the DOM flag in sync for client-side navigations. */
export function useErrorPageFlag() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.errorPage = "1";
    return () => {
      delete root.dataset.errorPage;
    };
  }, []);
}
