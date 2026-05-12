"use client";

import { Analytics } from "@vercel/analytics/next";
import { useConsent } from "@/lib/consent-context";

export function AnalyticsWrapper() {
  const { isAnalyticsEnabled } = useConsent();

  // Only render Analytics if consent is granted and we are in production
  if (!isAnalyticsEnabled || process.env.NODE_ENV !== "production") {
    return null;
  }

  return <Analytics />;
}
