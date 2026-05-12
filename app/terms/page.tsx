"use client";

import { motion } from "framer-motion";
import { ChevronRight, Printer, Download, Share2 } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  const lastUpdated = "May 11, 2026";

  const sections = [
    { id: "use-of-website", title: "1. Use of Website" },
    { id: "intellectual-property", title: "2. Intellectual Property" },
    { id: "limitation-of-liability", title: "3. Limitation of Liability" },
    { id: "services", title: "4. Services" },
    { id: "external-links", title: "5. External Links" },
    { id: "governing-law", title: "6. Governing Law" },
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
                Terms & Conditions
              </span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
              Terms & Conditions
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

              <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  Need help?
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  If you have questions about these terms, please contact our
                  legal department.
                </p>
                <a
                  href="mailto:legal@getdigitell.com"
                  className="text-xs font-bold text-brand-primary hover:underline"
                >
                  legal@getdigitell.com
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
                  Welcome to GetDigitell. Please read these Terms & Conditions
                  carefully before using our website. By accessing or using any
                  part of the site, you agree to be bound by these Terms &
                  Conditions. If you do not agree to all the terms and
                  conditions, then you may not access the website or use any
                  services.
                </p>

                <section id="use-of-website" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">01.</span>
                    Use of Website
                  </h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      Content is for general information only and may change
                      without notice. We strive to keep all information
                      up-to-date and accurate, but we make no representations or
                      warranties of any kind, express or implied, about the
                      completeness, accuracy, reliability, suitability, or
                      availability with respect to the website or the
                      information contained on the website.
                    </p>
                    <p>
                      Your use of any information or materials on this website
                      is entirely at your own risk, for which we shall not be
                      liable. It shall be your own responsibility to ensure that
                      any products, services, or information available through
                      this website meet your specific requirements.
                    </p>
                  </div>
                </section>

                <section
                  id="intellectual-property"
                  className="mb-12 scroll-mt-32"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">02.</span>
                    Intellectual Property
                  </h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      All content is owned by GetDigitell or its licensors. This
                      includes, but is not limited to, the design, layout, look,
                      appearance, and graphics. You may not reproduce,
                      distribute, or use any part of this website without
                      explicit written permission from us.
                    </p>
                    <p>
                      The GetDigitell name and logo are trademarks of Reimage
                      Consultancy Services Ltd. Unauthorized use of this website
                      may give rise to a claim for damages and/or be a criminal
                      offence.
                    </p>
                  </div>
                </section>

                <section
                  id="limitation-of-liability"
                  className="mb-12 scroll-mt-32"
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">03.</span>
                    Limitation of Liability
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    We are not liable for any loss arising from use of this
                    website or reliance on its content. To the maximum extent
                    permitted by applicable law, in no event shall GetDigitell
                    be liable for any direct, indirect, punitive, incidental,
                    special, consequential damages or any damages whatsoever
                    including, without limitation, damages for loss of use, data
                    or profits, arising out of or in any way connected with the
                    use or performance of the website.
                  </p>
                </section>

                <section id="services" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">04.</span>
                    Services
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Any services provided will be subject to separate
                    agreements. These terms apply specifically to the use of the
                    website. Professional services, development projects, and
                    consultancy will be governed by a separate Service Agreement
                    or Statement of Work signed by both parties.
                  </p>
                </section>

                <section id="external-links" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">05.</span>
                    External Links
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    We are not responsible for content on external websites.
                    From time to time, this website may also include links to
                    other websites. These links are provided for your
                    convenience to provide further information. They do not
                    signify that we endorse the website(s). We have no
                    responsibility for the content of the linked website(s).
                  </p>
                </section>

                <section id="governing-law" className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-brand-primary opacity-20">06.</span>
                    Governing Law
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    These terms are governed by the laws of England and Wales.
                    Any disputes arising in connection with these terms shall be
                    subject to the exclusive jurisdiction of the courts of
                    England and Wales.
                  </p>
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
