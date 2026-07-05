import type { Metadata } from "next";
import "./globals.css";

import LeftSidebar from "@/components/LeftSidebar";

export const metadata: Metadata = {
  title: "Shikkha Chat",
  description: "Shikkha Chat Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className="h-full antialiased [--font-english:Ubuntu,Arial,sans-serif] [--font-bangla:'Noto Serif Bengali',serif] [--font-code:ui-monospace,monospace]"
    >
      <body className="min-h-full w-full overflow-x-hidden bg-background font-sans text-foreground">
        <LeftSidebar />

        <div className="flex min-h-screen min-w-0 flex-col overflow-x-hidden lg:pl-[310px]">
          <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
