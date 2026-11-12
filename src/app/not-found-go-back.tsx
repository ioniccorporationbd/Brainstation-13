"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function NotFoundGoBack() {
  const router = useRouter();

  const goBack = () => {
    // "Browser previous page" when the user actually has history in this tab;
    // otherwise fall back to the homepage so nobody is left on a dead URL.
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
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#ececec] bg-white px-6 py-3.5 text-[15px] font-semibold text-black transition-colors duration-200 hover:border-[#c91f28] hover:text-[#c91f28]"
    >
      <ArrowLeft size={17} />
      Go Back
    </button>
  );
}
