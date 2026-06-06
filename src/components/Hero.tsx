"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const ThreeDCanvasSphere = dynamic(
  () => import("./ThreeDCanvasSphere").then((mod) => mod.ThreeDCanvasSphere),
  { ssr: false, loading: () => <div className="w-[450px] h-[450px] rounded-full bg-primary/5 animate-pulse" /> }
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark pt-28 pb-16" aria-label="Jothi Software Solutions hero section">
      {/* Dynamic Background Digital Mesh */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 -z-10" />
      
      {/* Neon ambient backglow coordinates */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] -z-10 animate-pulse duration-[8000ms]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Immersive Tag Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-accent animate-spin duration-[4000ms]" />
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by <strong className="text-foreground">200+ Businesses</strong> in Tamil Nadu
              </span>
            </motion.div>

            {/* Main Premium Typography */}
            <h1 className="text-4xl sm:text-6xl font-heading font-bold leading-[1.1] tracking-tight">
              Jothi Software Solutions - <span className="text-gradient">Digital Marketing Agency</span> in Ambur
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground max-w-xl font-heading">
              SEO, Google Ads, Social Media Marketing, and Website Development in Tamil Nadu
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              We help local businesses improve search visibility, generate qualified leads, and build fast,
              conversion-focused websites with clear reporting and practical digital marketing execution.
            </p>

            {/* CTA Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a href="/contact" className="w-full sm:w-auto">
                <Button variant="hero" size="xl" className="w-full group shadow-glow hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                  Get Free SEO Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
              <a href="/services" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="w-full border-white/10 hover:border-primary/50 text-foreground hover:bg-white/[0.02]">
                  View Our Services
                </Button>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-6 text-xs text-muted-foreground border-t border-white/5"
            >
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Google & Meta Ads Certified Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>100% Secure Campaign Optimization</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right 3D Visual Mesh Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 60 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Rotating Cyber Outer Ring */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent blur-3xl pointer-events-none" />
            
            {/* The 3D Canvas Sphere */}
            <ThreeDCanvasSphere />

            {/* Floating Mini 3D Stat Card - Top Left */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 p-4 rounded-2xl bg-glass border border-white/10 shadow-card flex items-center gap-3 backdrop-blur-md select-none pointer-events-none"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                Up
              </div>
              <div>
                <div className="text-xs text-muted-foreground">ROI Boost</div>
                <div className="text-sm font-bold text-foreground">+320% Avg</div>
              </div>
            </motion.div>

            {/* Floating Mini 3D Stat Card - Bottom Right */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 p-4 rounded-2xl bg-glass border border-white/10 shadow-card flex items-center gap-3 backdrop-blur-md select-none pointer-events-none"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent font-bold">
                5
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Client Rating</div>
                <div className="text-sm font-bold text-foreground">4.9/5.0</div>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Floating Quick Stats - Desktop & Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-md shadow-card"
        >
          {[
            { value: "200+", label: "Happy Clients" },
            { value: "500+", label: "Campaigns Finished" },
            { value: "95%", label: "Retention Rate" },
            { value: "10+", label: "Years in Market" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 border-r last:border-0 border-white/5">
              <div className="text-3xl sm:text-4xl font-heading font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-10"
      >
        <a href="/services" aria-label="Scroll down to services">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
