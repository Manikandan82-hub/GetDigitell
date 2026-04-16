"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "sales@getdigitell.com",
    href: "mailto:sales@getdigitell.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+447544838500",
    href: "tel:+447544838500",
  },
  {
    icon: MapPin,
    title: "Address",
    value: `338 Southbourne Grove, Southend on sea , SS0 0AQ`,
    href: "#",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-10 lg:py-15 relative overflow-hidden bg-background"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left max-w-3xl mb-16 lg:mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let's build your{" "}
            <span className="text-primary">next big thing</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a project in mind? We'd love to hear from you. Send us a
            message and our technical team will respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Tech Sidebar Image Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full min-h-[450px] lg:min-h-full rounded-3xl overflow-hidden shadow-xl border border-border group"
          >
            <Image
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Our Support Team"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            {/* Elegant vibrant gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-8">
                We're here to help.
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20 group-hover/item:bg-white transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-white group-hover/item:text-primary transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/90 group-hover/item:text-white transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sleek Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border shadow-sm rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <form className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label
                        htmlFor="name"
                        className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="bg-background/50 border-border/50 focus-visible:ring-primary rounded-xl h-12 px-4 shadow-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <label
                        htmlFor="email"
                        className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-background/50 border-border/50 focus-visible:ring-primary rounded-xl h-12 px-4 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label
                        htmlFor="phone"
                        className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+44 (555) 000-0000"
                        className="bg-background/50 border-border/50 focus-visible:ring-primary rounded-xl h-12 px-4 shadow-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <label
                        htmlFor="business"
                        className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                      >
                        Business Name
                      </label>
                      <Input
                        id="business"
                        placeholder="Acme Corp"
                        className="bg-background/50 border-border/50 focus-visible:ring-primary rounded-xl h-12 px-4 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Business Type
                      </label>
                      <Select>
                        <SelectTrigger className="w-full bg-background/50 border-border/50 focus-visible:ring-primary rounded-xl h-12 px-5 pt-5 pb-6 shadow-sm">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="electrician">
                            Electrician
                          </SelectItem>
                          <SelectItem value="salon">Salon</SelectItem>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Package
                      </label>
                      <Select>
                        <SelectTrigger className="w-full bg-background/50 border-border/50 focus-visible:ring-primary rounded-xl h-12 px-5 pt-5 pb-6 shadow-sm">
                          <SelectValue placeholder="Select package" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="launch">Launch</SelectItem>
                          <SelectItem value="growth">GrowthPro</SelectItem>
                          <SelectItem value="scale">Scale Max</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold group flex items-center justify-center gap-2"
                  >
                    Next Step
                    <Send className="w-4 h-4 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
