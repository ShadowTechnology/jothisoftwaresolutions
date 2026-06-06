"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Why Us", href: "/why-us" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-glass-heavy shadow-card border-b border-white/5" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group" aria-label="Jothi Software Solutions home">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
              <Image
                src="/jsol.jpeg"
                alt="Jothi Software Solutions - Best Digital Marketing Agency in Ambur, Tamil Nadu"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={40}
                height={40}
                priority
              />
            </div>

            <span className="text-xl font-heading font-bold text-foreground tracking-tight">
              Jothi<span className="text-gradient"> Software Solutions</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.04] backdrop-blur-md">
              {navLinks.map((link) => {
                // In a real app with next/navigation, use pathname to determine active state. 
                // For now, styling them equally is safer than incorrect active states.
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative text-sm font-semibold transition-colors duration-300 px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            
            <a href="/contact">
              <Button variant="hero" size="default" className="shadow-glow hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 md:hidden bg-glass-heavy border-b border-white/5 shadow-card"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-heading font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="/contact" onClick={() => setIsOpen(false)} className="mt-4">
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
