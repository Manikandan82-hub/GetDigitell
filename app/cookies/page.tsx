"use client";

import { motion } from "framer-motion";
import { ChevronRight, Printer, Download, Share2, Info, Cookie, Settings } from "lucide-react";
import Link from "next/link";
import { useConsent } from "@/lib/consent-context";

export default function CookiePolicyPage() {
  const { setIsPreferenceModalOpen } = useConsent();
  const lastUpdated = "May 11, 2026";

  const sections = [
    { id: "what-are-cookies", title: "1. What are Cookies?" },
    { id: "how-we-use-them", title: "2. How We Use Cookies" },
    { id: "essential-cookies", title: "3. Essential Cookies" },
    { id: "analytics-cookies", title: "4. Analytics Cookies" },
    { id: "managing-cookies", title: "5. Managing Preferences" },
    { id: "updates", title: "6. Policy Updates" },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-foreground font-medium">Cookie Policy</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
              Cookie Policy
            </h1>
            <p className="text-slate-500 font-medium">
              Last updated: {lastUpdated} • Version 1.0
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-all shadow-sm">
              <Printer size={16} />
              Print
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-primary text-white text-sm font-semibold hover:bg-brand-primary/90 transition-all shadow-md shadow-brand-primary/10">
              <Download size={16} />
              Download PDF
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar - Table of Contents */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32 space-y-6">
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Sections
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block py-2 px-3 text-sm font-medium text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5 rounded-md transition-all border-l-2 border-transparent hover:border-brand-primary"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
              
              <div className="p-5 rounded-2xl bg-brand-primary/5 border border-brand-primary/10 shadow-sm">
                <div className="flex items-center gap-2 text-brand-primary mb-3">
                  <Info size={18} />
                  <h4 className="text-sm font-bold">Transparency</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We believe in being transparent about how we collect and use data. This policy explains our use of cookies in detail.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content Area - Document Look */}
          <div className="flex-1 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden"
            >
              <div className="p-8 md:p-12 lg:p-16 prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100">
                  This Cookie Policy explains how GetDigitell uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>

                <section id="what-are-cookies" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">01.</span>
                    What are Cookies?
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                  </p>
                </section>

                <section id="how-we-use-them" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">02.</span>
                    How We Use Cookies
                  </h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>We use first-party and third-party cookies for several reasons:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brand-primary">
                      <li>Some cookies are required for technical reasons in order for our website to operate. We refer to these as "essential" or "strictly necessary" cookies.</li>
                      <li>Other cookies enable us to track and target the interests of our users to enhance the experience on our online properties.</li>
                      <li>Third parties serve cookies through our website for analytics and other purposes.</li>
                    </ul>
                  </div>
                </section>

                <section id="essential-cookies" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">03.</span>
                    Essential Cookies
                  </h2>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Strictly Necessary</p>
                    <p className="text-sm text-slate-600">
                      These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas or handling form submissions via EmailJS.
                    </p>
                  </div>
                </section>

                <section id="analytics-cookies" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">04.</span>
                    Analytics Cookies
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
                  </p>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Vercel Analytics</p>
                    <p className="text-sm text-slate-600">
                      We use Vercel Analytics to understand visitor behavior and improve our site performance. This data is collected anonymously and helps us identify which parts of the site are most valuable to our users.
                    </p>
                  </div>
                </section>

                <section id="managing-cookies" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">05.</span>
                    Managing Preferences
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to refuse cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setIsPreferenceModalOpen(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg"
                    >
                      <Settings size={18} />
                      Open Preference Center
                    </button>
                  </div>
                </section>

                <section id="updates" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">06.</span>
                    Policy Updates
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                  </p>
                </section>

                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <p className="text-sm text-slate-400">
                    © {new Date().getFullYear()} GetDigitell. All rights reserved.
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="text-slate-400 hover:text-brand-primary transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
