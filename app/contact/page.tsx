import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Jothi Software Solutions",
  description: "Get in touch with Jothi Software Solutions for SEO, web development, and digital marketing services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
