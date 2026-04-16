"use client";

import { motion } from "framer-motion";
import { TemplateCard, templates } from "@/components/portfolio";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-20 lg:pt-30 lg:pb-10 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-start gap-4 mb-12">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 -ml-2 text-muted-foreground hover:text-secondary transition-colors"
                data-cursor-hover
              >
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-black tracking-tight mb-6">
                Our Premium{" "}
                <span className="text-primary">Website Templates</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Choose from our curated collection of high-performance
                templates. Everything from layout to colors can be fully
                customized for your brand.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {templates.map((template, index) => (
              <TemplateCard
                key={template.title}
                template={template}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
