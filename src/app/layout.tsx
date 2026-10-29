import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { isIndexable, siteUrl } from "@/config/deployment";
import { site } from "@/config/site";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { RouteFocusReset } from "@/components/layout/route-focus-reset";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Topbar } from "@/components/layout/topbar";
import { fontVariables } from "./fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.name,
  robots: isIndexable
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Topbar />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileActionBar />
        <RouteFocusReset />
      </body>
    </html>
  );
}
