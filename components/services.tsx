"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Target,
  TrendingUp,
  Code2,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Search,
  Gauge,
  ShieldAlert,
  FileText,
  PenTool,
  Server,
  Accessibility,
  ShieldCheck,
} from "lucide-react";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const outcomes = [
  {
    icon: ShieldCheck,
    title: "Build Trust",
    tag: "High-End Authority",
    color: "text-blue-600",
    accentBg: "bg-blue-600/10",
  },
  {
    icon: Target,
    title: "Attract Customers",
    tag: "Conversion Focused",
    color: "text-brand-primary",
    accentBg: "bg-brand-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Grow Online",
    tag: "Built For Scale",
    color: "text-emerald-600",
    accentBg: "bg-emerald-600/10",
  },
];
const features = [
  "Custom Design & Development",
  "Mobile Responsive",
  "SEO Optimised",
  "48-Hour Delivery",
  "CMS Integration",
  "Ongoing Support",
];

const oneOffServicesList = [
  { title: "Website Redesigns", icon: RefreshCw },
  { title: "SEO Audits", icon: Search },
  { title: "Speed Optimisation", icon: Gauge },
  { title: "Malware Cleanup", icon: ShieldAlert },
  { title: "Landing Pages", icon: FileText },
  { title: "Blog Writing", icon: PenTool },
  { title: "Hosting Migration", icon: Server },
  { title: "Accessibility Fixes", icon: Accessibility },
  { title: "GDPR Compliance", icon: ShieldCheck },
];

export function Services() {
  const navigate = useRouter();
  return (
    <section
      id="services"
      className="py-10 lg:py-30 bg-background relative border-t border-border/60"
    >
      <div className="max-w-8xl mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Side Header (3 Columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit pr-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Label */}
              <div>
                <span className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-primary">
                  Our Services
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-5">
                <h2 className="text-3xl lg:text-5xl font-black tracking-tight leading-[1.05] text-foreground">
                  Modern Web Solutions for Growing Brands.
                </h2>

                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-md">
                  We create fast, scalable, and conversion-focused websites that
                  help businesses build trust, attract customers, and grow
                  online with confidence.
                </p>
              </div>

              {/* Divider */}
              <div className="w-16 h-[2px] bg-brand-primary rounded-full" />

              <div className="grid grid-cols-3 gap-3 pt-10">
                {outcomes.map((outcome, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="group flex flex-col gap-4 p-4 rounded-2xl border border-border/60 bg-white hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${outcome.accentBg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
                    >
                      <outcome.icon className={`w-6 h-6 ${outcome.color}`} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">
                        {outcome.tag.split(" ")[0]}
                      </p>
                      <h4 className="text-md font-black tracking-tight text-foreground leading-tight">
                        {outcome.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Modular Service Grid (8 Columns) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60 overflow-hidden rounded-xl lg:rounded-3xl shadow-2xl shadow-brand-primary/5">
              {/* PRIMARY MODULE: Web Development */}
              <div className="md:col-span-2 lg:col-span-3 bg-card p-4 lg:p-10 hover:bg-muted/30 transition-colors group">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <Badge
                      variant="outline"
                      className="px-4 py-1.5 rounded-full border-border bg-background text-[10px] font-black uppercase tracking-widest"
                    >
                      Full Build
                    </Badge>
                  </div>

                  <h3 className="text-3xl font-bold mb-6">
                    Custom Website Production
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-xl">
                    Our flagship service for businesses that need a real online
                    presence. We build custom, mobile-ready websites from
                    scratch.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                        <span className="text-sm font-bold text-foreground/80 tracking-tight">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECONDARY MODULES: One-Off Fixes */}
              {oneOffServicesList.map((service, i) => (
                <div
                  key={i}
                  className="bg-card p-8 lg:p-8 hover:bg-muted/50 transition-all group relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-brand-primary transition-colors mb-4" />
                    <h4 className="text-lg font-bold mb-2 tracking-tight group-hover:translate-x-1 transition-transform">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Professional {service.title.toLowerCase()} solutions
                      tailored for all business needs.
                    </p>
                  </div>
                </div>
              ))}

              <div className="md:col-span-2 lg:col-span-3 bg-brand-primary p-6 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                <div className="max-w-md text-center md:text-left">
                  <h4 className="text-2xl font-bold mb-2">
                    Need a quick fix today?
                  </h4>
                  <p className="text-white/80 text-sm">
                    We handle all the technical headaches so you can focus on
                    running your business.
                  </p>
                </div>
                <Link
                  href="#contact"
                  className="px-8 py-4 bg-white text-brand-primary rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform shadow-xl"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
