import type { Metadata } from "next";
import ErrorPage from "@/components/errors/ErrorPage";

export const metadata: Metadata = {
  title: "Unauthorized | Magnetic Solution Limited",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function Unauthorized() {
  return <ErrorPage code={401} emitHead />;
}
