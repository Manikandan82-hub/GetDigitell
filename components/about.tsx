"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Zap, Users, Target, TrendingUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description:
      "We understand that time is critical for startups. Get your project delivered within 48 hours.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Startup Focused",
    description:
      "We specialize in working with startups and understand the unique challenges you face.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Results Driven",
    description:
      "Every decision we make is focused on delivering measurable results for your business.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Build today with tomorrow in mind. Our solutions grow with your business.",
    gradient: "from-violet-500 to-purple-500",
  },
];

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-3xl lg:text-4xl font-bold text-foreground">
      {count}
      {suffix}
    </div>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
  const rotateXSpring = useSpring(rotateX, { damping: 20, stiffness: 150 });
  const rotateYSpring = useSpring(rotateY, { damping: 20, stiffness: 150 });

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: rotateXSpring, rotateY: rotateYSpring }}
        className="h-full"
      >
        <div
          className="group bg-card p-6 lg:p-4 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden"
          data-cursor-hover
        >
          {/* Gradient overlay on hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
          />

          <motion.div
            className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
            />
            <feature.icon className="text-primary relative z-10" size={24} />
          </motion.div>

          <h3 className="relative text-lg font-bold text-foreground mb-3">
            {feature.title}
          </h3>
          <p className="relative text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="py-2 lg:py-17 bg-secondary/20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4"
            >
              About Us
            </motion.span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
              Building digital experiences{" "}
              <span className="text-primary">that matter</span>
            </h2>

            <motion.p
              className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              GetDigitell is a digital solutions agency dedicated to helping
              startups and businesses establish their online presence. We
              combine speed, quality, and affordability to deliver exceptional
              results.
            </motion.p>

            <motion.p
              className="mt-4 text-muted-foreground text-pretty leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Our team of experienced developers, designers, and strategists
              work together to transform your vision into reality. Whether you
              need a simple landing page or a complex web application, we have
              the expertise to deliver.
            </motion.p>

            {/* Stats with animated counters */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { value: 5, suffix: "+", label: "Years Experience" },
                { value: 150, suffix: "+", label: "Projects Completed" },
                { value: 50, suffix: "+", label: "Happy Clients" },
                { value: 98, suffix: "%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
