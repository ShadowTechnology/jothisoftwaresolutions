import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-glass"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">J</span>
            </div>
            <span className="text-xl font-heading font-bold text-foreground">
              Jothi<span className="text-gradient"> Software</span>
            </span>
          </a> */}
          <a href="/" className="flex items-center gap-2" aria-label="Jothi Software Solutions — Home">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="./jsol.jpeg"
                alt="Jothi Software Solutions — Best Digital Marketing Agency in Ambur, Tamil Nadu"
                className="w-full h-full object-cover"
                width="40"
                height="40"
              />
            </div>

            <span className="text-xl font-heading font-bold text-foreground">
              Jothi<span className="text-gradient"> Software Solutions</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact">
              <Button variant="hero" size="lg">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <Button variant="hero" size="lg" className="w-full">
                  Get Started
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
