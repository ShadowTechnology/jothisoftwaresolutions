"use client";

import { motion } from "framer-motion";
import { ThreeDTilt } from "./ThreeDTilt";
import { Rocket, Sparkles, ShieldCheck } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-dark relative overflow-hidden" aria-label="About Jothi Software Solutions">
      
      {/* Dynamic light glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-primary/10">
            WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2">
            Accelerating Your Digital <span className="text-gradient">Potential</span>
          </h2>
          
          {/* Main Glass Pane */}
          <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-card border border-white/5 relative overflow-hidden text-left space-y-6">
            
            {/* Visual background noise */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Jothi Software Solutions</strong> (also known as{" "}
              <strong className="text-foreground">Jothi Software Solution</strong> and{" "}
              <strong className="text-foreground">JothiSoftware</strong>) is a premier digital marketing agency 
              specializing in premium search optimization, hyper-converting website design, and highly targeted PPC campaigns.
              Based in Ambur, Tamil Nadu, we provide our clients with full-service campaign execution backed by rigorous data tracking.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our experts work closely with your organization to identify optimization bottlenecks and establish 
              automated advertising funnels that convert cold search intents into loyal buyers. We handle your complete online footprint 
              so you can focus on building outstanding physical operations.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed italic border-l-2 border-primary/50 pl-4 bg-white/[0.01] py-3 rounded-r-lg">
              Whether you search for us as Jothi Software Solutions or JothiSoftware, you will discover the identical 
              tenacious focus on delivering measurable client revenue growth.
            </p>

            {/* Premium 3D Core Values */}
            <div className="grid sm:grid-cols-3 gap-4 mt-12 pt-6 border-t border-white/5">
              {[
                { 
                  title: "Innovation", 
                  desc: "Keeping campaigns aligned with current search and advertising changes.",
                  icon: Rocket,
                  glow: "rgba(6, 182, 212, 0.05)",
                  iconColor: "text-cyan-400"
                },
                { 
                  title: "Integrity", 
                  desc: "Clear reporting on performance, spend, and next steps.",
                  icon: ShieldCheck,
                  glow: "rgba(16, 185, 129, 0.05)",
                  iconColor: "text-emerald-400"
                },
                { 
                  title: "Excellence", 
                  desc: "Flawless quality across every visual asset.",
                  icon: Sparkles,
                  glow: "rgba(139, 92, 246, 0.05)",
                  iconColor: "text-violet-400"
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ThreeDTilt
                    maxTilt={8}
                    className="rounded-2xl border border-white/5 bg-white/[0.01] overflow-hidden h-full cursor-pointer hover:border-white/10 transition-colors duration-300"
                  >
                    <div 
                      className="p-5 h-full space-y-3 flex flex-col justify-between"
                      style={{
                        backgroundImage: `radial-gradient(circle at top left, ${value.glow}, transparent 55%)`
                      }}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center ${value.iconColor}`}>
                        <value.icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-foreground text-base tracking-tight">{value.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{value.desc}</p>
                      </div>
                    </div>
                  </ThreeDTilt>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
