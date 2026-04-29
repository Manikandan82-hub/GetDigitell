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
  icons: {
    icon: [
      { url: "/getdigitell.png", sizes: "150x150", type: "image/png" },
      { url: "/getdigitell.png", sizes: "300x300", type: "image/png" },
    ],
  },
  keywords: [
    "Web Development UK",
    "Website Design UK",
    "Affordable Website UK",
    "Website Development Southend-on-Sea",
    "Web Design Southend-on-Sea",
    "Southend Web Developers",
    "48 Hour Website Development",
    "Fast Website Development UK",
    "Startup Website UK",
    "Small Business Website UK",
    "Budget Web Design UK",
    "Website starting at £100 UK",
    "Quick Website for Business UK",
    "Freelance Web Developer UK",
    "UI UX Design UK",
    "GetDigitell",
    "Southend digital agency",
    "UK IT services",
    "MVP development UK",
  ],
  authors: [{ name: "GetDigitell Team" }],
  openGraph: {
    title: "Affordable Web Design in Southend-on-Sea | GetDigitell",
    description:
      "Professional websites in 48 hours starting at £100. Serving Southend-on-Sea and across the UK.",
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
