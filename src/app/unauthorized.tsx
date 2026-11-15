import type { Metadata } from "next";
import { getTranslator } from "@/i18n/server";
import ErrorPage from "@/components/errors/ErrorPage";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslator();
  return {
    title: t("Unauthorized | Magnetic Solution Limited"),
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false },
    },
  };
}

export default function Unauthorized() {
  return <ErrorPage code={401} emitHead />;
}
