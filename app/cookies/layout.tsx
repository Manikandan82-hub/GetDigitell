import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | GetDigitell",
  description: "Detailed information about how GetDigitell uses cookies and tracking technologies to improve your experience.",
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
