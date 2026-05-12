"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  X,
  Rocket,
  Crown,
  ArrowRight,
  ShieldCheck,
  Star,
  Calendar,
  Clock,
  Headphones,
  TrendingUp,
  Globe,
  Server,
  Receipt,
  Timer,
  Lock,
  MessageSquare,
  Award,
  Zap,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { AdditionalCosts } from "./additional-costs";

const topFeatures = [
  {
    icon: ShieldCheck,
    title: "No Hidden Charges",
    subtitle: "100% transparent pricing — no surprises later",
  },
  {
    icon: Calendar,
    title: "1 Month FREE Maintenance",
    subtitle: "Then just £20/month to keep things running smoothly",
  },
  {
    icon: Clock,
    title: "Flexible Delivery Time",
    subtitle: "Based on your package and requirements",
  },
  {
    icon: Headphones,
    title: "UK-Based Support",
    subtitle: "Real support when you need it most",
  },
];

const plans: any = {
  Business: [
    {
      name: "LaunchPad",
      description: "Perfect for small businesses getting started online",
      price: "100",
      period: "one-time",
      icon: Zap,
      features: [
        "1–3 Page Static Website",
        "Fully Mobile Responsive Design",
        "Contact Form Setup",
        "Fast Loading Performance",
        "Basic SEO Setup",
        "48 Hour Delivery",
        "1 Month FREE Maintenance",
        "WhatsApp / Call / Email Integration",
      ],
      notIncluded: [],
      cta: "Start for £100",
      popular: false,
    },
    {
      name: "GrowthPro",
      description: "Designed to attract, engage, and convert customers",
      price: "249",
      period: "one-time",
      icon: Rocket,
      features: [
        "Everything in LaunchPad, plus:",
        "5–7 Pages Website",
        "Custom Brand-Focused Design",
        "Lead Capture Forms",
        "On-Page SEO Optimization",
        "Google Maps Integration",
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
      description: "Built for businesses ready to scale and dominate online",
      price: "499",
      period: "one-time",
      icon: Crown,
      features: [
        "Everything in GrowthPro, plus:",
        "10–12 Pages Website",
        "Advanced UI/UX Design",
        "Blog Setup",
        "Advanced SEO Setup",
        "Chatbot Integration",
        "Google Analytics Setup",
        "Conversion Optimization",
        "Priority Support",
        "Unlimited Revisions (within scope)",
      ],
      notIncluded: [],
      cta: "Go ScaleMax",
      popular: false,
    },
  ],
  Custom: [
    {
      name: "Custom Pro",
      description: "Tailored for advanced or unique business requirements",
      price: "Price on Request",
      period: "",
      icon: Crown,
      custom: true,
      features: [
        "Everything from LaunchPad / GrowthPro / ScaleMax (as required)",
        "Payment Gateway Integration (Stripe / Razorpay / PayPal)",
        "E-commerce Functionality",
        "Booking Systems",
        "CRM Integrations",
        "API Integrations",
        "Multi-language Websites",
        "Advanced Automation",
        "Custom Dashboards",
        "Membership / Login Systems",
      ],
      notIncluded: [],
      cta: "Request Quote",
      popular: false,
    },
  ],
};

export function PricingCard({ plan, index }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isPopular = plan.popular;
  const isCustom = plan.custom;

  const initialFeaturesCount = 6;
  const hasMoreFeatures = plan.features.length > initialFeaturesCount;
  const visibleFeatures = isExpanded
    ? plan.features
    : plan.features.slice(0, initialFeaturesCount);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`mt-5 flex flex-col w-full self-start ${
        isPopular ? "lg:scale-[1.02]" : ""
      }`}
    >
      <div
        className={`flex flex-col rounded-2xl border transition-all duration-300 relative ${
          isPopular
            ? "border-primary/20 bg-white shadow-xl shadow-primary/5 ring-1 ring-primary/10 hover:shadow-2xl hover:shadow-primary/10"
            : "border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md"
        } ${isCustom ? "bg-gradient-to-br from-slate-50 to-slate-100" : ""}`}
      >
        {isPopular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
            <span className="bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg shadow-primary/25 whitespace-nowrap border border-primary-foreground/10">
              Most Popular
            </span>
          </div>
        )}
        <div className="flex flex-col p-7 sm:p-8">
          {/* HEADER */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {plan.name}
            </h3>
            <p className="text-sm text-slate-600 line-clamp-2">
              {plan.description}
            </p>
          </div>

          {/* PRICE */}
          <div className="mb-6">
            {!isCustom ? (
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg text-slate-600">£</span>
                  <span className="text-5xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                </div>
                {/* <div className="mt-1 space-y-1">
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    <span className="text-[12px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md border border-slate-200/50">
                      + Domain Setup
                    </span>
                    <span className="text-[12px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md border border-slate-200/50">
                      + Hosting Setup
                    </span>
                    <span className="text-[12px] bg-primary/5 text-primary px-1.5 py-0.5 rounded-md border border-primary/10 font-bold">
                      + Maintenance (£20/mo)
                    </span>
                  </div>
                </div> */}
              </div>
            ) : (
              <p className="text-3xl font-bold text-slate-900 leading-tight">
                {plan.price}
              </p>
            )}
          </div>

          {/* FEATURES */}
          <div className="mt-1 space-y-2.5 flex-1">
            <AnimatePresence initial={false}>
              {visibleFeatures.map((f: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                  className="flex gap-3 text-[13px] text-slate-700 items-start"
                >
                  <div className="mt-1 w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <Check
                      className="w-2.5 h-2.5 text-slate-500"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="leading-tight">{f}</span>
                </motion.div>
              ))}
            </AnimatePresence>

            {hasMoreFeatures && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-primary transition-colors group"
              >
                {isExpanded
                  ? "Show less"
                  : `+ ${plan.features.length - initialFeaturesCount} more features`}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5 ${
                    isExpanded ? "rotate-180 group-hover:-translate-y-0.5" : ""
                  }`}
                />
              </button>
            )}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button asChild className="w-full">
              <Link href="#contact">{plan.cta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Pricing() {
  const allPlans = [...plans.Business, ...plans.Custom];
  return (
    <section
      id="pricing"
      className="bg-background relative border-t border-border/50 py-20 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2" />
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
            <Rocket className="w-3.5 h-3.5 text-primary" />
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              Pricing Plans
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground leading-[1.1] tracking-tight mb-4">
            Transparent plans.{" "}
            <span className="text-primary">No surprises, ever.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            One-time payment. No subscriptions. Pick a plan and get started
            today.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3 lg:mb-8"
        >
          {topFeatures.map((f, i) => (
            <Card
              key={i}
              className="bg-muted/30 rounded-xl p-4 flex flex-col lg:flex-col items-center justify-center gap-3 border border-border/50 shadow-none"
            >
              <div className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-foreground shadow-sm shrink-0">
                <f.icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-foreground text-center">
                  {f.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5 text-center">
                  {f.subtitle}
                </p>
              </div>
            </Card>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 items-stretch max-w-7xl mx-auto">
          {allPlans.map((plan, i) => (
            <div key={i} className="flex w-full">
              <PricingCard plan={plan} index={i} />
            </div>
          ))}
        </div>

        {/* Additional Costs — Static Card Layout */}
        <AdditionalCosts />
      </div>
    </section>
  );
}
