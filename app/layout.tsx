import type { Metadata, Viewport } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import { generatePageMetadata } from "@/lib/seo";
import { Providers } from "./providers";
import { EnhancedHeader } from "@/components/layout/enhanced-header";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";
import { FloatingFAB } from "@/components/layout/floating-fab";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = generatePageMetadata({
  title: "VIRAASAT - Threads of India",
  description: "Discover Indian art traditions through sourced media, careful context, and restrained digital storytelling.",
  keywords: [
    "Indian art",
    "museum",
    "culture",
    "heritage",
    "VIRAASAT",
    "traditional art",
    "digital museum",
    "Madhubani",
    "Warli",
    "Pattachitra",
    "Kalamkari",
  ],
  images: [
    {
      url: "/media/posters/hero-mandala.svg",
      width: 1200,
      height: 630,
      alt: "VIRAASAT - Threads of India",
    },
  ],
});

export const viewport: Viewport = {
  themeColor: "#16130b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${notoSerif.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-background text-on-surface silk-texture font-body-md">
        <Providers>
          <EnhancedHeader />
          <Sidebar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <FloatingFAB />
        </Providers>
      </body>
    </html>
  );
}
