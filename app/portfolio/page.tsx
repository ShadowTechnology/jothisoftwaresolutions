import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, BarChart3, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { caseStudies } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Case Studies & Portfolio | Jothi Software Solutions",
  description: "View our digital marketing case studies and portfolio. See how we've helped businesses in Ambur and Tamil Nadu achieve massive ROI with SEO and Paid Ads.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioIndexPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-gradient-dark px-4 pb-20 pt-36 md:px-8 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Portfolio</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-primary font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-primary/10">
              Our Results
            </span>
            <h1 className="mt-5 text-4xl font-heading font-bold md:text-6xl">
              Real Clients. <br />
              <span className="text-gradient">Real Revenue Growth.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We don't just talk about marketing; we execute strategies that generate measurable returns. Explore our latest case studies.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div 
                key={study.slug} 
                className="group flex flex-col lg:flex-row gap-8 bg-glass rounded-3xl border border-white/5 overflow-hidden hover:border-primary/20 hover:shadow-card transition-all duration-500 p-6 md:p-8"
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden relative aspect-video lg:aspect-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image 
                    src={study.imageUrl} 
                    alt={study.title} 
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:hidden" />
                </div>
                
                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-muted-foreground border border-white/10 px-3 py-1 rounded-full">
                      {study.serviceProvided}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                    {study.title}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-8">
                    {study.excerpt}
                  </p>
                  
                  {/* Mini Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    {study.results.slice(0,3).map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl md:text-2xl font-heading font-bold text-foreground">
                          {result.metric}{result.value}
                        </div>
                        <div className="text-[10px] md:text-xs text-muted-foreground mt-1 tracking-wider uppercase truncate">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/portfolio/${study.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-foreground transition-colors mt-auto w-fit"
                  >
                    Read Full Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
