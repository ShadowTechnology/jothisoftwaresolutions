import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About Us | Jothi Software Solutions",
  description: "Learn more about Jothi Software Solutions, a premier digital marketing agency in Ambur.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
