import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import { ThemeProvider } from "../components/ui/theme-provider";
import { cn } from "../utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // ✅ keep as variable, reference via CSS
});

// ✅ Single source of truth — Next.js injects all of this automatically
export const metadata: Metadata = {
  // ✅ Use a template so child pages can set their own title cleanly
  title: {
    default: "CITAM Kitale | Christ is The Answer Ministries",
    template: "%s | CITAM Kitale",
  },
  description:
    "Welcome to CITAM Kitale, a ministry dedicated to spreading the gospel of Jesus Christ throughout Kitale and beyond.",
  // ✅ keywords as array, not string
  keywords: [
    "CITAM", "Kitale", "church", "Christian", "ministry",
    "gospel", "Jesus", "Christ", "worship", "sermons", "events",
  ],
  authors: [{ name: "CITAM Kitale" }],
  creator: "CITAM Kitale",
  // ✅ metadataBase is essential — resolves relative image paths like "/logo.png"
  metadataBase: new URL("https://citam-kitale.vercel.app"),
  openGraph: {
    title: "CITAM Kitale | Christ is The Answer Ministries",
    description:
      "Welcome to CITAM Kitale, a ministry dedicated to spreading the gospel of Jesus Christ throughout Kitale and beyond.",
    url: "https://citam-kitale.vercel.app",
    siteName: "CITAM Kitale",
    images: [
      {
        // ✅ Real church photo — not the logo — for engaging link previews
        url: "/citamKitale1.jpg",
        width: 1200,
        height: 630,
        alt: "CITAM Kitale Church — Kitale, Kenya",
      },
    ],
    locale: "en_KE", // ✅ was en_US
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CITAM Kitale | Christ is The Answer Ministries",
    description:
      "Welcome to CITAM Kitale, a ministry dedicated to spreading the gospel of Jesus Christ throughout Kitale and beyond.",
    images: ["/citamKitale1.jpg"], // ✅ match OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ✅ suppressHydrationWarning needed for next-themes — correct
    <html lang="en" suppressHydrationWarning>
      {/*
        ✅ No manual <head> block — Next.js injects everything from
           the metadata export above. Manual tags were causing duplicates.
      */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable // ✅ .variable not .className — sets --font-sans CSS var
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/*
            ✅ ThemeToggle removed from here — move it inside Header component.
               A floating div between Header and content breaks layout flow
               and looks broken on every page.
          */}
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
