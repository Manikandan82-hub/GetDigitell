"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export const templates = [
  {
    title: "Imax Laser Tech",
    category: "Laser Cutting & CNC",
    description:
      "Professional services for laser cutting, CNC bending, and precision fabrication.",
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-600/10",
    url: "https://www.imaxlasertech.com/",
    image: "/images/imax.jpeg",
  },
  {
    title: "App Good Food",
    category: "Food Delivery",
    description:
      "A comprehensive food delivery platform connecting users with local restaurants efficiently.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    url: "https://appgoodfood.in/",
    image: "/images/appgoodfood.jpeg",
  },
  {
    title: "Home Services & Electrician",
    category: "Service Business",
    description:
      "Calm and accessible template designed for clinics, therapists, and spas.",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    image: "/images/electrician-pro.jpeg",
  },
  {
    title: "SaaS Landing Page",
    category: "Software & Tech",
    description:
      "Conversion-focused landing page for software products and tech startups.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
  },
  {
    title: "Local Business Hub",
    category: "Trades & Services",
    description:
      "Trust-building template perfect for plumbers, electricians, and local trades.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
  },
  {
    title: "Creator Portfolio",
    category: "Personal Brand",
    description:
      "Visual-heavy template for photographers, artists, and independent creators.",
    color: "from-sky-500 to-indigo-500",
    bgColor: "bg-sky-500/10",
  },
];

export function TemplateCard({
  template,
  index,
}: {
  template: (typeof templates)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const glowX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.a
        href={template.url || "#"}
        target={template.url ? "_blank" : undefined}
        rel={template.url ? "noopener noreferrer" : undefined}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: rotateXSpring, rotateY: rotateYSpring }}
        className="block h-full"
      >
        <Card
          className=" p-0 group h-full flex flex-col overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-500 cursor-pointer relative shadow-sm hover:shadow-xl"
          data-cursor-hover
        >
          {/* Mouse follow glow effect */}
          <motion.div
            className={`absolute w-40 h-40 bg-gradient-to-br ${template.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
            style={{
              left: glowX,
              top: glowY,
              transform: "translate(-50%, -50%)",
            }}
          />

          <CardContent className="p-0 relative flex flex-col flex-1">
            {/* Image Area */}
            <div
              className={`relative h-52 shrink-0 overflow-hidden ${template.bgColor}`}
            >
              {template.image ? (
                <div className="absolute inset-0 z-0 bg-background overflow-hidden relative">
                  <img
                    src={template.image}
                    alt={`${template.title} - Professional ${template.category} website template designed by GetDigitell UK`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay" />
                </div>
              ) : template.url ? (
                <div className="absolute inset-0 z-0 bg-background overflow-hidden relative">
                  <div className="absolute w-[400%] h-[400%] origin-top-left scale-[0.25] transition-transform duration-700 group-hover:scale-[0.26]">
                    <iframe
                      src={template.url}
                      title={`${template.title} preview`}
                      className="w-full h-full border-0 pointer-events-none bg-background"
                      tabIndex={-1}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                </div>
              ) : (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-20 z-0`}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}

              {/* Decorative elements */}
              <motion.div
                className="absolute top-4 left-4 w-24 h-24 rounded-full bg-white/10 blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white/5 blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 relative">
              <div>
                <motion.span
                  className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r ${template.color} bg-clip-text text-transparent`}
                >
                  {template.category}
                </motion.span>

                <h3 className="mt-2 text-xl font-bold group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  {template.title}
                  <motion.span
                    initial={{ x: -5, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ArrowUpRight size={18} className="text-primary" />
                  </motion.span>
                </h3>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {template.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.a>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="max-w-7xl mx-auto py-10 lg:py-10 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl px-4 sm:px-6 lg:px-3 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl mb-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-2"
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              Sample Works
            </span>
          </motion.div>
          <h2 className="mb-6">
            Explore our premium{" "}
            <span className="text-primary">website templates</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide a foundation of high-converting, beautiful layouts.
            Choose a template that fits your business, and we'll customize it
            entirely to your brand.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {templates.slice(0, 3).map((template, index) => (
            <TemplateCard
              key={template.title}
              template={template}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <Link href="/templates">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold group flex items-center gap-2"
            >
              Explore All Templates
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
