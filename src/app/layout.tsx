import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import { ThemeProvider } from "../components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "CITAM Kitale | Belong. Grow. Impact.", template: "%s | CITAM Kitale" },
  description: "A Christ-centred family in Kitale, Kenya. Join CITAM Kitale for worship, discipleship, prayer, community, and practical service across Trans Nzoia.",
  keywords: ["CITAM Kitale", "church in Kitale", "Kenya church", "Trans Nzoia", "Christian worship", "M-Pesa giving"],
  metadataBase: new URL("https://citam-kitale.vercel.app"),
  openGraph: { title: "CITAM Kitale | Belong. Grow. Impact.", description: "A Christ-centred family in Kitale, Kenya.", url: "https://citam-kitale.vercel.app", siteName: "CITAM Kitale", images: [{ url: "/citamKitale1.jpg", width: 1200, height: 630, alt: "CITAM Kitale church community" }], locale: "en_KE", type: "website" },
  icons: { icon: "/logo-mark.png", shortcut: "/logo-mark.png", apple: "/logo-mark.png" },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${inter.variable} min-h-screen`}><ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange><Header />{children}<Footer /></ThemeProvider></body></html>;
}
