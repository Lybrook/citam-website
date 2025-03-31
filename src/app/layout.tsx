import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import { ThemeProvider } from "../components/ui/theme-provider";
import { cn } from "../utils";


// Configure fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Removed unused roboto_slab variable

// Define metadata for the application
export const metadata = {
  title: "CITAM Kitale | Christ is The Answer Ministries",
  description:
    "Welcome to CITAM Kitale, a ministry dedicated to spreading the gospel of Jesus Christ throughout Kitale and beyond.",
  keywords:
    "CITAM, Kitale, church, Christian, ministry, gospel, Jesus, Christ, worship, sermons, events",
  authors: [{ name: "CITAM Kitale" }],
  creator: "CITAM Kitale",
  metadataBase: new URL("https://citamkitale.org"), // Set the base URL for metadata
  openGraph: {
    title: "CITAM Kitale | Christ is The Answer Ministries",
    description:
      "Welcome to CITAM Kitale, a ministry dedicated to spreading the gospel of Jesus Christ throughout Kitale and beyond.",
    url: "https://citamkitale.org",
    siteName: "CITAM Kitale",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CITAM Kitale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CITAM Kitale | Christ is The Answer Ministries",
    description:
      "Welcome to CITAM Kitale, a ministry dedicated to spreading the gospel of Jesus Christ throughout Kitale and beyond.",
    images: ["/logo.png"],
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

// Root layout component with proper TypeScript typing
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
        <link rel="Citam" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </head>
      <body className={cn("min-h-screen bg-background", inter.className)}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}