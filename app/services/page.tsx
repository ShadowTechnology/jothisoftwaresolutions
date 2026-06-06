import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Our Services | Jothi Software Solutions",
  description: "Explore our digital marketing and software development services in Ambur. SEO, Social Media, Google Ads, and Web Development.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      <Services />
      <FAQ />
      <Footer />
    </main>
  );
}
