"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Printer,
  Download,
  Share2,
  Mail,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 11, 2026";
  const contactEmail = "sales@getdigitell.com";

  const sections = [
    { id: "data-collection", title: "1. Data Collection" },
    { id: "data-usage", title: "2. Data Usage" },
    { id: "legal-basis", title: "3. Legal Basis" },
    { id: "data-sharing", title: "4. Data Sharing" },
    { id: "your-rights", title: "5. Your Rights" },
    { id: "data-retention", title: "6. Data Retention" },
    { id: "contact", title: "7. Contact Information" },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link
                href="/"
                className="hover:text-brand-primary transition-colors"
              >
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-foreground font-medium">
                Privacy Policy
              </span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
              Privacy Policy
            </h1>
            <p className="text-slate-500 font-medium">
              Last updated: {lastUpdated} • Version 1.0
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar - Table of Contents */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32 space-y-6">
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  On this page
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
                  <ShieldCheck size={18} />
                  <h4 className="text-sm font-bold">Data Security</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  We use industry-standard encryption to protect your personal
                  information during transmission and at rest.
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-2 text-xs font-bold text-brand-primary hover:underline"
                >
                  <Mail size={14} />
                  {contactEmail}
                </a>
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
                  At GetDigitell (a trading name of Reimage Consultancy Services
                  Ltd), we are committed to protecting your privacy. This policy
                  outlines how we collect, use, and safeguard your personal
                  information when you interact with our website and services.
                </p>

                <section id="data-collection" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">01.</span>
                    What data we collect
                  </h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>We may collect the following information:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brand-primary">
                      <li>
                        <strong>Name and contact details:</strong> Including
                        email addresses and phone numbers provided through
                        contact forms.
                      </li>
                      <li>
                        <strong>Business information:</strong> Details you
                        provide regarding your company, project requirements, or
                        professional background.
                      </li>
                      <li>
                        <strong>Website usage data:</strong> Information
                        collected via cookies and similar technologies,
                        including IP addresses, browser types, and page
                        interactions.
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="data-usage" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">02.</span>
                    How we use your data
                  </h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>Your information is used for the following purposes:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brand-primary">
                      <li>
                        To respond to your enquiries and provide requested
                        information.
                      </li>
                      <li>
                        To deliver and improve our digital services and
                        products.
                      </li>
                      <li>
                        To analyze website performance and enhance our marketing
                        efforts.
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="legal-basis" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">03.</span>
                    Legal basis
                  </h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      We process your data under the following legal frameworks:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brand-primary">
                      <li>
                        <strong>Legitimate interest:</strong> For standard
                        business enquiries and professional communication.
                      </li>
                      <li>
                        <strong>Consent:</strong> Where you have explicitly
                        opted-in for marketing or specific data use.
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="data-sharing" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">04.</span>
                    Data sharing
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    We do not sell your data. We may share it with trusted
                    service providers (e.g., hosting partners, analytics
                    providers) only as necessary to maintain our website and
                    provide our services. All partners are required to maintain
                    strict data confidentiality.
                  </p>
                </section>

                <section id="your-rights" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">05.</span>
                    Your rights
                  </h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      Under GDPR and other privacy laws, you have the right to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-brand-primary">
                      <li>Access a copy of your personal data held by us.</li>
                      <li>Request the correction of inaccurate information.</li>
                      <li>
                        Request the deletion of your data (the "right to be
                        forgotten").
                      </li>
                      <li>
                        Object to or restrict the processing of your data.
                      </li>
                    </ul>
                    <p>
                      To exercise any of these rights, please contact us at:
                      <a
                        href={`mailto:${contactEmail}`}
                        className="text-brand-primary font-bold hover:underline ml-1"
                      >
                        {contactEmail}
                      </a>
                    </p>
                  </div>
                </section>

                <section id="data-retention" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">06.</span>
                    Data retention
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    We only keep your data as long as necessary for the purposes
                    it was collected, or as required by law (e.g., for financial
                    auditing or legal compliance).
                  </p>
                </section>

                <section id="contact" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">07.</span>
                    Contact Information
                  </h2>
                  <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      Reimage Consultancy Services Ltd
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      If you have any questions or concerns regarding this
                      policy, please contact us using the details below:
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-slate-900">
                        Email:{" "}
                        <a
                          href={`mailto:${contactEmail}`}
                          className="text-brand-primary hover:underline"
                        >
                          {contactEmail}
                        </a>
                      </p>
                      <p className="text-sm text-slate-500">
                        Registered in England and Wales. Company No: 08478744.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <p className="text-sm text-slate-400">
                    © {new Date().getFullYear()} GetDigitell. All rights
                    reserved.
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
