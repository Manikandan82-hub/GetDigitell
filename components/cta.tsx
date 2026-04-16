"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export function CTA() {
  return (
    <section className="py-12 lg:py-8 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-foreground px-6 py-8 sm:px-10 sm:py-10"
        >
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-xs font-medium mb-3">
                <Clock size={12} />
                <span>Limited Time Offer</span>
              </div>
              <h2 className="heading-cta">Ready to build your next project?</h2>
              <p className="mt-2 max-w-md text-small-accent">
                Launch within 48 hours. Get 15% off your first project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-background text-foreground hover:bg-background/90 rounded-xl px-6 group"
                  data-click-effect
                >
                  <Link href="#contact">
                    Get Started
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  variant="ghost"
                  asChild
                  className="text-background/80 hover:text-background hover:bg-background/10 rounded-xl px-6"
                  data-click-effect
                >
                  <Link href="#portfolio">View Work</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
