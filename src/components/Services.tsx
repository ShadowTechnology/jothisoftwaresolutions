import { motion } from "framer-motion";
import { 
  Search, 
  Share2, 
  Target, 
  Globe, 
  Instagram, 
  PenTool 
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with our data-driven SEO strategies. Jothi Software Solutions optimizes your website to attract high-quality organic traffic and boost your visibility in Ambur, Tamil Nadu and beyond.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build a powerful social presence across Facebook, Instagram, LinkedIn & more. We create engaging content and strategies that connect with your target audience and drive real engagement.",
  },
  {
    icon: Target,
    title: "Search Engine Marketing",
    description: "Maximize ROI with precision-targeted Google Ads & PPC campaigns. Our SEM experts deliver ads that convert browsers into loyal customers with measurable results.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Stunning, responsive, and SEO-friendly websites that perform. We build fast-loading digital experiences that captivate visitors and drive conversions for businesses in Tamil Nadu.",
  },
  {
    icon: Instagram,
    title: "Meta Ads Management",
    description: "Unlock the power of Facebook & Instagram advertising. We create highly targeted ad campaigns that reach your ideal customers and deliver exceptional return on ad spend.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Compelling content that tells your brand story. From blogs and videos to graphics and copywriting, we craft content that engages your audience and inspires action.",
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
    <section id="services" className="py-24 bg-gradient-dark relative" aria-label="Digital Marketing Services by Jothi Software Solutions">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-6">
            Our Digital Marketing <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive digital marketing solutions by <strong>Jothi Software Solutions</strong> — tailored to elevate your brand 
            and accelerate your business growth in Ambur, Tamil Nadu and across India.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="group p-8 rounded-2xl bg-glass hover:bg-card transition-all duration-500 shadow-card"
              aria-label={service.title}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-500">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
