import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { ClarityProvider } from "@/components/layout/ClarityProvider";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Background } from "@/components/layout/Background";
import { LINKS } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dashxboard",
    template: "%s | Dashxboard",
  },
  description:
    "From ideas to action, the Dashxboard is the community-driven platform that empowers the Stronghold (SHx) ecosystem.",
  keywords: [
    "Stronghold",
    "Stronghold EDP",
    "Stronghold Governance",
    "SHx",
    "SHx Token",
    "SHx Dashxboard",
    "SHx Governance",
    "SHx Community",
    "Stellar Blockchain",
    "Stellar Ecosystem",
  ],
  metadataBase: new URL(LINKS.DASHXBOARD_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dashxboard",
    description:
      "From ideas to action, the Dashxboard is the community-driven platform that empowers the Stronghold (SHx) ecosystem.",
    url: LINKS.DASHXBOARD_URL,
    siteName: "Dashxboard",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashxboard",
    description:
      "From ideas to action, the Dashxboard is the community-driven platform that empowers the Stronghold (SHx) ecosystem.",
    creator: "@dashxboard",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased relative">
        <ClarityProvider />
        <Background />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1 app-container mx-auto">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
