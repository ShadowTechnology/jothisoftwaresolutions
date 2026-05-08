import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-6">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to elevate your digital presence? Reach out and let's discuss how we can help your business grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Email Us</h4>
                <p className="text-muted-foreground">jssolution247@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Call Us</h4>
                <p className="text-muted-foreground">+91 89253 50147</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Visit Us</h4>
                <p className="text-muted-foreground">
                  No.10, Bethesda Hospital Road<br />
                  Ambur, Tamil Nadu 635802
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-glass rounded-2xl p-8 shadow-card"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
