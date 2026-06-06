"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Zap, Shield, HeartHandshake, Award } from "lucide-react";
import { ThreeDTilt } from "./ThreeDTilt";

const features = [
  {
    icon: TrendingUp,
    title: "Data-Driven Results",
    description: "Every campaign is backed by precision analysis to secure the highest ROI for your brand.",
    glow: "rgba(6, 182, 212, 0.05)",
  },
  {
    icon: Users,
    title: "Dedicated Experts",
    description: "A seasoned digital marketing team focused on practical strategy, execution, and measurable growth.",
    glow: "rgba(139, 92, 246, 0.05)",
  },
  {
    icon: Zap,
    title: "Agile Turnaround",
    description: "Flawless rapid-cycle execution. We respect deadlines and push campaigns to market fast.",
    glow: "rgba(236, 72, 153, 0.05)",
  },
  {
    icon: Shield,
    title: "Absolute Transparency",
    description: "Clear client reporting pipelines, monthly analytic digests, and real-time dashboard updates.",
    glow: "rgba(16, 185, 129, 0.05)",
  },
  {
    icon: HeartHandshake,
    title: "Strategic Partnerships",
    description: "We align as partners, constantly adapting strategies as your enterprise expands.",
    glow: "rgba(245, 158, 11, 0.05)",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over 200 satisfied organizations across Tamil Nadu trust us to handle their digital pipelines.",
    glow: "rgba(99, 102, 241, 0.05)",
  },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-card relative overflow-hidden" aria-label="Why Choose Jothi Software Solutions">
      
      {/* Visual cyber backglows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content Pane */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-primary/10">
              OUR EDGE
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2">
              Why Partner with <br />
              <span className="text-gradient">Jothi Software Solutions?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We create practical digital growth systems for local businesses. Our agency combines clear design,
              search optimization, paid media, and reporting to strengthen your presence in Tamil Nadu.
            </p>

            {/* Quick check details */}
            <div className="space-y-3 pt-4">
              {["10+ Years Digital Experience", "200+ Active Clients", "Transparent Monthly Audits"].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center border border-accent/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <ThreeDTilt 
                  maxTilt={8}
                  className="rounded-xl border border-white/5 bg-glass overflow-hidden h-full cursor-pointer hover:border-white/10 group transition-colors duration-300"
                >
                  <div 
                    className="p-6 h-full space-y-4"
                    style={{
                      backgroundImage: `radial-gradient(circle at top left, ${feature.glow}, transparent 50%)`
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-primary group-hover:text-accent group-hover:border-accent/30 transition-all duration-300">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    
                    <h3 className="font-heading font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ThreeDTilt>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
