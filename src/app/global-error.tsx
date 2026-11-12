"use client";

import { useTranslation } from "@/i18n/LanguageProvider";

/**
 * Last-resort boundary. Replaces the root layout, so it must render
 * <html>/<body> itself and cannot rely on Tailwind being loaded — the styles
 * below are self-contained and mirror the shared ErrorPage design.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useTranslation();
  return (
    <html lang="en">
      <body>
        <style>{`
          :root { color-scheme: light; }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            background: #ffffff;
            color: #000000;
            font-family: Ubuntu, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
          }
          .ge-wrap {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 64px 24px 88px;
          }
          .ge-logo { height: 54px; width: auto; margin-bottom: 28px; }
          .ge-pill {
            display: inline-block;
            background: #fdecec;
            color: #c91f28;
            font-size: 12.5px;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            border-radius: 999px;
            padding: 6px 14px;
            margin-bottom: 22px;
          }
          .ge-code {
            font-size: clamp(84px, 18vw, 148px);
            font-weight: 700;
            line-height: 0.9;
            letter-spacing: -0.055em;
            margin: 0;
            user-select: none;
          }
          .ge-code .accent { color: #c91f28; }
          .ge-title {
            font-size: clamp(24px, 4vw, 34px);
            font-weight: 700;
            letter-spacing: -0.02em;
            line-height: 1.15;
            margin: 24px 0 0;
          }
          .ge-desc {
            font-size: 16px;
            line-height: 1.75;
            color: #55585e;
            max-width: 540px;
            margin: 16px 0 0;
          }
          .ge-actions {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-top: 36px;
          }
          .ge-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border-radius: 8px;
            padding: 14px 24px;
            font-size: 15px;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            transition: background-color 0.2s, border-color 0.2s, color 0.2s;
          }
          .ge-btn-primary { background: #c91f28; color: #ffffff; border: 1px solid #c91f28; }
          .ge-btn-primary:hover { background: #a71920; border-color: #a71920; }
          .ge-btn-secondary { background: #ffffff; color: #000000; border: 1px solid #ececec; }
          .ge-btn-secondary:hover { border-color: #c91f28; color: #c91f28; }
          .ge-note { margin-top: 30px; font-size: 13.5px; color: #8a8f98; }
          .ge-note a { color: #000000; font-weight: 600; text-underline-offset: 4px; text-decoration-color: #c91f28; }
          .ge-note a:hover { color: #c91f28; }
        `}</style>
        <main className="ge-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/magnetic-logo.png"
            alt={t("Magnetic Solution Limited")}
            className="ge-logo"
          />
          <title>{t("Internal Server Error | Magnetic Solution Limited")}</title>
          <meta name="robots" content="noindex, nofollow" />
          <span className="ge-pill">{t("Error 500")}</span>
          <p className="ge-code">
            5<span className="accent">0</span>0
          </p>
          <h1 className="ge-title">{t("Something went wrong")}</h1>
          <p className="ge-desc">{t("The application could not start this page. Try again — if it keeps happening, contact our team and we will look into it right away.")}</p>
          <div className="ge-actions">
            <button
              type="button"
              onClick={reset}
              className="ge-btn ge-btn-primary"
            >{t("Try Again")}</button>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="ge-btn ge-btn-secondary">{t("Back to Home")}</a>
          </div>
          <p className="ge-note">{t("Need help?")}<a href="/contact">{t("Contact our team")}</a>
          </p>
        </main>
      </body>
    </html>
  );
}
