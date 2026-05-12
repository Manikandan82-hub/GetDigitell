"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  ShieldCheck,
  Check,
  Zap,
  Sparkles,
  Activity,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function AdditionalCosts() {
  const essentials = [
    {
      icon: Globe,
      title: "Domain Name",
      description:
        "Your unique web address. Cost depends on the TLD (.com, .co.uk, etc.) you choose.",
      price: "Market Rate",
      tag: "Mandatory",
    },
    {
      icon: Server,
      title: "Managed Hosting",
      description:
        "Secure server space for your site. Cost varies based on your chosen provider and traffic needs.",
      price: "Provider Rate",
      tag: "Mandatory",
    },
  ];

  const maintenanceTiers = [
    {
      title: "Standard",
      price: "£20",
      isMandatory: true,
      description:
        "Essential maintenance package to keep your website secure, updated, and running smoothly.",
      icon: ShieldCheck,
      features: [
        "Website Updates",
        "Bug Fixes",
        "Security Monitoring",
        "Limited Support Hours (5 Hrs /Month)",
      ],
    },
    {
      title: "Professional",
      price: "£30",
      isPopular: true,
      description:
        "Perfect for growing businesses that need performance optimization and extended support.",
      icon: Zap,
      features: [
        "Everything from Standard Package",
        "Performance Optimization",
        "Code Dependency Updates",
        "Support Hours (10 to 12 Hrs /Month)",
      ],
    },
    {
      title: "Premium",
      price: "Price on request",
      description:
        "Advanced maintenance solution for scaling businesses and modern applications.",
      icon: Activity,
      features: [
        "Everything from Professional Package",
        "Backup Management",
        "Technical Support",
        "Application/Server Maintenance",
        "Framework Dependency Updates",
        "Performance Monitoring & Reports",
        "Domain & SSL Monitoring",
        "Google Analytics Monitoring",
        "Monthly Report Generation",
        "Priority Support",
        "Content & Minor Enhancements",
      ],
    },
  ];
  const [expandedCards, setExpandedCards] = useState<any>({});
  return (
    <div className="mt-25 relative">
      <div className="absolute -top-24 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-left mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 px-2 lg:px-4 py-1.5 rounded-full mb-5"
        >
          <AlertCircle className="w-4 h-4 text-destructive" />

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-destructive">
            Mandatory Add-ons
          </span>
        </motion.div>

        <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-5">
          Required for <span className="text-primary">Every Package</span>
        </h3>

        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          To ensure your website remains secure, stable, and fully under your
          ownership, these essential services are required for every website we
          build.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 mb-1  border border-border/60 rounded-3xl">
        <div className="lg:col-span-4">
          <div className="p-4 lg:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />

              <h4 className="text-xl font-bold text-foreground">
                Infrastructure
              </h4>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              We help configure and manage these essentials using trusted
              providers tailored to your business requirements.
            </p>

            <div className="space-y-5">
              {essentials.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                >
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-md text-foreground">
                          {item.title}
                        </h5>

                        <span className="text-[10px] uppercase tracking-wide font-bold text-destructive bg-destructive/5 border border-destructive/10 px-2 py-1 rounded-full">
                          {item.tag}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {item.description}
                      </p>

                      <p className="text-sm font-bold text-primary">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Maintenance Plans */}
        <div className="lg:col-span-8">
          <div className="p-4 lg:p-8">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground">
                    Mandatory Maintenance
                  </h4>

                  <p className="text-xs text-muted-foreground">
                    Required for all active projects
                  </p>
                </div>
              </div>

              <Badge className="bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive/10 px-3 py-1">
                <AlertCircle className="w-3.5 h-3.5 mr-1" />
                Mandatory
              </Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {maintenanceTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                >
                  <Card
                    className={`p-0 relative overflow-hidden rounded-3xl border transition-all duration-300 flex flex-col ${
                      tier.isPopular
                        ? "border-primary shadow-xl shadow-primary/10 bg-card"
                        : "border-border/60 bg-card hover:border-primary/30 hover:shadow-md"
                    }`}
                  >
                    {/* Popular Badge */}
                    {/* {tier.isPopular && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide py-1 px-3 rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )} */}

                    {/* Top */}
                    <div className="p-3 lg:p-7 pb-0">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 ${
                          tier.isPopular
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        <tier.icon className="w-6 h-6" />
                      </div>

                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h4 className="text-2xl font-bold text-foreground">
                          {tier.title}
                        </h4>
                      </div>

                      {/* Price */}
                      <div className="flex items-end gap-1 mb-4">
                        <span
                          className={`text-3xl font-extrabold ${tier.price === "Price on request" && "text-xl"}`}
                        >
                          {tier.price}
                        </span>

                        {tier.price !== "Price on request" && (
                          <span className="text-sm text-muted-foreground mb-1">
                            /month
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                        {tier.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="p-6 pt-0 flex flex-col">
                      <div className="space-y-3 mb-1">
                        {(expandedCards[index]
                          ? tier.features
                          : tier.features.slice(0, 4)
                        ).map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-3">
                            <div
                              className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                                tier.isPopular ? "bg-primary/10" : "bg-muted"
                              }`}
                            >
                              <Check
                                className={`w-3 h-3 ${
                                  tier.isPopular
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                }`}
                                strokeWidth={3}
                              />
                            </div>

                            <span className="text-[13px] text-muted-foreground leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {tier.features.length > 4 && (
                        <button
                          onClick={() =>
                            setExpandedCards((prev: any) => ({
                              ...prev,
                              [index]: !prev[index],
                            }))
                          }
                          className="text-sm font-medium text-primary hover:underline mt-2"
                        >
                          {expandedCards[index]
                            ? "Show less"
                            : `+ ${tier.features.length - 4} more features`}
                        </button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
