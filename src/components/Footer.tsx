import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  services: [
    { name: "SEO Optimization", href: "/services/seo-services-ambur" },
    { name: "Social Media Marketing", href: "/services/social-media-marketing-ambur" },
    { name: "Search Engine Marketing", href: "/services/google-ads-ppc-ambur" },
    { name: "Website Development", href: "/services/website-development-ambur" },
    { name: "Meta Ads Management", href: "/services/meta-ads-management-ambur" },
    { name: "Content Creation", href: "/services/content-creation-ambur" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Why Choose Us", href: "/why-us" },
    { name: "Our Services", href: "/services" },
    { name: "Blog & Insights", href: "/blog" },
  ],
  support: [
    { name: "Contact", href: "/contact" },
    { name: "Call: +91 89253 50147", href: "tel:+918925350147" },
    { name: "Email Us", href: "mailto:jssolution247@gmail.com" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/jothisoftwaresolutions", label: "Jothi Software Solutions on Facebook" },
  { icon: Twitter, href: "https://x.com/jothisoftwares", label: "Jothi Software Solutions on X (Twitter)" },
  { icon: Instagram, href: "https://www.instagram.com/jothisoftwaresolutions", label: "Jothi Software Solutions on Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/jothisoftwaresolutions", label: "Jothi Software Solutions on LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@jothisoftwaresolutions", label: "Jothi Software Solutions on YouTube" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border" role="contentinfo" aria-label="Jothi Software Solutions footer">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Image
                  src="/jsol.jpeg"
                  alt="Jothi Software Solutions - Digital Marketing Agency Logo"
                  className="w-full h-full object-cover"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-xl font-heading font-bold text-foreground">
                Jothi Software Solutions
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              <strong>Jothi Software Solutions</strong> (Jothi Software Solution / JothiSoftware) - 
              transforming businesses through innovative digital marketing strategies in Ambur, Tamil Nadu. 
              Your success is our priority.
            </p>
            <p className="text-muted-foreground mb-6 max-w-sm text-sm">
              Address: No.10, Bethesda Hospital Road, Ambur, Tamil Nadu 635802
              <br />Phone: <a href="tel:+918925350147" className="hover:text-primary transition-colors">+91 89253 50147</a>
              <br />Email: <a href="mailto:jssolution247@gmail.com" className="hover:text-primary transition-colors">jssolution247@gmail.com</a>
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company navigation">
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Support navigation">
            <h4 className="font-heading font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jothi Software Solutions (JothiSoftware). All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Best Digital Marketing Agency in Ambur, Tamil Nadu - Made in India
          </p>
        </div>
      </div>
    </footer>
  );
};
