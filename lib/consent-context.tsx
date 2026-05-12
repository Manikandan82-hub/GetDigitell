"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ConsentType = "all" | "essential" | "none" | null;

interface ConsentContextType {
  consent: ConsentType;
  setConsent: (type: ConsentType) => void;
  isAnalyticsEnabled: boolean;
  isPreferenceModalOpen: boolean;
  setIsPreferenceModalOpen: (open: boolean) => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentType>(null);
  const [isPreferenceModalOpen, setIsPreferenceModalOpen] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem("getdigitell-cookie-consent") as ConsentType;
    if (savedConsent) {
      setConsentState(savedConsent);
    }
  }, []);

  const setConsent = (type: ConsentType) => {
    if (type) {
      localStorage.setItem("getdigitell-cookie-consent", type);
    } else {
      localStorage.removeItem("getdigitell-cookie-consent");
    }
    setConsentState(type);
  };

  const isAnalyticsEnabled = consent === "all";

  return (
    <ConsentContext.Provider value={{ 
      consent, 
      setConsent, 
      isAnalyticsEnabled,
      isPreferenceModalOpen,
      setIsPreferenceModalOpen
    }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return context;
}
