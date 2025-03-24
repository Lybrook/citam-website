import { Inter, Roboto_Slab } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Header from "/components/navigation/header";
import Footer from "/components/navigation/footer";
import { ThemeProvider } from "/components/ui/theme-provider";

// Configure fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-heading",
});

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
        url: "/og-image.jpg",
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
    images: ["/twitter-image.jpg"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// Root layout component with proper TypeScript typing
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body
        className={`${inter.variable} ${roboto_slab.variable} font-sans bg-background text-foreground`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          <main className='pt-16 min-h-screen'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}