"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart",
    content:
      "GetDigitell delivered our MVP in just 3 days. The quality exceeded our expectations, and their team was incredibly responsive throughout the entire process.",
    rating: 5,
    avatar: "SC",
    company: "TechStart",
    result: "3-day MVP delivery",
  },
  {
    name: "Marcus Johnson",
    role: "Founder, GrowthLab",
    content:
      "Working with GetDigitell was a game-changer for our startup. They understood our vision and translated it into a beautiful, functional product that users love.",
    rating: 5,
    avatar: "MJ",
    company: "GrowthLab",
    result: "200% user growth",
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, DataFlow",
    content:
      "The team at GetDigitell is exceptional. They not only built what we asked for but also provided valuable insights that significantly improved our product.",
    rating: 5,
    avatar: "ER",
    company: "DataFlow",
    result: "50% faster load time",
  },
  {
    name: "David Kim",
    role: "Product Manager, Innovate",
    content:
      "Fast, reliable, and professional. GetDigitell helped us launch our platform on time and within budget. Highly recommended for any startup!",
    rating: 5,
    avatar: "DK",
    company: "Innovate",
    result: "On-time delivery",
  },
  {
    name: "Lisa Thompson",
    role: "Director, CreativeHub",
    content:
      "Outstanding work! The attention to detail and commitment to quality made all the difference. Our website has never looked better or performed faster.",
    rating: 5,
    avatar: "LT",
    company: "CreativeHub",
    result: "40% more conversions",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (!emblaApi) return;
    let intervalId: NodeJS.Timeout;

    const startAutoplay = () => {
      intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
    };

    const stopAutoplay = () => {
      clearInterval(intervalId);
    };

    startAutoplay();

    const rootNode = emblaApi.rootNode();
    rootNode.addEventListener("mouseenter", stopAutoplay);
    rootNode.addEventListener("mouseleave", startAutoplay);

    return () => {
      stopAutoplay();
      rootNode.removeEventListener("mouseenter", stopAutoplay);
      rootNode.removeEventListener("mouseleave", startAutoplay);
    };
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-secondary/30 overflow-hidden relative"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Trusted by Founders Worldwide
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden py-4 -mx-4 px-4" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_80%] md:flex-[0_0_45%] lg:flex-[0_0_31%] relative"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                    className="bg-card border border-border hover:border-primary/30 rounded-3xl p-8 relative h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Large Quote Background */}
                    <div className="absolute top-4 right-6 text-7xl font-serif text-primary/5 leading-none select-none transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-primary/10">
                      &rdquo;
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Star className="w-4 h-4 fill-primary text-primary" />
                            </motion.div>
                          ),
                        )}
                      </div>

                      {/* Quote */}
                      <p className="mb-8 font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 flex-1 relative z-10 leading-relaxed text-[15px]">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm transform group-hover:scale-110 transition-transform duration-300">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-bold text-foreground text-sm">
                              {testimonial.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Result Badge */}
                      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 flex items-center gap-1 z-20">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{testimonial.result}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full w-12 h-12 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-x-1"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-500 ease-out ${
                    index === selectedIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full w-12 h-12 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:translate-x-1"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
