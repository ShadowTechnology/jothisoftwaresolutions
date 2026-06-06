import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhyUs } from "@/components/WhyUs";

export const metadata: Metadata = {
  title: "Why Choose Us | Jothi Software Solutions",
  description: "Discover why Jothi Software Solutions is the premier digital marketing agency in Ambur, Tamil Nadu. Learn about our data-driven approach to business growth.",
  alternates: {
    canonical: "/why-us",
  },
};

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      <WhyUs />
      <Footer />
    </main>
  );
}
