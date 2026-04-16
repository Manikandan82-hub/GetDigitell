"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Check,
  X,
  Zap,
  Rocket,
  Crown,
  ArrowRight,
  ShieldCheck,
  Star,
} from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "LaunchPad",
    description: "Perfect for small businesses getting started online",
    price: "100",
    period: "one-time",
    icon: Zap,
    features: [
      "1–3 Page Static Website",
      "Mobile Responsive Design",
      "Basic Contact Form",
      "Fast Loading Website",
      "Basic SEO Setup",
      "48 Hour Delivery",
      "1 month FREE Maintenance",
      "Whatsapp Integration /Call /Email",
    ],
    notIncluded: ["Custom design revisions (limited)", "Advanced integrations"],
    cta: "Start for £100",
    popular: false,
  },
  {
    name: "GrowthPro",
    description: "Best for businesses looking to attract and convert customers",
    price: "249",
    period: "one-time",
    icon: Rocket,
    features: [
      "Everything in LaunchPad PLUS:",
      "Up to 5–7 Pages",
      "Custom Design (Brand-focused)",
      "Lead Capture Forms",
      "Basic On-Page SEO Optimization",
      "Google Map Integration",
      "Social Media Integration",
      "Speed Optimization",
      "2–3 Design Revisions",
    ],
    notIncluded: [],
    cta: "Choose GrowthPro",
    popular: true,
  },
  {
    name: "ScaleMax",
    description: "For businesses ready to scale and dominate online",
    price: "499",
    period: "one-time",
    icon: Crown,
    features: [
      "Everything in GrowthPro PLUS:",
      "Up to 10–12 Pages",
      "Advanced UI/UX Design",
      "Blog Setup",
      "Advanced SEO Setup",
      "Chatbot Integration",
      "Analytics Setup (Google Analytics)",
      "Conversion Optimization",
      "Priority Support",
      "Unlimited Revisions (within scope)",
    ],
    notIncluded: [],
    cta: "Go Premium",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-10 lg:py-17 bg-secondary/10 border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-start mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              Pricing & Packages
            </span>
          </div>
          <h2 className="mb-4">Simple Pricing. Fast Results.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Choose your package, answer a few questions, and go live in 48
            hours.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 text-primary">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-semibold text-sm">
              Launch with confidence — Enjoy 1 Month FREE Maintenance on all
              websites
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-3xl p-6 lg:p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-foreground text-background scale-100 lg:scale-[1.02] shadow-xl z-10 ring-4 ring-primary/20"
                    : "bg-card border border-border hover:border-primary/40 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 w-full flex justify-center left-0">
                    <span className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" /> Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2.5 rounded-xl ${plan.popular ? "bg-primary/20" : "bg-primary/10"}`}
                  >
                    <Icon
                      className={`w-5 h-5 ${plan.popular ? "text-primary-foreground" : "text-primary"}`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold m-0 ${plan.popular ? "text-background" : "text-foreground"}`}
                  >
                    {plan.name}
                  </h3>
                </div>

                <p
                  className={`text-xs leading-relaxed mb-5 ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}
                >
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-3xl font-extrabold tracking-tight ${plan.popular ? "text-background" : "text-foreground"}`}
                    >
                      £{plan.price}
                    </span>
                    <span
                      className={`text-xs font-medium ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}
                    >
                      one-time
                    </span>
                  </div>
                </div>

                <div className="flex-1 space-y-5">
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? "text-primary" : "text-primary"}`}
                        />
                        <span
                          className={`text-[13px] leading-snug ${plan.popular ? "text-background/90" : "text-foreground/80"} ${feature.includes("Everything") ? "font-bold" : ""}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <ul className="space-y-2.5 pt-4 border-t border-border/10">
                      {plan.notIncluded.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 opacity-70"
                        >
                          <X
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 text-red-400`}
                          />
                          <span
                            className={`text-[13px] leading-snug ${plan.popular ? "text-background/80" : "text-muted-foreground"}`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-6 mt-auto">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      className={`w-full rounded-2xl py-5 text-sm font-semibold group flex items-center justify-center gap-2 ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                      }`}
                      data-click-effect
                    >
                      <Link href="#contact">
                        {plan.cta}{" "}
                        <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
