import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | GetDigitell",
  description: "Terms and conditions for using GetDigitell's website and services.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
