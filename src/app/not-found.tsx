import type { Metadata } from "next";
import ErrorPage from "@/components/errors/ErrorPage";

export const metadata: Metadata = {
  title: "Page Not Found | Magnetic Solution Limited",
  description:
    "The page you are looking for does not exist or has moved. Return to the Magnetic Solution Limited homepage or explore our services.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function NotFound() {
  return <ErrorPage code={404} />;
}
