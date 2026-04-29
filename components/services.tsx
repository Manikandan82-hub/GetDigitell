"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Target,
  TrendingUp,
  Code2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const outcomes = [
  {
    icon: Zap,
    title: "Launch Fast",
    tag: "48-Hour Delivery",
    description:
      "Get your website live in just 48 hours. No delays, no back-and-forth—just a complete, ready-to-use website.",
    color: "text-amber-500",
    accentBg: "bg-amber-500/10",
  },
  {
    icon: Target,
    title: "Attract Customers",
    tag: "Conversion Focused",
    description:
      "We design websites built to convert visitors into real customers with clear messaging and strong CTAs.",
    color: "text-brand-primary",
    accentBg: "bg-brand-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Grow Online",
    tag: "Built for Growth",
    description:
      "Your website is SEO-optimized to help people find your business and support long-term growth.",
    color: "text-emerald-500",
    accentBg: "bg-emerald-500/10",
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

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    breakpoints: {
      "(min-width: 1024px)": { active: false },
    },
  });

  // Auto-play for mobile
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="services"
      className="py-12 lg:py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <span className="inline-block text-sm font-semibold text-brand-primary uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2>What We Do</h2>
          <p className="mt-4 max-w-lg">
            We build high-performance websites that do three things for your
            business.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-[1.1fr_auto_1fr] gap-0 items-stretch">
          {/* LEFT — Web Development Hub Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-background rounded-3xl p-8 lg:p-10 overflow-hidden"
          >
            {/* Animated glows */}
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 7, repeat: Infinity }}
            />

            {/* Grid texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="relative z-10 h-full flex flex-col">
              {/* Icon + badge */}
              <div className="flex items-start justify-between mb-7">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-brand-primary/20 flex items-center justify-center"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Code2 className="w-8 h-8 text-brand-primary" />
                </motion.div>
                <span className="px-3 py-1.5 rounded-full bg-brand-primary/25 text-xs font-semibold">
                  Core Service
                </span>
              </div>

              <h3 className=" text-2xl lg:text-3xl mb-4">Web Development</h3>
              <p className="leading-relaxed mb-8">
                Custom websites and web apps built with cutting-edge
                technologies, designed for speed, performance, and measurable
                results.
              </p>

              {/* Feature checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                {features.map((feat, i) => (
                  <motion.div
                    key={feat}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span className="text-sm">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* MIDDLE - Animated Flow Lines */}
          <div className="hidden lg:flex flex-col items-center justify-around py-12 px-2">
            {outcomes.map((_, i) => (
              <div
                key={i}
                className="relative flex items-center w-20 xl:w-28 h-10"
              >
                {/* Base static line */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-border/50 -translate-y-1/2" />

                {/* Continuous flowing light effect simulating data transfer */}
                <motion.div
                  initial={{ left: "-20%", opacity: 0 }}
                  animate={{ left: "110%", opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent -translate-y-1/2 blur-[1px]"
                />

                {/* Receiver Arrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8 + i * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border border-brand-primary/30 bg-background flex items-center justify-center z-10 shadow-[0_0_15px_-3px_rgba(var(--brand-primary),0.3)]"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-primary" />
                </motion.div>
              </div>
            ))}
          </div>

          {/* RIGHT — Outcome cards stacked / Carousel on mobile */}
          <div className="overflow-hidden px-1" ref={emblaRef}>
            <div className="flex lg:flex-col gap-4">
              {outcomes.map((outcome, index) => {
                const Icon = outcome.icon;
                return (
                  <motion.div
                    key={outcome.title}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                    whileHover={{ x: 6 }}
                    className="flex-[0_0_100%] lg:flex-1 group bg-card border border-border hover:border-brand-primary/25 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/5 relative overflow-hidden"
                  >
                    {/* Left accent bar on hover */}
                    <motion.div className="absolute left-0 top-4 bottom-4 w-0.5 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${outcome.accentBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-6 h-6 ${outcome.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1.5">
                          <h3 className="text-base font-bold">{outcome.title}</h3>
                          <span
                            className={`text-xs font-semibold ${outcome.color} hidden sm:block`}
                          >
                            — {outcome.tag}
                          </span>
                        </div>
                        <p className="text-sm">{outcome.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
