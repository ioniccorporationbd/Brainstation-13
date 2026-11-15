import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import ErrorPage from "@/components/errors/ErrorPage";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Forbidden | Magnetic Solution Limited"),
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false },
    },
  };
}

export default function Forbidden() {
  return <ErrorPage code={403} emitHead />;
}
