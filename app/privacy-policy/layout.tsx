import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GetDigitell",
  description:
    "Our commitment to protecting your privacy and managing your data at GetDigitell.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
