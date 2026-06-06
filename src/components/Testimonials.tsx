"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Ambur Leathers Ltd.",
    role: "Marketing Director",
    content: "Jothi Software Solutions completely transformed our online presence. Our D2C sales have skyrocketed by 400% since they took over our Meta Ads and SEO strategy.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Bethesda Dental Care",
    role: "Clinic Founder",
    content: "We were struggling to get new patients before working with this team. Their local SEO approach got us ranking #1 for all major dental keywords in our area within 4 months.",
    rating: 5,
  },
  {
    name: "Mohammed Tariq",
    company: "Tariq Enterprises",
    role: "CEO",
    content: "Their Google Ads management slashed our customer acquisition cost by almost half. Highly professional, transparent reporting, and incredible ROI.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    company: "Desai Boutique",
    role: "Owner",
    content: "They built us a stunning, lightning-fast e-commerce website. The design is beautiful, but more importantly, our conversion rate doubled.",
    rating: 4,
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background" aria-label="Client Testimonials">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-primary/10">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-6">
            Trusted by Ambur's <span className="text-gradient">Top Businesses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here is what our clients have to say about the ROI and growth we've delivered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-glass border border-white/5 rounded-3xl p-6 relative group hover:border-primary/20 hover:shadow-card transition-all duration-300 flex flex-col"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-primary/10 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-accent text-accent' : 'text-white/10'}`} 
                  />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="font-bold text-foreground font-heading text-sm">{testimonial.name}</div>
                <div className="text-xs text-primary mt-1">{testimonial.role}, {testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
