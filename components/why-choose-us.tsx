"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
/* ─── Card data ─── */
const cards = [
  {
    title: "Fast Delivery",
    description:
      "Launch your website in just 48 hours—no delays, no long development cycles.",
  },
  {
    title: "Affordable Pricing",
    description:
      "Professional websites from just £100—no hidden fees, no lock-in contracts.",
  },
  {
    title: "Simple Process",
    description:
      "Just answer a few questions—we handle everything from design to launch.",
  },
  {
    title: "Built for Growth",
    description:
      "Designed not just to look good, but to generate leads and drive real business results.",
  },
  {
    title: "Mobile & SEO Ready",
    description:
      "Fully responsive and optimized for search engines from day one.",
  },
  {
    title: "End-to-End Support",
    description:
      "From idea to launch and beyond—we support you at every step of the journey.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-24 lg:py-15 bg-secondary/20 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 relative z-10">
        {/* Top Section: Split Layout (Image smaller) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-8">
          {/* Left Text Content (Takes up 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-2 ml-1">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Why Choose Us
              </span>
            </div>

            <h2 className="mb-6">Expert digital services you can trust</h2>

            <p className="mb-10 max-w-xl">
              We combine modern web technology, experienced developers, and a
              personalized approach to give every client the best possible
              online presence and a high-converting website.
            </p>

            <Link
              href="#contact"
              className="group flex items-center pr-1.5 pl-6 py-1.5 bg-background hover:bg-card text-foreground rounded-full transition-all duration-300 gap-6 border border-border shadow-sm"
            >
              <span className="font-semibold text-sm">Book a consultation</span>
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>

          {/* Right Image Content (Layered Composition) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end py-8"
          >
            {/* Tilted background accent */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-[90%] bg-primary/5 border border-primary/10 rounded-[2.5rem] -rotate-6 -z-10 hidden sm:block" />

            {/* Main Image Frame */}
            <div className="relative w-full sm:w-[90%] h-[320px] sm:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl border-8 border-background bg-secondary/20">
              <Image
                src="/images/why-choose-us.webp"
                alt="Expert UK-based web development team providing fast and reliable digital solutions for small businesses"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-4 -left-2 sm:left-4 bg-background p-4 pr-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-border flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary font-black text-xl">
                10+
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground leading-tight">
                  Years of
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  Experience
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section: Feature List */}
        <div className="relative">
          {/* Separator Line */}
          <div className="absolute top-0 left-0 w-full h-px bg-border">
            {/* Active progress indicator wrapper */}
            <div className="h-[3px] bg-primary w-1/4 rounded-full -translate-y-[1px]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col group p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 cursor-default"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-bold m-0 leading-tight">
                    {card.title}
                  </h3>
                </div>
                <p className="m-0 text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
