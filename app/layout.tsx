import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { FloatingWidget } from "@/components/floating-widget";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ClickEffect } from "@/components/click-effect";
import { Toaster } from "@/components/ui/sonner";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GetDigitell - Professional Websites & Digital Solutions in 48 Hours",
  description:
    "We build high-performance, conversion-focused digital solutions starting at just £100. Get your professional website live in 48 hours. Experts in Web Development, UI/UX, and IT Services.",
  keywords: [
    "Web Development",
    "UI/UX Design",
    "Digital Solutions",
    "Fast Website Development",
    "Startup MVP",
    "Business Website",
    "GetDigitell",
    "Affordable Web Design",
    "Get a Professional Website Live in 48 Hours",
    "UK Web Design",
    "Web Design UK",
  ],
  authors: [{ name: "GetDigitell Team" }],
  openGraph: {
    title: "GetDigitell - High-Performance Digital Solutions",
    description:
      "Transform your business with a professional website delivered in 48 hours. Starting at £100.",
    url: "https://getdigitell.com",
    siteName: "GetDigitell",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GetDigitell - Professional Websites in 48 Hours",
    description:
      "High-performance digital solutions starting at £100. Get live fast.",
    creator: "@getdigitell",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-background scroll-smooth scroll-pt-20 lg:scroll-pt-24"
    >
      <body className={`${sourceSans.variable} font-sans antialiased`}>
        <ClickEffect />
        <Navbar />
        {children}
        <Footer />
        <FloatingWidget />
        <Toaster richColors position="top-center" />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
