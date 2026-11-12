import type { Metadata } from "next";
import ErrorPage from "@/components/errors/ErrorPage";

export const metadata: Metadata = {
  title: "Forbidden | Magnetic Solution Limited",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function Forbidden() {
  return <ErrorPage code={403} emitHead />;
}
