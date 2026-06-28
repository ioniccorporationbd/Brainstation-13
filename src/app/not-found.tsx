// app/not-found.tsx

import Link from "next/link";
import {
  FaHome,
  FaSearch,
  FaArrowLeft,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 px-5 py-16">
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-sky-300/30 blur-[90px]" />
      <div className="absolute bottom-[-140px] right-[-140px] h-[380px] w-[380px] rounded-full bg-blue-400/25 blur-[110px]" />

      <section className="relative w-full max-w-[980px] overflow-hidden rounded-[36px] border border-white bg-white/80 p-8 text-center shadow-2xl backdrop-blur md:p-14">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-xl shadow-sky-200">
          <FaExclamationTriangle className="text-[34px]" />
        </div>

        <h1 className="mt-8 bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-[96px] font-black leading-none text-transparent md:text-[150px]">
          404
        </h1>

        <h2 className="mt-4 text-[32px] font-bold tracking-[-1px] text-[#07111f] md:text-[46px]">
          Page Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-8 text-slate-600 md:text-[18px]">
          Sorry, the page you are looking for does not exist, has been moved,
          or the link may be incorrect.
        </p>

        <div className="mx-auto mt-8 h-[3px] w-[100px] rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-sky-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white px-8 py-4 text-[15px] font-bold text-sky-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50"
          >
            <FaSearch />
            Contact Support
          </Link>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-slate-500 transition-colors hover:text-sky-600"
        >
          <FaArrowLeft />
          Return to previous safe page
        </Link>
      </section>
    </main>
  );
}