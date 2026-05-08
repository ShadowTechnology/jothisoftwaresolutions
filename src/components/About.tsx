import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">About Us</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-8">
            Your Growth is Our <span className="text-gradient">Mission</span>
          </h2>
          
          <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <span className="text-foreground font-semibold">Jothi Software Solutions</span> is a 
              full-service digital marketing agency dedicated to helping businesses thrive in the 
              digital landscape. Founded with a vision to bridge the gap between brands and their 
              audiences, we combine creativity, technology, and strategy to deliver exceptional results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From SEO and social media marketing to website development and content creation, 
              we offer comprehensive solutions that drive real, measurable growth. Our team of 
              passionate experts works closely with each client to understand their unique needs 
              and craft tailored strategies that exceed expectations.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                { title: "Innovation", desc: "Always ahead of trends" },
                { title: "Integrity", desc: "Honest & transparent" },
                { title: "Excellence", desc: "Quality in every detail" },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-muted/30"
                >
                  <h4 className="font-heading font-semibold text-primary text-lg">{value.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
