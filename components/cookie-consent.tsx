"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cookie,
  X,
  ExternalLink,
  Settings,
  ShieldCheck,
  BarChart3,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useConsent } from "@/lib/consent-context";

export function CookieConsent() {
  const {
    consent,
    setConsent,
    isPreferenceModalOpen,
    setIsPreferenceModalOpen,
  } = useConsent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (consent === null) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [consent]);

  const acceptAll = () => {
    setConsent("all");
    setIsVisible(true); // Keep visible if needed, but usually we hide it
    setIsVisible(false);
  };

  const acceptEssential = () => {
    setConsent("essential");
    setIsVisible(false);
    setIsPreferenceModalOpen(false);
  };

  if (consent !== null && !isPreferenceModalOpen) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && !isPreferenceModalOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-6 right-6 z-[100] md:max-w-xl md:left-auto"
          >
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0 text-brand-primary">
                  <Cookie size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">
                    Cookie Preferences
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We use cookies to analyze performance and improve your
                    experience. By clicking "Accept All", you agree to our use
                    of analytics.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={acceptAll}
                  className="flex-1 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl h-12 font-bold shadow-lg shadow-brand-primary/20 transition-all"
                >
                  Accept All
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsPreferenceModalOpen(true)}
                  className="flex-1 border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl h-12 font-bold transition-all"
                >
                  Configure
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/cookies"
                  className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
                >
                  Privacy Details
                  <ExternalLink size={12} />
                </Link>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                  <ShieldCheck size={12} />
                  GDPR Compliant
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPreferenceModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreferenceModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      Privacy Center
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Manage your cookie preferences
                    </p>
                  </div>
                  <button
                    onClick={() => setIsPreferenceModalOpen(false)}
                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Essential */}
                  <div className="flex gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shrink-0 text-slate-400">
                      <Lock size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-900">
                          Essential Cookies
                        </span>
                        <span className="text-[10px] font-bold text-brand-primary uppercase bg-brand-primary/10 px-2 py-0.5 rounded-full">
                          Always On
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Required for technical reasons like security and form
                        submissions.
                      </p>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex gap-4 p-4 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                    <div className="w-10 h-10 rounded-xl bg-white border border-brand-primary/10 flex items-center justify-center shrink-0 text-brand-primary">
                      <BarChart3 size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-900">
                          Analytics & Performance
                        </span>
                        <div className="w-10 h-5 bg-brand-primary rounded-full relative">
                          <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Helps us understand how you use our site via Vercel
                        Analytics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={acceptAll}
                    className="flex-1 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl h-14 font-bold"
                  >
                    Allow All
                  </Button>
                  <Button
                    variant="outline"
                    onClick={acceptEssential}
                    className="flex-1 border-slate-200 text-slate-600 rounded-xl h-14 font-bold"
                  >
                    Save Selection
                  </Button>
                </div>

                <p className="mt-6 text-center text-[10px] text-slate-400 leading-relaxed">
                  By clicking save, you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline hover:text-brand-primary"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/cookies"
                    className="underline hover:text-brand-primary"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
