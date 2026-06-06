"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Share2, 
  Target, 
  Globe, 
  Instagram, 
  PenTool 
} from "lucide-react";
import Link from "next/link";
import { ThreeDTilt } from "./ThreeDTilt";
import { services as serviceData } from "@/data/services";

const serviceStyles = [
  {
    icon: Search,
    glowColor: "rgba(16, 185, 129, 0.15)", // Emerald Green glow
    borderColor: "group-hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: Share2,
    glowColor: "rgba(139, 92, 246, 0.15)", // Purple glow
    borderColor: "group-hover:border-violet-500/50",
    iconBg: "bg-violet-500/10 text-violet-400",
  },
  {
    icon: Target,
    glowColor: "rgba(245, 158, 11, 0.15)", // Amber glow
    borderColor: "group-hover:border-amber-500/50",
    iconBg: "bg-amber-500/10 text-amber-400",
  },
  {
    icon: Globe,
    glowColor: "rgba(6, 182, 212, 0.15)", // Cyan glow
    borderColor: "group-hover:border-cyan-500/50",
    iconBg: "bg-cyan-500/10 text-cyan-400",
  },
  {
    icon: Instagram,
    glowColor: "rgba(236, 72, 153, 0.15)", // Pink glow
    borderColor: "group-hover:border-pink-500/50",
    iconBg: "bg-pink-500/10 text-pink-400",
  },
  {
    icon: PenTool,
    glowColor: "rgba(99, 102, 241, 0.15)", // Indigo glow
    borderColor: "group-hover:border-indigo-500/50",
    iconBg: "bg-indigo-500/10 text-indigo-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-dark relative overflow-hidden" aria-label="Digital Marketing Services by Jothi Software Solutions">
      
      {/* Decorative neon blobs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-primary/10">
            OUR CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2">
            Dominate Your Niche with Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Proven digital solutions customized to elevate your brand presence, 
            capture high-intent buyer traffic, and scale operations rapidly.
          </p>
        </motion.div>

        {/* 3D Tilt Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {serviceData.map((service, index) => {
            const style = serviceStyles[index];

            return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full"
            >
              <ThreeDTilt 
                maxTilt={10} 
                className="group h-full rounded-2xl bg-glass border border-white/5 shadow-card hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-colors duration-500 overflow-hidden three-d-card"
                data-cursor-label="EXPLORE"
              >
                <div 
                  className="p-8 h-full flex flex-col justify-between"
                  style={{
                    backgroundImage: `radial-gradient(circle at top right, ${style.glowColor}, transparent 55%)`
                  }}
                >
                  <div>
                    {/* Glowing Category Specific Icon Box */}
                    <div className={`w-14 h-14 rounded-2xl ${style.iconBg} flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                      <style.icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-heading font-bold mb-3 text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Micro interaction details: Arrow Indicator */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    aria-label={`Learn more about ${service.title} — ${service.shortTitle} in Ambur, Tamil Nadu`}
                  >
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">-&gt;</span>
                  </Link>

                </div>
              </ThreeDTilt>
            </motion.div>
          );
          })}
        </motion.div>
      </div>
    </section>
  );
};
