import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { FloatingWidget } from "@/components/floating-widget";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ClickEffect } from "@/components/click-effect";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GetDigitell - High-Performance Digital Solutions",
  description:
    "We build high-performance digital solutions. Web development, UI/UX design, and IT services delivered fast within 48 hours.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${sourceSans.variable} font-sans antialiased`}>
        <ClickEffect />
        <Navbar />
        {children}
        <Footer />
        <FloatingWidget />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
