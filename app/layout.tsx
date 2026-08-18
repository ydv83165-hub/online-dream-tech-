import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Noto_Sans_Devanagari } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { BRAND } from "@/lib/constants";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-sans-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} — Smarter Learning, Stronger Growth`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Modern learning, practical guidance, and growth-focused support designed to help people move forward with confidence.",
  metadataBase: new URL(`https://${BRAND.domain}`),
  openGraph: {
    siteName: BRAND.name,
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${notoSansDevanagari.variable} h-full`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col antialiased"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1 pt-14 sm:pt-16 lg:pt-20 pb-20 sm:pb-0">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
