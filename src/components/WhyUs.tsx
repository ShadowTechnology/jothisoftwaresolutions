import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Zap, Shield, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Data-Driven Results",
    description: "Every strategy is backed by analytics and insights to ensure maximum ROI.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A passionate team of experts committed to your success at every step.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick execution without compromising on quality or attention to detail.",
  },
  {
    icon: Shield,
    title: "Transparent Process",
    description: "Clear communication and regular reports keep you informed always.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term Partnership",
    description: "We grow with you, adapting strategies as your business evolves.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Track Record",
    description: "Hundreds of successful campaigns and happy clients speak for us.",
  },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-6">
              We're Different <br />
              <span className="text-gradient">By Design</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Jothi Software Solutions, we don't just execute campaigns — we craft 
              experiences that resonate. Our approach combines creativity with analytics 
              to deliver results that matter.
            </p>

            <div className="flex flex-wrap gap-4">
              {["10+ Years Experience", "200+ Happy Clients", "24/7 Support"].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-glass hover:bg-muted/50 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
